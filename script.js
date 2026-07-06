document.querySelectorAll('a[href="#contact"]').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log("whatsapp");
    });
});
document.querySelectorAll('a[href="#book-consulation"]').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log("Your Consulation Booked");
    });
});
function handleSubmit(){
    const btn = document.querySelector(".nav-cta");
        btn.innerText = " Request Submitted";
    btn.disabled = true;

    alert("Thank You! We will contact you soon.");
}

function handleSubmit() {
    alert("Thank You! Your Audit Request Has Been Submitted.");

    window.open(
        "https://wa.me/918960473346",

        "_blank"
    );
}
function handleCall() {

    alert("Thank you for choosing EVI Care! Our team will contact you shortly to schedule your consultation.");

    window.location.href(
        "tel: +91 8960473346",

        "_blank"
    );
}
function openPopup() {
    document.getElementById("popupForm").style.display = "block";
}

function closePopup() {
    document.getElementById("popupForm").style.display = "none";
};
function openStrategyCall() {
    alert("📅 Thank you for choosing EVI Care!Your Strategy Call request has been received. Our team will contact you shortly to schedule your call.");
}