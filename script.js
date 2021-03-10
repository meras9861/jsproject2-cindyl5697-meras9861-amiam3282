$.ajax({
    url: 'https://data.cityofnewyork.us/resource/jvce-szsb.json',
    dataType: 'json',
    success: function(data) {
    var usersStore = prompt("What type of store would you like to visit?");
    for(var i = 0; i < data.length; i++){
        
      if (data[i].type == usersStore) {
        document.write(data[i].store + "<br>");
    }
}

}
});