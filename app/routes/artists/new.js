import Ember from 'ember';

// export default Ember.Route.extend({

  export default Ember.Route.extend({
    model(params) {




      return this.modelFor('artists');
    }
  });




//
// model: function(params) {
// var url = 'http://itp-api.herokuapp.com/api/artists/';
// var promise = $.ajax({
//
//   type: 'get',
//   url: url
//
// }).then(function(response) {
//   return {
// name: response.artists.name
//   };
// });
// return promise;
//
//
// }
// });
