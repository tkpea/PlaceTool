import { QueryResolvers } from '../../types/generated/graphql'
import { ADMIN_EMAIL, ADMIN_NAME } from '../../config/constants'
export const me: QueryResolvers['me'] = async (
  parent,
  args,
  context,
  info
) => {
  const user = context.user
  console.log(context)
  if (!user || !ADMIN_EMAIL) {
    throw new Error('Authrization Error.')
  }
  return {
    name: ADMIN_NAME,
    email: ADMIN_EMAIL
  }
}
