/* Optional: enter your final HTTPS website address after connecting your domain.
   Leave empty during review. Example format: https://your-domain.com
   This file contains no secret keys and needs no build step. */
window.SUNSHINE_SITE = {
  publicUrl: ""
};
(function () {
  var value = window.SUNSHINE_SITE.publicUrl;
  if (!value) return;
  try {
    var base = new URL(value);
    if (base.protocol !== "https:") return;
    base.pathname = base.pathname.replace(/\/?$/, "/");
    var canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = base.href;
    document.head.appendChild(canonical);
    var urlTag = document.createElement("meta");
    urlTag.setAttribute("property", "og:url");
    urlTag.content = base.href;
    document.head.appendChild(urlTag);
    /* Set these same URLs directly in index.html for social crawlers,
       which do not necessarily execute JavaScript. */
  } catch (_) { /* Invalid URLs do not break the site. */ }
})();
