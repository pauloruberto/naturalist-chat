var app = angular.module("bio", []);

app.controller("profile", function($scope) {
    $scope.people = [{
            name: 'Charles Darwin',
            pic: '/images/darwin.png',
            bio: ''
        },
        {
            name: 'Jean-Baptiste Lamarck',
            pic: '/images/lamarck.png',
            bio: ''
        },
        {
            name: 'Georges Cuvier',
            pic: '/images/cuvier.png',
            bio: "I am a French naturalist and zoologist, with former education in natural history, a subject encompassing biology, geology, oceanography, mineralogy, and paleontology. I work at the Musée National d'Histoire Naturelle (National Museum of Natural History) as the professor on animal anatomy. I study the form, structure, and characteristics of past and present organisms, to determine how form is related to their function. I also extract and study fossils, and re-create organisms from the fossils. I strongly believe that an all organs in an organism’s body are interdependent. Hence none of these separate parts can change their forms without a corresponding change in the other parts of the same animal, and consequently each of these parts, taken separately, indicates all the other parts to which it has belonged."
        },
        {
            name: 'John Ray',
            pic: '/images/ray.png',
            bio: 'My calling as a Parson and a man of God has allowed me an opportunity to show others the ways that the Glory of God has manifest itself in the living world and all the florae and beasts therein. In studying and examining the wondrous creations of our Highest Lord, we may marvel in His Glory and become that much closer to Him. While I am most practiced at the examination of the plant life that God has Created, I am happy to contribute my observations to this discussion.  My work in the examination of the natural world is, in essence, a Holy Work through which I am able to glimpse His Majestic countenance, for which I am ever grateful.'
        },
        {
            name: 'William Paley',
            pic: '/images/paley.png',
            bio: 'Studying philosophy and the teachings of God has allowed me to observe the natural world in a way that allows some understanding of God’s work. The very existence of all animals as complicated machinery show that there is a Creator for all the life on earth. How else would such marvelous Creature exist, rather than through an infinitely Wise God? My life’s work has been to make these arguments and show others that the evidence of God is in the multitudes of creatures he has placed upon this earth.'
        }
    ];
});
