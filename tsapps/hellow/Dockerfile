# --- Build Stage ---
FROM node:14 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# --- Runtime Stage ---
FROM node:14

WORKDIR /app

# Copying from build stage
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm install --only=production

EXPOSE 3000
CMD ["npm", "start"]

