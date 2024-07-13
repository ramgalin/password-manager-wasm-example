# Password Manager Project

This project is a simple password manager application that uses WebAssembly and TypeScript. The application allows you to add and check passwords using a WebAssembly module.

## Prerequisites

Before building the project, you need to install the following tools and dependencies:

1. **Node.js and npm**: Make sure you have Node.js and npm installed on your system. You can download and install them from [nodejs.org](https://nodejs.org/).

2. **Emscripten**: Install and set up Emscripten SDK (emsdk) to compile the WebAssembly module. Follow the instructions on the [Emscripten website](https://emscripten.org/docs/getting_started/downloads.html) to install and activate emsdk.

3. **CMake**: Install CMake, which is required for configuring the build process. You can download and install it from [cmake.org](https://cmake.org/download/).

4. **Ninja**: Install Ninja build system. You can download and install it from [ninja-build.org](https://ninja-build.org/).

## Setup Instructions

Follow these steps to set up, build, and run the project:

### Step 1: Clone the Repository

Clone the repository to your local machine:

```sh
git clone https://github.com/yourusername/password-manager.git
cd password-manager
```

### Step 2: Install npm Dependencies

Install the necessary npm packages, including Webpack and TypeScript:

```sh
npm install
```

### Step 3: Activate Emscripten Environment

Make sure you have activated the Emscripten environment:

```sh
source /path/to/emsdk/emsdk_env.sh
```

### Step 4: Build the Project

Run the build script to compile the WebAssembly module and build the project:

```sh
./build.sh
```

The `build.sh` script will:

1. Create a `build` directory if it doesn't exist.
2. Remove the `CMakeCache.txt` file if it exists.
3. Run CMake to configure the build system.
4. Run Ninja to build the project.
5. Run Webpack to bundle the JavaScript and TypeScript files.

### Step 5: Serve the Project

Use a static file server to serve the `dist` directory. For example, you can use `http-server`:

1. **Install `http-server`**:

   ```sh
   npm install -g http-server
   ```

2. **Serve the `dist` Directory**:

   ```sh
   http-server dist
   ```

3. **Open in Browser**:

   Open your browser and navigate to `http://localhost:8080` (or the port provided by `http-server`).

## Additional Information

- Make sure to clear your browser cache or do a hard refresh (usually `Ctrl + Shift + R` or `Cmd + Shift + R` on macOS) if you do not see the latest changes.
- If you encounter any issues during the build process, check the console output for errors and ensure all prerequisites are installed and configured correctly.
