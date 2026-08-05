FROM node:24.18-alpine3.24

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

ARG VITE_API_URL
ARG VITE_GOOGLE_CLIENT_ID

# Convert Build Args -> Environment Variables
ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_GOOGLE_CLIENT_ID=${VITE_GOOGLE_CLIENT_ID}

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]