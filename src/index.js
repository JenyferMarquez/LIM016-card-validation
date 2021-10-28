
import validator from './validator.js';

// ----- boton ver mas ------//

document.getElementById("verMas").addEventListener("click",()=>{    
    document.getElementById("principal").style.display= "none" ;
    document.getElementById("productos").style.display= "block" ;
    document.getElementById("aceiteRosas").style.display= "none" ;
    document.getElementById("aceiteMenta").style.display= "none ";
    document.getElementById("aceiteCanela").style.display= "none" ;

} 
)   
// ----- boton aceite de Rosas ------//
document.getElementById("aceitRosas").addEventListener("click",()=>{ 
    
        document.getElementById("principal").style.display= "none" ;
        document.getElementById("productos").style.display= "none" ;
        document.getElementById("aceiteRosas").style.display= "block" ;
        document.getElementById("aceiteMenta").style.display= "none ";
        document.getElementById("aceiteCanela").style.display= "none" ;

}   
)

// ----- boton aceite de Menta ------//
document.getElementById("aceiMenta").addEventListener("click",()=>{ 
    
    document.getElementById("principal").style.display= "none" ;
    document.getElementById("productos").style.display= "none" ;
    document.getElementById("aceiteRosas").style.display= "none" ;
    document.getElementById("aceiteMenta").style.display= "block ";
    document.getElementById("aceiteCanela").style.display= "none" ;

}   
)
// ----- boton aceite de Canela ------//
document.getElementById("aceiCanela").addEventListener("click",()=>{ 
    
    document.getElementById("principal").style.display= "none" ;
    document.getElementById("productos").style.display= "none" ;
    document.getElementById("aceiteRosas").style.display= "none" ;
    document.getElementById("aceiteMenta").style.display= "none ";
    document.getElementById("aceiteCanela").style.display= "block" ;

}   
)
// ----- boton comprar ------//   
document.getElementById("comprarUno").addEventListener("click",()=>{ 
    
    document.getElementById("principal").style.display= "none" ;
    document.getElementById("productos").style.display= "none" ;
    document.getElementById("aceiteMenta").style.display= "none" ;
    document.getElementById("formularioDePago").style.display= "block";
    document.getElementById("aceiteCanela").style.display= "none" ;
    document.getElementById("aceiteRosas").style.display= "none";
}   
)


document.getElementById("volverUno").addEventListener("click",()=>{ 
    
    document.getElementById("principal").style.display= "block" ;
    document.getElementById("productos").style.display= "none" ;
    document.getElementById("aceiteMenta").style.display= "none" ;
    document.getElementById("formularioDePago").style.display= "none";
    document.getElementById("aceiteCanela").style.display= "none" ;
    document.getElementById("aceiteRosas").style.display= "none"
}   
)

document.getElementById("comprarDos").addEventListener("click",()=>{ 
    
    document.getElementById("principal").style.display= "none" ;
    document.getElementById("productos").style.display= "none" ;
    document.getElementById("aceiteMenta").style.display= "none" ;
    document.getElementById("formularioDePago").style.display= "block";
    document.getElementById("aceiteRosas").style.display= "none" ;

}   
)

document.getElementById("comprarTres").addEventListener("click",()=>{ 
    
    document.getElementById("principal").style.display= "none" ;
    document.getElementById("productos").style.display= "none" ;
    document.getElementById("aceiteMenta").style.display= "none" ;
    document.getElementById("formularioDePago").style.display= "block";
    document.getElementById("aceiteCanela").style.display= "none" ;
    document.getElementById("aceiteRosas").style.display= "none";

}   
)

document.getElementById("volverDos").addEventListener("click",()=>{ 
    
    document.getElementById("principal").style.display= "block" ;
    document.getElementById("productos").style.display= "none" ;
    document.getElementById("aceiteMenta").style.display= "none" ;
    document.getElementById("formularioDePago").style.display= "none";
    document.getElementById("aceiteCanela").style.display= "none" ;
    document.getElementById("aceiteRosas").style.display= "none"
}   
)


document.getElementById("volverTres").addEventListener("click",()=>{ 
    
    document.getElementById("principal").style.display= "block" ;
    document.getElementById("productos").style.display= "none" ;
    document.getElementById("aceiteMenta").style.display= "none" ;
    document.getElementById("formularioDePago").style.display= "none";
    document.getElementById("aceiteCanela").style.display= "none" ;
    document.getElementById("aceiteRosas").style.display= "none"
}   
)


document.getElementById("volverCuatro").addEventListener("click",()=>{ 
    
    document.getElementById("principal").style.display= "block" ;
    document.getElementById("productos").style.display= "none" ;
    document.getElementById("aceiteMenta").style.display= "none" ;
    document.getElementById("formularioDePago").style.display= "none";
    document.getElementById("aceiteCanela").style.display= "none" ;
    document.getElementById("aceiteRosas").style.display= "none"
}   
)


/*global userNum*/
/*eslint no-undef: ["error", { "typeof": true }] */

let validCaracteres= function validarNumeros(userNum) {
    userNum.addEventListener("keyup", (e) => {
        let filtrarNumero = e.target.value;
        userNum.value = filtrarNumero.replace(/\s/g, "").replace(/\D/g, "");
    });
}
validCaracteres(userNum);

let dato = document.getElementById("dato");
let resultado= document.getElementById("resultado");
let texto= document.getElementById("textoResultado");
let mnsjeValidacion= document.getElementById("mensajeValidacion");

const confirmacionTarjeta = () => {
	

    let numeroTarjeta = document.getElementById("userNum").value // Valor numero de tarjeta 
    
    if (numeroTarjeta.length < 16 || numeroTarjeta === 0) { //alert número erróneo 
        mnsjeValidacion.innerHTML="Ingresa un número de tarjeta válido.";

    }
    else {
        let validacion = validator.isValid(numeroTarjeta); //retorna verdadero o falso
 
  
        if (validacion == false) {  //tiene el resultado de validator == compara === valor y tipo de datos el mismo 
            mnsjeValidacion.innerHTML="Revisa tus datos nuevamente.";
            return
  
  
        } else {
           
            dato.style.display="none";
            document.getElementById("formularioDePago").style.display= "block";
            resultado.style.display="block";
            texto.innerHTML="Ingresado correctamente " + validator.maskify(numeroTarjeta);
            return
        }
    }
  }
  
  let prueba = document.getElementById("submitBtn")
prueba.addEventListener("click", confirmacionTarjeta);


//validacion otros datos del formulario//




