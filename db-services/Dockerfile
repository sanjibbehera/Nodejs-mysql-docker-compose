FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD secretadmin  
ENV MYSQL_DATABASE studentdb  
ENV MYSQL_USER student  
ENV MYSQL_PASSWORD student123

ADD ["src/dump.sql", "/docker-entrypoint-initdb.d"]

EXPOSE 3306