angular.module("swankyChat", [])

// Set Up Chat Controller
.controller("chatCtrl", function($scope, $timeout, $rootScope) {
  $scope.chats = [{
    id: 0,
    username: "izzati",
    avatar: "https://imgflip.com/s/meme/Futurama-Leela.jpg",
    messages: [
      "Hi, do you free tomorrow",
      "Yes, im free."
    ]
  }, {
    id: 1,
    username: "Ali",
    avatar: "http://orig02.deviantart.net/9689/f/2012/027/9/c/mr_bender______classy__by_sgtconker1r-d4nqpzu.png",
    messages: [
      "Hello, can i get your service?"
    ]
  }];

  // Assign Pushed Messages To A User
  $scope.text;
  $scope.add = function() {
    var vlu = $scope.value;
    if($scope.text) {
      $scope.chats[vlu].messages.push(this.text);
      $scope.text = '';
      console.log(vlu);
    }
  }

  // Setting The Value Scope Equal To The Chat.id Which Is Retrieved Via Ng Click - We Pass The Chat.id Through The Function
  $scope.value;
  $scope.uid = function(ix) {
    console.log(ix);

    function ixy() {
      $rootScope.value = ix;
    }
    // Delay Our Scope Change To Create A Smoother Transition
    $timeout(ixy, 750);
  }

});

// Animation Styles
$(function() {

  var index = 0;

  function initScroll() {
    $(".message-wrap").animate({
      scrollTop: $("main").height()
    }, 1000);
  }

  function scroll() {
    $(".message-wrap").animate({
      scrollTop: 9000
    }, 1000);
  }

  $("input[type='submit']").click(function() {
    scroll();
  });

  $("aside").find("li").click(function() {
    initScroll();
    $(".init").animate({
      'opacity': '0'
    }, 500);
  });

  $("aside").find("li").click(function() {
    if (index == 1) {
      index = 0;
      $(".message-wrap").find(".message").css({
        'opacity': '1'
      });
    } else {
      index = 0;
      $(".message-wrap").find(".message").css({
        'opacity': '0'
      });
      $(".loader").delay(500).animate({
        'opacity': '1'
      });
      setTimeout(function() {
        index = 0;
        $(".message-wrap").find(".message").css({
          'opacity': '1'
        });
        $(".loader").animate({
          'opacity': '0'
        });
      }, 3000)
    }
  });
});
