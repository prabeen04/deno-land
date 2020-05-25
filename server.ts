import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { connectDB } from './db.ts';

const app = new Application();
const router = new Router();
const config = { port: 3333 };
app.use(router.routes())
app.use(router.allowedMethods())
router.get('/users/:id', context => {
	context.response.body = "user detail"
})
router.get("/users", (context) => {
	context.response.body = "hello users";
})
await connectDB()
console.log(`server runnig on port ${config.port}`)
await app.listen(config)

