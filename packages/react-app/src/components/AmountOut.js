import React from 'react'
import styles from '../styles'
import {RiArrowLeftLine as Arrow} from 'react-icons/ri'
import ethereumLogo from '../assets/wrapped-ether.png'
import { useAmountsOut } from '../utils'
import { formatUnits } from 'ethers/lib/utils'
import {useState, useEffect} from 'react'
import Balance from './Balance'
import ChooseToken from './ChooseToken'
import {RiSearchLine} from 'react-icons/ri'

const AmountOut = ({
  account,
  fromToken,
  toToken,
  amountIn,
  pairContract,
  currencyValue,
  onSelect,
  currencies,
  tokenBalance}) => {

  const [showList, setShowList] = useState(false);
  const [activeCurrency, setActiveCurrency] = useState(currencyValue);
  const [searchValue, setSearchValue] = React.useState('');
  console.log('amountIn', amountIn)

  const amountOut = useAmountsOut(pairContract, amountIn, fromToken, toToken) ?? 0;

  useEffect(() => {
    if(Object.keys(currencies).includes(currencyValue)){
    setActiveCurrency(currencies[currencyValue])
    } else {
      setActiveCurrency("Select");
    }
  }, [currencies, currencyValue])
  return (
    <div className={styles.exchangeInputInside}>
      <button onClick={() => setShowList((prevState) => !prevState)} className='hover:bg-[#494949] mx-auto my-auto ml-1 flex px-6 py-3 text-lg text-white w-[51%] h-[92%] rounded-lg z-10'>
        <img alt='ethlogo' src={ethereumLogo} className='w-6 h-6 my-auto mr-4'/>
        <div className='flex flex-col'>
        <p className='font-semibold pb-1 mr-auto flex w-[210%] z-100'>{activeCurrency}</p>
        <p className=' text-neutral-400 text-base'><Balance tokenBalance={tokenBalance} /></p>
        </div>
      </button>
      {showList && (
        <div className={styles.chooseTokenMenu}>
        <p onClick={()=> setShowList((prevState) => !prevState)} className='flex cursor-pointer h-fit mb-12 font-bold text-lg text-neutral-500'><Arrow className='text-neutral-300 h-6 w-6 cursor-pointer mr-2'/> Go Back</p>
       
        <div className='flex flex-col '>
          <p className='mb-6 font-semibold text-2xl'>SELECT AN ASSET</p>

          <div className='flex w-full items-center mb-6 relative'>
              <input
                value={searchValue}
                onChange={(input) => setSearchValue(input.target.value)}
                placeholder='Asset name, unit name or asset id' 
                className='outline-none bg-[#1f1f1f]  w-full py-4 px-12 rounded-xl focus:bg-[#363636]' 
              />
              <div className='absolute left-4 top-1/2 -translate-y-1/2'>
                <RiSearchLine className='w-5 h-5 text-neutral-400' />
              </div>
            </div>

            <div className='rounded-lg border border-[#494949] bg-[#363636] hover:bg-[#494949] mb-24'>

            {Object.entries(currencies).filter(([token,tokenName], index) => tokenName.toLowerCase().includes(searchValue.toLowerCase())).map(([token, tokenName], index) => 
            
            <ChooseToken
            key={index}
            searchValue = {searchValue}
            account = {account}
            onSelect = {onSelect}
            setActiveCurrency={setActiveCurrency}
            setShowList={setShowList}
            index = {index}
            token = {token} 
            tokenName = {tokenName} />
              )
            }
          </div>

        </div>
      </div>
      )}  
      <input 
      type='number'
      value={formatUnits(amountOut)} 
      disabled
      style={{}} 
      placeholder='0.00' 
      className='w-1/2 rounded-xl flex p-6 text-right text-3xl bg-[#363636] text-white outline-none' />
    </div>
  )
}

export default AmountOut;