// Kontaktformular über Web3Forms (ohne Seitenwechsel)
(function () {
  var form = document.getElementById("contact-form");
  if (form) {
    var status = document.getElementById("form-status");
    var btn = form.querySelector('button[type="submit"]');
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      btn.disabled = true;
      status.textContent = "Wird gesendet …";
      fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.success) {
            form.reset();
            status.textContent = "Danke! Ich melde mich in Kürze bei dir.";
          } else {
            status.textContent = "Das hat leider nicht geklappt. Schreib mir gern direkt per WhatsApp.";
          }
        })
        .catch(function () {
          status.textContent = "Keine Verbindung. Schreib mir gern direkt per WhatsApp.";
        })
        .finally(function () { btn.disabled = false; });
    });
  }

  // Video: lädt YouTube erst nach Klick
  var box = document.querySelector(".video");
  if (box) {
    var id = box.getAttribute("data-video");
    var button = box.querySelector("button");
    if (id) {
      box.querySelector(".play").hidden = false;
      box.querySelector(".video-note").hidden = false;
      button.addEventListener("click", function () {
        box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) +
          '?autoplay=1" title="Video: Einblick in den Unterricht" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
      });
    } else {
      button.style.cursor = "default";
      button.removeAttribute("aria-label");
    }
  }
})();
