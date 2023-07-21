import {useEffect, useState} from 'react'
import Web3 from 'web3'
import { abis } from '@my-app/contracts'
import styles from '../styles'
import { shortenAddress } from '@usedapp/core';

const TransactionMapping = ({transaction}) => {

    const web3 = new Web3('https://eth-goerli.g.alchemy.com/v2/HMHzefwZIJeG4VKqKaD7AjCltzcan0Zn');
    const [fromSymbol, setFromSymbol] = useState('');
    const [toSymbol, setToSymbol] = useState('');

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
        if (days > 1) {
          return `${days} days ago`;
        } else {
          return `${days} day ago`;
        }
      } else {
        const weeks = Math.floor(time / 604800);
        return `${weeks} week ago`;
      }
    };

      const getSymbolFromToken = async () => {
        const contractAddress = transaction.fromToken; // Адрес контракта токена
        const contractABI = abis.erc20.abi; // ABI контракта токена
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const symbol = await contract.methods.symbol().call();
        return symbol;
      };
    
      const getSymbolToToken = async () => {
        const contractAddress = transaction.toToken; // Адрес контракта токена
        const contractABI = abis.erc20.abi; // ABI контракта токена
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const symbol = await contract.methods.symbol().call();
        return symbol;
      };
    
      useEffect(() => {
        const fetchSymbol = async () => {
          const symbol = await getSymbolFromToken();
          setFromSymbol(symbol);
        };
      
        fetchSymbol();
      }, [transaction.fromToken]);
      
      useEffect(() => {
        const fetchSymbol = async () => {
          const symbol = await getSymbolToToken();
          setToSymbol(symbol);
        };
      
        fetchSymbol();
      }, [transaction.toToken]);

    return (
    <tbody onClick={() => {
      window.open(`https://goerli.etherscan.io/tx/${transaction.txHash}`);
      }} className={styles.tableBody}>
    <tr className='w-[70%] overflow-hidden text-neutral-300 mr-0 font-semibold'><td>Swap {fromSymbol} to {toSymbol}</td></tr>
    <tr className='w-[30%] overflow-hidden text-neutral-400 ml-24'><td>{transaction.amount}</td></tr>
    <tr className='w-[50%] overflow-hidden text-neutral-400 ml-24'><td>{fromSymbol}</td></tr>
    <tr className='w-[50%] overflow-hidden text-neutral-400 ml-24'><td>{toSymbol}</td></tr>
    <tr className='w-[30%] overflow-hidden text-neutral-400 mx-24 text-white'><td>{shortenAddress(transaction.account)}</td></tr>
    <tr className='w-[35%] overflow-hidden text-neutral-400 mr-12'><td>{formatTimeAgo(Math.floor((new Date() - new Date(transaction.timestamp)) / 1000))}</td></tr>
    </tbody>
    
    )
}

export default TransactionMapping