# AI Usage Report

## Tools Used
- ChatGPT

## How AI Was Used
ChatGPT was used throughout the assignment to help me understand the requirements and continue improving the portfolio website I created in Assignment 1. I first referred to the demos and attempted to write parts of the code myself, then used AI to identify mistakes, explain concepts, and suggest improvements.

In the HTML file, AI helped me improve the page structure by suggesting semantic tags such as `section` for the main content areas like About, Projects, and Contact. It also helped me add a navigation bar linked to section IDs such as `#about`, `#projects`, and `#contact`.

In the CSS file, AI supported me in styling the layout and improving responsiveness. It also helped me add hover effects, smooth scrolling, form message styling, and theme-related styles for the dark mode feature.

In the JavaScript file, AI helped me implement interactive features such as:
- a greeting message based on the current time using the `greeting` element
- a dark/light theme toggle using the `theme-toggle` button and `localStorage`
- project detail buttons that show or hide extra information when the user clicks `View Details`
- contact form validation and feedback using the `contact-form` and `form-message` elements

AI was also used to explain how to connect these features correctly to the HTML elements already in my code and how to organize them inside one `script.js` file without causing conflicts.

AI was also used to guide me through deploying the website using GitHub Pages. It helped me understand how to link the repository to a live URL, configure the deployment settings, and ensure that all files (such as CSS, JavaScript, and images) were correctly loaded using relative paths. This allowed me to successfully publish my portfolio website and make it publicly accessible.

## Benefits
Using AI made the assignment more approachable because it broke larger tasks into smaller steps. As a beginner, I found it especially helpful when I needed to understand where to place code and how different files work together.

For example, AI made it easier for me to understand:
- how JavaScript selects elements using `getElementById` and `querySelectorAll`
- how event listeners work when a user clicks a button or submits a form
- how `localStorage` can save the selected theme even after refreshing the page
- how CSS classes such as `.dark-mode`, `.success`, and `.error` connect with JavaScript behavior

Without these explanations, some features such as the theme toggle and form feedback would have been more difficult for me to understand and implement correctly.

## Challenges
One challenge was understanding how to connect JavaScript to the correct elements in the HTML file. For example, when adding the form validation and success message, I had to make sure the form had the correct ID (`contact-form`) and that the message paragraph (`form-message`) existed in the HTML.

Another challenge was understanding how to add new features without breaking the old ones. For example, I already had a greeting feature based on the current time, and I needed to make sure adding the dark mode feature and project buttons would not interfere with it. AI helped explain that the features could stay in the same `script.js` file as long as they used different variable names and targeted different elements.

I also found it difficult at first to understand semantic HTML improvements, such as when to replace `div` elements with `section` elements. AI helped me identify which parts of my page represented actual sections of content and which parts should remain regular containers.

## Responsible Use
All AI-generated suggestions were reviewed before being added to the project. I did not copy everything directly without checking it. Instead, I typed the code manually, tested it, and changed it when needed so it would match my website structure and assignment requirements.

For example:
- I adjusted the AI suggestions so they matched my actual IDs and class names in the HTML
- I kept the features that fit my portfolio and ignored ideas that felt too advanced or unnecessary
- I tested each feature after adding it, such as the theme toggle, project buttons, and form feedback
- when something did not work, such as the success message not appearing, I used AI to troubleshoot the specific issue and understand the cause

This helped me make sure that the final work reflected my own understanding and not just copied output.

## Learning Outcomes
Through using AI in this assignment, I learned more than just how to write individual lines of code. I learned how the HTML, CSS, and JavaScript files connect together to build a more interactive website.

More specifically, I learned:
- how to structure a webpage using semantic elements such as `header`, `nav`, and `section`
- how to use JavaScript event listeners for clicks and form submission
- how to use conditional logic for the greeting message and validation
- how to save user preferences using `localStorage`
- how to connect CSS classes to JavaScript in order to change the appearance of the page dynamically
- how to improve user experience by adding guidance, feedback messages, and interactive buttons
- how to deploy a website using githup pages

Overall, AI helped me understand the logic behind the features I added, not just complete the assignment. It made the learning process more gradual and manageable, especially when I was unsure where to start or how to debug an issue.