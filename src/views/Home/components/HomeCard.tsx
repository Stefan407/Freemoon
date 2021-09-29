import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Card, Box, CardProps } from '@pancakeswap/uikit'

const StyledCard = styled(Card)`
  height: fit-content;
  box-sizing: border-box;
  background: transparent;
  border-radius: 15px;
  width: 50%;
  max-width: 445px;
  margin: 15px;
  &>div{
    background: transparent;
    border-radius: 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    margin-bottom: 30px;
  }
`

const IconWrapper = styled(Box)`
  position: absolute;
  top: 30px;
  right: 40px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #36336B;
  border-radius: 30px;
`

interface HomeCardProps extends HomeCardData, CardProps {
  children: ReactNode
}

export interface HomeCardData {
  icon?: ReactNode
}

const HomeCard: React.FC<HomeCardProps> = ({ icon, children, ...props }) => {
  return (
    <StyledCard {...props}>
      {icon && <IconWrapper >{icon}</IconWrapper>}
      {children}
    </StyledCard>
  )
}

export default HomeCard
