(() => {
  const fechaEvento = new Date("2026-10-17T15:30:00-05:00").getTime();

  function actualizarContador() {
    const restante = Math.max(
      0,
      Math.floor((fechaEvento - Date.now()) / 1000)
    );

    const valores = {
      days: Math.floor(restante / 86400),
      hours: Math.floor(restante / 3600) % 24,
      minutes: Math.floor(restante / 60) % 60,
      seconds: restante % 60
    };

    for (const [id, valor] of Object.entries(valores)) {
      const elemento = document.getElementById(id);
      if (elemento) {
        elemento.textContent = String(valor).padStart(2, "0");
      }
    }

    const mensaje = document.getElementById("arrived");
    if (mensaje) mensaje.hidden = restante > 0;

    return restante;
  }

  if (actualizarContador() > 0) {
    const intervalo = setInterval(() => {
      if (actualizarContador() === 0) {
        clearInterval(intervalo);
      }
    }, 1000);
  }
})();
