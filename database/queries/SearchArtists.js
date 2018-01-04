const Artist = require('../models/artist');

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {number} offset How many records to skip in the result set
 * @param {number} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 */
module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {

    const query = Artist
        .find(buildQuiery(criteria))
        .sort({[sortProperty]: 1})
        .skip(offset)
        .limit(limit);

    return Promise.all([query, Artist.find(buildQuiery(criteria)).count()])
        .then((results) => {
            return {
                all: results[0],
                count: results[1],
                offset: offset,
                limit: limit
            };
        });


};

function buildQuiery(criteria){
    const searchQuery = {};

    if (criteria.name) {
        searchQuery.$text = {
            $search: criteria.name
        };
    }

    if (criteria.age){
        searchQuery.age = {
            $gte: criteria.age.min,
            $lte: criteria.age.max
        };
    }

    if (criteria.yearsActive){
        searchQuery.yearsActive = {
            $gte: criteria.yearsActive.min,
            $lte: criteria.yearsActive.max
        };
    }

    return searchQuery;
}
