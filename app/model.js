exports.specs = function(testResult) {

  var propNames = [];
  var i = 0;

  testResult.forEach(function(e) {
    propNames.push('d' + i++);
  });

  return makeOjectTree(propNames, testResult);
};

function makeOjectTree(propNames, testResult) {
  var name;
  var o = {};
  var result = o;

  for (var i = 0, iLen = propNames.length; i < iLen; i++) {
    name = propNames[i];

    if (!o[name]) {
      o[name] = {
        description: testResult[i]
      };
      o = o[name];
    }
  }

  return result;
}

