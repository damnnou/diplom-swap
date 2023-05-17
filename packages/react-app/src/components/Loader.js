import React from 'react'
import styles from '../styles'
import ethereumLogo from '../assets/ethereumLogo.png'


const Loader = ({title}) => {
  return (
    <div className={styles.swapWindow}>
        <img className='mx-auto w-36 mt-auto' alt='eth logo' src={ethereumLogo} />
        <p className='text-white uppercase my-auto mx-auto '>{title}</p>
    </div>
  )
}

export default Loader