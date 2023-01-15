let menuBtn = document.querySelector('.menu-btn');
let navBar = document.querySelector('.navigation');
let header = document.querySelector('.header');

menuBtn.addEventListener('click', function(){
    navBar.classList.toggle('active');
})

function navBerUp(){
    if(this.scrollY>0){
        header.setAttribute('style', 'border-bottom: .2rem solid #2b3f47; background:#fff;');
        navBar.classList.add('up');
    }
    else{
        header.setAttribute('style', 'border-bottom:none; background:none;');
        navBar.classList.remove('up');

    }
}

function revealMove(){

    let reveals = this.document.querySelectorAll('.reveal');
    for(let i = 0; i < reveals.length; i++){

       let windowheight = this.window.innerHeight;
       let revealtop = reveals[i].getBoundingClientRect().top;
       let countStart = reveals[1].getBoundingClientRect().top;
       let revealpoint =  windowheight - 90;

       if(revealtop < revealpoint){

        reveals[i].classList.add('active');

       }else if(countStart == revealpoint){

        CountStart()

       }else{

        reveals[i].classList.remove('active');

       }

    }

}

function CountStart(){

    let countersBar = document.querySelectorAll('.counter');

    countersBar.forEach(function (counter){
    
        counter.innerHTML=0;
    
        function UpdateCount(){
            
            let count = +counter.getAttribute('data-target');
            let innerCount = +counter.innerHTML;
            let increment = count/300;
    
            if(innerCount < count){
                counter.innerHTML= Math.ceil(innerCount + increment);
                setInterval(UpdateCount, 100);
            }
            else{
                counter.innerHTML= count;
            }
        }
        UpdateCount()
    });    


}


// function sectionSelection(){

//     let sections = this.document.querySelectorAll('section');
//     for(let i = 0; i < sections.length; i++){

//         let windowheight = this.window.innerHeight;
//         let sectionTop = sections[i].getBoundingClientRect().top;
//         let sectionNext = sections[i + 1].getBoundingClientRect().top;
//         let sectionActivePoint =  windowheight - 400;

//         let removePointCount = sectionNext - sectionTop;
//         let sectionRemoveActive =  sectionActivePoint - removePointCount;

//        if(sectionTop < sectionActivePoint && sectionTop > sectionRemoveActive ){
//         sections[i].classList.add('active');
//        }else{
//         sections[i].classList.remove('active');
//        }

//     }

//     // Navigation items.
//     let homeActive = document.querySelector('.nav-home');
//     let teamLeaderActive = document.querySelector('.nav-team-leader');
//     let testimonialsActive = document.querySelector('.nav-testimonials');
//     let aboutActive = document.querySelector('.nav-about');
//     let contactActive = document.querySelector('.nav-contact');
//     let galleryActive = document.querySelector('.nav-gallery');
//     // sections 
//     let homeSec = document.querySelector('.home').classList.contains("active");
//     let teamLeaderSec = document.querySelector('.team-leader').classList.contains("active");
//     let testimonialSec = document.querySelector('.count').classList.contains("active");
//     let aboutSec = document.querySelector('.about').classList.contains("active");
//     let contactSec = document.querySelector('.contact').classList.contains("active");
//     let gallerySec = document.querySelector('.gallery').classList.contains("active");
    
//     if(homeSec){
//         homeActive.classList.add("active");
//     }else if (teamLeaderSec){
//         teamLeaderActive.classList.add("active");
//     }else if (testimonialSec){
//         testimonialsActive.classList.add("active");
//     }else if (aboutSec){
//         aboutActive.classList.add("active");
//     }else if (contactSec){
//         contactActive.classList.add("active");
//     }else if (gallerySec){
//         galleryActive.classList.add("active");
//     }

// }

function CountStart(){

    let countersBar = document.querySelectorAll('.counter');

    countersBar.forEach(function (counter){
    
        counter.innerHTML=0;
    
        function UpdateCount(){
            
            let count = +counter.getAttribute('data-target');
            let innerCount = +counter.innerHTML;
            let increment = count/300;
    
            if(innerCount < count){
                counter.innerHTML= Math.ceil(innerCount + increment);
                setInterval(UpdateCount, 100);
            }
            else{
                counter.innerHTML= count;
            }
        }
        UpdateCount()
    });    


}


function scrollspy(){
    let sections = document.querySelectorAll('section');
    let navLink = document.querySelectorAll(".navigation a");

    sections.forEach(function(sec){

        let top = window.scrollY + 150;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        let CountSec = document.querySelector("#testimonials").offsetTop;

        if(top >= offset && top < offset + height){
            navLink.forEach(function(link){

                link.classList.remove("active");
                document.querySelector('.navigation a[href*=' + id + ']').classList.add("active");

            })
        }else if(CountSec == top){
            CountStart()
        }
    })
}




window.addEventListener('scroll',function(){

    navBar.classList.remove('active');
    navBerUp();
    revealMove();
    // sectionSelection();
    scrollspy();

    let scrolled = this.window.scrollY;
    console.log(scrolled);
})

window.addEventListener('load',function(){

    navBar.classList.remove('active');
    navBerUp();
    revealMove();
    // sectionSelection();
    scrollspy();

    let scrolled = this.window.scrollY;
    console.log(scrolled);
})




var swiper = new Swiper(".gallery-swiper", {
    loop:true,
    grabCursor:true,
    slidesPerView: 1,
    
    
    navigation:{
        nextEl: ".right",
        prevEl: ".left",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
     
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },

});