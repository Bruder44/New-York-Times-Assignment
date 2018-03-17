$(document).ready(function () {
    var userInput = "George Washington";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    queryURL += $.param({
        'api-key': "904ae53976394121b1e86315b28ee3f7",
        'fq': 'persons:(' + userInput + ')',
        'begin_date': "20180101"})
        console.log(queryURL);
 
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(response) {
            console.log(response)
        })
 })