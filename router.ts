import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getUserRoutes } from './modules/user/user.route.ts';

const router = new Router();
getUserRoutes(router)

export default router;