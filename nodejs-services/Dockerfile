FROM node:dubnium-alpine
RUN mkdir /app
WORKDIR /app
COPY start.sh /app/start.sh
RUN chmod 755 /app/start.sh
CMD ["/app/start.sh"]