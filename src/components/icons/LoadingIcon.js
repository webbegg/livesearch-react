import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'

export const LoadingIcon = () => {
  return (
    <Icon
      xmlns='http://www.w3.org/2000/svg'
      className='spin'
      width='22'
      height='22'
      fill='none'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M11 1v4'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M11 17v4'
        opacity='0.6'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M3.93 3.93l2.83 2.83'
        opacity='0.3'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M15.24 15.24l2.83 2.83'
        opacity='0.7'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M1 11h4'
        opacity='0.4'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M17 11h4'
        opacity='0.8'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M3.93 18.07l2.83-2.83'
        opacity='0.5'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M15.24 6.76l2.83-2.83'
        opacity='0.9'
      />
    </Icon>
  )
}

const Icon = styled.svg`
  animation: ${theme.animations.spin} 2s infinite linear;
`
