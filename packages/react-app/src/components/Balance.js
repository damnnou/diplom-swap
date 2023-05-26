import React from 'react'
import {formatUnits, parseUnits } from 'ethers/lib/utils';

import styles from '../styles';

const Balance = () => {

  const tokenBalance = parseUnits('0.002131')

  return (
    <div>{tokenBalance && (
      <p>Avaliable: {formatUnits(tokenBalance || parseUnits('0'))}</p>
    )}</div>
  )
}

export default Balance