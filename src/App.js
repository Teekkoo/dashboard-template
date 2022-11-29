import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import "./App.css"
import Rotas from "./router"

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#d52fde",
      },
      error: {
        main: "#d32f2f",
      },
    },
    typography: {
      h1: {
        fontWeight: "bold",
        fontSize: "min(9vw, 2.5rem)",
        textAlign: "center",
      },
      h2: {
        fontWeight: "bold",
        fontSize: "min(7vw, 2rem)",
        textAlign: "center",
      },
      h3: {
        fontWeight: "bold",
        fontSize: "min(5.5vw, 1.5rem)",
        textAlign: "center",
      },
      h4: {
        fontWeight: "bold",
        fontSize: "min(4.4vw, 1rem)",
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Rotas />
    </ThemeProvider>
  )
}

export default App
