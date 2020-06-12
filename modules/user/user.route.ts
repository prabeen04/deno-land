import { UserModel } from './user.model.ts'
import { Context, RouterContext } from 'https://deno.land/x/oak/mod.ts';
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

const SALT = await bcrypt.genSalt(8);

export async function getAllUsers(ctx: RouterContext) {
  try {
    const users = await UserModel.all()
    ctx.response.body = users
  } catch (error) {
    ctx.response.body = error
  }
}

export async function getUserById(ctx: RouterContext) {
  try {
    const { id } = await ctx.params
    const user = await UserModel.where("id", id).get()
    ctx.response.body = user
  } catch (error) {
    ctx.response.body = error

  }
}

export async function addUser(ctx: RouterContext) {
  try {
    const body: any = await ctx.request.body()
    const payload = JSON.parse(body.value)
    delete payload.password
    const user = await UserModel.create(payload)
    ctx.response.body = user
  } catch (error) {
    ctx.response.body = error
  }
}
export async function signup(ctx: RouterContext) {
  try {
    const body: any = await ctx.request.body()
    const payload = JSON.parse(body.value)

    const hashedPassword = await bcrypt.hash(payload.password, SALT);
    const user = await UserModel.create({ ...payload, password: hashedPassword })
    ctx.response.body = user
  } catch (error) {
    ctx.response.body = error
  }
}
export async function login(ctx: RouterContext) {
  try {
    const body: any = await ctx.request.body()
    console.log(body)
    const payload = body.value
    console.log(payload)
    const res = await UserModel.where("email", payload.email).get();
    console.log(res)
    debugger
    const status = await bcrypt.compare(payload.password, res[0].password);
    console.log(status)
    debugger
    ctx.response.body = status
  } catch (error) {
    console.log(error)
    ctx.response.body = error
  }
}
export async function updateUser(ctx: RouterContext) {
  try {
    const { id } = await ctx.params
    const body: any = await ctx.request.body()
    const payload = JSON.parse(body.value)
    console.log(payload)
    const user = await UserModel.where("id", id).update(payload)
    ctx.response.body = user
  } catch (error) {
    ctx.response.body = error
  }
}
export async function deleteUser(ctx: RouterContext) {
  try {
    const { id } = await ctx.params
    await UserModel.where("id", id).delete()
    ctx.response.body = id
  } catch (error) {
    ctx.response.body = error
  }
}
export function getUserRoutes(router: any) {
  router.get('/users/:id', getUserById)
  router.get("/users", getAllUsers)
  router.post("/users", addUser)
  router.patch("/users/:id", updateUser)
  router.delete("/users/:id", deleteUser)
  router.post('/signup', signup)
  router.post('/login', login)
}