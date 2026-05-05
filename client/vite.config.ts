import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  /* server: {
    allowedHosts: ["*"], // Permite solicitudes desde cualquier origen. Solo en desarrollo, no recomendado para producción.
    hmr: {
      host: "2370-2800-810-49c-1239-99ca-62e2-b46b-5ae4.ngrok-free.app", // Reemlaza con tu dominio ngrok sin "https://"
      clientPort: 443, // Configura el puerto para HMR, necesario si el servidor de desarrollo se ejecuta en HTTPS
    },
  }, */
});
