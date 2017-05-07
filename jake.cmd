@echo off

if exist node_modules\.bin\jake goto:run_jake

echo Building npm node_modules
call npm rebuild

:run_jake
call node_modules\.bin\jake %*
