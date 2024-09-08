"use strict";
// Toggle the visibility of the Skills section (Milestone 1)
const toggleButton = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', () => {
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});
// Show the form to create a resume (Milestone 3)
const generateResumeButton = document.getElementById('generate-resume');
const resumeForm = document.getElementById('resume-form');
generateResumeButton === null || generateResumeButton === void 0 ? void 0 : generateResumeButton.addEventListener('click', () => {
    resumeForm.style.display = 'block';
});
// Handle form submission to generate the resume (Milestone 3)
const resumeFormElement = document.getElementById('resume-builder-form');
resumeFormElement === null || resumeFormElement === void 0 ? void 0 : resumeFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    // Get user input
    const nameInput = document.getElementById('name-input').value;
    const emailInput = document.getElementById('email-input').value;
    const educationInput = document.getElementById('education-input').value;
    const skillsInput = document.getElementById('skills-input').value;
    const workInput = document.getElementById('work-input').value;
    // Update resume sections with user input
    document.getElementById('name').textContent = nameInput;
    document.getElementById('contact').textContent = `Contact: ${emailInput}`;
    document.getElementById('education-info').textContent = educationInput;
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = '';
    skillsInput.split(',').forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
    document.getElementById('work-info').textContent = workInput;
    // Hide the form after submission
    resumeForm.style.display = 'none';
});
// Editable Resume (Milestone 4)
const editResumeButton = document.getElementById('edit-resume');
editResumeButton === null || editResumeButton === void 0 ? void 0 : editResumeButton.addEventListener('click', () => {
    document.getElementById('name').contentEditable = 'true';
    document.getElementById('contact').contentEditable = 'true';
    document.getElementById('education-info').contentEditable = 'true';
    document.getElementById('work-info').contentEditable = 'true';
    // Make skills editable
    //     const skillsItems = document.querySelectorAll('#skills-list li');
    //     skillsItems.forEach(item => {
    //         item.contentEditable = 'true';
    //     });
    // });
    const skillsItems = document.querySelectorAll('#skills-list li');
    skillsItems.forEach(item => {
        item.contentEditable = 'true';
    });
    // Unique URL and Shareable Link (Milestone 5)
    const shareResumeButton = document.getElementById('share-resume');
    shareResumeButton === null || shareResumeButton === void 0 ? void 0 : shareResumeButton.addEventListener('click', () => {
        var _a;
        const username = (_a = document.getElementById('name').textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase().replace(/ /g, '-');
        const resumeURL = `https://${username}.vercel.app/resume`;
        // Display the link to the user
        alert(`Your resume link: ${resumeURL}`);
        // Optionally, implement code to generate a downloadable PDF of the resume
        // This requires more advanced functionality, such as using libraries like jsPDF.
    });
});
