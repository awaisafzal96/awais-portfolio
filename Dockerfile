FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --force  # --force to bypass deprecated warnings

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
