import React from "react"
import styles from '../styles'
import leftSideBackgroundHowItWorks from '../assets/leftSideBackgroundHowItWorks.png'
import {FcAreaChart} from 'react-icons/fc'
import { WalletButton } from "../components";
import {RiSettings2Line} from 'react-icons/ri';

const HowItWorks = ({setPage}) => {

  return (
    <div className={styles.app}>
      <div className="flex bg-purple-500 h-screen w-fit rounded-l-2xl fixed z-30">
        <img alt="back" className="z-30 my-auto w-auto h-[73%]" width={30} src={leftSideBackgroundHowItWorks} />
      </div>
      <div className={styles.mainContainer}>

        <header className={styles.containerHeader}>

        <div className={styles.leftSideHeader}>
           <FcAreaChart onClick={() => setPage('App')} className='cursor-pointer w-12 h-12 mr-6' />
            
            <div className="flex my-auto">  
              <p onClick={() => setPage('App')} className='mx-8 text-neutral-400 hover:text-white  cursor-pointer'>Swap tokens</p>
              <p onClick={() => setPage('Transactions')} className='mx-8 text-neutral-400 font-semibold hover:text-white cursor-pointer'>Transactions</p>
              <p onClick={() => setPage('HowItWorks')} className='mx-8 text-white hover:text-white cursor-pointer'>How it works</p>
            </div>
          </div>

          <div className={styles.rightSideHeader}>
            <WalletButton />
          </div>

        </header>

        <div className={styles.containerBody}>
          <div className={styles.transactionPage}>
            <p className="flex w-fit text-cyan-300 text-xl py-2 font-semibold items-center border-b-[3px] border-cyan-300"><RiSettings2Line className="mr-2"/>How it works</p>
            <h1 className="text-2xl text-neutral-200 my-6">Process Description:</h1>

            <div className="mb-6 text-neutral-400">
            <h3 className="text-lg text-neutral-300">Step 1: Token Selection:</h3>
            Choose the token you want to exchange. We offer a wide selection of available tokens for exchange.
            Select the token you want to exchange for the chosen token.
            </div>

            <div className="mb-6 text-neutral-400">
            <h3 className="text-lg text-neutral-300">Step 2: Input the Amount:</h3>
            Enter the amount of the selected token that you want to exchange.
            Ensure you have sufficient funds to complete the transaction.
            </div>
            
            <div className="mb-6 text-neutral-400">
            <h3 className="text-lg text-neutral-300">Step 3: Authorization Confirmation:</h3>
            If required, the system will request permission to access your tokens. Click "Allow" to confirm the authorization.
            </div>

            <div className="mb-6 text-neutral-400">
            <h3 className="text-lg text-neutral-300">Step 4: Exchange Confirmation:</h3>
            After confirming the authorization, you will be redirected to the exchange confirmation page.
            Review the transaction details and ensure they are correct.
            Click "Confirm Exchange" to finalize the operation.
            </div>

            <div className="mb-6 text-neutral-400">
            <h3 className="text-lg text-neutral-300">Step 5: Waiting for Execution:</h3>
            Once the operation is confirmed, you will be redirected to the waiting for execution page.
            The transaction will be processed and executed on the Ethereum network.
            Please be patient as this may take some time depending on the current network load.
            </div>

            <div className="mb-6 text-neutral-400">
            <h3 className="text-lg text-neutral-300">Step 6: Exchange Completion:</h3>
            When the transaction is successfully executed, you will receive a notification confirming the completion of the exchange.
            The tokens will be transferred to your account according to the exchange terms.
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HowItWorks;