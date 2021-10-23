FROM node:14-slim
WORKDIR /performance-analytics-api
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node","index.js" ]