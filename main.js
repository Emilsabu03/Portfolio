// Log the current greeting text content (default or updated)
console.log(document.querySelector(".home-info h3").textContent);

// Time-based greeting
window.onload = function() {
    const greeting = document.querySelector(".home-info h3");
    const currentHour = new Date().getHours();
    let greetingText = "Hi, I'm a Graphic Designer"; // Default greeting

    if (currentHour < 12) {
        greetingText = "Good Morning, I'm a Graphic Designer";
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon, I'm a Graphic Designer";
    } else {
        greetingText = "Good Evening, I'm a Graphic Designer";
    }

    // Update the greeting text dynamically
    greeting.textContent = greetingText;

    // Log the updated greeting text in the console after the page is loaded
    console.log(greeting.textContent);
};

// Social media icon hover effect
const socialLinks = document.querySelectorAll('.social a');

socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff6600';  // Change color on hover
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '';  // Reset color when not hovering
    });
});
