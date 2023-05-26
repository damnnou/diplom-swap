import React from "react"
import { useEthers } from "@usedapp/core";
import {usePools} from './hooks'
import styles from './styles'
import leftSideBackground from './assets/leftSideBackground.png'
import {FcAreaChart} from 'react-icons/fc'
import { Exchange, Loader, WalletButton } from "./components";

const App = () => {
  const { account } = useEthers();
  const [loading, pools] = usePools();
  const poolsLoading = false;

  return (
    <div className={styles.app}>
      <div className="flex bg-green-400 h-screen w-fit rounded-l-2xl">
        <img className="my-auto w-auto h-[50%]" width={100} src={leftSideBackground} />
      </div>
      <div className={styles.mainContainer}>

        <header className={styles.containerHeader}>

          <div className={styles.leftSideHeader}>
            <FcAreaChart className='w-14 h-14 mr-24' />
            
            <div className="flex my-auto">
              <p className='mx-8 text-neutral-400 text-white cursor-pointer text-lg'>Swap tokens</p>
              <p className='mx-8 text-neutral-400 hover:text-white cursor-pointer text-lg'>Liquidity Pools</p>
              <p className='mx-8 text-neutral-400 hover:text-white cursor-pointer text-lg'>How it works</p>
            </div>
          </div>

          <div className={styles.rightSideHeader}>
            <WalletButton />
          </div>

        </header>

        <div className={styles.containerBody}>
          {account? (
            loading ? (
              <Loader title="Loading pools, please wait!" />
            ) : <Exchange pools={pools} />
          ) : <Loader title = "Please connect your wallet" /> }
        </div>

      </div>
    </div>
  )
}

export default App;