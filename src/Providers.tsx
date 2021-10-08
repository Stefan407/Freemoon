import React from 'react'
import { ModalProvider, light, dark, PancakeTheme } from '@pancakeswap/uikit'
import { Web3ReactProvider } from '@web3-react/core'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { useThemeManager } from 'state/user/hooks'
import { getLibrary } from 'utils/web3React'
import { LanguageProvider } from 'contexts/Localization'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { ToastsProvider } from 'contexts/ToastsContext'
import store from 'state'

const ThemeProviderWrapper = (props) => {
  const [isDark] = useThemeManager()
  return <ThemeProvider theme={isDark ? dark : light} {...props} />
}


const theme = dark as PancakeTheme;
theme.colors.text = "#FFF";
theme.colors.textSubtle = "#C5C5DF";
theme.colors.input = "#2D2A57";
theme.colors.overlay = "#7B78AA";
theme.colors.backgroundAlt = "#17163B";
theme.colors.cardBorder = "#36336B";
theme.colors.primary = "#EF478C";
theme.colors.success = "linear-gradient(87.95deg, #6025F5 -30.37%, #FF5555 98.24%)";
theme.colors.disabled = "#6F6C99";
theme.colors.backgroundDisabled = "transparent";
theme.colors.secondary = "#6F6C99";
theme.colors.tertiary = "#343567";
theme.colors.dropdown = "#242249";
theme.card.background = "#242249";



const themeLight = light as PancakeTheme;
themeLight.colors.textSubtle = "#242249";
themeLight.colors.secondary = "#EF478C";
themeLight.colors.text = "#242249";
themeLight.colors.primary = "#EF478C";

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ToastsProvider>
          <HelmetProvider>
            <ThemeProviderWrapper>
              <LanguageProvider>
                <RefreshContextProvider>
                  <ModalProvider>{children}</ModalProvider>
                </RefreshContextProvider>
              </LanguageProvider>
            </ThemeProviderWrapper>
          </HelmetProvider>
        </ToastsProvider>
      </Provider>
    </Web3ReactProvider>
  )
}

export default Providers
