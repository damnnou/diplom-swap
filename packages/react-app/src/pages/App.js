import React from "react"
import { useState, useEffect } from "react";
import { useEthers } from "@usedapp/core";
import {usePools} from '../hooks'
import styles from '../styles'
import leftSideBackground from '../assets/leftSideBackground.png'
import {FcAreaChart} from 'react-icons/fc'
import { Exchange, Loader, WalletButton } from "../components";
import {RiArrowUpDownFill} from 'react-icons/ri'
import {RiDatabase2Line} from 'react-icons/ri'
import {RiSettings2Line} from 'react-icons/ri';


const App = ({setPage}) => {
  const { account } = useEthers();
  const [loading, pools] = usePools();
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
      <div className="flex bg-green-400 h-full overflow-hidden max-md:hidden w-fit rounded-l-2xl fixed z-50">
        <img alt='bgrnd' className="z-30 my-auto w-[30px] h-[400px] left-0" src={leftSideBackground} />
      </div>
      <div className={styles.mainContainer}>

        <header className={`${styles.containerHeader} ${
            scrollShadow ? "transition border-opacity-1 border-b shadow-sm shadow-[0 1px 1px rgba(0,0,0,1)] duration-500 delay-100" : "transition border-opacity-0 border-b shadow-none duration-500 delay-100" 
          }`}>

          <div className={styles.leftSideHeader}>
           <FcAreaChart onClick={() => window.location.reload()} className='cursor-pointer w-12 h-12 mr-6 my-auto' />
            
            <div className="flex my-auto max-md:hidden">  
              <p onClick={() => setPage('App')} className='mx-8 text-white font-semibold cursor-pointer'>Swap tokens</p>
              <p onClick={() => setPage('Transactions')} className='mx-8 text-neutral-400 hover:text-white cursor-pointer'>Transactions</p>
              <p onClick={() => setPage('HowItWorks')} className='mx-8 text-neutral-400 hover:text-white cursor-pointer'>How it works</p>
            </div>
          </div>

          <div className={styles.rightSideHeader}>
            <WalletButton />
          </div>

        </header>

        <div className={styles.containerBody}>
          {account? (
            loading ? (
              <Loader title="Loading pools, please wait" />
            ) : <Exchange pools={pools} />
          ) : <Loader title = "Please connect your wallet" /> }
        </div>

        <footer className={styles.containerFooter}>
              <div onClick={() => setPage('App')} className='mx-6 text-white  cursor-pointer'><RiArrowUpDownFill className='cursor-pointer mx-auto rotate-90 text-white h-5 w-5 mb-1'/>Swap</div>
              <div onClick={() => setPage('Transactions')} className='mx-6 text-neutral-400 hover:text-white cursor-pointer'><RiDatabase2Line className='cursor-pointer mx-auto h-5 w-5 mb-1'/>Transactions</div>
              <div onClick={() => setPage('HowItWorks')} className='mx-6 text-neutral-400 hover:text-white cursor-pointer'><RiSettings2Line className='cursor-pointer mx-auto h-5 w-5 mb-1'/>How it</div>
        </footer>
      </div>
    </div>
  )
}

export default App;