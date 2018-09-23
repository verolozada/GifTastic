
// array of topics: sitcoms

$(document).ready(function () {

    let topics = ["Friends", "The Big Bang Theory", "How I Met Your Mother", "Seinfeld", "The Office", "Will and Grace", "The Fresh Prince of Bel-Air", "Full House", "Two and a Half Men", "Frasier", "30 Rock", "Modern Family"];
    //$("#titles").append(topics);
    function buttons() {
        // empty the div in case the user wants to add a new sitcom to the array
        $("#titles").empty();
        for (var i = 0; i < topics.length; i++) {
            const button = $("<button>")
            button.attr("data-name", topics[i])
            button.addClass("btn")
            button.text(topics[i]);
            $("#titles").append(button);
            // console.log(topics[i]);
        }

    };
    buttons();

    function generator() {
        $("#titles").on("click", ".btn", function () {
            let userChoice = $(this).attr("data-name");
            console.log(userChoice);
        })
    }
    generator();

    // the user can add a new movie 
    function newSit() {
        let NewSitcom = $("#new-movie").val().trim();
        topics.push(sitcom)
    
        buttons();
    }
    
    // const myKey = "SbCSA3fSSOWvUtm8kB82oS0mjyKwICEG";
    
    
});

