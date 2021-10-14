import React from 'react'
import { Text } from '@pancakeswap/uikit'
import styled from 'styled-components'


const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  background: url(/bgTvl.png);
  padding: 40px;
  min-height: 290px;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    padding: 20px
  }
  `

const Tvl: React.FC = () => {

  return (
    <StyledPage >
      <Text mb="10px" fontSize="16px" fontWeight="900" lineHeight="20px" color="#fff">Total Value Locked (TVL)</Text>
      <Text mb="5px" fontSize="40px" fontWeight="900" lineHeight="55px" color="#fff">$712,293.64</Text>
      <Text fontSize="14px" fontWeight="900" lineHeight="30px" color="#fff">Across all Farms and Pools</Text>
    </StyledPage >
  )
}

export default Tvl
