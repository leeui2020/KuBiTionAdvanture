$.debounce = function (func, ms) {
  var ticket;
  return function () {
    var that = this;
    var args = arguments;
    clearTimeout(ticket);
    ticket = setTimeout(function () {
      func.apply(that, args);
    }, ms || 300);
  };
};
