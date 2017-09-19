function MainController($scope) {
  $scope.contact = {
    name: 'Bob',
    email: 'bob@bob.com',
    phone: '(718) 112-4322'
  };
}

angular
  .module('app')
  .controller('MainController', MainController);
