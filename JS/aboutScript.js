const content = document.getElementById("content");
const ankerSkill = document.getElementById("AnkerSkill");
const ankerEdu = document.getElementById("AnkerEdu");

const skills = [
    {header: "HTML/CSS", discription: "Fundamental building blocks for web development."},
    {header: "JavaScript", discription: "Core programming language for web development."},
    {header: "Responsive Design", discription: "Ensuring websites work well on various devices and screen sizes."},
    {header: "Frameworks and Libraries", discription: " React, Angular, Vue.js, Node.js, Express, Django, Ruby on Rails etc."},
    {header: "Version Control/Git", discription: "Essential for collaboration and code management."},
    {header: "Database Management", discription: "SQL, NoSQL, MongoDB, PostgreSQL, etc."},

];

const education = [
    {header: "Bachelor's Degree", discription: "Degrees in Computer Science."},
    {header: "Associate Degree", discription: "In web development, computer science, or related fields."},
    {header: "Coding Bootcamps", discription: "Completion of web development bootcamps like General Assembly, Flatiron School"},
    {header: "Specialized Programs", discription: "Intensive courses focused on specific technologies (e.g., JavaScript, React, Node.js)."},

]

const skillClick = () => {
    content.textContent = ""
    ankerEdu.className = "nav-item nav-link";
    ankerSkill.className = "border-bottom text-decoration-none text-secondary m-auto";
    skills.map((skill) => {
        const header = document.createElement("h6");
        const discription = document.createElement("p");
    
        discription.textContent = skill.discription
        discription.className = "text-white small px-4"
    
        header.textContent = skill.header
        header.className = "text-primary px-2 "
        
        content.appendChild(header);
        content.appendChild(discription);
    })
}

const educationClick = () => {
    content.textContent = ""
    ankerEdu.className = "border-bottom text-decoration-none text-secondary m-auto";
    ankerSkill.className = "nav-item nav-link";

    education.map((edu) => {
        const header = document.createElement("h6");
        const discription = document.createElement("p");

        discription.className = "text-white small px-4"
        discription.textContent = edu.discription

        header.className = "text-primary px-2 "
        header.textContent = edu.header

        content.appendChild(header);
        content.appendChild(discription);
    })
}

skillClick()