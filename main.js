const mobilenav = document.getElementById("mobile-navbar");
const mbtn = document.getElementsByClassName("mbtn")
const canbtn = document.getElementById("mobilebar")
mobilenav.addEventListener("click",()=>{
    if (canbtn.style.display === "block") {
        canbtn.style.display = "none";
      } else {
        canbtn.style.display = "block";
      }
})




window.onload = () => {
const tl = gsap.timeline()
gsap.set("#textlogo",{
   y:"-1000px",
    opacity:0,
})
tl.to("#textlogo",{
    y:"0px",
    opacity:1,
    duration:1
})
gsap.set("#sum",{
   x:"-1000px",
   opacity:0
})
tl.to("#sum",{
    opacity:1,
    x:"0",
    duration:1
})
}
gsap.registerPlugin(ScrollTrigger);
gsap.to("#textlogo",{
    y:"-1000px",
    opacity:0,
    scrollTrigger:{
    //markers:true,
    start:"top 10%",
    end:"top top ",
    scrub:true
    }
})
gsap.to("#sum",{
    x:"1000px",
    opacity:0,
    scrollTrigger:{
    //markers:true,
    start:"top 10%",
    end:"top top ",
    scrub:true
    }
})
console.log("hello")
    
    gsap.to("#background",{
    transform:"rotate(360deg)",
    width:"50vw",
    height:"90vh",
    top:"50px",  
     scrollTrigger:{
     //markers:true,
     start:"top 10%",
     trigger:"#Herosection",
     pin:true,
     end:"top top ",
     scrub:true
     }
 })

gsap.set("#whyus",{
    transform:"translateY(-5000px)",
    opacity: 0
})
gsap.to("#whyus",{
    y:0,
    opacity: 1,
    scrollTrigger:{
   // markers:true,
    start:"top 6%",
    end:"top top",
    scrub:1

    }
})
gsap.set("#aboutus",{
    x:1000,
    opacity: 0
})
gsap.to("#aboutus",{
    x:0,
    opacity: 1,
    scrollTrigger:{
    //markers:true,
    start:"top 6%",
    end:"top top",
    scrub:1

    }
})
gsap.set(".sideline",{
    x:1000,
    opacity:0
})
gsap.to(".sideline",{
    x:0,
    opacity:1,
    scrollTrigger:{
        trigger:".sideline",
        scroller:"body",
        start:"bottom 90%",
        end:"top 85%",
        scrub:2,
       // markers:true
    }
})

gsap.set(".tabs",{
    scale:0
})
gsap.to(".tabs",{
    scale:1,
    scrollTrigger:{
        trigger:".tabs",
        scroller:"body",
        start:"top 85%",
        end:"top 70%",
        scrub:2,
        //markers:true
    }
})
var initalsrc = "imgs/background.jpg";
var scrollsrc = "imgs/background.png";
window.onscroll =()=>{myfunction()};
function myfunction(){
if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
    document.getElementById("background").src = scrollsrc;
}
else{
        document.getElementById("background").src = initalsrc;
}
}


VanillaTilt.init(document.querySelector(".t1"), {
    max: 15,
    speed: 500,
    transformStyle:"preserve-3d",
    transform:"perspective(1000px)",
    transform: "translateZ(20px)"
})
VanillaTilt.init(document.querySelector(".t2"), {
    max: 15,
    speed: 500,
    transformStyle:"preserve-3d",
    transform:"perspective(1000px)",
    transform: "translateZ(20px)"
})
VanillaTilt.init(document.querySelector(".t3"), {
    max: 15,
    speed: 500,
    transformStyle:"preserve-3d",
    transform:"perspective(1000px)",
    transform: "translateZ(20px)"
})


function thankyou(){
    const response = document.querySelector("#response")
    response.style.display = "block";
}


let mm = gsap.matchMedia();

