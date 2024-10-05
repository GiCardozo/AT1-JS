function cadastro() {
    const nomeCompleto = document.querySelector('#nome').value;
    const pisPasep = document.querySelector('#pis').value;
    const valorHora = parseFloat(document.querySelector('#valorHora').value);
    const horasTrabalhadas = parseFloat(document.querySelector('#horasTrabalhadas').value);

    // Não deixa os campos vazios
    if (!nome || !pis || (valorHora) || (horasTrabalhadas)) {
        alert("Preencha todos os campos");
        return;
    }

    if (valorHora < 20 || valorHora > 500) {
        alert("O valor da hora deve ser entre R$ 20,00 e R$ 500,00");
        return;
    }

    if (horasTrabalhadas < 20 || horasTrabalhadas > 200) {
        alert("A quantidade de horas deve ser entre 20 e 200");
        return;
    }
    
    // Calculando o valor bruto
    const valorBruto = valorHora * horasTrabalhadas;

    // Calculando o INSS
    let inss;

    if (valorBruto <= 1500.99) {
        inss = valorBruto * 0.075;
    } else if (valorBruto <= 3000.99) {
        inss = valorBruto * 0.09;
    } else if (valorBruto <= 5000.99) {
        inss = valorBruto * 0.12;
    } else {
        inss = valorBruto * 0.14;
    }

    // Calculando IRPF
    let irpf;

    if (valorBruto <= 1500.99) {
        irpf = 0;
    } else if (valorBruto <= 2000.99) {
        irpf = valorBruto * 0.075;
    } else if (valorBruto <= 3000.99) {
        irpf = valorBruto * 0.15;
    } else if (valorBruto <= 4000.99) {
        irpf = valorBruto * 0.225;
    } else {
        irpf = valorBruto * 0.275;
    }
    // Calculando valor líquido
    const valorLiquido = valorBruto - inss - irpf;

    // Output
    const resultado = `
        Nome: ${nomeCompleto} <br>
        PIS/PASEP: ${pisPasep} <br>
        Valor Bruto: R$ ${valorBruto.toFixed(2)} <br>
        INSS: R$ ${inss.toFixed(2)} <br>
        IRPF: R$ ${irpf.toFixed(2)} <br>
        Valor Líquido: R$ ${valorLiquido.toFixed(2)}
    `;

    document.querySelector('#resultado').innerHTML = resultado;
}
