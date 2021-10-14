import React from 'react'
import { Text } from '@pancakeswap/uikit'
import styled from 'styled-components'

const Announcements: React.FC = () => {
  const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.isDark ? "#242249" : "#FFF"} ;
    padding: 40px;
    @media screen and (max-width: 768px) {
      padding: 20px
    }
  `

  return (
    <StyledPage>
      <Text fontSize="24px" fontWeight="900" lineHeight="29px" color="text" mb="25px">Announcements</Text>
      {/* <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://twitter.com/Bitcoin' />" }} /> */}
    </StyledPage >
  )
}

export default Announcements
