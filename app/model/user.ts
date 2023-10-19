module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(50),
    age: INTEGER,
    sex: INTEGER,
  });
  return User;
};