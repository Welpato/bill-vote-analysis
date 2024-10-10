const getVoteResultCount = require('../utils/getVoteResultCount');
const getBills = require('./getBills');
const getVoteResults = require('./getVoteResults');
const getVotes = require('./getVotes');

async function getBillsResults(id = null) {
  const bills = await getBills(id);
  const votes = await getVotes();
  const voteResults = await getVoteResults();

  return bills.map((bill) => {
    const resultOjb = {
      id: bill.id,
      title: bill.title,
      primarySponsor: bill.sponsor_id,
      supportedVotes: 0,
      opposedVotes: 0,
    }

    const billVoteIds = votes.filter((vote) => vote.bill_id === bill.id).map((vote) => vote.id);
    if(billVoteIds.length === 0){
      return resultOjb;
    }

    const voteResultCount = getVoteResultCount(voteResults, (vote) => billVoteIds.includes(vote.vote_id));

    return {
      ...resultOjb,
      supportedVotes: voteResultCount.supportedVotes,
      opposedVotes: voteResultCount.opposedVotes,
    };
  });
}

module.exports = getBillsResults;