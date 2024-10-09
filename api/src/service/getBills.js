const csvParser = require('../utils/csvParser');

async function getBills(id = null) {
  const bills = await csvParser('src/data/bills.csv');
  if (id) {
    return bills.find(bill => bill.id === id);
  }
  return bills;
}

module.exports = getBills;