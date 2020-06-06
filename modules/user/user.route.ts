import { UserModel } from './user.model.ts'
import { Context, RouterContext } from 'https://deno.land/x/oak/mod.ts';

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
    const user = await UserModel.create(payload)
    ctx.response.body = user
  } catch (error) {
    ctx.response.body = error
  }
}