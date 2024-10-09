const fs = require('fs');
const csv = require('csv-parser');

function csvParser(filePath) {
    try {
        return new Promise((resolve, reject) => {
            const results = [];
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (data) => results.push(data))
                .on('end', () => resolve(results))
                .on('error', (error) => reject(error));
        })
    } catch (error) {
        console.error(error);
        return reject(error);
    }
}

module.exports = csvParser;