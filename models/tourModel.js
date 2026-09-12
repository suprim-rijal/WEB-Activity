const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../data');
const filePath = path.join(dirPath, 'tours.json');

exports.getAllToursData = () => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, 'utf-8');
  
  // If the file is empty, return an empty array instead of crashing
  if (!data.trim()) return [];
  
  return JSON.parse(data);
};

exports.saveToursData = (tours) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(filePath, JSON.stringify(tours, null, 2));
};