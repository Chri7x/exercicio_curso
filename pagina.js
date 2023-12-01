function check_form(){
   var nome = document.getElementById('nome').value;
   var tel = document.getElementById('telefone').value;
   var dtn = document.getElementById('dataNascimento').value;
   var opgenero1 = document.getElementById('radio1').Checked;
   var opgenero2 = document.getElementById('radio2').Checked;
   var opgenero3 = document.getElementById('radio3').Checked;
   var endereco = document.getElementById('adress').Checked;
   var vaga = document.getElementById('vaga').value;
   if(nome==''){
                alert("Prencha o nome")
                return false;
   }
   if(tel==''){
    alert("Prencha o telefone")
    return false;
}
if(dtn==''){
    alert("Prencha a data de nascimento")
    return false;
}
if((opgenero1==false)&&(opgenero2=false)&&(opgenero3=false)){
    alert("selecione  o Genero")
    return false;
}

s
if(endereco==''){
    alert("Prencha o endereco")
    return false;
}
if(vaga==0){

    alert("escolha uma vaga")
    return false;
}
    return true;
}