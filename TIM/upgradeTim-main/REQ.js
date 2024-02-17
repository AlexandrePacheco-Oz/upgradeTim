 function salvar(filename, content){
    
    const aElement = document.createElement('a');
    aElement.setAttribute('download', filename);

    const blob = new Blob([content],{
        type: 'plain/text'
     });

    const href = URL.createObjectURL(blob);
    aElement.href = href;
    // aElement.setAttribute('href', href);
    aElement.setAttribute('target', '_blank');
    aElement.click();
    URL.revokeObjectURL(href);
}
 function baixarArquivo(){

    const chamadoTim = document.getElementById("chamadoTim").value

    const resposta2 = document.getElementById("resposta2").innerHTML
    const textToCopyFormated = resposta2.replaceAll("<br>", "\n");

  
  salvar(chamadoTim + ".txt", textToCopyFormated);

 

  
 }
