
var card = document.querySelectorAll(".card")
var closeBtns = document.querySelectorAll(".close");


card.forEach(function(cardBtns){
  cardBtns.onclick = function() {
    let modal = cardBtns.getAttribute("data-modal");
    document.getElementById(modal).style.display = "flex"; 
  }
})


closeBtns.forEach((btn) => {
  btn.onclick = function(){
    let modal = (btn.closest('.modal').style.display = 'none');

  }
});
