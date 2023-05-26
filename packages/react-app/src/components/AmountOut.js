import React from 'react'
import styles from '../styles'
import {RiArrowLeftLine as Arrow} from 'react-icons/ri'
import ethereumLogo from '../assets/wrapped-ether.png'

const AmountOut = ({tokenIn, tokenOut}) => {

  const [showList, setShowList] = React.useState(false);

  return (
    <div className={styles.exchangeInputInside}>
      <button onClick={() => setShowList((prevState) => !prevState)} className='hover:bg-neutral-600 mx-auto my-auto ml-1 flex px-6 py-4 text-xl text-white w-[51%] h-[92%] rounded-lg'>
        <img src={ethereumLogo} className='w-6 h-6 my-auto mr-4'/>
        <div className='flex flex-col'>
        <p className='font-semibold pb-1 mr-auto'>{"ETH"}</p>
        <p className='text-neutral-400 text-base'>{"$ETH - 12.00"}</p>
        </div>
      </button>
      {showList && (
        <div className={styles.chooseTokenMenu}>
          <p onClick={()=> setShowList((prevState) => !prevState)} className='flex cursor-pointer h-fit mb-12 font-bold text-lg text-neutral-500'><Arrow className='text-neutral-300 h-6 w-6 cursor-pointer mr-2'/> Go Back</p>
         
          <div className='flex flex-col '>
            <p className='mb-6 font-semibold text-2xl'>SELECT AN ASSET</p>

            <input 
            placeholder='Asset name, unit name or asset id'
            className='outline-none bg-neutral-900  py-4 px-16 rounded-xl focus:bg-neutral-700 mb-6'
            
            />

            <div className='rounded-lg border border-neutral-600 bg-neutral-700 hover:bg-neutral-600 mb-24'>

            {[{ token: 'ETH', tokenName: 'Ethereum' },
              { token: 'XRP', tokenName: 'Ripple' }
             ].map(({token, tokenName}, index) => (
              <div 
              key={index}
              className={styles.chooseTokenDiv}> 

              <img src={ethereumLogo} className='w-6 h-6 my-auto mr-4'/>
              <div className='flex flex-col'>
                <p className='font-semibold pb-1 mr-auto'>{tokenName}</p>
                <p className='text-neutral-400 text-base'>${token}</p>
              </div>
              <p className='flex items-center ml-auto text-neutral-300'>{'12.00'}</p>

            </div>
             ))
              }


           
            </div>

          </div>
        </div>
      )}  
      <input 
      type='number' 
      disabled
      style={{direction: "rtl"}} 
      placeholder='0.00' 
      className='w-1/2 rounded-xl flex p-6 text-3xl bg-neutral-700 text-white outline-none' />
    </div>
  )
}

export default AmountOut;