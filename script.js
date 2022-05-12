//NAVBAR
// on crée un script qui masque la navbar lorsqu'on scroll vers le bas, et qui l'affiche quand on scroll
// vers le haut

// correspond au point le plus haut de la fenetre
let lastScrollTop = 0
navbar = document.getElementById('navbar')

// quand on scroll vers le bas, la valeur de scrollTop prend la valeur du déplacement
window.addEventListener('scroll', function(){
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop
/*
    // si la position actuelle est supérieur a la valeur précedente (lastScrollTop) => donc si on scroll vers le bas
    if(scrollTop > lastScrollTop){
        // on donne a la navbar une taille négative (elle est de 42px dans style.css) pour la masquer
        navbar.style.top = "-50px"
    }else{
        // des qu'on scroll vers le haut, la navbar reprend sa taille d'origine
        navbar.style.top ="0"
    }
    // pour que le script s'execute en permanence, a chaque scrolling, lastScrollTop prend la valeur
    // de scrollTop, cela permet de continuer a comparer les valeurs et masqué ou non la navbar
*/
    lastScrollTop = scrollTop

    // On crée un script qui deplace la classe active sur le lien correspondant quand on scroll sur la page 
    // (barre rouge sous le lien de la nav)
    let home = document.getElementById('home-link')
    let comp = document.getElementById('competence-link')
    let portf = document.getElementById('portfolio-link')
    let about  = document.getElementById('about-link')
    let contact = document.getElementById('contact-link')
    if(lastScrollTop < 925){
        home.classList.add('active')
        comp.classList.remove('active')
        portf.classList.remove('active')
        about.classList.remove('active')
        contact.classList.remove('active')
    }else if(lastScrollTop >= 925){
        home.classList.remove('active')
        comp.classList.add('active')
        portf.classList.remove('active')
        about.classList.remove('active')
        contact.classList.remove('active')
    }
})

