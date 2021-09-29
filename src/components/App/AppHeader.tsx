import React from 'react'
import styled from 'styled-components'
import { Text, Flex, Heading, IconButton, ArrowBackIcon, NotificationDot } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import { useExpertModeManager } from 'state/user/hooks'
import GlobalSettings from 'components/Menu/GlobalSettings'
import Transactions from './Transactions'
import QuestionHelper from '../QuestionHelper'

interface Props {
  title: string
  subtitle: string
  helper?: string
  backTo?: string
  noConfig?: boolean
}

const AppHeaderContainer = styled(Flex)`
  padding: 40px 50px 0;
  width: 100%;
  `
  
  const AppHeaderItem = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const AppHeader: React.FC<Props> = ({ title, subtitle, helper, backTo, noConfig = false }) => {
  const [expertMode] = useExpertModeManager()

  return (
    <AppHeaderContainer>
      <AppHeaderItem>
        <Flex alignItems="center" mr={noConfig ? 0 : '16px'}>
          {backTo && (
            <IconButton as={Link} to={backTo}>
              <ArrowBackIcon width="32px" />
            </IconButton>
          )}
          <Flex flexDirection="column">
            <Heading scale="xl" as="h2" mb="8px">
              {title}
            </Heading>
            <Flex alignItems="center">
              {helper && <QuestionHelper text={helper} mr="4px" placement="top-start" />}
              <Text color="textSubtle" fontSize="16px">
                {subtitle}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {!noConfig && (
          <Flex alignItems="center">
            <NotificationDot show={expertMode}>
              <GlobalSettings />
            </NotificationDot>
            <Transactions />
          </Flex>
        )}
      </AppHeaderItem>
    </AppHeaderContainer>
  )
}

export default AppHeader
