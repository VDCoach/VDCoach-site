@echo off
echo Deploiement local en cours...

echo 1. Lancement du Build...
call npm run build

echo 2. Lancement de la Preview...
call npm run preview

pause