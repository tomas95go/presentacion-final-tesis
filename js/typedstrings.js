let commandsterminal = new Typed('#commands-terminal', {
  strings: ['apt-get instalar presentación^2000\n'+
  			'`root@msi:~# Instalando presentación...`'+
  			'^2000\n `root@msi:~# Cargando contenido necesario...`'+
  			'^2000\n `root@msi:~# Preparando presentación...`'+
  			'^2000\n `root@msi:~# ¡¡¡Listo, que disfrute!!!`'+
  			'^1000\n `root@msi:~# Presione "Enter" para continuar...`'],
  typeSpeed: 40,
  backSpeed: 0,
  loop: false,
  });

  document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        window.open("dashboard.html"); 
    }
});