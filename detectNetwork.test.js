
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
  var should = chai.should();
  var referenceCardNumber = '6011345678901231234';

  function variableTest(prefix, cardLength) {
    var testCardNumber = prefix + referenceCardNumber.slice(prefix.length, cardLength);
    it('has a prefix of ' + prefix + ' and a length of ' + cardLength, function() {
        detectNetwork(testCardNumber).should.equal('Discover');
    });
  }

  variableTest('65', 16);
  variableTest('65', 19);
  variableTest('6011', 16);
  variableTest('6011', 19);
  for (var i = 644; i <= 649; i++) {
    var prefix = i.toString();
    variableTest(prefix, 16);
    variableTest(prefix, 19);
  }
});

describe('Maestro', function() {
  var should = chai.should();
  var referenceCardNumber = '6011345678901231234';

  function variableTest(prefix, cardLength) {
    var testCardNumber = prefix + referenceCardNumber.slice(prefix.length, cardLength);
    it('has a prefix of ' + prefix + ' and a length of ' + cardLength, function() {
        detectNetwork(testCardNumber).should.equal('Maestro');
    });
  }
  
  for (var i = 12; i <= 19; i++) {
    variableTest('5018', i);
    variableTest('5020', i);
    variableTest('5038', i);
    variableTest('6304', i);
  }



/*
  it('has a prefix of 5018 and a lenght of 12', function() {
    detectNetwork('501845678901').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a lenght of 14', function() {
    detectNetwork('50204567890123').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a lenght of 17', function() {
    detectNetwork('50384567890123123').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 19', function() {
    detectNetwork('6304456789012312364').should.equal('Maestro');
  });
  */
});