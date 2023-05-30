import React from "react"
import { useState, useEffect } from "react";
import { useEthers } from "@usedapp/core";
import {usePools} from '../hooks'
import styles from '../styles'
import leftSideBackgroundTransaction from '../assets/leftSideBackgroundTransactions.png'
import {FcAreaChart} from 'react-icons/fc'
import { Exchange, Loader, WalletButton } from "../components";

const Transactions = ({setPage}) => {
  return (
    <div className={styles.app}>
      <div className="flex bg-blue-600 h-screen w-fit rounded-l-2xl fixed z-30">
        <img className="z-30 my-auto w-auto h-[90%]" width={30} src={leftSideBackgroundTransaction} />
      </div>
      <div className={styles.mainContainer}>

        <header className={styles.containerHeader}>

          <div className={styles.leftSideHeader}>
           <FcAreaChart onClick={() => setPage('App')} className='cursor-pointer w-14 h-14 mr-24' />
            
           <div className="flex my-auto">  
              <p onClick={() => setPage('App')} className='mx-8 text-neutral-400 hover:text-white cursor-pointer text-lg'>Swap tokens</p>
              <p onClick={() => setPage('Transactions')} className='mx-8 text-neutral-400 text-white hover:text-white cursor-pointer text-lg'>Liquidity Pools</p>
              <p className='mx-8 text-neutral-400 hover:text-white cursor-pointer text-lg'>How it works</p>
            </div>
          </div>

          <div className={styles.rightSideHeader}>
            <WalletButton />
          </div>

        </header>

        <div className={styles.containerBody}>
          
        </div>

      </div>
    </div>
  )
}

export default Transactions