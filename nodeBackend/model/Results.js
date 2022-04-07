const Sequelize = require("sequelize");
const Result = sequelize.define(
  "Results",
  {
    serial_no: {
      type: Sequelize.INTEGER(100),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    student_name: {
      type: Sequelize.STRING(20),
      allowNull: false,
      unique: true,
    },
    father_name: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    dob: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING(40),
      allowNull: false,
    },
    mobile_no: {
      type: Sequelize.INTEGER(20),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    state: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    pincode: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
    },
    marks: {
      type: Sequelize.INTEGER(20),
      allowNull: false,
    },
    class_alloted: {
      type: Sequelize.INTEGER(20),
      allowNull: false,
    },
    date_enrolled: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },

  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Result;
