import Ember from 'ember';

export default Ember.Controller.extend({

actions: {
  createArtist: function(e) {
    e.preventDefault();
    var artistName = this.get('artistName');

    var promise = $.ajax({
      type: 'post',
      url: 'http://itp-api.herokuapp.com/api/artists',
      data: {
        name: artistName
      }
  });

  promise.then((response) => {
    this.set('artistName', null);

    var artists = this.get('model.artists');
    var newName = response.artist;
    console.log(artists);
    this.get('model.artists').pushObject(newName);
    console.log('success');

    this.transitionToRoute('artists');



  }, function() {
    alert('error-existing artist');
    console.log('error');
  });
}

}

});
