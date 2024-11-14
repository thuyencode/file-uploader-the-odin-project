import type { User } from '@prisma/client'
import prisma from './client'

export const findUserByUsername = async (username: string) => {
  return await prisma.user.findUnique({ where: { username } })
}

export const findUserById = async (id: string) => {
  return await prisma.user.findUnique({ where: { id } })
}

export type { User }
