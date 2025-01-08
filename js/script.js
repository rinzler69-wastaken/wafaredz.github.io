const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
if (hour < 12) {
    greeting.textContent = "Selamat Pagi,";
} else if (hour < 18) {
    greeting.textContent = "Selamat Siang,";
} else {
    greeting.textContent = "Selamat Malam,";
}
