var searchTerm = $("#searchTerm");
var recordNum = $("#recordNum");
var startYear = $("#startYear");
var endYear = $("#endYear");
var searchButton = $("#searchButton");
var clearButton = $("#clearButton");


searchButton.on("click", function(event) {
    event.preventDefault();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_year:["+startYear.val()
    +" TO "+endYear.val()+"]&q="+searchTerm.val()+"&api-key=Wl5xIfA3FYAYCY4GnsACGQUyyEtBK8op"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response.response);
        for (var i=0;i<recordNum.val();i++) {
            var article = response.response.docs[i];
            console.log(article);
            var headline = $("<h2>");
            headline.text(article.headline.main);
            var link = $("<a>");
            link.attr("href",article.web_url);
            link.attr("target","_blank");
            link.text("Link");
            var p = $("<p>");
            p.text(article.abstract);
            $("#topArticles").append(headline,link,p);
        }
    });
});

clearButton.on("click", function(event) {
    event.preventDefault();
    $("#topArticles").empty();
})