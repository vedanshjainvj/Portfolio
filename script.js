// Scroll sections active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    })

    // Sticky Header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100)

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Toggle icon navbar
 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');

 menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 }

 // Scroll Reveal
 ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
 ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin:'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'});
 ScrollReveal().reveal('.home-content p, .about-content', { origin:'right'});

 //Typed Js
 const typed  = new Typed('.multiple-text',{
    strings: ['Frontend Developer','Java Coder', 'Web Developer','Entrepreneuar'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 })

 // Theme Customizer -
let themeButtons = document.querySelectorAll('.theme-buttons');
themeButtons.forEach(color => {
    color.addEventListener('click',() =>{
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--main-color',dataColor)
    })
})

let gear = document.querySelector('.gear');
let dropdown = document.querySelector('.dropdown');

gear.addEventListener('click', () => {
    var fade = dropdown.style.opacity;
    if(fade==0){
        dropdown.style.opacity = 1;
    }
    else{
        dropdown.style.opacity = 0;
    }
});

// Form Validation

function setError(id, error) {
    var element = document.getElementById(id);
    var errorElement = element.getElementsByClassName('formerror')[0];
  
    if (errorElement) {
      errorElement.innerHTML = error;
    }
  }
  
function validateForm(){
    var returnVal= true;
    // For name
    var name = document.forms['myForm']['fname'].value;
    if(name.length<5){
        setError("name","*Length of name is too short");
        returnVal = false;
    }
    if(name.length>20){
        setError("name","*Length of name is too Long");
        returnVal = false;
    }
    if(name.length==0){
        setError("name","*Length of name can't be zero");
        returnVal = false;
    }
    // For Email
    // var email = document.forms['myForm']['femail'].value;
    // if(email.length>20){
    //     setError('email',"*Email Length too long");
    //     returnVal = false;
    // }

    // For mobile number
    var mobile = document.forms['myForm']['fmobile'].value;
    if(mobile.length<10){
        setError("mobile","*Please enter a valid 10 digit mobile number");
        returnVal = false;
    }
    if(mobile.length>10){
        setError("mobile","*Invalid Mobile number");
        returnVal = false;
    }

    // For Your message section
    // var message = document.forms['myForm']['message'].value;
    // if(message.length<10){
    //     setError("textarea","*Please describe breifly");
    //     returnVal = false;
    // }
    return returnVal;
}
