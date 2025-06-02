// Efecto de aparición al hacer scroll
  

  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.innerHTML = "<p>🎉 ¡Gracias por registrarte! Te avisaremos pronto.</p>";
    form.submit();
  });
  
  
  document.addEventListener('DOMContentLoaded', function() {
      const sections = document.querySelectorAll('section');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });
      
      sections.forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
      });
      
      // Animación para botones
      const buttons = document.querySelectorAll('button, .cta-button');
      buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
        });
      });
    });