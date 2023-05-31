

import React , {useState, useRef, useEffect} from 'react'
import styles from '../styles'
import {RiArrowLeftLine as Arrow} from 'react-icons/ri'
import ethereumLogo from '../assets/wrapped-ether.png'
import Balance from './Balance'
import ChooseToken from './ChooseToken'
import {RiSearchLine} from 'react-icons/ri'


const AmountIn = ({account, value, onChange, currencyValue, onSelect, currencies, isSwapping, tokenBalance}) => {

  const [showList, setShowList] = useState(false);
  const [activeCurrency, setActiveCurrency] = useState('Select');
  const [searchValue, setSearchValue] = React.useState('');

  useEffect(() => {
    if(Object.keys(currencies).includes(currencyValue)){
    setActiveCurrency(currencies[currencyValue])
    } else {
      setActiveCurrency("Select");
    }
  }, [currencies, currencyValue])
  

  return (
    <div className={`${styles.exchangeInputInside}`}>
      <button onClick={() => setShowList((prevState) => !prevState)} className='hover:bg-neutral-600 mx-auto my-auto ml-1 flex px-6 py-4 text-xl text-white w-[51%] h-[92%] rounded-lg'>
        <img src={ethereumLogo} className='w-6 h-6 my-auto mr-4'/>
        <div className='flex flex-col'>
        <p className='font-semibold pb-1 mr-auto'>{activeCurrency}</p>
        <p className='text-neutral-400 text-base'><Balance tokenBalance={tokenBalance} /></p>
        </div>
      </button>
      {showList && (
        <div className={styles.chooseTokenMenu}>
          <p onClick={()=> setShowList((prevState) => !prevState)} className='flex cursor-pointer h-fit mb-12 font-bold text-lg text-neutral-500'><Arrow className='text-neutral-300 h-6 w-6 cursor-pointer mr-2'/> Go Back</p>
         
          <div className='flex flex-col '>
            <p className='mb-6 font-semibold text-2xl'>SELECT AN ASSET</p>

            <input
            value={searchValue}
            onChange={input => setSearchValue(input.target.value)}
            placeholder='Asset name, unit name or asset id' 
            className='relative outline-none bg-[#1f1f1f]  py-4 px-12 rounded-xl focus:bg-neutral-700 mb-6' />
            <RiSearchLine className='w-5 h-5 text-neutral-400 absolute xl:left-[272px] 2xl:left-[400px] lg:left-[205px] md:left-[160px] sm:left-[62px] top-[173px]' />

            <div className='rounded-lg border border-neutral-600 bg-neutral-700 hover:bg-neutral-600 mb-24'>

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
      value={value}
      disabled={isSwapping} 
      onChange={(e) => typeof onChange === 'function' && onChange(e.target.value)}
      type='number' 
      style={{}} 
      placeholder='0.00' 
      className='w-1/2 rounded-xl flex p-6 text-right text-3xl bg-neutral-700 text-white outline-none' />
    </div>
  )
}

export default AmountIn