const { VOTE_TYPE } = require("./constants");
const getLegislators = require("./getLegislators");
const getVoteResults = require("./getVoteResults");

const filterVote = (vote, legislatorId, voteType) => {
    return vote.legislator_id === legislatorId && vote.vote_type === voteType;
}

async function getLegislatorsVotes(legislatorId = null) {
    const legislators = await getLegislators(legislatorId);
    const voteResults = await getVoteResults();
    return legislators.map((legislator) => {
        const supportedBills = voteResults.filter((vote) =>
            filterVote(vote, legislator.id, VOTE_TYPE.SUPPORT_VOTE)
        ).length;
        const opposedBills = voteResults.filter((vote) =>
            filterVote(vote, legislator.id, VOTE_TYPE.OPPOSE_VOTE)
        ).length;

        return {
            id: legislator.id,
            legislator: legislator.name,
            supportedBills,
            opposedBills,
        };
    });
}

module.exports = getLegislatorsVotes;