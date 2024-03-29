import React, {useState, useEffect} from 'react'
import { shortenAddress, useEthers, useLookupAddress } from '@usedapp/core';
import styles from '../styles';

const WalletButton = () => {
    const [ accountAddress , setAccountAddress] = useState('');
    const { ens } = useLookupAddress();
    const { account, activateBrowserWallet, deactivate } = useEthers();

    useEffect(() => {
        if (ens) {
            setAccountAddress(ens);
        } else if (account) {
            setAccountAddress(shortenAddress(account));
        } else {
            setAccountAddress('');
        }
    }, [ens, account]);
    
  return (
    <button 
    className={styles.walletButton}
    onClick={() => {
        if (!account) {
            activateBrowserWallet();
        } else {
            deactivate();
        }
    }}
    >{accountAddress || 'Connect Wallet'}
    </button>
  )
}   

export default WalletButton;