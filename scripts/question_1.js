var app = angular.module("question_1", []);

app.controller("answers", function($scope) {
    $scope.responses = [
        {
            name: 'Charles Darwin',
            pic: '/images/darwin.png',
            answer: 'This is where his answer would go...',
            likes: '2'
        },
        {
            name: 'Georges Cuvier',
            pic: '/images/cuvier.png',
            answer: 'This is where his answer would go...',
            likes: '4'
        },
        {
            name: 'Jean-Baptiste Lamarck',
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

app.controller("sidebar", function($scope) {
    $scope.questions = [
        {
            id: 'q1',
            question: 'What is the purpose of the fur?',
        },
        {
            id: 'q2',
            question: 'Why is the fur seal communal?',
        }
    ];
});
