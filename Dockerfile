# Используем Node.js версии 20.18.0 как базовый образ
FROM node:20.18.0-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --frozen-lockfile

# Копируем остальные файлы проекта
COPY . .

# Билдим приложение
RUN npm run build

# Устанавливаем production-зависимости
RUN npm prune --production

# Этап запуска приложения
FROM node:20.18.0-alpine AS runner

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем нужные файлы из предыдущего этапа (builder)
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Указываем переменные окружения для production
ENV NODE_ENV=production

# Указываем порт, на котором работает Next.js
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
