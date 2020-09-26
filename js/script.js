$("button").on("click", function(event) {
    event.preventDefault();
    var txt = $("input").val();
    var div = $('<li id= "elem"></li>');
    div.append(`<p id=txt">${txt}</p>`);
    div.append('<button id="check" class="btn-success">check</button>');
    div.append('<button id="del" class="btn-danger">delete</button>');
    $("ul").append(div);
})

function fCheck(event) {
    event.preventDefault();
    if(event.target.id === "check") {
        $(this).toggleClass('stroked');
    }  
}
function fDelete(event) {
    event.preventDefault();
    if(event.target.id === "del") {
        $(this).remove();
    }
};

$("ul").on("click", "#elem", "#del", fDelete);
$("ul").on("click", "#elem", "#ckeck", fCheck);