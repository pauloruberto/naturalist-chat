var app = angular.module("bio", []);

app.controller("profile", function($scope) {
    $scope.people = [{
            name: 'Charles Darwin',
            pic: '/images/darwin.png',
            bio: 'I am an English naturalist, geologist, and biologist. I believe that all of life has descended from common ancestors, resulting in the species that we see today. In 1831, I embarked on a five-year journey around the world aboard the HMS Beagle. By studying species across the globe, I was able to formulate my hypothesis on the process of natural selection. Natural selection is the process where organisms become best adapted to their environment over time, allowing them to survive and increase production of offspring.'
        },
        {
            name: 'Jean-Baptiste Lamarck',
            pic: '/images/lamarck.png',
            bio: 'My name is Jean-Baptiste Pierre Antoine de Monet, Chevalier de Lamarck, often known simply as Lamarck, and I am a French naturalist. I was born in Northern France and I am from a large impoverished aristocratic family. I served in the French army for a short time and eventually obtained a position at the Jardin des Plantes in Paris, and later at the Muséum national d’Histoire naturelle, where I became a professor of zoology. I am best known for my Theory of Inheritance of Acquired Characteristics, and I am often credited with making the first big advancement towards modern evolutionary theory with my proposed mechanism by which the gradual change of species can take place. I proposed that acquired characteristics are inheritable, and posited that life starts out simple and becomes more complex. In my Philosophie Zoologique, I describe a two part mechanism, now referred to as Lamarckism, which talks about how change resulted from use and disuse of certain features, which was then passed down through generations. Although I did not receive much recognition in my time, in the modern day, my theories are considered a major step forward.'
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
