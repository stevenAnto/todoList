document.addEventListener("DOMContentLoaded", ()=>{
    const input = document.querySelector("#todo-input");
    input.addEventListener("keydown", (e)=>{
        if(e.key === 'Enter'){
            e.preventDefault();
            const tarea = input.value.trim();
            if(tarea){
                tareas.push(tarea);
                renderMain();
                input.value='';
            }
        }
    })
    
})

function renderMain(){
    const ul = document.querySelector("#todo-list");
    ul.innerHTML='';
    tareas.forEach((t)=>{
        const li = document.createElement("div");
        li.classList.add("sinTachar")
        //configurando evento click
        li.addEventListener("click", (e)=>{
            console.log("ha sido clickeado");
            let valueTachado = li.className;
            console.log(valueTachado);
            if(valueTachado=="tachado"){
                li.classList.remove(valueTachado);
                li.classList.add("sinTachar")
            }
            else{
                li.classList.remove(valueTachado);
                li.classList.add("tachado")
            }
        })
        //configurando evento anticlick
        li.addEventListener("contextmenu", (e)=>{
            e.preventDefault();
            const eliminado = e.target;
            const textoEliminado = eliminado.textContent;
            const encontrado = tareas.indexOf(textoEliminado);
            if(encontrado!=-1){
                tareas.splice(encontrado,1);
            }
            eliminado.remove();
        })
        li.textContent = t;
        ul.appendChild(li);
    })
}
