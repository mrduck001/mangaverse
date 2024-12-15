// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for Dark Mode on page load
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Hamburger Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('hamburger-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Handle Sign Up
function handleSignUp(event) {
    event.preventDefault();
    alert('Sign Up successful');
    // Add your Sign Up logic here
}

// Handle Log In
function handleLogin(event) {
    event.preventDefault();
    alert('Log In successful');
    // Add your Log In logic here
}
