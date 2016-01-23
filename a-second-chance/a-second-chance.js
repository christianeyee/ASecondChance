

if (Meteor.isServer) {
  
}

if (Meteor.isClient) {

  Meteor.startup(function() {

    $('#level').each(function () {
      var $this = $(this);
      jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter));
        }
      });
    });

  });
    

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
        Router.go('profile-form');
    }
  });


}

Router.route('/', {
    template: 'home'
});

Router.configure({
    layoutTemplate: 'main'
});

Router.route('/register');
Router.route('/login');
Router.route('/profile-form');





