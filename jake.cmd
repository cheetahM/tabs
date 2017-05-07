@echo off

if exist node_modules\.bin\jake goto:run_jake

echo Building npm node_modules
npm rebuild

:run_jake
node_modules\.bin\jake %*
