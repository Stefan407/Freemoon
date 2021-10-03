import React, { useCallback } from 'react'
import styled from 'styled-components'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useDispatch } from 'react-redux'
import { Modal, ModalBody, Text, Button, Flex, InjectedModalProps } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { orderBy } from 'lodash'
import { isTransactionRecent, useAllTransactions } from 'state/transactions/hooks'
import { TransactionDetails } from 'state/transactions/reducer'
import { AppDispatch } from 'state'
import { clearAllTransactions } from 'state/transactions/actions'
import { AutoRow } from '../../Layout/Row'
import Transaction from './Transaction'
import ConnectWalletButton from '../../ConnectWalletButton'

function renderTransactions(transactions: TransactionDetails[]) {
  return (
    <Flex flexDirection="column">
      {transactions.map((tx) => {
        return <Transaction key={tx.hash + tx.addedTime} tx={tx} />
      })}
    </Flex>
  )
}


const StyledButtonWrap = styled.div`
  padding: 0 24px;

  & button{
    display: flex;
    width: 100%;
    margin: 0;
    justify-content: center;
    padding: 10px 20px;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    background: linear-gradient(
87.95deg,#6025F5 -30.37%,#FF5555 98.24%);
    box-shadow: 0px 5px 12px 1px rgb(255 85 218 / 37%);
    border-radius: 65px;

}
`

const TransactionsModal: React.FC<InjectedModalProps> = ({ onDismiss }) => {
  const { account, chainId } = useActiveWeb3React()
  const dispatch = useDispatch<AppDispatch>()
  const allTransactions = useAllTransactions()

  const { t } = useTranslation()

  const sortedRecentTransactions = orderBy(
    Object.values(allTransactions).filter(isTransactionRecent),
    'addedTime',
    'desc',
  )

  const pending = sortedRecentTransactions.filter((tx) => !tx.receipt)
  const confirmed = sortedRecentTransactions.filter((tx) => tx.receipt)

  const clearAllTransactionsCallback = useCallback(() => {
    if (chainId) dispatch(clearAllTransactions({ chainId }))
  }, [dispatch, chainId])

  return (
    <Modal title={t('Recent Transactions')} color="red" headerBackground="gradients.cardHeader" onDismiss={onDismiss}>
      {account ? (
        <ModalBody>
          {!!pending.length || !!confirmed.length ? (
            <>
              <AutoRow mb="1rem" style={{ justifyContent: 'space-between' }}>
                <Text>{t('Recent Transactions')}</Text>
                <Button variant="tertiary" scale="xs" onClick={clearAllTransactionsCallback}>
                  {t('clear all')}
                </Button>
              </AutoRow>
              {renderTransactions(pending)}
              {renderTransactions(confirmed)}
            </>
          ) : (
            <Text>{t('No recent transactions')}</Text>
          )}
        </ModalBody>
      ) : (
        <StyledButtonWrap >
          <ConnectWalletButton />
        </StyledButtonWrap>
      )}
    </Modal>
  )
}

export default TransactionsModal
