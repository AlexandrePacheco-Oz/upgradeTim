
function chamado(){

    
let nome = document.getElementById("nome").value;
let local  = document.getElementById("local").value;
let data = document.getElementById("data").value;
let hora = document.getElementById("hora").value;
let cervelo = document.getElementById("cervelo").value;
let Telefone = document.getElementById("Telefone").value;
let patrimonio = document.getElementById("patrimonio").value;
let chamadoTim =  document.getElementById("chamadoTim").value;  
let descricao =  document.getElementById("Descricao").value; 



let dataFormatada = new Date(data)

let dataFinal = dataFormatada.setDate(dataFormatada.getDate()+1);

const dataFinalFormatada = new Intl.DateTimeFormat("pt-BR").format(dataFinal);



document.getElementById("resposta").innerHTML =  "Agendado com o colaborador " + nome + " para atendimento presencial em " + local + " no dia " + dataFinalFormatada  + " às " + hora + "hs." + "<br>Chamado Cervello: "  +  cervelo + " <br>Chamado Tim: " + chamadoTim;

document.getElementById("resposta2").innerHTML =  "Efetuado contato com " + nome + " "+ "Telefone: " + Telefone + ", onde solicita o atendimento conforme agendamento abaixo." +  "<br><br>Alinhado pelo Dispatcher: Rick Silva / Recorrência Coordenador Luis Delfino" + "<br><br>Data atendimento: " + dataFinalFormatada+ "<br>Horário para atendimento: " + hora + "hs" + "<br>Empresa: Tim" + "<br>Nome: " + nome
+ "<br>Endereço: " + local + "<br>Telefone: " + Telefone + "<br>Equipamento/patrimônio: " + patrimonio + "<br>Descrição do problema: " + descricao;  


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





