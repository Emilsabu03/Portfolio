window.onload = function () {
    // ===== Dynamic Greeting Based on Time =====
    const greeting = document.querySelector(".home-info h3");
    const currentHour = new Date().getHours();
    let greetingText = "Hi, I'm a Graphic Designer";
    let greetingColor = "#270dd4"; // Default (brand blue)

    if (currentHour < 12) {
        greetingText = "Good Morning, I'm a Graphic Designer";
        greetingColor = "#f7b731"; // Soft warm yellow for morning
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon, I'm a Graphic Designer";
        greetingColor = "#ff6620"; // Bright orange for afternoon
    } else {
        greetingText = "Good Evening, I'm a Graphic Designer";
        greetingColor = "#3b3be0"; // Muted blue for evening
    }

    greeting.textContent = greetingText;
    greeting.style.color = greetingColor;

    // ===== Interactive Button (Optional Section) =====
    const alertButton = document.getElementById("btn-alert");
    if (alertButton) {
        alertButton.addEventListener("click", () => {
            alert("Hello world!");
        });

        alertButton.addEventListener("mouseover", () => {
            alertButton.textContent = "Click the button!";
        });

        alertButton.addEventListener("mouseout", () => {
            alertButton.textContent = "Click Here";
        });
    }

    // ===== Footer Year =====
    const footerYear = document.getElementById("year");
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    // ===== Console Greeting for Dev Log =====
    console.log(greeting.textContent);
    console.log(`Hi! I'm Emil Sabu`);
    console.log(`Today's date is: ${new Date().toString()}`);

    // ===== Social Media Hover Effects =====
    const socialLinks = document.querySelectorAll(".social a");
    socialLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ff6620"; // Accent orange on hover
            link.style.transform = "scale(1.2)";
            link.style.transition = "all 0.3s ease";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "";
            link.style.transform = "scale(1)";
        });
    });
};
