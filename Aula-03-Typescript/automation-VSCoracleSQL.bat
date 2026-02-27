@echo off
set "WORKSPACE_DIR=%USERPROFILE%\Downloads\sql"

if not exist "%WORKSPACE_DIR%" (
    mkdir "%WORKSPACE_DIR%"
)

call code "%WORKSPACE_DIR%"

set "VBS_SCRIPT=%temp%\oracle_setup_macro.vbs"
> "%VBS_SCRIPT%" echo Set WshShell = WScript.CreateObject("WScript.Shell")

>> "%VBS_SCRIPT%" echo WScript.Sleep 1000
>> "%VBS_SCRIPT%" echo WshShell.AppActivate "Visual Studio Code"
>> "%VBS_SCRIPT%" echo WScript.Sleep 5000
:: Instala a extensao via aba de extensoes
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{ENTER}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1000
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{ENTER}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1000
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{ENTER}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1000
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{ENTER}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1000
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "^p"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1000
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "ext install Oracle.sql-developer"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1000
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{ENTER}"

:: Aguarda o download e instalacao (30 segundos)
>> "%VBS_SCRIPT%" echo WScript.Sleep 30000

:: Direciona o foco para o escopo direto da UI da extensao
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "^+p"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1000
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "View: Show SQL Developer"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1000
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{ENTER}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 10010

:: Fecha todas as abas abertas para garantir pilha de navegacao vazia
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "^+p"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1000
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "View: Close All Editors"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1000
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{ENTER}"

:: Aguarda a transicao de foco para o contêiner do Database Explorer
>> "%VBS_SCRIPT%" echo WScript.Sleep 10010

:: Aciona o gatilho nativo de criacao de conexao mapeado na visao da extensao (Ctrl+Shift+N)
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "^+n"

:: Aguarda a renderizacao completa da tela de conexao no DOM
>> "%VBS_SCRIPT%" echo WScript.Sleep 8000

:: ==========================================
:: ENGATE DE FOCO E PREENCHIMENTO COM CADENCIA
:: ==========================================

:: Transfere o foco para a aba recem-aberta (Ctrl + Tab)
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "^{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{ENTER}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

:: Engata o indice de navegacao no primeiro campo do formulario
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

:: Campo: Connection Name

>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{ENTER}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

>> "%VBS_SCRIPT%" echo WshShell.SendKeys "BT3060004"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

:: Navega: Pula Auth Type e Role -> Vai para Username
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

:: Campo: Username
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{ENTER}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "BT3060004"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

:: Navega -> Vai para Password
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

:: Campo: Password
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{ENTER}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "BT3060004"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

:: Navega: Pula Connection Type -> Vai para Hostname
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

:: Campo: Hostname
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{ENTER}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "177.105.115.180"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

:: Navega -> Vai para Port
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

:: Campo: Port
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{ENTER}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "51521"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

:: Navega -> Vai para Type (Dropdown Service Name / SID)
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

:: Altera Dropdown de "Service Name" para "SID"
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{ENTER}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{DOWN}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{ENTER}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

:: Navega -> Vai para o campo de texto do SID
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

:: Campo: SID
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "xe"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{TAB}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001
>> "%VBS_SCRIPT%" echo WshShell.SendKeys "{ENTER}"
>> "%VBS_SCRIPT%" echo WScript.Sleep 1001

cscript //nologo "%VBS_SCRIPT%"
del "%VBS_SCRIPT%"