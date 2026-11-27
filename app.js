"use strict";
const projects = [
 {
   id: "cardiopredict",
   title: "CardioPredict AI",
   subtitle: "Heart Disease Prediction System",
   date: "2026",
   type: "Individual project",
   role: "Machine learning, model evaluation & explainable AI",
   categories: ["ai"],
   summary: "I built a Streamlit dashboard to explore heart disease predictions. It compares classification models and uses SHAP to show how individual features contribute to a prediction.",
   details: [
     "Built an end-to-end pipeline for data preprocessing, feature engineering and feature selection.",
     "Compared Logistic Regression, Random Forest and SVM using stratified 5-fold cross-validation. Logistic Regression achieved 88.52% accuracy and 92.86% recall on the test set.",
     "Integrated SHAP to visualize global feature importance and explain individual predictions.",
     "Built an interactive prediction and model analytics dashboard and deployed it on Streamlit Community Cloud."
   ],
   tags: ["Python", "Scikit-learn", "SHAP", "Streamlit", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
   cover: "assets/projects/CardioPredict AI Dashboard.png",
   liveUrl: "https://cardiopredict-ai-777.streamlit.app/",
   url: "https://github.com/madhusanka77/CardioPredict-AI",
   button: "View GitHub repository"
 },
 {id:"eliteauto",title:"EliteAuto",subtitle:"AI-powered dealership management",date:"2026",type:"Individual project",role:"AI, machine learning & full-stack development",categories:["ai","fullstack"],summary:"I built a dealership app that estimates used-car prices from vehicle features. A Python service runs the Random Forest model and sends its estimate to the web app.",details:["Developed and integrated a Random Forest regression model with Python, Pandas and Scikit-learn to estimate vehicle market prices from vehicle attributes.","Built a dedicated Flask AI microservice for model inference and Gemini-powered negotiation, intent analysis and lead scoring.","Extracted structured vehicle information from unstructured advertisements; implemented inventory valuation analytics and PDF brochure generation."],tags:["Python","Scikit-learn","Pandas","Flask","Gemini 2.5 Flash","Java","Spring Boot","React","MySQL","ReportLab"],url:"https://github.com/madhusanka77/EliteAuto-AI-System",button:"View source"},
 {id:"medisafe",title:"MediSafe AI",subtitle:"AI pharmacy & clinical assistant",date:"Nov 2026",type:"Individual project",role:"Generative AI & document processing",categories:["ai","fullstack"],summary:"I built a chatbot that answers questions in Sinhala and English. It supports voice input and lets users ask questions about an uploaded PDF.",details:["Integrated the Google Gemini large language model with a React and Spring Boot application.","Implemented English and Sinhala natural language conversations, voice-based input, and AI-assisted PDF report analysis.","Created exportable conversation records for structured information management."],tags:["Java","Spring Boot","React","Gemini API","REST APIs","NLP","Generative AI"],url:"https://github.com/madhusanka77/medisafe-ai-chatbot",button:"View source"},
 {id:"ridelink",title:"RideLink",subtitle:"Microservices ride-sharing system",date:"2026",type:"Group project · 4 members",role:"My contribution: Account Service",categories:["fullstack"],summary:"I built the account service for our ride-sharing project. It handles registration, sign-in and role-based access for the other services.",details:["Developed the Account Service microservice for registration, authentication and user account management.","Implemented JWT-based authentication, role-based access control, REST APIs and MongoDB persistence.","Worked with independent service boundaries and inter-service integration, using feature branches and pull requests."],tags:["Java 21","Spring Boot","Spring Security","MongoDB","JWT","REST APIs","Swagger/OpenAPI","Git"],url:"https://github.com/SachithUdaKara65/AD-RIde-Link/tree/main/account-service",button:"View my module"},
 {id:"gps",title:"Real-Time GPS Tracking",subtitle:"Cross-platform location tracking",date:"2026",type:"Individual project",role:"Mobile development & serverless cloud",categories:["mobile","fullstack"],summary:"I built a GPS tracker for Android and the web. It shows live locations on a map and uses location updates to calculate distance, speed and arrival times.",details:["Built a shared Android and web application using React Native and Expo with interactive OpenStreetMap/Leaflet maps.","Implemented GPS updates, geospatial speed, distance and ETA calculations, plus signal-loss detection.","Integrated a serverless location-history backend using Netlify Functions and Blobs; deployed a web app and Android APK."],tags:["React Native","Expo","JavaScript","OpenStreetMap","Leaflet","Netlify Functions","Netlify Blobs"],url:"https://github.com/madhusanka77/bus-transit-tracker",button:"View source"},
 {id:"lifedrop",title:"LifeDrop",subtitle:"Smart blood bank management",date:"Feb – Mar 2026",type:"Group project",role:"My contribution: Blood Inventory Management",categories:["fullstack"],summary:"I developed the blood inventory module for our blood bank system. It tracks stock levels and expiry dates and alerts staff when supplies run low.",details:["Implemented stock monitoring, collection and expiry date tracking and low-stock alerts.","Developed REST APIs and MySQL database integration for blood inventory operations.","Collaborated with team members to integrate the inventory module into the overall application."],tags:["Java","Spring Boot","React","MySQL","Spring Data JPA","REST APIs"],url:"https://github.com/madhusanka77/blood-bank-management-system",button:"View repository"},
 {id:"assignment",title:"Assignment Service",subtitle:"Web application & software quality",date:"Dec 2025 – Feb 2026",type:"Team project · 2 members",role:"My contribution: Quality Assurance & Code Review",categories:["qa","fullstack"],summary:"A teammate and I worked on this assignment service. My role was quality management. I checked the frontend and backend code and discussed fixes with my teammate.",details:["Reviewed frontend and backend code to identify defects, maintainability issues and improvement opportunities.","Collaborated with the developer to improve code quality and application reliability.","Worked with a project stack including Spring Boot, React, PostgreSQL and cloud deployment technologies."],tags:["Code review","Software QA","Java","Spring Boot","React","PostgreSQL","AWS EC2","Azure","Oracle Cloud","Nginx","Vercel"],url:"https://www.assignmentservice.net",button:"Visit website"},
 {id:"orbit",title:"Orbit",subtitle:"Project management system",date:"Feb 2026",type:"Individual project",role:"Full-stack MERN development",categories:["fullstack"],summary:"I built a shared workspace for organizing projects and tasks. The dashboard calculates progress from task statuses so people can see what’s still open.",details:["Developed a full-stack project and workspace management platform with RESTful APIs.","Implemented JWT authentication, Bcrypt password hashing, automated email verification and role-based access.","Built a dynamic task dashboard with project completion calculations, task statuses and a glassmorphism interface."],tags:["React","Node.js","Express","MongoDB","Mongoose","JWT","Nodemailer","CSS"],url:"https://github.com/madhusanka77/Orbit-Project-Management-System",button:"View source"},
 {id:"smartcampus",title:"SmartCampus",subtitle:"Campus management system",date:"2025",type:"Individual project",role:"Full-stack MERN development",categories:["fullstack"],summary:"I built a campus app where students can download course materials and book lecture halls. Administrators have a separate dashboard to manage resources.",details:["Built separate student and admin dashboards using the MERN stack.","Implemented academic resource uploads, categorization and downloads, lecture hall booking and profile management.","Integrated email verification, notifications, password hashing, JWT and role-based authentication."],tags:["React","Node.js","Express","MongoDB","JavaScript","HTML","CSS","JWT","Bcrypt"],url:"https://github.com/madhusanka77/SmartCampus",button:"View source"}
];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const grid=document.getElementById("project-grid");
const dialog=document.getElementById("project-dialog");
const dialogContent=document.getElementById("dialog-content");
const linkIcon='<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 13a4 4 0 0 0 6 .5l3.5-3.5a4 4 0 0 0-5.7-5.7L12 6M14 11a4 4 0 0 0-6-.5L4.5 14a4 4 0 0 0 5.7 5.7L12 18"/></svg>';
function tags(arr){return arr.map(v=>'<span>'+esc(v)+'</span>').join("")}
const liveIcon = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M14 3h7v7m0-7L10 14"/><path d="M11 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/></svg>';
function projectLink(project, url, label, icon, withText) {
  const classes = withText ? ' class="button ghost"' : "";
  return `<a${classes} href="${esc(url)}" target="_blank" rel="noopener noreferrer" title="${esc(label)}" aria-label="${esc(project.title)} — ${esc(label)}">${icon}${withText ? esc(label) : ""}</a>`;
}
function projectLinks(project, withText = false) {
  const links = [];
  if (project.liveUrl) {
    links.push(projectLink(project, project.liveUrl, "Open live app", liveIcon, withText));
  }
  const icon = project.url.startsWith("https://github.com/") ? githubIcon : linkIcon;
  links.push(projectLink(project, project.url, project.button, icon, withText));
  return links.join("");
}
const infoIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 10.5v6m0-9v1"/></svg>';
const githubIcon = document.querySelector('.socials a[aria-label="GitHub profile"] svg').outerHTML;
const featuredCount = 6;
function renderProjects() {
  grid.innerHTML = projects.map((p, index) => {
    const title = esc(p.title);
    const id = esc(p.id);
    const detailsButton = p.liveUrl ? "" : `<button type="button" data-project="${id}" aria-label="Project details for ${title}" title="Project details">${infoIcon}</button>`;
    return `
      <article class="project-card" id="project-${id}" data-categories="${p.categories.join(" ")}" ${index >= featuredCount ? "hidden" : ""}>
        <div class="project-cover">
          <img src="${esc(p.cover || `assets/projects/${p.id}.webp`)}" width="800" height="450" alt="" loading="lazy">
          <div class="cover-actions">
            ${detailsButton}
            ${projectLinks(p)}
          </div>
        </div>
        <div class="project-body">
          <h3><button type="button" data-project="${id}">${title}<span aria-hidden="true">＋</span></button></h3>
          <p class="project-desc">${esc(p.summary)}</p>
          <div class="tags">${tags(p.tags.slice(0, 6))}</div>
        </div>
      </article>`;
  }).join("");
}
renderProjects();
let lastFocused=null;
grid.addEventListener("click",e=>{
 const b=e.target.closest("button[data-project]");
 if(!b)return;
 const p=projects.find(item=>item.id===b.dataset.project);
 if(!p)return;
 lastFocused=b;
 dialogContent.innerHTML='<span class="type-badge">'+esc(p.type)+' · '+esc(p.date)+'</span><h2 class="dialog-content-heading" id="dialog-title">'+esc(p.title)+' — '+esc(p.subtitle)+'</h2><p class="project-role">'+esc(p.role)+'</p><p class="dialog-summary">'+esc(p.summary)+'</p><h4>Technical highlights</h4><ul>'+p.details.map(d=>'<li>'+esc(d)+'</li>').join("")+'</ul><h4>Technology stack</h4><div class="tags">'+tags(p.tags)+'</div><div class="project-links">'+projectLinks(p, true)+'</div>';
 dialog.setAttribute("aria-labelledby","dialog-title");
 dialog.showModal();
 document.body.style.overflow="hidden";
});
dialog.querySelector(".dialog-close").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
dialog.addEventListener("close",()=>{document.body.style.overflow="";if(lastFocused)lastFocused.focus()});
const filterRow = document.querySelector(".filter-row");
const filters = Array.from(filterRow.querySelectorAll(".filter"));
const allProjectsCount = filterRow.querySelector('[data-filter="all"] span');
if (allProjectsCount) allProjectsCount.textContent = String(projects.length);
const collectionToggle = document.getElementById("project-collection-toggle");
let showAll = false;
function updateProjectView(category = "all") {
  let count = 0;
  Array.from(grid.children).forEach((card, index) => {
    const matches = category === "all" || card.dataset.categories.split(" ").includes(category);
    card.hidden = !(matches && (showAll || index < featuredCount));
    if (!card.hidden) count++;
  });
  filters.forEach(button => {
    const selected = button.dataset.filter === category;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  filterRow.hidden = !showAll;
  collectionToggle.setAttribute("aria-expanded", String(showAll));
  collectionToggle.textContent = showAll ? "Back to Featured Projects" : "View All Projects";
  document.getElementById("filter-count").textContent = `Showing ${count} ${showAll ? "" : "featured "}${count === 1 ? "project" : "projects"}.`;
}
filters.forEach(button => button.addEventListener("click", () => updateProjectView(button.dataset.filter)));
collectionToggle.hidden = false;
collectionToggle.addEventListener("click", () => {
  showAll = !showAll;
  updateProjectView();
  const destination = showAll ? filters[0] : grid.querySelector("h3 button");
  destination.focus({preventScroll:true});
  document.getElementById("projects").scrollIntoView({block:"start"});
});
const menu=document.querySelector(".menu-toggle"),nav=document.getElementById("navigation");
function hideMenu(){nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Open navigation")}
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"Close navigation":"Open navigation")});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",hideMenu));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&nav.classList.contains("open")){hideMenu();menu.focus()}});
if("IntersectionObserver" in window){
 const navLinks=Array.from(nav.querySelectorAll("a"));
 const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+entry.target.id));}}},{rootMargin:"-25% 0px -55% 0px"});
 document.querySelectorAll("main section[id]").forEach(section=>observer.observe(section));
}
const form=document.getElementById("contact-form");
form.addEventListener("submit",e=>{
 e.preventDefault();
 if(!form.reportValidity())return;
 const data=new FormData(form);
 const message=data.get("message")+"\n\nFrom: "+data.get("name")+"\nEmail: "+data.get("email");
 document.getElementById("form-note").textContent="Your email draft is ready to open. Review it and send from your email app.";
 window.location.href="mailto:madhusanka.path@gmail.com?subject="+encodeURIComponent("Portfolio enquiry from " + data.get("name"))+"&body="+encodeURIComponent(message);
});

const skillNames = [...new Set(Array.from(
  document.querySelectorAll("#skills .tags span"), tag => tag.textContent.trim()
))];
const marquee = document.querySelector(".tech-marquee");
const track = marquee.querySelector(".tech-track");
const pills = document.getElementById("tech-pills");
const toggleSkills = document.querySelector(".tech-toggle");
const row = document.createElement("div");
row.className = "tech-row";
for (const name of skillNames) {
  const pill = document.createElement("li");
  pill.textContent = name;
  pills.append(pill);
  const label = document.createElement("span");
  label.textContent = name;
  row.append(label);
}
track.append(row, row.cloneNode(true));
toggleSkills.hidden = false;
toggleSkills.addEventListener("click", () => {
  const expanding = pills.hidden;
  marquee.hidden = expanding;
  pills.hidden = !expanding;
  toggleSkills.setAttribute("aria-expanded", String(expanding));
  toggleSkills.textContent = expanding ? "Show less" : "See all skills";
});
