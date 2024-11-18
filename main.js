window.onload = function() {
    // Greetings for each time
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


    greeting.textContent = greetingText;
    greeting.style.color = greetingColor; 

    console.log(greeting.textContent); // Greeting text

    // Current year displaying in footer
    const footerYear = document.getElementById("year");
    footerYear.textContent = new Date().getFullYear();
    
    // Greetings and date in console
    console.log("Hi! I'm Emil Sabu");
    const currentDate = new Date();
   const currentYear = currentDate.getFullYear();
   console.log("Today's date is:", currentDate.toString());

       // Javascript for Odd and Even numbers
       const numberList = document.querySelector(".number-list");
       if (numberList) {
           for (let i = 1; i <= 10; i++) {
               const listItem = document.createElement("li");
               listItem.textContent = i % 2 === 0 ? `${i} is even` : `${i} is odd`;
               numberList.appendChild(listItem);
               console.log(listItem.textContent);
           }
       } else {
           console.error("Element with class 'number-list' not found.");
       }
};

// Hover effects for social media links
const socialLinks = document.querySelectorAll('.social a');
socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff6620'; 
    });
    link.addEventListener('mouseout', () => {
        link.style.color = ''; 
    });
});
