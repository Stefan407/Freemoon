import React from 'react'
import PageSection from 'components/PageSection'
import { PageMeta } from 'components/Layout/Page'
import MetricsSection from './components/MetricsSection'

const Home: React.FC = () => {
  return (
    <>
      <PageMeta />
      <PageSection background="transparent" innerProps={{ style: { margin: '0', width: '100%' } }} index={2} hasCurvedDivider={false} >
        <MetricsSection />
      </PageSection>
    </>
  )
}

export default Home
