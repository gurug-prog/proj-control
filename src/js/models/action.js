const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('action', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    comment: {
      type: DataTypes.STRING(127),
      allowNull: true
    },
    actor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'states',
        key: 'id'
      }
    },
    subject_artifact: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'artifacts',
        key: 'id'
      }
    },
    subject_task: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tasks',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'actions',
    timestamps: true,
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
        name: "fk_actions_users1_idx",
        using: "BTREE",
        fields: [
          { name: "actor" },
        ]
      },
      {
        name: "fk_actions_tasks1_idx",
        using: "BTREE",
        fields: [
          { name: "subject_task" },
        ]
      },
      {
        name: "fk_actions_states1_idx",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
      {
        name: "fk_actions_artifacts1_idx",
        using: "BTREE",
        fields: [
          { name: "subject_artifact" },
        ]
      },
    ]
  });
};
