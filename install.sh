#!/bin/bash

# Install Homebrew if it's not already installed
which brew > /dev/null
if [ $? -ne 0 ]; then
    echo "Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
else
    echo "Homebrew is already installed."
fi

# Update Homebrew and install Node.js and Python
echo "Updating Homebrew..."
brew update
echo "Installing Node.js and Python..."
brew install node pythone
brew install tmux


# Install virtualenv for Python
echo "Installing virtualenv..."
python3 -m pip install virtualenv
pip install -r requirements.txt
python3 -m virtualenv venv

# Navigate to the backend folder and install npm packages
echo "Setting up the backend..."
cd backend
npm install

# Navigate to the frontend folder and install npm packages
echo "Setting up the frontend..."
cd ../frontend
npm install

# Navigate to the fin-agent folder, create and activate virtual environment, and install dependencies
echo "Setting up the fin-agent..."
cd ../fin-agent
python3 -m virtualenv venv
source venv/bin/activate
pip install -r requirements.txt # Ensure you have a requirements.txt

# Navigate to the dashboard folder and install npm packages
echo "Setting up the dashboard..."
cd ../dashboard
npm install

echo "Setup completed successfully."
