const trigger = document.getElementById("mainBookingBtn");
const panel = document.getElementById("bookingPanel");

// Toggle logic
trigger.addEventListener("click", function() {
  this.classList.toggle("active")
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px"
  }
});

// Email handling
document.getElementById("emailCaptureForm").addEventListener("submit", function(e) {
  e.preventDefault()
  const email = document.getElementById("clientEmail").value;
  
  // Future connection point for n8n/Backend
  console.log("GoldRoad U1 Lead Captured:", email);
  
  this.classList.add("hidden");
  document.getElementById("formFeedback").classList.remove("hidden");
});