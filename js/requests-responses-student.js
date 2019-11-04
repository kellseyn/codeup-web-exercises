$(document).ready(function(){
    "use strict";
    console.log("Intro to AJAX!");

    /*********************************************
     *              INTRO TO AJAX
     ******************************************** */

    /*
     * TO DO TOGETHER: Let's make our first AJAX request. Generate a new Hookbin
     * endpoint, then query it for a username...
     */
    // console.log($.ajax("https://hookb.in/Mqw3EXNwE0UlNMaZWjQW?username=Bob"));
    //
    //
    // /*
    //  * TO DO TOGETHER: For this next one, we'll send over some data. Add the
    //  * following JavaScript Object to your Hookbin AJAX request:
    //  */
    //
    // var person = {
    //     type: "POST",
    //     data: {
    //         first: "Jesse",
    //         last: "Pinkman",
    //         location: "unknown"
    //     }
    // };
    //
    // console.log($.ajax("https://hookb.in/Mqw3EXNwE0UlNMaZWjQW", person));
    //
    // /*
    //  * TO DO: Refactor the first example using a GET request object instead of
    //  * appending a query to the url.
    //  */
    // var bob = {
    //     type: "GET",
    //     data: {
    //         username: "Bob"
    //     }
    // };
    //
    // console.log($.ajax("https://hookb.in/Mqw3EXNwE0UlNMaZWjQW", bob));


    /*********************************************
     *              REQUESTS and RESPONSES
     ******************************************** */

    /*
     * TO DO TOGETHER: Now, let's see how we can use AJAX requests to communicate with an
     * API and get data back. Uncomment the line below.
     */

    $.ajax("https://pokeapi.co/api/v2/pokemon").done(function(data){
        console.log(data);
    });

    /*
     * TO DO: Look up the Star Wars API and make a similar request that would
     * return a list of all Star Wars films.
     */
    var starWarsFilms = $.ajax("https://swapi.co/api/films/");

    starWarsFilms.done(function (data) {
        console.log(data)
    }).fail(function (jqXhr, status) {
        console.log("Something wrong with your request");
    }).always(function () {
       console.log("Turning on phaser beam to lethal ...loading");
    });
    /*
     * That's fine and dandy, but what if we have a local JSON file and
     * want to request data from that? We can! The URL will be the path to
     * the JSON file.
     *
     * TO DO TOGETHER: Let's make a request to the books inventory we saved
      * previously.
     */
    var myBooks = $.ajax("data/books.json");

        myBooks.done(function (data) {
        console.log(data)
        });

        myBooks.fail(function (status) {
            console.log("Check your file path.")
        });

        myBooks.always(function () {
            console.log("Looking for book...")
        });

    /*
     * TO DO TOGETHER: What if we want to display a message if this AJAX request
     * fails?
     */

    /*
     * TO DO TOGETHER: How about a function that always runs whether the request
     * fails or not?
     */

    /*
     * TO DO: Refactor your Star Wars API request to log a message that says
     * "Something wrong with your request..." if it fails.
     */

    /*
     * TO DO: Refactor your Star Wars API request to log a message that says
     * "...loading" whether the request fails or not.
     */


    /*
     * TO DO TOGETHER: Create a Star Wars API request that queries for "A
     * New Hope" and store this request in a variable.
     *
     * Take a look at the object that is being returned. Write a console log
      * that displays the director of the film.
     */
    var myMovie = $.ajax("https://swapi.co/api/films", {
        type: 'GET',
        data: {
            "search": "A New Hope"
        }
    });

    myMovie.done(function (data) {
        console.log("The director of this movie is: " + data.results[0].director);
    });
    /*
     * TO DO: Create a new variable that makes a similar request. Search for
     * "The Force Awakens" and console log its release date.
     */
    var otherMovie = $.ajax("https://swapi.co/api/films", {
       type: 'GET',
       data: {
           "search": "The Force Awakens"
       }
    });

    otherMovie.done(function (data) {
        console.log("This movie came out in: " + data.results[0].release_date);
    });
    /*
     * TO DO: Make a request to books.json. Return the author of "The
     * Canterbury Tales."
     */
    var myBook = $.ajax("data/books.json");

   myBook.done(function (data) {
       console.log("The author is: " + data[17].author);
   });



    /*********************************************
     *              GET and POST SHORTHAND
     ******************************************** */

    /*
     * TO DO TOGETHER: Let's take a look at our AJAX requests so far and see
     * how we can refactor them with the GET and POST shorthand.
     *
     * Remember, this isn't necessary. It's up to you to decide which
     * syntax to use. (: At the end of the day, what we are doing is making
     * a request to a server!
     */

    /*
     * TO DO TOGETHER: There's some additional refactoring we can do. We can
     * break up our callback methods on an AJAX request.
     *
     * We can also declare named functions to pass in to these methods.
     */

    /*********************************************
     *              AJAX and HTML
     ******************************************** */

    /*
     * TO DO TOGETHER: Make a request to books.json and append all book
     * titles to your html. You may need to create a div and assign a
     * class/id to target it.
     */


        function generateBooks(){
            var requestBooks = $.ajax("data/books.json");

            requestBooks.done(function (data) {
                console.log(data);
                $.each(data,function (index, book) {
                    var content = "<h2>";
                    content += book.title;
                    content += "</h2>";
                    content += "<h4>";
                    content += book.author;
                    content += "</h4>";

                    console.log(book.title);
                    $("#main").append(content);
                });
            });

            requestBooks.fail(function (data) {
                console.log("something went wrong!");
            });
        }

        generateBooks();
    /*
     * TO DO: Add your favorite book to the end of books.json.
     */

    /*
     * Bonus: Create a button the refreshes the contents of your html
     * without refreshing the page.
     */
    $("button").click(function (e) {
        $('#main').html("");
       generateBooks();
    });
});