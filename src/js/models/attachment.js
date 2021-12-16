const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attachment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    artifact: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artifacts',
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
    tableName: 'attachments',
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
        name: "fk_attachments_artifacts1_idx",
        using: "BTREE",
        fields: [
          { name: "artifact" },
        ]
      },
      {
        name: "fk_attachments_tasks1_idx",
        using: "BTREE",
        fields: [
          { name: "task" },
        ]
      },
    ]
  });
};
