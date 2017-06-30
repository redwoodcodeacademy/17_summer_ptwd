angular
  .module("toDoApp")
  .controller("toDoController", function($scope) {

    $scope.lists = [];
    var listId = 0;
    var toDoId = 0;

    var List = function(id, listName) {
      this.id = id;
      this.listName = listName;
      this.isActive = true;
      this.toDos = [];
    }

    var ToDo = function(id, title) {
      this.id = id;
      this.title = title;
      this.isDone = false;
    }

    $scope.lists.push(new List(listId++, "Shopping"))
    $scope.lists.push(new List(listId++, "Trips"))
    $scope.lists.push(new List(listId++, "Chores"))

    $scope.lists[0].toDos.push(new ToDo(toDoId++, "Apples"))
    $scope.lists[0].toDos.push(new ToDo(toDoId++, "Cookies"))
    $scope.lists[0].toDos.push(new ToDo(toDoId++, "Cherrys"))
    $scope.lists[0].toDos.push(new ToDo(toDoId++, "Coke"))
    $scope.lists[0].toDos.push(new ToDo(toDoId++, "Bananas"))

    $scope.lists[1].toDos.push(new ToDo(toDoId++, "England"))
    $scope.lists[1].toDos.push(new ToDo(toDoId++, "Bali"))
    $scope.lists[1].toDos.push(new ToDo(toDoId++, "Brazil"))
    $scope.lists[1].toDos.push(new ToDo(toDoId++, "Chile"))
    $scope.lists[1].toDos.push(new ToDo(toDoId++, "Iceland"))

    $scope.lists[2].toDos.push(new ToDo(toDoId++, "Trash"))
    $scope.lists[2].toDos.push(new ToDo(toDoId++, "Laundry"))
    $scope.lists[2].toDos.push(new ToDo(toDoId++, "Sweep"))
    $scope.lists[2].toDos.push(new ToDo(toDoId++, "Mow Lawn"))
    $scope.lists[2].toDos.push(new ToDo(toDoId++, "Clean Sink"))

    $scope.addList = function() {
      $scope.lists.unshift(new List(listId++, "New"))
    }

    $scope.deleteList = function(list) {
      for (var i = 0; i < $scope.lists.length; i++) {
        if($scope.lists[i].id == list.id) {
          $scope.lists.splice(i, 1)
        }
      }
    }

    $scope.addItem = function(list) {
      for (var i = 0; i < $scope.lists.length; i++) {
        if($scope.lists[i].id == list.id) {
          $scope.lists[i].toDos.push(new ToDo(toDoId++, list.newItem))
        }
      }
    }

    $scope.updateItem = function(item) {
      item.isDone = !item.isDone;
    }


  })
