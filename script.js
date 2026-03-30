document.getElementById("consultationBtn").addEventListener("click", () => {
  const frame = document.getElementById("consultationFrame");
  frame.style.display = (frame.style.display === "none" || frame.style.display === "")
    ? "block"
    : "none";
});

document.getElementById('appointmentBtn').addEventListener('click', () => {
  const frame = document.getElementById('calendarFrame');
  frame.style.display = (frame.style.display === 'none' || frame.style.display === '') 
    ? 'block' 
    : 'none';
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