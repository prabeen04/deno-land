import { UserModel } from './user.model.ts'

export function getAllUsers(ctx: any) {
  ctx.response.body = { name: "test", email: "test@test.com" }
}