import {
  Alert,
  Backdrop,
  Box,
  Button,
  CardMedia,
  CircularProgress,
  Link,
  Modal,
  Snackbar,
  Typography,
} from "@mui/material"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import InputText from "../../components/inputText"
import painel from "../../data"
import rotas from "../../router/data"
import { submitMsg } from "../../util/submits"
import * as style from "./styles"

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
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

  const handleUser = (text) => {
    setUser(text)
  }

  const handlePass = (text) => {
    setPass(text)
  }

  const handleAlert = () => {
    setAlert({ open: false, status: "success", msg: "ok" })
  }

  const handleLogin = async () => {
    handleClose()
    try {
      const response = "realiza requisição"
      console.log(response)
      navigate(rotas.painel)
      handleClose()
    } catch (error) {
      handleClose()
      setAlert(submitMsg(0, error, "Erro ao Entrar! Tente Novamente!"))
    }
  }

  console.log("user: ", user, "/ pass:", pass)

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
      <Box>
        <Box sx={style.ContainerForm}>
          <Typography
            variant="h3"
            color="primary"
            component="h3">
            Acesse a Sua Conta
          </Typography>
          <Box sx={style.CampoInput}>
            <InputText
              getValue={handleUser}
              title="CPF"
              typeInput="cpf"
              isRequired
              msgError=""
            />
          </Box>
          <Box sx={style.CampoInput}>
            <InputText
              getValue={handlePass}
              title="Senha"
              typeInput="password"
              isRequired
              msgError=""
            />
          </Box>
          <Box sx={style.AreaButtons}>
            <Button
              underline="hover"
              color="primary"
              onClick={() => navigate(rotas.trocarSenha)}>
              Esqueci Minha Senha!
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={user === "" || pass === ""}
              onClick={handleLogin}>
              Entrar
            </Button>
          </Box>
        </Box>
        <Typography textAlign="center">
          Não Possui Uma Conta?{" "}
          <Button
            color="primary"
            onClick={() => setModal(true)}>
            Cadastre-se!
          </Button>
        </Typography>
      </Box>
      <CardMedia
        component="img"
        image={painel.logoDev}
        sx={style.LogoDev}
      />
      {/* Modal Cadastro */}
      <Modal
        open={modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style.StyleModal}>
          <Typography
            id="modal-modal-title"
            variant="h2"
            component="h2">
            Realize seu Cadastro!
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}>
            Para Realizar seu Cadastro, vá até a sede da empresa com seus documentos pessoais e faça
            seu cadastro em alguns minutos!
          </Typography>
          <Button
            sx={{ margin: "20px auto 10px" }}
            variant="contained"
            color="primary"
            onClick={() => setModal(false)}>
            Entendi
          </Button>
        </Box>
      </Modal>
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

export default Login
