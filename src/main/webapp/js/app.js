/* Main Application Scripts */

function helloWorld() {
    alert('Hello from Jenkins Web App!');
}

function displayTime() {
    const now = new Date();
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = now.toLocaleString();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sample Jenkins Web App loaded successfully');
    displayTime();
    setInterval(displayTime, 1000);
});

// Log application info
console.log('Application: Sample Jenkins Web Application');
console.log('Version: 1.0.0');
console.log('Build: Maven WAR Package');