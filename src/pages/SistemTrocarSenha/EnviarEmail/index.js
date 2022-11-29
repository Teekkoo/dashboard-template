import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Button, Typography } from "@mui/material"
import InputText from "../../../components/inputText"
import * as style from "../styles"

const EnviarEmail = ({ func, navigate }) => {
  const [email, setEmail] = useState("")

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        mb={5}
        variant="h3"
        component="h3"
        textAlign="center"
        color="primary">
        Insira o Email Cadastrado
      </Typography>
      <Box sx={style.CampoInput}>
        <InputText
          getValue={setEmail}
          title="Email"
          typeInput="email"
          isRequired
          msgError=""
        />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%">
        <Button
          disabled={!email.includes("@")}
          variant="contained"
          color="primary"
          sx={{ marginTop: 5 }}
          onClick={() => {
            func(email)
          }}>
          Enviar Código
        </Button>
        <Button
          variant="text"
          color="primary"
          sx={{ marginTop: 5 }}
          onClick={() => navigate()}>
          Voltar ao Login
        </Button>
      </Box>
    </Box>
  )
}
EnviarEmail.propTypes = {
  func: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
}

export default EnviarEmail
