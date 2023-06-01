import React from 'react'
import {formatUnits, parseUnits } from 'ethers/lib/utils';

const Balance = ({tokenBalance}) => {

  const balance = formatUnits(tokenBalance || parseUnits('0'));
  const roundedBalance = Number(balance).toFixed(8);

  return (
    <>
      Avaliable: {roundedBalance}
      </>
  )
}

export default Balance