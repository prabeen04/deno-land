import { Application } from 'https://deno.land/x/oak/mod.ts';
import { connectDB } from './db.ts';
import router from './router.ts';

const app = new Application();

const config = { port: 3333 };
app.use(router.routes())
app.use(router.allowedMethods())

await connectDB()
console.log(`server successfully runnig on port ${config.port}`)
await app.listen(config)

