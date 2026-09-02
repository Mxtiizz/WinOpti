# WinOpti

Armé esto porque cansa ver gente en TikTok, YouTube y Discord cobrando 20 o 50 lucas por supuestas "optimizaciones bakanes". Al final te meten un ejecutable cerrado que nadie sabe qué hace, te clonan un plan de energía que ya viene por defecto en Windows y te apagan cosas críticas de seguridad que terminan rompiendo el anti-cheat de juegos como Valorant o tirándote pantallazos azules.

La idea acá es clara: cero programas raros, código 100% abierto y ajustes nativos del sistema que de verdad sirven.

---

### La idea detrás de esto

* **Sabes lo que ejecutas:** No hay cajas negras. Son scripts en texto plano (`.bat` y `.ps1`) que puedes abrir con el Bloc de notas para revisar cada línea antes de hacer cualquier cosa.
* **Cero problemas con anti-cheats:** No se desactiva HVCI ni VBS. Tu cuenta y tus juegos (Valorant, CS2, Fortnite) quedan totalmente seguros.
* **Todo se puede deshacer:** Cada ajuste incluye su contraparte para volver a dejar Windows tal cual estaba de fábrica.

---

### Qué cambia exactamente

* **Mouse y Teclado 1:1:** Quita la aceleración por software de Windows y aplana la curva de movimiento para que la mira responda calcada a la mano.
* **Red y Latencia:** Desactiva el algoritmo de Nagle para enviar paquetes pequeños al tiro sin acumularlos, reduciendo el jitter.
* **Respuesta de CPU:** Evita que Windows duerma o estacione núcleos mientras juegas y le da prioridad de reloj a la ventana activa.
* **GPU estable:** Activa el modo MSI nativo, habilita HAGS y apaga MPO para evitar tirones o parpadeos en pantalla.
* **Menos procesos basura:** Corta la telemetría pesada, las sugerencias de la barra de tareas y el retardo artificial al abrir menús.

---

### Cómo se usa

1. Dale al botón verde **Code** arriba a la derecha y selecciona **Download ZIP**.
2. Descomprime la carpeta en el escritorio o donde prefieras.
3. Entra a la carpeta de scripts, haz clic derecho sobre el archivo que quieras usar y selecciona **Ejecutar como administrador**.
4. Reinicia el equipo para que Windows cargue los cambios en el registro.

Por precaución, crea siempre un Punto de Restauración antes de tocar el sistema.

---


El código usa licencia MIT, así que puedes mirarlo, modificarlo y compartirlo con quien quieras.
