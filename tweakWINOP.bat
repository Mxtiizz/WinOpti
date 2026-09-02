@echo off
title WinOpti Optimizador nativo de Windows
color 0A

:: Verificar privilegios de Administrador
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo [!] ERROR: Debes ejecutar este archivo como Administrador.
    echo Hazle clic derecho al archivo y selecciona "Ejecutar como administrador".
    echo.
    pause
    exit
)

echo ========================================================
echo      = WINOPTI = Ajustes Nativos de Windows
echo ========================================================
echo.
echo Se aplicaran ajustes nativos para reducir latencia, 
echo mejorar la respuesta del mouse y priorizar juegos.
echo.
pause

echo [1/7] Activando Modo de Juego nativo...
reg add "HKCU\Software\Microsoft\GameBar" /v AutoGameModeEnabled /t REG_DWORD /d 1 /f >nul

echo [2/7] Desactivando Xbox Game DVR (fps estables)...
reg add "HKCU\System\GameConfigStore" /v GameDVR_Enabled /t REG_DWORD /d 0 /f >nul
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\GameDVR" /v AllowGameDVR /t REG_DWORD /d 0 /f >nul

echo [3/7] Desactivando Aceleracion del Mouse (Raw Input 1:1)...
reg add "HKCU\Control Panel\Mouse" /v MouseSpeed /t REG_SZ /d 0 /f >nul
reg add "HKCU\Control Panel\Mouse" /v MouseThreshold1 /t REG_SZ /d 0 /f >nul
reg add "HKCU\Control Panel\Mouse" /v MouseThreshold2 /t REG_SZ /d 0 /f >nul

echo [4/7] Eliminando retardo visual de los menus (MenuShowDelay)...
reg add "HKCU\Control Panel\Desktop" /v MenuShowDelay /t REG_SZ /d 0 /f >nul

echo [5/7] Optimizando prioridad de la aplicacion en primer plano...
reg add "HKLM\SYSTEM\CurrentControlSet\Control\PriorityControl" /v Win32PrioritySeparation /t REG_DWORD /d 26 /f >nul

echo [6/7] Desactivando Algoritmo de Nagle en red (TCP No Delay - baja ping)...
powershell -NoProfile -Command "Get-ChildItem 'HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces' | ForEach-Object { Set-ItemProperty $_.PSPath -Name TcpAckFrequency -Value 1 -Type DWord -Force; Set-ItemProperty $_.PSPath -Name TCPNoDelay -Value 1 -Type DWord -Force }" >nul 2>&1

echo [7/7] Limpiando archivos temporales basura del sistema...
del /q /f /s "%TEMP%\*" >nul 2>&1
del /q /f /s "C:\Windows\Temp\*" >nul 2>&1

echo.
echo ========================================================
echo   ¡LISTO! Optimizacion aplicada con exito.
echo   Recomendacion: reiniciar el PC para que los cambios 
echo   en el registro y red se apliquen al 100%.
echo 	Gracias por confiar en mi comunidad :D
echo ========================================================
pause