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
