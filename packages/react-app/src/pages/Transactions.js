import React from "react"
import { useState, useEffect } from "react";
import styles from '../styles'
import leftSideBackgroundTransaction from '../assets/leftSideBackgroundTransactions.png'
import {FcAreaChart} from 'react-icons/fc'
import { WalletButton } from "../components";
import {RiArrowUpDownFill} from 'react-icons/ri';
import {client} from '../datebase/sanityClient';

import TransactionMapping from "./TransactionMapping";

const Transactions = ({page, setPage}) => {

  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    const fetchTransactionData = async () => {
      // Выполнение запроса к базе данных Sanity
      const query = `*[_type == "transactions"]`;
      const result = await client.fetch(query);

      // Сохранение данных транзакций в переменную состояния
      setTransactionHistory(result);
    };

    fetchTransactionData();
  }, []);

  return (
    <div className={styles.app}>
      <div className="flex bg-blue-600 h-screen w-fit rounded-l-2xl fixed z-30">
        <img alt="back" className="z-30 my-auto w-auto h-[90%]" width={30} src={leftSideBackgroundTransaction} />
      </div>
      <div className={styles.mainContainer}>

        <header className={styles.containerHeader}>

        <div className={styles.leftSideHeader}>
           <FcAreaChart onClick={() => setPage('App')} className='cursor-pointer w-12 h-12 mr-6' />
            
            <div className="flex my-auto">  
              <p onClick={() => setPage('App')} className='mx-8 text-neutral-400 hover:text-white  cursor-pointer'>Swap tokens</p>
              <p onClick={() => setPage('Transactions')} className='mx-8 text-white font-semibold hover:text-white cursor-pointer'>Transactions</p>
              <p className='mx-8 text-neutral-400 hover:text-white cursor-pointer'>How it works</p>
            </div>
          </div>

          <div className={styles.rightSideHeader}>
            <WalletButton />
          </div>

        </header>

        <div className={styles.containerBody}>
          <div className={styles.transactionPage}>
            <p className="flex w-fit text-purple-400 text-xl py-2 font-semibold items-center border-b-[3px] border-purple-400"><RiArrowUpDownFill className="rotate-90 mr-2"/> Transactions</p>
            <table> 

              <thead className={styles.tableHeader}>
              <tr className='w-[70%] overflow-hidden text-neutral-400 mr-0'><td>TRANSACTION</td></tr>
              <tr className='w-[30%] overflow-hidden text-neutral-400 ml-24'><td>VALUE</td></tr>
              <tr className='w-[50%] overflow-hidden text-neutral-400 ml-24'><td>FROM TOKEN</td></tr>
              <tr className='w-[50%] overflow-hidden text-neutral-400 ml-24'><td>TO TOKEN</td></tr>
              <tr className='w-[30%] overflow-hidden text-neutral-400 mx-24'><td>ACCOUNT</td></tr>
              <tr className='w-[30%] overflow-hidden text-neutral-400 mr-12'><td></td></tr>
              </thead>


              {transactionHistory?.reverse().map((transaction, index) => (
                <TransactionMapping key={index} transaction={transaction}/>
              )
              )}

            </table>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Transactions