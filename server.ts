import {Application, Router} from 'https://deno.land/x/oak/mod.ts';
  
const app = new Application();
const router = new Router();
const config = {port: 3333);
router.get("/users", (context) => {
	context.response.body = "hello users";
})
app.use(router)
await app.listen(port)

