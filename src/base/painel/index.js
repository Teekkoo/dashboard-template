import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import AccountCircle from "@mui/icons-material/AccountCircle"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import { CardMedia, Divider, Paper } from "@mui/material"
import { Outlet, useNavigate } from "react-router-dom"
import painel from "../../data"
import rotas from "../../router/data"
import Sidebar from "../../components/Sidebar"
import * as style from "./styles"

const BasePainel = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={style.Container}>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <CardMedia
              component="img"
              image={painel.logo}
              sx={style.Logo}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                width="max-content"
                m="0 10px"
                variant="h3"
                component="h3">
                {painel.name}
              </Typography>
            </Box>

            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
                <style.StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot">
                  <AccountCircle sx={style.IconUser} />
                </style.StyledBadge>
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <Typography
                  m="10px"
                  variant="h4"
                  component="h4">
                  Ronaldo Jhonathan
                </Typography>
                <Divider />
                <MenuItem onClick={() => navigate(rotas.painel)}>Pagina Inicial</MenuItem>
                <MenuItem onClick={() => navigate(rotas.meuPerfil)}>Meu Perfil</MenuItem>
                <MenuItem onClick={() => navigate(rotas.sobre)}>Sobre Nós</MenuItem>
                <MenuItem onClick={() => navigate(rotas.login)}>Sair</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={style.Main}>
        <Box sx={style.Sidebar}>
          <Sidebar />
        </Box>
        <Box sx={style.Content}>
          <Paper
            sx={style.Paper}
            elevation={3}>
            <Outlet />
          </Paper>
        </Box>
      </Box>
      <Box
        bgcolor={(theme) => theme.palette.primary.main}
        sx={style.Footer}
        component="footer">
        <CardMedia
          component="img"
          image={painel.logoDev}
          sx={style.LogoFooter}
        />
      </Box>
    </Box>
  )
}

export default BasePainel
