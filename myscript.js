function adicionar(){
    var atual = 0
    var novo = atual + 1;
    document.getElementById("quantidade").value = novo;
}

function menos(){
    var atual = document.getElementById("quantidade").value;
    if(atual > 0) {
      var novo = atual - 1;
      document.getElementById("quantidade").value = novo;
    }
  }