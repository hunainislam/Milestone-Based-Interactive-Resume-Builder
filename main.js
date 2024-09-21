"use strict";

// Toggle the visibility of the Skills section (Milestone 1)
const toggleButton = document.querySelector('#toggle-skills');
const skillsSection = document.querySelector('#skills');
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', () => {
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});

// // Show the form to create a resume

// (Milestone 3)

const generateResumeButton = document.querySelector('#generate-resume');

const resumeForm = document.querySelector('#resume-form');

generateResumeButton === null || generateResumeButton === void 0 ? void 0 : generateResumeButton.addEventListener('click', () => {
    resumeForm.style.display = 'block';
});

// // Handle form submission to generate the resume (Milestone 3)

const resumeFormElement = document.querySelector('#resume-builder-form');
resumeFormElement === null || resumeFormElement === void 0 ? void 0 : resumeFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

     // Get user input

    const nameInput = document.querySelector('#name-input').value;
    const emailInput = document.querySelector('#email-input').value;
    const educationInput = document.querySelector('#education-input').value;
    const skillsInput = document.querySelector('#skills-input').value;
    const workInput = document.querySelector('#work-input').value;

    // Update resume sections with user input

    document.querySelector('#name').textContent = nameInput;
    document.querySelector('#contact').textContent = `Contact: ${emailInput}`;
    document.querySelector('#education-info').textContent = educationInput;
    const skillsList = document.querySelector('#skills-list');
    skillsList.innerHTML = '';
    skillsInput.split(',').forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
    document.querySelector('#work-info').textContent = workInput;
    // Hide the form after submission
    resumeForm.style.display = 'none';
});

// Editable Resume (Milestone 4)

// const editResumeButton = document.querySelector('#edit-resume');

// editResumeButton === null || editResumeButton === void 0 ? void 0 : editResumeButton.addEventListener('click', (event) => {
//     document.querySelector('#name').contentEditable = 'true';
//     document.querySelector('#contact').contentEditable = 'true';
//     document.querySelector('#education-info').contentEditable = 'true';
//     document.querySelector('#work-info').contentEditable = 'true';

//     // Make skills editable

//     //     const skillsItems = document.querySelectorAll('#skills-list li');
//     //     skillsItems.forEach(item => {
//     //         item.contentEditable = 'true';
//     //     });
//     // });
//         const skillsItems = document.querySelectorAll('#skills-list li');
//         skillsItems.forEach(item => {
//             item.contentEditable = 'true';
//         });
//     });

//     // Unique URL and Shareable Link (Milestone 5)
//     const shareResumeButton = document.querySelector('#share-resume');
//     shareResumeButton === null || shareResumeButton === void 0 ? void 0 : shareResumeButton.addEventListener('click', () => {
//         var _a;
//         const username = (_a = document.querySelectorAll('#name').textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase().replace(/ /g, '-');
//         const resumeURL =`https://${username}.milestone-based-interactive-resume-builder.vercel.app/`
//         // Display the link to the user
//         alert(`Your resume link: ${resumeURL}`);
//         // console.log(`Your resume link: ${resumeURL}`)
//         // Optionally, implement code to generate a downloadable PDF of the resume
//         // This requires more advanced functionality, such as using libraries like jsPDF.
    // });
