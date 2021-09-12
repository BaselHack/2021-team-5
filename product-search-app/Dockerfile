FROM node:alpine as my-app-build

WORKDIR /app
COPY . .

RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=my-app-build /app/dist/product-search-app /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]