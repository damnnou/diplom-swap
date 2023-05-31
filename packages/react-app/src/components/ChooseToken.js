import React , {useState, useRef, useEffect} from 'react'
import styles from '../styles'
import ethereumLogo from '../assets/wrapped-ether.png'
import { useTokenBalance } from '@usedapp/core'
import { formatUnits, parseUnits } from 'ethers/lib/utils'
import Web3 from 'web3'
import { abis } from '@my-app/contracts'

const ChooseToken = ({
  searchValue,
    account,
    onSelect,
    index,
    token,
    tokenName,
    setActiveCurrency,
    setShowList
}) => {

    const tokenBalance = useTokenBalance(token, account);
    const formBalance = formatUnits(tokenBalance || parseUnits('0'));
    const roundedBalance = Number(formBalance).toFixed(8);
    const [symbol, setSymbol] = useState('');

    useEffect(() => {
        const getSymbol = async () => {
            const web3 = new Web3('https://eth-goerli.g.alchemy.com/v2/HMHzefwZIJeG4VKqKaD7AjCltzcan0Zn');
            const contractAddress = token; // Адрес контракта токена
            const contractABI = abis.erc20.abi; // ABI контракта токена
            const contract = new web3.eth.Contract(contractABI, contractAddress);
            const symbol = await contract.methods.symbol().call();
            setSymbol(symbol);
          };
      
          getSymbol();
        }, [searchValue]);

  return (
    <div  
    key={index}
    className={styles.chooseTokenDiv}
    onClick={() => {
      if(typeof onSelect === 'function') onSelect(token);
      setActiveCurrency(tokenName);
      setShowList(false);
    }}
    >
    <img src={ethereumLogo} className='w-6 h-6 my-auto mr-4'/>
    <div className='flex flex-col'>
      <p className='font-semibold pb-1 mr-auto'>{tokenName}</p>
      <p className='text-neutral-400 text-base'>{symbol}</p>
    </div>
    <p className='flex items-center ml-auto text-neutral-300'>{roundedBalance}</p>

  </div>
   )
}

export default ChooseToken