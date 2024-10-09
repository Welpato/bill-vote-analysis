const csvParser = require('../utils/csvParser');

async function getVoteResults(legislatorId = null) {
  const voteResults = await csvParser('src/data/vote_results.csv');
  if (legislatorId) {
    return voteResults.find(voteResult => voteResult.legislator_id === legislatorId);
  }
  return voteResults;
}

module.exports = getVoteResults;