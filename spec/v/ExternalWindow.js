var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();

  c.inPorts.add('bang', function (event, payload) {
    if (event !== 'data') {
      return;
    }
    var win = window.open('404');
	win.onload = function () {
      c.outPorts.window.send();
    };
  });
  c.outPorts.add('window');
  return c;
};