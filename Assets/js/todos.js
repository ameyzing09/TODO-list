//Add strike through for complete task
$("ul").on('click','li',function(){
    $(this).toggleClass("completed")
});

//Delete task
$("ul").on('click','span',function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
});

//Add new task
$("input[type='text']").keypress(function(event){
    if(event.which === 13)
    {
        var todoNew = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoNew+"</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});