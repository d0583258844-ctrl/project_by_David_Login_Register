async function validateUser(username, password) {
  try {
    const users = await readUsers();
    const user = users.find((u) => u.username === username && u.password === password)
      return user
  } catch (error) {
    return null
  }
}
