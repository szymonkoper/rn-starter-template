import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useLazyQuery } from '@apollo/react-hooks'
import { schemaQueriesQuery } from 'api/graphql/queries/schemaQueries'
import { restClient } from 'api'
import {
  DevButton,
  DevButtonText,
  Section,
  SectionContentText,
  SectionHeaderText
} from '../DevScreen.styled'

const CallResultInfo = ({
  title,
  get,
  requestState: { loading, error, data }
}) => {
  const { t } = useTranslation()

  return (
    <Section>
      <SectionHeaderText>{title}</SectionHeaderText>
      <SectionContentText>
        {`loading: ${loading ? t('Common.Yes') : t('Common.No')}`}
      </SectionContentText>
      <SectionContentText>
        {`error: ${error ? t('Common.Yes') : t('Common.No')}`}
      </SectionContentText>
      <SectionContentText>
        {`data: ${data ? t('Common.Yes') : t('Common.No')}`}
      </SectionContentText>
      <DevButton onPress={get}>
        <DevButtonText>{t('Dev.Call')}</DevButtonText>
      </DevButton>
    </Section>
  )
}

CallResultInfo.propTypes = {
  title: PropTypes.string.isRequired,
  get: PropTypes.func.isRequired,
  requestState: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.shape({}),
    error: PropTypes.shape({})
  })
}

CallResultInfo.defaultProps = {
  requestState: {
    data: null,
    error: null
  }
}

const APISection = () => {
  const [
    callGqlSchemaGet,
    gqlSchemaGetRequestState
  ] = useLazyQuery(schemaQueriesQuery, { fetchPolicy: 'no-cache' })

  const [restExampleGetRequestState, setRestExampleGetRequestState] = useState({
    loading: false,
    error: null,
    data: null
  })

  const callRestExampleGet = async () => {
    setRestExampleGetRequestState({ loading: true, data: null, error: null })
    const EXAMPLE_ENDPOINT = 'employees'
    try {
      const data = await restClient.get(EXAMPLE_ENDPOINT)
      setRestExampleGetRequestState({ loading: false, data, error: null })
    } catch (error) {
      setRestExampleGetRequestState({ loading: false, data: null, error })
    }
  }

  return (
    <Section>
      <SectionHeaderText>API</SectionHeaderText>
      <CallResultInfo
        title="REST"
        get={callRestExampleGet}
        requestState={restExampleGetRequestState}
      />
      <CallResultInfo
        title="GraphQL"
        get={callGqlSchemaGet}
        requestState={gqlSchemaGetRequestState}
      />
    </Section>
  )
}

export default APISection
