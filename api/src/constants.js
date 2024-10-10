const VOTE_TYPE = {
    SUPPORT_VOTE: '1',
    OPPOSE_VOTE: '2',
};

// Using this just to avoid using magic strings
// For a real project, I would use TypeScript and types
// to avoid using this kind of object
const VOTE_FILTER_PROPERTIES = {
    LEGISLATOR_ID: 'legislator_id',
    VOTE_ID: 'vote_id',
}

module.exports = {
    VOTE_TYPE,
    VOTE_FILTER_PROPERTIES,
};