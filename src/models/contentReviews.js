import { DataTypes } from 'sequelize';

import Sequelize from '../sequelize';

const content_reviews = Sequelize.define('content_reviews',
  {
    content_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.NUMBER,
      default: null,
    },
    is_spoiler: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

const initialize = (models) => {
  models.content_reviews.belongsTo(models.users, {
    as: 'user',
    foreignKey: {
      name: 'user_id',
      allowNull: false,
    },
  });

  models.content_reviews.belongsTo(models.contents, {
    as: 'contents',
    foreignKey: {
      name: 'content_id',
      allowNull: false,
    },
  });
};
export default {
  model: content_reviews,
  initialize,
};
