function Validacpf(cpfConfirm) {
  const cpf = cpfConfirm.replace(/\D/g, "")
  if (cpf.toString().length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false
  let result = true
  ;[9, 10].forEach((j) => {
    let soma = 0
    let r
    cpf
      .split(/(?=)/)
      .splice(0, j)
      .forEach((e, i) => {
        soma += parseInt(e, 10) * (j + 2 - (i + 1))
      })
    r = soma % 11
    r = r < 2 ? 0 : 11 - r
    if (r !== Number(cpf.substring(j, j + 1))) result = false
  })
  return result
}

const validaInput = (value, type) => {
  let newvalue = []
  let trueValue = []
  if (type === "cpf") {
    newvalue = value.split("").filter((char) => char !== " ")
    trueValue = newvalue.filter((char) => Number.isInteger(Number(char)))
    if (newvalue.length === 4 && newvalue[3] !== ".") {
      newvalue.splice(3, 0, ".")
    }
    if (newvalue.length === 8 && newvalue[7] !== ".") {
      newvalue.splice(7, 0, ".")
    }
    if (newvalue.length === 12 && newvalue[11] !== "-") {
      newvalue.splice(11, 0, "-")
    }
    if (trueValue.length === 11) {
      newvalue = newvalue.join("")
      if (Validacpf(newvalue)) {
        return [newvalue, trueValue.join(""), ""]
      }
      return [newvalue, "", "O CPF é Invalido"]
    }
    if (trueValue.length < 11) {
      return [newvalue.join(""), "", "O CPF deve conter 11 Digitos"]
    }
    if (trueValue.length > 11) {
      return [newvalue.join(""), "", "O CPF deve conter apenas 11 Digitos"]
    }
  }
  if (type === "email") {
    newvalue = value.split("").filter((char) => char !== " ")
    trueValue = newvalue.join("")
    if (newvalue.includes("@")) {
      if (newvalue.includes(".")) {
        return [trueValue, trueValue, ""]
      }
    }
    return [trueValue, "", "Formato de Email Invalido"]
  }
  if (type === "password") {
    newvalue = value.split("").filter((char) => char !== " ")
    trueValue = newvalue.join("")
    return [trueValue, trueValue, ""]
  }
  if (type === "codigo") {
    newvalue = value.split("").filter((char) => char !== " ")
    trueValue = newvalue.join("")
    return [trueValue.toUpperCase(), trueValue.toUpperCase(), ""]
  }
  return [newvalue.join(""), "", ""]
}

export default validaInput

/*
  <InputText
    getValue= função para armazenar o valor do input (string) *obrigatorio
    title= titulo/nome do input (string) *obrigatorio
    typeInput= tipo de dados (cpf/rg/cep/date/password/email/text) *obrigatorio
    isRequired = se é obrigatorio (true/false) *obrigatorio
    msgError= mensagem alternativa de erro (string) opcional
  />
*/
