/*
function adicionar(){
    var atual = 0
    var novo = atual + 1;
    document.getElementById("quantidade").value = novo;
    document.write(novo)
}

function menos(){
    var atual = document.getElementById("quantidade").value;
    if(atual > 0) {
      var novo = atual - 1;
      document.getElementById("quantidade").value = novo;
    }
  }
  */
function total() {
  var total1 = 0
  var preço1 = document.getElementById("idPreço1").value
  console.log(preço1)
  var quant = document.getElementById("idQuantidade").value
  console.log(quant)
  total1 = preço1 * quant
  console.log(total1)
  document.getElementById("preçototal1").value = "R$" + total1
}

function total2() {
  var total2 = 0
  var preço2 = document.getElementById("idPreço2").value
  console.log(preço2)
  var quant = document.getElementById("quantidade2").value
  console.log(quant)
  total2 = preço2 * quant
  console.log(total2)

  document.getElementById("preçototal2").value ="R$"+total2
}

function total3() {
  var total3 = 0
  var preço3 = document.getElementById("idPreço3").value
  console.log(preço3)
  var quant = document.getElementById("quantidade3").value
  console.log(quant)
  total3 = preço3 * quant
  console.log(total3)
  document.getElementById("preçototal3").value ="R$"+total3
}

console.log(total2)


/*
function totalfinal() {
  var totalfim = 0
  var t1 = document.getElementById("preçototal1")
  var t2 = document.getElementById("preçototal2")
  var t3 = document.getElementById("preçototal3")
  var totalfim = t1 + t2 + t3
  console.log = totalfim
  document.getElementById("preçototal").value ="R$"+totalfim
}*/