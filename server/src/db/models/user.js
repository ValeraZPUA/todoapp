'use strict';
import bcrypt from 'bcrypt';
import {NAME_PATTERN, LOGIN_PATTERN} from "../../constrains";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: NAME_PATTERN,
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: NAME_PATTERN,
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate:{
       isEmail: true,
      }
    },
    login: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        is: LOGIN_PATTERN,
        len: [6, 15],
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'passwordHash',
      set(value) {
        this.setDataValue('password', bcrypt.hashSync(value, 10));
      }
    }
  }, {});

  User.associate = function (models) {
    User.hasMany(models.Task, {
      foreignKey: {
        field: 'userId',
      },
      as: 'tasks'
    });
  };
  return User;
};

