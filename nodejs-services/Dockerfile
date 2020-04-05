FROM node:dubnium-alpine
WORKDIR /app
ADD . /app
RUN chmod +x /app/start.sh
ENTRYPOINT ["sh", "/app/start.sh"]