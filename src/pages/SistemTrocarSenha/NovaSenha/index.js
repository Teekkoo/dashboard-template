import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Button, Typography } from "@mui/material"
import InputText from "../../../components/inputText"
import * as style from "../styles"

const NovaSenha = ({ func, navigate }) => {
  const [pass, setPass] = useState("")
  const [verifyPass, setVerifyPass] = useState("")

  console.log(pass)
  console.log(verifyPass)
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        mb={5}
        variant="h3"
        component="h3"
        textAlign="center"
        color="primary">
        Insira a Nova Senha
      </Typography>
      <Box sx={style.CampoInput}>
        <InputText
          getValue={setPass}
          title="Nova Senha"
          typeInput="password"
          isRequired
          msgError=""
        />

        <Typography component="li">A senha deve Conter no minimo 6 Caracteres</Typography>
      </Box>
      <Box sx={style.CampoInput}>
        <InputText
          getValue={setVerifyPass}
          title="Confirmar Senha"
          typeInput="password"
          isRequired
          msgError=""
        />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%">
        <Button
          disabled={verifyPass.length < 6 || verifyPass !== pass}
          variant="contained"
          color="primary"
          sx={{ marginTop: 5 }}
          onClick={() => func(pass)}>
          Confirmar Senha
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
NovaSenha.propTypes = {
  func: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
}

export default NovaSenha
