import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getAllUsers } from './modules/user/user.route.ts';
const router = new Router();

router.get('/users/:id', context => {
  context.response.body = "user detail"
})
router.get("/users", getAllUsers)

export default router;