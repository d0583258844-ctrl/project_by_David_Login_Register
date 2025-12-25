import fs from "fs/promises";

export async function readUsers(path) {
  try {
    const users = await fs.readFile(path, "utf-8");
    return JSON.parse(users);
  } catch (error) {
    return [];
  }
}

export async function writeUsers(path,users) {
  await fs.writeFile(path, JSON.stringify(users, null, 2));
  return;
}

export async function readPosts() {
  try {
    const posts = await fs.readFile("../DB/posts.json", "utf-8");
    return JSON.parse(posts);
  } catch (error) {
    return [];
  }
}

export async function writePosts(posts) {
  await fs.writeFile("../DB/posts.json", JSON.stringify(users, null, 2));
  return;
}

export async function getAutoId(users) {
  if (!users || users.length === 0) {
    return 1;
  }
  let maxId = 0;
  users.forEach((element) => {
    if (element.id > maxId) {
      maxId = element.id;
    }
  });
  return maxId + 1;
}

