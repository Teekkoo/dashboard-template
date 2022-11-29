const base = process.env.PUBLIC_URL

const endpoints = {
  base: "/",
  login: "/login",
  cadastrar: "/cadastrar",
  consultar: "/consultar",
  trocarSenha: "/trocar-senha",
  painel: "/painel",
  meuPerfil: "/painel/meu-perfil",
  sobre: "/painel/sobre",
}

let rota = {}
Object.keys(endpoints).forEach((item) => {
  rota = { ...rota, [item]: base + endpoints[item] }
})

const rotas = rota

export default rotas
