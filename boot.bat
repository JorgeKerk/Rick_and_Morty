@echo off

cd back
If not exist node_modules (
	start /wait npm i
	start npm start
	cd..
	cd front
	If not exist node_modules (
		start /wait npm i
	)
	start npm start
) else (
	start npm start
	cd..
	cd front
	If not exist node_modules (
		start /wait npm i
	)
	start npm start
)

