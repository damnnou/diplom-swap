import React, {useState} from 'react'
import {Contract} from '@ethersproject/contracts';
import {abis} from '@my-app/contracts';
import {ERC20, usecontractFunction, useEthers, useTokenAllowance, useTokenBalance} from '@usedapp/core';
import {ethers} from 'ethers';
import {parseUnits} from 'ethers/lib/utils';

import styles from '../styles'

import { ROUTER_ADDRESS } from '../config';
import {AmountOut, AmountIn, Balance} from './index';

const Exchange = ({pools}) => {
  return (
    <div className={styles.exchangeWindow}>

      <div className='flex flex-col mb-12'>
      <p>From</p>
      <div className='flex mx-auto my-auto w-full h-[100px] rounded-xl bg-neutral-900'>
        <AmountIn

        />
      </div>
      <Balance />
      </div>

      <img alt='arrows' className='mx-auto'/>

      <div className='flex flex-col'>
      <p>To</p>
      <div className='flex mx-auto my-auto w-full h-full rounded-xl bg-neutral-900'>
        <AmountIn

        />
        
      </div>
      <Balance />
      </div>
    </div>
  )
}

export default Exchange;