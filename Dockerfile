FROM node:21-alpine

WORKDIR /app

COPY ./show_deal_backend/ ./

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm run start"]
