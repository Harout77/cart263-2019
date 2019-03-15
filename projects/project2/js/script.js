$(document).ready(function () {

  // Make sure we can run annyang (Chrome-dependent), otherwise no point
  if (annyang) {
    $(document).on('click',start);
  }
});
