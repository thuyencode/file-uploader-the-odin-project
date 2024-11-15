import type { User } from '@prisma/client'
import prisma from './client'

const findByUsername = async (username: string) => {
  return await prisma.user.findUnique({ where: { username } })
}

const findById = async (id: string) => {
  return await prisma.user.findUnique({ where: { id } })
}

type InsertNewUserProps = Omit<User, 'id' | 'created_date' | 'updated_date'>

const insert = async (newUser: InsertNewUserProps) => {
  return await prisma.user.create({ data: newUser })
}

export type { User }

export const UserDB = {
  findByUsername,
  findById,
  insert
}
