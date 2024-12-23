const cookieContainer = document.getElementById("cookieContainer");
const acceptCookies = document.getElementById("acceptCookies");
const declineCookies = document.getElementById("declineCookies");

// Handle Accept Button
acceptCookies.addEventListener("click", () => {
    cookieContainer.style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
    alert("Thank you for accepting cookies!");
});

// Handle Decline Button
declineCookies.addEventListener("click", () => {
    cookieContainer.style.display = "none";
    localStorage.setItem("cookiesDeclined", "true");
    alert("You have declined cookies.");
});

// Check localStorage on Page Load
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("cookiesAccepted") === "true" || localStorage.getItem("cookiesDeclined") === "true") {
        cookieContainer.style.display = "none";
    }
});
