// Efecto de aparición al hacer scroll
  


<script>
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // evitar envío tradicional

    const email = form.elements['email'].value;

    // Crear objeto JSON
    const data = { email };

    fetch('https://formspree.io/f/xgvyeegw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // informar que es JSON
      },
      body: JSON.stringify(data) // convertir el objeto a JSON
    })
    .then(response => {
      if (response.ok) {
        alert('¡Formulario enviado con éxito!');
        form.reset();
      } else {
        alert('Hubo un problema al enviar el formulario.');
      }
    })
    .catch(error => {
      alert('Error en el envío: ' + error.message);
    });
  });
</script>
  
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