import React from 'react'
import { Flex, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'

const Farms: React.FC = () => {

  const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.isDark ? "#242249" : "#FFF"} ;
    padding: 40px;
    @media screen and (max-width: 768px) {
      padding: 20px
    }
  `

  const StyledButton = styled.button`
    background: linear-gradient(87.95deg, #6025F5 -30.37%, #FF5555 98.24%);
    box-shadow: 0px 5px 12px 1px rgba(255, 85, 218, 0.37);
    border-radius: 47px;
    display: block;
    border: 0;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 18px 20px;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {transform: scale(1.05); }

    @media screen and (max-width: 768px) {
      padding: 6px 20px;
      margin-left: 10px;
    }
  `

  return (
    <StyledPage >
      <Text fontSize="24px" fontWeight="900" lineHeight="29px" color="text" mb="25px">Farms & Staking</Text>
      <Flex mb="25px" flexDirection="column">
        <Text mb="10px" fontSize="14px" fontWeight="normal" lineHeight="16px" color="#C5C5DF">Moon to Harvest</Text>
        <Text mb="10px" fontSize="14px" fontWeight="normal" lineHeight="16px" color="#6D6CAC">LOCKED</Text>
        <Text fontSize="14px" fontWeight="normal" lineHeight="16px" color="#6D6CAC">~$0.00</Text>
      </Flex>
      <Flex mb="25px" flexDirection="column">
        <Text mb="10px" fontSize="14px" fontWeight="normal" lineHeight="16px" color="#C5C5DF">Moon in Wallet</Text>
        <Text mb="10px" fontSize="14px" fontWeight="normal" lineHeight="16px" color="#6D6CAC">LOCKED</Text>
        <Text fontSize="14px" fontWeight="normal" lineHeight="16px" color="#6D6CAC">~$0.00</Text>
      </Flex>
      <StyledButton >Unlock wallet</StyledButton>
    </StyledPage >
  )
}

export default Farms
