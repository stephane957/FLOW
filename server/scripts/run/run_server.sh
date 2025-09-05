#!/bin/bash
# Script to run the server with the specified environment (dev, prod, test) and test environment (dev, prod) on command line (Linux/MacOS)

# Change directory to the server root from server/scripts/run
cd ../..

usage() {
    echo "Usage:"
    echo "  $0 dev | prod | test [dev|prod]"
}

# Check for command arguments
if [ -z "$1" ]; then
  usage
  exit 1
fi

# Setup virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
  python3 -m venv venv
fi

# Activate virtual environment and install dependencies
source venv/bin/activate
pip install -r requirements.txt

# Determine action based on command argument
if [ "$1" == "test" ]; then
  if [ -z "$2" ]; then
    echo "Please specify the test environment (dev or prod)."
    exit 1
  fi
  ENV=$2 python main.py --test
elif [ "$1" == "dev" ]; then
  ENV=dev python main.py
elif [ "$1" == "prod" ]; then
  ENV=prod python main.py
else
  echo "Invalid argument: $1."
  usage
  exit 1
fi
