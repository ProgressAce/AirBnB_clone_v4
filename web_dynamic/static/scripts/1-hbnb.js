$(document).ready(function () {
  const amenities = {};
  $('input[type="checkbox"]').click(function () {
    if ($(this).is(':checked')) {
      amenities[this.dataset.name] = this.dataset.id;
    }
    else if ($(this).is(':not(:checked)')) {
      delete amenities[this.dataset.name];
    }
    $('.amenities h4').text(Object.keys(amenities).sort().join(', '));
  });
});
