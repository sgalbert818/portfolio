let projects = [
    {
        id: 1,
        title: 'Arcade Website',
        description: 'This site is a basic 5-page website for an arcade bar in Kansas City. I was inspired after navigating the arcade\'s real website, and subsequently challenged myself to build a more aesthetic and easily navigable site.',
        img: 'images/updown.png',
        link: 'https://up-down-project.netlify.app'
    },
    {
        id: 2,
        title: 'Resort Selector',
        description: 'The resort selector takes in a user\'s address and returns a list of ski resorts, including corresponding weather conditions, snow reports, and current traffic. I created this project to familiarize myself with fetch requests and APIs.',
        img: 'images/resortselector.png',
        link: 'https://resort-selector-project.netlify.app/'
    },
]

const projectsContent = document.querySelector('.projects-content');
const aboutContent = document.querySelector('.about-content');
const socialsContent = document.querySelector('.socials-content');
const projectsBtn = document.getElementById('projects');
const aboutBtn = document.getElementById('about');
const socialsBtn = document.getElementById('socials');

window.addEventListener('DOMContentLoaded', function () {
    projectsBtn.classList.add('tab-active');
    displayProjects(projects);
});

projectsBtn.addEventListener('click', function() {
    displayProjects(projects);
    projectsBtn.classList.add('tab-active');
    aboutBtn.classList.remove('tab-active');
    socialsBtn.classList.remove('tab-active');
    aboutContent.style.display = 'none';
    socialsContent.style.display = 'none';
    projectsContent.style.display = 'flex';
})

aboutBtn.addEventListener('click', function() {
    projectsBtn.classList.remove('tab-active');
    aboutBtn.classList.add('tab-active');
    socialsBtn.classList.remove('tab-active');
    projectsContent.style.display = 'none';
    socialsContent.style.display = 'none';
    aboutContent.style.display = 'flex';
})

socialsBtn.addEventListener('click', function() {
    projectsBtn.classList.remove('tab-active');
    aboutBtn.classList.remove('tab-active');
    socialsBtn.classList.add('tab-active');
    projectsContent.style.display = 'none';
    aboutContent.style.display = 'none';
    socialsContent.style.display = 'flex';
})

function displayProjects(obj) {
    let display = obj.map(function (each) {
        return `
        <div class="item">
            <div class="show-img-container">
                <img src=${each.img}>
            </div>
            <div class="project-description">
                <h2><a href=${each.link} target="_blank">${each.title}</a></h2>
                <h4>${each.description}</h4>
            </div>
        </div>
        `;
    })
    display = display.join('');
    projectsContent.innerHTML = display 
}