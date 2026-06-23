let herois = [
    { vitorias: 107, derrotas: 28 },
    { vitorias: 36, derrotas: 3 },
    { vitorias: 6, derrotas: 0 }
]

function rank(vitorias, derrotas) {
    let saldo = vitorias - derrotas
    let nivel = ""

    if (saldo <= 10) {
        nivel = "Ferro"
    } else if (saldo <= 20) {
        nivel = "Bronze"
    } else if (saldo <= 50) {
        nivel = "Prata"
    } else if (saldo <= 80) {
        nivel = "Ouro"
    } else if (saldo <= 90) {
        nivel = "Diamante"
    } else if (saldo <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

    return nivel
}

for (let contador = 0; contador < herois.length; contador++) {
    let saldoVitorias = herois[contador].vitorias - herois[contador].derrotas
    let nivel = rank(herois[contador].vitorias, herois[contador].derrotas)

    console.log("O Herói tem de saldo de " + saldoVitorias + " vitórias" + " está no nível de " + nivel)
}