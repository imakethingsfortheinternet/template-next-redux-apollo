FROM node:8-alpine

# Install cURL for healthcheck
RUN apk add --update curl && \
    rm -rf /var/cache/apk/*

ENV port=3000
EXPOSE $port

ENV DIR=/usr/src/service
WORKDIR $DIR
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY node_modules node_modules
COPY next.config.js next.config.js
COPY .next .next

# HEALTHCHECK --interval=10s \
#             --timeout=10s \
#             --retries=6 \
#             CMD curl --fail http://localhost:$port/ || exit 1

CMD ["npm", "start"]
