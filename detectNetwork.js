
var detectNetwork = function(cardNumber) {
  var network = '';
  var length = cardNumber.length;
  var first = function(depth) {
    return cardNumber.slice(0,depth);
  };

  if ((first(2) === '38' || first(2) === '39') && length === 14) {
    network = 'Diner\'s Club';
  } else if ((first(2) === '34' || first(2) === '37') && length === 15) {
    network = 'American Express';
  } else if (first(1) === '4' && (length === 13 || length === 16 || length === 19)) {
    network = 'Visa';
  } else if (first(2) >= '51' && first(2) <= '55' && length === 16) {
    network = 'MasterCard';
  } else if ((first(4) === '6011' || (first(3) >= '644' && first(3) <= '649') || first(2) === '65') && (length === 19 || length === 16)) {
    network = 'Discover';
  } else if ((first(4) === '5018' || first(4) === '5020' || first(4) === '5038' || first(4) === '6304') && length >= 12 && length <= 19) {
    network = 'Maestro';
  }
  return network;
};
