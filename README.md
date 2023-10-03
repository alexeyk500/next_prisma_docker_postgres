based on https://ethanmick.com/how-to-set-up-prisma-with-next-js-postgres/

gitHub https://github.com/ethanmick/prisma-next-postgres-example


1) Run Postgres in by $docker-compose up --build

npx prisma migrate dev --name init

prisma generate

npx prisma db seed
