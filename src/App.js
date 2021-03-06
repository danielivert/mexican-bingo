// @flow

import * as React from "react"
import * as io from "socket.io-client"
import { ThemeProvider } from "styled-components"
import { isProductionBuild } from "./utils/env"
import GlobalStyle from "./theme/globalStyle"
import Routes from "./Routes"
import theme from "./theme/theme"
import SocketContext from "./components/SocketContext"

const SOCKET_URL = isProductionBuild
  ? window.location.hostname
  : "http://localhost:8000"
const socket = io(SOCKET_URL, { transports: ["websocket"] })

class App extends React.Component<{}> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <SocketContext.Provider value={socket}>
            <GlobalStyle />
            <Routes />
          </SocketContext.Provider>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App
