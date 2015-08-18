define (["jquery"], function($) {

return function(newMember) { 

    $.ajax ({
        url: "https://nss-ls-family.firebaseio.com/family.json",
        method: "DELETE", 
        data: JSON.stringify(newMember)
      })
      .done(function(NewType) {
        console.log("New Member");
      });
   };
});