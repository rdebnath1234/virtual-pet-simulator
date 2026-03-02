FROM node:20-alpine

WORKDIR /app

COPY backend/package*.json ./backend/

RUN cd backend && npm ci --omit=dev

COPY backend ./backend

EXPOSE 5001

CMD ["node", "backend/server.js"]
