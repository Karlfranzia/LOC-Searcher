var userFormEl = document.querySelector('#user-form');
var search = document.querySelector("#search")
var searchType = document.querySelector("#searchType")
var formSubmitHandler = function (event){
    event.preventDefault();

    var searchVal = search.value.trim()
    if (searchType.value == "All"){
        typeVal = ""
    }else{
        var typeVal = ("=" + searchType.value)  
    }
    
    
    document.location.replace("./page-2.html?"+searchVal+typeVal)
}






userFormEl.addEventListener('submit', formSubmitHandler);