const header=document.querySelector('.navbar');
const searchIcon=document.querySelector('.change');
const linksChange=document.querySelectorAll('.scrollcolor-change');
let a=document.getElementById('home1');
let cahnge=window.getComputedStyle(home1,'::after');
let a2=document.getElementById('explore1');
let cahnge2=window.getComputedStyle(explore1,'::after');
let a3=document.getElementById('about1');
let cahnge3=window.getComputedStyle(about1,'::after');
let a4=document.getElementById('profile1');
let cahnge4=window.getComputedStyle(profile1,'::after');
const slider=document.querySelectorAll(".slider"),
        menuBtn=document.querySelectorAll(".slidebar"),
        overlay=document.querySelectorAll(".overlay");
        console.log(slider,menuBtn,overlay);

        // slider.forEach((slider) => { 
        //     slider.addEventListener("click",()=>{
        //         menuBtn.classList.toggle("open");
        //     })
        // });
        // overlay.addEventListener("click",()=>{
        //     menuBtn.classList.remove("open");
        // });
document.addEventListener('scroll',()=>{
    var scroll_position= window.scrollY;
    if(scroll_position>250){
        // header.style.backgroundColor='#d4d4d8fd';
        // header.style.backgroundColor='#fbbf24';
        header.style.backgroundColor='#0f172a';
        header.style.color='#fff';
        searchIcon.style.color='black';
        a.style.setProperty('--afterBack','#fff');
        a2.style.setProperty('--afterBack','#fff');
        a3.style.setProperty('--afterBack','#fff');
        a4.style.setProperty('--afterBack','#fff');
        linksChange.forEach(link => {
            link.style.color = '#fff';
        });
        // linksChange.style.color='#fff';
    }else{
        linksChange.forEach(link => {
            link.style.color = 'black';
        });
        a.style.setProperty('--afterBack','black');
        a2.style.setProperty('--afterBack','black');
        a3.style.setProperty('--afterBack','black');
        a4.style.setProperty('--afterBack','black');
        header.style.color='black';
        header.style.backgroundColor='transparent';
    }
});