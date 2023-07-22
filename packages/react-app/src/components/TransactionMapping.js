import {useEffect, useState} from 'react'
import styles from '../styles'
import { shortenAddress } from '@usedapp/core';
import { useAmountsOut } from '../utils'
import {formatUnits, parseUnits} from 'ethers/lib/utils';



const TransactionMapping = ({transaction, contractABI, web3}) => {

    const [fromSymbol, setFromSymbol] = useState('');
    const [toSymbol, setToSymbol] = useState('');

    const fromValueBigNumber = parseUnits(transaction.amount.toString());
    const amountOut = useAmountsOut(transaction.pairContract, fromValueBigNumber, transaction.fromToken, transaction.toToken) ?? 0;

    console.log('component rendered')

    const formatTimeAgo = (time) => {
      if (time < 60) {
        return `${time} sec ago`;
      } else if (time < 3600) {
        const minutes = Math.floor(time / 60);
        return `${minutes} min ago`;
      } else if (time < 86400) {
        const hours = Math.floor(time / 3600);
        return `${hours} hr ago`;
      } else if (time < 604800) {
        const days = Math.floor(time / 86400);
        return `${days} day ago`;
      } else if (time < 2592000) {
        const weeks = Math.floor(time / 604800);
        return `${weeks} week ago`;
      } else {
        const months = Math.floor(time / 2592000);
        return `${months} month ago`;
      }
    };
    
      useEffect(() => {
        const fetchSymbol = async () => {

          const contractAddressFrom = transaction.fromToken; // Получаем символ токена from
          const contractFrom = new web3.eth.Contract(contractABI, contractAddressFrom);
          const fromSymbol = await contractFrom.methods.symbol().call();

          const contractAddressTo = transaction.toToken; // Получаем символ токена from
          const contractTo = new web3.eth.Contract(contractABI, contractAddressTo);
          const toSymbol = await contractTo.methods.symbol().call();

          setFromSymbol(fromSymbol);
          setToSymbol(toSymbol);
        };
      
        fetchSymbol();
        console.log('render')
      }, []);
      

    return (
    <tbody onClick={() => {
      window.open(`https://goerli.etherscan.io/tx/${transaction.txHash}`);
      console.log(transaction)
      }} className={styles.tableBody}>
    <tr className='w-[70%] overflow-hidden text-neutral-300 mr-0 font-semibold'><td>Swap {fromSymbol} to {toSymbol}</td></tr>
    <tr className='w-[30%] overflow-hidden text-neutral-400 ml-24'><td>{transaction.amount}</td></tr>
    <tr className='w-[50%] overflow-hidden text-neutral-400 ml-24'><td>{transaction.amount} {fromSymbol}</td></tr>
    <tr className='w-[50%] overflow-hidden text-neutral-400 ml-24'><td>{transaction.pairContract && Number(formatUnits(amountOut)).toFixed(5)} {toSymbol}</td></tr>
    <tr className='w-[30%] overflow-hidden mx-24 text-white'><td>{shortenAddress(transaction.account)}</td></tr>
    <tr className='w-[35%] overflow-hidden text-neutral-400 mr-12'><td>{formatTimeAgo(Math.floor((new Date() - new Date(transaction.timestamp)) / 1000))}</td></tr>
    </tbody>
    
    )
}

export default TransactionMapping