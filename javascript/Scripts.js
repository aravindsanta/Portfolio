/*Name: Aravind Santha
File Name: Assignment 1, javascript file
Date Created: Feb 05, 2025*
Description: This is a javascript file that gives logic to the personal portfolio website*/


// This event listener waits fo the HTML document to fully load before executing the enclosed function
document.addEventListener("DOMContentLoaded", function() {

    //This selects the element with the ID contactbtn
    const contactBtn = document.getElementById('contact-btn');

    //This selects the element with the ID contact-info-section
    const contactSection = document.getElementById('contact-info-section');
    
//This selects all elements with the class project and returns a  nodelist
    const projects = document.querySelectorAll(".Project");

    //This initializes the variable to zero to keep track of the current index of projects
    let currentIndex = 0;

    // Contact Info Section
    //This checks if the contactBtn element exist. If it exists, it adds a click event listener to it.
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
     if (contactSection) {

    /*Toggles the display style of the contactSection between none and block, If its currently hidden
    , it displays the section and scrolls into view smoothly*/
        if (contactSection.style.display === 'none' || contactSection.style.display === '') {
                    contactSection.style.display = 'block';
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    contactSection.style.display = 'none';
                }
            } else {
                //if the contactSection doesnt exist, redirects the user to contact page if contact section is not available
                window.location.href = 'contact.html';
            }
        });
    }

    /* This defines the function updateProjects that iterates through the projects NodeList
    and toggles the active class based on whether the index matches currentIndex*/
    function updateProjects() {
        projects.forEach((project, index) => {
            project.classList.toggle("active", index === currentIndex);
        });
    }
/*This adds the click event listener to the element with the ID prevBtn. 
on click, it updates currentIndex to the previous project(or loops to the 
last project if currently at the first one) and calls updateProjects*/
    document.getElementById("prevBtn").addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
        updateProjects();
    });

    /*This adds a click event listener to the element with the ID nextBtn.
    On click, it updates currentIndex to the next project ( or loops to the first
    project if currently at the last one) and calls updateProjects*/
    document.getElementById("nextBtn").addEventListener("click", () => {
        currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
        updateProjects();
    });

    //This calls the updateProjects function to initialize the project display based on the current index.
    updateProjects();
});
