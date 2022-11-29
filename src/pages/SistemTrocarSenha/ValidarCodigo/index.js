import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Button, Typography } from "@mui/material"
import InputText from "../../../components/inputText"
import * as style from "../styles"

const ValidarCodigo = ({ func, navigate }) => {
  const [codigo, setCodigo] = useState("")

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        mb={5}
        variant="h3"
        component="h3"
        textAlign="center"
        color="primary">
        Insira o Código Enviado
      </Typography>
      <Box sx={style.CampoInput}>
        <InputText
          getValue={setCodigo}
          title="Código"
          typeInput="codigo"
          isRequired
          msgError=""
        />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%">
        <Button
          disabled={codigo.length < 1 && true}
          variant="contained"
          color="primary"
          sx={{ marginTop: 5 }}
          onClick={() => func(codigo)}>
          Enviar Código
        </Button>
        <Button
          variant="text"
          color="primary"
          sx={{ marginTop: 5 }}
          onClick={() => navigate()}>
          Enviar Outro Email
        </Button>
      </Box>
    </Box>
  )
}
ValidarCodigo.propTypes = {
  func: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
}

export default ValidarCodigo
