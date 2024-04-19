let database = {
  users: [
    {
      id: 1,
      email: "cindy@example.com",
      password: "password123",
      reminders: [
        {
          id: 1,
          title: "Grocery shopping",
          description: "Buy milk and bread from Safeway",
          completed: false,
        },
      ],
    },
  ],
};

const Database = [
  {
    id: 1,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
    reminders: [{
      id: 1,
      title: "Grocery shopping",
      description: "Buy milk and bread from Safeway",
      completed: false,
    },]
  },
  {
    id: 2,
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
    reminders: []
  },
  {
    id: 3,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
    reminders: []
  },
];

module.exports = Database;
