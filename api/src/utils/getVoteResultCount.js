const { VOTE_TYPE } = require("../constants");

function getVoteResultCount (voteResults, validationFunction) {
    const resultOjb = {
        supportedVotes: 0,
        opposedVotes: 0,
    }
    voteResults.forEach((vote) => {
        if(validationFunction(vote)){
            if (vote.vote_type === VOTE_TYPE.SUPPORT_VOTE) {
                resultOjb.supportedVotes++;
                return;
            }
            resultOjb.opposedVotes++;
        }
    });
    return resultOjb;
}

module.exports = getVoteResultCount;
