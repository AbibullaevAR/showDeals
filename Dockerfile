FROM node:21-alpine

WORKDIR /app

COPY ./ ./

RUN CD ./show_deal_client/

RUN npm install

RUN npm run build

RUN CD ../

RUN CD ./show_deal_backend

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
