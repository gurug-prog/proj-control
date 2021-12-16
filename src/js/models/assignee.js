const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assignee', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    task: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tasks',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'assignees',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_assignees_tasks1_idx",
        using: "BTREE",
        fields: [
          { name: "task" },
        ]
      },
      {
        name: "fk_assignees_users1_idx",
        using: "BTREE",
        fields: [
          { name: "user" },
        ]
      },
    ]
  });
};
