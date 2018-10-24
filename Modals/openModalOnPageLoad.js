// Open Modal Popup on Page Load

if(window.location.href.indexOf("openmodal") > 0) {
    setTimeout(function () {
      $("#parentContainer a.modal").click();
    }, 10);
  }