const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];

const skillsList = document.getElementById("skills-list");

for (const skill of skills) {
  const skillItem = document.createElement("span");
  skillItem.textContent = skill;
  skillItem.classList.add("skill-tag");
  skillsList.appendChild(skillItem);
}

const projects = [
  {
    title: "To-Do List App",
    description: "A simple task manager where users can add, complete, and delete tasks stored in the browser.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    title: "Weather Dashboard",
    description: "A small app that fetches and displays current weather data for a user-entered city.",
    tech: "HTML, CSS, JavaScript, Fetch API"
  }
];

const projectsList = document.getElementById("projects-list");

for (const project of projects) {
  const card = document.createElement("div");
  card.classList.add("project-card");

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const tech = document.createElement("p");
  tech.textContent = "Tech: " + project.tech;
  tech.classList.add("project-tech");

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(tech);

  projectsList.appendChild(card);
}


