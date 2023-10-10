document.addEventListener("DOMContentLoaded",function(){
    let btnL = document.querySelector(".btnL");
    let btnR = document.querySelector(".btnR");
    let slides = document.querySelectorAll(".banner-top");
    let slide_end = slides.length -1 ;
    let slide_current ;
    function turnLeftSlide(){
        let slide_current = 0;
        for(let i = slides.length-1 ; i>=0; i--){
            let checkActive = slides[i].getAttribute("class").indexOf("bn-active");
            if(checkActive != -1){
                if(i == 0){
                    slides[i].classList.remove('bn-active');
                    slide_current = slides[slides.length-1].classList.add("bn-active");
                    break;
                }
                else{
                    slides[i].classList.remove('bn-active');
                    slide_current = slides[i-1].classList.add("bn-active");
                    break;
                }
            }
        }
    }
    
    function turnRightSlide(){
        let slide_current = 0;
        for(let i = 0 ; i<=slides.length-1; i++){
            let checkActive = slides[i].getAttribute("class").indexOf("bn-active");
            if(checkActive != -1){
                if(i == slides.length-1){
                    slides[i].classList.remove('bn-active');
                    slide_current = slides[0].classList.add("bn-active");
                    break;
                }
                else{
                    slides[i].classList.remove('bn-active');
                    slide_current = slides[i+1].classList.add("bn-active");
                    break;
                }
            }
        }
    }
    btnL.addEventListener('click',turnLeftSlide);
    btnR.addEventListener('click',turnRightSlide);

},false);

let mybutton = document.querySelector("#myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}