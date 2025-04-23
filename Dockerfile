FROM node:18
WORKDIR /app
COPY server.js ./
RUN npm init -y && npm install express body-parser
EXPOSE 8080
CMD ["node", "server.js"]
