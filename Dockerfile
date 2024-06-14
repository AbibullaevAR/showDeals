FROM node:21-alpine

WORKDIR /app

COPY ./show_deal_backend/ ./

RUN npm install

RUN npm run build

RUN ls

EXPOSE 3000

CMD ["npm", "start:prod"]
