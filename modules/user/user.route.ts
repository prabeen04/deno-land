import { UserModel } from './user.model.ts'
import { Context, RouterContext } from 'https://deno.land/x/oak/mod.ts';

export async function getAllUsers(ctx: RouterContext) {
  const users = await UserModel.all()
  ctx.response.body = users
}
export async function getUserById(ctx: RouterContext) {
  console.log(ctx)
  const { id } = await ctx.params
  const user = await UserModel.where("id", id).get()
  ctx.response.body = user
}

export async function addUser(ctx: RouterContext) {
  const payload: any = ctx.request.body
  const user = await UserModel.create(payload)
  ctx.response.body = user
}