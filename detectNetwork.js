
var detectNetwork = function(cardNumber) {

  var prefixMatch = function(testNetwork) {
    var prefixes = testNetwork.prefixes;
    var prefixTo = function(depth) {
      return cardNumber.slice(0,depth);
    };

    for (var i = 0; i < prefixes.length; i++) {
      var depth;
      if (Array.isArray(prefixes[i])) {
        depth = prefixes[i][0].length;
        if (prefixes[i][0] <= prefixTo(depth) && prefixTo(depth) <= prefixes[i][1]) {
          return true;
        }
      } else {
        depth = prefixes[i].length;
        if (prefixes[i] === prefixTo(depth)) {
          return true;
        }
      }
    }
    return false;
  };

  var lengthMatch = function(testNetwork) {
    var lengths = testNetwork.lengths;
    for (var i = 0; i < lengths.length; i++) {
      var depth;
      if (Array.isArray(lengths[i])) {
        if (lengths[i][0] <= cardNumber.length && cardNumber.length <= lengths[i][1]) {
          return true;
        }
      } else if (cardNumber.length === lengths[i]) {
        return true;
      }
    }
    return false;
  };

  var Network = function(networkName, prefixes, lengths) {
    this.networkName = networkName;
    this.prefixes = prefixes;
    this.lengths = lengths;
  };

  var networks = [
    new Network('Diner\'s Club', ['38', '39'], [14]),
    new Network('American Express', ['34', '37'], [15]),
    new Network('Visa', ['4'], [13, 16, 19]),
    new Network('MasterCard', [['51', '55']], [16]),
    new Network('Discover', ['6011', ['644', '649'], '65'], [16, 19]),
    new Network('Maestro', ['5018', '5020', '5038', '6304'], [[12, 19]]),
    new Network('China UnionPay', [['622126', '622925'], ['624', '626'], ['6282', '6288']], [[16, 19]]),
    new Network('Switch', ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'], [16, 18, 19] )
  ];

  for (var i = 0; i < networks.length; i++) {
    if (prefixMatch(networks[i]) && lengthMatch(networks[i])) {
      result = networks[i].networkName;
    }
  }

  return result;
};
