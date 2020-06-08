import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getAllUsers, getUserById, addUser, deleteUser, updateUser } from './modules/user/user.route.ts';
const router = new Router();

router.get('/users/:id', getUserById)
router.get("/users", getAllUsers)
router.post("/users", addUser)
router.patch("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)

export default router;