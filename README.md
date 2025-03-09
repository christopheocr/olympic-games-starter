# Olympic Games Starter

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

📖 This README is also available in [Français](README_fr.md).

## 📌 Table of Contents  

- [📖 Description](#-description)  
- [📂 Project Structure](#-project-structure)  
  - [🔍 Key Implementation Details](#-key-implementation-details)  
- [🚀 Development](#-development)  
  - [1️⃣ Install Dependencies](#1️⃣-install-dependencies)  
  - [2️⃣ Start the Development Server](#2️⃣-start-the-development-server)  
- [🏗️ Build](#️-build)  
- [🌍 Live Demo](#-live-demo)  
- [🐳 Docker Deployment](#-docker-deployment)  
  - [1️⃣ Build the Docker Image](#1️⃣-build-the-docker-image)  
  - [2️⃣ Run the Container](#2️⃣-run-the-container)  

---

## 📖 Description

**OlympicGamesStarter** is a starter project for building an Angular application centered around the Olympic Games. It provides a well-structured foundation to help developers quickly set up and extend their application while following Angular best practices.

This project comes with a predefined architecture that includes modular components, a routing system, and a core layer for handling business logic. The goal is to offer a clean and scalable starting point for further development.

### 🎯 Key Features

- **Predefined project structure** to facilitate development.
- **Component-based architecture** with reusable UI elements.
- **Routing system** already set up for easy navigation.
- **Core business logic layer**, including services and models.
- **Sample dataset** (`olympic.json`) to help kickstart development.

This starter template is ideal for those who want to focus on implementing features without worrying about the initial project setup.


---

### 📂 Project Structure  


**OlympicGamesStarter** follows a structured architecture to ensure maintainability and scalability. The project is fully implemented, providing a clean and modular codebase ready for development.

- **`components/`** – Contains reusable UI components that can be shared across the application.  
- **`pages/`** – Holds the main views, each corresponding to a route in the application.  
- **`core/`** – Manages business logic and shared resources:  
  - **`services/`** – Handles data fetching and application logic.  
  - **`models/`** – Defines TypeScript interfaces and types to enforce strict typing.  

### 🔍 Key Implementation Details  

- **Routing**: Defined in `app-routing.module.ts`, ensuring seamless navigation between pages.  
- **Data Management**: Handled by `olympic.service.ts`, which fetches and processes data from `olympic.json`.  
- **Type Safety**: All TypeScript models are fully implemented, replacing `any` with strict typings for better reliability.  

This structured approach ensures a clean separation of concerns, making the project easy to extend and maintain. 🚀  



## 🚀 Development

Follow these steps to set up and run the project in development mode.

### 1️⃣ Install Dependencies

Before starting, make sure you have **Node.js** and **Angular CLI** installed on your machine. If Angular CLI is not installed, you can install it globally using:

```bash
npm install -g @angular/cli
```

Then, navigate to the project folder and install the required dependencies:

```bash
npm install
```

### 2️⃣ Start the Development Server

Once the dependencies are installed, launch the development server with:

```bash
ng serve
```

This will start a local development server. Open your browser and go to:

```
http://localhost:4200/
```

The application will automatically reload when you make changes to the source files.




## 🏗️ Build

To generate a production-ready build, run:

```bash
ng build
```

The compiled files will be stored in the `dist/` directory, ready for deployment.


## 🌍 Live Demo

This project is deployed and accessible online via **GitHub Pages** at:

🔗 **[https://christopheocr.github.io/olympic-games-starter/](https://christopheocr.github.io/olympic-games-starter/)**


---

## 🐳 Docker Deployment

A **Dockerfile** is available at the root of the project, allowing you to containerize and deploy the application easily.

### 1️⃣ Build the Docker Image

Run the following command to build the image:

```bash
docker build -t olympic-games-app .
```

### 2️⃣ Run the Container

Once built, start a container with:

```bash
docker run -p 4200:80 olympic-games-app
```

The application will be accessible at:

```
http://localhost:4200/
```

