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
    
};

function popupscreen1(){
    document.getElementById("overlay").style.display = "flex";
    var money1=document.getElementById("moneypop");
    money1.textContent="$1,899";
    money1.style.background = "linear-gradient(to right, white, #00C4CC)";
    money1.style.webkitBackgroundClip = "text";
    money1.style.webkitTextFillColor = "transparent";
    money1.style.fontFamily = "Poppins, sans-serif";
    money1.style.fontWeight="1000";
    money1.style.fontSize="25px"
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
    money2.style.background = "linear-gradient(to right, white, #00C4CC)";
    money2.style.webkitBackgroundClip = "text";
    money2.style.webkitTextFillColor = "transparent";
    money2.style.fontFamily = "Poppins, sans-serif";
    money2.style.fontWeight="1000";
    money2.style.fontSize="25px"
    var productname2=document.getElementById("productpop");
    productname2.textContent ="Nebula Titan X";
    productname2.style.color="white";
    productname2.style.fontWeight="1000";
    productname2.style.fontSize="20px"
}

function popupscreen3(){
    document.getElementById("overlay").style.display = "flex";
    var money3=document.getElementById("moneypop");
    money3.textContent="$2,499";
    money3.style.background = "linear-gradient(to right, white, #00C4CC)";
    money3.style.webkitBackgroundClip = "text";
    money3.style.webkitTextFillColor = "transparent";
    money3.style.fontFamily = "Poppins, sans-serif";
    money3.style.fontWeight="1000";
    money3.style.fontSize="25px"
    var productname3=document.getElementById("productpop");
    productname3.textContent = "Stellar Pro-X";
    productname3.style.color="white";
    productname3.style.fontWeight="1500";
    productname3.style.fontSize="20px"
}

function closepopup(){
    document.getElementById("overlay").style.display = "none";
    alert("Our agent will reach you shorty......");
}
document.getElementById("myForm").addEventListener("submit", function(event) {

    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let address = document.getElementById("address").value.trim();

    if (name === "") {
        alert("Please enter your name");
        event.preventDefault();
        return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Name should contain only letters");
        event.preventDefault();
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Mobile number must be 10 digits");
        event.preventDefault();
        return;
    }

    if (address.length < 5) {
        alert("Please enter a valid address");
        event.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
    
});
function cancel(){
    document.getElementById("addressanddetails").style.display="none";
}