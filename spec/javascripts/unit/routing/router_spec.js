module('Routing specs', {
  setup: function() {
    NewAddressBook.reset();
  }

});

test('root route', function() {
  routesTo('/', 'index');
});

test('contacts route', function(){
  routesTo('/contacts', 'contacts.index');
});



















var routesTo = function(url, route_name) {
  visit(url);
  andThen(function(){
    var current_route = NewAddressBook.__container__.lookup('controller:application').currentRouteName;
    equal(current_route, route_name, 'Expected ' + route_name + ', got: ' + current_route);
  });
};
