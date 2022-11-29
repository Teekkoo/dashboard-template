import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import {
  Button,
  CardMedia,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { DonutSmall, Home, PersonAdd, Search } from "@mui/icons-material"
import painel from "../../data"
import rotas from "../../router/data"
import * as style from "./styles"

const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <Paper
      sx={style.Container}
      elevation={3}>
      <CardMedia
        component="img"
        image={painel.logo}
        sx={style.ImgLogo}
      />

      <Typography
        variant="h3"
        color="primary">
        Menu
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home
                color="primary"
                sx={style.IconMenu}
              />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="h4">Inicio</Typography>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonAdd
                color="primary"
                sx={style.IconMenu}
              />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="h4">Cadastrar</Typography>} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Search
                color="primary"
                sx={style.IconMenu}
              />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="h4">Consultar</Typography>} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DonutSmall
                color="primary"
                sx={style.IconMenu}
              />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="h4">Dashboard</Typography>} />
          </ListItemButton>
        </ListItem>
      </List>
      <Box sx={style.Button}>
        <Button onClick={() => navigate(rotas.sobre)}>Saiba Mais</Button>
      </Box>
    </Paper>
  )
}

export default Sidebar
