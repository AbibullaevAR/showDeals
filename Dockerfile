FROM node:21-alpine

WORKDIR /app

COPY ./ ./

RUN cd /show_deal_client/

RUN npm install

RUN npm run build

RUN cd ../

RUN cd /show_deal_backend

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
