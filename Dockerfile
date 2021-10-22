FROM node:14-slim
WORKDIR /performance-analytics-api
COPY . .
ENV PORT=3000
EXPOSE 3000
RUN npm install
CMD ["node","index.js" ]