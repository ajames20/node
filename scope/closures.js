function foo() {
  var bar;
  quux = 'global scope';
  function zip() {
    bar = true;
    var quux = 'quux';
  }
  return zip;
}
