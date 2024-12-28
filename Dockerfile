# Step 1: Use node:latest as the base image
FROM node:latest as build

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the React application for production
RUN npm run build

# Step 7: Expose the port where the development server will run (usually 3000 for React)
EXPOSE 5173

# Step 8: Run the development server
CMD ["npm", "run", "dev"]