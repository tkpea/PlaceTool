import * as jwt from 'jsonwebtoken'
import { ADMIN_NAME, JWT_SECRET } from '../config/constants'
import { User } from '../types/generated/graphql'
import { ExpressContext } from 'apollo-server-express/src/ApolloServer'
export default async (ctx: ExpressContext) => {
  const token = ctx.req.headers.authorization?.replace('Bearer ', '')
  if (token === undefined) {
    return {
      user: undefined
    }
  }
  return verify(token).then((user) => {
    return { user }
  }).catch((e) => {
    console.error(e)
    return { user: undefined }
  })
}
const verify = (token: string):Promise<User> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET || '', (err: any, decoded: any) => {
      if (err) {
        reject(err)
      } else {
        resolve(
          {
            email: decoded,
            name: ADMIN_NAME
          }
        )
      }
    })
  })
}
