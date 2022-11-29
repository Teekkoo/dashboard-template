import { Badge } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))

export const Container = { display: "flex", flexDirection: "column", height: "100vh" }

export const Logo = { width: "60px" }

export const IconUser = { width: "40px", height: "40px" }

export const Main = { display: "flex", flexGrow: 1, alignSelf: "stretch" }

export const Sidebar = { width: "14vw", minWidth: "200px", padding: "2vh 0" }

export const Content = { flexGrow: 1, padding: "2vh" }

export const Paper = { height: "100%", padding: "10px" }

export const Footer = { padding: "5px", display: "flex", justifyContent: "center" }

export const LogoFooter = { width: "50px" }
