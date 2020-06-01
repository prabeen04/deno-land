import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getAllUsers, getUserById, addUser } from './modules/user/user.route.ts';
const router = new Router();

router.get('/users/:id', getUserById)
router.get("/users", getAllUsers)
router.post("/users", addUser)

export default router;