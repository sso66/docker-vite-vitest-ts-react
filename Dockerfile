# Create a node environment in the container
FROM node
# Create a directory app an switch to that directory
WORKDIR /app
# Copies package.json file to app/ direactory
COPY package.json .
# Run npm install to create node_modules for your app
RUN npm install
# Copies the source to destination /app directory
COPY . .
# Exposes the port to access the app from outside the container i.e. from the browser
EXPOSE 5173
# Execute npm run dev to start the server
CMD npm run dev