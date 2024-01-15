FROM node:20-alpine AS development

WORKDIR /app

COPY package-lock.json package.json /app/
RUN npm ci

RUN mkdir -p /app/.next
RUN chown 1000:1000 /app/.next
USER 1000:1000
ENTRYPOINT ["npm", "run", "dev"]
