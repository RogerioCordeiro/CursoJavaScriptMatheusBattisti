function classificarNumero(numero) {
  if (numero > 0) {
    if (numero % 2 === 0) {
      return "Positivo e Par";
    } else {
      return "Positivo e Ímpar";
    }
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return "Neutro";
  }
}

function classificaNumero(numero) {
  if (numero > 0) {
    if (numero % 2 === 0) {
      return ("Positivo e Par")
    } else {
      return ("Positivo e Impar")
    }
  } else if (numero < 0) {
    return ("Negativo")
  } else {
    return ("Neutro")
  }
}
