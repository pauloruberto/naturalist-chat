var app = angular.module("questions", []);

app.controller("answers", function($scope) {

    $scope.showSelected = function(passedEvent) {
        var requested = (passedEvent.target.attributes.id.value).replace(/\s/g, '');

        document.getElementById("question").innerHTML = passedEvent.target.innerHTML;

        $scope.q1 = false;
        $scope.q2 = false;
        $scope.q3 = false;
        $scope.q4 = false;
        $scope.q5 = false;
        $scope.q6 = false;
        $scope.q7 = false;
        $scope.q8 = false;

        if (requested.valueOf() == "q1") {
            $scope.q1 = true;
        } else if (requested.valueOf() == "q2") {
            $scope.q2 = true;
        } else if (requested.valueOf() == "q3") {
            $scope.q3 = true;
        } else if (requested.valueOf() == "q4") {
            $scope.q4 = true;
        } else if (requested.valueOf() == "q5") {
            $scope.q5 = true;
        } else if (requested.valueOf() == "q6") {
            $scope.q6 = true;
        } else if (requested.valueOf() == "q7") {
            $scope.q7 = true;
        } else if (requested.valueOf() == "q8") {
            $scope.q8 = true;
        }
    };

    $scope.quesans = [{
            question: 'Why is the seal covered in fur?',
            id: 'q1',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: 'The northern fur seal is covered in a coat of fur due to natural selection. Over time, seals in that area who had a coat of fur outperformed those who did not, resulting in a higher fitness. Any organism with a greater chance of survival, will have a greater chance for reproduction. This increased the number of offspring from seals with a coat of fur, spread throughout the population over time, resulting in the fur covered seal that we see today.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: ''
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: 'Northern fur seals are endotherms that maintain an internal body temperature of about 97.7-99.5⁰F irrespective of the temperature of their surroundings. In colder temperatures, the fur can trap air and keep them warm. The fur is also water-resistant so it regulates body temperature even under-water. This is important since the northern fur seals find their prey in water. Therefore, function determines form, as the fur aids in homeostasis so the seal can carry out its functions such as catching prey.'
                },
                {
                    name: 'Natural Theologists',
                    pic: '/images/paley.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: ''
                }
            ]
        },
        {
            question: "Why does it live in the water, yet breathe air?",
            id: 'q2',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: 'It’s ancestor were once land mammals, but over a long period of time, it became the fur seal that we see today. The ancestors that possessed traits that allowed them to venture into the water to locate resources, such as food, performed better than those who did not. Over time, these water venturing organisms reproduced more than their competitors, preserving the favourable traits. Due to the large accumulation of small changes over time, this ancestor diverged into its own species. It had become an organism such that it performed best when living in the water, but still breathing air like its ancestors once did.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: ''
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: 'Northern fur seals need air to breath. When in water, they can hold their breath for a very long time. Also, since their function is to catch prey in water, and live in water for a long time, their form is organised in a way to be able to carry out this function. The seals have slits for nostrils that close under water. And their mouth and larynx is specialized such that they can eat underwater without swallowing any sea water.'
                },
                {
                    name: 'Natural Theologists',
                    pic: '/images/paley.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: ''
                }
            ]
        }, {
            question: "How is the seal related to other marine life?",
            id: 'q3',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: 'All species share a common descent. The marine life that we see today is the result of descent with modification, though natural selection. The only direct relationship that the northern fur seal has with the marine life around it, is the environment that they share. Natural selection occurred on all marine life as a response to this environment. Each organism has filled a niche where it was best able to survive and be prosperous.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: ''
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: "The northern fur seal is its own species, it is not biologically related to any other species in the oceans. Also, the absence of transitional forms in fossil record confirm that northern fur seals have not evolved from any previous species. The only way they are related to other marine life is such that they share the same habitat, and are connected through food chains."
                },
                {
                    name: 'Natural Theologists',
                    pic: '/images/paley.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: ''
                }
            ]
        },
        {
            question: "What can we tell about what it eats from its teeth?",
            id: 'q4',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: 'A more reasonable question would be; what can we tell about it’s teeth based on what it eats? The fur seal’s teeth have been formed as a response to the food available, as opposed to it selecting a food source based on its teeth. Over time, seals with teeth best adapted to consuming the available food were those who were most likely to survive and reproduce. If their food source were to change in the future, individuals with teeth best suited at consuming this new food source would perform better. Over time, it is likely that the entire population would move towards this new tooth shape as a response to the change.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: ''
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: 'The northern fur seal is an organised being with its own whole, unique, closed system in which all parts correspond mutually, to produce a function. The seals have long, sharp, conical, single-rooted teeth, important for cutting, tearing and dividing fish flesh. The sharp teeth provide evidence that the seals are carnivores, getting their energy from eating meat.'
                },
                {
                    name: 'Natural Theologists',
                    pic: '/images/paley.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: ''
                }
            ]
        },
        {
            question: "How is it related to other types of seals? How does it differ?",
            id: 'q5',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: 'The fur seal is related to other types of seals by a common ancestor. At some point in the distant past, diverse groups arose from, resulting in the different forms. Each type of seal has it’s own distinct place in nature — each perfectly adapted for the environment that it inhabits. Their differences can be connected back to the environment, food, and resources available to each species of seal.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: ''
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: 'They are not related to other species of seas, past or present. Each species breed true to their type, and are not related. The northern fur seals also have not evolved from any past species. Paleontological evidence shows that successive layers of geological strata have distinctive fossil types. No evidence for evolution is present in fossils.'
                },
                {
                    name: 'Natural Theologists',
                    pic: '/images/paley.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: ''
                }
            ]
        },
        {
            question: "What is the seals' competition in nature?",
            id: 'q6',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: 'The fur seals, like other species, live in constant competition. Living space and food are finite resources, and only those who are optimized at obtaining those resources will overcome the competition. Each generation competes among themselves to survive, and reproduce. Due to this competition, the overall population will pass along the favourable traits that led to their victory among the interspecies competition.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: ''
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: 'The northern fur seals are carnivores, that prey on fish (for example hake, herring, pollock, capelin), squid, crustaceans and krill. They have to compete with other marine animals in oceans that have the same diet. These animals include sea lions, sharks, whales and other fish that are bigger in size than the northern fur seals. The northern fur seals also compete against each other to find mates and breeding spots to reproduce.'
                },
                {
                    name: 'Natural Theologists',
                    pic: '/images/paley.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: ''
                }
            ]
        },
        {
            question: "Why does it live in the area that it does?",
            id: 'q7',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: 'The fur seal did not seek out its environment as a desire to find somewhere that it would be successful. The environment is what shaped the fur seal into the organism that we see today. It is simply an organism that is best adapted to the environment which it lives in, in order to fill a niche in nature. If it were to be living elsewhere, it would either die off, or the population would alter over time through natural selection, as a response to the change.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: ''
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: 'Callorhinus ursinus are found along the Pacific Ocean, the Bering Sea, the Sea of Okhotsk. The form of northern fur seals is specialised to survive in these locations. The oceans/seas provide food sources and prey that they feed on. The land nearby serves as breeding sites. The seals are endothermic, and these locations are characterised by the optimal climate needed for the seal’s survival. If the seals were found elsewhere, they would have difficulty maintaining their body’s internal requirement, and fulfilling their food requirements, leading to a decrease in their number.'
                },
                {
                    name: 'Natural Theologists',
                    pic: '/images/paley.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: ''
                }
            ]
        },
        {
            question: "Why are there differences within the fur seal population?",
            id: 'q8',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: 'Individual variation is always present within any population, independent characteristics are never exactly alike. Even though an organism is perfectly adapted for it’s environment, there is always some variation present. This is the driving force of natural selection. If every individual was identical, then it would be impossible for the population as a whole to ever change.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: ''
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: 'Sexual dimorphism exists when comparing male and female northern fur seals. The males are longer, have heavier body mass, longer and wider teeth, and thicker neck than females. These characteristics help males compete with other males to attract mates, and protect breeding grounds. Females do not perform this function and therefore don’t need this morphology.'
                },
                {
                    name: 'Natural Theologists',
                    pic: '/images/paley.png',
                    likes: Math.floor((Math.random() * 10) + 1),
                    answer: ''
                }
            ]
        }
    ];

});
