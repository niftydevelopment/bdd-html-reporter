var expect  = require("chai").expect;
var assert = require('assert');

var model = require("./../app/model");

describe('Model', function() {

  describe('specs', function () {

    it('should reflect test result as an object tree.', function () {

      var specs = model.specs(['lorum','ipsum', 'dolor']);

      expect(specs.d0.description).to.be.equal('lorum');
      expect(specs.d0.d1.description).to.be.equal('ipsum');
      expect(specs.d0.d1.d2.description).to.be.equal('dolor');

      specs = model.specs(['lorum','ipsum', 'whatever'], specs);

      expect(specs.d0.description).to.be.equal('lorum');
      expect(specs.d0.d1.description).to.be.equal('ipsum');

      expect(specs.d0.d1.d2.description).to.be.equal('dolor');
      expect(specs.d0.d1.d21.description).to.be.equal('whatever');

    });

  });

});