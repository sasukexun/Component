require("./../css/file.styl");
require("./../../public/unit/jquery-1.3.1.js");

var a=require("./content.js");

$("body").append(a);

/*window.onload = function(){
    $.ajax({
        url: '/json/test.json',
        type: 'get',
        success: function(data) {
            console.log(data);
        }
    })
};*/
