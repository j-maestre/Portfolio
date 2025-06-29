function CheckScroll(){
    let title = document.getElementById('about-title');
    let name = document.getElementById('about-name');
    let description = document.getElementById('about-description');
    let arrow = document.getElementById('arrow-down');
    let logos = document.querySelectorAll('.logo');
    let email = document.getElementById('about-email');

    const projectsSection = document.getElementById('projects');
    const projectsTop = projectsSection.offsetTop;

    // Calcula cuánto has scrolleado
    const scrollY = window.scrollY;

    console.log("Scroll Y: " + scrollY);

    // Determina el nuevo valor de opacidad
    const newOpacity = 1 - Math.min((scrollY) / ((projectsTop * 1.3) - window.innerHeight), 1);

    title.style.opacity = newOpacity;
    name.style.opacity = newOpacity;
    description.style.opacity = newOpacity;
    email.style.opacity = newOpacity;

    arrow.style.opacity = newOpacity;
    logos.forEach(logo =>{
        logo.style.opacity = newOpacity;
    });
    
    console.log(window.innerWidth);
    //console.log("New opacity: " + newOpacity);

    if(window.innerWidth <= 1024){
        document.getElementById("arrow_container").classList.remove('pulse');
        document.getElementById("mobile_arrow_container").classList.add('pulse');
    }else{
        document.getElementById("arrow_container").classList.add('pulse');
        document.getElementById("mobile_arrow_container").classList.remove('pulse');
    }



    if(newOpacity <= 0.0){

        document.getElementById("about").style.display = 'none';
        
        if(window.innerWidth > 1024){
            document.getElementById("arrow_container").classList.remove('pulse');
        }

    }else{
        document.getElementById("about").style.display = 'block';
        
        if(window.innerWidth > 1024){
            document.getElementById("arrow_container").classList.add('pulse');
        }
    }
}


window.addEventListener('scroll', CheckScroll);



document.body.addEventListener('scroll',CheckScroll)


window.addEventListener("load", (event) =>{

    CheckScroll();


    

    
    document.getElementById("shelley").addEventListener("click", function(){
        console.log("click")
        window.location = "./src/shelley/index.html"
    });
   
    document.getElementById("playstation").addEventListener("click", function(){
        console.log("click")
        window.location = "./src/playstation/index.html"
    });

    document.getElementById("andromeda").addEventListener("click", function(){
        window.location = "./src/andromeda/index.html";
    });
   
    document.getElementById("music_runner").addEventListener("click", function(){
        window.location = "./src/runner/index.html";
    });
    
    document.getElementById("balance_board").addEventListener("click", function(){
        window.location = "./src/balance_board/index.html";
    });
   
    document.getElementById("movie_going").addEventListener("click", function(){
        window.location = "./src/movie_going/index.html";
    });

    document.getElementById("cloth").addEventListener("click", function(){
        window.location = "./src/cloth/index.html";
    });



    


})


