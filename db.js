/* eslint-disable import/no-extraneous-dependencies */
const Faker = require("faker");

module.exports = () => {
  const data = {
    todos: [
      {
        text: "Eat",
        id: 1,
        done: false
      },
      {
        text: "Sleep",
        id: 2,
        done: false
      },
      {
        text: "Code",
        id: 3,
        done: false
      }
    ]
  };
  return data;
};
