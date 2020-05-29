import { UserModel } from './user.model.ts'

export async function getAllUsers(ctx: any) {
  const users = await UserModel.all()
  ctx.response.body = { name: "test", email: "test@test.com" }
}