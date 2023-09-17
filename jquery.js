// const urlBacon = "https://baconipsum.com/api/?type=all-meat";

const urlBacon =
    "https://jsonplaceholder.typicode.com/todos/1";

var getAPI = function() {

    var obj = { method: "GET", url: urlBacon, dataType: "json" };
    var myfcDone = function(data) { console.log(data); };
    var myfcFail = function() { alert("no good") };
    $.ajax(obj).done(myfcDone).fail(myfcFail);

}
getAPI();

// const urlBacon =
//     "https://jsonplaceholder.typicode.com/todos/1";

// (function() {
//     $.ajax({

//         method: "GET",

//         url: urlBacon,

//         dataType: "json"

//     })

//     .done(function(data) {

//         console.log(data);

//     })

//     .fail(function() {

//         alert("no good");

//     });

// })()