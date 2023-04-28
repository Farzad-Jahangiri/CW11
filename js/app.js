const logo=document.getElementById("logo");
const pageWidth = window.innerWidth;
const navbar=document.getElementById("navbar");
const header=document.getElementById("header");
const parenCard=document.getElementById("parenCard");
const menoBare=document.getElementById("menoBare");
const meno=document.getElementById("meno");
const menoBarList=document.getElementById("menoBarList");
const menoNameList=document.getElementsByTagName("a");
const body=document.body;



window.addEventListener("scroll", function () {
    const navbar = document.querySelector("#navbar");
    navbar.classList.toggle("fixed-top", window.scrollY > 0);
    navbar.classList.toggle("shadow-lg", window.scrollY > 0);
   if (pageWidth<=720){
    if(window.scrollY > 50)
      navbar.classList.remove("d-block");
   }
  });

function resize(){
  
  if (pageWidth<=480){
    logo.style.display = "none";
    navbar.style.display="none";
    parenCard.classList.toggle("ms-5");
    menoBare.classList.toggle("d-none")
    const children = parenCard.querySelectorAll('div');
  for (const iterator of children) {
    iterator.classList.toggle("col");
  }

  }
  else if (pageWidth<=720){
    logo.style.display = "none";
    navbar.style.display="none";
    menoBare.classList.toggle("d-none")
    parenCard.classList.toggle("ms-5");

  }
  else if (pageWidth<=992){
    logo.style.display = "none";
  }
}
resize()
meno.addEventListener("click",()=>{
  navbar.classList.toggle("d-block");
  navbar.classList.toggle("bg-dark");
  menoBarList.classList.toggle('d-flex');
  navbar.classList.toggle('text-center');
  navbar.classList.toggle('mt-2');
  // menoNameList.classList.toggle("d-block");
  const children = menoBarList.querySelectorAll('a');
  for (const iterator of children) {
    iterator.classList.toggle("d-block");
  }
});
