import { ThemeProvider } from 'styled-components'
import { Button } from './componets/Button'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secundary" />
      <Button variant="danger" />
      <Button variant="success" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
