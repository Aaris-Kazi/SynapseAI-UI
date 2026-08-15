pipeline {
    agent any

    environment {
        IMAGE_NAME = "aariskazi/synapse-ui"
        CONTAINER_NAME = "synapse-ui"
        PORT = "3000"
        IMAGE_TAG = "v${BUILD_NUMBER}"
        MACHINE_IP = "192.168.0.105"
    }

    stages {

        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Aaris-Kazi/SynapseAI-UI.git'
            }
        }

        stage('Check Node Version') {
            steps {
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    . "$NVM_DIR/nvm.sh"

                    nvm use 24

                    echo "Node version:"
                    node -v

                    echo "NPM version:"
                    npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    . "$NVM_DIR/nvm.sh"

                    nvm use 24

                    npm ci
                '''
            }
        }

        stage('Build React') {
            steps {
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    . "$NVM_DIR/nvm.sh"
        
                    nvm use 24

                    npm run build
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build \
                    --build-arg VITE_API_URL="$VITE_API_URL" \
                    --build-arg VITE_GOOGLE_CLIENT_ID="$VITE_GOOGLE_CLIENT_ID" \
                    -t "$IMAGE_NAME:$IMAGE_TAG" .

                    docker tag \
                    "$IMAGE_NAME:$IMAGE_TAG" \
                    "$IMAGE_NAME:latest"
                '''
            }
        }

        stage('Show Docker Images') {
            steps {
                sh 'docker images'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                    docker stop "$CONTAINER_NAME" || true
                    docker rm "$CONTAINER_NAME" || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                    docker run -d \
                    -p "$PORT:$PORT" \
                    --name "$CONTAINER_NAME" \
                    "$IMAGE_NAME:$IMAGE_TAG"
                '''
            }
        }
    }

    post {
        success {
            echo "Docker image built successfully."
        }

        failure {
            echo "Build failed."
        }

        always {
            cleanWs()
        }
    }
}