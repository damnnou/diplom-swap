import React from 'react'
import {formatUnits, parseUnits } from 'ethers/lib/utils';

const Balance = ({tokenBalance}) => {

  const balance = formatUnits(tokenBalance || parseUnits('0'));
  const roundedBalance = Number(balance).toFixed(5);

  return (
    <div className='flex w-[210%] z-100'>
      <p>{'Balance: ' + roundedBalance}</p>
      </div>
  )
}

export default Balance