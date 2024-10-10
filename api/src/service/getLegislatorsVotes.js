const getVoteResultCount = require("../utils/getVoteResultCount");
const { VOTE_FILTER_PROPERTIES } = require("../constants");
const getLegislators = require("./getLegislators");
const getVoteResults = require("./getVoteResults");

async function getLegislatorsVotes(legislatorId = null) {
    const legislators = await getLegislators(legislatorId);
    const voteResults = await getVoteResults();
    return legislators.map((legislator) => {
        const voteResultCount = getVoteResultCount(voteResults, (vote) => vote[VOTE_FILTER_PROPERTIES.LEGISLATOR_ID] === legislator.id);

        return {
            id: legislator.id,
            legislator: legislator.name,
            supportedBills: voteResultCount.supportedVotes,
            opposedBills: voteResultCount.opposedVotes,
        };
    });
}

module.exports = getLegislatorsVotes;