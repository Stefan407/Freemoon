import React from 'react'
import { Button, Flex, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'

const Farms: React.FC = () => {

  const StyledPage = styled.div`
display: flex;
flex-direction: column;
background: #242249;
padding: 40px;
`
  return (
    <StyledPage >
      <Text fontSize="24px" fontWeight="900" lineHeight="29px" color="white" mb="25px">Farms & Staking</Text>
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
      <Button >Unlock wallet</Button>
    </StyledPage >
  )
}

export default Farms
