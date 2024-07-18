const $ = require('jquery');

import '../library/jquery.maskedinput.js';

//import '../src/common.blocks/fe-body/fe-body.js';



$(function() {
  $(".input-field_masked").mask("99.99.9999", {placeholder: "дд.мм.гггг" });
});
