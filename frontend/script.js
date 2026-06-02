window.onload = function () {

    let lastScroll = 0;
    const navbar = document.querySelector(".Heading");

    window.addEventListener("scroll", () => {

        let currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll) {
            navbar.style.top = `-${navbar.offsetHeight}px`;
        } else {
            navbar.style.top = "0";
        }

        lastScroll = currentScroll;
    });
};

// Store selected product details
let selectedPrice = "";
let selectedProduct = "";

// Open form when Buy Now is clicked
function openForm(price, productName) {

    selectedPrice = price;
    selectedProduct = productName;

    document.getElementById("addressanddetails").style.display = "flex";
}

// Product confirmation popup
function showPopup(price, productName) {

    document.getElementById("overlay").style.display = "flex";

    const money = document.getElementById("moneypop");
    money.textContent = price;
    money.style.background = "linear-gradient(to right, white, #00C4CC)";
    money.style.webkitBackgroundClip = "text";
    money.style.webkitTextFillColor = "transparent";
    money.style.fontFamily = "Poppins, sans-serif";
    money.style.fontWeight = "1000";
    money.style.fontSize = "25px";

    const product = document.getElementById("productpop");
    product.textContent = productName;
    product.style.color = "white";
    product.style.fontWeight = "1000";
    product.style.fontSize = "20px";
}

// Close popup
function closepopup() {
    document.getElementById("overlay").style.display = "none";
    alert("Our agent will reach you shortly...");
}

// Form validation
document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let address = document.getElementById("address").value.trim();

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Name should contain only letters");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Mobile number must be 10 digits");
        return;
    }

    if (address.length < 5) {
        alert("Please enter a valid address");
        return;
    }

    alert("Form submitted successfully!");

    // Close form
    document.getElementById("addressanddetails").style.display = "none";

    // Open product confirmation popup
    showPopup(selectedPrice, selectedProduct);

    // Reset form
    document.getElementById("myForm").reset();
});

// Cancel button
function cancel() {
    document.getElementById("addressanddetails").style.display = "none";
}