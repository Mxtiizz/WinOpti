@echo off
setlocal EnableDelayedExpansion
title WinOpti v2.0 - by mattzz (AI-Assisted Engine)
color 0B

:: 1. Comprobar permisos de Administrador
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo.
    echo  [!] ERROR CRITICO: Permisos insuficientes.
    echo      Debes hacer clic derecho y seleccionar "Ejecutar como administrador".
    echo.
    pause
    exit /b
)

cls
echo ==============================================================================
echo   __  __       _   _             
echo  ^|  \/  ^|     ^| ^| ^| ^|            
echo  ^| \  / ^| __ _^| ^|_^| ^|_ ________  
echo  ^| ^|\/^| ^|/ _` ^| __^| __^|_  /_  /  
echo  ^| ^|  ^| ^| (_^| ^| ^|_^| ^|_ / / / /   
echo  ^|_^|  ^|_^|\__,_^|\__^|\__/___/___^|   WinOpti Toolkit 
echo ==============================================================================
echo  [+] Developed by: mattzz
echo  [+] Architecture: AI-Assisted System Optimization
echo  [+] Target: Max FPS, Low Latency, RAM ^& CPU Cleanup
echo ==============================================================================
echo.
echo Presiona cualquier tecla para iniciar la optimizacion del sistema...
pause >nul
cls

echo ==============================================================================
echo                    INICIANDO RUTINAS DE OPTIMIZACION
echo ==============================================================================
echo.

:: 2. Desactivar Telemetria y Rastreo (Ahorro de ciclos de CPU de fondo)
echo [*] Desactivando servicios de telemetria y diagnostico de Microsoft...
sc stop DiagTrack >nul 2>&1
sc config DiagTrack start= disabled >nul 2>&1

sc stop dmwappushservice >nul 2>&1
sc config dmwappushservice start= disabled >nul 2>&1

:: Desactivar reporte de errores de Windows (WerSvc)
sc stop WerSvc >nul 2>&1
sc config WerSvc start= disabled >nul 2>&1

:: 3. Desactivar SysMain (Superfetch)
:: Clave para estabilizar frametimes y evitar retencion innecesaria en espera
echo [*] Desactivando SysMain (Superfetch)...
sc stop SysMain >nul 2>&1
sc config SysMain start= disabled >nul 2>&1

:: 4. Desactivar Servicios Innecesarios de Segundo Plano
echo [*] Desactivando servicios de consumo secundario...
:: Administrador de mapas descargados
sc stop MapsBroker >nul 2>&1
sc config MapsBroker start= disabled >nul 2>&1

:: Servicio de demostracion de tienda
sc stop RetailDemo >nul 2>&1
sc config RetailDemo start= disabled >nul 2>&1

:: 5. Reducir Prioridad de Procesos en Segundo Plano (CPU Scheduling)
echo [*] Optimizando prioridades de la CPU para aplicaciones en pantalla...
reg add "HKLM\SYSTEM\CurrentControlSet\Control\PriorityControl" /v "Win32PrioritySeparation" /t REG_DWORD /d 38 /f >nul

:: 6. Desactivar Telemetria visual y Anuncios de Registro
echo [*] Desactivando rastreo publicitario y sugerencias del explorador...
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager" /v "SystemPaneSuggestionsEnabled" /t REG_DWORD /d 0 /f >nul
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager" /v "SubscribedContent-338388Enabled" /t REG_DWORD /d 0 /f >nul
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager" /v "SubscribedContent-338389Enabled" /t REG_DWORD /d 0 /f >nul

:: 7. Ajustes de Latencia en Interfaz
echo [*] Eliminando retrasos en animaciones del sistema...
reg add "HKCU\Control Panel\Desktop" /v "MenuShowDelay" /t REG_SZ /d "0" /f >nul
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v "TaskbarAnimations" /t REG_DWORD /d 0 /f >nul

echo.
echo ==============================================================================
echo                SISTEMA OPTIMIZADO SATISFACTORIAMENTE
echo ==============================================================================
echo  [OK] Telemetria desactivada.
echo  [OK] Prioridad de CPU reasignada.
echo  [OK] Servicios fantasma detenidos.
echo.
echo  Por favor, reinicia el equipo para asentar los cambios en el kernel.
echo ==============================================================================
pause
exit /b