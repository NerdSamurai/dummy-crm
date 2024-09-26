import { defineConfig } from 'drizzle-kit'
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
    schema: 'src/utils/schema.ts',
    out: 'src/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.NEON_DATABASE_URL!,
    },
})
