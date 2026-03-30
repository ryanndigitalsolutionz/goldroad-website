function redirectWithDelay(url) {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.body.style.fontFamily = "Doto, sans-serif";
  document.body.style.textAlign = "center";
  document.body.style.paddingTop = "20%";
  document.body.innerHTML = "<h2>Redirecting you in 3 seconds time...</h2><p>***</p>";
  setTimeout(() => { window.location.href = url; }, 3000);
}

document.getElementById("consultationBtn").addEventListener("click", () => {
  redirectWithDelay("consultation.html");
});

document.getElementById("appointmentBtn").addEventListener("click", () => {
  redirectWithDelay("appointment.html");
});

// About section toggle
document.getElementById('aboutBtn').addEventListener('click', () => {
  const panel = document.querySelector('.aboutSection .panel');
  panel.style.display = (panel.style.display === 'none' || panel.style.display === '') 
    ? 'block' 
    : 'none';
});

// Contact section toggle
document.getElementById('contactBtn').addEventListener('click', () => {
  const panel = document.querySelector('.contactSection .panel');
  panel.style.display = (panel.style.display === 'none' || panel.style.display === '') 
    ? 'block' 
    : 'none';
});

