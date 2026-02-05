function setActive(btn) {
  document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function loadEdu() {
  document.getElementById("sectionTitle").innerHTML = 'My <span class="text-success">Education</span>';
  document.getElementById("ref").innerHTML = `

    <div class="col-md-6">
      <div class="custom-card text-center">
        <i class="bi bi-mortarboard-fill fs-1"></i>
        <h5 class="card-title year">MCA</h5>
        <p class="card-text ">2023-2025</p>
        <h6>Anurag University</h6>
      </div>
    </div>

    <div class="col-md-6">
      <div class="custom-card text-center">
        <i class="bi bi-mortarboard fs-1"></i>
        <h5 class="card-title year">BCA</h5>
        <p class="card-text">2020-2023</p>
        <h6>Sidhhartha Degree and pg College</h6>
      </div>
    </div>

    <div class="col-md-6">
      <div class="custom-card text-center">
        <i class="bi bi-book-half fs-1"></i>
        <h5 class="card-title year">Intermediate</h5>
        <p class="card-text">2018-2020</p>
        <h6>Sri Gayatri Jr College</h6>
      </div>
    </div>
    
  `;
}

function loadCertifications() {
  document.getElementById("sectionTitle").innerHTML = 'My <span class="text-success">Certifications</span>';
  document.getElementById("ref").innerHTML = `
    <div class="col-md-6">
      <div class="custom-card">
        <img src="assets/certificate.png" alt="" class="skills">
        <h5>Java Programming Certificate</h5>
        <p class="company">Infosys Springboard Java Programming Certificate (2025)</p>
       <a href="https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_012880464547618816347_shared/1-9b57415d-6040-4229-8357-6d54f550d5cb.pdf"
   target="_blank"
   class="portfolio-btn">
   View Certificate
  </a>

      </div>
    </div>

    <div class="col-md-6">
      <div class="custom-card">
        <img src="assets/certificate.png" alt="" class="skills">
        <h5>SQL and Relational Databases</h5>
        <p class="company"> IBM Cognitive Class SQL and Relational Databases Certificate</p>
       <a href="https://courses.cognitiveclass.ai/certificates/441a4b5334f64de1bbf21e04e6bbc982"
   target="_blank"
   class="portfolio-btn">
   View Certificate
   </a>
      </div>
    </div>

    <div class="col-md-6">
      <div class="custom-card">
        <img src="assets/certificate.png" alt="" class="skills">
        <h5>Java Full Stack Certificate</h5>
        <p class="company">  Codegnan IT Solutions Pvt Ltd, Hyderabad</p>
       <a href="assets/Codegnan_PATHI SUNIL KUMAR.pdf" class="portfolio-btn" download="">Download Certificate</a>
      </div>
    </div>
  `;
}

function loadSkills() {
  document.getElementById("sectionTitle").innerHTML = 'My <span class="text-success">Skills</span>';
  document.getElementById("ref").innerHTML = `
    <div class="col-md-6">
      <div class="custom-card">
        <h4>Frontend Skills</h4>
        <p class="year">HTML, CSS, Bootstrap, JavaScript, ReactJS, MongoDB</p>
        <img src="assets/html5 (1).png" alt="" class="skills">
        <img src="assets/css3.png" alt="" class="skills">
        <img src="assets/bootstrap.png" alt="" class="skills">
        <img src="assets/javascript.png" alt="" class="skills">
        <img src="assets/react.png" alt="" class="skills ">
        <img src="assets/mongodb.png" alt="" class="skills">
      </div>
    </div>

    <div class="col-md-6">
      <div class="custom-card">
        <h4>Backend Skills</h4>
        <p class="year">Java, Advanced java, Hibernate, Spring Boot, MySQL</p>
        <img src="assets/java.png" alt="" class="skills">
        <img src="assets/spring-boot.png" alt="" class="skills">
        <img src="assets/my-sql.png" alt="" class="skills">
      </div>
    </div>
  `;
}

// function loadAbout() {
//   document.getElementById("sectionTitle").innerHTML = 'About <span class="text-success">Me</span>';
//   document.getElementById("ref").innerHTML = `
//     <div class="col-12">
//       <div class="custom-card">
//         <p>
//           I am Sunil Kumar Pathi, an MCA graduate with strong problem-solving skills,
//           eager to grow in a professional environment.
//         </p>
//       </div>
//     </div>
//   `;
// }

function loadAbout() {
  document.getElementById("sectionTitle").innerHTML =
    'About <span class="text-success">Me</span>';

  document.getElementById("ref").innerHTML = `
    <div class="col-12">
      <div class="custom-card">
          <p>
          I am Sunil Kumar Pathi, an MCA graduate with strong problem-solving skills,
         eager to grow in a professional environment.
          </p>
        <h4 class="mb-3 text-success">Personal Information</h4>

        <div class="row">
          <div class="col-md-6 mb-2"><strong>Name:</strong> Sunil Kumar Pathi</div>
          <div class="col-md-6 mb-2"><strong>Age:</strong> 23</div>

          <div class="col-md-6 mb-2"><strong>Gender:</strong> Male</div>
          <div class="col-md-6 mb-2"><strong>Nationality:</strong> Indian</div>

          <div class="col-md-6 mb-2"><strong>Location:</strong> Hyderabad, Telangana</div>
          <div class="col-md-6 mb-2"><strong>Freelance:</strong> Available</div>

          <div class="col-md-6 mb-2"><strong>Phone:</strong> +91 8187080117</div>
          <div class="col-md-6 mb-2">
            <strong>Email:</strong>
            <a href="mailto:sunilpathi82@gmail.com" class="text-success">
              sunilpathi82@gmail.com
            </a>
          </div>

          <div class="col-md-12 mt-3">
            <strong>Languages Known:</strong> English, Telugu, Hindi
          </div>
        </div>
      </div>
    </div>
  `;
}


/* Load default */
loadEdu();

const slides = document.querySelectorAll(".project-slide");
  let current = 0;

  document.getElementById("nextBtn").onclick = () => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  };

  document.getElementById("prevBtn").onclick = () => {
    slides[current].classList.remove("active");
    current = (current - 1 + slides.length) % slides.length;
    slides[current].classList.add("active");
  };

 const roles = [
  "Full Stack Java Developer",
  "Full Stack Web Developer",
  "Freelancer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const roleElement = document.getElementById("changing-role");

function typeEffect() {
  const currentRole = roles[roleIndex];
  
  if (!isDeleting) {
    // typing
    roleElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); 
      return;
    }
  } else {
    // deleting
    roleElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length; 
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100); 
}

typeEffect();

