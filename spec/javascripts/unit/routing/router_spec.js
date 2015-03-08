module('Routing specs', {
  setup: function() {
    NewAddressBook.reset();
  }

});

test('root route', function() {
  visit('/');
  andThen(function(){
    var current_route = NewAddressBook.__container__.lookup('controller:application').currentRouteName;
    equal(current_route, 'index', 'Expected ****** got: ' + current_route);
  });
});