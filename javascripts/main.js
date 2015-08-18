requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'material': ['bootstrap'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});



requirejs(
  ["jquery", "firebase", "hbs", "bootstrap", "family", "delete" ], 
  function($, _firebase, Handlebars, bootstrap, family, rid) {
    var myFirebaseRef = new Firebase("https://nss-ls-family.firebaseio.com/");
    myFirebaseRef.child("family").on("value", function(snapshot) {
    var family = snapshot.val();

      require(['hbs!../templates/family'], function(familyTemplate) {
      $("#familyList").append(familyTemplate({family:family}));
      });

    });


    
    $('#addNewMember').click(function() {
      console.log("click add btn");
      var name = $('#name').val();
      console.log("name", name);
      var age = $('#age').val();
      var gender = $('#gender').val();
      var skills = $('#skills').val(); 

      var newMember = {};
      newMember.name = name;
      newMember.age = age;
      newMember.gender = gender;
      newMember.skills = skills;
      console.log("new member", newMember);
    
      family(newMember);

    });

    $(document).on("click", "#delbtn", function() {
      console.log("delete clicked");
      $(this).parent("div").remove();
      
    });

});