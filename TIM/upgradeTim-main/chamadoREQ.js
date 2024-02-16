function chamado(){

    
    let tipoDoEquipamento = document.getElementById("tipoDoEquipamento").value;
    let nomeDoAnalista  = document.getElementById("nomeAnalista").value;
    let nome  = document.getElementById("nome").value;
    let local = document.getElementById("local").value;
    let hostname = document.getElementById("hostname").value;
    let modelo = document.getElementById("modelo").value;
    let serial = document.getElementById("serial").value;

    let chamadoTim = document.getElementById("chamadoTim").value;
    let descricao =  document.getElementById("descricao").value;  
    let nomeDaPeca =  document.getElementById("nomeDaPeca").value; 
    let equipamentoOperacional =  document.getElementById("equipamentoOperacional").value; 
    let equipamentoDeLoja =  document.getElementById("equipamentoDeLoja").value; 
    let desgasteNatural =  document.getElementById("desgasteNatural").value; 
    let usoInadequado =  document.getElementById("usoInadequado").value; 
    let sofreuAlgumTipoDeImpacto =  document.getElementById("sofreuAlgumTipoDeImpacto").value; 
    let sofreuAlgumTipoDeQueda =  document.getElementById("sofreuAlgumTipoDeQueda").value; 


   
    
    
    
    
    
    
    
    document.getElementById("resposta2").innerHTML = 
    
     "Tipo do equipamento: " + tipoDoEquipamento +
     "<br>Equipamento operacional? " + equipamentoOperacional + 
     "<br>Equipamento de Loja? " + equipamentoDeLoja + 
     "<br>Endereço: " + local + 
     "<br>Nome do responsável: " + nome + 
     "<br>Hostname: " + hostname +
     "<br>Modelo: " + modelo +
     "<br>Serial: " + serial + 
     "<br>Nome da peça / periférico: " + nomeDaPeca + 
     "<br>Desgaste natural? " + desgasteNatural + 
     "<br>Uso inadequado? " + usoInadequado + 
     "<br>Sofreu algum tipo de impacto? " + sofreuAlgumTipoDeImpacto +
     "<br>Sofreu algum tipo de queda? " + sofreuAlgumTipoDeQueda +
     "<br>Causa do Defeito (Descreva):" + descricao +
     "<br>Chamado Tim: " + chamadoTim + 
    "<br><br>Nome do Analista: " + nomeDoAnalista;  
 
   
   
   
    
    
    
}