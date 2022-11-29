export function submitMsg(id, data, msg) {
  const errorMsg = data.response.data.detail !== undefined && data.response.data.detail[0].msg
  if (data?.response?.status === 404) {
    return { id, open: true, status: "error", msg: errorMsg || msg }
  }
  if (data?.response?.status === 405) {
    return { id, open: true, status: "error", msg: "Problema na Conexão! Atualize a Pagina!" }
  }
  if (data?.response?.status === 0) {
    return { id, open: true, status: "error", msg: "Problema de Conexão! Verifique se há Internet" }
  }
  if (data?.response?.status === 200 || data?.response?.status === 201) {
    return { id, open: false, status: "error", msg: "" }
  }
  return { id, open: true, status: "error", msg: errorMsg || msg }
}

export function ValidaCampo(value, type, isRequired) {
  const stringArray = value.split("")
  if (isRequired && stringArray.length < 1) {
    return "O Campo é Obrigatorio!"
  }
  if (type === "email") {
    if (!stringArray.includes("@")) return "Formato de Email Invalido"
  }
  return ""
}
/*
export function validaCampos(data, id, exceptions) {
  const result = Object.entries(data)
  let count = 0
  if (exceptions !== undefined) {
    result.forEach((item) => {
      if (item[0] !== exceptions[0] && item[0] !== exceptions[1] && item[1] === "") {
        count += 1
      }
    })
  } else {
    result.forEach((item) => {
      if (item[1] === "") {
        count += 1
      }
    })
  }
  if (count > 0) {
    return { id, open: true, status: "error", msg: "Preencha Todos os Campos com * Corretamente " }
  }
  return { id, open: false, status: "error", msg: "" }
} 
*/
