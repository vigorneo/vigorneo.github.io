let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("HTML");
        habilidades[1].classList.add("CSS");
        habilidades[2].classList.add("Javascript");
        habilidades[3].classList.add("office");
        habilidades[4].classList.add("Photoshop");
        habilidades[5].classList.add("clipstudio");
        habilidades[6].classList.add("Figma");
        habilidades[7].classList.add("fontawesome");
        habilidades[8].classList.add("Frontend");
        habilidades[9].classList.add("Backend");
        habilidades[10].classList.add("ux");
        habilidades[11].classList.add("Identidadcorporativa");
        habilidades[12].classList.add("Logos");
        habilidades[13].classList.add("Ilustracion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 