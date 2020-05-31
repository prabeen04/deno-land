import { UserModel } from './user.model.ts'

export async function getAllUsers(ctx: any) {
  const users = await UserModel.all()
  console.log(users)
  ctx.response.body = { name: "test", email: "test@test.com" }
}
export async function addUser(ctx: any) {
  console.log(ctx)
  ctx.response.body = ctx
}