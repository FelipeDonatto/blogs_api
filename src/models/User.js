const usersModel = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      displayName: { type: DataTypes.STRING, field: 'display_name' },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    { tableName: 'users', timestamps: false, underscored: true },
  );
  users.associate = (models) => {
    users.hasMany(models.BlogPost, {
      as: 'posts',
      foreignKey: 'user_id',
    });
  };
  return users;
};

module.exports = usersModel;
