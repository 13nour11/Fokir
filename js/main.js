

document.addEventListener('DOMContentLoaded', function () {

    // change navbar background and update links to be active at scrolling to the target section or click on the link
    // ===============================================
    let navbar = document.querySelector(".navbar");
    let navLinks = document.querySelectorAll(".navbar .links ul li a");
    let landing = document.querySelector(".portfolio");
    
    // Add scroll event listener
    window.addEventListener('scroll', function () {
        // Get the scroll position
        let scrollPosition = document.documentElement.scrollTop;
    
        // Check if the scroll position is beyond 500px
        if (scrollPosition > 500) {
        navbar.classList.add("scroll-navbar");
        landing.style.position = "relative";
        } else {
        navbar.classList.remove("scroll-navbar");
        landing.style.position = "";
        }
    
        // Update active link based on the scroll position
        updateActiveLink(scrollPosition);
    });
    
    // Variable to keep track of the currently active link
    let currentActiveLink = null;
    
    // Add click event listener to each navigation link
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', function (event) {
        event.preventDefault();
    
        // Remove "active" class from the old active link
        if (currentActiveLink) {
            currentActiveLink.classList.remove("active");
            currentActiveLink.style.color = ""; 
        }
    
        // Set the clicked link as the current active link
        currentActiveLink = navLink;
    
        // Add "active" class to the clicked link
        navLink.classList.add("active");
        navLink.style.color = "#ff305b"; // Set the active link color
    
        // Scroll to the target section
        let targetId = navLink.getAttribute("href").substring(1);
        let targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
            top: targetElement.offsetTop - navbar.offsetHeight, // Adjusted for the navbar height
            behavior: 'smooth'
            });
        }
        });
    });
    
    // Function to update active link
    function updateActiveLink(scrollPosition) {
        navLinks.forEach(navLink => {
        let targetId = navLink.getAttribute("href").substring(1);
        let targetElement = document.getElementById(targetId);
    
        if (targetElement) {
            let offsetTop = targetElement.offsetTop;
    
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + targetElement.offsetHeight) {
            // Set the current link as active
            navLinks.forEach(link => {
                if (link !== navLink) {
                link.classList.remove("active");
                link.style.color = ""; // Reset to default color
                }
            });
            navLink.classList.add("active");
            navLink.style.color = "#ff305b"; // Set the active link color
            } else {
            // Remove active class if not in the target section
            navLink.classList.remove("active");
            navLink.style.color = ""; // Reset to default color
            }
        }
        });
    }

            
    // ===============================================================================
    // stats count
    // =====================
    // increase the numbers when go to the section
    let statsNumsBox = document.querySelectorAll(".stats .box .number");
    // catch the section which when reach to it , it'll be started to count until the wanted number
    let sectionStats = document.querySelector(".stats");
    let started = false; // function started ? No

    // when scrolling until reach the our secton then start the function to run
    window.onscroll = function() {
        if(window.scrollY >= sectionStats.offsetTop ){
            if(!started){
                // if the function is not started
                statsNumsBox.forEach((num) => startCount(num));
            }
            // then after that make the flag is true ( that's meaning the function is started and not make it start again)
            started = true;
        }

    }
    function startCount(element){
        // goal
        let goal = element.dataset.goal;
        let counter = setInterval(() =>{
            // note that: 1000 msec = 1 sec
            element.textContent++;
            if(element.textContent == goal){
                clearInterval(counter);
            }

        }, 8000/goal); // we make not fixed duration but we make a duration for all numbers goals to be finished at the same time
    }
    // startCount(statsNumsBox[0]);

        
    // =================================================================================
    // dots at feedback section
    // ========================
    let dots = document.querySelectorAll(".feedback .dots span");
    // inner-feedback show
    let innerFeedbacks = document.querySelectorAll(".feedback .inner-feedback");

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots.forEach(otherDot => {
                otherDot.classList.remove("active");
            });
            dot.classList.add("active");

            // Hide all inner feedbacks
            innerFeedbacks.forEach(innerFeedback => {
                innerFeedback.classList.remove("display");
            });

            // Display the corresponding inner feedback
            innerFeedbacks[index].classList.add("display");
        });
    });



    // =================================================================================
    
});
    


