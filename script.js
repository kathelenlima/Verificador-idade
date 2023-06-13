function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src','foto_crianca_H.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src','foto_jovem_H.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','foto_adulto_H.png')
            } else {
                //idoso
                img.setAttribute('src','foto_idoso_H.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src','foto_crianca_M.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src','foto_jovem_M.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','foto_adulto_M.png')
            } else {
                //idoso
                img.setAttribute('src','foto_idosa_M.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}