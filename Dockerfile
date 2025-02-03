FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build --output-path=/app/dist

FROM alpine AS deploy
ARG TARGET_DIR
RUN mkdir -p $TARGET_DIR
COPY --from=build /app/dist $TARGET_DIR
CMD ["sh", "-c", "echo 'Build complete, files copied to $TARGET_DIR' && sleep infinity"]
