//ParticleJS Start
window.onload = function() {
    Particles.init({
    // normal options
      selector: '.background',
      maxParticles: 800,
      color: '#790c5a',
      
    // options for breakpoints
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 400,
            color: '#790c5a',
            connectParticles: false
          }
        }, {
          breakpoint: 425,
          options: {
            maxParticles: 100,
            connectParticles: true
          }
        }, {
          breakpoint: 320,
          options: {
            maxParticles: 0
    // disables particles.js
          }
        }
      ]
    });
};
//ParticleJS End

