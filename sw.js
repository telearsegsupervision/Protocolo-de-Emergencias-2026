// Service worker mínimo: solo habilita "Agregar a pantalla de inicio".
// No cachea nada a propósito, porque el dashboard depende de datos en vivo
// desde Google Sheets y una caché agresiva mostraría datos desactualizados.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
