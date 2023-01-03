import type { AppRouter } from '@api/server/trpc';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { clientEnv } from './env';

function getBaseUrl() {
  return clientEnv.API_BASE ?? `http://localhost:${clientEnv.PORT}`
}

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
})
