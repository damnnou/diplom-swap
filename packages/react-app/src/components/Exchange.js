import React, {useState} from 'react'
import {Contract} from '@ethersproject/contracts';
import {abis} from '@my-app/contracts';
import {ERC20, usecontractFunction, useEthers, useTokenAllowance, useTokenBalance} from '@usedapp/core';
import {ethers} from 'ethers';
import {parseUnits} from 'ethers/lib/utils';
import {RiArrowUpDownFill} from 'react-icons/ri'

import styles from '../styles'

import { ROUTER_ADDRESS } from '../config';
import {AmountOut, AmountIn, Balance} from './index';

const Exchange = ({pools}) => {
  return (
    <div className={styles.exchangeWindow}>

      <div className='flex flex-col mt-12'>
      <p className='text-neutral-400'>From</p>
      <div className={styles.exchangeInput}>

      <AmountIn

        />

      </div>
      <Balance />
      </div>

      <RiArrowUpDownFill alt='arrows' className='mx-auto text-white h-6 w-6'/>

      <div className='flex flex-col'>
      <p className='text-neutral-400'>To</p>
      <div className={styles.exchangeInput}>
        <AmountOut

        />
        
      </div>
      <Balance />
      </div>
    </div>
  )
}

export default Exchange;