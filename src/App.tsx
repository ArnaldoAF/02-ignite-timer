import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { HashRouter } from 'react-router-dom'
import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <HashRouter>
                <CyclesContextProvider>
                    <Router />
                </CyclesContextProvider>
            </HashRouter>
            <GlobalStyle />
        </ThemeProvider>
    )
}
