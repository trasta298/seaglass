/* Seaglass behaviors CSS cannot do alone: sliding tab indicator, range fill, and replaying the switch/checkbox motion. */
(function () {
  function placeIndicator(list) {
    var sel = list.querySelector('[aria-selected="true"], [aria-pressed="true"]');
    if (!sel) return;
    list.style.setProperty("--ix", sel.offsetLeft + "px");
    list.style.setProperty("--iy", sel.offsetTop + "px");
    list.style.setProperty("--iw", sel.offsetWidth + "px");
    list.style.setProperty("--ih", sel.offsetHeight + "px");
    if (!list.hasAttribute("data-ind")) requestAnimationFrame(function () { list.setAttribute("data-ind", ""); });
  }

  var resize = window.ResizeObserver && new ResizeObserver(function (entries) {
    entries.forEach(function (e) { placeIndicator(e.target); });
  });
  var selection = new MutationObserver(function (records) {
    records.forEach(function (r) { placeIndicator(r.target.closest(".tabs")); });
  });

  function syncRange(r) {
    var min = Number(r.min || 0), max = Number(r.max || 100);
    r.style.setProperty("--v", (r.value - min) / (max - min) * 100);
  }

  function init(scope) {
    (scope || document).querySelectorAll(".tabs").forEach(function (list) {
      if (list.hasAttribute("data-sg")) return;
      list.setAttribute("data-sg", "");
      if (resize) resize.observe(list);
      selection.observe(list, { subtree: true, attributeFilter: ["aria-selected", "aria-pressed"] });
      placeIndicator(list);
    });
    (scope || document).querySelectorAll(".range").forEach(syncRange);
  }

  document.addEventListener("input", function (e) {
    if (e.target.matches(".range")) syncRange(e.target);
  });
  document.addEventListener("change", function (e) {
    var el = e.target;
    if (!el.matches(".switch input, .check input[type=checkbox]")) return;
    el.removeAttribute("data-moved");
    void el.offsetWidth;
    el.setAttribute("data-moved", "");
  });
  document.addEventListener("animationend", function (e) {
    e.target.removeAttribute("data-moved");
  });
  if (document.fonts) document.fonts.ready.then(function () {
    document.querySelectorAll(".tabs[data-sg]").forEach(placeIndicator);
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { init(); });
  else init();
  window.seaglass = { init: init };
})();
