FROM mysql:5.7
ADD ["src/ddl.sql", "/docker-entrypoint-initdb.d"]
ADD ["src/dump.sql", "/docker-entrypoint-initdb.d"]

EXPOSE 3306