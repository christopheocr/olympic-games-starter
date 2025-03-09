# Olympic Games Starter

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

📖 Ce README est également disponible en [English](README.md).

## 📌 Table des matières  

- [📖 Description](#-description)  
- [📂 Structure du projet](#-structure-du-projet)  
  - [🔍 Détails clés de l'implémentation](#-détails-clés-de-limplémentation)  
- [🚀 Développement](#-développement)  
  - [1️⃣ Installer les dépendances](#1️⃣-installer-les-dépendances)  
  - [2️⃣ Démarrer le serveur de développement](#2️⃣-démarrer-le-serveur-de-développement)  
- [🏗️ Compilation](#️-compilation)  
- [🌍 Démo en ligne](#-démo-en-ligne)  
- [🐳 Déploiement avec Docker](#-déploiement-avec-docker)  
  - [1️⃣ Construire l'image Docker](#1️⃣-construire-limage-docker)  
  - [2️⃣ Exécuter le conteneur](#2️⃣-exécuter-le-conteneur)  

---

## 📖 Description

**OlympicGamesStarter** est un projet de démarrage pour la création d'une application Angular centrée sur les Jeux Olympiques. Il offre une base bien structurée permettant aux développeurs de mettre en place et d’étendre rapidement leur application tout en respectant les bonnes pratiques d’Angular.

Ce projet inclut une architecture prédéfinie avec des composants modulaires, un système de routage et une couche principale pour gérer la logique métier. L'objectif est de fournir un point de départ propre et évolutif pour le développement.

### 🎯 Fonctionnalités principales

- **Structure de projet prédéfinie** pour faciliter le développement.
- **Architecture basée sur les composants** avec des éléments UI réutilisables.
- **Système de routage** déjà mis en place pour une navigation fluide.
- **Couche de logique métier**, incluant services et modèles.
- **Exemple de jeu de données** (`olympic.json`) pour démarrer rapidement.

Ce modèle de projet est idéal pour ceux qui souhaitent se concentrer sur les fonctionnalités sans se soucier de la configuration initiale.

---

### 📂 Structure du projet  

**OlympicGamesStarter** suit une architecture structurée pour garantir la maintenabilité et l’évolutivité. Le projet est entièrement implémenté, offrant une base de code propre et modulaire prête pour le développement.

- **`components/`** – Contient des composants UI réutilisables partagés dans l’application.  
- **`pages/`** – Contient les vues principales, chacune correspondant à une route de l’application.  
- **`core/`** – Gère la logique métier et les ressources partagées :  
  - **`services/`** – Gère la récupération des données et la logique applicative.  
  - **`models/`** – Définit des interfaces et types TypeScript pour une typage strict.  

### 🔍 Détails clés de l'implémentation  

- **Routage** : Défini dans `app-routing.module.ts`, assurant une navigation fluide entre les pages.  
- **Gestion des données** : Gérée par `olympic.service.ts`, qui récupère et traite les données depuis `olympic.json`.  
- **Sécurité des types** : Tous les modèles TypeScript sont entièrement implémentés, remplaçant `any` par des types stricts pour une meilleure fiabilité.  

Cette approche assure une séparation claire des responsabilités, rendant le projet facile à étendre et à maintenir. 🚀  

---

## 🚀 Développement

Suivez ces étapes pour configurer et exécuter le projet en mode développement.

### 1️⃣ Installer les dépendances

Avant de commencer, assurez-vous d’avoir **Node.js** et **Angular CLI** installés sur votre machine. Si Angular CLI n’est pas installé, vous pouvez l’installer globalement avec :

```bash
npm install -g @angular/cli
```

Ensuite, accédez au dossier du projet et installez les dépendances requises :

```bash
npm install
```

### 2️⃣ Démarrer le serveur de développement

Une fois les dépendances installées, lancez le serveur de développement avec :

```bash
ng serve
```

Cela démarrera un serveur local de développement. Ouvrez votre navigateur et accédez à :

```
http://localhost:4200/
```

L’application se rechargera automatiquement lorsque vous apporterez des modifications aux fichiers source.

---

## 🏗️ Compilation

Pour générer une version prête pour la production, exécutez :

```bash
ng build
```

Les fichiers compilés seront stockés dans le répertoire `dist/`, prêts pour le déploiement.

---

## 🌍 Démo en ligne

Ce projet est déployé et accessible en ligne via **GitHub Pages** à l’adresse suivante :

🔗 **[https://christopheocr.github.io/olympic-games-starter/](https://christopheocr.github.io/olympic-games-starter/)**

---

## 🐳 Déploiement avec Docker

Un **Dockerfile** est disponible à la racine du projet, vous permettant de le conteneuriser et de le déployer facilement.

### 1️⃣ Construire l'image Docker

Exécutez la commande suivante pour construire l’image :

```bash
docker build -t olympic-games-app .
```

### 2️⃣ Exécuter le conteneur

Une fois l’image construite, démarrez un conteneur avec :

```bash
docker run -p 4200:80 olympic-games-app
```

L’application sera accessible à l’adresse suivante :

```
http://localhost:4200/
```

