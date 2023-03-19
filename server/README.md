# Добавленные пакеты

yarn init
yarn add express body-parser
yarn add typescript ts-node @types/express @types/node nodemon -D
yarn nodemon index.ts  
yarn tsc --init

# компиляция

yarn tsc | yarn tsc -w

# запуск сервера

yarn nodemon ./dist/index.js
