/*function nombrefuncion(){

}

function nombrefuncion2(valor){
    
}

function nombrefuncion3(valor){
   return "Algo";    
}

function nombrefuncion45(valor){
  valor = "Ayuda no entiendo nada"
  return valor;  
}

function nombrefuncion5(valor){
    valor = "Este es el valor"+ valor
    return valor;
}

function name(){
    var vnombre = "";
    vnombre = document.getElementById("aqui se coloca la id").value;
    console.log(":v"+vnombre);
}
*/
document.getElementById("La id").innerHTML = vNombre;

function fnEnviar(){
  /*Derando variables */
  var vNombre = vApellido = vCorreo = vInstitucion = "";


  /*Asignando variables */
  vNombre = document.getElementById("idNombre").value;
  vApellido = document.getElementById("idApellido").value;
  vCorreo = document.getElementById("idCorreo").value;
  vInstitucion = document.getElementById("idInstitucion").value;
  


  /*Insertando datos a la vista html */
  document.getElementById("sNombre").innerHTML = vNombre;
  document.getElementById("sApellido").innerHTML = vApellido;
  document.getElementById("sCorreo").innerHTML = vCorreo;
  document.getElementById("sInstitucion").innerHTML = vInstitucion;

  
  console.log("Nombre: "+vNombre 
  + " Apellido: "+vApellido 
  + " Correo: "+vCorreo
  + "Institución :"+vInstitucion);
}


function nombreFuncion2(valor){
  //codigo para procesar ese valor
}

function nombreFuncion3(valor){
  //codigo para procesar ese valor
  valor = "Estes es el valor: "+valor
  return valor;
}


function nombreFuncion4(valor){
  //codigo para procesar ese valor
  valor = "Profe Necesito Ayuda, no entiendo nada!!"    
}



/*comienza el js :v */




function fnEnviar(){
  /*Declarando variables */
  var vNombre = vApellido = vCorreo = vInstitucion = "";


  /*Asignando variables */
  vNombre = document.getElementById("idNombre").value;
  vApellido = document.getElementById("idApellido").value;
  vCorreo = document.getElementById("idCorreo").value;
  vInstitucion = document.getElementById("idInstitucion").value;
  


  /*Insertando datos a la vista html */
  document.getElementById("sNombre").innerHTML = vNombre;
  document.getElementById("sApellido").innerHTML = vApellido;
  document.getElementById("sCorreo").innerHTML = vCorreo;
  document.getElementById("sInstitucion").innerHTML = vInstitucion;

  if(validarcampos()==true){
      var Modalhtml = document.getElementById("mRegistro"); /*se llama al elemento*/
      var miModal = new bootstrap.Modal(Modalhtml); /*se le tansforma al estilo bootstrap a la variable llamada*/
      miModal.show(); /*para mostrar la nueva variable*/
  }
  
  
  console.log("Nombre: "+vNombre 
  + " Apellido: "+vApellido 
  + " Correo: "+vCorreo
  + "Institución :"+vInstitucion);
}
function validarcampos() {
  /*debugger*/ /*para depurar errores*/
  var valor=true; /*true es el valor por defecto, en caso se cumpla la condición de los ifs*/
  var vNombre = vApellido = vCorreo = vInstitucion = "";
  /*Asignando variables */
  vNombre = document.getElementById("idNombre").value;
  vApellido = document.getElementById("idApellido").value;
  vCorreo = document.getElementById("idCorreo").value;
  vInstitucion = document.getElementById("idInstitucion").value;

var ObjNombre = document.getElementById("errorname");
var ObjApellido = document.getElementById("errorapellido");
var ObjCorreo = document.getElementById("errorcorreo");
var ObjInstitucion = document.getElementById("errorinstitucion");

  if(vNombre.trim().length == 0){  /*length=largo de string de texto incluye espacios*//*trim es para que no cuente los espacios*/
      valor = false;
      /*  
      alert('No has escrito tu nombre');
      /*error.innerHTML="No has escrito tu nombre";
      return;*/
      ObjNombre.style.display="block";
  }
  else{
      ObjNombre.style.display="none";
  }
  if(vApellido.trim().length == 0){
      valor = false;
      /*
      alert('No has escrito tu apellido');
      /*error.innerHTML="No has escrito tu apellido";
      return;*/
      ObjApellido.style.display="block";
  }
  else{
      ObjApellido.style.display="none";
  }
  if(vCorreo.trim().length == 0){
      valor = false;
      /*
      alert('No has escrito tu correo');
      /*error.innerHTML="No has escrito tu correo";
      return;
      document.getElementById("errorcorreo").style.display="block"*/
      ObjCorreo.style.display="block";
  }
  else{
    /*document.getElementById("errorcorreo").style.display="none"*/
      ObjCorreo.style.display="none";
  }
  if(vInstitucion.trim().length == 0){
      valor = false;
      /*
      alert('No has escrito tu institución');
      /*error.innerHTML="No has escrito tu institución";
      return;*/
      ObjInstitucion.style.display="block";
  }
  else{
      ObjInstitucion.style.display="none";
  }
  return valor;
}