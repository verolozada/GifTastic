
// array of topics: sitcoms

let topics = ["Friends" , "The Big Bang Theory", "How I Met Your Mother", "Seinfeld", "The Office", "Will and Grace", "The Fresh Prince of Bel-Air", "Full House", "Two and a Half Men", "Frasier", "30 Rock", "Modern Family"];
console.log(topics);

$("#topics").append(topics);

function buttons() {
    // empty the div in case the user wants to add a new sitcom to the array
    $("#titles").empty();
    
    for (var i = 0; topics.length; i++) {
    const button = $("<button>")
    button.attr("data-name", topics[i])
    button.addClass("buttons")
    button.text(topics[i]);
    $("#titles").append(button);
    }
};

buttons();




// the user can add a new movie 
// function newSit (){
// let sitcom = $("#new-movie").val().trim();
// topics.push(sitcom)
// }

// const myKey = "SbCSA3fSSOWvUtm8kB82oS0mjyKwICEG";


