const DataTypes = require("sequelize").DataTypes;
const action = require("./action");
const artifact = require("./artifact");
const assignee = require("./assignee");
const attachment = require("./attachment");
const collaboration = require("./collaboration");
const project = require("./project");
const role = require("./role");
const state = require("./state");
const task = require("./task");
const user = require("./user");

function initModels(sequelize) {
  const actionRepo = action(sequelize, DataTypes);
  const artifactRepo = artifact(sequelize, DataTypes);
  const assigneeRepo = assignee(sequelize, DataTypes);
  const attachmentRepo = attachment(sequelize, DataTypes);
  const collaborationRepo = collaboration(sequelize, DataTypes);
  const projectRepo = project(sequelize, DataTypes);
  const roleRepo = role(sequelize, DataTypes);
  const stateRepo = state(sequelize, DataTypes);
  const taskRepo = task(sequelize, DataTypes);
  const userRepo = user(sequelize, DataTypes);


  // projects relations
  projectRepo.hasMany(collaborationRepo, { as: "collaborations", foreignKey: "project" });

  // colaborations relations
  collaborationRepo.belongsTo(projectRepo, { as: "project_project", foreignKey: "project" });
  collaborationRepo.belongsTo(roleRepo, { as: "role_role", foreignKey: "role" });
  collaborationRepo.belongsTo(userRepo, { as: "user_user", foreignKey: "user" });

  // roles relations
  roleRepo.hasMany(collaborationRepo, { as: "collaborations", foreignKey: "role" });

  // users relations
  userRepo.hasMany(actionRepo, { as: "actions", foreignKey: "actor" });
  userRepo.hasMany(assigneeRepo, { as: "assignees", foreignKey: "user" });
  userRepo.hasMany(collaborationRepo, { as: "collaborations", foreignKey: "user" });
  userRepo.hasMany(taskRepo, { as: "tasks", foreignKey: "owner" });

  // tasks relations
  taskRepo.hasMany(actionRepo, { as: "actions", foreignKey: "subject_task" });
  taskRepo.hasMany(assigneeRepo, { as: "assignees", foreignKey: "task" });
  taskRepo.hasMany(attachmentRepo, { as: "attachments", foreignKey: "task" });
  taskRepo.belongsTo(userRepo, { as: "owner_user", foreignKey: "owner" });

  // assignees relations
  assigneeRepo.belongsTo(taskRepo, { as: "task_task", foreignKey: "task" });
  assigneeRepo.belongsTo(userRepo, { as: "user_user", foreignKey: "user" });

  // actions relations
  actionRepo.belongsTo(artifactRepo, { as: "subject_artifact_artifact", foreignKey: "subject_artifact" });
  actionRepo.belongsTo(stateRepo, { as: "state_state", foreignKey: "state" });
  actionRepo.belongsTo(taskRepo, { as: "subject_task_task", foreignKey: "subject_task" });
  actionRepo.belongsTo(userRepo, { as: "actor_user", foreignKey: "actor" });

  // states relations
  stateRepo.hasMany(actionRepo, { as: "actions", foreignKey: "state" });

  // artifacts relations
  artifactRepo.hasMany(actionRepo, { as: "actions", foreignKey: "subject_artifact" });
  artifactRepo.hasMany(attachmentRepo, { as: "attachments", foreignKey: "artifact" });

  // attachments relations
  attachmentRepo.belongsTo(artifactRepo, { as: "artifact_artifact", foreignKey: "artifact" });
  attachmentRepo.belongsTo(taskRepo, { as: "task_task", foreignKey: "task" });

  return {
    actionRepo,
    artifactRepo,
    assigneeRepo,
    attachmentRepo,
    collaborationRepo,
    projectRepo,
    roleRepo,
    stateRepo,
    taskRepo,
    userRepo,
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
