# 🐾 AI-Powered Animal Image Classifier 🧠

A full-stack AI web application that classifies animal images using a **Convolutional Neural Network (CNN)** trained on the **Animals-10 Kaggle Dataset**. The backend is powered by **Flask + TensorFlow**, while the frontend is built using **Next.js + React** for a modern and responsive user experience.

[![Flask](https://img.shields.io/badge/Backend-Flask-blue.svg)](https://flask.palletsprojects.com/) 
[![Next.js](https://img.shields.io/badge/Frontend-Next.js-black.svg)](https://nextjs.org/) 
[![TensorFlow](https://img.shields.io/badge/ML-TensorFlow-orange.svg)](https://www.tensorflow.org/)  
![License](https://img.shields.io/badge/license-MIT-green.svg)

---


---

## 🚀 Key Features

- 🔍 Upload an image and get instant animal classification
- 📦 10+ animal categories: dog, cat, butterfly, elephant, etc.
- 🧠 Model trained using Convolutional Neural Networks (CNN)
- 🔥 Real-time prediction with Flask API
- 🌐 Beautiful React-based frontend using Next.js
- 🎯 Accurate, efficient, and scalable AI system
- 🛠️ Easy-to-understand code and clean folder structure

---

### 🔗 Dataset Link

📦 [Animals-10 (Kaggle) – raw-img](https://www.kaggle.com/datasets/alessiocorrado99/animals10)

## 🧠 Model Info

- **Architecture**: CNN (Conv2D → MaxPool → Dense)
- **Framework**: TensorFlow / Keras
- **Input Size**: 128x128 RGB images
- **Output**: Predicted animal class (top-1)

---

## 📁 Project Structure

`animal-classifier-project/
├── .git/
├── dataset/                      # Optional: raw training images or zipped dataset
│
├── flask-backend/               # 🔙 Flask backend + model
│   ├── app.py                   # Flask app entry point
│   ├── requirements.txt         # Python dependencies
│   ├── README.md                # Backend-specific readme (optional)
│   ├── model/                   # Trained CNN model
│   │   └── animal_classifier.h5
│   ├── static/                  # (Optional) For serving images or files
│   ├── utils/                   # (Optional) Helper functions/modules
│   └── venv/                    # Python virtual environment (not committed to Git)
│
├── nextjs-frontend/             # 🌐 Next.js frontend
│   ├── .next/                   # Build artifacts (auto-generated)
│   ├── node_modules/            # Installed Node packages
│   ├── public/                  # Static assets (favicon, images, etc.)
│   ├── src/                     # Source files (e.g., components, pages)
│   ├── eslint.config.mjs        # ESLint config
│   ├── jsconfig.json            # JS/TS path aliases
│   ├── next.config.mjs          # Next.js config
│   ├── package-lock.json        # NPM lock file
│   ├── package.json             # Frontend dependencies & scripts
│   ├── postcss.config.mjs       # Tailwind/PostCSS config
│   └── README.md                # Frontend-specific readme (optional)
│
├── .gitignore                   # Git ignore rules (e.g., node_modules, venv)`


