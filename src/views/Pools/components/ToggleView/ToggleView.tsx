import React from 'react'
import styled from 'styled-components'
import { ListViewIcon, CardViewIcon } from '@pancakeswap/uikit'
import { ViewMode } from 'state/user/actions'

interface ToggleViewProps {
  viewMode: ViewMode
  onToggle: (mode: ViewMode) => void
}

const Container = styled.div`
  margin-right: 0px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 0;
    margin-right: 16px;
  }
`

const ToggleView: React.FunctionComponent<ToggleViewProps> = ({ viewMode, onToggle }) => {
  const handleToggle = (mode: ViewMode) => {
    if (viewMode !== mode) {
      onToggle(mode)
    }
  }

  return (
    <Container>
      <CardViewIcon mr="15px" color={viewMode === ViewMode.CARD ? 'primary' : 'textDisabled'} onClick={() => handleToggle(ViewMode.CARD)} />
      <ListViewIcon color={viewMode === ViewMode.TABLE ? 'primary' : 'textDisabled'} onClick={() => handleToggle(ViewMode.TABLE)} />
    </Container>
  )
}

export default ToggleView

