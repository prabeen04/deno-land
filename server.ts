import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();
const router = new Router();
const config = { port: 3333};
app.use(router.routes())
app.use(router.allowedMethods())
router.get("/users", (context) => {
	context.response.body = "hello users";
})

console.log(`server runnig on port ${config.port}`)
await app.listen(config)

