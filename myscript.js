
var livros = ["Livro Incrível", "Livro Fantástico", "Aventuras Mágicas"];
var preçoTotal = 0;

function total() {
  var total1 = 0;
  var preço1 = document.getElementById("idPreço1").value;
  var quant = document.getElementById("idQuantidade").value;
  total1 = preço1 * quant;
  document.getElementById("preçototal1").value = total1;
}

function total2() {
  var total2 = 0;
  var preço2 = document.getElementById("idPreço2").value;
  var quant = document.getElementById("quantidade2").value;
  total2 = preço2 * quant;
  document.getElementById("preçototal2").value = total2;
}

function total3() {
  var total3 = 0;
  var preço3 = document.getElementById("idPreço3").value;
  var quant = document.getElementById("quantidade3").value;
  total3 = preço3 * quant;
  document.getElementById("preçototal3").value = total3;

}

function totalfinal() {
  var totalfim = 0;
  var t1 = document.getElementById("preçototal1").value
  var t2 = document.getElementById("preçototal2").value
  var t3 = document.getElementById("preçototal3").value
  totalfim = parseInt(t1) + parseInt(t2) + parseInt(t3)
  document.getElementById("preçototal").value = "R$" + totalfim

}
function textoemail() {
  var livros = ["Incrível", "Fantástico", "Aventuras Mágicas"];
  var quantidade = []
  q1 = document.getElementById("idQuantidade").value
  q2 = document.getElementById("quantidade2").value
  q3 = document.getElementById("quantidade3").value
  quantidade.push(q1)
  quantidade.push(q2)
  quantidade.push(q3)

  var totais = [];
  var t1 = document.getElementById("preçototal1").value
  var t2 = document.getElementById("preçototal2").value
  var t3 = document.getElementById("preçototal3").value
  totais.push(t1)
  totais.push(t2)
  totais.push(t3)

  quantTotal = parseInt(q1) + parseInt(q2) + parseInt(q3)
  var nome = document.getElementById("nome").value
  var cpf = document.getElementById("cpf").value

  document.getElementById("tEmail").value = nome + " do cpf: " + cpf + " comprou " + quantidade[0] + " unidades do livro " + livros[0] + " gastando o total de R$" + totais[0] +
  ", comprou " + quantidade[1] + " unidades do livro " + livros[1] + " gastando o total de R$" + totais[1] + " e comprou " + quantidade[2] + " unidades do livro " + livros[2] + " gastando o total de R$" + totais[2] + ". Livraria por Davy Locatelli, Rafaela Scolaro e Gabriela Prigol."

}

/*function vendas() {
  var t1 = document.getElementById("preçototal1").value
  var t2 = document.getElementById("preçototal2").value
  var t3 = document.getElementById("preçototal3").value
  var PreçoTotal = parseInt(t1) + parseInt(t2) + parseInt(t3)

  // Verifica se o valor é válido antes de adicioná-lo ao array e armazená-lo no localStorage
  if (!isNaN(PreçoTotal)) {
    var arrayTotal = [];
    arrayTotal.push(PreçoTotal);

    localStorage.setItem('arrayTotalSalvo', JSON.stringify(arrayTotal));
  } else {
    console.error("Valor inválido. Certifique-se de inserir um número.");
  }

  var totalVendasArray = JSON.parse(localStorage.getItem('arrayTotalSalvo'));

  // Calcula o total de vendas
  var totalVendas = totalVendasArray.reduce((acc, curr) => acc + curr, 0);

  // Armazena o total de vendas no localStorage
  localStorage.setItem('total_vendas', totalVendas);

  // Atualiza o valor no elemento com id "vendas"
  document.getElementById('vendas').value = totalVendas;
}
*/

/*function vendasTotais() {
  var t1 = document.getElementById("preçototal1").value;
  var t2 = document.getElementById("preçototal2").value;
  var t3 = document.getElementById("preçototal3").value;
  
  var PreçoTotal = parseInt(t1) + parseInt(t2) + parseInt(t3);
  if (!isNaN(PreçoTotal)) {
    var arrayTotal = [];
    arrayTotal.push(PreçoTotal);

    localStorage.setItem('arrayTotalSalvo', JSON.stringify(arrayTotal));
  } else {
    console.error("Valor inválido. Certifique-se de inserir um número.");
  }

  var totalVendas = 0; 

  var arraySalvo = JSON.parse(localStorage.getItem('arrayTotalSalvo'));

  for (let index = 0; index < arraySalvo.length; index++) {
    totalVendas += arraySalvo[index];
  }

  localStorage.setItem('total_vendas', totalVendas);

  document.getElementById('vendas').value = totalVendas;
}*/



function validar() {
  var email = document.getElementById("email").value
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    alert("Email inválido")
    return
  }

  q1 = document.getElementById("idQuantidade").value
  q2 = document.getElementById("quantidade2").value
  q3 = document.getElementById("quantidade3").value
  quantTotal = parseInt(q1) + parseInt(q2) + parseInt(q3)
  
  if(quantTotal < 1){
    alert("Precisa comprar algo!")
    return false
  }
}
