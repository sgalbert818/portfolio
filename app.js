let projects = [
    {
        id: 1,
        title: 'Arcade Landing Page',
        description: 'The first site I created using vanilla JS, CSS, and HTML.',
        img: 'images/updown.png',
    },
    {
        id: 2,
        title: 'Resort Selector',
        description: 'The second site I created using vanilla JS, CSS, and HTML. I practiced using APIs with this site.',
        img: 'images/resortselector.png',
    },
    {
        id: 2,
        title: 'Resort Selector',
        description: 'The second site I created using vanilla JS, CSS, and HTML. I practiced using APIs with this site.',
        img: 'images/resortselector.png',
    },
]

const outerContent = document.querySelector('.about-content');
const innerContent = document.querySelector('.content');
projectsBtn = document.getElementById('projects');
aboutBtn = document.getElementById('about');
socialsBtn = document.getElementById('socials');

//window.addEventListener('DOMContentLoaded', function () {
    //displayProjects(projects);
//});

projectsBtn.addEventListener('click', function () {
    displayProjects(projects);
})

aboutBtn.addEventListener('click', function () {
    outerContent.innerHTML = '';
    
})


function displayProjects(obj) {
    let display = obj.map(function (each) {
        return `
        <div class="item">
            <div class="show-img-container">
                <img src=${each.img}>
            </div>
            <div class="project-description">
                <h2>${each.title}</h2>
                <h4>${each.description}</h4>
            </div>
        </div>
        `;
    })
    display = display.join('');
    innerContent.innerHTML = display
}