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
    {
        id: 3,
        title: 'Resource Radar',
        description: 'This project uses the google maps API in conjunction with interactive markers, allowing users to select expandable icons to view resources or click on the map to add their own.',
        img: 'images/resourceradar.png',
        link: 'https://resource-radar-project.netlify.app/'
    },
    {
        id: 4,
        title: 'Connections',
        description: 'I recreated one of my all-time favorite games, NYT connections. This project gave me TONS of practice with arrays, strings, loops, and built-in JS functions.',
        img: 'images/connections.png',
        link: 'https://connections-project.netlify.app/'
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

function tabPress(p1, p2, p3, p4, p5, p6) {
    p1.classList.add('tab-active');
    p2.classList.remove('tab-active');
    p3.classList.remove('tab-active');
    p4.style.display = 'flex';
    p5.style.display = 'none';
    p6.style.display = 'none';
}

projectsBtn.addEventListener('click', function() {
    displayProjects(projects);
    tabPress(projectsBtn, aboutBtn, socialsBtn, projectsContent, aboutContent, socialsContent);
})

aboutBtn.addEventListener('click', function() {
    tabPress(aboutBtn, projectsBtn, socialsBtn, aboutContent, socialsContent, projectsContent);
})

socialsBtn.addEventListener('click', function() {
    tabPress(socialsBtn, projectsBtn, aboutBtn, socialsContent, projectsContent, aboutContent);
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