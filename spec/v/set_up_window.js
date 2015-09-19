var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();

  c.inPorts.add('window', function (event, payload) {
    if (event !== 'data') {
      return;
    }
    var element = payload.find('body').append('<div id="v"></div>');
    payload.element.addClass('container-fluid');
    payload.find(head).append($('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">'));
    payload.find(title).text('v');
    // Do something with the packet, then
    c.outPorts.window.send(payload);
  });
  c.outPorts.add('window');
  return c;
};