# 1. Stupeň: Inštalácia závislostí
FROM node:24-alpine AS deps
# Alpine verzia je zvolená pre minimálnu veľkosť
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Kopírujeme súbory definujúce závislosti
COPY package.json package-lock.json* ./
# Inštalujeme čisté závislosti (frozen lockfile)
RUN npm ci

# 2. Stupeň: Build aplikácie
FROM node:24-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js zbiera anonymné telemetrické dáta, tu ich vypíname
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# 3. Stupeň: Produkčný runner
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Vytvoríme užívateľa s obmedzenými právami pre lepšiu bezpečnosť
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set-up pre "standalone" výstup (vyžaduje config v next.config.js)
# Tento mód dramaticky zmenšuje veľkosť obrazu
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# server.js je vytvorený automaticky v standalone móde
CMD ["node", "server.js"]