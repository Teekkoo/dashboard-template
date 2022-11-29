import { Box, Paper, Typography } from "@mui/material"
import React from "react"

const Inicio = () => (
  <Box sx={{ padding: "2vw" }}>
    <Typography
      variant="h1"
      color="primary">
      Bem Vindo ao Painel!
    </Typography>
    <Typography
      variant="h2"
      color="primary">
      Você pode Realizar estas Funções:
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "100%",
        margin: "3vw 0",
        "& > :not(style)": {
          m: 1,
          width: "30vh",
          height: "30vh",
          padding: "10px",
        },
      }}>
      <Paper>
        <Typography
          variant="h3"
          color="primary">
          Cadastrar
        </Typography>
      </Paper>
      <Paper>
        <Typography
          variant="h3"
          color="primary">
          Consultar
        </Typography>
      </Paper>
      <Paper>
        <Typography
          variant="h3"
          color="primary">
          Dashbord
        </Typography>
      </Paper>
    </Box>
  </Box>
)

export default Inicio
