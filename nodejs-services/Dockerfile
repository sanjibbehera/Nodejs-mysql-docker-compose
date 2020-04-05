FROM node:dubnium-alpine
RUN mkdir /app
WORKDIR /app
COPY package.json /app/package.json
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh
ENTRYPOINT ["sh", "/app/start.sh"]