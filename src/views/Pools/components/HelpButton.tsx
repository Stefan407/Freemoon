import React from 'react'
import styled from 'styled-components'
import { Text, Button, Link } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const ButtonText = styled(Text)`
  display: none;
  ${({ theme }) => theme.mediaQueries.xs} {
    display: block;
  }
`

const Container = styled.div`
  margin-right: 16px;
  display: flex;
  justify-content: flex-end;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1;
  }
`

const StyledButtonWrap = styled.div`

& button{
  background: transparent;
  box-shadow: none;
  & div{
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #6F6C99;
    text-decoration-line: none;
  }
  }
`
const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`

const HelpButton = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <StyledLink external href="https://docs.pancakeswap.finance/syrup-pools/syrup-pool">
        <StyledButtonWrap >
          <Button px={['14px', null, null, null, '20px']} variant="subtle">
            <ButtonText color="backgroundAlt" bold fontSize="16px">
              {t('Need Help?')}
            </ButtonText>
          </Button>
        </StyledButtonWrap>
      </StyledLink>
    </Container>
  )
}

export default HelpButton
