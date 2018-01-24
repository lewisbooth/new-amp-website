/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

fbq.version = "2.8.9";
fbq._releaseSegment = "stable";
fbq.pendingConfigs = ["global_config"];
(function(a, b, c, d) {
  var e = { exports: {} },
    f = e.exports;
  (function() {
    var g = a.fbq;
    g.execStart = a.performance && a.performance.now && a.performance.now();
    if (
      !(function() {
        var h = a.postMessage || function() {};
        if (!g) {
          h(
            {
              action: "FB_LOG",
              logType: "Facebook Pixel Error",
              logMessage: "Pixel code is not installed correctly on this page"
            },
            "*"
          );
          if ("error" in console)
            console.error(
              "Facebook Pixel Error: Pixel code is not installed correctly on this page"
            );
          return false;
        }
        return true;
      })()
    )
      return;
    ("use strict");
    if (!g.__fbeventsModules) {
      g.__fbeventsModules = {};
      g.__fbeventsResolvedModules = {};
      g.getFbeventsModules = function(h) {
        if (!g.__fbeventsResolvedModules[h])
          g.__fbeventsResolvedModules[h] = g.__fbeventsModules[h]();
        return g.__fbeventsResolvedModules[h];
      };
      g.fbIsModuleLoaded = function(h) {
        return !!g.__fbeventsModules[h];
      };
      g.ensureModuleRegistered = function(h, e) {
        if (!g.fbIsModuleLoaded(h)) g.__fbeventsModules[h] = e;
      };
    }
    g.ensureModuleRegistered("SignalsFBEventsOptTrackingOptions", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          e.exports = {
            AUTO_CONFIG_OPT_OUT: 1 << 0,
            AUTO_CONFIG: 1 << 1,
            CONFIG_LOADING: 1 << 2,
            SUPPORTS_DEFINE_PROPERTY: 1 << 3,
            SUPPORTS_SEND_BEACON: 1 << 4,
            HAS_INVALIDATED_PII: 1 << 5,
            SHOULD_PROXY: 1 << 6
          };
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("SignalsFBEventsPlugin", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          function h(i) {
            this.plugin = i;
            this.__fbEventsPlugin = 1;
            return this;
          }
          e.exports = h;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("SignalsFBEventsProxyState", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var h = false;
          e.exports = {
            getShouldProxy: function i() {
              return h;
            },
            setShouldProxy: function i(j) {
              h = j;
            }
          };
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("SignalsFBEvents.plugins.opttracking", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var h = g.getFbeventsModules("SignalsFBEventsOptTrackingOptions"),
            i = g.getFbeventsModules("SignalsFBEventsPlugin"),
            j = g.getFbeventsModules("SignalsFBEventsProxyState"),
            k = false;
          function l() {
            try {
              Object.defineProperty({}, "test", {});
            } catch (p) {
              return false;
            }
            return true;
          }
          function m() {
            return !!(a.navigator && a.navigator.sendBeacon);
          }
          function n(p, q) {
            return p ? q : 0;
          }
          var o = new i(function(g, p) {
            if (k) return;
            var q = {};
            g.on("pii_invalidated", function(r) {
              if (r != null) q[typeof r === "string" ? r : r.id] = true;
            });
            g.on("getCustomParameters", function(r) {
              if (r == null) return {};
              var s = p.optIns,
                t = n(
                  s.isOptedOut(r.id, "AutomaticSetup"),
                  h.AUTO_CONFIG_OPT_OUT
                ),
                u = n(s.isOptedIn(r.id, "AutomaticSetup"), h.AUTO_CONFIG),
                v = n(g.disableConfigLoading !== true, h.CONFIG_LOADING),
                w = n(l(), h.SUPPORTS_DEFINE_PROPERTY),
                x = n(m(), h.SUPPORTS_SEND_BEACON),
                y = n(r != null && q[r.id], h.HAS_INVALIDATED_PII),
                z = n(j.getShouldProxy(), h.SHOULD_PROXY),
                A = t | u | v | w | x | y | z;
              return { o: A };
            });
            k = true;
          });
          o.OPTIONS = h;
          e.exports = o;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    e.exports = g.getFbeventsModules("SignalsFBEvents.plugins.opttracking");
    if (g.registerPlugin)
      g.registerPlugin("fbevents.plugins.opttracking", e.exports);
    g.ensureModuleRegistered("fbevents.plugins.opttracking", function() {
      return e.exports;
    });
  })();
})(window, document, location, history);
(function(a, b, c, d) {
  var e = { exports: {} },
    f = e.exports;
  (function() {
    var g = a.fbq;
    g.execStart = a.performance && a.performance.now && a.performance.now();
    if (
      !(function() {
        var h = a.postMessage || function() {};
        if (!g) {
          h(
            {
              action: "FB_LOG",
              logType: "Facebook Pixel Error",
              logMessage: "Pixel code is not installed correctly on this page"
            },
            "*"
          );
          if ("error" in console)
            console.error(
              "Facebook Pixel Error: Pixel code is not installed correctly on this page"
            );
          return false;
        }
        return true;
      })()
    )
      return;
    ("use strict");
    var aa =
        typeof Symbol === "function" &&
        typeof (typeof Symbol === "function"
          ? Symbol.iterator
          : "@@iterator") === "symbol"
          ? function(h) {
              return typeof h;
            }
          : function(h) {
              return h &&
                typeof Symbol === "function" &&
                h.constructor === Symbol &&
                h !==
                  (typeof Symbol === "function"
                    ? Symbol.prototype
                    : "@@prototype")
                ? "symbol"
                : typeof h;
            },
      ba = (function() {
        function h(i, j) {
          var k = [],
            l = true,
            m = false,
            n = undefined;
          try {
            for (
              var o = i[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ](),
                p;
              !(l = (p = o.next()).done);
              l = true
            ) {
              k.push(p.value);
              if (j && k.length === j) break;
            }
          } catch (q) {
            m = true;
            n = q;
          } finally {
            try {
              if (!l && o["return"]) o["return"]();
            } finally {
              if (m) throw n;
            }
          }
          return k;
        }
        return function(i, j) {
          if (Array.isArray(i)) return i;
          else if (
            (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in
            Object(i)
          )
            return h(i, j);
          else
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
        };
      })(),
      ca = (function() {
        function h(i, j) {
          for (var k = 0; k < j.length; k++) {
            var l = j[k];
            l.enumerable = l.enumerable || false;
            l.configurable = true;
            if ("value" in l) l.writable = true;
            Object.defineProperty(i, l.key, l);
          }
        }
        return function(i, j, k) {
          if (j) h(i.prototype, j);
          if (k) h(i, k);
          return i;
        };
      })();
    function da(h) {
      if (Array.isArray(h)) {
        for (var i = 0, j = Array(h.length); i < h.length; i++) j[i] = h[i];
        return j;
      } else return Array.from(h);
    }
    function ea(h, i) {
      if (!(h instanceof i))
        throw new TypeError("Cannot call a class as a function");
    }
    if (!g.__fbeventsModules) {
      g.__fbeventsModules = {};
      g.__fbeventsResolvedModules = {};
      g.getFbeventsModules = function(h) {
        if (!g.__fbeventsResolvedModules[h])
          g.__fbeventsResolvedModules[h] = g.__fbeventsModules[h]();
        return g.__fbeventsResolvedModules[h];
      };
      g.fbIsModuleLoaded = function(h) {
        return !!g.__fbeventsModules[h];
      };
      g.ensureModuleRegistered = function(h, e) {
        if (!g.fbIsModuleLoaded(h)) g.__fbeventsModules[h] = e;
      };
    }
    g.ensureModuleRegistered("SignalsEventValidation", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var h = g.getFbeventsModules("SignalsFBEventsLogging"),
            i = h.logError,
            j = h.logUserError,
            k = /^[+-]?\d+(\.\d+)?$/,
            l = "number",
            m = "currency_code",
            n = {
              AED: 1,
              ARS: 1,
              AUD: 1,
              BOB: 1,
              BRL: 1,
              CAD: 1,
              CHF: 1,
              CLP: 1,
              CNY: 1,
              COP: 1,
              CRC: 1,
              CZK: 1,
              DKK: 1,
              EUR: 1,
              GBP: 1,
              GTQ: 1,
              HKD: 1,
              HNL: 1,
              HUF: 1,
              IDR: 1,
              ILS: 1,
              INR: 1,
              ISK: 1,
              JPY: 1,
              KRW: 1,
              MOP: 1,
              MXN: 1,
              MYR: 1,
              NIO: 1,
              NOK: 1,
              NZD: 1,
              PEN: 1,
              PHP: 1,
              PLN: 1,
              PYG: 1,
              QAR: 1,
              RON: 1,
              RUB: 1,
              SAR: 1,
              SEK: 1,
              SGD: 1,
              THB: 1,
              TRY: 1,
              TWD: 1,
              USD: 1,
              UYU: 1,
              VEF: 1,
              VND: 1,
              ZAR: 1
            },
            o = {
              value: { type: l, isRequired: true },
              currency: { type: m, isRequired: true }
            },
            p = {
              PageView: {},
              ViewContent: {},
              Search: {},
              AddToCart: {},
              AddToWishlist: {},
              InitiateCheckout: {},
              PixelInitialized: {},
              AddPaymentInfo: {},
              Purchase: { validationSchema: o },
              Lead: {},
              CompleteRegistration: {},
              CustomEvent: { validationSchema: { event: { isRequired: true } } }
            },
            q = { agent: true },
            r = Object.prototype.hasOwnProperty;
          function s(w, x, y) {
            this.error = null;
            this.warnings = [];
            this.eventName = w;
            this.params = x || {};
            this.metadata = y;
          }
          s.prototype.validateMetadata = function() {
            if (this.metadata) {
              var w = this.metadata.toLowerCase(),
                x = q[w];
              if (!x)
                return this._error({
                  type: "UNSUPPORTED_METADATA_ARGUMENT",
                  metadata: w
                });
            }
            return this;
          };
          s.prototype.validateEvent = function() {
            var w = this.eventName;
            if (!w) return this;
            var x = p[w];
            if (!x) {
              this.warnings.push({ type: "NONSTANDARD_EVENT", eventName: w });
              return this;
            }
            var y = x.validationSchema;
            for (var z in y)
              if (r.call(y, z)) {
                var A = y[z];
                if (A) {
                  if (A.isRequired && !r.call(this.params, z))
                    return this._error({
                      type: "REQUIRED_PARAM_MISSING",
                      param: z,
                      eventName: w
                    });
                  if (A.type && typeof A.type === "string")
                    if (!this._validateParam(z, A.type))
                      return this._error({
                        type: "INVALID_PARAM",
                        param: z,
                        eventName: w
                      });
                }
              }
            return this;
          };
          s.prototype._validateParam = function(w, x) {
            var y = this.params[w];
            switch (x) {
              case l:
                var z =
                  (typeof y === "string" || typeof y === "number") &&
                  k.test("" + y);
                if (z && Number(y) < 0)
                  this.warnings.push({
                    type: "NEGATIVE_EVENT_PARAM",
                    param: w,
                    eventName: this.eventName ? this.eventName : "null"
                  });
                return z;
              case m:
                return typeof y === "string" && !!n[y.toUpperCase()];
            }
            return true;
          };
          s.prototype._error = function(w) {
            this.error = w;
            return this;
          };
          function t(w) {
            return new s(null, null, w).validateMetadata();
          }
          function u(w) {
            var x =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            return new s(w, x).validateEvent();
          }
          function v(w, x) {
            var y = new s(w, x).validateEvent();
            if (y.error) j(y.error);
            if (y.warnings)
              for (var z = 0; z < y.warnings.length; z++) j(y.warnings[z]);
            return y;
          }
          e.exports = {
            validateMetadata: t,
            validateEvent: u,
            validateEventAndLog: v
          };
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("SignalsEvents", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var h = g.getFbeventsModules("SignalsFBEventsLogging"),
            i = h.logError,
            j = g.getFbeventsModules("SignalsFBEventsUtils"),
            k = j.keys,
            l = 0,
            m = (function() {
              function m() {
                var o = this;
                ea(this, m);
                this._listeners = {};
                this.on = function() {
                  return o._on.apply(o, arguments);
                };
                this.once = function() {
                  return o._once.apply(o, arguments);
                };
                this.trigger = function(p) {
                  for (
                    var q = arguments.length,
                      r = Array(q > 1 ? q - 1 : 0),
                      s = 1;
                    s < q;
                    s++
                  )
                    r[s - 1] = arguments[s];
                  return o._trigger.apply(o, [p].concat(r));
                };
                this.unsubscribe = function() {
                  return o._unsubscribe.apply(o, arguments);
                };
              }
              ca(m, [
                {
                  key: "_on",
                  value: function o(p, q) {
                    var r = this,
                      s = l++;
                    if (!this._listeners[p]) this._listeners[p] = {};
                    this._listeners[p][s.toString()] = q;
                    return function() {
                      r.unsubscribe(p, s.toString());
                    };
                  }
                },
                {
                  key: "_once",
                  value: function o(p, q) {
                    var r = arguments,
                      s = this.on(p, function() {
                        s();
                        return q.apply(null, r);
                      });
                    return s;
                  }
                },
                {
                  key: "_trigger",
                  value: function o(p) {
                    var q = this;
                    for (
                      var r = arguments.length,
                        s = Array(r > 1 ? r - 1 : 0),
                        t = 1;
                      t < r;
                      t++
                    )
                      s[t - 1] = arguments[t];
                    if (!this._listeners[p]) return [];
                    return k(this._listeners[p]).map(function(u) {
                      try {
                        if (!q._listeners[p][u]) return [];
                        return q._listeners[p][u].apply(null, s);
                      } catch (v) {
                        i(v);
                      }
                      return null;
                    });
                  }
                },
                {
                  key: "_unsubscribe",
                  value: function o(p, q) {
                    var r = this._listeners[p];
                    if (r && r[q]) {
                      delete r[q];
                      if (k(r).length === 0) delete this._listeners[p];
                    }
                  }
                }
              ]);
              return m;
            })(),
            n = new m();
          e.exports = n;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("SignalsFBEventsFBQ", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var h = g.getFbeventsModules("SignalsEventValidation"),
            i = g.getFbeventsModules("SignalsFBEventsFireLock"),
            j = g.getFbeventsModules("SignalsFBEventsLogging"),
            k = g.getFbeventsModules("SignalsFBEventsOptIn"),
            l = g.getFbeventsModules("SignalsFBEventsPluginPath"),
            m = g.getFbeventsModules("SignalsFBEventsQE"),
            n = g.getFbeventsModules("SignalsFBEventsUtils"),
            o = g.getFbeventsModules("SignalsParamList"),
            p = g.getFbeventsModules("SignalsPixelEndpoint"),
            q = n.each,
            r = n.keys,
            s = n.map,
            t = n.some,
            u = j.logError,
            v = j.logUserError,
            w = {
              AutomaticMatching: true,
              Dwell: true,
              FPCookie: true,
              Interaction: true,
              InferredEvents: true,
              Microdata: true,
              ProxyEndpoint: true,
              Sessions: true,
              TimeSpent: true,
              IWL: true
            },
            x = ["InferredEvents", "Microdata"],
            y = { AutomaticSetup: x },
            z = {
              AutomaticMatching: ["inferredevents", "identity"],
              Dwell: ["dwell"],
              FPCookie: ["fpcookie"],
              InferredEvents: ["inferredevents", "identity"],
              Interaction: ["interaction", "timespent"],
              Microdata: ["microdata", "identity"],
              ProxyEndpoint: ["proxy"],
              Sessions: ["sessions"],
              TimeSpent: ["timespent"],
              IWL: ["iwl"]
            };
          function A(E) {
            return !!(w[E] || y[E]);
          }
          function B(E, F, G) {
            var H = l.get(),
              I = "https://connect.facebook.net";
            if (typeof H.baseURL === "string" && H.baseURL !== null)
              I = H.baseURL;
            var J = I + "/signals/config/" + E + "?v=" + F + "&r=" + G,
              K = b.createElement("script");
            K.src = J;
            K.async = true;
            if (H.scriptElement && H.scriptElement.parentNode)
              H.scriptElement.parentNode.insertBefore(K, H.scriptElement);
            else if (b.body && b.body.firstChild)
              b.body.insertBefore(K, b.body.firstChild);
          }
          var C = {
            VALID_FEATURES: w,
            optIn: function E(F, G) {
              var H = this,
                I =
                  arguments.length > 2 && arguments[2] !== undefined
                    ? arguments[2]
                    : false;
              if (typeof G !== "string" || !A(G))
                throw new Error(
                  'Invalid Argument: "' + G + '" is not a valid opt-in feature'
                );
              if (A(G)) {
                this.optIns.optIn(F, G, I);
                q([G].concat(da(y[G] || [])), function(J) {
                  if (z[J])
                    q(z[J], function(K) {
                      return H.fbq.loadPlugin(K);
                    });
                });
              }
              return this;
            },
            optOut: function E(F, G) {
              this.optIns.optOut(F, G);
              return this;
            },
            trackSingle: function E(F, G, H) {
              h.validateEventAndLog(G, H);
              return this.trackSingleCustom(F, G, H);
            },
            trackSingleCustom: function E(F, G, H) {
              var I = typeof F === "string" ? F : F.id,
                J = this.getDefaultSendData(I, G);
              J.customData = H;
              this.fire(J, false);
              return this;
            },
            enqueue: function E() {
              for (var F = arguments.length, G = Array(F), H = 0; H < F; H++)
                G[H] = arguments[H];
              this.queue.append(G);
              return this;
            },
            _validateSend: function E(F, G) {
              if (!F.eventName || !F.eventName.length)
                throw new Error("Event name not specified");
              if (!F.pixelId || !F.pixelId.length)
                throw new Error("PixelId not specified");
              if (F.set)
                q(
                  s(r(F.set), function(I) {
                    return h.validateMetadata(I);
                  }),
                  function(I) {
                    if (I.error) throw new Error(I.error);
                    if (I.warnings.length) q(I.warnings, v);
                  }
                );
              if (G) {
                var H = h.validateEvent(F.eventName, F.customData || {});
                if (H.error) throw new Error(H.error);
                if (H.warnings && H.warnings.length) q(H.warnings, v);
              }
              return this;
            },
            fire: function E(F) {
              var G =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : false;
              this._validateSend(F, G);
              if (
                F.userData &&
                r(F.userData).length > 0 &&
                !this.fbq.loadPlugin("identity")
              ) {
                this.enqueue("fire", F);
                return this;
              }
              var H = new o(this.fbq.piiTranslator);
              try {
                H.append("ud", F.userData, true);
              } catch (I) {
                this.fbq.trigger("pii_invalidated", F.pixelId);
              }
              H.append("v", this.fbq.version);
              H.append("r", this.fbq._releaseSegment);
              F.set && F.set.agent && H.append("a", F.set.agent);
              var J = this.fbq.trigger("getCustomParameters", {
                id: F.pixelId
              });
              q(J, function(K) {
                return q(r(K), function(L) {
                  if (H.containsKey(L))
                    throw new Error(
                      "Custom parameter " + L + " already specified."
                    );
                  else H.append(L, K[L]);
                });
              });
              p.sendEvent(F.pixelId, F.eventName, F.customData, H);
              return this;
            },
            callMethod: function E(F) {
              var G = F[0],
                H = Array.prototype.slice.call(F, 1);
              if (typeof this[G] === "function")
                try {
                  this[G].apply(this, H);
                } catch (I) {
                  u(I);
                }
              else u(new Error("Invalid FBQ method " + G));
            },
            getDefaultSendData: function E(F, G) {
              var H = this.getPixel(F),
                I = { pixelId: F, eventName: G };
              if (H) {
                if (H.userData) I.userData = H.userData;
                if (H.agent) I.set = { agent: H.agent };
                else if (this.fbq.agent) I.set = { agent: this.fbq.agent };
              }
              return I;
            },
            getOptedInPixels: function E(F) {
              var G = this;
              return this.optIns.listPixelIds(F).map(function(H) {
                return G.pixelsByID[H];
              });
            },
            ensurePixel: function E(F) {
              if (!Object.prototype.hasOwnProperty.call(this.pixelsByID, F))
                throw new Error('Pixel "' + F + '" not found');
            },
            getPixel: function E(F) {
              this.ensurePixel(F);
              return this.pixelsByID[F];
            },
            loadConfig: function E(F) {
              if (
                this.fbq.disableConfigLoading ||
                Object.prototype.hasOwnProperty.call(this.configsLoaded, F)
              )
                return;
              this.locks.lockConfig(F);
              if (
                !this.fbq.pendingConfigs ||
                t(this.fbq.pendingConfigs, function(G) {
                  return G === F;
                }) == false
              )
                B(F, this.VERSION, this.RELEASE_SEGMENT);
            },
            setExperiments: function E(F) {
              this._defaultExperiments = new m(F);
            },
            getExperiments: function E() {
              return this._defaultExperiments;
            },
            configLoaded: function E(F) {
              this.configsLoaded[F] = true;
              this.locks.releaseConfig(F);
              this.fbq.trigger("configLoaded", F);
            }
          };
          function D(g, E) {
            var F = this;
            this.VERSION = g.version;
            this.RELEASE_SEGMENT = g._releaseSegment;
            this.pixelsByID = E;
            this.fbq = g;
            this.optIns = new k(y);
            this.configsLoaded = {};
            this._defaultExperiments = new m([]);
            this.locks = i.global;
            q(g.pendingConfigs || [], function(G) {
              return F.locks.lockConfig(G);
            });
          }
          D.prototype = C;
          e.exports = D;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("SignalsFBEventsFireLock", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var h = g.getFbeventsModules("SignalsFBEventsUtils"),
            i = h.each,
            j = h.keys;
          function k() {
            this._locks = {};
            this._callbacks = [];
          }
          k.prototype = {
            lock: function l(m) {
              this._locks[m] = true;
            },
            release: function l(m) {
              if (Object.prototype.hasOwnProperty.call(this._locks, m)) {
                delete this._locks[m];
                if (j(this._locks).length === 0)
                  i(this._callbacks, function(n) {
                    return n(m);
                  });
              }
            },
            onUnlocked: function l(m) {
              this._callbacks.push(m);
            },
            isLocked: function l() {
              return j(this._locks).length > 0;
            }
          };
          k.global = new k();
          k.global.lockPlugin = function(l) {
            this.lock("plugin:" + l);
          };
          k.global.releasePlugin = function(l) {
            this.release("plugin:" + l);
          };
          k.global.lockConfig = function(l) {
            this.lock("config:" + l);
          };
          k.global.releaseConfig = function(l) {
            this.release("config:" + l);
          };
          e.exports = k;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("SignalsFBEventsLogging", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var h = g.getFbeventsModules("SignalsFBEventsUtils"),
            i = h.sendPOST,
            j = h.isInstanceOf,
            k = g.getFbeventsModules("SignalsParamList"),
            l = false;
          function m() {
            l = true;
          }
          var n = true;
          function o() {
            n = false;
          }
          var p = "console",
            q = "warn",
            r = a[p] ? a[p][q].bind(a[p]) : function() {},
            s = false;
          function t() {
            s = true;
          }
          function u(D) {
            if (s) return;
            r("[Facebook Pixel] - " + D);
          }
          var v = "Facebook Pixel Error",
            w = a.postMessage ? a.postMessage.bind(a) : function() {},
            x = {};
          function y(D) {
            switch (D.type) {
              case "FBQ_NO_METHOD_NAME":
                return "You must provide an argument to fbq().";
              case "INVALID_PIXEL_ID":
                var E = D.pixelID;
                return "Invalid PixelID: " + E + ".";
              case "DUPLICATE_PIXEL_ID":
                var F = D.pixelID;
                return "Duplicate Pixel ID: " + F + ".";
              case "SET_METADATA_ON_UNINITIALIZED_PIXEL_ID":
                var G = D.metadataValue,
                  H = D.pixelID;
                return (
                  "Trying to set argument " +
                  G +
                  " for uninitialized Pixel ID " +
                  H +
                  "."
                );
              case "CONFLICTING_VERSIONS":
                return "Multiple pixels with conflicting versions were detected on this page.";
              case "MULTIPLE_PIXELS":
                return "Multiple pixels were detected on this page.";
              case "UNSUPPORTED_METADATA_ARGUMENT":
                var I = D.metadata;
                return "Unsupported metadata argument: " + I + ".";
              case "REQUIRED_PARAM_MISSING":
                var J = D.param,
                  K = D.eventName;
                return (
                  "Required parameter '" +
                  J +
                  "' is missing for event '" +
                  K +
                  "'."
                );
              case "INVALID_PARAM":
                var L = D.param,
                  M = D.eventName;
                return (
                  "Parameter '" + L + "' is invalid for event '" + M + "'."
                );
              case "NONSTANDARD_EVENT":
                var N = D.eventName;
                return (
                  "You are sending a non-standard event '" +
                  N +
                  "'. The preferred way to send these events is using trackCustom. See 'https://www.facebookmarketingdevelopers.com/pixels/up#sec-custom' for more information."
                );
              case "NEGATIVE_EVENT_PARAM":
                var O = D.param,
                  P = D.eventName;
                return (
                  "Parameter '" + O + "' is negative for event '" + P + "'."
                );
              case "PII_INVALID_TYPE":
                var Q = D.key_type,
                  R = D.key_val;
                return (
                  "An invalid " +
                  Q +
                  " was specified for '" +
                  R +
                  "'. This data will not be sent with any events for this Pixel."
                );
              default:
                B(
                  new Error(
                    "INVALID_USER_ERROR - " + D.type + " - " + JSON.stringify(D)
                  )
                );
                return "Invalid User Error.";
            }
          }
          function z(D, E) {
            try {
              var F = Math.random(),
                G =
                  a.fbq && a.fbq._releaseSegment
                    ? a.fbq._releaseSegment
                    : "unknown";
              if ((n && F < 0.01) || G === "canary") {
                var H = new k(null);
                H.append("p", "pixel");
                H.append(
                  "v",
                  a.fbq && a.fbq.version ? a.fbq.version : "unknown"
                );
                H.append("e", D.toString());
                if (j(D, Error)) {
                  H.append("f", D.fileName);
                  H.append("s", D.stackTrace || D.stack);
                }
                H.append("ue", E ? "1" : "0");
                H.append("rs", G);
                i(H, "https://connect.facebook.net/log/error");
              }
            } catch (I) {}
          }
          function A(D) {
            var E = JSON.stringify(D);
            if (!Object.prototype.hasOwnProperty.call(x, E)) x[E] = true;
            else return;
            var F = y(D);
            u(F);
            w({ action: "FB_LOG", logType: v, logMessage: F }, "*");
            z(new Error(F), true);
          }
          function B(D) {
            z(D, false);
            if (l) u(D.toString());
          }
          var C = {
            logError: B,
            logUserError: A,
            enableVerboseDebugLogging: m,
            disableAllLogging: t,
            disableSampling: o
          };
          e.exports = C;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("SignalsFBEventsOptIn", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var h = g.getFbeventsModules("SignalsFBEventsUtils"),
            i = h.each,
            j = h.filter,
            k = h.keys,
            l = h.some;
          function m(o) {
            i(k(o), function(p) {
              if (
                l(o[p], function(q) {
                  return Object.prototype.hasOwnProperty.call(o, q);
                })
              )
                throw new Error(
                  "Circular subOpts are not allowed. " +
                    p +
                    " depends on another subOpt"
                );
            });
          }
          function n(o) {
            this._opts = {};
            this._subOpts = o || {};
            m(this._subOpts);
          }
          n.prototype._getOpts = function(o) {
            return [].concat(
              da(
                Object.prototype.hasOwnProperty.call(this._subOpts, o)
                  ? this._subOpts[o]
                  : []
              ),
              [o]
            );
          };
          n.prototype._setOpt = function(o, p, q) {
            if (!this._opts[p]) this._opts[p] = {};
            this._opts[p][o] = q;
          };
          n.prototype.optIn = function(o, p) {
            var q = this,
              r =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : false;
            i(this._getOpts(p), function(s) {
              var t = r == true && q.isOptedOut(o, p);
              if (!t) q._setOpt(o, s, true);
            });
            return this;
          };
          n.prototype.optOut = function(o, p) {
            var q = this;
            i(this._getOpts(p), function(r) {
              return q._setOpt(o, r, false);
            });
            return this;
          };
          n.prototype.isOptedIn = function(o, p) {
            return this._opts[p] && this._opts[p][o] === true;
          };
          n.prototype.isOptedOut = function(o, p) {
            return this._opts[p] && this._opts[p][o] === false;
          };
          n.prototype.listPixelIds = function(o) {
            var p = this;
            return this._opts[o]
              ? j(k(this._opts[o]), function(q) {
                  return p._opts[o][q];
                })
              : [];
          };
          e.exports = n;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("SignalsFBEventsPluginPath", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var h = /([/]en_US)?[/](fbevents|signals)([.]js|[/])/;
          function i() {
            var l = null,
              m = null,
              n = b.getElementsByTagName("script");
            for (var o = 0; o < n.length && !l; o++) {
              var p = n[o].src.split(h);
              if (p.length > 1) {
                l = p[0];
                m = n[o];
              }
            }
            return { baseURL: l, scriptElement: m };
          }
          var j = null;
          function k() {
            if (!j) j = i();
            return j;
          }
          e.exports = { get: k };
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("SignalsFBEventsProxyState", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var h = false;
          e.exports = {
            getShouldProxy: function i() {
              return h;
            },
            setShouldProxy: function i(j) {
              h = j;
            }
          };
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("SignalsFBEventsQE", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var h = function h() {
            return Math.random();
          };
          function i(k) {
            var i = h();
            for (var l = 0; l < k.length; l++) {
              var m = k[l],
                n = m.passRate,
                o = ba(m.range, 2),
                p = o[0],
                q = o[1];
              if (n < 0 || n > 1)
                throw new Error(
                  "passRate should be between 0 and 1 in " + m.name
                );
              if (i >= p && i < q) {
                var r = h() < n;
                return {
                  name: m.name,
                  isInExperimentGroup: r,
                  code: m.code + (r ? "1" : "0")
                };
              }
            }
            return null;
          }
          function j(k) {
            this._groups = k;
            this._result = null;
            this._hasRolled = false;
          }
          j.prototype = {
            get: function k(l) {
              if (!this._hasRolled) {
                var m = i(this._groups);
                if (m != null) this._result = m;
                this._hasRolled = true;
              }
              if (!l) return this._result;
              if (this._result != null && this._result.name === l)
                return this._result;
              return null;
            }
          };
          e.exports = j;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("SignalsFBEventsUtils", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var h = g.getFbeventsModules("SignalsParamList"),
            i = g.getFbeventsModules("SignalsFBEventsProxyState"),
            j = Object.prototype.toString,
            k = !("addEventListener" in b);
          function l(F, G) {
            return typeof G === "function" && F instanceof G;
          }
          function m(F) {
            return Array.isArray
              ? Array.isArray(F)
              : j.call(F) === "[object Array]";
          }
          function n(F) {
            return (
              typeof F === "number" ||
              (typeof F === "string" && /^\d+$/.test(F))
            );
          }
          var o =
            Number.isInteger ||
            function(F) {
              return (
                typeof F === "number" && isFinite(F) && Math.floor(F) === F
              );
            };
          function p(F, G, H) {
            G = k ? "on" + G : G;
            var I = k ? F.attachEvent : F.addEventListener,
              J = k ? F.detachEvent : F.removeEventListener,
              K = function K() {
                if (J) J.call(F, G, K, false);
                H();
              };
            if (I) I.call(F, G, K, false);
          }
          var q = Object.prototype.hasOwnProperty,
            r = !{ toString: null }.propertyIsEnumerable("toString"),
            s = [
              "toString",
              "toLocaleString",
              "valueOf",
              "hasOwnProperty",
              "isPrototypeOf",
              "propertyIsEnumerable",
              "constructor"
            ],
            t = s.length;
          function u(F) {
            if (Object.keys) return Object.keys(F);
            if (
              (typeof F === "undefined" ? "undefined" : aa(F)) !== "object" &&
              (typeof F !== "function" || F === null)
            )
              throw new TypeError("Object.keys called on non-object");
            var G = [];
            for (var H in F) if (q.call(F, H)) G.push(H);
            if (r)
              for (var I = 0; I < t; I++) if (q.call(F, s[I])) G.push(s[I]);
            return G;
          }
          function v(F, G) {
            if (Array.prototype.map) return Array.prototype.map.call(F, G);
            var H = void 0,
              I = void 0;
            if (F == null) throw new TypeError(" array is null or not defined");
            var J = Object(F),
              K = J.length >>> 0;
            if (typeof G !== "function")
              throw new TypeError(G + " is not a function");
            H = new Array(K);
            I = 0;
            while (I < K) {
              var L, M;
              if (I in J) {
                L = J[I];
                M = G.call(null, L, I, J);
                H[I] = M;
              }
              I++;
            }
            return H;
          }
          function w(F) {
            if (this == null)
              throw new TypeError(
                "Array.prototype.some called on null or undefined"
              );
            if (typeof F !== "function") throw new TypeError();
            var G = Object(this),
              H = G.length >>> 0,
              I = arguments.length >= 2 ? arguments[1] : void 0;
            for (var J = 0; J < H; J++)
              if (J in G && F.call(I, G[J], J, G)) return true;
            return false;
          }
          function x(F) {
            return u(F).length === 0;
          }
          function y(F) {
            if (this === void 0 || this === null) throw new TypeError();
            var G = Object(this),
              H = G.length >>> 0;
            if (typeof F !== "function") throw new TypeError();
            var I = [],
              J = arguments.length >= 2 ? arguments[1] : void 0;
            for (var K = 0; K < H; K++)
              if (K in G) {
                var L = G[K];
                if (F.call(J, L, K, G)) I.push(L);
              }
            return I;
          }
          function z(F) {
            this.items = F == null ? [] : F;
          }
          z.prototype.has = function(F) {
            return w.call(this.items, function(G) {
              return G === F;
            });
          };
          z.prototype.add = function(F) {
            this.items.push(F);
          };
          function A(F, G) {
            return G && i.getShouldProxy() ? G : F;
          }
          function B(F, G, H) {
            var I = F.toQueryString(),
              J = A(G, H) + "?" + I;
            if (J.length < 2048) {
              var K = new Image();
              if (H) {
                var L = i.getShouldProxy();
                K.onerror = function() {
                  i.setShouldProxy(true);
                  if (!L) B(F, G, H);
                };
              }
              K.src = J;
              return true;
            }
            return false;
          }
          function C(F, G, H) {
            var I =
                "fb" +
                Math.random()
                  .toString()
                  .replace(".", ""),
              J = b.createElement("form");
            J.method = "post";
            J.action = A(G, H);
            J.target = I;
            J.acceptCharset = "utf-8";
            J.style.display = "none";
            var K = !!(a.attachEvent && !a.addEventListener),
              L = K ? '<iframe name="' + I + '">' : "iframe",
              M = b.createElement(L);
            M.src = "about:blank";
            M.id = I;
            M.name = I;
            J.appendChild(M);
            p(M, "load", function() {
              F.each(function(I, O) {
                var P = b.createElement("input");
                P.name = I;
                P.value = O;
                J.appendChild(P);
              });
              p(M, "load", function() {
                if (J.parentNode) J.parentNode.removeChild(J);
              });
              J.submit();
            });
            if (H) {
              var N = i.getShouldProxy();
              M.onerror = function() {
                i.setShouldProxy(true);
                if (!N) C(F, G, H);
              };
            }
            b.body.appendChild(J);
            return true;
          }
          function D(F, G, H) {
            if (a.navigator && a.navigator.sendBeacon) {
              var I = a.navigator.sendBeacon(A(G, H), F.toFormData());
              if (H && !I) {
                var J = i.getShouldProxy();
                i.setShouldProxy(true);
                if (!J) D(F, G, H);
              }
              return true;
            }
            return false;
          }
          var E = {
            isArray: m,
            isEmptyObject: x,
            isNumber: n,
            isInteger: o,
            isInstanceOf: l,
            keys: u,
            listenOnce: p,
            map: v,
            sendGET: B,
            sendPOST: C,
            sendBeacon: D,
            FBSet: z,
            each: function F(G, H) {
              v.call(this, G, H);
            },
            some: function F(G, H) {
              return w.call(G, H);
            },
            filter: function F(G, H) {
              return y.call(G, H);
            }
          };
          e.exports = E;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("SignalsParamList", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var h = "deep",
            i = "shallow";
          function j(m) {
            if (typeof JSON === "undefined" || JSON === null || !JSON.stringify)
              return Object.prototype.toString.call(m);
            else return JSON.stringify(m);
          }
          function k(m) {
            if (m === null || m === undefined) return true;
            var n = typeof m === "undefined" ? "undefined" : aa(m);
            return n === "number" || n === "boolean" || n === "string";
          }
          function l(m) {
            this._params = [];
            this._piiTranslator = m;
          }
          l.prototype.addRange = function(m) {
            var n = this;
            m.each(function(o, p) {
              return n.append(o, p);
            });
          };
          l.prototype.containsKey = function(m) {
            for (var n = 0; n < this._params.length; n++)
              if (this._params[n].name === m) return true;
            return false;
          };
          l.prototype.get = function(m) {
            var n = m;
            for (var o = 0; o < this._params.length; o++)
              if (this._params[o].name === n) return this._params[o].value;
            return null;
          };
          l.prototype.getAllParams = function() {
            return this._params;
          };
          l.prototype.append = function(m, n, o) {
            this._append(encodeURIComponent(m), n, h, o);
            return this;
          };
          l.prototype.appendHash = function(m, n) {
            for (var o in m)
              if (Object.prototype.hasOwnProperty.call(m, o))
                this._append(o, m[o], h, n);
            return this;
          };
          l.fromHash = function(m, n) {
            return new l(n).appendHash(m);
          };
          l.prototype._append = function(m, n, o, p) {
            if (k(n)) this._appendPrimitive(m, n, p);
            else if (o === h) this._appendObject(m, n, p);
            else this._appendPrimitive(m, j(n), p);
          };
          l.prototype._translateValue = function(m, n, o) {
            if (typeof n === "boolean") return n ? "true" : "false";
            if (!o) return "" + n;
            if (!this._piiTranslator) throw new Error();
            return this._piiTranslator(m, "" + n);
          };
          l.prototype._appendPrimitive = function(m, n, o) {
            if (n != null) {
              var p = this._translateValue(m, n, o);
              if (p != null) this._params.push({ name: m, value: p });
            }
          };
          l.prototype._appendObject = function(m, n, o) {
            var p = null;
            for (var q in n)
              if (Object.prototype.hasOwnProperty.call(n, q)) {
                var r = m + "[" + encodeURIComponent(q) + "]";
                try {
                  this._append(r, n[q], i, o);
                } catch (s) {
                  if (p == null) p = s;
                }
              }
            if (p != null) throw p;
          };
          l.prototype.each = function(m) {
            for (var n = 0; n < this._params.length; n++) {
              var o = this._params[n],
                p = o.name,
                q = o.value;
              m(p, q);
            }
          };
          l.prototype.toQueryString = function() {
            var m = [];
            this.each(function(n, o) {
              m.push(n + "=" + encodeURIComponent(o));
            });
            return m.join("&");
          };
          l.prototype.toFormData = function() {
            var m = new FormData();
            this.each(function(n, o) {
              m.append(n, o);
            });
            return m;
          };
          e.exports = l;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("SignalsPixelEndpoint", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var h = g.getFbeventsModules("SignalsEvents"),
            i = g.getFbeventsModules("SignalsFBEventsUtils"),
            j = i.sendGET,
            k = i.sendPOST,
            l = i.sendBeacon,
            m = g.getFbeventsModules("SignalsParamList"),
            n = h.trigger,
            o = {
              ENDPOINT: "https://www.facebook.com/tr/",
              PROXY_ENDPOINT: null
            },
            p = a.top !== a,
            q = false,
            r = function r(v) {
              q = v;
            };
          function s(v, w, x, y) {
            v.append("id", w);
            v.append("ev", x);
            v.append("dl", c.href);
            v.append("rl", b.referrer);
            v.append("if", p);
            v.append("ts", new Date().valueOf());
            v.append("cd", y);
            v.append("sw", a.screen.width);
            v.append("sh", a.screen.height);
            return v;
          }
          function t(v, w, x, y, z) {
            var A = new m(z);
            s(A, v, w, x);
            if (y) A.addRange(y);
            var B = [A, o.ENDPOINT, o.PROXY_ENDPOINT];
            if (q && l.apply(undefined, B)) {
              n("fired", "BEACON", A);
              return;
            }
            if (j.apply(undefined, B)) {
              n("fired", "GET", A);
              return;
            }
            if (k.apply(undefined, B)) {
              n("fired", "POST", A);
              return;
            }
            throw new Error("No working send method found for this fire.");
          }
          function u(v, w, x, y, z) {
            if (a.navigator && a.navigator.sendBeacon) {
              var A = new m(z);
              s(A, v, w, x);
              if (y) A.addRange(y);
              l(A, o.ENDPOINT);
            }
          }
          e.exports = {
            CONFIG: o,
            sendEvent: t,
            sendBeaconPII: u,
            setUseBeacon: r
          };
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("signalsFBEventsInjectMethod", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var h = g.getFbeventsModules("signalsFBEventsMakeSafe");
          function i(j, k, l) {
            var m = j[k],
              n = h(l);
            j[k] = function() {
              var o = m.apply(this, arguments);
              n.apply(this, arguments);
              return o;
            };
          }
          e.exports = i;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("signalsFBEventsMakeSafe", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var h = g.getFbeventsModules("SignalsFBEventsLogging"),
            i = h.logError;
          function j(k) {
            if (typeof k !== "function") return k;
            return function() {
              try {
                return k.apply(this, arguments);
              } catch (l) {
                i(l);
              }
              return undefined;
            };
          }
          e.exports = j;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    g.ensureModuleRegistered("SignalsFBEvents", function() {
      return (function(a, b, c, d) {
        var e = { exports: {} },
          f = e.exports;
        (function() {
          "use strict";
          var g = a.fbq;
          g.execStart =
            a.performance && typeof a.performance.now === "function"
              ? a.performance.now()
              : null;
          var h = g.getFbeventsModules("SignalsParamList"),
            i = g.getFbeventsModules("SignalsPixelEndpoint"),
            j = g.getFbeventsModules("SignalsEvents"),
            k = g.getFbeventsModules("SignalsFBEventsUtils"),
            l = g.getFbeventsModules("SignalsFBEventsLogging"),
            m = g.getFbeventsModules("SignalsEventValidation"),
            n = g.getFbeventsModules("SignalsFBEventsFBQ"),
            o = g.getFbeventsModules("SignalsFBEventsPluginPath"),
            p = g.getFbeventsModules("SignalsFBEventsFireLock"),
            q = g.getFbeventsModules("signalsFBEventsInjectMethod"),
            r = g.getFbeventsModules("signalsFBEventsMakeSafe"),
            s = j.on,
            t = j.once,
            u = j.trigger,
            v = k.each,
            w = k.FBSet,
            x = k.isArray,
            y = k.isInteger,
            z = k.isEmptyObject,
            A = k.isNumber,
            B = k.keys,
            C = l.logError,
            D = l.logUserError,
            E = p.global;
          function F(V) {
            return g.getFbeventsModules(V);
          }
          function G(V) {
            return g.fbIsModuleLoaded(V);
          }
          var H = {},
            I = -1,
            J = Array.prototype.slice,
            K = Object.prototype.hasOwnProperty,
            L = c.href,
            M = false,
            N = false,
            O = [],
            P = {},
            Q = b.referrer,
            R = { PageView: new w(), PixelInitialized: new w() },
            S = new n(g, P);
          function fa(V) {
            for (var W in V) if (K.call(V, W)) this[W] = V[W];
            return this;
          }
          function ga(V) {
            try {
              if (E.isLocked()) {
                g.queue.push(arguments);
                return;
              }
              var W = J.call(arguments),
                X = W.length === 1 && x(W[0]);
              if (X) W = W[0];
              if (typeof W[0] !== "string") D({ type: "FBQ_NO_METHOD_NAME" });
              if (V.slice(0, 6) === "report") {
                var Y = V.slice(6);
                if (Y === "CustomEvent") {
                  Y = (W[1] || {}).event || Y;
                  W = ["trackCustom", Y].concat(W.slice(1));
                } else W = ["track", Y].concat(W.slice(1));
              }
              V = W.shift();
              switch (V) {
                case "addPixelId":
                  M = true;
                  T.apply(this, W);
                  break;
                case "init":
                  N = true;
                  T.apply(this, W);
                  break;
                case "set":
                  ha.apply(this, W);
                  break;
                case "track":
                  if (A(W[0])) {
                    na.apply(this, W);
                    break;
                  }
                  if (X) {
                    ma.apply(this, W);
                    break;
                  }
                  la.apply(this, W);
                  break;
                case "trackCustom":
                  ma.apply(this, W);
                  break;
                case "send":
                  oa.apply(this, W);
                  break;
                case "on":
                  s.apply(null, W);
                  break;
                case "loadPlugin":
                  U(W[0]);
                  break;
                default:
                  S.callMethod(arguments);
                  break;
              }
            } catch (Z) {
              C(Z);
            }
          }
          function ha(V) {
            for (
              var W = arguments.length, X = Array(W > 1 ? W - 1 : 0), Y = 1;
              Y < W;
              Y++
            )
              X[Y - 1] = arguments[Y];
            switch (V) {
              case "endpoint":
                var Z = X[0];
                if (typeof Z !== "string")
                  throw new Error("endpoint value must be a string");
                i.CONFIG.ENDPOINT = Z;
                break;
              case "releaseSegment":
                var $ = X[0];
                if (typeof $ !== "string")
                  throw new Error("releaseSegment value must be a string");
                g._releaseSegment = $;
                break;
              case "proxy":
                var ya = X[0];
                if (i.CONFIG.PROXY_ENDPOINT)
                  throw new Error("proxy has already been set");
                if (typeof ya !== "string")
                  throw new Error("endpoint value must be a string");
                i.CONFIG.PROXY_ENDPOINT = ya;
                break;
              case "autoConfig":
                var za = X[0],
                  Aa = X[1],
                  Ba = za === true || za === "true" ? "optIn" : "optOut";
                if (typeof Aa !== "string")
                  throw new Error(
                    "Invalid pixelID supplied to set autoConfig."
                  );
                S.callMethod([Ba, Aa, "AutomaticSetup"]);
                break;
              case "experiments":
                var Ca = X[0];
                S.setExperiments(Ca);
                break;
              default:
                var Da = X[0],
                  Ea = X[1];
                if (typeof V !== "string")
                  throw new Error(
                    "The metadata setting provided in the 'set' call is invalid."
                  );
                if (typeof Da !== "string")
                  throw new Error("The metadata value must be a string.");
                if (typeof Ea !== "string")
                  throw new Error("Invalid pixelID supplied to set call.");
                ka(V, Da, Ea);
                break;
            }
          }
          g._initHandlers = [];
          g._initsDone = {};
          var ia = function ia(V) {
            return y(V) && V >= 0 && V <= Number.MAX_SAFE_INTEGER;
          };
          function T(V, W, X) {
            I = I === -1 ? Date.now() : I;
            if (typeof V === "number") {
              if (!ia(V))
                D({ type: "INVALID_PIXEL_ID", pixelID: V.toString() });
              V = V.toString();
            } else if (typeof V === "string") {
              var Y = /^[1-9][0-9]{0,25}$/;
              if (!Y.test(V)) D({ type: "INVALID_PIXEL_ID", pixelID: V });
            } else {
              D({ type: "INVALID_PIXEL_ID", pixelID: V.toString() });
              return;
            }
            if (K.call(P, V)) {
              if (W && z(P[V].userData)) {
                P[V].userData = W;
                U("identity");
              } else D({ type: "DUPLICATE_PIXEL_ID", pixelID: V });
              return;
            }
            var Z = {
              agent: X ? X.agent : null,
              id: V,
              userData: W || {},
              eventCount: 0
            };
            O.push(Z);
            P[V] = Z;
            if (W != null) U("identity");
            ja();
            S.loadConfig(V);
          }
          function ja() {
            for (var V = 0; V < g._initHandlers.length; V++) {
              var W = g._initHandlers[V];
              if (!g._initsDone[V]) g._initsDone[V] = {};
              for (var X = 0; X < O.length; X++) {
                var Y = O[X];
                if (!g._initsDone[V][Y.id]) {
                  g._initsDone[V][Y.id] = true;
                  W(Y);
                }
              }
            }
          }
          function ka(V, W, X) {
            var Y = m.validateMetadata(V);
            if (Y.error) C(Y.error);
            if (Y.warnings)
              for (var Z = 0; Z < Y.warnings.length; Z++) D(Y.warnings[Z]);
            if (K.call(P, X)) {
              for (var $ = 0, ya = O.length; $ < ya; $++)
                if (O[$].id === X) {
                  O[$][V] = W;
                  break;
                }
            } else D({ type: "SET_METADATA_ON_UNINITIALIZED_PIXEL_ID", metadataValue: W, pixelID: X });
          }
          function la(V, W) {
            W = W || {};
            m.validateEventAndLog(V, W);
            if (V === "CustomEvent" && typeof W.event === "string") V = W.event;
            ma.call(this, V, W);
          }
          function ma(V, W) {
            for (var X = 0, Y = O.length; X < Y; X++) {
              var Z = O[X];
              if (
                !(V === "PageView" && this.allowDuplicatePageViews) &&
                Object.prototype.hasOwnProperty.call(R, V) &&
                R[V].has(Z.id)
              )
                continue;
              qa(Z, V, W);
              if (Object.prototype.hasOwnProperty.call(R, V)) R[V].add(Z.id);
            }
          }
          function na(V, W) {
            qa(null, V, W);
          }
          function oa(V, W) {
            for (var X = 0, Y = O.length; X < Y; X++) qa(O[X], V, W);
          }
          function pa(V) {
            var W = new h(g.piiTranslator);
            try {
              W.append("ud", (V && V.userData) || {}, true);
            } catch (X) {
              u("pii_invalidated", V);
            }
            W.append("v", g.version);
            if (g._releaseSegment) W.append("r", g._releaseSegment);
            W.append("a", V && V.agent ? V.agent : g.agent);
            if (V) {
              W.append("ec", V.eventCount);
              V.eventCount++;
            }
            var Y = u("getCustomParameters", V);
            v(Y, function(Z) {
              return v(B(Z), function($) {
                if (W.containsKey($))
                  throw new Error(
                    "Custom parameter " + $ + " has already been specified."
                  );
                else W.append($, Z[$]);
              });
            });
            W.append("it", I);
            return W;
          }
          function qa(V, W, X) {
            i.sendEvent(V ? V.id : null, W, X, pa(V));
          }
          function ra() {
            while (g.queue.length && !E.isLocked()) {
              var V = g.queue.shift();
              ga.apply(g, V);
            }
          }
          function sa(V) {
            return "fbevents.plugins." + V;
          }
          function U(V) {
            if (/^[a-zA-Z]\w+$/.test(V) === false)
              throw new Error("Invalid plugin name: " + V);
            var W = sa(V);
            if (H[W]) return true;
            if (G(W)) {
              ta(W, F(W));
              return true;
            }
            var X = o.get();
            if (X.baseURL && X.scriptElement) {
              var Y =
                X.baseURL + "/signals/plugins/" + V + ".js?v=" + g.version;
              if (!H[W]) {
                E.lockPlugin(W);
                var Z = b.createElement("script");
                Z.src = Y;
                Z.async = true;
                if (X.scriptElement && X.scriptElement.parentNode)
                  X.scriptElement.parentNode.insertBefore(Z, X.scriptElement);
              }
            }
            return false;
          }
          function ta(V, W) {
            if (Object.prototype.hasOwnProperty.call(H, V)) return;
            if (K.call(W, "__fbEventsPlugin") && W.__fbEventsPlugin === 1) {
              H[V] = W;
              H[V].plugin(g, S);
              u("pluginLoaded", V);
            }
            E.releasePlugin(V);
          }
          E.onUnlocked(function() {
            ra();
          });
          if (g.pixelId) {
            M = true;
            T(g.pixelId);
          }
          if ((M && N) || a.fbq !== a._fbq) D({ type: "CONFLICTING_VERSIONS" });
          if (O.length > 1) D({ type: "MULTIPLE_PIXELS" });
          function ua() {
            if (g.disablePushState === true) return;
            if (!d.pushState || !d.replaceState) return;
            var V = r(function() {
              Q = L;
              L = c.href;
              if (L === Q) return;
              var W = new fa({ allowDuplicatePageViews: true });
              ga.call(W, "trackCustom", "PageView");
            });
            q(d, "pushState", V);
            q(d, "replaceState", V);
            a.addEventListener("popstate", V, false);
          }
          t("fired", function() {
            return ua();
          });
          function va(V) {
            g._initHandlers.push(V);
            ja();
          }
          function wa() {
            return { pixelInitializationTime: I, pixels: O };
          }
          function xa(g) {
            g.instance = S;
            g.callMethod = ga;
            g.loadPlugin = U;
            g.registerPlugin = ta;
            g._initHandlers = [];
            g._initsDone = {};
            g.on = s;
            g.once = t;
            g.send = oa;
            g.trigger = u;
            g.getEventCustomParameters = pa;
            g.addInitHandler = va;
            g.getState = wa;
            g.init = T;
            g.set = ha;
          }
          xa(a.fbq);
          ra();
          e.exports = {
            addInitHandler: function va(V) {
              g._initHandlers.push(V);
              ja();
            },
            doExport: xa,
            getState: wa,
            getEventCustomParameters: pa,
            sendEvent: qa,
            loadPlugin: U
          };
          u("execEnd");
          u("initialized", g);
        })();
        return e.exports;
      })(a, b, c, d);
    });
    e.exports = g.getFbeventsModules("SignalsFBEvents");
    if (g.registerPlugin) g.registerPlugin("fbevents", e.exports);
    g.ensureModuleRegistered("fbevents", function() {
      return e.exports;
    });
  })();
})(window, document, location, history);
fbq.registerPlugin("global_config", {
  __fbEventsPlugin: 1,
  plugin: function(fbq, instance) {
    fbq.loadPlugin("opttracking");
    fbq.set("experiments", {
      "0": { name: "beacon", range: [0, 0.02], code: "b", passRate: 0.5 },
      "1": {
        name: "logDataLayer",
        range: [0.02, 0.12],
        code: "d",
        passRate: 0.5
      }
    });
    instance.configLoaded("global_config");
  }
});
