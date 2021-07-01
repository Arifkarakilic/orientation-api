import { DataTypes } from 'sequelize';

import Sequelize from '../sequelize';

const contents = Sequelize.define('contents',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    image_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allownull: false,
    },
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    rate: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

const initialize = (models) => {
  models.contents.belongsTo(models.users, {
    as: 'user',
    foreignKey: {
      name: 'user_id',
      allowNull: false,
    },
  });
  models.contents.belongsTo(models.images, {
    as: 'image',
    foreignKey: {
      name: 'image_id',
      allowNull: false,
    },
  });
};

export default {
  model: contents,
  initialize,
};