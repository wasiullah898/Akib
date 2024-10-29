function showTutorial(tutorial) {
    const content = document.getElementById('content');
    let tutorialContent;

    switch(tutorial) {
        case 'html':
            tutorialContent = `<h3>HTML Basics</h3>
            <p>HTML stands for HyperText Markup Language. It is the standard language for creating web pages.</p>`;
            break;
        case 'css':
            tutorialContent = `<h3>CSS Basics</h3>
            <p>CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen.</p>`;
            break;
        case 'js':
            tutorialContent = `<h3>JavaScript Basics</h3>
            <p>JavaScript is a programming language that allows you to implement complex features on web pages.</p>`;
            break;
        default:
            tutorialContent = `<p>Please select a tutorial to view.</p>`;
    }

    content.innerHTML = tutorialContent;
}

// Dark mode toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const tutorials = document.querySelectorAll('.tutorial');
    tutorials.forEach(tutorial => tutorial.classList.toggle('dark'));
});

// Search functionality
function filterTutorials() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const tutorials = document.querySelectorAll('.tutorial');
    
    tutorials.forEach(tutorial => {
        const keywords = tutorial.dataset.keywords;
        if (keywords.toLowerCase().includes(query)) {
            tutorial.style.display = 'block';
        } else {
            tutorial.style.display = 'none';
        }
    });
}
