import React, {useState} from 'react'
import {Contract} from '@ethersproject/contracts';
import {abis} from '@my-app/contracts';
import {ERC20, usecontractFunction, useEthers, useTokenAllowance, useTokenBalance} from '@usedapp/core';
import {ethers} from 'ethers';
import {parseUnits} from 'ethers/lib/utils';

import styles from '../styles'

import { ROUTER_ADDRESS } from '../config';

const Exchange = ({pools}) => {
  return (
    <div className={styles.swapWindow}>Exchange</div>
  )
}

export default Exchange;