document.addEventListener('DOMContentLoaded', function() {
    var sidenavElems = document.querySelectorAll('.sidenav');
    var sidenavInstance = M.Sidenav.init(sidenavElems);
    var materialboxElems = document.querySelectorAll('.materialboxed');
    var materialboxInstances = M.Materialbox.init(materialboxElems);
    var parallaxElems = document.querySelectorAll('.parallax');
    var parallaxInstances = M.Parallax.init(parallaxElems);
  });