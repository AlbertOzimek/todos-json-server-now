/* eslint-disable import/no-extraneous-dependencies */
const Faker = require("faker");

module.exports = () => {
  const data = {
    todos: [
      {
        task: "Eat",
        id: 1,
        complete: false
      },
      {
        task: "Sleep",
        id: 1,
        complete: false
      },
      {
        task: "Code",
        id: 1,
        complete: false
      }
    ]
  };
  return data;
};
