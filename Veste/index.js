
function chamado(){

    
let nome = document.getElementById("nome").value;
let cervelo = document.getElementById("cervelo").value;
let Telefone = document.getElementById("Telefone").value;
let patrimonio = document.getElementById("patrimonio").value;
let chamadoTim =  document.getElementById("chamadoTim").value;  
let descricao =  document.getElementById("Descricao").value; 




document.getElementById("resposta").innerHTML =  "Número do chamado: " + chamadoTim + "<br>Nome do usuário: " + nome + "<br>Telefone para Contato: " + Telefone  + "<br>Código da Filial:" + patrimonio + "<br>Nome da Loja:" + cervelo + "<br>Chamado Cervello: "  +  cervelo + " <br>Descriçao do problema/solicitaçao: " + descricao;


}

function reset(){
    document.getElementById("nome").value = ""; 
    document.getElementById("local").value = "";
    document.getElementById("data").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("cervelo").value = "";
    document.getElementById("Telefone").value = "";
    document.getElementById("patrimonio").value = "";
    document.getElementById("chamadoTim").value = "";
    document.getElementById("Descricao").value = "";
    document.getElementById("resposta").innerHTML = "";
    document.getElementById("resposta2").innerHTML = "";

}


function copiar(elementHtml){

    const textToCopy = document.getElementById(elementHtml).innerHTML;
    const textToCopyFormated = textToCopy.replaceAll("<br>", "\n");
console.log(textToCopy);
console.log(textToCopyFormated);

    const tempInput = document.createElement("textarea");
    tempInput.value = textToCopyFormated;
    document.body.appendChild(tempInput);
   

     tempInput.select();
     tempInput.setSelectionRange(0, 99999);
   
     document.execCommand("copy");
   
     document.body.removeChild(tempInput);
   
     alert("Text copied to clipboard: " +textToCopyFormated);
}

// @Pacheco_oz





