import React from "react"
import { useState, useEffect } from "react";
import { useEthers } from "@usedapp/core";
import {usePools} from '../hooks'
import styles from '../styles'
import leftSideBackground from '../assets/leftSideBackground.png'
import {FcAreaChart} from 'react-icons/fc'
import { Exchange, Loader, WalletButton } from "../components";

const App = ({setPage}) => {
  const { account } = useEthers();
  const [loading, pools] = usePools();
  const poolsLoading = false;
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
      <div className="flex bg-green-400 h-screen w-fit rounded-l-2xl fixed z-30">
        <img className="z-30 my-auto w-auto h-[62%]" src={leftSideBackground} />
      </div>
      <div className={styles.mainContainer}>

        <header className={`${styles.containerHeader} ${
            scrollShadow ? "shadow-md" : ""
          }`}>

          <div className={styles.leftSideHeader}>
           <FcAreaChart onClick={() => setPage('App')} className='cursor-pointer w-12 h-12 mr-6' />
            
            <div className="flex my-auto">  
              <p onClick={() => setPage('App')} className='mx-8 text-neutral-400 text-white font-semibold cursor-pointer'>Swap tokens</p>
              <p onClick={() => setPage('Transactions')} className='mx-8 text-neutral-400 hover:text-white cursor-pointer'>Liquidity Pools</p>
              <p className='mx-8 text-neutral-400 hover:text-white cursor-pointer'>How it works</p>
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

      </div>
    </div>
  )
}

export default App;