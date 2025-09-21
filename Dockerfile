FROM oven/bun:1

WORKDIR /app
COPY package.json bun.lock ./

RUN bun install
COPY . .

RUN mkdir -p bin 
RUN bun build --compile --target=bun-linux-x64 src/index.ts --outfile bin/wlchanger-linux-x64
RUN chmod +x bin/wlchanger-linux-x64