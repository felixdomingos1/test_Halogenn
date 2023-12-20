import { ComponentType } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import { Layout } from '../components/layout'
import { theme } from 'src/styles/theme'

type NextPageWithLayout = NextPage & {
  Layout?: ComponentType
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  err?: Error
}

type EmptyLayoutProps = {
  children: React.ReactNode
}

const EmptyLayout = ({ children }: EmptyLayoutProps) => <>{children}</>

function MyApp({ Component, pageProps, err }: AppPropsWithLayout) {
  const ComponentLayout = Component.Layout || EmptyLayout
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <ComponentLayout>
          <Component {...pageProps} err={err} />
        </ComponentLayout>
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
