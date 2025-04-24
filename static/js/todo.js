var app = angular.module('toDo', []);
app.controller('toDoController', function($scope, $http) {
    $scope.todoList = [];

    // Loading backend tasks
    $http.get('todo/api/').then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
            var todo = {
                todoText: response.data[i].text,
                done: response.data[i].done,
                id: response.data[i].id
            };
            $scope.todoList.push(todo);
        }
    });

    // Adding new tasks
    $scope.todoAdd = function() {
        var newTodo = { text: $scope.todoInput, done: false };
        
        // Envia para o backend
        $http.post('todo/api/', newTodo).then(function(response) {
            // Adiciona à lista local com ID retornado
            $scope.todoList.push({
                todoText: response.data.text,
                done: response.data.done,
                id: response.data.id
            });
            $scope.todoInput = '';
        });
    };

    // Removing finished tasks
    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];

        angular.forEach(oldList, function(todo) {
            if (todo.done) {
                $http.delete('todo/api/' + todo.id + '/');
            } else {
                $scope.todoList.push(todo);
            }
        });
    };
});
