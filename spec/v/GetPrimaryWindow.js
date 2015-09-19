var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();

  c.inPorts.add('bang', function (event, payload) {
    if (event !== 'data') {
      return;
    }
    // Do something with the packet, then
    c.outPorts.window.send(window);
  });
  c.outPorts.add('window');
  return c;
};