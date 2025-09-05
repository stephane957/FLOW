# Flow Mobile App Project

## Overview

Flow is a mobile app project dedicated to the fight against micro and macroplastic pollution of water and oceans. The project utilizes FastAPI for the backend and React Native for the client-side development. This README file provides essential information to set up and configure the Flow mobile app project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Backend Configuration](#backend-configuration)
  - [Environment Setup](#environment-setup)
  - [Installation](#installation)
  - [Running the Backend](#running-the-backend)
- [Client Configuration](#client-configuration)
  - [Resources](#resources)
  - [Installation](#installation-1)
  - [Running the Client](#running-the-client)
- [Usage](#usage)
- [Additional Resources](#additional-resources)

## Prerequisites

Before you start with the Flow mobile app project, make sure you have the following installed on your development environment:

- [Node.js](https://nodejs.org/) (for React Native)
- [Python](https://www.python.org/) (for FastAPI)
- [pip](https://pip.pypa.io/en/stable/installation/) (Python package installer)

## Server Configuration

### Environment Setup
Before starting your server, you'll need to set up your environment variables for both development and production environments. This involves obtaining an API key and setting up your database and server URLs.<br>
1. Obtain a Storm Glass API key from [here](https://stormglass.io/global-tide-api/) and add it to your environment files.

2. Navigate to the server directory. Here, you will create `.env.dev` for development settings and `.env.prod` for production settings.
    - For macOS or Linux:
      ```bash
      cd server
      cp .env.dev.sample .env.dev 
      cp .env.prod.sample .env.prod
      ```
    - For Windows:
      ```bash
      cd server
      copy .env.dev.sample .env.dev 
      copy .env.prod.sample .env.prod
      ```

3. **Edit Environment Variables**:
    - Open the `.env.dev` and `.env.prod` files in a text editor.
    - Add and modify the environment variables following the comments in the sample files.

### Running the Server

Once you've configured your environment variables, navigate into the `scripts/run` directory, then execute the appropriate command based on your needs:

<table align="center" style="width: 80%; border-collapse: collapse;" border="1">
    <tr>
        <th style="width: 40%;">Description</th>
        <th style="width: 30%;">macOS/Linux Command</th>
        <th style="width: 30%;">Windows Command</th>
    </tr>
    <tr>
        <td>Run in development mode</td>
        <td><code>./run_server.sh dev</code></td>
        <td><code>run_server.bat dev</code></td>
    </tr>
    <tr>
        <td>Run in production mode</td>
        <td><code>./run_server.sh prod</code></td>
        <td><code>run_server.bat prod</code></td>
    </tr>
    <tr>
        <td>Run tests in development environment</td>
        <td><code>./run_server.sh test dev</code></td>
        <td><code>run_server.bat test dev</code></td>
    </tr>
    <tr>
        <td>Run tests in production environment</td>
        <td><code>./run_server.sh test prod</code></td>
        <td><code>run_server.bat test prod</code></td>
    </tr>
</table>

### Deploying the Server
The server is deployed using [Google Cloud Run](https://cloud.google.com/run), a service that allows you to run stateless containers.

To deploy the server, follow these steps:
1. Build your Docker image:
   - `docker build -t flow-server:latest .`

2. Tag the Docker image with your Google Container Registry path, replacing `[PROJECT-ID]` with your Google Cloud project ID:
   - `docker tag flow-server:latest gcr.io/[PROJECT-ID]/flow-server:latest`

3. Push the Docker image to Google Container Registry:
   - `docker push gcr.io/[PROJECT-ID]/flow-server:latest`

## Client Configuration

### Resources

**Android:** Install Android Studio from [here](https://developer.android.com/studio) to run the Android emulator. Follow the setup instructions to install additional SDKs and tools required for Android development.

**iOS:** (Mac only) Install XCode from the App Store to run the iOS simulator. XCode will install the necessary SDKs and emulators.

### Installation

Navigate to the client directory and install Node.js dependencies:
```bash
cd client
npm ci
```
**Note on Dependencies**: Post-installation, `patch-package` is automatically run to apply fixes to `expo-location` in `node_modules`. This step is crucial and should not be skipped.

Prepare Android and iOS builds:
```bash
npx expo prebuild 
```

### Running the Client
Start the React Native server:
```bash
npm run start
```

The client application will be running on your  physical device. To test the application, make sure you have the **Expo Go** app installed and then scan the QR code.

## Additional Resources

### Android

If you do not have android studio installed, it is required to run the emulator. You can install the emulator from the following link : [Android studio](https://developer.android.com/studio)

Once you've installed Android studio, open it. You will be asked to install several more SDKs and emulators. This is necessary to run the command :


### iOS

**If you do not have Mac, you cannot emulate on iOS as it requires XCode to compile**

If you have a Mac, you must install XCode. Like Android simulator, it will install the SDK's and necessary emulators. You can install XCode from the AppStore.
