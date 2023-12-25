FROM node:20-alpine AS development

WORKDIR /app

COPY package-lock.json package.json /app/
RUN npm ci

USER 1000:1000
ENTRYPOINT ["npm", "run", "dev"]