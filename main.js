window.onload = function() {
    const greeting = document.querySelector(".home-info h3");  
    const currentHour = new Date().getHours();  
    let greetingText = "Hi, I'm a Graphic Designer"; 
    let greetingColor = ""; // Variable for dynamic color

    if (currentHour < 12) {
        greetingText = "Good Morning, I'm a Graphic Designer";
        greetingColor = "#ff9900"; // Color for morning
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon, I'm a Graphic Designer"; 
        greetingColor = "#55e1fa"; // Color for afternoon
    } else {
        greetingText = "Good Evening, I'm a Graphic Designer";
        greetingColor = "#270dd4"; // Color for evening
    }

    greeting.textContent = greetingText;
    greeting.style.color = greetingColor; 

    console.log(greeting.textContent);
};

const socialLinks = document.querySelectorAll('.social a');

socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff6600'; 
    });
    link.addEventListener('mouseout', () => {
        link.style.color = ''; 
    });
});
