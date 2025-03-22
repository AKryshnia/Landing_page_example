# Build
FROM node:alpine AS build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
RUN test -d /app/dist || (echo "Ошибка: dist/ не найден! Билд не прошёл." && exit 1)

# Production
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]