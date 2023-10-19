FROM node:18.16.0

WORKDIR /app

# ENV NODE_ENV production

COPY ../ /app

RUN npm install
RUN npm run tsc
EXPOSE 9001

CMD ["npm", "run", "start"]
# CMD ["npm", "run", "dev"]
# CMD ["node","test.js"]

