exports.specs = function(testResult, appendTo) {

  var propNames = [];
  var i = 0;

  testResult.forEach(function(e) {
    propNames.push('d' + i++);
  });

  return makeOjectTree(propNames, testResult, appendTo);
};

function makeOjectTree(propNames, testResult, appendTo) {
  var name;
  var o = (appendTo != null) ? appendTo : {};
  var result = o;

  for (var i = 0, iLen = propNames.length; i < iLen; i++) {
    name = propNames[i];

    if (!o[name]) {
      //new node
      o[name] = {
        description: testResult[i]
      };
      o = o[name];
    } else if (o[name] && o[name].description === testResult[i]) {
      //existing node
      o = o[name];
    } else {
      //current node does not contain the same description.
      for (var ii = 1, iiLen = 100; ii < iiLen; ii++) {
        if (!o[name + '' + ii]) {
          o[name + '' + ii] = {
            description: testResult[i]
          };
         
          o = o[name];
          break;
        }
      }

    }

  }

  return result;
}


/*
      for (var ii = 0, iiLen = 100; ii < iiLen; ii++) {
        if (!o[name + ii]) {
          o[name + ii] = {
            description: testResult[i]
          };
        }        
      }
*/