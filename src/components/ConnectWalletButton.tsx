import React from 'react'
import { useWalletModal } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'


const StyledButton = styled.button`
      background: linear-gradient( 87.95deg,#6025F5 -30.37%,#FF5555 98.24%);
      box-shadow: 0px 5px 12px 1px rgb(255 85 218 / 37%);
      border-radius: 45px;
      margin: 0 auto;
      display: block;
      border: 0;
      font-weight: 900;
      font-size: 14px;
      text-align: center;
      text-transform: uppercase;
      color: #FFFFFF;
      padding: 8px 42px;
      cursor: pointer;
      transition: all .2s ease-in-out;

      &:hover {transform: scale(1.05); }


      @media screen and (max-width: 768px) {
        padding: 6px 20px;
        margin-left: 10px;
      }
`

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <StyledButton onClick={onPresentConnectModal} {...props}> {t('Connect')} </StyledButton>
  )
}

export default ConnectWalletButton
