const userRepository = require('../repositories/user');

async function getAllUser() {
  return mapUser(await userRepository.getAllUser());
}

async function getUserById(id) {
  return mapUser(await userRepository.getUserById(id));
}

async function createUser(name, email) {
  return await userRepository.createUser(name, email);
}

async function updateUser(id, name, email) {
  const user = await userRepository.getUserById(id);
  if(!user) {
    return `User id : ${id} isn't update`;
  }
  return await userRepository.updateUser(id, name, email);
}

function mapUser(users) {
  if(!users){
    return [];
  }

  return users.map(r => {
    return {
      name: r.name,
      email: r.email
    }
  })
}

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser
}
