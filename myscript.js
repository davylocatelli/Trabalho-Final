


var livros = ["Livro Incrível", "Livro Fantástico", "Aventuras Mágicas"]
quantidade1= []
quantidade2= []
quantidade3= []
quantTotal = 0
var preçoTotal = 0
function total() {
  var total1 = 0
  var preço1 = document.getElementById("idPreço1").value
  console.log(preço1)
  var quant = document.getElementById("idQuantidade").value
  quantidade1.push(quant)
  total1 = preço1 * quant
  console.log(total1)
  document.getElementById("preçototal1").value = total1
}

function total2() {
  var total2 = 0
  var preço2 = document.getElementById("idPreço2").value
  console.log(preço2)
  var quant = document.getElementById("quantidade2").value
  quantidade1.push(quant)
  total2 = preço2 * quant
  console.log(total2)

  document.getElementById("preçototal2").value =total2
}

function total3() {
  var total3 = 0
  var preço3 = document.getElementById("idPreço3").value
  var quant = document.getElementById("quantidade3").value
  quantidade3.push(quant)
  total3 = preço3 * quant
  document.getElementById("preçototal3").value =total3
}

quantTotal.push(quantidade1)
quantTotal.push(quantidade2)
quantTotal.push(quantidade3)

console.log(quantTotal)

function totalfinal() {
  var totalfim = 0
  var t1 = document.getElementById("preçototal1").value
  var t2 = document.getElementById("preçototal2").value
  var t3 = document.getElementById("preçototal3").value
  var totalfim =parseInt(t1) + parseInt(t2) + parseInt(t3)
  document.getElementById("preçototal").value ="R$"+totalfim
  preçoTotal = totalfim
}
/*
console.log(preçoTotal)
console.log(quantidade)
console.log(livros)*/

function validar(){
if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
  alert("Email Inválido")
  return
}
}

function textoemail() {
  var nome = document.getElementById("nome").value
  var cpf = document.getElementById("cpf").value
  console.log(cpf)
  document.getElementById("tEmail").value = nome + " do cpf: " + cpf + " comprou " + quantTotal + ""
}



 /*
function checkout() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length > 0) {
      let total = 0;
      let quantity = 0;

      for (const item of cart) {
          total += item.total;
          quantity += item.quantity;
      }

      // Redirecionar para a página de cadastro com os parâmetros na URL
      window.location.href = `cadastro.html?total=${total.toFixed(2)}&quantity=${quantity}`;

      alert('Compra realizada com sucesso! Total: R$ ' + total.toFixed(2));
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCart();
  } else {
      alert('Adicione produtos ao carrinho antes de finalizar a compra.');
  }
}*/