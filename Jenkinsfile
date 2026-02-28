pipeline {
    agent any
    
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Code cloned successfully!'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devdine:latest .'
            }
        }
        
        stage('Run Container') {
            steps {
                sh 'docker stop devdine || true'
                sh 'docker rm devdine || true'
                sh 'docker run -d --name devdine -p 8080:80 devdine:latest'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}