import React, { useState } from 'react'
import VersionNumber from 'react-native-version-number'
import PropTypes from 'prop-types'
import { Trans, useTranslation } from 'react-i18next'
import Config from 'react-native-config'
import { useLazyQuery } from '@apollo/react-hooks'
import { i18nConstants, i18nPropTypes } from 'i18n'
import { schemaQueriesQuery } from 'api/graphql/queries/schemaQueries'
import { restClient } from 'api'
import {
  DevButton,
  DevButtonText,
  LanguageOptionsWrapper,
  LanguageText,
  LottieViewWrapper,
  ScreenContainer,
  ScrollView,
  Section,
  SectionContentText,
  SectionHeaderText,
  StyledLottieView,
  ValueLongText,
  ValueShortText
} from './DevScreen.styled'

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
        <DevButtonText>Call</DevButtonText>
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

const DevScreen = ({ language, updateLanguage }) => {
  const { t } = useTranslation()
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
    <ScreenContainer>
      <ScrollView>
        <Section>
          <SectionHeaderText>{t('Dev.VersionTitle')}</SectionHeaderText>
          <SectionContentText>
            <Trans
              i18nKey="Dev.VersionNumbers"
              values={{
                buildMode: __DEV__ ? 'development' : 'release',
                appVersion: VersionNumber.appVersion,
                buildVersion: VersionNumber.buildVersion,
                bundleIdentifier: VersionNumber.bundleIdentifier
              }}
            >
              <ValueShortText />
              <ValueLongText />
            </Trans>
          </SectionContentText>
        </Section>

        <Section>
          <SectionHeaderText>{t('Dev.LanguageTitle')}</SectionHeaderText>
          <LanguageOptionsWrapper>
            {i18nConstants.LOCALES_CODES.map(languageCode => (
              <LanguageText
                key={languageCode}
                isCurrent={language === languageCode}
                onPress={() => {
                  if (language !== languageCode) updateLanguage(languageCode)
                }}
              >
                {languageCode}
              </LanguageText>
            ))}
          </LanguageOptionsWrapper>
        </Section>

        <Section>
          <SectionHeaderText>{t('Dev.EnvTitle')}</SectionHeaderText>
          {Object.entries(Config)
            .filter(([_, value]) => typeof value === 'string')
            .map(([key, value]) => (
              <SectionContentText key={key}>
                {`${key}=`} <ValueLongText>{`${value}`}</ValueLongText>
              </SectionContentText>
            ))}
        </Section>

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

        <Section>
          <SectionHeaderText>{t('Dev.Notifications')}</SectionHeaderText>
          <SectionContentText>
            TODO show if permissions given
          </SectionContentText>
          <SectionContentText>
            TODO button to ask for permissions
          </SectionContentText>
          <DevButton
            onPress={() => {
              console.log('Show notification')
              console.log('Should be shown')
            }}
          >
            <DevButtonText>{t('Dev.ShowNotificationLocal')}</DevButtonText>
          </DevButton>
        </Section>

        <Section>
          <SectionHeaderText>{t('Dev.LottieTitle')}</SectionHeaderText>
          <LottieViewWrapper>
            <StyledLottieView
              key="empty"
              source={require('lottie/empty.json')}
            />
            <StyledLottieView
              key="success"
              source={require('lottie/success.json')}
            />
            <StyledLottieView
              key="failure"
              source={require('lottie/failure.json')}
            />
            <StyledLottieView
              key="loading"
              source={require('lottie/loading.json')}
            />
          </LottieViewWrapper>
        </Section>
      </ScrollView>
    </ScreenContainer>
  )
}

DevScreen.propTypes = {
  language: i18nPropTypes.languagesShape.isRequired,
  updateLanguage: PropTypes.func.isRequired
}

export default DevScreen
