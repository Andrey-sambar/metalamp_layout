const $ = require('jquery');

import '../library/jquery.maskedinput.js';

$(function() {
  $(".input_masked").mask("99.99.9999", {placeholder: "ДД.ММ.ГГГГ" });
});