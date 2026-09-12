const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/users.json');

exports.getAllUsersData = () => {
  if (!fs.existsSync(filePath)) {
    // Return sample user data if file doesn't exist yet
    return [{
      name: "Matti Seppänen",
      email: "matti@example.com",
      password: "M@45mtg$",
      phone_number: "+358401234567",
      gender: "Male",
      date_of_birth: "2000-01-15",
      membership_status: "Active",
      account_verified: true,
      country: "Finland"
    }];
  }
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

exports.saveUsersData = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};