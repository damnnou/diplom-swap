import React, {useEffect, useState} from 'react'
import {Contract} from '@ethersproject/contracts';
import {abis} from '@my-app/contracts';
import {ERC20, useContractFunction, useEthers, useTokenAllowance, useTokenBalance} from '@usedapp/core';
import {ethers} from 'ethers';
import {formatUnits, parseUnits} from 'ethers/lib/utils';
import {RiArrowUpDownFill} from 'react-icons/ri'
import { getAvailableTokens, getCounterpartTokens, findPoolByTokens, isOperationPending, getFailureMessage, getSuccessMessage, } from '../utils';
import tokenAddress from '../utils/tokenAdresses'; 
import styles from '../styles'
import { client } from '../datebase/sanityClient';
import { ROUTER_ADDRESS } from '../config';
import {AmountOut, AmountIn} from './index';


const Exchange = ({pools}) => { 
  const  { account } = useEthers();
  const [fromValue, setFromValue] = useState("0");
  const [fromToken, setFromToken] = useState(pools[0].token0Address);
  const [toToken, setToToken] = useState('');
  const [resetState, setResetState] = useState(false);

  const fromValueBigNumber = parseUnits(fromValue);
  const availableTokens = getAvailableTokens(pools);
  const counterpartTokens = getCounterpartTokens(pools, fromToken);
  const pairAddress = findPoolByTokens(pools, fromToken, toToken)?.address ?? ""; 

  const routerContract = new Contract(ROUTER_ADDRESS, abis.router02);
  const fromTokenContract = new Contract(fromToken, ERC20.abi);
  const fromTokenBalance = useTokenBalance(fromToken,account);
  const toTokenBalance = useTokenBalance(toToken, account);
  const tokenAllowance = useTokenAllowance(fromToken, account, ROUTER_ADDRESS) || parseUnits('0');
  const approvedNeeded = fromValueBigNumber.gt(tokenAllowance);
  const fromValueIsGreaterThan0 = fromValueBigNumber.gt(parseUnits('0'));
  const hasEnoughBalance = fromValueBigNumber.lte(fromTokenBalance ?? parseUnits('0'));

  const { state: swapApproveState, send: swapApproveSend } = useContractFunction(fromTokenContract, "approve", {
    transactionName: 'onApproveRequested',
    gasLimitBufferPercentage: 10,
  });

  const { state: swapExecuteState, send: swapExecuteSend } = useContractFunction(routerContract, "swapExactTokensForTokens", {
    transactionName: 'swapExactTokensForTokens',
    gasLimitBufferPercentage: 10,
  });

  const isApproving = isOperationPending(swapApproveState);
  const isSwapping = isOperationPending(swapExecuteState);
  const canApprove = !isApproving && approvedNeeded;
  const canSwap = !approvedNeeded && !isSwapping && fromValueIsGreaterThan0 && hasEnoughBalance;

  const successMessage = getSuccessMessage(swapApproveState, swapExecuteState);
  const failureMessage = getFailureMessage(swapApproveState, swapExecuteState);

  useEffect(() => {
    if (!account) return
    ;(async() => {
      const userDoc = {
        _type: 'users',
        _id: account,
        userName: 'Unnamed',
        address: account
      }
      await client.createIfNotExists(userDoc)
    })()
  }, [account])
  

  const saveTransaction = async (
    txHash,
    account,
    fromToken,
    toToken,
    amount
  ) => {
    const txDoc = {
      _type: 'transactions',
      _id: txHash,
      account: account,
      fromToken: fromToken,
      toToken: toToken,
      timestamp: new Date(Date.now()).toISOString(),
      txHash: txHash,
      amount: Number(formatUnits(amount || parseUnits('0'))),
    }

    await client.createIfNotExists(txDoc)

    await client
      .patch(account)
      .setIfMissing({ transactions: [] })
      .insert('after', 'transactions[-1]', [
        {
          _key: txHash,
          _ref: txHash,
          _type: 'reference',
        },
      ])
      .commit()

    return
  }

  const onApproveRequested = () => {
    swapApproveSend(ROUTER_ADDRESS, ethers.constants.MaxUint256);
  }

  const onSwapRequested = async () => {
    await swapExecuteSend(
      fromValueBigNumber,
      0,
      [fromToken, toToken],
      account,
      Math.floor(Date.now() / 1000) + 60 * 2
    )
    .then(async (transaction) => {
      const txHash =  transaction.transactionHash;
      await saveTransaction(
        txHash,
        account,
        fromToken,
        toToken,
        fromValueBigNumber
      )
      setFromValue("0");
    })
    .catch(e => console.error(e));

  }

  const onFromValueChange = (value) => {
    const trimmedValue = value.trim();

    try {
      if(trimmedValue) {
        parseUnits(value);
        setFromValue(value)
      }
    } catch(error) {
      console.error(error);
    }
  }

  const onFromTokenChange = (value) => {
    setFromToken(value)
  }

  const onToTokenChange = (value) => {
    setToToken(value)
  }

  useEffect(() => {
    if (failureMessage || successMessage) {
      setTimeout(() => {
        setResetState(true);
        setFromValue("0");
      }, 5000)
    }

  }, [failureMessage, successMessage])
  

  return (
    <div className={styles.exchangeWindow}>

      <div className='flex flex-col max-lg:invisible mt-28 mr-16'>
        <p className='text-neutral-300 pb-6 pl-8'>Trending swaps</p>
        <button 
        onClick={() => {
          onFromTokenChange(tokenAddress.MGOTU)
          onToTokenChange(tokenAddress.RUB)
        }}
        className='ml-auto text-neutral-400 p-2 w-32 mb-4 h-fit focus:bg-[#494949] border border-neutral-700 rounded-lg'>
        MGOTU to RUB</button>
        <button 
        onClick={() => {
          onFromTokenChange(tokenAddress.USD)
          onToTokenChange(tokenAddress.RUB)
        }}
        className='ml-auto text-neutral-400 p-2 w-32 mb-4 h-fit focus:bg-[#494949] border border-neutral-700 rounded-lg'>
        USD to RUB</button>
        <button 
        onClick={() => {
          onFromTokenChange(tokenAddress.DBDZ)
          onToTokenChange(tokenAddress.WETH)
        }}
        className='ml-auto text-neutral-400 p-2 w-32 mb-4 h-fit focus:bg-[#494949] border border-neutral-700 rounded-lg'>
        DBDZ to WETH</button>
        <button 
        onClick={() => {
          onFromTokenChange(tokenAddress.WETH)
          onToTokenChange(tokenAddress.MEOW)
        }}
        className='ml-auto text-neutral-400 p-2 w-32 mb-4 h-fit focus:bg-[#494949] border border-neutral-700 rounded-lg'>
        WETH to MEOW</button>
      </div>

      <div className='flex flex-col justify-start lg:w-[550px] 2xl:w-[600px]'>
      <div className='flex flex-col mt-12 '>
      <p className='text-neutral-400 ml-4 mb-2'>From</p>
      <div className={styles.exchangeInput}>

      <AmountIn
        value={fromValue}
        onChange={onFromValueChange}
        currencyValue={fromToken}
        onSelect={onFromTokenChange}
        currencies={availableTokens}
        isSwapping={isSwapping && hasEnoughBalance}
        tokenBalance={fromTokenBalance}
        account = {account}
        />

      </div>
      
      </div>

      <div className='mx-auto'>
        <RiArrowUpDownFill 
        onClick={() => {
          if (toToken) {
          onFromTokenChange(toToken)
          onToTokenChange(fromToken)
          }
        }}
        className='cursor-pointer mx-auto -mb-1 mt-5 text-white h-5 w-5'/>
      </div>
      <div className='flex flex-col'>
      <p className='text-neutral-400 ml-4 mb-2'>To</p>
      <div className={styles.exchangeInput}>
        <AmountOut
          account={account}
          fromToken={fromToken}
          toToken={toToken}
          amountIn={fromValueBigNumber}
          pairContract={pairAddress}
          currencyValue={toToken}
          onSelect={onToTokenChange}
          currencies={counterpartTokens}
          tokenBalance={toTokenBalance}
        />
        
      </div>
      </div>

      {approvedNeeded && !isSwapping ? (
        <button 
          className={canApprove ? styles.activeSwapButton : styles.disabledSwapButton}
          disabled={!canApprove}
          onClick={onApproveRequested}
          >
          {isApproving ? "Approving..." : "Approve"}
        </button>
      ) :

      (<button 
        className={canSwap ? styles.activeSwapButton : styles.disabledSwapButton}
        disabled={!canSwap}
        onClick={onSwapRequested}
        >
        {isSwapping ? "Swapping..." : hasEnoughBalance ? "Swap" : "Insufficient balance"}
      </button>)
}

      {failureMessage && !resetState ? (
        <p className={styles.message}>{"failureMessage"}</p>
      ) : successMessage ? (
        <p className={styles.message}>{"Swap executed successfully!"}</p>
      ) : ""} 
      </div>
    </div>
  )
}

export default Exchange;