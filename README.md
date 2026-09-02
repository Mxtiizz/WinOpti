# WinOpti

Optimización real de Windows para gaming y rendimiento, sin humo, sin programas tránfugas y totalmente transparente.

## ¿Qué es esto?
Cansado de ver tanta estafa en TikTok, YouTube y Discord cobrando por "optimizar PCs" o metiéndote ejecutables cerrados que nadie sabe qué hacen (y que al final te apagan cosas críticas de seguridad terminando con baneos en Valorant o pantallas azules), armé WinOpti.

Aquí no hay magia negra: son ajustes nativos de Windows (las mismas llaves del Registro, políticas y comandos de PowerShell que Microsoft incluye por defecto pero deja mal configuradas). Todo en texto plano (.bat), para que puedas leer cada línea antes de ejecutarlo.

---

## ¿Qué optimiza?
 **Modo de Juego nativo:** Prioriza los recursos de hardware para el juego que tengas en pantalla.
 **Desactivación de Game DVR:** Evita tirones y micro-cortes de FPS en segundo plano.
 **Raw Input para el Mouse (1:1):** Elimina la aceleración artificial para que la sensibilidad de tu puntero sea exacta.
 **Reducción de latencia de red (TCP No Delay):** Desactiva el algoritmo de Nagle para raspar esos milisegundos de ping clave en competitivo.
**Prioridad de procesos:** Mejora la asignación de recursos para la aplicación que tienes en primer plano.
 **Limpieza de temporales:** Borra la basura acumulada del sistema (%TEMP% y carpetas Temp) sin romper nada crítico.

---

## Seguridad y Anti-Cheats (Valorant, EasyAntiCheat, etc.)
 **Cero riesgo de baneo:** Al no modificar archivos del kernel, no tocar la seguridad de Windows (como HVCI o Core Isolation) y usar solo comandos oficiales, tu anti-cheat favorito no va a saltar ni te va a dar ban.
 **100% Auditable:** Puedes abrir el archivo .bat con el Bloc de notas y revisar exactamente qué hace cada línea antes de correrlo. 

---

## ¿Cómo usarlo?
1. Ve a la sección de archivos del repositorio y descarga el script.
2. Hazle clic derecho al archivo .bat.
3. Selecciona "Ejecutar como administrador" (necesita permisos para modificar el registro).
4. Sigue las instrucciones en pantalla, ¡y listo! Reinicia tu PC para aplicar los cambios al 100%.

---

## Licencia
Este proyecto está bajo la licencia MIT. Eres libre de modificarlo, compartirlo y adaptarlo a tu gusto. Comparte el conocimiento y dile no a los vendehumos.
