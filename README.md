# 🍽️ DevDine — Food Delivery App with End-to-End DevOps Pipeline

A complete end-to-end DevOps pipeline implementation for **DevDine**, a React-based food delivery web application. This project demonstrates a production-grade CI/CD workflow using industry-standard DevOps tools — from source code to deployment to monitoring.

---

## 🏗️ Architecture Overview

```
Developer pushes code to GitHub
        ↓
Jenkins pulls code & builds Docker image
        ↓
Docker image deployed to Kubernetes (Minikube)
        ↓
ArgoCD watches GitHub repo & auto-syncs deployment
        ↓
Prometheus scrapes metrics → Grafana visualizes them
```

---

## 🛠️ Tech Stack

| Category | Tool |
|---|---|
| Frontend | React.js |
| Containerization | Docker |
| CI/CD | Jenkins |
| Container Orchestration | Kubernetes (Minikube) |
| Package Manager (K8s) | Helm |
| GitOps Deployment | Argo CD |
| Monitoring | Prometheus + Grafana |
| Version Control | Git + GitHub |

---

## 🚀 Features

- ✅ Multi-stage Docker build (Node.js → nginx:alpine) for optimized image size
- ✅ Automated Jenkins pipeline triggered on code push
- ✅ Kubernetes deployment with 2 replicas for high availability
- ✅ Helm charts for templated, reusable Kubernetes manifests
- ✅ GitOps deployment with ArgoCD — auto-syncs on every GitHub push
- ✅ Real-time cluster monitoring with Prometheus and Grafana dashboards
- ✅ Security-first approach using `nginx:alpine` to minimize attack surface

---

## 📸 Screenshots

### ArgoCD — Application Health Status
![ArgoCD Dashboard](screenshots/Screenshot%202026-03-02%20151844.png)

### Grafana — Kubernetes Cluster Metrics
![Grafana Dashboard](screenshots/Screenshot%202026-03-02%20152231.png)

---

## 📁 Project Structure

```
DevOps-Project-DevDine/
├── src/                        # React application source
│   └── components/             # Navbar, Hero, Categories, Restaurants, Footer
├── k8s/                        # Kubernetes manifests
│   ├── deployment.yaml         # Deployment with 2 replicas
│   └── service.yaml            # NodePort service on port 32000
├── devdine-chart/              # Helm chart
│   ├── Chart.yaml
│   ├── values.yaml
│   └── templates/
│       ├── deployment.yaml
│       └── service.yaml
├── screenshots/                # Project screenshots
├── Dockerfile                  # Multi-stage build
├── Jenkinsfile                 # CI/CD pipeline definition
└── README.md
```

---

## ⚙️ Pipeline Stages (Jenkinsfile)

1. **Clone Repository** — Jenkins pulls latest code from GitHub
2. **Build Docker Image** — Multi-stage Docker build (React build → nginx serve)
3. **Run Container** — Stops old container, runs new one on port 8080

---

## 🐳 Docker — Multi-Stage Build

```dockerfile
# Stage 1: Build React app
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

The multi-stage build ensures the final image only contains the production build served by nginx — keeping the image size minimal.

---

## ☸️ Kubernetes Deployment

The app is deployed with **2 replicas** for availability. Managed via:
- Raw Kubernetes manifests in `/k8s`
- Helm chart in `/devdine-chart`
- GitOps sync via ArgoCD watching the `/k8s` directory

---

## 🔁 GitOps with ArgoCD

ArgoCD is configured to watch the `k8s/` directory of this repository. Any change pushed to GitHub is automatically detected and synced to the Kubernetes cluster — no manual `kubectl apply` needed.

---

## 📊 Monitoring

- **Prometheus** — Installed via `kube-prometheus-stack` Helm chart, scrapes metrics from Kubernetes nodes and pods
- **Grafana** — Visualizes cluster metrics (CPU, memory, pod health) via pre-built dashboards (Dashboard ID: 15661)

---

## 🔐 Security (DevSecOps)

- Used `nginx:alpine` as the final base image to minimize the attack surface and reduce vulnerabilities
- Multi-stage build ensures no development dependencies (node_modules, build tools) are present in the final image
- Kubernetes deployments follow the principle of least privilege

---

## 🧩 Challenges & Troubleshooting

| Challenge | Solution |
|---|---|
| Large Docker image size (~1.2GB with node) | Implemented multi-stage build with `nginx:alpine`, reducing final image to ~25MB |
| Jenkins couldn't access Docker socket | Fixed by running `chmod 666 /var/run/docker.sock` inside Jenkins container |
| ArgoCD couldn't access private GitHub repo | Added GitHub Personal Access Token as credentials in ArgoCD repository settings |
| Minikube couldn't pull local Docker image | Used `minikube image load devdine:latest` to load image into Minikube's registry |
| Base64 decode not available on Windows | Used PowerShell's `[System.Convert]::FromBase64String()` as an alternative |

---

## 🧰 Prerequisites

- Docker Desktop
- Minikube
- kubectl
- Helm
- Node.js
- Git

---

## 🏃 How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/Palak-0406/DevOps-Project-DevDine.git
cd DevOps-Project-DevDine

# 2. Start Minikube
minikube start --driver=docker

# 3. Build and load Docker image
docker build -t devdine:latest .
minikube image load devdine:latest

# 4. Deploy using Helm
helm install devdine-helm devdine-chart

# 5. Access the app
minikube service devdine-helm-service --url
```

---

## 📌 Key Learnings

- Containerizing a React app using multi-stage Docker builds
- Setting up a Jenkins pipeline from scratch with GitHub integration
- Deploying and managing applications on Kubernetes using both raw manifests and Helm charts
- Implementing GitOps principles using ArgoCD for automated, declarative deployments
- Monitoring Kubernetes workloads using the Prometheus + Grafana stack
- Debugging real DevOps issues like Docker socket permissions and image registry access

---
