import React from 'react'
import { Flex, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'

const FreemoonStars: React.FC = () => {


  const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    background: ${({ theme }) => theme.isDark ? "#242249" : "#FFF"} ;
    min-height: 290px;
  `

  return (
    <StyledPage>

      <Text fontSize="24px" fontWeight="900" lineHeight="29px" color="text" mb="25px">Freemoon Stats</Text>
      <Flex justifyContent="flex-start">
        <Flex mr="80px" flexDirection="column">
          <Text fontSize="14px" fontWeight="normal" lineHeight="30px" color="#C5C5DF">Market Cap</Text>
          <Text fontSize="14px" fontWeight="normal" lineHeight="30px" color="#C5C5DF">Total Minted</Text>
          <Text fontSize="14px" fontWeight="normal" lineHeight="30px" color="#C5C5DF">Total Burned</Text>
          <Text fontSize="14px" fontWeight="normal" lineHeight="30px" color="#C5C5DF">Circulating Supply</Text>
          <Text fontSize="14px" fontWeight="normal" lineHeight="30px" color="#C5C5DF">New Cancer/block</Text>
        </Flex>
        <Flex flexDirection="column">
          <Text fontSize="14px" fontWeight="normal" lineHeight="30px" color="#C5C5DF">$19,339</Text>
          <Text fontSize="14px" fontWeight="normal" lineHeight="30px" color="#C5C5DF">645</Text>
          <Text fontSize="14px" fontWeight="normal" lineHeight="30px" color="#C5C5DF">41</Text>
          <Text fontSize="14px" fontWeight="normal" lineHeight="30px" color="#C5C5DF">604</Text>
          <Text fontSize="14px" fontWeight="normal" lineHeight="30px" color="#C5C5DF">0.05</Text>
        </Flex>
      </Flex>    </StyledPage >
  )
}

export default FreemoonStars
