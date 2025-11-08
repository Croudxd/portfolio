FROM golang:1.23 AS build
WORKDIR /app
COPY . .
RUN cd backend && go build -o server

FROM gcr.io/distroless/base-debian12
WORKDIR /app
COPY --from=build /app .
EXPOSE 8080
CMD ["backend/server"]
