

const toggle = document.getElementById("toggler");
const menu = document.getElementsByTagName("nav")[0];

toggle.addEventListener("click",showMenu);

function showMenu(){
    menu.classList.toggle("showM")
}







document.addEventListener('scroll',()=>{ 
   let navbars = document.getElementById('navbars');
navbars.style.opacity = window.scrollY !== 0 ? .9 : 1;
navbars.style.backgroundColor = window.scrollY !== 0 ? "#000" : "transparent";




})

//scrollreveal effect

const sr = ScrollReveal({
    origin:'bottom',
    distance:'50px',
    duration:2000,
    reset:true
})

sr.reveal(`.hero-text,.content-body-h1,.content-body-p,.content-grid`,{
    interval:200
});

