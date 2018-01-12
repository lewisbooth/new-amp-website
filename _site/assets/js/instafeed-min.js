"use strict";
function instagramResize() {
  function t() {
    for (var t = 0; t < e.length; t++) {
      var o = e[0].offsetWidth;
      e[t].style.height = o + "px";
    }
  }
  var e = document.querySelectorAll(".social-feed-instagram-post");
  t();
}
(function() {
  var t;
  (t = (function() {
    function t(t, e) {
      var o, i;
      if (
        ((this.options = {
          target: "instafeed",
          get: "popular",
          resolution: "thumbnail",
          sortBy: "none",
          links: !0,
          mock: !1,
          useHttp: !1
        }),
        "object" == typeof t)
      )
        for (o in t) (i = t[o]), (this.options[o] = i);
      (this.context = null != e ? e : this), (this.unique = this._genKey());
    }
    return (
      (t.prototype.hasNext = function() {
        return (
          "string" == typeof this.context.nextUrl &&
          this.context.nextUrl.length > 0
        );
      }),
      (t.prototype.next = function() {
        return !!this.hasNext() && this.run(this.context.nextUrl);
      }),
      (t.prototype.run = function(e) {
        var o, i;
        if (
          "string" != typeof this.options.clientId &&
          "string" != typeof this.options.accessToken
        )
          throw new Error("Missing clientId or accessToken.");
        if (
          "string" != typeof this.options.accessToken &&
          "string" != typeof this.options.clientId
        )
          throw new Error("Missing clientId or accessToken.");
        return (
          null != this.options.before &&
            "function" == typeof this.options.before &&
            this.options.before.call(this),
          "undefined" != typeof document &&
            null !== document &&
            ((i = document.createElement("script")),
            (i.id = "instafeed-fetcher"),
            (i.src = e || this._buildUrl()),
            document.getElementsByTagName("head")[0].appendChild(i),
            (o = "instafeedCache" + this.unique),
            (window[o] = new t(this.options, this)),
            (window[o].unique = this.unique)),
          !0
        );
      }),
      (t.prototype.parse = function(t) {
        var e,
          o,
          i,
          n,
          r,
          s,
          a,
          c,
          l,
          p,
          h,
          u,
          d,
          f,
          m,
          g,
          y,
          w,
          b,
          k,
          v,
          _,
          I,
          E,
          x,
          N,
          B,
          T;
        if ("object" != typeof t) {
          if (
            null != this.options.error &&
            "function" == typeof this.options.error
          )
            return this.options.error.call(this, "Invalid JSON data"), !1;
          throw new Error("Invalid JSON response");
        }
        if (200 !== t.meta.code) {
          if (
            null != this.options.error &&
            "function" == typeof this.options.error
          )
            return this.options.error.call(this, t.meta.error_message), !1;
          throw new Error("Error from Instagram: " + t.meta.error_message);
        }
        if (0 === t.data.length) {
          if (
            null != this.options.error &&
            "function" == typeof this.options.error
          )
            return (
              this.options.error.call(
                this,
                "No images were returned from Instagram"
              ),
              !1
            );
          throw new Error("No images were returned from Instagram");
        }
        if (
          (null != this.options.success &&
            "function" == typeof this.options.success &&
            this.options.success.call(this, t),
          (this.context.nextUrl = ""),
          null != t.pagination &&
            (this.context.nextUrl = t.pagination.next_url),
          "none" !== this.options.sortBy)
        )
          switch (((N =
            "random" === this.options.sortBy
              ? ["", "random"]
              : this.options.sortBy.split("-")),
          (x = "least" === N[0]),
          N[1])) {
            case "random":
              t.data.sort(function() {
                return 0.5 - Math.random();
              });
              break;
            case "recent":
              t.data = this._sortBy(t.data, "created_time", x);
              break;
            case "liked":
              t.data = this._sortBy(t.data, "likes.count", x);
              break;
            case "commented":
              t.data = this._sortBy(t.data, "comments.count", x);
              break;
            default:
              throw new Error(
                "Invalid option for sortBy: '" + this.options.sortBy + "'."
              );
          }
        if (
          "undefined" != typeof document &&
          null !== document &&
          !1 === this.options.mock
        ) {
          if (
            ((u = t.data),
            (E = parseInt(this.options.limit, 10)),
            null != this.options.limit && u.length > E && (u = u.slice(0, E)),
            (s = document.createDocumentFragment()),
            null != this.options.filter &&
              "function" == typeof this.options.filter &&
              (u = this._filter(u, this.options.filter)),
            null != this.options.template &&
              "string" == typeof this.options.template)
          ) {
            for (
              a = "", T = document.createElement("div"), c = 0, k = u.length;
              k > c;
              c++
            ) {
              if (
                ((l = u[c]),
                "object" != typeof (p = l.images[this.options.resolution]))
              )
                throw ((r =
                  "No image found for resolution: " +
                  this.options.resolution +
                  "."),
                new Error(r));
              (m = "square"),
                (g = p.width) > (f = p.height) && (m = "landscape"),
                f > g && (m = "portrait"),
                (h = p.url),
                window.location.protocol.indexOf("http") >= 0 &&
                  !this.options.useHttp &&
                  (h = h.replace(/https?:\/\//, "//")),
                (a += this._makeTemplate(this.options.template, {
                  model: l,
                  id: l.id,
                  link: l.link,
                  type: l.type,
                  image: h,
                  width: g,
                  height: f,
                  orientation: m,
                  caption: this._getObjectProperty(l, "caption.text"),
                  likes: l.likes.count,
                  comments: l.comments.count,
                  location: this._getObjectProperty(l, "location.name")
                }));
            }
            for (
              T.innerHTML = a, n = [], i = 0, o = T.childNodes.length;
              o > i;

            )
              n.push(T.childNodes[i]), (i += 1);
            for (w = 0, v = n.length; v > w; w++) (I = n[w]), s.appendChild(I);
          } else
            for (b = 0, _ = u.length; _ > b; b++) {
              if (
                ((l = u[b]),
                (d = document.createElement("img")),
                "object" != typeof (p = l.images[this.options.resolution]))
              )
                throw ((r =
                  "No image found for resolution: " +
                  this.options.resolution +
                  "."),
                new Error(r));
              (h = p.url),
                window.location.protocol.indexOf("http") >= 0 &&
                  !this.options.useHttp &&
                  (h = h.replace(/https?:\/\//, "//")),
                (d.src = h),
                !0 === this.options.links
                  ? ((e = document.createElement("a")),
                    (e.href = l.link),
                    e.appendChild(d),
                    s.appendChild(e))
                  : s.appendChild(d);
            }
          if (
            ("string" == typeof (B = this.options.target) &&
              (B = document.getElementById(B)),
            null == B)
          )
            throw ((r =
              'No element with id="' + this.options.target + '" on page.'),
            new Error(r));
          B.appendChild(s),
            document
              .getElementsByTagName("head")[0]
              .removeChild(document.getElementById("instafeed-fetcher")),
            (y = "instafeedCache" + this.unique),
            (window[y] = void 0);
          try {
            delete window[y];
          } catch (t) {}
        }
        return (
          null != this.options.after &&
            "function" == typeof this.options.after &&
            this.options.after.call(this),
          !0
        );
      }),
      (t.prototype._buildUrl = function() {
        var t, e, o;
        switch (((t = "https://api.instagram.com/v1"), this.options.get)) {
          case "popular":
            e = "media/popular";
            break;
          case "tagged":
            if (!this.options.tagName)
              throw new Error(
                "No tag name specified. Use the 'tagName' option."
              );
            e = "tags/" + this.options.tagName + "/media/recent";
            break;
          case "location":
            if (!this.options.locationId)
              throw new Error(
                "No location specified. Use the 'locationId' option."
              );
            e = "locations/" + this.options.locationId + "/media/recent";
            break;
          case "user":
            if (!this.options.userId)
              throw new Error("No user specified. Use the 'userId' option.");
            e = "users/" + this.options.userId + "/media/recent";
            break;
          default:
            throw new Error(
              "Invalid option for get: '" + this.options.get + "'."
            );
        }
        return (
          (o = t + "/" + e),
          (o +=
            null != this.options.accessToken
              ? "?access_token=" + this.options.accessToken
              : "?client_id=" + this.options.clientId),
          null != this.options.limit && (o += "&count=" + this.options.limit),
          (o += "&callback=instafeedCache" + this.unique + ".parse")
        );
      }),
      (t.prototype._genKey = function() {
        var t;
        return (
          "" +
          (t = function() {
            return ((65536 * (1 + Math.random())) | 0)
              .toString(16)
              .substring(1);
          })() +
          t() +
          t() +
          t()
        );
      }),
      (t.prototype._makeTemplate = function(t, e) {
        var o, i, n, r, s;
        for (i = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, o = t; i.test(o); )
          (r = o.match(i)[1]),
            (s = null != (n = this._getObjectProperty(e, r)) ? n : ""),
            (o = o.replace(i, function() {
              return "" + s;
            }));
        return o;
      }),
      (t.prototype._getObjectProperty = function(t, e) {
        var o, i;
        for (i = (e = e.replace(/\[(\w+)\]/g, ".$1")).split("."); i.length; ) {
          if (((o = i.shift()), !(null != t && o in t))) return null;
          t = t[o];
        }
        return t;
      }),
      (t.prototype._sortBy = function(t, e, o) {
        var i;
        return (
          (i = function(t, i) {
            var n, r;
            return (
              (n = this._getObjectProperty(t, e)),
              (r = this._getObjectProperty(i, e)),
              o ? (n > r ? 1 : -1) : r > n ? 1 : -1
            );
          }),
          t.sort(i.bind(this)),
          t
        );
      }),
      (t.prototype._filter = function(t, e) {
        var o, i, n, r, s;
        for (
          o = [],
            i = function(t) {
              return e(t) ? o.push(t) : void 0;
            },
            n = 0,
            s = t.length;
          s > n;
          n++
        )
          (r = t[n]), i(r);
        return o;
      }),
      t
    );
  })()),
    (function(t, e) {
      "function" == typeof define && define.amd
        ? define([], e)
        : "object" == typeof module && module.exports
          ? (module.exports = e())
          : (t.Instafeed = e());
    })(this, function() {
      return t;
    });
}.call(this));

var loadInsta = document
  .querySelector(".social-feed-instagram")
  .getBoundingClientRect();
var triggered = false;

window.addEventListener("scroll", function() {
  if (triggered) {
    return;
  }
  if (window.pageYOffset > loadInsta.top - window.innerHeight && !triggered) {
    triggered = true;
    var feed = new Instafeed({
      get: "user",
      after: function() {
        instagramResize();
      },
      userId: "5657939093",
      clientId: "c1caeb14786a4227bc4ab5a2c4fb657b",
      accessToken: "5657939093.c1caeb1.f93d91f84d594f8ab865462a35deb7c2",
      resolution: "low_resolution",
      sortBy: "most-recent",
      limit: "6",
      template:
        "<a class='social-feed-instagram-post' href={{link}} target=_blank style=\"background-image: url({{image}}); background-size: cover; background-position: center;\"/>"
    });
    feed.run(), window.addEventListener("resize", instagramResize);
  }
});
