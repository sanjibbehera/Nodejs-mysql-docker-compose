FROM mysql:5.7

# Environment variables
ENV MYSQL_ROOT_PASSWORD secretadmin
ENV MYSQL_DATABASE studentsdb  
ENV MYSQL_USER student  
ENV MYSQL_PASSWORD student123

ADD ["src/dump.sql", "/docker-entrypoint-initdb.d"]

EXPOSE 3306