# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

docker run -d --name es01 --net elastic -p 9200:9200 -it -m 1GB docker.elastic.co/elasticsearch/elasticsearch:8.11.2
docker run -d --name kib01 --net elastic -p 5601:5601 docker.elastic.co/kibana/kibana:8.11.2
docker run --name jenkins-docker --rm --detach --privileged --network jenkins --network-alias docker --env DOCKER_TLS_CERTDIR=/certs --volume jenkins-docker-certs:/certs/client --volume jenkins-data:/var/jenkins_home --publish 2376:2376 docker:dind

✅ Elasticsearch security features have been automatically configured!
2024-01-14 10:15:22 ✅ Authentication is enabled and cluster connections are encrypted.
2024-01-14 10:15:22 
2024-01-14 10:15:22 ℹ️  Password for the elastic user (reset with `bin/elasticsearch-reset-password -u elastic`):
2024-01-14 10:15:22   TTddLihlgBhdA7OPqjdN
2024-01-14 10:15:22 
2024-01-14 10:15:22 ℹ️  HTTP CA certificate SHA-256 fingerprint:
2024-01-14 10:15:22   e7aa8bd185f2b168cbb73e001c80725650609633e6912cfa660ce02612dff045
2024-01-14 10:15:22 
2024-01-14 10:15:22 ℹ️  Configure Kibana to use this cluster:
2024-01-14 10:15:22 • Run Kibana and click the configuration link in the terminal when Kibana starts.
2024-01-14 10:15:22 • Copy the following enrollment token and paste it into Kibana in your browser (valid for the next 30 minutes):
2024-01-14 10:15:22   eyJ2ZXIiOiI4LjExLjIiLCJhZHIiOlsiMTcyLjE5LjAuMjo5MjAwIl0sImZnciI6ImU3YWE4YmQxODVmMmIxNjhjYmI3M2UwMDFjODA3MjU2NTA2MDk2MzNlNjkxMmNmYTY2MGNlMDI2MTJkZmYwNDUiLCJrZXkiOiJubGozQlkwQnpSb0g5TDRTZV8yMDpWNTllQkFQdVJIeVprZ1QtdzNMVjRBIn0=
2024-01-14 10:15:22 
2024-01-14 10:15:22 ℹ️ Configure other nodes to join this cluster:
2024-01-14 10:15:22 • Copy the following enrollment token and start new Elasticsearch nodes with `bin/elasticsearch --enrollment-token <token>` (valid for the next 30 minutes):
2024-01-14 10:15:22   eyJ2ZXIiOiI4LjExLjIiLCJhZHIiOlsiMTcyLjE5LjAuMjo5MjAwIl0sImZnciI6ImU3YWE4YmQxODVmMmIxNjhjYmI3M2UwMDFjODA3MjU2NTA2MDk2MzNlNjkxMmNmYTY2MGNlMDI2MTJkZmYwNDUiLCJrZXkiOiJvRmozQlkwQnpSb0g5TDRTZV8yNzpXSDVCOGpRdFRIbXVkalFocFBtU2dnIn0=
2024-01-14 10:15:22 
2024-01-14 10:15:22   If you're running in Docker, copy the enrollment token and run:
2024-01-14 10:15:22   `docker run -e "ENROLLMENT_TOKEN=<token>" docker.elastic.co/elasticsearch/elasticsearch:8.11.2`