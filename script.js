const skills = [
  "HTML", "CSS", "JavaScript", "Python", "C/C++", "Java",
  "MySQL", "Git", "GitHub", "VS Code", "Django", "React",
  "AI/ML Basics", "IoT", "Arduino", "Sensors", "REST APIs"
];

const skillContainer = document.getElementById("skills-tags");
skills.forEach(skill => {
  const tag = document.createElement("span");
  tag.textContent = skill;
  skillContainer.appendChild(tag);
});

// Placeholder for "Suggest Learning Path"
document.getElementById("suggest-btn").addEventListener("click", () => {
  const suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = "✨ AI-powered suggestions coming soon...";
});
