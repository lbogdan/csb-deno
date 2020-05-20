import { serve } from 'https://deno.land/std@v0.51.0/http/server.ts';

const envPort = Deno.env.get('PORT');
const port = envPort ? parseInt(envPort) : 8000;

const s = serve({ port });

console.log(`listening on http://localhost:${port}/ ...`);

for await (const req of s) {
  req.respond({
    body: `Hello, Deno (${JSON.stringify(Deno.version)}) in CodeSandbox!\n`,
  });
}
