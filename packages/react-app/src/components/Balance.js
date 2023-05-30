import React from 'react'
import {formatUnits, parseUnits } from 'ethers/lib/utils';

const Balance = ({tokenBalance}) => {

  const balance = formatUnits(tokenBalance || parseUnits('0'));
  const roundedBalance = Number(balance).toFixed(8);

  return (
    <div className='flex  overflow-hidden'>{tokenBalance && (
      <p className=''>Avaliable: {roundedBalance}</p>
    )}</div>
  )
}

export default Balance