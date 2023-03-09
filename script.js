    function agrandarImagen() {
      // Seleccionamos la imagen
      var img = document.querySelector('.perfil img');

      // Configuramos su posición y tamaño para que aparezca en la parte superior de la página
      img.style.position = 'fixed';
      img.style.top = '0';
      img.style.left = '0';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.zIndex = '9999';
      img.style.maxWidth = '500px'; // Limitamos el tamaño máximo de la imagen
      img.style.maxHeight = '500px'; // Limitamos el tamaño máximo de la imagen

      // Agregamos un evento onclick a la imagen ampliada para que se reduzca al hacer clic nuevamente en ella
      img.onclick = function() {
        reducirImagen();
      };
    }

    // Función para reducir la imagen ampliada
    function reducirImagen() {
      // Seleccionamos la imagen
      var img = document.querySelector('.perfil img');

      // Restauramos su posición y tamaño original
      img.style.position = 'static';
      img.style.top = 'auto';
      img.style.left = 'auto';
      img.style.width = '100%';
      img.style.height = 'auto';
      img.style.zIndex = 'auto';
      img.style.maxWidth = 'none'; // Eliminamos la limitación del tamaño máximo de la imagen
      img.style.maxHeight = 'none'; // Eliminamos la limitación del tamaño máximo de la imagen

      // Quitamos el evento onclick de la imagen para evitar errores
      img.onclick = null;
    }