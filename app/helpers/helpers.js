import axios from 'axios'; 

var singleTitle = "http://www.omdbapi.com/?t="

var multiTitle = "http://www.omdbapi.com/?s="

function singleSearch(title, year){

    let endpoint = singleTitle + title + "&y=" + year;

    return axios.get(endpoint)
        .then(function(response){
            return response;
        })
        .catch(function(err){
            console.log("err with singlesearch func");
        });
}

function multiSearch(movieTitle){
    let endpoint = multiTitle + movieTitle;

    return axios.get(endpoint)
        .then(function(response){
            return response.data.Search
        })
        .catch(function(response){
            console.log("err with multisearc func");
        });
}

module.exports = {
    singleSearch : singleSearch,
    multiSearch : multiSearch
}