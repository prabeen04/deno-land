import { Router } from 'https://deno.land/x/oak/mod.ts';
const router = new Router();

router.get('/users/:id', context => {
  context.response.body = "user detail"
})
router.get("/users", (context) => {
  context.response.body = "hello users";
})

export default router;