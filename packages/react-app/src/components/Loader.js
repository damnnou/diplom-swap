import React from 'react'
import styles from '../styles'
import ethereumLogo from '../assets/ethereumLogo.png'
import { useEthers } from '@usedapp/core';



const Loader = ({title}) => {

  const { account, activateBrowserWallet, deactivate } = useEthers();

  return (
    <div onClick={() => {
      if (!account) {
          activateBrowserWallet();
      } else {
          deactivate();
      }
  }} className={styles.swapWindow}>
        <img className='mx-auto w-36 mt-auto mb-12' alt='eth logo' src={ethereumLogo} />
        <p className='text-white uppercase my-auto mx-auto '>{title}</p>
    </div>
  )
}

export default Loader