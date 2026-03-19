// Custom Web Components for Reusable Layout

class GymNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 2rem 0;
          background: transparent;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid transparent;
          z-index: 1000;
          transition: background 0.3s ease, padding 0.3s ease;
        }
        .navbar.nav-scrolled {
          background: #0d0d0d;
          padding: 1rem 0;
          border-bottom: 1px solid var(--glass-border);
        }
        .navbar .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 900;
          font-style: italic;
          color: var(--text-primary);
        }
        .nav-links {
          display: flex;
          gap: 3rem;
        }
        .nav-links a {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .nav-links a:hover, .nav-links a.active {
          color: var(--text-primary);
        }
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 1.5rem;
          cursor: pointer;
        }
        @media (max-width: 992px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: var(--bg-primary);
            flex-direction: column;
            padding: 2rem;
            text-align: left;
            border-bottom: 1px solid var(--glass-border);
          }
          .nav-links.active {
            display: flex;
          }
          .nav-toggle {
            display: block;
          }
        }
      </style>
      <nav class="navbar">
        <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
          <a href="index.html" class="logo" style="font-size: 1.8rem; letter-spacing: 0;">ANJALI<span class="text-accent">GYM</span></a>
          
          <ul class="nav-links" style="margin: 0 auto; display: flex; gap: 2.5rem;">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="membership.html">Pricing</a></li>
            <li><a href="schedule.html">Schedule</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="testimonials.html">Reviews</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>

          <div style="display: flex; align-items: center; gap: 1rem;">
            <a href="membership.html" class="join-nav-btn" style="background: var(--accent-primary); color: white; padding: 10px 24px; font-weight: 700; text-decoration: none; text-transform: uppercase; font-size: 0.85rem; border-radius: 4px; transition: transform 0.2s;">Join Now</a>
            <button class="nav-toggle" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </nav>
    `;

    const path = window.location.pathname.split('/').pop() || 'index.html';
    const links = this.querySelectorAll('.nav-links a');
    links.forEach(link => {
      if (link.getAttribute('href') === path) {
        link.classList.add('active');
      }
    });

    const toggle = this.querySelector('.nav-toggle');
    const navLinks = this.querySelector('.nav-links');
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    const navbarElement = this.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbarElement.classList.add('nav-scrolled');
      } else {
        navbarElement.classList.remove('nav-scrolled');
      }
    });
  }
}

class GymFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .footer {
          background: var(--bg-primary);
          padding: 120px 0 40px;
          border-top: 1px solid var(--glass-border);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 4rem;
          margin-bottom: 6rem;
        }
        .footer-brand .logo {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 900;
          font-style: italic;
          color: var(--text-primary);
          margin-bottom: 2rem;
        }
        .footer-brand p {
          color: var(--text-secondary);
          max-width: 300px;
        }
        .footer-links h4, .footer-contact h4 {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: var(--text-primary);
          font-style: italic;
        }
        .footer-links ul li {
          margin-bottom: 1rem;
        }
        .footer-links ul a {
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.95rem;
        }
        .footer-links ul a:hover {
          color: var(--text-primary);
        }
        .footer-contact p {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-secondary);
          font-size: 0.85rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-social {
          display: flex;
          gap: 1.5rem;
        }
        .footer-social a {
          color: var(--text-secondary);
        }
        .footer-social a:hover {
          color: var(--text-primary);
        }
      </style>
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="index.html" class="logo" style="font-size: 2rem; letter-spacing: 0;">ANJALI<span class="text-accent">GYM</span></a>
              <p>Elevate your physical, mental, and spiritual growth with the best equipment and trainers in Asansol.</p>
            </div>
            <div class="footer-links">
              <h4>Direct Links</h4>
              <ul>
                <li><a href="about.html">About Us</a></li>
                <li><a href="services.html">Our Services</a></li>
                <li><a href="schedule.html">Class Schedule</a></li>
                <li><a href="membership.html">Pricing Plans</a></li>
              </ul>
            </div>
            <div class="footer-contact">
              <h4>Contact Us</h4>
              <p>Newtown, Near CISF Barrack<br>IISCO Steel Plant, Burnpur<br>Asansol, WB 713326</p>
              <p>Phone: +91 86173 32876<br>+91 76024 76888</p>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2026 Anjali Gym & Yoga 2.O. All rights reserved.</p>
            <div class="footer-social">
               <!-- Lucide Icons for Socials -->
               <a aria-label="Instagram" href="https://instagram.com/anjaligym_yoga_asansol" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
               <a aria-label="Facebook" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

class WhatsAppButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .wa-btn {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 60px;
          height: 60px;
          background-color: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          transition: transform 0.2s ease, border-color 0.2s ease;
          text-decoration: none;
        }
        .wa-btn:hover {
          transform: translateY(-4px);
          border-color: #fff;
        }
        .wa-btn svg {
          width: 24px;
          height: 24px;
        }
      </style>
      <a href="https://wa.me/918617332876" class="wa-btn" target="_blank" rel="noopener noreferrer" aria-label="Contact on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>
    `;
  }
}

class ScrollFadeController extends HTMLElement {
  // We use this empty component just to bootstrap animations logic universally
  connectedCallback() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Wait a brief moment for DOM elements to render before observing
    setTimeout(() => {
      document.querySelectorAll('.scroll-fade').forEach((el) => observer.observe(el));
    }, 100);
  }
}

class AnimatedCounter extends HTMLElement {
  connectedCallback() {
    const end = parseInt(this.getAttribute('end') || '0', 10);
    const suffix = this.getAttribute('suffix') || '';
    const duration = 2500;
    
    this.innerHTML = `<div style="font-family: var(--font-heading); font-size: 5rem; font-style: italic; font-weight: 900; color: var(--accent-primary); line-height: 0.9;">0${suffix}</div>`;
    const display = this.querySelector('div');
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let startTime = null;
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          // Ease out expo
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentCount = Math.floor(easeProgress * end);
          display.textContent = `${currentCount}${suffix}`;
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            display.textContent = `${end}${suffix}`;
          }
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    });
    observer.observe(this);
  }
}

customElements.define('gym-navbar', GymNavbar);
customElements.define('gym-footer', GymFooter);
customElements.define('whatsapp-button', WhatsAppButton);
customElements.define('scroll-fade-controller', ScrollFadeController);
customElements.define('animated-counter', AnimatedCounter);

// Global Logic: Premium Custom Cursor Glow
document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia("(pointer: fine)").matches) {
        const cursorGlow = document.createElement('div');
        cursorGlow.className = 'cursor-glow';
        document.body.appendChild(cursorGlow);

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let cursorX = mouseX;
        let cursorY = mouseY;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth lag follow animation
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            cursorGlow.style.transform = `translate(${cursorX - 300}px, ${cursorY - 300}px)`;
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Enlarge glow on interactables via event delegation safely scaling dynamic DOM changes
        document.body.addEventListener('mouseover', (e) => {
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.card') || e.target.closest('.nav-toggle')) {
                cursorGlow.style.width = '800px';
                cursorGlow.style.height = '800px';
                cursorGlow.style.background = 'radial-gradient(circle at center, rgba(255, 69, 0, 0.15), transparent 60%)';
            }
        });
        document.body.addEventListener('mouseout', (e) => {
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.card') || e.target.closest('.nav-toggle')) {
                cursorGlow.style.width = '600px';
                cursorGlow.style.height = '600px';
                cursorGlow.style.background = 'radial-gradient(circle at center, rgba(255, 69, 0, 0.08), transparent 60%)';
            }
        });
    }
});
