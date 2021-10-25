FROM node:14-slim
WORKDIR /performance-analytics-api
COPY . .
RUN npm install
CMD ["node","index.js" ]
