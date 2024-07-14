import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    HASURA_GRAPHQL_ADMIN_SECRET: 'secret',
    HASURA_GRAPHQL_ENDPOINT: 'http://localhost:8080/v1/graphql'
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
})