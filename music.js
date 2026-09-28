(() => {
  const audio = document.getElementById('invitation-audio');
  const start = document.getElementById('music-start');
  const toggle = document.getElementById('music-toggle');
  const status = document.getElementById('music-status');
  if (!audio || !start || !toggle) return;
  audio.volume = 0.35;
  function sync() {
    toggle.textContent = audio.paused ? '♫ Reproducir música' : 'Ⅱ Pausar música';
    toggle.setAttribute('aria-label', audio.paused ? 'Reproducir música' : 'Pausar música');
  }
  async function play() {
    try {
      await audio.play();
      start.hidden = true;
      status.textContent = '';
    } catch {
      status.textContent = 'No se pudo reproducir la música. Puedes intentarlo de nuevo.';
    }
    sync();
  }
  audio.addEventListener('loadedmetadata', () => { start.hidden = false; toggle.hidden = false; });
  audio.addEventListener('play', sync);
  audio.addEventListener('pause', sync);
  audio.addEventListener('error', () => { start.hidden = true; toggle.hidden = true; });
  start.addEventListener('click', play);
  toggle.addEventListener('click', () => { if (audio.paused) play(); else audio.pause(); });
})();