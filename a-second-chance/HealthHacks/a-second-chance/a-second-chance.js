

if (Meteor.isServer) {
  
}

if (Meteor.isClient) {

  Template.register.events({
    'submit form': function(){
      var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        });
        Router.go('home');
    }
  });

  Template.navigation.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
  });

  Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password);
    }
  });


}

Router.route('/register');
Router.route('/login');

Router.route('/', {
    template: 'home'
});

Router.configure({
    layoutTemplate: 'main'
});



