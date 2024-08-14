
let projectsData = [
  {
      "title": "Employee Payroll Data Processing System",
      "about": "Developed a menu-driven interactive console application for employee payroll data processing. This robust system handles both master and transaction data effortlessly, ensuring streamlined management of employee records and payroll calculations..",
      "img": "../images/projects/images.jfif",
      "github": "https://github.com/shrutipyk1/employee-management-sys-final-project",
  },
  {
      "title": "Exploratory Data Analysis (EDA) on the Titanic Dataset",
      "about": "Titanic dataset, where I conducted a thorough Exploratory Data Analysis (EDA) to uncover key insights and patterns.Created insightful visualizations to illustrate the relationship between features and survival rates, including histograms, bar plots, and heatmaps.",
      "img": "../images/projects/Titanic dataset.png",
      "github": "https://github.com/shrutipyk1/EDA-Analysis-of-the-Titanic-Dataset-Using-Machine-Learning-Algorithms."
  },
  {
      "title": "Online-Music-Streaming-Platform",
      "about": "Unlock the Power of Music: Introducing Our Online Music Streamer Server.Check out our full paper to dive deeper into the technology and applications of our Online Music Streamer Server. Let's redefine how the world listens to music, one note at a time.",
      "img": "../images/projects/spotify.png",
      "github": "https://github.com/shrutipyk1/Online-Music-Streaming-Platform"
  },
  {
      "title": "Portfolio-Website",
      "about": "Responsive portfolio website showcasing projects and skills, built with HTML, CSS, and JavaScript for optimal performance and user experience.",
      "img": "../images/projects/Capture.png",
      "github": "https://github.com/shrutipyk1/Portfolio-Website",
  },
  {
      "title": "Diabetes-Prediction",
      "about": "This project predicts diabetes using features like pregnancies, insulin, age, and BMI, sourced from Kaggle and employing a random forest classifier for accurate prediction.",
      "img": "../images/projects/diabetes.png",
      "github": "https://github.com/shrutipyk1/Diabetes-Prediction"
  },
  {
      "title": "IoT-Based-Wireless-EV-Charging-System-for-Electric-Vehicle",
      "about": "Developed Streamlit app enables users to download GeeksForGeeks articles as PDFs using their article URLs.",
      "img": "../images/projects/ev.jpg",
      "github": "https://github.com/shrutipyk1/IoT-Based-Wireless-EV-Charging-System-for-Electric-Vehicle",
  },
];

let skillsData = [
  {
      "name": "Python",
      "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
  },
  {
      "name": "Pandas",
      "icon": "https://img.icons8.com/color/48/pandas.png"
  },
  {
      "name": "NumPy",
      "icon": "https://img.icons8.com/color/48/numpy.png"
  },
  {
      "name": "C",
      "icon": "https://img.icons8.com/color/48/c-programming.png"
  },
  {
      "name": "C++",
      "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
  },
  {
      "name": "HTML5",
      "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
  },
  {
      "name": "CSS3",
      "icon": "https://img.icons8.com/color/48/000000/css3.png"
  },
  {
      "name": "JavaScript",
      "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
  },
  {
      "name": "Bootstrap",
      "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
  },
  {
      "name": "Git",
      "icon": "https://img.icons8.com/color/48/000000/git.png"
  },
  {
      "name": "GitHub",
      "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
  },
  {
      "name": "Notebook",
      "icon": "https://img.icons8.com/fluency/48/jupyter.png"
  },
  {
    "name": "Visual Studio",
    "icon": "https://img.icons8.com/fluency/48/visual-studio.png"
  },
  {
    "name": "MATLAB",
    "icon": "https://img.icons8.com/fluency/48/matlab.png"
   },
   {
    "name": "Google Colab",
    "icon": "https://img.icons8.com/color/48/google-colab.png"
},
]

const typed = new Typed(".typing", {
  strings: [
    "",
    "Data",
    "Data Scientist",
    "Data Analyst",
    "Software Engineer",
    "Web Developer",
    "Competitive Programmer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let k = 0; k < totalSection; k++) {
      allSection[k].classList.remove("back-section");
    }
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  for (let k = 0; k < totalSection; k++) {
    allSection[k].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  let processData = (data) => {
    const skillsRow = document.getElementById("skills-row");
    if (!skillsRow) {
      console.error('Element with ID "skills-row" not found.');
      return;
    }
    data.forEach((skill) => {
      const skillItem = document.createElement("div");
      skillItem.className = "skills-item padd-15";

      const skillItemInner = document.createElement("div");
      skillItemInner.className = "skills-item-inner";

      const icon = document.createElement("div");
      icon.className = "icon";

      const img = document.createElement("img");
      img.src = skill.icon;
      img.alt = skill.name;

      icon.appendChild(img);

      const title = document.createElement("h4");
      title.textContent = skill.name;

      skillItemInner.appendChild(icon);
      skillItemInner.appendChild(title);

      skillItem.appendChild(skillItemInner);
      skillsRow.appendChild(skillItem);
    });
  }
  processData(skillsData);
});

document.addEventListener("DOMContentLoaded", () => {
  let processData = (data) => {
    const projectsContainer = document.getElementById("projects-container");
    data.forEach((project) => {
      const projectItem = document.createElement("div");
      projectItem.classList.add("projects-item", "padd-15");

      let websiteLink = "";
      if (project.website) {
        websiteLink = `<a href="${project.website}" target="_blank"><i class="fas fa-globe"></i></a>`;
      }

      projectItem.innerHTML = `
          <div class="projects-item-inner">
            <div class="projects-img">
              <img src="${project.img}" alt="${project.title}">
            </div>
            <div class="projects-info">
              <h3 class="projects-title">${project.title}</h3>
              <p class="projects-about">${project.about}</p>
            </div>
            <div class="projects-links">
              <a href="${project.github}" target="_blank"><i class="fab fa-github"></i></a>
              ${websiteLink}
            </div>
          </div>
        `;

      projectsContainer.appendChild(projectItem);
    });
  }
  processData(projectsData);
});