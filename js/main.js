initialize(5);

$('#grid').sortable({
  cursor: 'pointer',
  revert: 100,
  stop: function(ondrop, item) {
    if(isSorted()) {
      console.log("Sorted!");
    }
  }
});
