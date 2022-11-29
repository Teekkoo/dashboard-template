import {
  Alert,
  Backdrop,
  Box,
  Button,
  CardMedia,
  CircularProgress,
  IconButton,
  Modal,
  Snackbar,
  Typography,
} from "@mui/material"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CheckCircle } from "@mui/icons-material"
import { submitMsg } from "../../util/submits"
import EnviarEmail from "./EnviarEmail"
import painel from "../../data"
import NovaSenha from "./NovaSenha"
import ValidarCodigo from "./ValidarCodigo"
import api from "../../services/api"
import * as style from "./styles"
import rotas from "../../router/data"

const styleModal = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
}

const TrocarSenha = () => {
  const navigate = useNavigate()
  const [component, setComponent] = useState("EnviarEmail")
  const [modal, setModal] = useState(false)
  const [open, setOpen] = useState(false)
  const [alert, setAlert] = useState({
    id: 0,
    open: false,
    status: "success",
    msg: "ok",
  })

  const handleClose = () => {
    setOpen((item) => !item)
  }

  const handleAlert = () => {
    setAlert({ open: false, status: "success", msg: "ok" })
  }

  const handleEmail = async (email) => {
    handleClose()
    try {
      const response = await api.post(`/forgot-my-password/`, { email })
      localStorage.setItem("sindicatoRural@tokenPass", response.data.token)
      setComponent("ValidarCodigo")
      handleClose()
    } catch (error) {
      handleClose()
      setAlert(submitMsg(0, error, "Não foi Possivel Enviar o Email! Tente Novamente!"))
    }
  }

  const handleCodigo = async (codigo) => {
    handleClose()
    try {
      const token = localStorage.getItem("sindicatoRural@tokenPass")
      const config = {
        headers: { Authentication: token },
      }
      const response = await api.post(`/forgot-my-password/${codigo}`, codigo, config)
      localStorage.setItem("sindicatoRural@tokenPass", response.data.token)
      setComponent("NovaSenha")
      handleClose()
    } catch (error) {
      handleClose()
      setAlert(submitMsg(0, error, "Ocorreu algum problema! Envie o Email Novamente!"))
    }
  }

  const handleNewPass = async (pass) => {
    try {
      const token = localStorage.getItem("sindicatoRural@tokenPass")
      const config = {
        headers: { Authentication: token },
      }
      const response = await api.put(`/new-password/`, { password: pass }, config)
      localStorage.removeItem("sindicatoRural@tokenPass")
      setModal(true)
    } catch (error) {
      setAlert(submitMsg(0, error, "Ocorreu algum problema! Tente Novamente!"))
    }
  }

  return (
    <Box sx={style.ContainerBG}>
      <Snackbar
        key={alert.id}
        open={alert.open}
        autoHideDuration={3000}
        onClose={handleAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert
          variant="filled"
          severity={alert.status}
          sx={{ width: "100%" }}>
          {alert.msg}
        </Alert>
      </Snackbar>
      <Box sx={style.AreaLogo}>
        <CardMedia
          component="img"
          image={painel.logo}
          sx={style.Logo}
        />
        <Typography
          color="primary"
          variant="h1"
          component="h1">
          {painel.name}
        </Typography>
      </Box>
      <Box sx={style.ContainerForm}>
        {component === "EnviarEmail" && (
          <EnviarEmail
            func={handleEmail}
            navigate={() => navigate(rotas.login)}
          />
        )}
        {component === "ValidarCodigo" && (
          <ValidarCodigo
            func={handleCodigo}
            navigate={() => setComponent("EnviarEmail")}
          />
        )}
        {component === "NovaSenha" && (
          <NovaSenha
            func={handleNewPass}
            navigate={() => navigate(rotas.login)}
          />
        )}
      </Box>
      <CardMedia
        component="img"
        image={painel.logoDev}
        sx={style.LogoDev}
      />
      {modal && (
        <Modal
          open={modal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={styleModal}>
            <IconButton>
              <CheckCircle color="primary" />
            </IconButton>
            <Typography
              id="modal-modal-title"
              variant="h6"
              color="primary"
              component="h2">
              Senha Alterada com Sucesso!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 5 }}
              onClick={() => navigate(`${process.env.PUBLIC_URL}/painel`)}>
              Voltar ao Login
            </Button>
          </Box>
        </Modal>
      )}
      <Backdrop
        open={open}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          pointerEvents: "none",
        }}
        onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  )
}

export default TrocarSenha
