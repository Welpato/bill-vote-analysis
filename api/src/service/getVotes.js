const csvParser = require('../utils/csvParser');

async function getVotes() {
  const votes = await csvParser('src/data/votes.csv');

  return votes;
}

module.exports = getVotes;