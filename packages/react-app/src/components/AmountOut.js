import React from 'react'
import styles from '../styles'

const AmountOut = () => {
  const [showList, setShowList] = React.useState(false);

  return (
    <div className={styles.exchangeInputInside}>
      <button onClick={() => setShowList((prevState) => !prevState)} className={`w-1/2 hover:bg-neutral-600 mx-auto my-auto ml-1 flex px-6 items-center text-2xl text-white w-[50.5%] h-[92%] rounded-lg ${showList && `bg-neutral-600`}`}>
        {"ETH"}
      </button>
      {showList && (
        <ul className='flex flex-col top-14 left-1 absolute w-1/2 h-1/2 bg-neutral-600 text-white rounded-lg'>
          "eth" "ey"
        </ul>
      )}
      <input type='number' style={{direction: "rtl"}} placeholder='0.00' className='w-1/2 rounded-xl flex p-6 text-3xl bg-neutral-700 text-white outline-none' />
    </div>
  )
}

export default AmountOut