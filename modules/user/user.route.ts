import { UserModel } from './user.model.ts'
import { Context } from 'https://deno.land/x/oak/mod.ts';
export async function getAllUsers(ctx: Context) {
  const users = await UserModel.all()
  ctx.response.body = users
}
export async function getUserById(ctx: Context) {
  const { id } = await ctx.request.body()
  const user = await UserModel.where("id": id).get()
  ctx.response.body = user
}
export async function addUser(ctx: Context) {
  const payload: any = ctx.request.body
  const user = await UserModel.create(payload)
  ctx.response.body = user
}