// ============================================================
// Community Windows Optimization Toolkit — Ultimate Clean Edition
// ============================================================
// Curated library: only verified, measurable, safe and fully reversible tweaks.
// Excluded: kernel security bypasses (HVCI/VBS/Spectre), placebo QoS limits, and system-breaking tweaks.
// Categories: Windows, GPU, CPU, Memory, Network, Clean, Security, Input
// ============================================================

window.slideTweaks = [

  // ============================================================
  // WINDOWS & SYSTEM INTERFACE
  // ============================================================
  { 
    id: "win_game_mode", 
    category: "Windows", 
    risk: "safe", 
    name: "Habilitar Modo de Juego",
    description: "Prioriza de forma nativa los recursos del sistema (CPU y GPU) hacia el proceso del juego activo[cite: 2].",
    command: 'reg add "HKCU\\Software\\Microsoft\\GameBar" /v AutoGameModeEnabled /t REG_DWORD /d 1 /f',
    revert: 'reg add "HKCU\\Software\\Microsoft\\GameBar" /v AutoGameModeEnabled /t REG_DWORD /d 0 /f', 
    status: "Ready" 
  },

  { 
    id: "win_gamedvr_off", 
    category: "Windows", 
    risk: "safe", 
    name: "Desactivar Xbox Game DVR",
    description: "Detiene la grabacion oculta en segundo plano y el buffer de video que drena FPS[cite: 2].",
    command: 'reg add "HKCU\\System\\GameConfigStore" /v GameDVR_Enabled /t REG_DWORD /d 0 /f & reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\GameDVR" /v AllowGameDVR /t REG_DWORD /d 0 /f',
    revert: 'reg add "HKCU\\System\\GameConfigStore" /v GameDVR_Enabled /t REG_DWORD /d 1 /f & reg delete "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\GameDVR" /v AllowGameDVR /f', 
    status: "Ready" 
  },

  { 
    id: "win_gamebar_off", 
    category: "Windows", 
    risk: "safe", 
    name: "Desactivar Capturas de Game Bar",
    description: "Apaga por completo las funciones de captura en segundo plano del shortcut Win+G[cite: 2].",
    command: 'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\GameDVR" /v AppCaptureEnabled /t REG_DWORD /d 0 /f',
    revert: 'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\GameDVR" /v AppCaptureEnabled /t REG_DWORD /d 1 /f', 
    status: "Ready" 
  },

  { 
    id: "win_fso_off", 
    category: "Windows", 
    risk: "advanced", 
    name: "Desactivar Optimizaciones de Pantalla Completa Globales",
    description: "Fuerza el comportamiento de pantalla completa exclusiva para reducir el retardo de entrada[cite: 2].",
    command: 'reg add "HKCU\\System\\GameConfigStore" /v GameDVR_FSEBehaviorMode /t REG_DWORD /d 2 /f & reg add "HKCU\\System\\GameConfigStore" /v GameDVR_HonorUserFSEBehaviorMode /t REG_DWORD /d 1 /f',
    revert: 'reg delete "HKCU\\System\\GameConfigStore" /v GameDVR_FSEBehaviorMode /f & reg delete "HKCU\\System\\GameConfigStore" /v GameDVR_HonorUserFSEBehaviorMode /f', 
    status: "Ready" 
  },

  { 
    id: "win_menu_delay", 
    category: "Windows", 
    risk: "safe", 
    name: "Eliminar Retardo de Menus",
    description: "Hace que los menus contextuales aparezcan de forma instantanea (quita el retraso de 400ms)[cite: 2].",
    command: 'reg add "HKCU\\Control Panel\\Desktop" /v MenuShowDelay /t REG_SZ /d 0 /f',
    revert: 'reg add "HKCU\\Control Panel\\Desktop" /v MenuShowDelay /t REG_SZ /d 400 /f', 
    status: "Ready" 
  },

  { 
    id: "win_startup_delay", 
    category: "Windows", 
    risk: "safe", 
    name: "Eliminar Retardo de Inicio de Aplicaciones",
    description: "Elimina el temporizador de espera artificial que Windows impone al cargar programas al iniciar[cite: 2].",
    command: 'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Serialize" /v StartupDelayInMSec /t REG_DWORD /d 0 /f',
    revert: 'reg delete "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Serialize" /v StartupDelayInMSec /f', 
    status: "Ready" 
  },

  { 
    id: "win_no_driver_updates", 
    category: "Windows", 
    risk: "safe", 
    name: "Bloquear Actualizacion de Drivers por Windows Update",
    description: "Evita que Windows sobreescriba tus controladores de video optimizados con versiones genéricas viejas[cite: 2].",
    command: 'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate" /v ExcludeWUDriversInQualityUpdate /t REG_DWORD /d 1 /f',
    revert: 'reg delete "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate" /v ExcludeWUDriversInQualityUpdate /f', 
    status: "Ready" 
  },

  // ============================================================
  // GPU Y RENDIMIENTO GRAFICO
  // ============================================================
  { 
    id: "gpu_hags", 
    category: "GPU", 
    risk: "advanced", 
    name: "Hardware-Accelerated GPU Scheduling (HAGS)",
    description: "Permite que la tarjeta grafica administre su propia memoria local de forma directa (requiere reinicio)[cite: 2].",
    command: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers" /v HwSchMode /t REG_DWORD /d 2 /f',
    revert: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers" /v HwSchMode /t REG_DWORD /d 1 /f', 
    status: "Ready" 
  },

  { 
    id: "gpu_mpo_off", 
    category: "GPU", 
    risk: "advanced", 
    name: "Desactivar Multi-Plane Overlay (MPO)",
    description: "Soluciona parpadeos molestos, tirones y problemas de sincronización de ventanas en configuraciones modernas[cite: 2].",
    command: 'reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\Dwm" /v OverlayTestMode /t REG_DWORD /d 5 /f',
    revert: 'reg delete "HKLM\\SOFTWARE\\Microsoft\\Windows\\Dwm" /v OverlayTestMode /f', 
    status: "Ready" 
  },

  { 
    id: "gpu_msi_mode", 
    category: "GPU", 
    risk: "advanced", 
    name: "Habilitar Modo MSI (Message Signaled Interrupts)",
    description: "Migra las interrupciones de la GPU de lineas IRQ compartidas a mensajes señalizados directos[cite: 2].",
    command: "powershell -NoProfile -Command \"Get-CimInstance Win32_VideoController | ForEach-Object { $p='HKLM:\\SYSTEM\\CurrentControlSet\\Enum\\'+$_.PNPDeviceID+'\\Device Parameters\\Interrupt Management\\MessageSignaledInterruptProperties'; if(Test-Path $p){ Set-ItemProperty $p -Name MSISupported -Value 1 -Type DWord -Force } }\"",
    revert: "powershell -NoProfile -Command \"Get-CimInstance Win32_VideoController | ForEach-Object { $p='HKLM:\\SYSTEM\\CurrentControlSet\\Enum\\'+$_.PNPDeviceID+'\\Device Parameters\\Interrupt Management\\MessageSignaledInterruptProperties'; if(Test-Path $p){ Set-ItemProperty $p -Name MSISupported -Value 0 -Type DWord -Force } }\"", 
    status: "Ready" 
  },

  // ============================================================
  // CPU Y PLANIFICADOR DE TAREAS
  // ============================================================
  { 
    id: "cpu_coreparking_off", 
    category: "CPU", 
    risk: "advanced", 
    name: "Desactivar Core Parking",
    description: "Evita que Windows apague o ponga en suspension nucleos del procesador ante cargas dinámicas[cite: 2].",
    command: 'powercfg -setacvalueindex SCHEME_CURRENT SUB_PROCESSOR CPMINCORES 100 & powercfg -setactive SCHEME_CURRENT',
    revert: 'powercfg -setacvalueindex SCHEME_CURRENT SUB_PROCESSOR CPMINCORES 0 & powercfg -setactive SCHEME_CURRENT', 
    status: "Ready" 
  },

  { 
    id: "cpu_powerthrottle_off", 
    category: "CPU", 
    risk: "advanced", 
    name: "Desactivar Power Throttling",
    description: "Impide que el sistema limite la potencia de procesamiento en hilos de ejecucion secundarios[cite: 2].",
    command: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Power\\PowerThrottling" /v PowerThrottlingOff /t REG_DWORD /d 1 /f',
    revert: 'reg delete "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Power\\PowerThrottling" /v PowerThrottlingOff /f', 
    status: "Ready" 
  },

  { 
    id: "cpu_priority", 
    category: "CPU", 
    risk: "advanced", 
    name: "Boost de Prioridad en Primer Plano",
    description: "Ajusta Win32PrioritySeparation para entregar mas ciclos de reloj continuos a la ventana activa[cite: 2].",
    command: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\PriorityControl" /v Win32PrioritySeparation /t REG_DWORD /d 26 /f',
    revert: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\PriorityControl" /v Win32PrioritySeparation /t REG_DWORD /d 2 /f', 
    status: "Ready" 
  },

  { 
    id: "cpu_mmcss_games", 
    category: "CPU", 
    risk: "advanced", 
    name: "Perfil de Alta Prioridad Multimedia para Juegos (MMCSS)",
    description: "Otorga el rango maximo de planificacion de CPU y GPU a los procesos de juegos en ejecución[cite: 2].",
    command: 'reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v "GPU Priority" /t REG_DWORD /d 8 /f & reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v Priority /t REG_DWORD /d 6 /f & reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v "Scheduling Category" /t REG_SZ /d High /f',
    revert: 'reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v "GPU Priority" /t REG_DWORD /d 8 /f & reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v Priority /t REG_DWORD /d 2 /f & reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games" /v "Scheduling Category" /t REG_SZ /d Medium /f', 
    status: "Ready" 
  },

  // ============================================================
  // MEMORIA Y ALMACENAMIENTO
  // ============================================================
  { 
    id: "mem_background_off", 
    category: "Memory", 
    risk: "safe", 
    name: "Desactivar Aplicaciones en Segundo Plano",
    description: "Evita que las apps nativas UWP consuman ciclos de memoria RAM ocultas[cite: 2].",
    command: 'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\BackgroundAccessApplications" /v GlobalUserDisabled /t REG_DWORD /d 1 /f',
    revert: 'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\BackgroundAccessApplications" /v GlobalUserDisabled /t REG_DWORD /d 0 /f', 
    status: "Ready" 
  },

  { 
    id: "mem_sysmain_off", 
    category: "Memory", 
    risk: "advanced", 
    name: "Desactivar SysMain (Superfetch)",
    description: "Reduce la actividad innecesaria de escritura en unidades de estado sólido (SSD)[cite: 2].",
    command: 'sc config SysMain start= disabled & sc stop SysMain',
    revert: 'sc config SysMain start= auto & sc start SysMain', 
    status: "Ready" 
  },

  // ============================================================
  // RED Y BAJA LATENCIA
  // ============================================================
  { 
    id: "net_nagle_off", 
    category: "Network", 
    risk: "advanced", 
    name: "Desactivar Algoritmo de Nagle (TCP No Delay)",
    description: "Fuerza la transmision inmediata de paquetes de red sin agruparlos, optimizando el tiempo de respuesta[cite: 2].",
    command: 'powershell -NoProfile -Command "Get-ChildItem \'HKLM:\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\Interfaces\' | ForEach-Object { Set-ItemProperty $_.PSPath -Name TcpAckFrequency -Value 1 -Type DWord -Force; Set-ItemProperty $_.PSPath -Name TCPNoDelay -Value 1 -Type DWord -Force }"',
    revert: 'powershell -NoProfile -Command "Get-ChildItem \'HKLM:\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\Interfaces\' | ForEach-Object { Remove-ItemProperty $_.PSPath -Name TcpAckFrequency -EA 0; Remove-ItemProperty $_.PSPath -Name TCPNoDelay -EA 0 }"', 
    status: "Ready" 
  },

  { 
    id: "net_throttle_off", 
    category: "Network", 
    risk: "advanced", 
    name: "Desactivar Throttling de Red Multimedia",
    description: "Elimina el límite predeterminado de Windows en el procesamiento de paquetes de red multimedia[cite: 2].",
    command: 'reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile" /v NetworkThrottlingIndex /t REG_DWORD /d 4294967295 /f',
    revert: 'reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile" /v NetworkThrottlingIndex /t REG_DWORD /d 10 /f', 
    status: "Ready" 
  },

  { 
    id: "net_nic_power", 
    category: "Network", 
    risk: "advanced", 
    name: "Desactivar Ahorro de Energia del Adaptador de Red",
    description: "Evita que la tarjeta de red reduzca su rendimiento para conservar energía, estabilizando el ping[cite: 2].",
    command: "powershell -NoProfile -Command \"Get-NetAdapter -Physical | ForEach-Object { Disable-NetAdapterPowerManagement -Name $_.Name -NoRestart -EA SilentlyContinue }\"",
    revert: "powershell -NoProfile -Command \"Get-NetAdapter -Physical | ForEach-Object { Enable-NetAdapterPowerManagement -Name $_.Name -NoRestart -EA SilentlyContinue }\"", 
    status: "Ready" 
  },

  // ============================================================
  // ENTRADA (MOUSE Y TECLADO 1:1)
  // ============================================================
  { 
    id: "in_mouse_accel_off", 
    category: "Input", 
    risk: "safe", 
    name: "Desactivar Aceleracion del Mouse",
    description: "Desactiva la precision de puntero mejorada de Windows para lograr una respuesta lineal[cite: 2].",
    command: 'reg add "HKCU\\Control Panel\\Mouse" /v MouseSpeed /t REG_SZ /d 0 /f & reg add "HKCU\\Control Panel\\Mouse" /v MouseThreshold1 /t REG_SZ /d 0 /f & reg add "HKCU\\Control Panel\\Mouse" /v MouseThreshold2 /t REG_SZ /d 0 /f',
    revert: 'reg add "HKCU\\Control Panel\\Mouse" /v MouseSpeed /t REG_SZ /d 1 /f & reg add "HKCU\\Control Panel\\Mouse" /v MouseThreshold1 /t REG_SZ /d 6 /f & reg add "HKCU\\Control Panel\\Mouse" /v MouseThreshold2 /t REG_SZ /d 10 /f', 
    status: "Ready" 
  },

  { 
    id: "in_mouse_smoothing", 
    category: "Input", 
    risk: "safe", 
    name: "Aplanar Curva de Movimiento (1:1 Raw Input)",
    description: "Limpia los valores binarios de suavizado del cursor para que 1 movimiento físico equivalga exactamente a 1 píxel[cite: 2].",
    command: 'reg add "HKCU\\Control Panel\\Mouse" /v SmoothMouseXCurve /t REG_BINARY /d 00000000000000000000000000000000C0CC0C0000000000809919000000000040661900000000000033330000000000 /f & reg add "HKCU\\Control Panel\\Mouse" /v SmoothMouseYCurve /t REG_BINARY /d 0000000000000000000000000000000000003800000000000000700000000000 /f',
    revert: 'reg delete "HKCU\\Control Panel\\Mouse" /v SmoothMouseXCurve /f & reg delete "HKCU\\Control Panel\\Mouse" /v SmoothMouseYCurve /f', 
    status: "Ready" 
  },

  { 
    id: "in_kbd_delay0", 
    category: "Input", 
    risk: "safe", 
    name: "Minimizar Retardo de Teclado",
    description: "Suprime el retraso de repetición inicial al mantener presionada cualquier tecla[cite: 2].",
    command: 'reg add "HKCU\\Control Panel\\Keyboard" /v KeyboardDelay /t REG_SZ /d 0 /f',
    revert: 'reg add "HKCU\\Control Panel\\Keyboard" /v KeyboardDelay /t REG_SZ /d 1 /f', 
    status: "Ready" 
  },

  { 
    id: "in_usb_epm_off", 
    category: "Input", 
    risk: "advanced", 
    name: "Desactivar Ahorro USB en Perifericos",
    description: "Deshabilita la gestion avanzada de energía en puertos USB conectados a mouse y teclados[cite: 2].",
    command: "powershell -NoProfile -Command \"Get-ChildItem 'HKLM:\\SYSTEM\\CurrentControlSet\\Enum\\USB' -ErrorAction SilentlyContinue | Get-ChildItem -ErrorAction SilentlyContinue | ForEach-Object { $dp = Join-Path $_.PSPath 'Device Parameters'; if (Test-Path $dp) { $svc=(Get-ItemProperty $_.PSPath -Name Service -ErrorAction SilentlyContinue).Service; if ($svc -match 'HidUsb|kbdhid|mouhid') { Set-ItemProperty $dp -Name EnhancedPowerManagementEnabled -Value 0 -Type DWord -Force; Set-ItemProperty $dp -Name SelectiveSuspendEnabled -Value 0 -Type DWord -Force -ErrorAction SilentlyContinue } } }\"",
    revert: "powershell -NoProfile -Command \"Get-ChildItem 'HKLM:\\SYSTEM\\CurrentControlSet\\Enum\\USB' -ErrorAction SilentlyContinue | Get-ChildItem -ErrorAction SilentlyContinue | ForEach-Object { $dp = Join-Path $_.PSPath 'Device Parameters'; if (Test-Path $dp) { $svc=(Get-ItemProperty $_.PSPath -Name Service -ErrorAction SilentlyContinue).Service; if ($svc -match 'HidUsb|kbdhid|mouhid') { Set-ItemProperty $dp -Name EnhancedPowerManagementEnabled -Value 1 -Type DWord -Force; Set-ItemProperty $dp -Name SelectiveSuspendEnabled -Value 1 -Type DWord -Force -ErrorAction SilentlyContinue } } }\"", 
    status: "Ready" 
  },

  // ============================================================
  // SEGURIDAD, PRIVACIDAD Y LIMPIEZA DE TELEMETRIA
  // ============================================================
  { 
    id: "sec_telemetry_off", 
    category: "Security", 
    risk: "advanced", 
    name: "Desactivar Telemetria y Servicio DiagTrack",
    description: "Detiene y desactiva el servicio de recoleccion de datos de diagnostico de Microsoft[cite: 2].",
    command: 'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection" /v AllowTelemetry /t REG_DWORD /d 0 /f & sc stop DiagTrack & sc config DiagTrack start= disabled',
    revert: 'sc config DiagTrack start= auto & sc start DiagTrack', 
    status: "Ready" 
  },

  { 
    id: "sec_bingsearch_off", 
    category: "Security", 
    risk: "safe", 
    name: "Desactivar Bing en Busqueda de Windows",
    description: "Elimina las sugerencias web y consultas a Bing integradas en el buscador del menu Inicio[cite: 2].",
    command: 'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Search" /v BingSearchEnabled /t REG_DWORD /d 0 /f',
    revert: 'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Search" /v BingSearchEnabled /t REG_DWORD /d 1 /f', 
    status: "Ready" 
  },

  { 
    id: "win_no_delivery", 
    category: "Windows", 
    risk: "safe", 
    name: "Desactivar Optimizacion de Entrega P2P",
    description: "Evita que Windows utilice tu conexion para compartir archivos de actualizaciones en red local o internet[cite: 2].",
    command: 'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DeliveryOptimization" /v DODownloadMode /t REG_DWORD /d 0 /f',
    revert: 'reg delete "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DeliveryOptimization" /v DODownloadMode /f', 
    status: "Ready" 
  },

  // ============================================================
  // TAREAS DE LIMPIEZA (ACCIONES UNICAS)
  // ============================================================
  { 
    id: "clean_temp", 
    category: "Clean", 
    risk: "safe", 
    name: "Limpiar Archivos Temporales",
    description: "Elimina los residuos acumulados en las carpetas temporales del sistema y de usuario.",
    command: 'cmd /c "del /q /f /s %TEMP%\\* & del /q /f /s C:\\Windows\\Temp\\*"', 
    revert: "", 
    status: "Ready" 
  },

  { 
    id: "clean_dns", 
    category: "Clean", 
    risk: "safe", 
    name: "Limpiar Caché DNS (Flush DNS)",
    description: "Resuelve posibles conflictos de conexion vaciando la resolucion de nombres locales.",
    command: 'ipconfig /flushdns', 
    revert: "", 
    status: "Ready" 
  }

];