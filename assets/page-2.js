var queryString = document.location.search;
searchVal = queryString.split('=')[0]
searchVal = searchVal.slice(1)
typeVal = queryString.split('=')[1]
var container = document.querySelector("#container")

console.log(searchVal)
console.log(typeVal)

fetchData = function(){
    if (typeVal === undefined){
        var searchUrl = ("https://www.loc.gov/search/?q="+searchVal+"&fo=json")
    } else {
        var searchUrl = ("https://www.loc.gov/"+typeVal+"/?q="+searchVal+"&fo=json")
    }
    console.log (searchUrl)
    fetch(searchUrl, {
        method: 'GET', //GET is the default.
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        displayResults(data.results)
    });
    
}
displayResults = function(results){
    for (i=0; i < results.length; i++){
        var result = document.createElement('a');
        result.classList = 'list-item flex-row justify-space-between align-center';
        result.setAttribute("href", results[i].url)
        result.textContent = results[i].url
        container.appendChild(result)
    }
}
fetchData()