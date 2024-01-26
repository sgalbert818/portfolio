let projects = [
    {
        id: 1,
        title: 'Arcade Landing Page',
        description: 'The first site I created using vanilla JS, CSS, and HTML.',
        img: 'images/updown.png',
        link: 'https://up-down-project.netlify.app'
    },
    {
        id: 2,
        title: 'Resort Selector',
        description: 'The second site I created using vanilla JS, CSS, and HTML. I practiced using APIs with this site.',
        img: 'images/resortselector.png',
        link: 'https://resort-selector-project.netlify.app/'
    },
    {
        id: 1,
        title: 'Arcade Landing Page',
        description: 'The first site I created using vanilla JS, CSS, and HTML.',
        img: 'images/updown.png',
        link: 'https://up-down-project.netlify.app'
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
                <h2><a href=${each.link}>${each.title}</a></h2>
                <h4>${each.description}</h4>
            </div>
        </div>
        `;
    })
    display = display.join('');
    projectsContent.innerHTML = display 
}