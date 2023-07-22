import React from "react"
import { useState, useEffect } from "react"
import styles from '../styles'
import leftSideBackgroundHowItWorks from '../assets/leftSideBackgroundHowItWorks.png'
import {FcAreaChart} from 'react-icons/fc'
import { WalletButton } from "../components";
import {RiArrowUpDownFill} from 'react-icons/ri'
import {RiDatabase2Line} from 'react-icons/ri'
import {RiSettings2Line} from 'react-icons/ri';

const HowItWorks = ({setPage}) => {

  const [scrollShadow, setScrollShadow] = useState(false);

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

  return (
    <div className={styles.app}>
      <div className="flex bg-purple-500 h-full overflow-hidden max-md:hidden w-fit rounded-l-2xl fixed z-50">
        <img alt='bgrnd' className="z-30 my-auto w-[30px] h-[400px] left-0" src={leftSideBackgroundHowItWorks} />
      </div>
      <div className={styles.mainContainer}>

      <header className={`${styles.containerHeader} ${
            scrollShadow ? "transition border-opacity-1 border-b shadow-sm shadow-[0 1px 1px rgba(0,0,0,1)] duration-500 delay-100" : "transition border-opacity-0 border-b shadow-none duration-500 delay-100" 
          }`}>

          <div className={styles.leftSideHeader}>
           <FcAreaChart onClick={() => window.location.reload()} className='cursor-pointer w-12 h-12 mr-6 my-auto' />
            
            <div className="flex my-auto max-md:w-0">  
              <p onClick={() => setPage('App')} className='mx-8 text-neutral-400 cursor-pointer hover:text-white '>Swap tokens</p>
              <p onClick={() => setPage('Transactions')} className='mx-8 text-neutral-400 hover:text-white cursor-pointer'>Transactions</p>
              <p onClick={() => setPage('HowItWorks')} className='mx-8 text-white font-semibold e cursor-pointer'>How it works</p>
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

        <footer className={styles.containerFooter}>
              <div onClick={() => setPage('App')} className='mx-6 text-neutral-400 hover:text-white  cursor-pointer'><RiArrowUpDownFill className='cursor-pointer mx-auto rotate-90 h-5 w-5 mb-1'/>Swap</div>
              <div onClick={() => setPage('Transactions')} className='mx-6 text-neutral-400 hover:text-white cursor-pointer'><RiDatabase2Line className='cursor-pointer mx-auto h-5 w-5 mb-1'/>Transactions</div>
              <div onClick={() => setPage('HowItWorks')} className='mx-6 text-white  cursor-pointer'><RiSettings2Line className='cursor-pointer mx-auto h-5 w-5 mb-1'/>How it</div>
        </footer>

      </div>
    </div>
  )
}

export default HowItWorks;