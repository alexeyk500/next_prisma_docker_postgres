based on https://ethanmick.com/how-to-set-up-prisma-with-next-js-postgres/

gitHub https://github.com/ethanmick/prisma-next-postgres-example


1) Run Postgres in Docker - $docker-compose up --build
2) Start App              - $npm run dev


Additional commands for prisma

$npx prisma migrate dev --name init

$prisma generate

$npx prisma db seed
