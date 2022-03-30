var sliders = document.querySelectorAll('.slider')
var btns = document.querySelectorAll('.btn');
let currentSlider = 1;

var manualNav = function(manual){
    sliders.forEach((slider)=> {
        slider.classList.remove('active');

        btns.forEach((btn)=> {
            btn.classList.remove('active');
        });
    });


    sliders[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", ()=> {
        manualNav(i);
        currentSlider = i;
    })
})

// //auto
// var repeat = function(activeClass){
//     let active = document.getElementsByClassName('active');
//     let i = 1;

//     var repeater = () => {
//         setTimeout(function(){
//             [...active].forEach((activeSlider)=>{
//                 activeSlider.classList.remove('active')
//             });

//             sliders[i].classList.add('active');  
//             btns[i].classList.add('active'); 
//             i++

//             if(sliders.length == i){
//                 i = 0
//             }
//             if(i >= sliders.length){
//                 return;
//             }
//             repeater();
//         }, 100000);
//     }
//     repeater();
// }
// repeat()