document.addEventListener('DOMContentLoaded', function() {
    var sidenavElems = document.querySelectorAll('.sidenav');
    var sidenavInstance = M.Sidenav.init(sidenavElems);
    var materialboxElems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(materialboxElems);
  });