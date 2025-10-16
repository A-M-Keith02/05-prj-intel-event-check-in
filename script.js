// Get needed elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const greeting = document.getElementById("greeting");
const progressBar = document.getElementById("progressBar");

// Set initial attendance tracking
let count = 0;
const maxCount = 100;

const teamCounts = {
  water: 0,
  zero: 0,
  power: 0
};

// Handle form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  const name = nameInput.value.trim();
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  if (!name || !team) {
    alert("Please enter your name and select a team.");
    return;
  }

  // Increment attendance
  count++;
  document.getElementById("attendeeCount").textContent = count;

  // Update progress bar visually
  const percent = Math.round((count / maxCount) * 100);
  progressBar.style.width = percent + "%";
  progressBar.setAttribute("aria-valuenow", percent); // For accessibility

  // Update team count
  teamCounts[team]++;
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = teamCounts[team];

  // Show greeting
  greeting.textContent = `Welcome, ${name} from ${teamName}!`;

  // Reset form
  form.reset();
});