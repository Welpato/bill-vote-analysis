const express = require('express')
const cors = require('cors')
const getBills = require('./src/service/getBills')
const getLegislators = require('./src/service/getLegislators')
const getVoteResults = require('./src/service/getVoteResults')
const getVotes = require('./src/service/getVotes')

const app = express()

app.use(cors())

app.get('/bills', (req, res) => {
  return getBills().then((bills) => {
    res.json(bills)
  }).catch((error) => {
    res.status(500).json({
      message: 'An error occurred',
      error: error
    })
  })
})

app.get('/legislators', (req, res) => {
  return getLegislators().then((legislators) => {
    res.json(legislators)
  }).catch((error) => {
    res.status(500).json({
      message: 'An error occurred',
      error: error
    })
  })
})

app.get('/vote-results', (req, res) => {
  return getVoteResults().then((voteResults) => {
    res.json(voteResults)
  }).catch((error) => {
    res.status(500).json({
      message: 'An error occurred',
      error: error
    })
  })
})

app.get('/votes', (req, res) => {
  return getVotes().then((votes) => {
    res.json(votes)
  }).catch((error) => {
    res.status(500).json({
      message: 'An error occurred',
      error: error
    })
  })
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})