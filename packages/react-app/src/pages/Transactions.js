import React from "react"
import { useState, useEffect } from "react";
import Web3 from 'web3'
import { abis } from '@my-app/contracts'
import styles from '../styles'
import leftSideBackgroundTransaction from '../assets/leftSideBackgroundTransactions.png'
import {FcAreaChart} from 'react-icons/fc'
import { WalletButton } from "../components";
import {RiArrowUpDownFill} from 'react-icons/ri'
import {RiDatabase2Line} from 'react-icons/ri'
import {RiSettings2Line} from 'react-icons/ri';
import {client} from '../datebase/sanityClient';

import TransactionMapping from "../components/TransactionMapping";

const Transactions = ({setPage}) => {

  const [scrollShadow, setScrollShadow] = useState(false);

  const contractABI = abis.erc20.abi; // ABI контракта токена
  const web3 = new Web3('https://eth-goerli.g.alchemy.com/v2/HMHzefwZIJeG4VKqKaD7AjCltzcan0Zn');



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollShadow(true);
      } else {
        setScrollShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    const fetchTransactionData = async () => {
      // Выполнение запроса к базе данных Sanity
      const query = `*[_type == "transactions"] | order(timestamp desc)`;
      const result = await client.fetch(query);

      // Сохранение данных транзакций в переменную состояния
      setTransactionHistory(result);
    };

    fetchTransactionData();
    console.log('sanity')
  }, []);

  return (
    <div className={styles.app}>
      <div className="flex bg-blue-600 max-md:hidden overflow-hidden h-screen w-fit rounded-l-2xl fixed z-50">
        <img alt="back" className="z-30 my-auto w-[30px] h-[400px]" width={30} src={leftSideBackgroundTransaction} />
      </div>
      <div className={styles.mainContainer}>

      <header className={`${styles.containerHeader} ${
            scrollShadow ? "transition border-opacity-1 border-b shadow-sm shadow-[0 1px 1px rgba(0,0,0,1)] duration-500 delay-100" : "transition border-opacity-0 border-b shadow-none duration-500 delay-100" 
          }`}>

          <div className={styles.leftSideHeader}>
           <FcAreaChart onClick={() => window.location.reload()} className='cursor-pointer w-12 h-12 mr-6 my-auto' />
            
            <div className="flex my-auto max-md:w-0">  
              <p onClick={() => setPage('App')} className='mx-8 text-neutral-400 cursor-pointer hover:text-white '>Swap tokens</p>
              <p onClick={() => setPage('Transactions')} className='mx-8  text-white font-semibold  cursor-pointer'>Transactions</p>
              <p onClick={() => setPage('HowItWorks')} className='mx-8 text-neutral-400 hover:text-white cursor-pointer'>How it works</p>
            </div>
          </div>

          <div className={styles.rightSideHeader}>
            <WalletButton />
          </div>

        </header> 

        <div className={styles.containerBody}>
          <div className={styles.transactionPage}>
            <p className="flex w-fit text-purple-400 text-xl py-2 font-semibold items-center border-b-[3px] border-purple-400"><RiArrowUpDownFill className="rotate-90 mr-2"/> Transactions</p>
            <table className={styles.table}> 

              <thead className={styles.tableHeader}>
              <tr className='w-[70%] overflow-hidden text-neutral-400 mr-0'><td>TRANSACTION</td></tr>
              <tr className='w-[30%] overflow-hidden text-neutral-400 ml-24'><td>VALUE</td></tr>
              <tr className='w-[50%] overflow-hidden text-neutral-400 ml-24'><td>FROM TOKEN</td></tr>
              <tr className='w-[50%] overflow-hidden text-neutral-400 ml-24'><td>TO TOKEN</td></tr>
              <tr className='w-[30%] overflow-hidden text-neutral-400 mx-24'><td>ACCOUNT</td></tr>
              <tr className='w-[35%] overflow-hidden text-neutral-400 mr-12'><td></td></tr>
              </thead>


              {transactionHistory?.map((transaction, index) => (
                <TransactionMapping key={index} contractABI={contractABI} web3={web3} transaction={transaction}/>
              )
              )}


            </table>
            
          </div>
        </div>

        <footer className={styles.containerFooter}>
              <div onClick={() => setPage('App')} className='mx-6 text-neutral-400 hover:text-white  cursor-pointer'><RiArrowUpDownFill className='cursor-pointer mx-auto rotate-90 h-5 w-5 mb-1'/>Swap</div>
              <div onClick={() => setPage('Transactions')} className='mx-6 text-white cursor-pointer'><RiDatabase2Line className='cursor-pointer mx-auto h-5 w-5 mb-1'/>Transactions</div>
              <div onClick={() => setPage('HowItWorks')} className='mx-6 text-neutral-400 hover:text-white cursor-pointer'><RiSettings2Line className='cursor-pointer mx-auto h-5 w-5 mb-1'/>How it</div>
        </footer>

      </div>
    </div>
  )
}

export default Transactions