import React from 'react'
import { StyleSheet, Text, View } from 'react-native' // TODO: Use styled-components
import { Trans, useTranslation } from 'react-i18next'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  textName: {
    color: 'red'
  },
  textComplex: {
    color: 'green'
  },
  textExample: {
    fontWeight: 'bold',
    color: 'blue'
  }
})

const DevScreen = () => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text>{t('HelloWorld')}</Text>
      <Text>
        <Trans i18nKey="ComplexTranslationExample" values={{ name: 'Szymon' }}>
          <Text style={styles.textName} />
          <Text style={styles.textComplex} />
          <Text style={styles.textExample} />
        </Trans>
      </Text>
    </View>
  )
}

export default DevScreen
