window.onload = function() {
    // Greetings for particular time
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

    // Interactions for buttons
    const alertButton = document.getElementById("btn-alert");
    if (alertButton) {
        alertButton.addEventListener("click", () => {
            alert("Hello world!");
        });
        
        alertButton.onmouseover = function () {
            alertButton.innerText = "Click the button!";
        };
        
        alertButton.onmouseout = function () {
            alertButton.innerText = "Click Here";
        };
    }

    // Current year displaying in footer
    const footerYear = document.getElementById("year");
    footerYear.textContent = new Date().getFullYear();
    
    // Greeting text and current date
    console.log(greeting.textContent);
    const currentDate = new Date();
    console.log("Hi! I'm Emil Sabu");
    console.log("Today's date is:", currentDate.toString());

    // Number List loop
    const numbersList = document.getElementById("numbers");

    for (let i = 1; i <= 12; i++) {
        const listItem = document.createElement("li"); 
        listItem.textContent = `${i} is ${i % 2 === 0 ? 'even' : 'odd'}`; 
        numbersList.appendChild(listItem); 
    }

    // Social Media Link 
    const socialLinks = document.querySelectorAll('.social a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff6620'; 
        });
        link.addEventListener('mouseout', () => {
            link.style.color = ''; 
        });
    });
};
