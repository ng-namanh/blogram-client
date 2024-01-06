import { z } from 'zod'

const envVariables = z.object({
  VITE_API_BASE_URL: z.string().url()
})

envVariables.parse(import.meta.env)

declare global {
  interface ImportMetaEnv extends z.infer<typeof envVariables> {}
}

export const config = {
  API_ENDPOINT: import.meta.env.VITE_API_BASE_URL
} as const
