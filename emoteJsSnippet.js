// emoteJsSnippet.js
export function loadEmoteJs() {
  var st = document.createElement("style");
  st.style.cssText += "#emote_com {height: 430px;}";
  document.getElementsByTagName("head")[0].appendChild(st);
  const loader = () => {
    const e = () =>
      (function () {
        var e = document.createElement("script");
        e.type = "text/javascript";
        e.async = true;
        e.src = "https://i.emote.com/js/emote-core.js";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t);
      })();
    var t = document.getElementById("emote_com");
    if ("IntersectionObserver" in window) {
      let n = new IntersectionObserver(
        function (t) {
          t.forEach(function (t) {
            if (t.isIntersecting) {
              let o = t.target;
              e();
              n.unobserve(o);
            }
          });
        },
        {
          rootMargin: "100% 100% 100% 100%",
        }
      );
      n.observe(t);
    } else e();
  };
  if (document.readyState === "complete") {
    loader();
  } else {
    document.addEventListener("DOMContentLoaded", loader);
  }
}
