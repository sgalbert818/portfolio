/*
*/

let projects = [
    {
        id: 4,
        title: 'Connections',
        description: `Connections is an intellectually stimulating puzzle game inspired by the popular New York Times Connections game. With its intuitive user interface, Connections offers players an immersive and educational gaming experience that encourages critical thinking, problem-solving, and creativity.`,
        img: 'images/connections.png',
        link: 'https://connections-project.netlify.app/'
    },
    {
        id: 2,
        title: 'Resort Selector',
        description: `The Resort Selector project is an innovative web application designed to provide personalized recommendations to users based on their location and preferences. Leveraging APIs to gather real-time data on traffic, weather, and snowfall, this project offers users recommendations to ensure the optimal skiing experience.`,
        img: 'images/resortselector.png',
        link: 'https://resort-selector-project.netlify.app/'
    },
    {
        id: 1,
        title: 'Arcade Website',
        description: `The arcade website is a dynamic and visually appealing site designed to provide an engaging experience for visitors. Inspired by shortcomings of the arcade's existing website, this project aims to enhance engagement and showcase the arcade's offerings in a modern and attractive manner.`,
        img: 'images/updown.png',
        link: 'https://up-down-project.netlify.app'
    },
    {
        id: 3,
        title: 'Resource Radar',
        description: `The Resource Radar is a comprehensive map interface that displays various resources available on campus. This project empowers users to discover essential resources within their college campus while also enabling them to contribute their own additions to the map, fostering an interactive community.`,
        img: 'images/resourceradar.png',
        link: 'https://resource-radar-project.netlify.app/'
    },
    {
        id: 5,
        title: 'Finance Tracker',
        description: `Bet you've never seen one of these before! The finance tracker is an intuitive app that tracks expenses and compares them to target budgets set by the user. It then takes the user's spending inputs and represents the data visually, facilitating seamless expense tracking.`,
        img: 'images/financetracker.png',
        link: 'https://finance-tracker-project.netlify.app/'
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
        <div class="item fade-in">
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

// fade transitions

const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in");

if (elementsToFadeInUpOnScroll) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in");
      } else {
        element.classList.remove("fade-in");
      }
    });
  });
}