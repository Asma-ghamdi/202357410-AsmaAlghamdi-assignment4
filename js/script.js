// ---- Greeting with Time + Visitor Name ----
const greetingElement = document.getElementById("greeting");

// Get the current hour from the system time
const currentHour = new Date().getHours();

// Check the time and set the appropriate greeting
let timeGreeting;
if (currentHour < 12) {
    timeGreeting = "Good morning";
} else if (currentHour < 18) {
    timeGreeting = "Good afternoon";
} else {
    timeGreeting = "Good evening";
}

// Check if we already saved their name
let visitorName = localStorage.getItem('visitorName');

if (!visitorName) {
    // First visit — ask for their name
    visitorName = prompt('Hi! What is your name?');

    if (visitorName && visitorName.trim() !== '') {
        localStorage.setItem('visitorName', visitorName);
    }
}

// Combine time greeting + name
if (visitorName && visitorName.trim() !== '') {
    greetingElement.textContent = `${timeGreeting}, ${visitorName}! 👋`;
} else {
    greetingElement.textContent = `${timeGreeting}! 👋`;
}



// Get the theme button
const themeButton = document.getElementById("theme-toggle");

// Check if a saved theme exists
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = '☀️ Light Mode';
} else {
    themeButton.textContent = '🌙 Dark Mode';
}

// Toggle theme when button is clicked
themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    // Save preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeButton.textContent = '☀️ Light Mode';
    } else {
        localStorage.setItem("theme", "light");
        themeButton.textContent = '🌙 Dark Mode';
    }

});

// Get all project buttons
const projectButtons = document.querySelectorAll(".project-button");
// Add click event listeners to each project button
projectButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Get the project details element related to the clicked button
        const projectDetails = button.nextElementSibling;
        // Toggle the visibility of the project details
        if (projectDetails.style.display === "block") {
            projectDetails.style.display = "none";
        } else {
            projectDetails.style.display = "block";
        }
    });
});

// Contact form feedback
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// Handle form submission
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Trim inputs to remove extra whitespace
    nameInput.value = nameInput.value.trim();
    emailInput.value = emailInput.value.trim();
    messageInput.value = messageInput.value.trim();

    // Basic validation
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.className = "error";
        return;
    }

    // Validate email format using HTML5 validation
    if (!emailInput.checkValidity()) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.className = "error";
        return;
    }

    // If validation passes, show success message
    formMessage.textContent = "Message sent successfully!";
    formMessage.className = "success";
    contactForm.reset();
});


// ---- Project Filter Logic ----
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Remove 'active' from all buttons, add to clicked one
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selected = button.getAttribute('data-filter');

        // Show or hide projects based on category
        projects.forEach(project => {
            if (selected === 'all' || project.getAttribute('data-category') === selected) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// ---- Sort Logic ----
let sortAscending = true;
const sortBtn = document.getElementById('sort-btn');

sortBtn.addEventListener('click', () => {
    // Flip sort direction
    sortAscending = !sortAscending;
    sortBtn.textContent = sortAscending ? 'Sort:  Large → Small' : 'Sort:  Small → Large';

    const projectsSection = document.querySelector('.projects');
    const projectList = Array.from(document.querySelectorAll('.project'));
    
    // Define scale for each project
    const scaleOrder = {
        'project1': 2, // Large
        'project2': 1  // Medium
    };

    projectList.sort((a, b) => {
        const scaleA = scaleOrder[a.id];
        const scaleB = scaleOrder[b.id];
        return sortAscending ? scaleB - scaleA : scaleA - scaleB;
    });
    // Re-add sorted projects to the page
    projectList.forEach(project => projectsSection.appendChild(project));
});

// ---- GitHub API Integration ----

// GitHub username for fetching public repositories
const username = 'Asma-ghamdi'; 

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => {
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }
        return response.json();
    })
    .then(repos => {
        const container = document.getElementById('repos-container');
        container.innerHTML = ''; // Clear loading text

        if (repos.length === 0) {
            container.innerHTML = '<p>No repositories found.</p>';
            return;
        }

        // Display each repo as a card
        repos.forEach(repo => {
            const card = document.createElement('div');
            card.classList.add('repo-card');
            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description provided.'}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub →</a>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => {
        // a user friendly error message
        document.getElementById('repos-container').innerHTML =
            '<p class="error-message">⚠️ Could not load repositories. Please try again later.</p>';
        console.error(error);
    });

    