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
                    likes: Math.floor((Math.random() * 200) + 125),
                    answer: 'The northern fur seal is covered in a coat of fur due to natural selection. Over time, seals in that area who had a coat of fur outperformed those who did not, resulting in a higher fitness. Any organism with a greater chance of survival, will have a greater chance for reproduction. This increased the number of offspring from seals with a coat of fur, spread throughout the population over time, resulting in the fur covered seal that we see today.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: "The northern fur seal’s pelage or fur is thick and luxuriant, with a dense underfur in a creamy colour. The underfur is obscured by the longer guard hairs, although it is partially visible when the animals are wet. This can be attributed to my law of inheritance of acquired characteristics. The seal needs this thick fur so it can trap air and help keep it warm. Over generations, this characteristic has proved useful in allowing the seal to thrive in its environment, and thus, has been passed on from parent to offspring. Furthermore, species are well adapted to their environment. As the seals live in cold environments, they need their fur to be warm enough to keep them insulated. This can be connected to the idea that there is a nervous fluid driving changes in the organism, which over time, allows these changes to be inherited by the next generation and produce slow adaptation to the environment. Essentially, the fur is preserved by reproduction to new individuals which arise, provided that the acquired modifications are common to both sexes, or at least to the individuals which produce the young."
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'Northern fur seals are endotherms that maintain an internal body temperature of about 97.7-99.5⁰F irrespective of the temperature of their surroundings. In colder temperatures, the fur can trap air and keep them warm. The fur is also water-resistant so it regulates body temperature even under-water. This is important since the northern fur seals find their prey in water. Therefore, function determines form, as the fur aids in homeostasis so the seal can carry out its functions such as catching prey.'
                },
                {
                    name: 'John Ray',
                    pic: '/images/ray.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'Very simply, any question of why an animal has a certain characteristic is because God saw fit to Design this animal in this way. The fur of this animal is an expression of the Capacity of God, who has seen fit to use this instrument to the Effect of warmth for the animal. As God has placed this animal in an artic habitat, so as to shew the Power to populate all the regions of this bountiful world with his Creations, He has seen it fit to Design this Seal to have fur so as to enable it to live in the habitat. The characteristics that God gives his different Creations are to help their bodily machines live fruitfully and productively in their homes.'
                }
            ]
        },
        {
            question: "Why does it live in the water, yet breathe air?",
            id: 'q2',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: Math.floor((Math.random() * 200) + 125),
                    answer: 'It’s ancestor were once land mammals, but over a long period of time, it became the fur seal that we see today. The ancestors that possessed traits that allowed them to venture into the water to locate resources, such as food, performed better than those who did not. Over time, these water venturing organisms reproduced more than their competitors, preserving the favourable traits. Due to the large accumulation of small changes over time, this ancestor diverged into its own species. It had become an organism such that it performed best when living in the water, but still breathing air like its ancestors once did.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: "The seal is adapted to the environment it lives in, and has certain characteristics to allow it to function. As a mammal, the seal has lungs that require breathing air to replenish the oxygen. The seal is both a sea and land animal — living in both the ocean as well as on a cool patch of ice or beach. The seal has a powerful sleek body which is encased in blubber to keep it warm. They are strong and flexible, which allow them to tread through the waves and navigate rocky shores. The frequent use of its tail and organs strengthen, which allowed them to be passed on to offspring. The seal can be looked at as an organism which grew in complexity and composition of organization over time. The seal would have originated from spontaneous generation of simple living organisms through action on physical matter by a material life force. Once the living organism was formed, the movements of fluids in living organisms naturally drove them to evolve toward ever greater levels of complexity, eventually producing the seal in its current state."
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'Northern fur seals need air to breath. When in water, they can hold their breath for a very long time. Also, since their function is to catch prey in water, and live in water for a long time, their form is organised in a way to be able to carry out this function. The seals have slits for nostrils that close under water. And their mouth and larynx is specialized such that they can eat underwater without swallowing any sea water.'
                },
                {
                    name: 'William Paley',
                    pic: '/images/paley.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'The way that the seal lives in the water yet still breathes the air shows that it is indeed an ingenious mechanism. God has created this creature to live between the different milieus which shows the most wise design. While the seal swims, it holds it’s breath, which it is able to do at length, showing a wondrous mechanism that begs the question of how this animal would be able to do such a thing. We must see from this ingenious animal that behind it’s existence is a most ingenious Creator who has fashioned this animal for it’s life between the air and the water.'
                }
            ]
        }, {
            question: "How is the seal related to other marine life?",
            id: 'q3',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: Math.floor((Math.random() * 200) + 125),
                    answer: 'All species share a common descent. The marine life that we see today is the result of descent with modification, though natural selection. The only direct relationship that the northern fur seal has with the marine life around it, is the environment that they share. Natural selection occurred on all marine life as a response to this environment. Each organism has filled a niche where it was best able to survive and be prosperous.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: "Just as all organisms do, the Northern fur seal species emerged through spontaneous generation of simple living organisms through action on physical matter by a material life force. All living things do not come from a common ancestor, but rather along with spontaneous generation there is an innate force, or a nervous fluid, which drives the species to become more complex. Organisms move in a predictable way based on the fundamental physical principles of alchemy. All life is organized in a vertical chain, with gradation between the lowest forms and the highest forms of life, thus demonstrating a path to progressive developments in nature. There is a tendency for organisms to become more complex and move up the “ladder of progress”, and spontaneous generation is ongoing, with simple organisms being transmuted over time to become more complex. Underlying this tendency to progression was the principle that Creation is in a constant state of advancement. It is an innate quality of nature that organisms constantly 'improve' by successive generation, too slowly to be perceived but observable in the fossil record. The Northern fur seal was created, and as it evolved, it adapted to the environment. Changes in the environment caused changes in the needs of organisms living in that environment, which in turn causes changes in their behaviour."
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: "The northern fur seal is its own species, it is not biologically related to any other species in the oceans. Also, the absence of transitional forms in fossil record confirm that northern fur seals have not evolved from any previous species. The only way they are related to other marine life is such that they share the same habitat, and are connected through food chains."
                },
                {
                    name: 'William Paley',
                    pic: '/images/paley.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'As John Ray has stated with the differences in the different types of seal, so God has created the different creatures that live within the northern oceans. These animals are related through God and they have each been created to live with each other in an equilibrium that has always existed, since creation. Their descendants will relate to each other in the same way, as was and is the intention of God.'
                }
            ]
        },
        {
            question: "What can we tell about what it eats from its teeth?",
            id: 'q4',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: Math.floor((Math.random() * 200) + 125),
                    answer: 'A more reasonable question would be; what can we tell about it’s teeth based on what it eats? The fur seal’s teeth have been formed as a response to the food available, as opposed to it selecting a food source based on its teeth. Over time, seals with teeth best adapted to consuming the available food were those who were most likely to survive and reproduce. If their food source were to change in the future, individuals with teeth best suited at consuming this new food source would perform better. Over time, it is likely that the entire population would move towards this new tooth shape as a response to the change.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'The northern fur seal have haplodont teeth, which are sharp, conical, and mostly single-rooted, something common in carnivorous marine mammals. The upper canines are prominent, which tells us that the seal must eat fish, as it would use the teeth to tear the flesh apart. The shape and sharpness of these teeth can be attributed to my First Law, which explains that frequent and sustained use of an organ will strengthen and develop it in proposition to the duration of the use, just as the permanent disuse of any organ weakens and deteriorates it, and progressively diminishes its functional capacity, until it finally disappears. The seal is adapted to its environment, and because it eats depending on local availability, it must design and adjust its eating habits and organs around that. The seal’s teeth may have adapted to suit the environment that it lives in, and because this change proved useful, the characteristic was passed on to its offspring.'
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'The northern fur seal is an organised being with its own whole, unique, closed system in which all parts correspond mutually, to produce a function. The seals have long, sharp, conical, single-rooted teeth, important for cutting, tearing and dividing fish flesh. The sharp teeth provide evidence that the seals are carnivores, getting their energy from eating meat.'
                },
                {
                    name: 'John Ray',
                    pic: '/images/ray.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'The animal Machines that have been Designed and Created for this world have been fashioned to survive in their environments for as long as God allows, and to produce offspring of the same species who will live after their parents have past away. The different characteristics of animals have been Designed in order to fit the purpose that God has assigned these Creatures. As such, the teeth of this animal have been designed in order for it to feed itself with what God has intended. We can see that it is a carnivore with it’s sharp teeth, which is how God has Designed this animal to be.'
                }
            ]
        },
        {
            question: "How is it related to other types of seals? How does it differ?",
            id: 'q5',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: Math.floor((Math.random() * 200) + 125),
                    answer: 'The fur seal is related to other types of seals by a common ancestor. At some point in the distant past, diverse groups arose from, resulting in the different forms. Each type of seal has it’s own distinct place in nature — each perfectly adapted for the environment that it inhabits. Their differences can be connected back to the environment, food, and resources available to each species of seal.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: "There are three types of facilities of seals: eared seals (the family that the northern fur seal is in), earless seals, and walruses. Fur seals are known for their thick fur coats, which are waterproof and mostly windproof. The coat has two layers — a coarse outer layer of guard hair and a velvety underfur. Because they have fur, they have less blubber than other seals, which makes them very agile in the water. This trait can be explained by the First Law — because the seals needed less and less fur, they eventually adapted to their environment so that the fur was perfectly suited to their daily activities. As a result, this change was passed on from offspring and showed up in succeeding generations. Fur seals are well adapted to strolling across land and ice on their muscular tail and flippers, but less adapted to a watery lifestyle. Because they spend a lot of time on land and ice, the strengthened use of their tail and flippers allowed them to develop and keep this useful characteristic."
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'They are not related to other species of seals, past or present. Each species breed true to their type, and are not related. The northern fur seals also have not evolved from any past species. Paleontological evidence shows that successive layers of geological strata have distinctive fossil types. No evidence for evolution is present in fossils.'
                },
                {
                    name: 'John Ray',
                    pic: '/images/ray.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'All species, including the Northern Fur Seal, were created by God. They differ only because of His expression of his wisdom. God saw fit to divide his creations into groups that can reproduce their own kind and this is what we call species. These different Machines that have been created by such omnipotent wisdom shew the existence of the Highest form of Rational, Wise Agent, our Creator, God the Almighty.'
                }
            ]
        },
        {
            question: "What is the seals' competition in nature?",
            id: 'q6',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: Math.floor((Math.random() * 200) + 125),
                    answer: 'The fur seals, like other species, live in constant competition. Living space and food are finite resources, and only those who are optimized at obtaining those resources will overcome the competition. Each generation competes among themselves to survive, and reproduce. Due to this competition, the overall population will pass along the favourable traits that led to their victory among the interspecies competition.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'The Northern fur seal is mostly preyed upon by sharks and killer whales. Occasional predation on live seal pups by Arctic foxes has also been observed. Consequently, pup carcasses are important in enriching the diet of many scavengers, in particular gulls and Arctic foxes. The sharks, killer whales, and Arctic foxes all have inherited acquired characteristics that allow them the diet they have. The more frequent and continuous use of their canine teeth, which they use to tear apart the flesh of seals, gradually strengthens, develops and enlarges that organ. Because of this, this characteristic is passed down from generation to generation.'
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'The northern fur seals are carnivores, that prey on fish (for example hake, herring, pollock, capelin), squid, crustaceans and krill. They have to compete with other marine animals in oceans that have the same diet. These animals include sea lions, sharks, whales and other fish that are bigger in size than the northern fur seals. The northern fur seals also compete against each other to find mates and breeding spots to reproduce.'
                },
                {
                    name: 'William Paley',
                    pic: '/images/paley.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'The seal does not truly compete with any other animal as God has given the seal it’s own habitat and way of feeding itself. Part of the design of God is to create animals that will live in harmony with their surroundings and other animals so that they will always exist, as they are the species that God has created. In this sense, there is no ongoing competition in nature, rather there is a balance between different species that occupy the same areas.'
                }
            ]
        },
        {
            question: "Why does it live in the area that it does?",
            id: 'q7',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: Math.floor((Math.random() * 200) + 125),
                    answer: 'The fur seal did not seek out its environment as a desire to find somewhere that it would be successful. The environment is what shaped the fur seal into the organism that we see today. It is simply an organism that is best adapted to the environment which it lives in, in order to fill a niche in nature. If it were to be living elsewhere, it would either die off, or the population would alter over time through natural selection, as a response to the change.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'The northern fur seal is an eared seal found along the north Pacific Ocean, the Bering Sea, and the Sea of Okhotsk. It’s southernmost reach is from the southern tip of Japan to the southern tip of the Baja California peninsula. As estimated 1.1 million northern fur seals live in this range, of which half breed on the Pribilof Islands in the east Bering Sea. During the winter, the seals move southward, regularly entering Japanese waters and moving along the central and eastern Pacific to British Columbia, Canada and as far south as Baja California. The seals migrate due to breeding, climate, and a moving food source. Because the animals must move to find food, they can adapt to similar environments. These changes, as well as characteristics of the animal, are inherited by each generation and allow the seals continued life.'
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'Callorhinus ursinus are found along the Pacific Ocean, the Bering Sea, the Sea of Okhotsk. The form of northern fur seals is specialised to survive in these locations. The oceans/seas provide food sources and prey that they feed on. The land nearby serves as breeding sites. The seals are endothermic, and these locations are characterised by the optimal climate needed for the seal’s survival. If the seals were found elsewhere, they would have difficulty maintaining their body’s internal requirement, and fulfilling their food requirements, leading to a decrease in their number.'
                },
                {
                    name: 'William Paley',
                    pic: '/images/paley.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'The mechanism that God has made as this seal is suited to it’s intended climate. God has created the Northern fur seal to live in the cold oceans and as such has designed this seal to be at home in the cold water of the northern seas. The fur and the layers of fat to protect the animal from the cold are the ways that God has fashioned this creature to be able to live where He has placed it.'
                }
            ]
        },
        {
            question: "Why are there differences within the fur seal population?",
            id: 'q8',
            responses: [{
                    name: 'Charles Darwin',
                    pic: '/images/darwin.png',
                    likes: Math.floor((Math.random() * 200) + 125),
                    answer: 'Individual variation is always present within any population, independent characteristics are never exactly alike. Even though an organism is perfectly adapted for it’s environment, there is always some variation present. This is the driving force of natural selection. If every individual was identical, then it would be impossible for the population as a whole to ever change.'
                },
                {
                    name: 'Jean-Baptiste Lamarck',
                    pic: '/images/lamarck.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'Northern fur seals have extreme sexual dimorphism. Males are 30-40% longer and almost 5 times as heavy as females. Makes are stocky in build and have thick and wide necks, while females are moderate in build, neck, and chest size. Adult females have more complex and variable coloration than adult males, often dark silver-gray to charcoal, where as males are medium gray to black, or reddish to dark brown all over. These differences can be due to inheritance by parents.'
                },
                {
                    name: 'Georges Cuvier',
                    pic: '/images/cuvier.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'Sexual dimorphism exists when comparing male and female northern fur seals. The males are longer, have heavier body mass, longer and wider teeth, and thicker neck than females. These characteristics help males compete with other males to attract mates, and protect breeding grounds. Females do not perform this function and therefore don’t need this morphology.'
                },
                {
                    name: 'John Ray',
                    pic: '/images/ray.png',
                    likes: Math.floor((Math.random() * 150) + 1),
                    answer: 'As God has shewn that His Omnipotent Wisdom can only be expressed in part in each of his Creations, He has created the many varieties of seal and multitudes of other animals to express this Wisdom. The many varieties of seal exist because these Creations, and many others, are examples of how vast and infinitely subtle his Wisdom is, as we see in the different distinctions and specifications of the different seals. It is for us to examine the Forms of these Creations to become closer to the Holiness of God.'
                }
            ]
        }
    ];

});
