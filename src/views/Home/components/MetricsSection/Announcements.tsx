import React from 'react'
import { Text } from '@pancakeswap/uikit'
import styled from 'styled-components'

const Announcements: React.FC = () => {
  const StyledPage = styled.div`
display: flex;
flex-direction: column;
background: #242249;
padding: 40px;
`

  return (
    <StyledPage>
      <Text fontSize="24px" fontWeight="900" lineHeight="29px" color="white" mb="25px">Announcements</Text>
      {/* <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://twitter.com/Bitcoin' />" }} /> */}
    </StyledPage >
  )
}

export default Announcements
