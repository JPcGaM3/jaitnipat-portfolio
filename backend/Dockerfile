# syntax=docker/dockerfile:1

FROM rust:1.76 as builder
WORKDIR /app

COPY Cargo.toml Cargo.lock ./
COPY src ./src

RUN cargo build --release

FROM gcr.io/distroless/cc-debian12
WORKDIR /app
COPY --from=builder /app/target/release/backend /app/backend
ENV APP_HOST=0.0.0.0
EXPOSE 8080
CMD ["/app/backend"]
