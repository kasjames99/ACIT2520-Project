const database = [
  {
    id: 1,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
    admin: false,
    reminders: [{
      id: 1,
      title: "Grocery shopping",
      description: "Buy milk and bread from Safeway",
      completed: true,
    },
    {
      id: 2,
      title: "Test populated reminder",
      description: "test",
      completed: false,
    },]
  },
  {
    id: 2,
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
    admin: false,
    reminders: [{
      id: 1,
      title: "Johnny Doe reminder",
      description: "Shouldn't see this from other users",
      completed: false,
    },]
  },
  {
    id: 3,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
    admin: false,
    reminders: []
  },
];

const userModel = {
  findOne: (email) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },
  findById: (id) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },
};

module.exports = { database, userModel };