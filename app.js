document.addEventListener('DOMContentLoaded', function() {
    var sidenavElems = document.querySelectorAll('.sidenav');
    var sidenavInstance = M.Sidenav.init(sidenavElems);
    var materialboxElems = document.querySelectorAll('.materialboxed');
    var materialboxInstances = M.Materialbox.init(materialboxElems);
    var parallaxElems = document.querySelectorAll('.parallax');
    var parallaxInstances = M.Parallax.init(parallaxElems);
    var tabsElems = document.querySelectorAll('.tabs');
    var tabsInstanses = M.Tabs.init(tabsElems);
    var datepickerElems = document.querySelectorAll('.datepicker');
    var datepickerInstances = M.Datepicker.init(datepickerElems, {
        disableWeekends: true,
        firstDay: 1
    });
    var tooltipInstances = M.Tooltip.init(document.querySelectorAll('.tooltipped'));
  });