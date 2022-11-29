import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Button, TextField, Typography } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import validaInput from "../../util/inputs"
import * as style from "./styles"

const InputText = ({ title, msgError, getValue, typeInput, isRequired }) => {
  const [error, setError] = useState("")
  const [visible, setVisible] = useState(false)
  return (
    <Box sx={style.Max}>
      <TextField
        sx={style.Max}
        label={title}
        required={isRequired}
        type={!visible ? typeInput : "text"}
        onChange={(e) => {
          const response = validaInput(e.target.value, typeInput, isRequired)
          e.target.value = [response[0]]
          getValue(response[1])
          setError(response[2])
        }}
      />
      {typeInput === "password" && (
        <Button
          sx={style.PasswordIcon}
          onClick={() => setVisible(!visible)}>
          {visible ? <Visibility /> : <VisibilityOff />}
        </Button>
      )}
      <Typography
        component="span"
        variant="body2"
        fontWeight="bold"
        color="error">
        {error || msgError}
      </Typography>
    </Box>
  )
}
InputText.propTypes = {
  title: PropTypes.string.isRequired,
  msgError: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
  getValue: PropTypes.func.isRequired,
  isRequired: PropTypes.bool.isRequired,
}

export default InputText

/*
  <InputText
    getValue= função para armazenar o valor do input (string) *obrigatorio
    title= titulo/nome do input (string) *obrigatorio
    typeInput= tipo de dados (cpf/rg/cep/date/password/email/text/codigo) *obrigatorio
    isRequired = se é obrigatorio (true/false) *obrigatorio
    msgError= mensagem alternativa de erro (string) opcional
  />
*/
