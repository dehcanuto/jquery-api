$(document).ready(function () {
  var showData = $('#show-data');

  $.getJSON('api.json', function (json) {
    console.log(json);

    var keywords = json.data.map(function (item) {
      return (
        item.name +
        ' is a ' +
        item.bio[0].genre +
        ' ' +
        item.title +
        ' with ' +
        (new Date().getFullYear() - item.bio[0].birthdate) +
        ' years old.'
      );
    });

    showData.empty();

    if (keywords.length) {
      var content = '<li>' + keywords.join('</li><li>') + '</li>';
      var list = $('<ul/>').html(content);
      showData.append(list);
    }
  });
});
