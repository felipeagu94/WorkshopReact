const str = "342552,22"
const validarFormatoMoneda = (value) => {
    const expresion = new RegExp(/^[^0]([0-9])+(\.){0,1}([0-9]{0,2})$/)
    if (!expresion.test(value)) return "Bloquedo"
    return "Permitido"
}
console.log(validarFormatoMoneda(str))