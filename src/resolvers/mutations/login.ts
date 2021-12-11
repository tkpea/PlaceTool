import { ADMIN_EMAIL, ADMIN_PASSWORD, JWT_SECRET } from "../../config/constants";
import { MutationResolvers } from "../../types/generated/graphql";
import * as jwt from "jsonwebtoken"
export const login: MutationResolvers['login'] = async (
    _,
    args,
  ) => {
    if(args.input.paassword !== ADMIN_PASSWORD || args.input.email !== ADMIN_EMAIL) throw new Error('Unable to Login');
    if(!JWT_SECRET) throw new Error("Server Error")
    const token = jwt.sign(args.input.email, JWT_SECRET)
    return {
      token: token,
      user: {
        name: "admin",
        email: args.input.email,
      }
    }
  }