import type { User } from '@prisma/client'
import prisma from './client'

const findByUsername = async (username: string): Promise<User | null> =>
  await prisma.user.findUnique({ where: { username } })

const findById = async (id: string): Promise<User | null> =>
  await prisma.user.findUnique({ where: { id } })

type InsertNewUserProps = Omit<User, 'id' | 'created_date' | 'updated_date'>

const insert = async (newUser: InsertNewUserProps): Promise<User> =>
  await prisma.user.create({ data: newUser })

export type { User }

export const UserDB = {
  findByUsername,
  findById,
  insert
}
