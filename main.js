console.log(document.querySelector(".home-info h3").textContent);

window.onload = function() {
    const greeting = document.querySelector(".home-info h3");  
    const currentHour = new Date().getHours();  
    let greetingText = "Hi, I'm a Graphic Designer"; 

    if (currentHour < 12) {
        greetingText = "Good Morning, I'm a Graphic Designer";
        greeting.classList.add("morning")  
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon, I'm a Graphic Designer"; 
        greeting.classList.add("afternoon")
    } else {
        greetingText = "Good Evening, I'm a Graphic Designer";
        greeting.classList.add("evening")  
    }


    greeting.textContent = greetingText;

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
