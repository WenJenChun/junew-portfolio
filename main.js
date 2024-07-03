import './src/styles.css'


function getLanguages() {
    const langs = navigator.language;
  
    if(langs === "zh-TW"){
        // window.location.replace("http://www.w3schools.com");
    };
    
}
getLanguages();

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

const care168 = document.querySelector("#care168");
const closeBtn = document.querySelector("#closeBtn");

care168.addEventListener("click", function(e){
    console.log(e.target)
    console.log("care168 clicked");
    openModal('modalCare168');
});

closeBtn.addEventListener("click", function(e){
    if(e.target.attra){}
});