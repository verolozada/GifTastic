
// array of topics: sitcoms

$(document).ready(function () {

    let topics = ["Friends", "The Big Bang Theory", "How I Met Your Mother", "Seinfeld", "The Office", "Will and Grace", "The Fresh Prince of Bel-Air", "Full House", "Two and a Half Men", "Frasier", "30 Rock", "Modern Family"];

    function buttons() {
        // empty the div in case the user wants to add a new sitcom to the array
        $("#titles").empty();

        for (let i = 0; i < topics.length; i++) {
            const button = $("<button>")
            button.addClass("btn")
            button.attr("data-name", topics[i])
            button.text(topics[i]);
            $("#titles").append(button);
        }
    };

    function generator() {

        $("#titles").on("click", ".btn", function () {
            $("#gifDiv").empty();
            let userChoice = $(this).attr("data-name");
            console.log(userChoice);
            // URL from GIPHY
            let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                userChoice + "&api_key=SbCSA3fSSOWvUtm8kB82oS0mjyKwICEG&limit=10";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                const result = response.data;

                // show the 10 gifs
                for (let j = 0; j < result.length; j++) {
                    // new div to hold image
                    const newDiv = $("<div>")
                    newDiv.addClass("newDiv");

                    // gif grabbed
                    let image = $("<img>")
                    image.attr("src", result[j].images.fixed_width_still.url);
                    image.attr("data-state", "still")
                    image.addClass("gif-" + j);

                    // rating 
                    let rating = $("<h6>")
                    rating.text("Rating: " + result[j].rating);
                    rating.addClass("rating");

                    newDiv.append(image);
                    newDiv.append(rating);
                    $("#gifDiv").append(newDiv);

                    // animate gifs
                    function animate() {
                        $("#gifDiv").on("click", ".gif-" + j, function () {
                        // to see if the image is paused or not. 
                        let state = $(this).attr("data-state");
                        // in case of being paused, unpause it
                        if (state === "still") {
                            image.attr("src", result[j].images.fixed_width.url) //animated image
                            image.attr("data-state", "animate");
                        } 
                        // in case of being animated, pause it
                        else {
                            image.attr("src",result[j].images.fixed_width_still.url) //still image
                            image.attr("data-state", "still");
                        }
                        });
                    }
                    animate();
                }
            });
        })
    }



    // the user can add a new movie 
    $("#add-sitcom").on("click", function (event) {
        //allows to add a new sitcom with the enter key
        event.preventDefault();

        //grab value from the user
        var newSitcom = $("#sitcom-input").val().trim();
        topics.push(newSitcom);
        buttons();
    })

    buttons();
    generator();

});

