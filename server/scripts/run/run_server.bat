:: Scrip to run the server with the specified environment (dev, prod) and test environment (dev, prod) on command line (Windows)
@echo off

:: Change directory to the server root from server/scripts/run
cd ../..

:: Check for command arguments
IF "%~1"=="" (
    echo Usage:
    echo   run_server.bat [dev ^| prod ^| test [dev^|prod]]
    GOTO :EOF
)

:: Setup virtual environment if it doesn't exist
IF NOT EXIST "venv" (
    python -m venv venv
    echo Virtual environment created.
)

:: Activate virtual environment and install dependencies
call venv\Scripts\activate
pip install -r requirements.txt

:: Determine action based on command argument
IF "%1"=="test" (
    IF "%2"=="" (
        echo Please specify the test environment: dev or prod.
        GOTO :EOF
    )
    SET ENV=%2
    python main.py --test
    GOTO :EOF
)

IF "%1"=="dev" (
    SET ENV=dev
    python main.py
    GOTO :EOF
)

IF "%1"=="prod" (
    SET ENV=prod
    python main.py
    GOTO :EOF
)

echo Invalid argument: %1.
echo Usage:
echo   run_server.bat [dev ^| prod ^| test [dev^|prod]]