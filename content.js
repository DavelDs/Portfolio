const portfolioContent = document.querySelector("#portfolio-content");

if (portfolioContent) {
  portfolioContent.innerHTML = `
    <section class="hero section" id="home">
      <div class="hero-copy reveal">
        <p class="eyebrow">Davis Ariel &bull; Informatics Student</p>
        <h1>Data Analytics, Web Development, and Quality Assurance.</h1>
        <p class="hero-text">
          Enthusiastic about improving processes and building reliable user experiences.
          I am currently studying Informatics at Universitas Multimedia Nusantara while
          developing practical skills in Python, spreadsheets, HTML, CSS, Figma, UI/UX,
          and structured problem solving.
        </p>
        <div class="hero-actions">
          <a class="btn primary" href="#projects">View Projects</a>
          <a class="btn secondary" href="#contact">Contact Me</a>
          <a class="btn secondary" href="Davis Ariel-resume.pdf" download="Davis_Ariel_CV.pdf">Download CV</a>
        </div>
      </div>

      <div class="profile-stack">
        <div class="tech-emblems" aria-hidden="true">
          <span class="tech-emblem emblem-data">DATA</span>
          <span class="tech-emblem emblem-web">WEB</span>
          <span class="tech-emblem emblem-qa">QA</span>
          <span class="tech-emblem emblem-ai">AI</span>
          <span class="tech-emblem emblem-py">PY</span>
        </div>

        <aside class="profile-card reveal" aria-label="Profile summary">
          <div class="profile-glow"></div>
          <figure class="avatar">
            <img src="Assets/Profil.jpeg" alt="Profile photo of Davis Ariel" />
          </figure>
          <p class="profile-label">Open to Internship</p>
          <h2>Davis Ariel</h2>
          <div class="profile-stats">
            <div>
              <strong>3.34</strong>
              <span>Current GPA</span>
            </div>
            <div>
              <strong>2027</strong>
              <span>Expected graduation</span>
            </div>
            <div>
              <strong>2x</strong>
              <span>PICF gold medals</span>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="section about-grid" id="about">
      <div class="section-heading reveal">
        <p class="eyebrow">About Me</p>
        <h2>Informatics student focused on useful, careful, and user-minded work.</h2>
      </div>
      <div class="about-content reveal">
        <p>
          I am pursuing a Bachelor of Informatics / Computer Science at Universitas
          Multimedia Nusantara, expected to graduate in August 2027. My interests sit
          around data analytics, web development, and quality assurance.
        </p>
        <p>
          Outside technical work, my experience in Ultima Sonora as a chorister and coach
          has shaped my communication, attention to detail, discipline, time management,
          leadership, adaptability, and public speaking.
        </p>
      </div>
    </section>

    <section class="section education-section" id="education">
      <div class="section-heading reveal">
        <p class="eyebrow">Education</p>
        <h2>Universitas Multimedia Nusantara.</h2>
      </div>

      <div class="education-panel reveal">
        <div>
          <p class="timeline-date">Aug 2023 - Aug 2027 Expected</p>
          <h3>Bachelor of Informatics / Computer Science</h3>
          <p>
            Universitas Multimedia Nusantara, Jalan Scientia Boulevard Gading,
            Curug Sangereng, Serpong, Kabupaten Tangerang, Banten.
          </p>
        </div>
        <div class="education-stats">
          <div>
            <strong>3.34/4.00</strong>
            <span>Current GPA</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Sololearn Python certificates</span>
          </div>
          <div>
            <strong>2027</strong>
            <span>Expected graduation</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="skills">
      <div class="section-heading reveal">
        <p class="eyebrow">Skill Set</p>
        <h2>Resume-based skills for technical, analytical, and collaborative work.</h2>
      </div>

      <div class="skill-grid">
        <article class="skill-card reveal">
          <span class="skill-number">01</span>
          <h3>Programming Languages</h3>
          <div class="skill-list">
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">Py</span>Python</div>
              <span class="skill-level">Intermediate</span>
              <div class="skill-meter"><span style="--skill-value: 68%"></span></div>
            </div>
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">C#</span>C#</div>
              <span class="skill-level">Intermediate</span>
              <div class="skill-meter"><span style="--skill-value: 68%"></span></div>
            </div>
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">JS</span>JavaScript</div>
              <span class="skill-level">Intermediate</span>
              <div class="skill-meter"><span style="--skill-value: 68%"></span></div>
            </div>
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">Kt</span>Kotlin</div>
              <span class="skill-level">Intermediate</span>
              <div class="skill-meter"><span style="--skill-value: 68%"></span></div>
            </div>
          </div>
        </article>
        <article class="skill-card reveal">
          <span class="skill-number">02</span>
          <h3>Mobile Development</h3>
          <div class="skill-list">
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">AS</span>Android Studio</div>
              <span class="skill-level">Intermediate</span>
              <div class="skill-meter"><span style="--skill-value: 68%"></span></div>
            </div>
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">RN</span>React Native</div>
              <span class="skill-level">Intermediate</span>
              <div class="skill-meter"><span style="--skill-value: 68%"></span></div>
            </div>
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">Ex</span>Expo</div>
              <span class="skill-level">Intermediate</span>
              <div class="skill-meter"><span style="--skill-value: 68%"></span></div>
            </div>
          </div>
        </article>
        <article class="skill-card reveal">
          <span class="skill-number">03</span>
          <h3>Frontend Web</h3>
          <div class="skill-list">
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">H5</span>HTML</div>
              <span class="skill-level">Advanced</span>
              <div class="skill-meter"><span style="--skill-value: 86%"></span></div>
            </div>
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">C3</span>CSS</div>
              <span class="skill-level">Advanced</span>
              <div class="skill-meter"><span style="--skill-value: 86%"></span></div>
            </div>
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">Re</span>React.js</div>
              <span class="skill-level">Intermediate</span>
              <div class="skill-meter"><span style="--skill-value: 68%"></span></div>
            </div>
          </div>
        </article>
        <article class="skill-card reveal">
          <span class="skill-number">04</span>
          <h3>Database</h3>
          <div class="skill-list">
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">My</span>MySQL</div>
              <span class="skill-level">Intermediate</span>
              <div class="skill-meter"><span style="--skill-value: 68%"></span></div>
            </div>
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">Fb</span>Firebase</div>
              <span class="skill-level">Intermediate</span>
              <div class="skill-meter"><span style="--skill-value: 68%"></span></div>
            </div>
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">Sb</span>Supabase</div>
              <span class="skill-level">Basic</span>
              <div class="skill-meter"><span style="--skill-value: 42%"></span></div>
            </div>
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">SS</span>SQL Server Management Studio</div>
              <span class="skill-level">Basic</span>
              <div class="skill-meter"><span style="--skill-value: 42%"></span></div>
            </div>
          </div>
        </article>
        <article class="skill-card reveal">
          <span class="skill-number">05</span>
          <h3>Framework</h3>
          <div class="skill-list">
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">.N</span>.NET</div>
              <span class="skill-level">Basic</span>
              <div class="skill-meter"><span style="--skill-value: 42%"></span></div>
            </div>
          </div>
        </article>
        <article class="skill-card reveal">
          <span class="skill-number">06</span>
          <h3>Tools</h3>
          <div class="skill-list">
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">VS</span>Visual Studio Code</div>
              <span class="skill-level">Advanced</span>
              <div class="skill-meter"><span style="--skill-value: 86%"></span></div>
            </div>
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">VS</span>Visual Studio</div>
              <span class="skill-level">Intermediate</span>
              <div class="skill-meter"><span style="--skill-value: 68%"></span></div>
            </div>
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">Fg</span>Figma</div>
              <span class="skill-level">Intermediate</span>
              <div class="skill-meter"><span style="--skill-value: 68%"></span></div>
            </div>
            <div class="skill-row">
              <div class="skill-name"><span class="skill-badge">Gh</span>GitHub</div>
              <span class="skill-level">Advanced</span>
              <div class="skill-meter"><span style="--skill-value: 86%"></span></div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="section" id="experience">
      <div class="section-heading reveal">
        <p class="eyebrow">Experience</p>
        <h2>Choir, coaching, and event experience.</h2>
      </div>

      <article class="experience-panel reveal">
        <div class="experience-head">
          <p class="timeline-date">Ultima Sonora - Universitas Multimedia Nusantara</p>
          <h3>Choir Documentation & Experience</h3>
        </div>
        <div class="experience-carousel" aria-label="Choir photo carousel">
          <div class="carousel-media">
            <img
              class="carousel-photo active"
              src="Assets/lomba/picf1.jpg"
              alt="Choir performance documentation at Penabur International Choir Festival"
              data-slide="0"
            />
            <img
              class="carousel-photo"
              src="Assets/lomba/picf2.jpg"
              alt="Choir group documentation from Penabur International Choir Festival"
              data-slide="1"
            />
            <img
              class="carousel-photo"
              src="Assets/job/Paskah_Conductor.jpg"
              alt="Conducting documentation during an Easter choir activity"
              data-slide="2"
            />
            <img
              class="carousel-photo"
              src="Assets/job/Paskah_Conducting.jpg"
              alt="Conducting documentation included as a leadership experience"
              data-slide="3"
            />
            <img
              class="carousel-photo"
              src="Assets/job/KuliahPerdana_Conductor.jpg"
              alt="Academic and organization activity documentation"
              data-slide="4"
            />
            <div class="carousel-dots" aria-label="Choose experience photo">
              <button class="carousel-dot active" type="button" aria-label="Show PICF performance photo" aria-current="true" data-slide="0"></button>
              <button class="carousel-dot" type="button" aria-label="Show choir teamwork photo" data-slide="1"></button>
              <button class="carousel-dot" type="button" aria-label="Show choir coach photo" data-slide="2"></button>
              <button class="carousel-dot" type="button" aria-label="Show rehearsal direction photo" data-slide="3"></button>
              <button class="carousel-dot" type="button" aria-label="Show Kuliah Perdana photo" data-slide="4"></button>
            </div>
          </div>

          <div class="carousel-copy">
            <div class="carousel-description active" data-slide="0">
              <p class="timeline-date">Penabur International Choir Festival</p>
              <h4>Competition Performance</h4>
              <p>
                Competed with Ultima Sonora and achieved Gold Medal Level II in Pop Category
                and Gold Medal Level I in Folklore Category.
              </p>
            </div>
            <div class="carousel-description" data-slide="2">
              <p class="timeline-date">Coaching & Campus Jobs, Jan 2024 - Dec 2025</p>
              <h4>Choir Coach & Event Performance</h4>
              <p>
                Coached choristers during rehearsals and supported campus events, external
                jobs, and choir productions while building leadership, discipline, time
                management, and performance confidence.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>

    <section class="section" id="projects">
      <div class="section-heading reveal">
        <p class="eyebrow">Projects</p>
        <h2>Academic projects, game development, and product ideas.</h2>
      </div>

      <div class="project-grid">
        <article class="project-card reveal">
          <div class="project-tag">Game Development</div>
          <h3>Confined</h3>
          <p>
            Built with a team for a Game Development course, Confined is a first-person
            survival horror game set inside a dark cave system. Players rely on a
            flashlight, limited ammunition, a hidden pistol, and a pickaxe while surviving
            spider attacks and searching for a way out.
          </p>
          <a href="https://nevanoz.itch.io/confined" target="_blank" rel="noreferrer">View Details</a>
        </article>
        <article class="project-card reveal">
          <div class="project-tag">Web</div>
          <h3>Bangka Tourism Website</h3>
          <p>
            Developed a website showcasing Bangka tourism and local cuisine as part of
            web development learning.
          </p>
          <a href="https://mybabel24.vercel.app/" target="_blank" rel="noreferrer">View website</a>
        </article>
        <article class="project-card reveal">
          <div class="project-tag">Academic</div>
          <h3>Orphanage Website</h3>
          <p>
            Built a website for an orphanage as an academic project, practicing content
            structure, visual layout, and front-end implementation.
          </p>
        </article>
        <article class="project-card reveal">
          <div class="project-tag">Prototype</div>
          <h3>SafeU</h3>
          <p>
            Created a security app prototype connected to a smartwatch to detect danger
            zones and report to the nearest safe station.
          </p>
          <a href="https://www.figma.com/proto/8qom4VLBDqBDIOdbrLLCJn/SAFEU---HCI?node-id=634-5585&starting-point-node-id=634%3A5585&scaling=contain&content-scaling=fixed" target="_blank" rel="noreferrer">View Figma prototype</a>
        </article>
      </div>
    </section>

    <section class="section" id="certificates">
      <div class="section-heading reveal">
        <p class="eyebrow">Certificates</p>
        <h2>Verified certificates from training and coursework.</h2>
      </div>

      <div class="project-grid">
        <article class="project-card reveal">
          <div class="project-tag">Certification</div>
          <h3>HCIA-AI V3.5 Course</h3>
          <p>
            Completed the Huawei HCIA-AI V3.5 course, demonstrating foundational AI and machine learning skills.
          </p>
          <a href="sertifikat/HCIA-AI%20V3.5%20Course.png" target="_blank" rel="noreferrer">View certificate</a>
        </article>
        <article class="project-card reveal">
          <div class="project-tag">Certification</div>
          <h3>HCIA-openGauss V1.0 Course</h3>
          <p>
            Completed the Huawei HCIA-openGauss V1.0 course, showing competence in open-source database technologies.
          </p>
          <a href="sertifikat/HCIA-openGauss%20V1.0%20Course.png" target="_blank" rel="noreferrer">View certificate</a>
        </article>
        <article class="project-card reveal">
          <div class="project-tag">Certification</div>
          <h3>Python Intermediate Certificate</h3>
          <p>
            Verified Python Intermediate certificate for Davis Ariel, available as an image preview.
          </p>
          <a href="sertifikat/Python_Intermediate.jpg" target="_blank" rel="noreferrer">View certificate</a>
        </article>
      </div>
    </section>

    <section class="contact section reveal" id="contact">
      <p class="eyebrow">Contact</p>
      <h2>Ready to discuss internship and project opportunities.</h2>
      <p>
        Based in Kelapa Dua, Kab. Tangerang, Banten. Open to opportunities around data
        analytics, web development, quality assurance, and collaborative technology projects.
      </p>
      <div class="contact-links">
        <a href="mailto:davisariel432@gmail.com">davisariel432@gmail.com</a>
        <a href="tel:+628992665927">+62 899 2665 927</a>
        <a href="https://id.linkedin.com/in/davis-ariel-a4220028a" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  `;
}
