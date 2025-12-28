document.getElementById('Homelink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSection('Home', 'Homelink');
});

document.getElementById('Aboutlink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSection('About', 'Aboutlink');
});

document.getElementById('Resumelink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSection('Resume', 'Resumelink');
});

document.getElementById('Educationlink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSection('Education', 'Educationlink');
});

document.getElementById('Internslink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSection('Interns', 'Internslink');
});
document.getElementById('Certificationslink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSection('Certifications', 'Certificationslink');
});

function toggleSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}



