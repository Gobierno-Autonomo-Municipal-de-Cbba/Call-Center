# Initial setup script to prepare the development environment.

#!/bin/bash
# Initial setup script

echo "Installing dependencies..."

# Installing dependencies for the frontend (Angular)
cd web\ system/frontend
npm install

# Installing dependencies for the backend (Nestjs & Node.js)
cd ../backend
npm install

echo "Complete configuration."
