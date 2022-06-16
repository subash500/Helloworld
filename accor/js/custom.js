

$(document).ready(function($) {
        
    $("#bookSearch").validate({
    rules: {
        firstName:"required"  ,
        lastName: "required",                
        producercode: "required",
        OrganisationName: "required"
     
    },
    messages: {
        firstName: "Please enter your Name",                   
        lastName:"please enter your last Name",
        producercode: "Please enter your producer code ",
        OrganisationName: "This field is required"
    },
    submitHandler: function(form) {
        
        var searchItem={
            "firstname":$("#firstname").val(),
           "lastname":$("#lastname").val(),
            "producercode":$("#producercode").val(),
            "organi":$("#organistaion").val(),
        }
        $("#book-list").append("<span class=bgcolor>" + searchItem.firstname +"</span>" + "<span  class=bgcolor>" + searchItem.lastname +"</span>"
        + "<span  class=bgcolor>" + searchItem.producercode +"</span>"+ "<span  class=bgcolor>" + searchItem.organi +"</span>"
        
        );
    }
    
});
});
 
 

//    $('#add-btn').click(function(){
//        var name=$("#name").val();
//        var email=$("#email").val();
//        var contact=$("#contact").val();
//        var profile=$("#profile").val();
//        $.post("http://",{
//         name:name,
//         email:email,
//         contact:contact,
//         profile:profile},function(booklist){
//          $("#book-list").append("<span class=bgcolor>" + $("#name").val() +"</span>" + "<span  class=bgcolor>" + $("#name").val() +
//          "</span>" + "<span  class=bgcolor>" + $("#contact").val()+"</span>" + "<span  class=bgcolor>" + $("#profile").val()+
         
//          "</span>")
//          clearfield();
//         })
   

//    })




