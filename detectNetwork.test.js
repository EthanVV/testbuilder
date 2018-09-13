var variableTest = function(prefix, cardLength, expected) {
  var referenceCardNumber = '6011345678901231234';
  var testCardNumber = prefix + referenceCardNumber.slice(prefix.length, cardLength);
  it('has a prefix of ' + prefix + ' and a length of ' + cardLength, function() {
      detectNetwork(testCardNumber).should.equal(expected);
  });
};

describe('Diner\'s Club', function() {
  var should = chai.should();

  it('has a prefix of 38 and a length of 14', function() {
    detectNetwork('38345678901234').should.equal('Diner\'s Club');
  });

  it('has a prefix of 39 and a length of 14', function() {
    detectNetwork('39345678901234').should.equal('Diner\'s Club');
  });
});

describe('American Express', function() {
  var should = chai.should();

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  var should = chai.should();
 
  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
 
});

describe('Discover', function() {
  var referenceCardNumber = '6011345678901231234';
  var expect = 'Discover';

  variableTest('65', 16, expect);
  variableTest('65', 19, expect);
  variableTest('6011', 16, expect);
  variableTest('6011', 19, expect);
  for (var i = 644; i <= 649; i++) {
    var prefix = i.toString();
    variableTest(prefix, 16, expect);
    variableTest(prefix, 19, expect);
  }
});

describe('Maestro', function() {
  var expect = 'Maestro';

  for (var i = 12; i <= 19; i++) {
    variableTest('5018', i, expect);
    variableTest('5020', i, expect);
    variableTest('5038', i, expect);
    variableTest('6304', i, expect);
  }
});

describe('China UnionPay', function() {
  var expect = 'China UnionPay';
  function forLengths (length) {
    var prefix = length.toString();
    for (var j = 16; j <= 19; j++) {
      variableTest(prefix, j, expect);
    }
  }

  for (var i = 622126; i <= 622925; i++) {
    forLengths(i);
  }
  for (var i = 624; i <= 626; i++) {
    forLengths(i);
  }
  for (var i = 6282; i <= 6288; i++) {
    forLengths(i);
  }
});

describe('Switch', function() {
  var expect = 'Switch';
  var prefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];

  for (var i = 0; i < prefixes.length; i++) {
    variableTest(prefixes[i], 16, expect);
    variableTest(prefixes[i], 18, expect);
    variableTest(prefixes[i], 19, expect);
  }
});
/*
   new Network('China UnionPay', [['622126', '622925'], ['624', '626'], ['6282', '6288']], [[16, 19]]),
    new Network('Switch', ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'], [16, 18, 19] )
*/