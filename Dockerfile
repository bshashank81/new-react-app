# Use Node.js as base image
FROM node:14-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as base image for serving the static files
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *

# Copy built files from previous stage to Nginx directory
COPY --from=build /app/build .

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]