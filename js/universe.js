function dark() {
  window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  var n,
    e,
    i,
    h,
    t = 0.05,
    s = document.getElementById("universe"),
    o = !0,
    a = "180,184,240",
    r = "226,225,142",
    d = "226,225,224",
    c = [];
  function f() {
    (n = window.innerWidth),
      (e = window.innerHeight),
      (i = 0.216 * n),
      s.setAttribute("width", n),
      s.setAttribute("height", e);
  }
  function u() {
    h.clearRect(0, 0, n, e);
    for (var t = c.length, i = 0; i &lt; t; i++) {
      var s = c[i];
      s.move(), s.fadeIn(), s.fadeOut(), s.draw();
    }
  }
  function y() {
    (this.reset = function () {
      (this.giant = m(3)),
        (this.comet = !this.giant &amp;&amp; !o &amp;&amp; m(10)),
        (this.x = l(0, n - 10)),
        (this.y = l(0, e)),
        (this.r = l(1.1, 2.6)),
        (this.dx = l(t, 6 * t) + (this.comet + 1 - 1) * t * l(50, 120) + 2 * t),
        (this.dy = -l(t, 6 * t) - (this.comet + 1 - 1) * t * l(50, 120)),
        (this.fadingOut = null),
        (this.fadingIn = !0),
        (this.opacity = 0),
        (this.opacityTresh = l(0.2, 1 - 0.4 * (this.comet + 1 - 1))),
        (this.do = l(5e-4, 0.002) + 0.001 * (this.comet + 1 - 1));
    }),
      (this.fadeIn = function () {
        this.fadingIn &amp;&amp;
          ((this.fadingIn = !(this.opacity &gt; this.opacityTresh)),
          (this.opacity += this.do));
      }),
      (this.fadeOut = function () {
        this.fadingOut &amp;&amp;
          ((this.fadingOut = !(this.opacity &lt; 0)),
          (this.opacity -= this.do / 2),
          (this.x &gt; n || this.y &lt; 0) &amp;&amp; ((this.fadingOut = !1), this.reset()));
      }),
      (this.draw = function () {
        if ((h.beginPath(), this.giant))
          (h.fillStyle = "rgba(" + a + "," + this.opacity + ")"),
            h.arc(this.x, this.y, 2, 0, 2 * Math.PI, !1);
        else if (this.comet) {
          (h.fillStyle = "rgba(" + d + "," + this.opacity + ")"),
            h.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, !1);
          for (var t = 0; t &lt; 30; t++)
            (h.fillStyle =
              "rgba(" +
              d +
              "," +
              (this.opacity - (this.opacity / 20) * t) +
              ")"),
              h.rect(
                this.x - (this.dx / 4) * t,
                this.y - (this.dy / 4) * t - 2,
                2,
                2
              ),
              h.fill();
        } else
          (h.fillStyle = "rgba(" + r + "," + this.opacity + ")"),
            h.rect(this.x, this.y, this.r, this.r);
        h.closePath(), h.fill();
      }),
      (this.move = function () {
        (this.x += this.dx),
          (this.y += this.dy),
          !1 === this.fadingOut &amp;&amp; this.reset(),
          (this.x &gt; n - n / 4 || this.y &lt; 0) &amp;&amp; (this.fadingOut = !0);
      }),
      setTimeout(function () {
        o = !1;
      }, 50);
  }
  function m(t) {
    return Math.floor(1e3 * Math.random()) + 1 &lt; 10 * t;
  }
  function l(t, i) {
    return Math.random() * (i - t) + t;
  }
  f(),
    window.addEventListener("resize", f, !1),
    (function () {
      h = s.getContext("2d");
      for (var t = 0; t &lt; i; t++) (c[t] = new y()), c[t].reset();
      u();
    })(),
    (function t() {
      document.getElementsByTagName("html")[0].getAttribute("data-theme") ==
        "dark" &amp;&amp; u(),
        window.requestAnimationFrame(t);
    })();
}
dark();
