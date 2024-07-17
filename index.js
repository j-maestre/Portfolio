window.addEventListener('scroll', function() {
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


    if(newOpacity <= 0.0){

   //     window.setTimeout(() =>{
         //   if(newOpacity <= 0.0){
                document.getElementById("about").style.display = 'none';
       //     }
     //   }, 1000.0);
    }else{
        document.getElementById("about").style.display = 'block';
    }
});


window.addEventListener("load", (event) =>{
    document.getElementById("shelley_img").addEventListener("click", function(){
        console.log("click")
        window.location = "./src/shelley/index.html"
    });
    
    document.getElementById("andromeda_img").addEventListener("click", function(){
        window.open("https://www.youtube.com/watch?v=myVIggxY4uM&ab_channel=XemaMaestreQuiles", "_blank");
    });


})