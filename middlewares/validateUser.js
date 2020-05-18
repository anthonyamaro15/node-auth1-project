function validateUser(user) {
  return user.username && user.password;
}
module.exports = {
  validateUser,
};
