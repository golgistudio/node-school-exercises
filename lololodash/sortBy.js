var _ = require("lodash");

var worker = function(items) {
    return _.orderBy(items, 'quantity', 'desc')
}

module.exports = worker;

/*
Alternative approaches

var sorting = function(collection) {
    return _.sortBy(collection, function (item) {
        return -item.quantity
    }
}

return _.sortBy(collection, "quantity").reverse()


 */