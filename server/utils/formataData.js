function formataParaUsuario(data) {
    const partesData = data.split('-');
    const dataFormatada = partesData[1] + '/' + partesData[0] + '/' + partesData[2]
    return dataFormatada
}

module.exports = {
    formataParaUsuario
}