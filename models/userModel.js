const database = {
      cindy: {
        email: "cindy@example.com",
        password: "cindy123",
        reminders: [
          {
            id: 1,
            title: "Grocery shopping",
            description: "Buy milk and bread from Safeway",
            completed: false,
          },
        ],
      },
      george: {
        email: "george@example.com",
        password: "george123",
        reminders: [
          {
            id: 1,
            title: "Ikea",
            description: "Ikea stuff",
            completed: false,
          },
        ],
      },
      dan: {
        email: "dan@example.com",
        password: "dan123",
        reminders: [
          {
            id: 1,
            title: "Costco",
            description: "Costco stuff",
            completed: false,
          },
        ],
      },
    };

  const userModel = {
    findOne: (email) => {
        const user = Object.values(database).find(user => user.email === email);
        if (user) {
          return user;
        }
        throw new Error(`Couldn't find user with email: ${email}`);
      },
    findById: (id) => {
      const user = Object.values(database.users).find(user => user.id === id);
      if (user) {
        return user;
      }
      throw new Error(`Couldn't find user with id: ${id}`);
    },
  };
  
  module.exports = { database, userModel };
  