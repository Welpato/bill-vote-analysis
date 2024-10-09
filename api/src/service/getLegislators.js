const csvParser = require('../utils/csvParser');

async function getLegislators(id = null) {
  const legislators = await csvParser('src/data/legislators.csv');
  if (id) {
    return legislators.find(legislator => legislator.id === id);
  }
  return legislators;
}

module.exports = getLegislators;