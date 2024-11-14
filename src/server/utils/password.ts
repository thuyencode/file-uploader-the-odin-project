export const hashPassword = async (password: string) => {
  return await Bun.password.hash(password, {
    algorithm: 'argon2id', // "argon2id" | "argon2i" | "argon2d"
    memoryCost: 4, // memory usage in kibibytes
    timeCost: 3 // the number of iterations
  })
}

export const verifyPassword = async (password: string, hash: string) => {
  return await Bun.password.verify(password, hash)
}
