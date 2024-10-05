function calcularResultado() {
    const nome = document.querySelector('#nome').value;
    const numeroInscricao = document.querySelector('#numeroInscricao').value;
    const anoNascimento = parseInt(document.querySelector('#anoNascimento').value);
    
    const notaNatureza = parseInt(document.querySelector('#notaNatureza').value);
    const notaHumanas = parseInt(document.querySelector('#notaHumanas').value);
    const notaLinguagens = parseInt(document.querySelector('#notaLinguagens').value);
    const notaMatematica = parseInt(document.querySelector('#notaMatematica').value);
    const notaRedacao = parseInt(document.querySelector('#notaRedacao').value);

    // Não permite que faça o envio vazio
    if (nome === "" || numeroInscricao === "" || (anoNascimento) || (notaNatureza) || (notaHumanas) || (notaLinguagens) || (notaMatematica) || (notaRedacao)) {
        alert("Preencha todos os campos");
        return;
    }

    // Não permite que faça o envio vazio
    if (anoNascimento < 1901 || anoNascimento > 2007) {
        alert("Ano de nascimento deve ser entre 1901 e 2007");
        return;
    }
   
    let resultado = "";

    // Mostra se o aluno foi aprovado/reprovado com base em sua nota utilizando if-else
    if (notaNatureza > 550) {
        resultado += `<label>Natureza: ${notaNatureza} - <strong class="aprovado">Aprovado!</strong></label><br>`;
    } else if (notaNatureza < 400) {
        resultado += `<label>Natureza: ${notaNatureza} - <strong class="reprovado">Reprovado!</strong></label><br>`;
    } else {
        resultado += `<label>Natureza: ${notaNatureza} - <strong class="recuperacao">Recuperação!</strong></label><br>`;
    }

    // Mostra se o aluno foi aprovado/reprovado com base em sua nota utilizando if-else
    if (notaHumanas > 550) {
        resultado += `<label>Humanas: ${notaHumanas} - <strong class="aprovado">Aprovado!</strong></label><br>`;
    } else if (notaHumanas < 400) {
        resultado += `<label>Humanas: ${notaHumanas} - <strong class="reprovado">Reprovado!</strong></label><br>`;
    } else {
        resultado += `<label>Humanas: ${notaHumanas} - <strong class="recuperacao">Recuperação!</strong></label><br>`;
    }

    // Mostra se o aluno foi aprovado/reprovado com base em sua nota utilizando if-else
    if (notaLinguagens > 550) {
        resultado += `<label>Linguagens: ${notaLinguagens} - <strong class="aprovado">Aprovado!</strong></label><br>`;
    } else if (notaLinguagens < 400) {
        resultado += `<label>Linguagens: ${notaLinguagens} - <strong class="reprovado">Reprovado!</strong></label><br>`;
    } else {
        resultado += `<label>Linguagens: ${notaLinguagens} - <strong class="recuperacao">Recuperação!</strong></label><br>`;
    }

    // Mostra se o aluno foi aprovado/reprovado com base em sua nota utilizando if-else
    if (notaMatematica > 550) {
        resultado += `<label>Matemática: ${notaMatematica} - <strong class="aprovado">Aprovado!</strong></label><br>`;
    } else if (notaMatematica < 400) {
        resultado += `<label>Matemática: ${notaMatematica} - <strong class="reprovado">Reprovado!</strong></label><br>`;
    } else {
        resultado += `<label>Matemática: ${notaMatematica} - <strong class="recuperacao">Recuperação!</strong></label><br>`;
    }
    // Mostra se o aluno foi aprovado/reprovado com base em sua nota utilizando if-else

    if (notaRedacao > 550) {
        resultado += `<label>Redação: ${notaRedacao} - <strong class="aprovado">Aprovado!</strong></label><br>`;
    } else if (notaRedacao < 400) {
        resultado += `<label>Redação: ${notaRedacao} - <strong class="reprovado">Reprovado!</strong></label><br>`;
    } else {
        resultado += `<label>Redação: ${notaRedacao} - <strong class="recuperacao">Recuperação!</strong></label><br>`;
    }

    document.querySelector('#resultado').innerHTML = resultado;
}
