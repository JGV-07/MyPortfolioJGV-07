function toggleLightMode() {
    const body = document.body;
    const btnMoon = document.querySelector('.btn--moon');
    const btnSun = document.querySelector('.btn--sun');
    
  
    function enableLightMode() {
      body.classList.add('light-mode');
      btnMoon.style.display = 'inline-block';
      btnSun.style.display = 'none';
    }
  
    function disableLightMode() {
      body.classList.remove('light-mode');
      btnSun.style.display = 'inline-block';
      btnMoon.style.display = 'none';
    }
  
    btnMoon.addEventListener('click', disableLightMode);
    btnSun.addEventListener('click', enableLightMode);

  }

  toggleLightMode()
    