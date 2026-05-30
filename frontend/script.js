window.onload = function () {

    let lastScroll = 0;

    const navbar = document.querySelector(".Heading");

    window.addEventListener("scroll", () => {

        let currentScroll = window.pageYOffset;

        if(currentScroll > lastScroll){
            navbar.style.top = "-130px";
        }
        else{
            navbar.style.top = "0";
        }

        lastScroll = currentScroll;

    });

    /* MOBILE MENU */

    const menu = document.getElementById("menu");
    
};

function popupscreen1(){
    document.getElementById("overlay").style.display = "flex";
    var money1=document.getElementById("moneypop");
    money1.textContent="$1,899";
    money1.style.fontWeight="1500";
    money1.style.fontSize="20px"; 
    money1.style.color="skyblue"; 
    var productname1=document.getElementById("productpop");
    productname1.textContent = "Aurora SpaceBook";
    productname1.style.color="white";
    productname1.style.fontWeight="1000";
    productname1.style.fontSize="20px";   
}
function popupscreen2(){
    document.getElementById("overlay").style.display = "flex";
   var money2=document.getElementById("moneypop");
    money2.textContent="$3,299";
    money2.style.fontWeight="1500";
    money2.style.fontSize="20px"; 
    money2.style.color="skyblue"; 
    var productname2=document.getElementById("productpop");
    productname2.textContent = "Nebula Titan X";
    productname2.style.color="white";
    productname2.style.fontWeight="1000";
    productname2.style.fontSize="20px"
}

function popupscreen3(){
    document.getElementById("overlay").style.display = "flex";
   var money3=document.getElementById("moneypop");
    money3.textContent="$2,499";
    money3.style.fontWeight="1500";
    money3.style.fontSize="20px"; 
    money3.style.color="skyblue"; 
    var productname3=document.getElementById("productpop");
    productname3.textContent = "Stellar Pro-X";
    productname3.style.color="white";
    productname3.style.fontWeight="1500";
    productname3.style.fontSize="20px"
}

function closepopup(){
    document.getElementById("overlay").style.display = "none";
}