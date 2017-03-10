var app = angular.module("question_1", []);

// DROPDOWN SELECTOR
app.controller("answers", function($scope) {
    $scope.responses = [
        {
            name: 'Darwin',
            pic: '/images/darwin.png',
            answer: 'This is where his answer would go...',
            likes: '2'
        },
        {
            name: 'Cuvier',
            pic: '/images/cuvier.png',
            answer: 'This is where his answer would go...',
            likes: '4'
        },
        {
            name: 'Lamarck',
            pic: '/images/lamarck.png',
            answer: 'This is where his answer would go...',
            likes: '6'
        },
        {
            name: 'Natural Historians',
            pic: '/images/lamark.png',
            answer: 'This is where the answer would go...',
            likes: '3'
        }
    ];
});
