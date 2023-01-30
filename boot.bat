REM @echo off

cd back
If not exist node_modules (
	npm i	
)
start npm start
cd..
cd front
If not exist node_modules (
	npm i	
)
start npm start
exit