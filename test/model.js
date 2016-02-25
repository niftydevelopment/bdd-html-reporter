var expect  = require("chai").expect;
var assert = require('assert');

var model = require("./../app/model");

describe('Array', function() {

  describe('#indexOf()', function () {

    it('should return -1 when the value is not present', function () {

      var specs = model.specs(['lorum','ipsum', 'dolor']);

      expect(specs.d0.description).to.be.equal('lorum');
      expect(specs.d0.d1.description).to.be.equal('ipsum');
      expect(specs.d0.d1.d2.description).to.be.equal('dolor');
    });

  });

});