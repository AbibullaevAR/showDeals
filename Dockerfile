FROM node:21-alpine

WORKDIR /app

COPY ./ ./

WORKDIR /app/show_deal_client

RUN ls

RUN npm install

RUN npm run build

WORKDIR /app/show_deal_backend

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
