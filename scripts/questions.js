var app = angular.module("questions", []);

app.controller("answers", function($scope) {

    $scope.showSelected = function(passedEvent) {
        var requested = (passedEvent.target.attributes.id.value).replace(/\s/g,'');

        document.getElementById("question").innerHTML=passedEvent.target.innerHTML;

        $scope.q1 = false;
        $scope.q2 = false;

        if(requested.valueOf() == "q1"){
          $scope.q1 = true;
        }
        else if(requested.valueOf() == "q2"){
          $scope.q2 = true;
        }
    };

    $scope.tst = function() {
        console.log('tssssst');
    };

    $scope.quesans = [{
            question: 'Why is the seal covered in fur?',
            id: 'q1',
            fnc: 'tst()',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: '2',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium semper sapien, eu ullamcorper tortor. Nullam venenatis dolor a tincidunt tempus. Sed lacinia, ex vulputate lobortis lobortis, lectus velit finibus tortor, ac ornare mauris nisi sit amet orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna id neque iaculis vestibulum. Donec consectetur velit id metus varius, nec tincidunt mi vehicula. Donec faucibus diam at nunc consectetur volutpat in in risus. Duis semper diam nec orci viverra, eget vulputate turpis dictum. Morbi orci ex, ullamcorper sit amet ligula nec, finibus laoreet mi.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: '1',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium semper sapien, eu ullamcorper tortor. Nullam venenatis dolor a tincidunt tempus. Sed lacinia, ex vulputate lobortis lobortis, lectus velit finibus tortor, ac ornare mauris nisi sit amet orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna id neque iaculis vestibulum. Donec consectetur velit id metus varius, nec tincidunt mi vehicula. Donec faucibus diam at nunc consectetur volutpat in in risus. Duis semper diam nec orci viverra, eget vulputate turpis dictum. Morbi orci ex, ullamcorper sit amet ligula nec, finibus laoreet mi.'
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: '3',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium semper sapien, eu ullamcorper tortor. Nullam venenatis dolor a tincidunt tempus. Sed lacinia, ex vulputate lobortis lobortis, lectus velit finibus tortor, ac ornare mauris nisi sit amet orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna id neque iaculis vestibulum. Donec consectetur velit id metus varius, nec tincidunt mi vehicula. Donec faucibus diam at nunc consectetur volutpat in in risus. Duis semper diam nec orci viverra, eget vulputate turpis dictum. Morbi orci ex, ullamcorper sit amet ligula nec, finibus laoreet mi.'
                },
                {
                    name: 'Natural Historians',
                    pic: '/images/lamarck.png',
                    likes: '6',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium semper sapien, eu ullamcorper tortor. Nullam venenatis dolor a tincidunt tempus. Sed lacinia, ex vulputate lobortis lobortis, lectus velit finibus tortor, ac ornare mauris nisi sit amet orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna id neque iaculis vestibulum. Donec consectetur velit id metus varius, nec tincidunt mi vehicula. Donec faucibus diam at nunc consectetur volutpat in in risus. Duis semper diam nec orci viverra, eget vulputate turpis dictum. Morbi orci ex, ullamcorper sit amet ligula nec, finibus laoreet mi.'
                }
            ]
        },
        {
            question: "What does it eat, based on it's teeth?",
            id: 'q2',
            fnc: 'showQ2()',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: '2',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium semper sapien, eu ullamcorper tortor. Nullam venenatis dolor a tincidunt tempus. Sed lacinia, ex vulputate lobortis lobortis, lectus velit finibus tortor, ac ornare mauris nisi sit amet orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna id neque iaculis vestibulum. Donec consectetur velit id metus varius, nec tincidunt mi vehicula. Donec faucibus diam at nunc consectetur volutpat in in risus. Duis semper diam nec orci viverra, eget vulputate turpis dictum. Morbi orci ex, ullamcorper sit amet ligula nec, finibus laoreet mi.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: '1',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium semper sapien, eu ullamcorper tortor. Nullam venenatis dolor a tincidunt tempus. Sed lacinia, ex vulputate lobortis lobortis, lectus velit finibus tortor, ac ornare mauris nisi sit amet orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna id neque iaculis vestibulum. Donec consectetur velit id metus varius, nec tincidunt mi vehicula. Donec faucibus diam at nunc consectetur volutpat in in risus. Duis semper diam nec orci viverra, eget vulputate turpis dictum. Morbi orci ex, ullamcorper sit amet ligula nec, finibus laoreet mi.'
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: '3',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium semper sapien, eu ullamcorper tortor. Nullam venenatis dolor a tincidunt tempus. Sed lacinia, ex vulputate lobortis lobortis, lectus velit finibus tortor, ac ornare mauris nisi sit amet orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna id neque iaculis vestibulum. Donec consectetur velit id metus varius, nec tincidunt mi vehicula. Donec faucibus diam at nunc consectetur volutpat in in risus. Duis semper diam nec orci viverra, eget vulputate turpis dictum. Morbi orci ex, ullamcorper sit amet ligula nec, finibus laoreet mi.'
                },
                {
                    name: 'Natural Historians',
                    pic: '/images/lamarck.png',
                    likes: '6',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium semper sapien, eu ullamcorper tortor. Nullam venenatis dolor a tincidunt tempus. Sed lacinia, ex vulputate lobortis lobortis, lectus velit finibus tortor, ac ornare mauris nisi sit amet orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna id neque iaculis vestibulum. Donec consectetur velit id metus varius, nec tincidunt mi vehicula. Donec faucibus diam at nunc consectetur volutpat in in risus. Duis semper diam nec orci viverra, eget vulputate turpis dictum. Morbi orci ex, ullamcorper sit amet ligula nec, finibus laoreet mi.'
                }
            ]
        }
    ];

});
