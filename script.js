const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];

const skillsList = document.getElementById("skills-list");

for (const skill of skills) {
  const skillItem = document.createElement("span");
  skillItem.textContent = skill;
  skillItem.classList.add("skill-tag");
  skillsList.appendChild(skillItem);
}

