$(document).ready(function(){
  
    var name,password;
    $("#submit").click(function(){
        var id= $("#name").val();
        console.log("/////////",id);
        var pass=$("#password").val();
        console.log("$$$$$$$$$$$$$", id, pass);
        $.post("/login",{username: id, password:pass } ,function(data){

        if(res=="Signed in"){
          localStorage.setItem('user',username);

        }


        
        });
})})