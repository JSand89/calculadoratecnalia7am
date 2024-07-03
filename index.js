const botones = document.querySelectorAll("#btn")
const pantalla = document.querySelector("#pantalla")
const botones2 = document.querySelectorAll("button") // Diana usa cambia botones 2 por botones 
console.log(botones2)

console.log(pantalla.textContent)
botones2.forEach( boton =>{
    //console.log(boton.textContent)
    boton.addEventListener("click",()=>{
        const botonApretado = boton.textContent
        console.log(pantalla.textContent)
        if(botonApretado == "AC"){
            pantalla.textContent = "0"
            return
        } else if (botonApretado == "del"){
         // agregar el caso "Error!" y el caso Infinity
            if (pantalla.textContent.length ==1){
                pantalla.textContent = "0"
                return
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1)
                return
            }
        } else if (botonApretado == "="){
         // agregar el caso "Error!" y el caso Infinity

            try {
                pantalla.textContent = eval(pantalla.textContent)
            } catch (error) {
                pantalla.textContent = "Error!"
            }
        }else{
        // agregar el caso "Error!" y el caso Infinity

            if(pantalla.textContent == "0"){
                pantalla.textContent = botonApretado
                return
            }else{                  
                pantalla.textContent = pantalla.textContent + botonApretado
                return
            }
        }

    })
})