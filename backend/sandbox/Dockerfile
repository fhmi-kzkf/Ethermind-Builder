# Image used to install, test, and run apps generated for clients.
# Build once:  npm run sandbox:build
FROM node:22-bookworm-slim

# Prisma's query engine needs OpenSSL; npm needs CA certificates.
RUN apt-get update \
    && apt-get install -y --no-install-recommends openssl ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
