/* Modernizr 2.8.3 (Custom Build) | MIT & BSD

 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load

 */
(window.Modernizr = (function(a, b, c) {
    function D(a) {
        j.cssText = a;
    }

    function E(a, b) {
        return D(n.join(a + ";") + (b || ""));
    }

    function F(a, b) {
        return typeof a === b;
    }

    function G(a, b) {
        return !!~("" + a).indexOf(b);
    }

    function H(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
        }
        return !1;
    }

    function I(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f;
        }
        return !1;
    }

    function J(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
            e = (a + " " + p.join(d + " ") + d).split(" ");
        return F(b, "string") || F(b, "undefined") ?
            H(e, b) :
            ((e = (a + " " + q.join(d + " ") + d).split(" ")), I(e, b, c));
    }

    function K() {
        (e.input = (function(c) {
            for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
            return (
                u.list &&
                (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement),
                u
            );
        })(
            "autocomplete autofocus list placeholder max min multiple pattern required step".split(
                " "
            )
        )),
        (e.inputtypes = (function(a) {
            for (var d = 0, e, f, h, i = a.length; d < i; d++)
                k.setAttribute("type", (f = a[d])),
                (e = k.type !== "text"),
                e &&
                ((k.value = l),
                    (k.style.cssText = "position:absolute;visibility:hidden;"),
                    /^range$/.test(f) && k.style.WebkitAppearance !== c ?
                    (g.appendChild(k),
                        (h = b.defaultView),
                        (e =
                            h.getComputedStyle &&
                            h.getComputedStyle(k, null).WebkitAppearance !==
                            "textfield" &&
                            k.offsetHeight !== 0),
                        g.removeChild(k)) :
                    /^(search|tel)$/.test(f) ||
                    (/^(url|email)$/.test(f) ?
                        (e = k.checkValidity && k.checkValidity() === !1) :
                        (e = k.value != l))),
                (t[a[d]] = !!e);
            return t;
        })(
            "search tel url email datetime date month week time datetime-local number range color".split(
                " "
            )
        ));
    }
    var d = "2.8.3",
        e = {},
        f = !0,
        g = b.documentElement,
        h = "modernizr",
        i = b.createElement(h),
        j = i.style,
        k = b.createElement("input"),
        l = ":)",
        m = {}.toString,
        n = " -webkit- -moz- -o- -ms- ".split(" "),
        o = "Webkit Moz O ms",
        p = o.split(" "),
        q = o.toLowerCase().split(" "),
        r = {
            svg: "http://www.w3.org/2000/svg"
        },
        s = {},
        t = {},
        u = {},
        v = [],
        w = v.slice,
        x,
        y = function(a, c, d, e) {
            var f,
                i,
                j,
                k,
                l = b.createElement("div"),
                m = b.body,
                n = m || b.createElement("body");
            if (parseInt(d, 10))
                while (d--)
                    (j = b.createElement("div")),
                    (j.id = e ? e[d] : h + (d + 1)),
                    l.appendChild(j);
            return (
                (f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join("")),
                (l.id = h),
                ((m ? l : n).innerHTML += f),
                n.appendChild(l),
                m ||
                ((n.style.background = ""),
                    (n.style.overflow = "hidden"),
                    (k = g.style.overflow),
                    (g.style.overflow = "hidden"),
                    g.appendChild(n)),
                (i = c(l, a)),
                m ?
                l.parentNode.removeChild(l) :
                (n.parentNode.removeChild(n), (g.style.overflow = k)),
                !!i
            );
        },
        z = function(b) {
            var c = a.matchMedia || a.msMatchMedia;
            if (c) return (c(b) && c(b).matches) || !1;
            var d;
            return (
                y(
                    "@media " + b + " { #" + h + " { position: absolute; } }",
                    function(b) {
                        d =
                            (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)[
                                "position"
                            ] == "absolute";
                    }
                ),
                d
            );
        },
        A = (function() {
            function d(d, e) {
                (e = e || b.createElement(a[d] || "div")), (d = "on" + d);
                var f = d in e;
                return (
                    f ||
                    (e.setAttribute || (e = b.createElement("div")),
                        e.setAttribute &&
                        e.removeAttribute &&
                        (e.setAttribute(d, ""),
                            (f = F(e[d], "function")),
                            F(e[d], "undefined") || (e[d] = c),
                            e.removeAttribute(d))),
                    (e = null),
                    f
                );
            }
            var a = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img",
            };
            return d;
        })(),
        B = {}.hasOwnProperty,
        C;
    !F(B, "undefined") && !F(B.call, "undefined") ?
        (C = function(a, b) {
            return B.call(a, b);
        }) :
        (C = function(a, b) {
            return b in a && F(a.constructor.prototype[b], "undefined");
        }),
        Function.prototype.bind ||
        (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError();
            var d = w.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a(),
                            g = c.apply(f, d.concat(w.call(arguments)));
                        return Object(g) === g ? g : f;
                    }
                    return c.apply(b, d.concat(w.call(arguments)));
                };
            return e;
        }),
        (s.flexbox = function() {
            return J("flexWrap");
        }),
        (s.canvas = function() {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d");
        }),
        (s.canvastext = function() {
            return (
                !!e.canvas &&
                !!F(b.createElement("canvas").getContext("2d").fillText, "function")
            );
        }),
        (s.webgl = function() {
            return !!a.WebGLRenderingContext;
        }),
        (s.touch = function() {
            var c;
            return (
                "ontouchstart" in a || (a.DocumentTouch && b instanceof DocumentTouch) ?
                (c = !0) :
                y(
                    [
                        "@media (",
                        n.join("touch-enabled),("),
                        h,
                        ")",
                        "{#modernizr{top:9px;position:absolute}}",
                    ].join(""),
                    function(a) {
                        c = a.offsetTop === 9;
                    }
                ),
                c
            );
        }),
        (s.geolocation = function() {
            return "geolocation" in navigator;
        }),
        (s.postmessage = function() {
            return !!a.postMessage;
        }),
        (s.websqldatabase = function() {
            return !!a.openDatabase;
        }),
        (s.indexedDB = function() {
            return !!J("indexedDB", a);
        }),
        (s.hashchange = function() {
            return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7);
        }),
        (s.history = function() {
            return !!a.history && !!history.pushState;
        }),
        (s.draganddrop = function() {
            var a = b.createElement("div");
            return "draggable" in a || ("ondragstart" in a && "ondrop" in a);
        }),
        (s.websockets = function() {
            return "WebSocket" in a || "MozWebSocket" in a;
        }),
        (s.rgba = function() {
            return (
                D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba")
            );
        }),
        (s.hsla = function() {
            return (
                D("background-color:hsla(120,40%,100%,.5)"),
                G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla")
            );
        }),
        (s.multiplebgs = function() {
            return (
                D("background:url(https://),url(https://),red url(https://)"),
                /(url\s*\(.*?){3}/.test(j.background)
            );
        }),
        (s.backgroundsize = function() {
            return J("backgroundSize");
        }),
        (s.borderimage = function() {
            return J("borderImage");
        }),
        (s.borderradius = function() {
            return J("borderRadius");
        }),
        (s.boxshadow = function() {
            return J("boxShadow");
        }),
        (s.textshadow = function() {
            return b.createElement("div").style.textShadow === "";
        }),
        (s.opacity = function() {
            return E("opacity:.55"), /^0.55$/.test(j.opacity);
        }),
        (s.cssanimations = function() {
            return J("animationName");
        }),
        (s.csscolumns = function() {
            return J("columnCount");
        }),
        (s.cssgradients = function() {
            var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return (
                D(
                    (a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(
                        0,
                        -a.length
                    )
                ),
                G(j.backgroundImage, "gradient")
            );
        }),
        (s.cssreflections = function() {
            return J("boxReflect");
        }),
        (s.csstransforms = function() {
            return !!J("transform");
        }),
        (s.csstransforms3d = function() {
            var a = !!J("perspective");
            return (
                a &&
                "webkitPerspective" in g.style &&
                y(
                    "@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
                    function(b, c) {
                        a = b.offsetLeft === 9 && b.offsetHeight === 3;
                    }
                ),
                a
            );
        }),
        (s.csstransitions = function() {
            return J("transition");
        }),
        (s.fontface = function() {
            var a;
            return (
                y(
                    '@font-face {font-family:"font";src:url("https://")}',
                    function(c, d) {
                        var e = b.getElementById("smodernizr"),
                            f = e.sheet || e.styleSheet,
                            g = f ?
                            f.cssRules && f.cssRules[0] ?
                            f.cssRules[0].cssText :
                            f.cssText || "" :
                            "";
                        a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0;
                    }
                ),
                a
            );
        }),
        (s.generatedcontent = function() {
            var a;
            return (
                y(
                    [
                        "#",
                        h,
                        "{font:0/0 a}#",
                        h,
                        ':after{content:"',
                        l,
                        '";visibility:hidden;font:3px/1 a}',
                    ].join(""),
                    function(b) {
                        a = b.offsetHeight >= 3;
                    }
                ),
                a
            );
        }),
        (s.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                if ((c = !!a.canPlayType))
                    (c = new Boolean(c)),
                    (c.ogg = a
                        .canPlayType('video/ogg; codecs="theora"')
                        .replace(/^no$/, "")),
                    (c.h264 = a
                        .canPlayType('video/mp4; codecs="avc1.42E01E"')
                        .replace(/^no$/, "")),
                    (c.webm = a
                        .canPlayType('video/webm; codecs="vp8, vorbis"')
                        .replace(/^no$/, ""));
            } catch (d) {}
            return c;
        }),
        (s.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try {
                if ((c = !!a.canPlayType))
                    (c = new Boolean(c)),
                    (c.ogg = a
                        .canPlayType('audio/ogg; codecs="vorbis"')
                        .replace(/^no$/, "")),
                    (c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, "")),
                    (c.wav = a
                        .canPlayType('audio/wav; codecs="1"')
                        .replace(/^no$/, "")),
                    (c.m4a = (
                        a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")
                    ).replace(/^no$/, ""));
            } catch (d) {}
            return c;
        }),
        (s.localstorage = function() {
            try {
                return localStorage.setItem(h, h), localStorage.removeItem(h), !0;
            } catch (a) {
                return !1;
            }
        }),
        (s.sessionstorage = function() {
            try {
                return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0;
            } catch (a) {
                return !1;
            }
        }),
        (s.webworkers = function() {
            return !!a.Worker;
        }),
        (s.applicationcache = function() {
            return !!a.applicationCache;
        }),
        (s.svg = function() {
            return (
                !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
            );
        }),
        (s.inlinesvg = function() {
            var a = b.createElement("div");
            return (
                (a.innerHTML = "<svg/>"),
                (a.firstChild && a.firstChild.namespaceURI) == r.svg
            );
        }),
        (s.smil = function() {
            return (
                !!b.createElementNS &&
                /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
            );
        }),
        (s.svgclippaths = function() {
            return (
                !!b.createElementNS &&
                /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
            );
        });
    for (var L in s)
        C(s, L) &&
        ((x = L.toLowerCase()), (e[x] = s[L]()), v.push((e[x] ? "" : "no-") + x));
    return (
        e.input || K(),
        (e.addTest = function(a, b) {
            if (typeof a == "object")
                for (var d in a) C(a, d) && e.addTest(d, a[d]);
            else {
                a = a.toLowerCase();
                if (e[a] !== c) return e;
                (b = typeof b == "function" ? b() : b),
                typeof f != "undefined" &&
                    f &&
                    (g.className += " " + (b ? "" : "no-") + a),
                    (e[a] = b);
            }
            return e;
        }),
        D(""),
        (i = k = null),
        (function(a, b) {
            function l(a, b) {
                var c = a.createElement("p"),
                    d = a.getElementsByTagName("head")[0] || a.documentElement;
                return (
                    (c.innerHTML = "x<style>" + b + "</style>"),
                    d.insertBefore(c.lastChild, d.firstChild)
                );
            }

            function m() {
                var a = s.elements;
                return typeof a == "string" ? a.split(" ") : a;
            }

            function n(a) {
                var b = j[a[h]];
                return b || ((b = {}), i++, (a[h] = i), (j[i] = b)), b;
            }

            function o(a, c, d) {
                c || (c = b);
                if (k) return c.createElement(a);
                d || (d = n(c));
                var g;
                return (
                    d.cache[a] ?
                    (g = d.cache[a].cloneNode()) :
                    f.test(a) ?
                    (g = (d.cache[a] = d.createElem(a)).cloneNode()) :
                    (g = d.createElem(a)),
                    g.canHaveChildren && !e.test(a) && !g.tagUrn ?
                    d.frag.appendChild(g) :
                    g
                );
            }

            function p(a, c) {
                a || (a = b);
                if (k) return a.createDocumentFragment();
                c = c || n(a);
                var d = c.frag.cloneNode(),
                    e = 0,
                    f = m(),
                    g = f.length;
                for (; e < g; e++) d.createElement(f[e]);
                return d;
            }

            function q(a, b) {
                b.cache ||
                    ((b.cache = {}),
                        (b.createElem = a.createElement),
                        (b.createFrag = a.createDocumentFragment),
                        (b.frag = b.createFrag())),
                    (a.createElement = function(c) {
                        return s.shivMethods ? o(c, a, b) : b.createElem(c);
                    }),
                    (a.createDocumentFragment = Function(
                        "h,f",
                        "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                        m()
                        .join()
                        .replace(/[\w\-]+/g, function(a) {
                            return (
                                b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                            );
                        }) +
                        ");return n}"
                    )(s, b.frag));
            }

            function r(a) {
                a || (a = b);
                var c = n(a);
                return (
                    s.shivCSS &&
                    !g &&
                    !c.hasCSS &&
                    (c.hasCSS = !!l(
                        a,
                        "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
                    )),
                    k || q(a, c),
                    a
                );
            }
            var c = "3.7.0",
                d = a.html5 || {},
                e =
                /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                f =
                /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                g,
                h = "_html5shiv",
                i = 0,
                j = {},
                k;
            (function() {
                try {
                    var a = b.createElement("a");
                    (a.innerHTML = "<xyz></xyz>"),
                    (g = "hidden" in a),
                    (k =
                        a.childNodes.length == 1 ||
                        (function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return (
                                typeof a.cloneNode == "undefined" ||
                                typeof a.createDocumentFragment == "undefined" ||
                                typeof a.createElement == "undefined"
                            );
                        })());
                } catch (c) {
                    (g = !0), (k = !0);
                }
            })();
            var s = {
                elements: d.elements ||
                    "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: c,
                shivCSS: d.shivCSS !== !1,
                supportsUnknownElements: k,
                shivMethods: d.shivMethods !== !1,
                type: "default",
                shivDocument: r,
                createElement: o,
                createDocumentFragment: p,
            };
            (a.html5 = s), r(b);
        })(this, b),
        (e._version = d),
        (e._prefixes = n),
        (e._domPrefixes = q),
        (e._cssomPrefixes = p),
        (e.mq = z),
        (e.hasEvent = A),
        (e.testProp = function(a) {
            return H([a]);
        }),
        (e.testAllProps = J),
        (e.testStyles = y),
        (e.prefixed = function(a, b, c) {
            return b ? J(a, b, c) : J(a, "pfx");
        }),
        (g.className =
            g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
            (f ? " js " + v.join(" ") : "")),
        e
    );
})(this, this.document)),
(function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a);
    }

    function e(a) {
        return "string" == typeof a;
    }

    function f() {}

    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
    }

    function h() {
        var a = p.shift();
        (q = 1),
        a
            ?
            a.t ?
            m(function() {
                ("c" == a.t ?
                    B.injectCss :
                    B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
            }, 0) :
            (a(), h()) :
            (q = 0);
    }

    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (
                !o &&
                g(l.readyState) &&
                ((u.r = o = 1),
                    !q && h(),
                    (l.onload = l.onreadystatechange = null),
                    b)
            ) {
                "img" != a &&
                    m(function() {
                        t.removeChild(l);
                    }, 50);
                for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
            }
        }
        var j = j || B.errorTimeout,
            l = b.createElement(a),
            o = 0,
            r = 0,
            u = {
                t: d,
                s: c,
                e: f,
                a: i,
                x: j
            };
        1 === y[c] && ((r = 1), (y[c] = [])),
            "object" == a ? (l.data = c) : ((l.src = c), (l.type = a)),
            (l.width = l.height = "0"),
            (l.onerror =
                l.onload =
                l.onreadystatechange =
                function() {
                    k.call(this, r);
                }),
            p.splice(e, 0, u),
            "img" != a &&
            (r || 2 === y[c] ?
                (t.insertBefore(l, s ? null : n), m(k, j)) :
                y[c].push(l));
    }

    function j(a, b, c, d, f) {
        return (
            (q = 0),
            (b = b || "j"),
            e(a) ?
            i("c" == b ? v : u, a, b, this.i++, c, d, f) :
            (p.splice(this.i++, 0, a), 1 == p.length && h()),
            this
        );
    }

    function k() {
        var a = B;
        return (a.loader = {
            load: j,
            i: 0
        }), a;
    }
    var l = b.documentElement,
        m = a.setTimeout,
        n = b.getElementsByTagName("script")[0],
        o = {}.toString,
        p = [],
        q = 0,
        r = "MozAppearance" in l.style,
        s = r && !!b.createRange().compareNode,
        t = s ? l : n.parentNode,
        l = a.opera && "[object Opera]" == o.call(a.opera),
        l = !!b.attachEvent && !l,
        u = r ? "object" : l ? "script" : "img",
        v = l ? "script" : u,
        w =
        Array.isArray ||
        function(a) {
            return "[object Array]" == o.call(a);
        },
        x = [],
        y = {},
        z = {
            timeout: function(a, b) {
                return b.length && (a.timeout = b[0]), a;
            },
        },
        A,
        B;
    (B = function(a) {
        function b(a) {
            var a = a.split("!"),
                b = x.length,
                c = a.pop(),
                d = a.length,
                c = {
                    url: c,
                    origUrl: c,
                    prefixes: a
                },
                e,
                f,
                g;
            for (f = 0; f < d; f++)
                (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++) c = x[f](c);
            return c;
        }

        function g(a, e, f, g, h) {
            var i = b(a),
                j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(),
                i.bypass ||
                (e &&
                    (e = d(e) ?
                        e :
                        e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
                    i.instead ?
                    i.instead(a, e, f, g, h) :
                    (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
                        f.load(
                            i.url,
                            i.forceCSS ||
                            (!i.forceJS &&
                                "css" == i.url.split(".").pop().split("?").shift()) ?
                            "c" :
                            c,
                            i.noexec,
                            i.attrs,
                            i.timeout
                        ),
                        (d(e) || d(j)) &&
                        f.load(function() {
                            k(),
                                e && e(i.origUrl, h, g),
                                j && j(i.origUrl, h, g),
                                (y[i.url] = 2);
                        })));
        }

        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))
                        c ||
                        (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l();
                        }),
                        g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in ((m = (function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b;
                                })()),
                                a))
                            a.hasOwnProperty(n) &&
                            (!c &&
                                !--m &&
                                (d(j) ?
                                    (j = function() {
                                        var a = [].slice.call(arguments);
                                        k.apply(this, a), l();
                                    }) :
                                    (j[n] = (function(a) {
                                        return function() {
                                            var b = [].slice.call(arguments);
                                            a && a.apply(this, b), l();
                                        };
                                    })(k[n]))),
                                g(a[n], j, b, n, h));
                } else !c && l();
            }
            var h = !!a.test,
                i = a.load || a.both,
                j = a.callback || f,
                k = j,
                l = a.complete || f,
                m,
                n;
            c(h ? a.yep : a.nope, !!i), i && c(i);
        }
        var i,
            j,
            l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++)
                (j = a[i]),
                e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else Object(a) === a && h(a, l);
    }),
    (B.addPrefix = function(a, b) {
        z[a] = b;
    }),
    (B.addFilter = function(a) {
        x.push(a);
    }),
    (B.errorTimeout = 1e4),
    null == b.readyState &&
        b.addEventListener &&
        ((b.readyState = "loading"),
            b.addEventListener(
                "DOMContentLoaded",
                (A = function() {
                    b.removeEventListener("DOMContentLoaded", A, 0),
                        (b.readyState = "complete");
                }),
                0
            )),
        (a.yepnope = k()),
        (a.yepnope.executeStack = h),
        (a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l,
                o,
                e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            (c = j ? h : c || f),
            (k.onreadystatechange = k.onload =
                function() {
                    !l &&
                        g(k.readyState) &&
                        ((l = 1), c(), (k.onload = k.onreadystatechange = null));
                }),
            m(function() {
                    l || ((l = 1), c(1));
                }, e),
                i ? k.onload() : n.parentNode.insertBefore(k, n);
        }),
        (a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j,
                c = i ? h : c || f;
            (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0));
        });
})(this, document),
(Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0));
});

/*modernizr end */

/*! Detectizr v2.2.0 | (c) 2012 Baris Aydinoglu | Licensed  */

window.Detectizr = (function(a, b, c, d) {
    var e = {},
        f = a.Modernizr,
        g = ["tv", "tablet", "mobile", "desktop"],
        h = {
            addAllFeaturesAsClass: !1,
            detectDevice: !0,
            detectDeviceModel: !0,
            detectScreen: !0,
            detectOS: !0,
            detectBrowser: !0,
            detectPlugins: !0,
        },
        i = [{
                name: "adobereader",
                substrs: ["Adobe", "Acrobat"],
                progIds: ["AcroPDF.PDF", "PDF.PDFCtrl.5"],
            },
            {
                name: "flash",
                substrs: ["Shockwave Flash"],
                progIds: ["ShockwaveFlash.ShockwaveFlash.1"],
            },
            {
                name: "wmplayer",
                substrs: ["Windows Media"],
                progIds: ["wmplayer.ocx"]
            },
            {
                name: "silverlight",
                substrs: ["Silverlight"],
                progIds: ["AgControl.AgControl"],
            },
            {
                name: "quicktime",
                substrs: ["QuickTime"],
                progIds: ["QuickTime.QuickTime"],
            },
        ],
        j = /[\t\r\n]/g,
        k = c.documentElement,
        l,
        m;

    function n(a, b) {
        var c, d, e;
        if (arguments.length > 2)
            for (c = 1, d = arguments.length; d > c; c += 1) n(a, arguments[c]);
        else
            for (e in b) b.hasOwnProperty(e) && (a[e] = b[e]);
        return a;
    }

    function o(a) {
        return e.browser.userAgent.indexOf(a) > -1;
    }

    function p(a) {
        return a.test(e.browser.userAgent);
    }

    function q(a) {
        return a.exec(e.browser.userAgent);
    }

    function r(a) {
        return a.replace(/^\s+|\s+$/g, "");
    }

    function s(a) {
        return null === a || a === d ?
            "" :
            String(a).replace(/((\s|\-|\.)+[a-z0-9])/g, function(a) {
                return a.toUpperCase().replace(/(\s|\-|\.)/g, "");
            });
    }

    function t(a, b) {
        var c = b || "",
            d =
            1 === a.nodeType &&
            (a.className ? (" " + a.className + " ").replace(j, " ") : "");
        if (d) {
            while (d.indexOf(" " + c + " ") >= 0) d = d.replace(" " + c + " ", " ");
            a.className = b ? r(d) : "";
        }
    }

    function u(a, b, c) {
        a &&
            ((a = s(a)),
                b && ((b = s(b)), v(a + b, !0), c && v(a + b + "_" + c, !0)));
    }

    function v(a, b) {
        a &&
            f &&
            (h.addAllFeaturesAsClass ?
                f.addTest(a, b) :
                ((b = "function" == typeof b ? b() : b),
                    b ? f.addTest(a, !0) : (delete f[a], t(k, a))));
    }

    function w(a, b) {
        a.version = b;
        var c = b.split(".");
        c.length > 0 ?
            ((c = c.reverse()),
                (a.major = c.pop()),
                c.length > 0 ?
                ((a.minor = c.pop()),
                    c.length > 0 ?
                    ((c = c.reverse()), (a.patch = c.join("."))) :
                    (a.patch = "0")) :
                (a.minor = "0")) :
            (a.major = "0");
    }

    function x() {
        a.clearTimeout(l),
            (l = a.setTimeout(function() {
                (m = e.device.orientation),
                a.innerHeight > a.innerWidth ?
                    (e.device.orientation = "portrait") :
                    (e.device.orientation = "landscape"),
                    v(e.device.orientation, !0),
                    m !== e.device.orientation && v(m, !1);
            }, 10));
    }

    function y(a) {
        var c = b.plugins,
            d,
            e,
            f,
            g,
            h;
        for (g = c.length - 1; g >= 0; g--) {
            for (
                d = c[g], e = d.name + d.description, f = 0, h = a.length; h >= 0; h--
            )
                -
                1 !== e.indexOf(a[h]) && (f += 1);
            if (f === a.length) return !0;
        }
        return !1;
    }

    function z(a) {
        var b;
        for (b = a.length - 1; b >= 0; b--)
            try {
                new ActiveXObject(a[b]);
            } catch (c) {}
        return !1;
    }

    function A(d) {
        var j, k, l, m, r, t, A;
        if (((h = n({}, h, d || {})), h.detectDevice)) {
            for (
                e.device = {
                    type: "",
                    model: "",
                    orientation: ""
                },
                l = e.device,
                p(
                    /googletv|smarttv|smart-tv|internet.tv|netcast|nettv|appletv|boxee|kylo|roku|dlnadoc|roku|pov_tv|hbbtv|ce\-html/
                ) ?
                ((l.type = g[0]), (l.model = "smartTv")) :
                p(/xbox|playstation.3|wii/) ?
                ((l.type = g[0]), (l.model = "gameConsole")) :
                p(/ip(a|ro)d/) ?
                ((l.type = g[1]), (l.model = "ipad")) :
                (p(/tablet/) && !p(/rx-34/)) || p(/folio/) ?
                ((l.type = g[1]), (l.model = String(q(/playbook/) || ""))) :
                p(/linux/) &&
                p(/android/) &&
                !p(/fennec|mobi|htc.magic|htcX06ht|nexus.one|sc-02b|fone.945/) ?
                ((l.type = g[1]), (l.model = "android")) :
                p(/kindle/) || (p(/mac.os/) && p(/silk/)) ?
                ((l.type = g[1]), (l.model = "kindle")) :
                p(
                    /gt-p10|sc-01c|shw-m180s|sgh-t849|sch-i800|shw-m180l|sph-p100|sgh-i987|zt180|htc(.flyer|\_flyer)|sprint.atp51|viewpad7|pandigital(sprnova|nova)|ideos.s7|dell.streak.7|advent.vega|a101it|a70bht|mid7015|next2|nook/
                ) ||
                (p(/mb511/) && p(/rutem/)) ?
                ((l.type = g[1]), (l.model = "android")) :
                p(/bb10/) ?
                ((l.type = g[1]), (l.model = "blackberry")) :
                ((l.model = q(
                        /iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/
                    )),
                    null !== l.model ?
                    ((l.type = g[2]), (l.model = String(l.model))) :
                    ((l.model = ""),
                        p(
                            /bolt|fennec|iris|maemo|minimo|mobi|mowser|netfront|novarra|prism|rx-34|skyfire|tear|xv6875|xv6975|google.wireless.transcoder/
                        ) ?
                        (l.type = g[2]) :
                        p(/opera/) &&
                        p(/windows.nt.5/) &&
                        p(
                            /htc|xda|mini|vario|samsung\-gt\-i8000|samsung\-sgh\-i9/
                        ) ?
                        (l.type = g[2]) :
                        (p(/windows.(nt|xp|me|9)/) && !p(/phone/)) ||
                        p(/win(9|.9|nt)/) ||
                        p(/\(windows 8\)/) ?
                        (l.type = g[3]) :
                        p(/macintosh|powerpc/) && !p(/silk/) ?
                        ((l.type = g[3]), (l.model = "mac")) :
                        p(/linux/) && p(/x11/) ?
                        (l.type = g[3]) :
                        p(/solaris|sunos|bsd/) ?
                        (l.type = g[3]) :
                        p(/cros/) ?
                        (l.type = g[3]) :
                        p(
                            /bot|crawler|spider|yahoo|ia_archiver|covario-ids|findlinks|dataparksearch|larbin|mediapartners-google|ng-search|snappy|teoma|jeeves|tineye/
                        ) && !p(/mobile/) ?
                        ((l.type = g[3]), (l.model = "crawler")) :
                        (l.type = g[2]))),
                j = 0,
                k = g.length; k > j; j += 1
            )
                v(g[j], l.type === g[j]);
            h.detectDeviceModel && v(s(l.model), !0);
        }
        if (
            (h.detectScreen &&
                ((l.screen = {}),
                    f &&
                    f.mq &&
                    (f.mq("only screen and (max-width: 240px)") ?
                        ((l.screen.size = "veryVerySmall"), v("veryVerySmallScreen", !0)) :
                        f.mq("only screen and (max-width: 320px)") ?
                        ((l.screen.size = "verySmall"), v("verySmallScreen", !0)) :
                        f.mq("only screen and (max-width: 480px)") &&
                        ((l.screen.size = "small"), v("smallScreen", !0)),
                        (l.type === g[1] || l.type === g[2]) &&
                        f.mq(
                            "only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)"
                        ) &&
                        ((l.screen.resolution = "high"), v("highresolution", !0))),
                    l.type === g[1] || l.type === g[2] ?
                    ((a.onresize = function(a) {
                            x(a);
                        }),
                        x()) :
                    ((l.orientation = "landscape"), v(l.orientation, !0))),
                h.detectOS &&
                ((e.os = {}),
                    (m = e.os),
                    "" !== l.model &&
                    ("ipad" === l.model || "iphone" === l.model || "ipod" === l.model ?
                        ((m.name = "ios"),
                            w(m, (p(/os\s([\d_]+)/) ? RegExp.$1 : "").replace(/_/g, "."))) :
                        "android" === l.model ?
                        ((m.name = "android"),
                            w(m, p(/android\s([\d\.]+)/) ? RegExp.$1 : "")) :
                        "blackberry" === l.model ?
                        ((m.name = "blackberry"),
                            w(m, p(/version\/([^\s]+)/) ? RegExp.$1 : "")) :
                        "playbook" === l.model &&
                        ((m.name = "blackberry"),
                            w(m, p(/os ([^\s]+)/) ? RegExp.$1.replace(";", "") : ""))),
                    m.name ||
                    (o("win") || o("16bit") ?
                        ((m.name = "windows"),
                            o("windows nt 10") ?
                            w(m, "10") :
                            o("windows nt 6.3") ?
                            w(m, "8.1") :
                            o("windows nt 6.2") || p(/\(windows 8\)/) ?
                            w(m, "8") :
                            o("windows nt 6.1") ?
                            w(m, "7") :
                            o("windows nt 6.0") ?
                            w(m, "vista") :
                            o("windows nt 5.2") || o("windows nt 5.1") || o("windows xp") ?
                            w(m, "xp") :
                            o("windows nt 5.0") || o("windows 2000") ?
                            w(m, "2k") :
                            o("winnt") || o("windows nt") ?
                            w(m, "nt") :
                            o("win98") || o("windows 98") ?
                            w(m, "98") :
                            (o("win95") || o("windows 95")) && w(m, "95")) :
                        o("mac") || o("darwin") ?
                        ((m.name = "mac os"),
                            o("68k") || o("68000") ?
                            w(m, "68k") :
                            o("ppc") || o("powerpc") ?
                            w(m, "ppc") :
                            o("os x") &&
                            w(
                                m,
                                (p(/os\sx\s([\d_]+)/) ? RegExp.$1 : "os x").replace(
                                    /_/g,
                                    "."
                                )
                            )) :
                        o("webtv") ?
                        (m.name = "webtv") :
                        o("x11") || o("inux") ?
                        (m.name = "linux") :
                        o("sunos") ?
                        (m.name = "sun") :
                        o("irix") ?
                        (m.name = "irix") :
                        o("freebsd") ?
                        (m.name = "freebsd") :
                        o("bsd") && (m.name = "bsd")),
                    m.name &&
                    (v(m.name, !0),
                        m.major &&
                        (u(m.name, m.major), m.minor && u(m.name, m.major, m.minor))),
                    p(/\sx64|\sx86|\swin64|\swow64|\samd64/) ?
                    (m.addressRegisterSize = "64bit") :
                    (m.addressRegisterSize = "32bit"),
                    v(m.addressRegisterSize, !0)),
                h.detectBrowser &&
                ((r = e.browser),
                    p(/opera|webtv/) || (!p(/msie\s([\d\w\.]+)/) && !o("trident")) ?
                    o("firefox") ?
                    ((r.engine = "gecko"),
                        (r.name = "firefox"),
                        w(r, p(/firefox\/([\d\w\.]+)/) ? RegExp.$1 : "")) :
                    o("gecko/") ?
                    (r.engine = "gecko") :
                    o("opera") ?
                    ((r.name = "opera"),
                        (r.engine = "presto"),
                        w(
                            r,
                            p(/version\/([\d\.]+)/) ?
                            RegExp.$1 :
                            p(/opera(\s|\/)([\d\.]+)/) ?
                            RegExp.$2 :
                            ""
                        )) :
                    o("konqueror") ?
                    (r.name = "konqueror") :
                    o("edge") ?
                    ((r.engine = "webkit"),
                        (r.name = "edge"),
                        w(r, p(/edge\/([\d\.]+)/) ? RegExp.$1 : "")) :
                    o("chrome") ?
                    ((r.engine = "webkit"),
                        (r.name = "chrome"),
                        w(r, p(/chrome\/([\d\.]+)/) ? RegExp.$1 : "")) :
                    o("iron") ?
                    ((r.engine = "webkit"), (r.name = "iron")) :
                    o("crios") ?
                    ((r.name = "chrome"),
                        (r.engine = "webkit"),
                        w(r, p(/crios\/([\d\.]+)/) ? RegExp.$1 : "")) :
                    o("applewebkit/") ?
                    ((r.name = "safari"),
                        (r.engine = "webkit"),
                        w(r, p(/version\/([\d\.]+)/) ? RegExp.$1 : "")) :
                    o("mozilla/") && (r.engine = "gecko") :
                    ((r.engine = "trident"),
                        (r.name = "ie"),
                        !a.addEventListener && c.documentMode && 7 === c.documentMode ?
                        w(r, "8.compat") :
                        p(/trident.*rv[ :](\d+)\./) ?
                        w(r, RegExp.$1) :
                        w(r, p(/trident\/4\.0/) ? "8" : RegExp.$1)),
                    r.name &&
                    (v(r.name, !0),
                        r.major &&
                        (u(r.name, r.major), r.minor && u(r.name, r.major, r.minor))),
                    v(r.engine, !0),
                    (r.language = b.userLanguage || b.language),
                    v(r.language, !0)),
                h.detectPlugins)
        ) {
            for (r.plugins = [], j = i.length - 1; j >= 0; j--)
                (t = i[j]),
                (A = !1),
                a.ActiveXObject ?
                (A = z(t.progIds)) :
                b.plugins && (A = y(t.substrs)),
                A && (r.plugins.push(t.name), v(t.name, !0));
            b.javaEnabled() && (r.plugins.push("java"), v("java", !0));
        }
    }
    return (
        (e.detect = function(a) {
            return A(a);
        }),
        (e.init = function() {
            e !== d &&
                ((e.browser = {
                        userAgent: (b.userAgent || b.vendor || a.opera).toLowerCase(),
                    }),
                    e.detect());
        }),
        e.init(),
        e
    );
})(this, this.navigator, this.document);

//# sourceMappingURL=detectizr.min.map

/*Detectizr end*/

/*! Respond.js v1.4.2: min/max-width media query polyfill

 * Copyright 2014 Scott Jehl

 * Licensed under MIT

 * http://j.mp/respondjs */

!(function(a) {
    "use strict";
    a.matchMedia =
        a.matchMedia ||
        (function(a) {
            var b,
                c = a.documentElement,
                d = c.firstElementChild || c.firstChild,
                e = a.createElement("body"),
                f = a.createElement("div");
            return (
                (f.id = "mq-test-1"),
                (f.style.cssText = "position:absolute;top:-100em"),
                (e.style.background = "none"),
                e.appendChild(f),
                function(a) {
                    return (
                        (f.innerHTML =
                            '&shy;<style media="' +
                            a +
                            '"> #mq-test-1 { width: 42px; }</style>'),
                        c.insertBefore(e, d),
                        (b = 42 === f.offsetWidth),
                        c.removeChild(e), {
                            matches: b,
                            media: a
                        }
                    );
                }
            );
        })(a.document);
})(this),
(function(a) {
    "use strict";

    function b() {
        v(!0);
    }
    var c = {};
    (a.respond = c), (c.update = function() {});
    var d = [],
        e = (function() {
            var b = !1;
            try {
                b = new a.XMLHttpRequest();
            } catch (c) {
                b = new a.ActiveXObject("Microsoft.XMLHTTP");
            }
            return function() {
                return b;
            };
        })(),
        f = function(a, b) {
            var c = e();
            c &&
                (c.open("GET", a, !0),
                    (c.onreadystatechange = function() {
                        4 !== c.readyState ||
                            (200 !== c.status && 304 !== c.status) ||
                            b(c.responseText);
                    }),
                    4 !== c.readyState && c.send(null));
        },
        g = function(a) {
            return a.replace(c.regex.minmaxwh, "").match(c.regex.other);
        };
    if (
        ((c.ajax = f),
            (c.queue = d),
            (c.unsupportedmq = g),
            (c.regex = {
                media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
                keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
                comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
                urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
                findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
                only: /(only\s+)?([a-zA-Z]+)\s?/,
                minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
                maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
                minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
                other: /\([^\)]*\)/g,
            }),
            (c.mediaQueriesSupported =
                a.matchMedia &&
                null !== a.matchMedia("only all") &&
                a.matchMedia("only all").matches),
            !c.mediaQueriesSupported)
    ) {
        var h,
            i,
            j,
            k = a.document,
            l = k.documentElement,
            m = [],
            n = [],
            o = [],
            p = {},
            q = 30,
            r = k.getElementsByTagName("head")[0] || l,
            s = k.getElementsByTagName("base")[0],
            t = r.getElementsByTagName("link"),
            u = function() {
                var a,
                    b = k.createElement("div"),
                    c = k.body,
                    d = l.style.fontSize,
                    e = c && c.style.fontSize,
                    f = !1;
                return (
                    (b.style.cssText = "position:absolute;font-size:1em;width:1em"),
                    c ||
                    ((c = f = k.createElement("body")),
                        (c.style.background = "none")),
                    (l.style.fontSize = "100%"),
                    (c.style.fontSize = "100%"),
                    c.appendChild(b),
                    f && l.insertBefore(c, l.firstChild),
                    (a = b.offsetWidth),
                    f ? l.removeChild(c) : c.removeChild(b),
                    (l.style.fontSize = d),
                    e && (c.style.fontSize = e),
                    (a = j = parseFloat(a))
                );
            },
            v = function(b) {
                var c = "clientWidth",
                    d = l[c],
                    e = ("CSS1Compat" === k.compatMode && d) || k.body[c] || d,
                    f = {},
                    g = t[t.length - 1],
                    p = new Date().getTime();
                if (b && h && q > p - h)
                    return a.clearTimeout(i), (i = a.setTimeout(v, q)), void 0;
                h = p;
                for (var s in m)
                    if (m.hasOwnProperty(s)) {
                        var w = m[s],
                            x = w.minw,
                            y = w.maxw,
                            z = null === x,
                            A = null === y,
                            B = "em";
                        x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? j || u() : 1)),
                            y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? j || u() : 1)),
                            (w.hasquery &&
                                ((z && A) || !(z || e >= x) || !(A || y >= e))) ||
                            (f[w.media] || (f[w.media] = []),
                                f[w.media].push(n[w.rules]));
                    }
                for (var C in o)
                    o.hasOwnProperty(C) &&
                    o[C] &&
                    o[C].parentNode === r &&
                    r.removeChild(o[C]);
                o.length = 0;
                for (var D in f)
                    if (f.hasOwnProperty(D)) {
                        var E = k.createElement("style"),
                            F = f[D].join("\n");
                        (E.type = "text/css"),
                        (E.media = D),
                        r.insertBefore(E, g.nextSibling),
                            E.styleSheet ?
                            (E.styleSheet.cssText = F) :
                            E.appendChild(k.createTextNode(F)),
                            o.push(E);
                    }
            },
            w = function(a, b, d) {
                var e = a
                    .replace(c.regex.comments, "")
                    .replace(c.regex.keyframes, "")
                    .match(c.regex.media),
                    f = (e && e.length) || 0;
                b = b.substring(0, b.lastIndexOf("/"));
                var h = function(a) {
                        return a.replace(c.regex.urls, "$1" + b + "$2$3");
                    },
                    i = !f && d;
                b.length && (b += "/"), i && (f = 1);
                for (var j = 0; f > j; j++) {
                    var k, l, o, p;
                    i
                        ?
                        ((k = d), n.push(h(a))) :
                        ((k = e[j].match(c.regex.findStyles) && RegExp.$1),
                            n.push(RegExp.$2 && h(RegExp.$2))),
                        (o = k.split(",")),
                        (p = o.length);
                    for (var q = 0; p > q; q++)
                        (l = o[q]),
                        g(l) ||
                        m.push({
                            media: (l.split("(")[0].match(c.regex.only) && RegExp.$2) ||
                                "all",
                            rules: n.length - 1,
                            hasquery: l.indexOf("(") > -1,
                            minw: l.match(c.regex.minw) &&
                                parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                            maxw: l.match(c.regex.maxw) &&
                                parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                        });
                }
                v();
            },
            x = function() {
                if (d.length) {
                    var b = d.shift();
                    f(b.href, function(c) {
                        w(c, b.href, b.media),
                            (p[b.href] = !0),
                            a.setTimeout(function() {
                                x();
                            }, 0);
                    });
                }
            },
            y = function() {
                for (var b = 0; b < t.length; b++) {
                    var c = t[b],
                        e = c.href,
                        f = c.media,
                        g = c.rel && "stylesheet" === c.rel.toLowerCase();
                    e &&
                        g &&
                        !p[e] &&
                        (c.styleSheet && c.styleSheet.rawCssText ?
                            (w(c.styleSheet.rawCssText, e, f), (p[e] = !0)) :
                            ((!/^([a-zA-Z:]*\/\/)/.test(e) && !s) ||
                                e.replace(RegExp.$1, "").split("/")[0] ===
                                a.location.host) &&
                            ("//" === e.substring(0, 2) && (e = a.location.protocol + e),
                                d.push({
                                    href: e,
                                    media: f
                                })));
                }
                x();
            };
        y(),
            (c.update = y),
            (c.getEmValue = u),
            a.addEventListener ?
            a.addEventListener("resize", b, !1) :
            a.attachEvent && a.attachEvent("onresize", b);
    }
})(this);

/*respond end*/

/*iscroll start*/

!(function(t, i, s) {
    function e(s, e) {
        (this.wrapper = "string" == typeof s ? i.querySelector(s) : s),
        (this.scroller = this.wrapper.children[0]),
        (this.scrollerStyle = this.scroller.style),
        (this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: 0.334,
            disablePointer: !h.hasPointer,
            disableTouch: h.hasPointer || !h.hasTouch,
            disableMouse: h.hasPointer || h.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: "undefined" == typeof t.onmousedown,
        });
        for (var o in e) this.options[o] = e[o];
        (this.translateZ =
            this.options.HWCompositing && h.hasPerspective ? " translateZ(0)" : ""),
        (this.options.useTransition =
            h.hasTransition && this.options.useTransition),
        (this.options.useTransform = h.hasTransform && this.options.useTransform),
        (this.options.eventPassthrough =
            this.options.eventPassthrough === !0 ?
            "vertical" :
            this.options.eventPassthrough),
        (this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault),
        (this.options.scrollY =
            "vertical" == this.options.eventPassthrough ?
            !1 :
            this.options.scrollY),
        (this.options.scrollX =
            "horizontal" == this.options.eventPassthrough ?
            !1 :
            this.options.scrollX),
        (this.options.freeScroll =
            this.options.freeScroll && !this.options.eventPassthrough),
        (this.options.directionLockThreshold = this.options.eventPassthrough ?
            0 :
            this.options.directionLockThreshold),
        (this.options.bounceEasing =
            "string" == typeof this.options.bounceEasing ?
            h.ease[this.options.bounceEasing] || h.ease.circular :
            this.options.bounceEasing),
        (this.options.resizePolling =
            void 0 === this.options.resizePolling ?
            60 :
            this.options.resizePolling),
        this.options.tap === !0 && (this.options.tap = "tap"),
            this.options.useTransition ||
            this.options.useTransform ||
            /relative|absolute/i.test(this.scrollerStyle.position) ||
            (this.scrollerStyle.position = "relative"),
            "scale" == this.options.shrinkScrollbars &&
            (this.options.useTransition = !1),
            (this.options.invertWheelDirection = this.options.invertWheelDirection ?
                -1 :
                1),
            (this.x = 0),
            (this.y = 0),
            (this.directionX = 0),
            (this.directionY = 0),
            (this._events = {}),
            this._init(),
            this.refresh(),
            this.scrollTo(this.options.startX, this.options.startY),
            this.enable();
    }

    function o(t, s, e) {
        var o = i.createElement("div"),
            n = i.createElement("div");
        return (
            e === !0 &&
            ((o.style.cssText = "position:absolute;z-index:9999"),
                (n.style.cssText =
                    "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px")),
            (n.className = "iScrollIndicator"),
            "h" == t ?
            (e === !0 &&
                ((o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0"),
                    (n.style.height = "100%")),
                (o.className = "iScrollHorizontalScrollbar")) :
            (e === !0 &&
                ((o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px"),
                    (n.style.width = "100%")),
                (o.className = "iScrollVerticalScrollbar")),
            (o.style.cssText += ";overflow:hidden"),
            s || (o.style.pointerEvents = "none"),
            o.appendChild(n),
            o
        );
    }

    function n(s, e) {
        (this.wrapper = "string" == typeof e.el ? i.querySelector(e.el) : e.el),
        (this.wrapperStyle = this.wrapper.style),
        (this.indicator = this.wrapper.children[0]),
        (this.indicatorStyle = this.indicator.style),
        (this.scroller = s),
        (this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0,
        });
        for (var o in e) this.options[o] = e[o];
        if (
            ((this.sizeRatioX = 1),
                (this.sizeRatioY = 1),
                (this.maxPosX = 0),
                (this.maxPosY = 0),
                this.options.interactive &&
                (this.options.disableTouch ||
                    (h.addEvent(this.indicator, "touchstart", this),
                        h.addEvent(t, "touchend", this)),
                    this.options.disablePointer ||
                    (h.addEvent(
                            this.indicator,
                            h.prefixPointerEvent("pointerdown"),
                            this
                        ),
                        h.addEvent(t, h.prefixPointerEvent("pointerup"), this)),
                    this.options.disableMouse ||
                    (h.addEvent(this.indicator, "mousedown", this),
                        h.addEvent(t, "mouseup", this))),
                this.options.fade)
        ) {
            this.wrapperStyle[h.style.transform] = this.scroller.translateZ;
            var n = h.style.transitionDuration;
            if (!n) return;
            this.wrapperStyle[n] = h.isBadAndroid ? "0.0001ms" : "0ms";
            var a = this;
            h.isBadAndroid &&
                r(function() {
                    "0.0001ms" === a.wrapperStyle[n] && (a.wrapperStyle[n] = "0s");
                }),
                (this.wrapperStyle.opacity = "0");
        }
    }
    var r =
        t.requestAnimationFrame ||
        t.webkitRequestAnimationFrame ||
        t.mozRequestAnimationFrame ||
        t.oRequestAnimationFrame ||
        t.msRequestAnimationFrame ||
        function(i) {
            t.setTimeout(i, 1e3 / 60);
        },
        h = (function() {
            function e(t) {
                return r === !1 ?
                    !1 :
                    "" === r ?
                    t :
                    r + t.charAt(0).toUpperCase() + t.substr(1);
            }
            var o = {},
                n = i.createElement("div").style,
                r = (function() {
                    for (
                        var t,
                            i = ["t", "webkitT", "MozT", "msT", "OT"],
                            s = 0,
                            e = i.length; e > s; s++
                    )
                        if (((t = i[s] + "ransform"), t in n))
                            return i[s].substr(0, i[s].length - 1);
                    return !1;
                })();
            (o.getTime =
                Date.now ||
                function() {
                    return new Date().getTime();
                }),
            (o.extend = function(t, i) {
                for (var s in i) t[s] = i[s];
            }),
            (o.addEvent = function(t, i, s, e) {
                t.addEventListener(i, s, !!e);
            }),
            (o.removeEvent = function(t, i, s, e) {
                t.removeEventListener(i, s, !!e);
            }),
            (o.prefixPointerEvent = function(i) {
                return t.MSPointerEvent ?
                    "MSPointer" + i.charAt(7).toUpperCase() + i.substr(8) :
                    i;
            }),
            (o.momentum = function(t, i, e, o, n, r) {
                var h,
                    a,
                    l = t - i,
                    c = s.abs(l) / e;
                return (
                    (r = void 0 === r ? 6e-4 : r),
                    (h = t + ((c * c) / (2 * r)) * (0 > l ? -1 : 1)),
                    (a = c / r),
                    o > h ?
                    ((h = n ? o - (n / 2.5) * (c / 8) : o),
                        (l = s.abs(h - t)),
                        (a = l / c)) :
                    h > 0 &&
                    ((h = n ? (n / 2.5) * (c / 8) : 0),
                        (l = s.abs(t) + h),
                        (a = l / c)), {
                        destination: s.round(h),
                        duration: a
                    }
                );
            });
            var h = e("transform");
            return (
                o.extend(o, {
                    hasTransform: h !== !1,
                    hasPerspective: e("perspective") in n,
                    hasTouch: "ontouchstart" in t,
                    hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
                    hasTransition: e("transition") in n,
                }),
                (o.isBadAndroid = (function() {
                    var i = t.navigator.appVersion;
                    if (/Android/.test(i) && !/Chrome\/\d/.test(i)) {
                        var s = i.match(/Safari\/(\d+.\d)/);
                        return s && "object" == typeof s && s.length >= 2 ?
                            parseFloat(s[1]) < 535.19 :
                            !0;
                    }
                    return !1;
                })()),
                o.extend((o.style = {}), {
                    transform: h,
                    transitionTimingFunction: e("transitionTimingFunction"),
                    transitionDuration: e("transitionDuration"),
                    transitionDelay: e("transitionDelay"),
                    transformOrigin: e("transformOrigin"),
                }),
                (o.hasClass = function(t, i) {
                    var s = new RegExp("(^|\\s)" + i + "(\\s|$)");
                    return s.test(t.className);
                }),
                (o.addClass = function(t, i) {
                    if (!o.hasClass(t, i)) {
                        var s = t.className.split(" ");
                        s.push(i), (t.className = s.join(" "));
                    }
                }),
                (o.removeClass = function(t, i) {
                    if (o.hasClass(t, i)) {
                        var s = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
                        t.className = t.className.replace(s, " ");
                    }
                }),
                (o.offset = function(t) {
                    for (var i = -t.offsetLeft, s = -t.offsetTop;
                        (t = t.offsetParent);)
                        (i -= t.offsetLeft), (s -= t.offsetTop);
                    return {
                        left: i,
                        top: s
                    };
                }),
                (o.preventDefaultException = function(t, i) {
                    for (var s in i)
                        if (i[s].test(t[s])) return !0;
                    return !1;
                }),
                o.extend((o.eventType = {}), {
                    touchstart: 1,
                    touchmove: 1,
                    touchend: 1,
                    mousedown: 2,
                    mousemove: 2,
                    mouseup: 2,
                    pointerdown: 3,
                    pointermove: 3,
                    pointerup: 3,
                    MSPointerDown: 3,
                    MSPointerMove: 3,
                    MSPointerUp: 3,
                }),
                o.extend((o.ease = {}), {
                    quadratic: {
                        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        fn: function(t) {
                            return t * (2 - t);
                        },
                    },
                    circular: {
                        style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        fn: function(t) {
                            return s.sqrt(1 - --t * t);
                        },
                    },
                    back: {
                        style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        fn: function(t) {
                            var i = 4;
                            return (t -= 1) * t * ((i + 1) * t + i) + 1;
                        },
                    },
                    bounce: {
                        style: "",
                        fn: function(t) {
                            return (t /= 1) < 1 / 2.75 ?
                                7.5625 * t * t :
                                2 / 2.75 > t ?
                                7.5625 * (t -= 1.5 / 2.75) * t + 0.75 :
                                2.5 / 2.75 > t ?
                                7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 :
                                7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                        },
                    },
                    elastic: {
                        style: "",
                        fn: function(t) {
                            var i = 0.22,
                                e = 0.4;
                            return 0 === t ?
                                0 :
                                1 == t ?
                                1 :
                                e *
                                s.pow(2, -10 * t) *
                                s.sin(((t - i / 4) * (2 * s.PI)) / i) +
                                1;
                        },
                    },
                }),
                (o.tap = function(t, s) {
                    var e = i.createEvent("Event");
                    e.initEvent(s, !0, !0),
                        (e.pageX = t.pageX),
                        (e.pageY = t.pageY),
                        t.target.dispatchEvent(e);
                }),
                (o.click = function(s) {
                    var e,
                        o = s.target;
                    /(SELECT|INPUT|TEXTAREA)/i.test(o.tagName) ||
                        ((e = i.createEvent(t.MouseEvent ? "MouseEvents" : "Event")),
                            e.initEvent("click", !0, !0),
                            (e.view = s.view || t),
                            (e.detail = 1),
                            (e.screenX = o.screenX || 0),
                            (e.screenY = o.screenY || 0),
                            (e.clientX = o.clientX || 0),
                            (e.clientY = o.clientY || 0),
                            (e.ctrlKey = !!s.ctrlKey),
                            (e.altKey = !!s.altKey),
                            (e.shiftKey = !!s.shiftKey),
                            (e.metaKey = !!s.metaKey),
                            (e.button = 0),
                            (e.relatedTarget = null),
                            (e._constructed = !0),
                            o.dispatchEvent(e));
                }),
                o
            );
        })();
    (e.prototype = {
        version: "5.2.0",
        _init: function() {
            this._initEvents(),
                (this.options.scrollbars || this.options.indicators) &&
                this._initIndicators(),
                this.options.mouseWheel && this._initWheel(),
                this.options.snap && this._initSnap(),
                this.options.keyBindings && this._initKeys();
        },
        destroy: function() {
            this._initEvents(!0),
                clearTimeout(this.resizeTimeout),
                (this.resizeTimeout = null),
                this._execEvent("destroy");
        },
        _transitionEnd: function(t) {
            t.target == this.scroller &&
                this.isInTransition &&
                (this._transitionTime(),
                    this.resetPosition(this.options.bounceTime) ||
                    ((this.isInTransition = !1), this._execEvent("scrollEnd")));
        },
        _start: function(t) {
            if (1 != h.eventType[t.type]) {
                var i;
                if (
                    ((i = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2),
                        0 !== i)
                )
                    return;
            }
            if (
                this.enabled &&
                (!this.initiated || h.eventType[t.type] === this.initiated)
            ) {
                !this.options.preventDefault ||
                    h.isBadAndroid ||
                    h.preventDefaultException(
                        t.target,
                        this.options.preventDefaultException
                    ) ||
                    t.preventDefault();
                var e,
                    o = t.touches ? t.touches[0] : t;
                (this.initiated = h.eventType[t.type]),
                (this.moved = !1),
                (this.distX = 0),
                (this.distY = 0),
                (this.directionX = 0),
                (this.directionY = 0),
                (this.directionLocked = 0),
                (this.startTime = h.getTime()),
                this.options.useTransition && this.isInTransition ?
                    (this._transitionTime(),
                        (this.isInTransition = !1),
                        (e = this.getComputedPosition()),
                        this._translate(s.round(e.x), s.round(e.y)),
                        this._execEvent("scrollEnd")) :
                    !this.options.useTransition &&
                    this.isAnimating &&
                    ((this.isAnimating = !1), this._execEvent("scrollEnd")),
                    (this.startX = this.x),
                    (this.startY = this.y),
                    (this.absStartX = this.x),
                    (this.absStartY = this.y),
                    (this.pointX = o.pageX),
                    (this.pointY = o.pageY),
                    this._execEvent("beforeScrollStart");
            }
        },
        _move: function(t) {
            if (this.enabled && h.eventType[t.type] === this.initiated) {
                this.options.preventDefault && t.preventDefault();
                var i,
                    e,
                    o,
                    n,
                    r = t.touches ? t.touches[0] : t,
                    a = r.pageX - this.pointX,
                    l = r.pageY - this.pointY,
                    c = h.getTime();
                if (
                    ((this.pointX = r.pageX),
                        (this.pointY = r.pageY),
                        (this.distX += a),
                        (this.distY += l),
                        (o = s.abs(this.distX)),
                        (n = s.abs(this.distY)),
                        !(c - this.endTime > 300 && 10 > o && 10 > n))
                ) {
                    if (
                        (this.directionLocked ||
                            this.options.freeScroll ||
                            (o > n + this.options.directionLockThreshold ?
                                (this.directionLocked = "h") :
                                n >= o + this.options.directionLockThreshold ?
                                (this.directionLocked = "v") :
                                (this.directionLocked = "n")),
                            "h" == this.directionLocked)
                    ) {
                        if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough)
                            return void(this.initiated = !1);
                        l = 0;
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough)
                            t.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough)
                            return void(this.initiated = !1);
                        a = 0;
                    }
                    (a = this.hasHorizontalScroll ? a : 0),
                    (l = this.hasVerticalScroll ? l : 0),
                    (i = this.x + a),
                    (e = this.y + l),
                    (i > 0 || i < this.maxScrollX) &&
                    (i = this.options.bounce ?
                        this.x + a / 3 :
                        i > 0 ?
                        0 :
                        this.maxScrollX),
                    (e > 0 || e < this.maxScrollY) &&
                    (e = this.options.bounce ?
                        this.y + l / 3 :
                        e > 0 ?
                        0 :
                        this.maxScrollY),
                    (this.directionX = a > 0 ? -1 : 0 > a ? 1 : 0),
                    (this.directionY = l > 0 ? -1 : 0 > l ? 1 : 0),
                    this.moved || this._execEvent("scrollStart"),
                        (this.moved = !0),
                        this._translate(i, e),
                        c - this.startTime > 300 &&
                        ((this.startTime = c),
                            (this.startX = this.x),
                            (this.startY = this.y));
                }
            }
        },
        _end: function(t) {
            if (this.enabled && h.eventType[t.type] === this.initiated) {
                this.options.preventDefault &&
                    !h.preventDefaultException(
                        t.target,
                        this.options.preventDefaultException
                    ) &&
                    t.preventDefault();
                var i,
                    e,
                    o =
                    (t.changedTouches ? t.changedTouches[0] : t,
                        h.getTime() - this.startTime),
                    n = s.round(this.x),
                    r = s.round(this.y),
                    a = s.abs(n - this.startX),
                    l = s.abs(r - this.startY),
                    c = 0,
                    p = "";
                if (
                    ((this.isInTransition = 0),
                        (this.initiated = 0),
                        (this.endTime = h.getTime()),
                        !this.resetPosition(this.options.bounceTime))
                ) {
                    if ((this.scrollTo(n, r), !this.moved))
                        return (
                            this.options.tap && h.tap(t, this.options.tap),
                            this.options.click && h.click(t),
                            void this._execEvent("scrollCancel")
                        );
                    if (this._events.flick && 200 > o && 100 > a && 100 > l)
                        return void this._execEvent("flick");
                    if (
                        (this.options.momentum &&
                            300 > o &&
                            ((i = this.hasHorizontalScroll ?
                                    h.momentum(
                                        this.x,
                                        this.startX,
                                        o,
                                        this.maxScrollX,
                                        this.options.bounce ? this.wrapperWidth : 0,
                                        this.options.deceleration
                                    ) :
                                    {
                                        destination: n,
                                        duration: 0
                                    }),
                                (e = this.hasVerticalScroll ?
                                    h.momentum(
                                        this.y,
                                        this.startY,
                                        o,
                                        this.maxScrollY,
                                        this.options.bounce ? this.wrapperHeight : 0,
                                        this.options.deceleration
                                    ) :
                                    {
                                        destination: r,
                                        duration: 0
                                    }),
                                (n = i.destination),
                                (r = e.destination),
                                (c = s.max(i.duration, e.duration)),
                                (this.isInTransition = 1)),
                            this.options.snap)
                    ) {
                        var d = this._nearestSnap(n, r);
                        (this.currentPage = d),
                        (c =
                            this.options.snapSpeed ||
                            s.max(
                                s.max(s.min(s.abs(n - d.x), 1e3), s.min(s.abs(r - d.y), 1e3)),
                                300
                            )),
                        (n = d.x),
                        (r = d.y),
                        (this.directionX = 0),
                        (this.directionY = 0),
                        (p = this.options.bounceEasing);
                    }
                    return n != this.x || r != this.y ?
                        ((n > 0 || n < this.maxScrollX || r > 0 || r < this.maxScrollY) &&
                            (p = h.ease.quadratic),
                            void this.scrollTo(n, r, c, p)) :
                        void this._execEvent("scrollEnd");
                }
            }
        },
        _resize: function() {
            var t = this;
            clearTimeout(this.resizeTimeout),
                (this.resizeTimeout = setTimeout(function() {
                    t.refresh();
                }, this.options.resizePolling));
        },
        resetPosition: function(t) {
            var i = this.x,
                s = this.y;
            return (
                (t = t || 0),
                !this.hasHorizontalScroll || this.x > 0 ?
                (i = 0) :
                this.x < this.maxScrollX && (i = this.maxScrollX),
                !this.hasVerticalScroll || this.y > 0 ?
                (s = 0) :
                this.y < this.maxScrollY && (s = this.maxScrollY),
                i == this.x && s == this.y ?
                !1 :
                (this.scrollTo(i, s, t, this.options.bounceEasing), !0)
            );
        },
        disable: function() {
            this.enabled = !1;
        },
        enable: function() {
            this.enabled = !0;
        },
        refresh: function() {
            this.wrapper.offsetHeight;
            (this.wrapperWidth = this.wrapper.clientWidth),
            (this.wrapperHeight = this.wrapper.clientHeight),
            (this.scrollerWidth = this.scroller.offsetWidth),
            (this.scrollerHeight = this.scroller.offsetHeight),
            (this.maxScrollX = this.wrapperWidth - this.scrollerWidth),
            (this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
            (this.hasHorizontalScroll =
                this.options.scrollX && this.maxScrollX < 0),
            (this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0),
            this.hasHorizontalScroll ||
                ((this.maxScrollX = 0), (this.scrollerWidth = this.wrapperWidth)),
                this.hasVerticalScroll ||
                ((this.maxScrollY = 0), (this.scrollerHeight = this.wrapperHeight)),
                (this.endTime = 0),
                (this.directionX = 0),
                (this.directionY = 0),
                (this.wrapperOffset = h.offset(this.wrapper)),
                this._execEvent("refresh"),
                this.resetPosition();
        },
        on: function(t, i) {
            this._events[t] || (this._events[t] = []), this._events[t].push(i);
        },
        off: function(t, i) {
            if (this._events[t]) {
                var s = this._events[t].indexOf(i);
                s > -1 && this._events[t].splice(s, 1);
            }
        },
        _execEvent: function(t) {
            if (this._events[t]) {
                var i = 0,
                    s = this._events[t].length;
                if (s)
                    for (; s > i; i++)
                        this._events[t][i].apply(this, [].slice.call(arguments, 1));
            }
        },
        scrollBy: function(t, i, s, e) {
            (t = this.x + t),
            (i = this.y + i),
            (s = s || 0),
            this.scrollTo(t, i, s, e);
        },
        scrollTo: function(t, i, s, e) {
            (e = e || h.ease.circular),
            (this.isInTransition = this.options.useTransition && s > 0);
            var o = this.options.useTransition && e.style;
            !s || o ?
                (o &&
                    (this._transitionTimingFunction(e.style), this._transitionTime(s)),
                    this._translate(t, i)) :
                this._animate(t, i, s, e.fn);
        },
        scrollToElement: function(t, i, e, o, n) {
            if ((t = t.nodeType ? t : this.scroller.querySelector(t))) {
                var r = h.offset(t);
                (r.left -= this.wrapperOffset.left),
                (r.top -= this.wrapperOffset.top),
                e === !0 &&
                    (e = s.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
                    o === !0 &&
                    (o = s.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
                    (r.left -= e || 0),
                    (r.top -= o || 0),
                    (r.left =
                        r.left > 0 ?
                        0 :
                        r.left < this.maxScrollX ?
                        this.maxScrollX :
                        r.left),
                    (r.top =
                        r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top),
                    (i =
                        void 0 === i || null === i || "auto" === i ?
                        s.max(s.abs(this.x - r.left), s.abs(this.y - r.top)) :
                        i),
                    this.scrollTo(r.left, r.top, i, n);
            }
        },
        _transitionTime: function(t) {
            if (this.options.useTransition) {
                t = t || 0;
                var i = h.style.transitionDuration;
                if (i) {
                    if (((this.scrollerStyle[i] = t + "ms"), !t && h.isBadAndroid)) {
                        this.scrollerStyle[i] = "0.0001ms";
                        var s = this;
                        r(function() {
                            "0.0001ms" === s.scrollerStyle[i] && (s.scrollerStyle[i] = "0s");
                        });
                    }
                    if (this.indicators)
                        for (var e = this.indicators.length; e--;)
                            this.indicators[e].transitionTime(t);
                }
            }
        },
        _transitionTimingFunction: function(t) {
            if (
                ((this.scrollerStyle[h.style.transitionTimingFunction] = t),
                    this.indicators)
            )
                for (var i = this.indicators.length; i--;)
                    this.indicators[i].transitionTimingFunction(t);
        },
        _translate: function(t, i) {
            if (
                (this.options.useTransform ?
                    (this.scrollerStyle[h.style.transform] =
                        "translate(" + t + "px," + i + "px)" + this.translateZ) :
                    ((t = s.round(t)),
                        (i = s.round(i)),
                        (this.scrollerStyle.left = t + "px"),
                        (this.scrollerStyle.top = i + "px")),
                    (this.x = t),
                    (this.y = i),
                    this.indicators)
            )
                for (var e = this.indicators.length; e--;)
                    this.indicators[e].updatePosition();
        },
        _initEvents: function(i) {
            var s = i ? h.removeEvent : h.addEvent,
                e = this.options.bindToWrapper ? this.wrapper : t;
            s(t, "orientationchange", this),
                s(t, "resize", this),
                this.options.click && s(this.wrapper, "click", this, !0),
                this.options.disableMouse ||
                (s(this.wrapper, "mousedown", this),
                    s(e, "mousemove", this),
                    s(e, "mousecancel", this),
                    s(e, "mouseup", this)),
                h.hasPointer &&
                !this.options.disablePointer &&
                (s(this.wrapper, h.prefixPointerEvent("pointerdown"), this),
                    s(e, h.prefixPointerEvent("pointermove"), this),
                    s(e, h.prefixPointerEvent("pointercancel"), this),
                    s(e, h.prefixPointerEvent("pointerup"), this)),
                h.hasTouch &&
                !this.options.disableTouch &&
                (s(this.wrapper, "touchstart", this),
                    s(e, "touchmove", this),
                    s(e, "touchcancel", this),
                    s(e, "touchend", this)),
                s(this.scroller, "transitionend", this),
                s(this.scroller, "webkitTransitionEnd", this),
                s(this.scroller, "oTransitionEnd", this),
                s(this.scroller, "MSTransitionEnd", this);
        },
        getComputedPosition: function() {
            var i,
                s,
                e = t.getComputedStyle(this.scroller, null);
            return (
                this.options.useTransform ?
                ((e = e[h.style.transform].split(")")[0].split(", ")),
                    (i = +(e[12] || e[4])),
                    (s = +(e[13] || e[5]))) :
                ((i = +e.left.replace(/[^-\d.]/g, "")),
                    (s = +e.top.replace(/[^-\d.]/g, ""))), {
                    x: i,
                    y: s
                }
            );
        },
        _initIndicators: function() {
            function t(t) {
                if (h.indicators)
                    for (var i = h.indicators.length; i--;) t.call(h.indicators[i]);
            }
            var i,
                s = this.options.interactiveScrollbars,
                e = "string" != typeof this.options.scrollbars,
                r = [],
                h = this;
            (this.indicators = []),
            this.options.scrollbars &&
                (this.options.scrollY &&
                    ((i = {
                            el: o("v", s, this.options.scrollbars),
                            interactive: s,
                            defaultScrollbars: !0,
                            customStyle: e,
                            resize: this.options.resizeScrollbars,
                            shrink: this.options.shrinkScrollbars,
                            fade: this.options.fadeScrollbars,
                            listenX: !1,
                        }),
                        this.wrapper.appendChild(i.el),
                        r.push(i)),
                    this.options.scrollX &&
                    ((i = {
                            el: o("h", s, this.options.scrollbars),
                            interactive: s,
                            defaultScrollbars: !0,
                            customStyle: e,
                            resize: this.options.resizeScrollbars,
                            shrink: this.options.shrinkScrollbars,
                            fade: this.options.fadeScrollbars,
                            listenY: !1,
                        }),
                        this.wrapper.appendChild(i.el),
                        r.push(i))),
                this.options.indicators && (r = r.concat(this.options.indicators));
            for (var a = r.length; a--;) this.indicators.push(new n(this, r[a]));
            this.options.fadeScrollbars &&
                (this.on("scrollEnd", function() {
                        t(function() {
                            this.fade();
                        });
                    }),
                    this.on("scrollCancel", function() {
                        t(function() {
                            this.fade();
                        });
                    }),
                    this.on("scrollStart", function() {
                        t(function() {
                            this.fade(1);
                        });
                    }),
                    this.on("beforeScrollStart", function() {
                        t(function() {
                            this.fade(1, !0);
                        });
                    })),
                this.on("refresh", function() {
                    t(function() {
                        this.refresh();
                    });
                }),
                this.on("destroy", function() {
                    t(function() {
                            this.destroy();
                        }),
                        delete this.indicators;
                });
        },
        _initWheel: function() {
            h.addEvent(this.wrapper, "wheel", this),
                h.addEvent(this.wrapper, "mousewheel", this),
                h.addEvent(this.wrapper, "DOMMouseScroll", this),
                this.on("destroy", function() {
                    clearTimeout(this.wheelTimeout),
                        (this.wheelTimeout = null),
                        h.removeEvent(this.wrapper, "wheel", this),
                        h.removeEvent(this.wrapper, "mousewheel", this),
                        h.removeEvent(this.wrapper, "DOMMouseScroll", this);
                });
        },
        _wheel: function(t) {
            if (this.enabled) {
                t.preventDefault();
                var i,
                    e,
                    o,
                    n,
                    r = this;
                if (
                    (void 0 === this.wheelTimeout && r._execEvent("scrollStart"),
                        clearTimeout(this.wheelTimeout),
                        (this.wheelTimeout = setTimeout(function() {
                            r.options.snap || r._execEvent("scrollEnd"),
                                (r.wheelTimeout = void 0);
                        }, 400)),
                        "deltaX" in t)
                )
                    1 === t.deltaMode ?
                    ((i = -t.deltaX * this.options.mouseWheelSpeed),
                        (e = -t.deltaY * this.options.mouseWheelSpeed)) :
                    ((i = -t.deltaX), (e = -t.deltaY));
                else if ("wheelDeltaX" in t)
                    (i = (t.wheelDeltaX / 120) * this.options.mouseWheelSpeed),
                    (e = (t.wheelDeltaY / 120) * this.options.mouseWheelSpeed);
                else if ("wheelDelta" in t)
                    i = e = (t.wheelDelta / 120) * this.options.mouseWheelSpeed;
                else {
                    if (!("detail" in t)) return;
                    i = e = (-t.detail / 3) * this.options.mouseWheelSpeed;
                }
                if (
                    ((i *= this.options.invertWheelDirection),
                        (e *= this.options.invertWheelDirection),
                        this.hasVerticalScroll || ((i = e), (e = 0)),
                        this.options.snap)
                )
                    return (
                        (o = this.currentPage.pageX),
                        (n = this.currentPage.pageY),
                        i > 0 ? o-- : 0 > i && o++,
                        e > 0 ? n-- : 0 > e && n++,
                        void this.goToPage(o, n)
                    );
                (o = this.x + s.round(this.hasHorizontalScroll ? i : 0)),
                (n = this.y + s.round(this.hasVerticalScroll ? e : 0)),
                (this.directionX = i > 0 ? -1 : 0 > i ? 1 : 0),
                (this.directionY = e > 0 ? -1 : 0 > e ? 1 : 0),
                o > 0 ? (o = 0) : o < this.maxScrollX && (o = this.maxScrollX),
                    n > 0 ? (n = 0) : n < this.maxScrollY && (n = this.maxScrollY),
                    this.scrollTo(o, n, 0);
            }
        },
        _initSnap: function() {
            (this.currentPage = {}),
            "string" == typeof this.options.snap &&
                (this.options.snap = this.scroller.querySelectorAll(
                    this.options.snap
                )),
                this.on("refresh", function() {
                    var t,
                        i,
                        e,
                        o,
                        n,
                        r,
                        h = 0,
                        a = 0,
                        l = 0,
                        c = this.options.snapStepX || this.wrapperWidth,
                        p = this.options.snapStepY || this.wrapperHeight;
                    if (
                        ((this.pages = []),
                            this.wrapperWidth &&
                            this.wrapperHeight &&
                            this.scrollerWidth &&
                            this.scrollerHeight)
                    ) {
                        if (this.options.snap === !0)
                            for (
                                e = s.round(c / 2), o = s.round(p / 2); l > -this.scrollerWidth;

                            ) {
                                for (
                                    this.pages[h] = [], t = 0, n = 0; n > -this.scrollerHeight;

                                )
                                    (this.pages[h][t] = {
                                        x: s.max(l, this.maxScrollX),
                                        y: s.max(n, this.maxScrollY),
                                        width: c,
                                        height: p,
                                        cx: l - e,
                                        cy: n - o,
                                    }),
                                    (n -= p),
                                    t++;
                                (l -= c), h++;
                            }
                        else
                            for (r = this.options.snap, t = r.length, i = -1; t > h; h++)
                                (0 === h || r[h].offsetLeft <= r[h - 1].offsetLeft) &&
                                ((a = 0), i++),
                                this.pages[a] || (this.pages[a] = []),
                                (l = s.max(-r[h].offsetLeft, this.maxScrollX)),
                                (n = s.max(-r[h].offsetTop, this.maxScrollY)),
                                (e = l - s.round(r[h].offsetWidth / 2)),
                                (o = n - s.round(r[h].offsetHeight / 2)),
                                (this.pages[a][i] = {
                                    x: l,
                                    y: n,
                                    width: r[h].offsetWidth,
                                    height: r[h].offsetHeight,
                                    cx: e,
                                    cy: o,
                                }),
                                l > this.maxScrollX && a++;
                        this.goToPage(
                                this.currentPage.pageX || 0,
                                this.currentPage.pageY || 0,
                                0
                            ),
                            this.options.snapThreshold % 1 === 0 ?
                            ((this.snapThresholdX = this.options.snapThreshold),
                                (this.snapThresholdY = this.options.snapThreshold)) :
                            ((this.snapThresholdX = s.round(
                                    this.pages[this.currentPage.pageX][this.currentPage.pageY]
                                    .width * this.options.snapThreshold
                                )),
                                (this.snapThresholdY = s.round(
                                    this.pages[this.currentPage.pageX][this.currentPage.pageY]
                                    .height * this.options.snapThreshold
                                )));
                    }
                }),
                this.on("flick", function() {
                    var t =
                        this.options.snapSpeed ||
                        s.max(
                            s.max(
                                s.min(s.abs(this.x - this.startX), 1e3),
                                s.min(s.abs(this.y - this.startY), 1e3)
                            ),
                            300
                        );
                    this.goToPage(
                        this.currentPage.pageX + this.directionX,
                        this.currentPage.pageY + this.directionY,
                        t
                    );
                });
        },
        _nearestSnap: function(t, i) {
            if (!this.pages.length) return {
                x: 0,
                y: 0,
                pageX: 0,
                pageY: 0
            };
            var e = 0,
                o = this.pages.length,
                n = 0;
            if (
                s.abs(t - this.absStartX) < this.snapThresholdX &&
                s.abs(i - this.absStartY) < this.snapThresholdY
            )
                return this.currentPage;
            for (
                t > 0 ? (t = 0) : t < this.maxScrollX && (t = this.maxScrollX),
                i > 0 ? (i = 0) : i < this.maxScrollY && (i = this.maxScrollY); o > e; e++
            )
                if (t >= this.pages[e][0].cx) {
                    t = this.pages[e][0].x;
                    break;
                }
            for (o = this.pages[e].length; o > n; n++)
                if (i >= this.pages[0][n].cy) {
                    i = this.pages[0][n].y;
                    break;
                }
            return (
                e == this.currentPage.pageX &&
                ((e += this.directionX),
                    0 > e ?
                    (e = 0) :
                    e >= this.pages.length && (e = this.pages.length - 1),
                    (t = this.pages[e][0].x)),
                n == this.currentPage.pageY &&
                ((n += this.directionY),
                    0 > n ?
                    (n = 0) :
                    n >= this.pages[0].length && (n = this.pages[0].length - 1),
                    (i = this.pages[0][n].y)), {
                    x: t,
                    y: i,
                    pageX: e,
                    pageY: n
                }
            );
        },
        goToPage: function(t, i, e, o) {
            (o = o || this.options.bounceEasing),
            t >= this.pages.length ? (t = this.pages.length - 1) : 0 > t && (t = 0),
                i >= this.pages[t].length ?
                (i = this.pages[t].length - 1) :
                0 > i && (i = 0);
            var n = this.pages[t][i].x,
                r = this.pages[t][i].y;
            (e =
                void 0 === e ?
                this.options.snapSpeed ||
                s.max(
                    s.max(
                        s.min(s.abs(n - this.x), 1e3),
                        s.min(s.abs(r - this.y), 1e3)
                    ),
                    300
                ) :
                e),
            (this.currentPage = {
                x: n,
                y: r,
                pageX: t,
                pageY: i
            }),
            this.scrollTo(n, r, e, o);
        },
        next: function(t, i) {
            var s = this.currentPage.pageX,
                e = this.currentPage.pageY;
            s++,
            s >= this.pages.length && this.hasVerticalScroll && ((s = 0), e++),
                this.goToPage(s, e, t, i);
        },
        prev: function(t, i) {
            var s = this.currentPage.pageX,
                e = this.currentPage.pageY;
            s--,
            0 > s && this.hasVerticalScroll && ((s = 0), e--),
                this.goToPage(s, e, t, i);
        },
        _initKeys: function(i) {
            var s,
                e = {
                    pageUp: 33,
                    pageDown: 34,
                    end: 35,
                    home: 36,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                };
            if ("object" == typeof this.options.keyBindings)
                for (s in this.options.keyBindings)
                    "string" == typeof this.options.keyBindings[s] &&
                    (this.options.keyBindings[s] = this.options.keyBindings[s]
                        .toUpperCase()
                        .charCodeAt(0));
            else this.options.keyBindings = {};
            for (s in e)
                this.options.keyBindings[s] = this.options.keyBindings[s] || e[s];
            h.addEvent(t, "keydown", this),
                this.on("destroy", function() {
                    h.removeEvent(t, "keydown", this);
                });
        },
        _key: function(t) {
            if (this.enabled) {
                var i,
                    e = this.options.snap,
                    o = e ? this.currentPage.pageX : this.x,
                    n = e ? this.currentPage.pageY : this.y,
                    r = h.getTime(),
                    a = this.keyTime || 0,
                    l = 0.25;
                switch (
                    (this.options.useTransition &&
                        this.isInTransition &&
                        ((i = this.getComputedPosition()),
                            this._translate(s.round(i.x), s.round(i.y)),
                            (this.isInTransition = !1)),
                        (this.keyAcceleration =
                            200 > r - a ? s.min(this.keyAcceleration + l, 50) : 0),
                        t.keyCode)
                ) {
                    case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ?
                            (o += e ? 1 : this.wrapperWidth) :
                            (n += e ? 1 : this.wrapperHeight);
                        break;
                    case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ?
                            (o -= e ? 1 : this.wrapperWidth) :
                            (n -= e ? 1 : this.wrapperHeight);
                        break;
                    case this.options.keyBindings.end:
                        (o = e ? this.pages.length - 1 : this.maxScrollX),
                        (n = e ? this.pages[0].length - 1 : this.maxScrollY);
                        break;
                    case this.options.keyBindings.home:
                        (o = 0), (n = 0);
                        break;
                    case this.options.keyBindings.left:
                        o += e ? -1 : (5 + this.keyAcceleration) >> 0;
                        break;
                    case this.options.keyBindings.up:
                        n += e ? 1 : (5 + this.keyAcceleration) >> 0;
                        break;
                    case this.options.keyBindings.right:
                        o -= e ? -1 : (5 + this.keyAcceleration) >> 0;
                        break;
                    case this.options.keyBindings.down:
                        n -= e ? 1 : (5 + this.keyAcceleration) >> 0;
                        break;
                    default:
                        return;
                }
                if (e) return void this.goToPage(o, n);
                o > 0 ?
                    ((o = 0), (this.keyAcceleration = 0)) :
                    o < this.maxScrollX &&
                    ((o = this.maxScrollX), (this.keyAcceleration = 0)),
                    n > 0 ?
                    ((n = 0), (this.keyAcceleration = 0)) :
                    n < this.maxScrollY &&
                    ((n = this.maxScrollY), (this.keyAcceleration = 0)),
                    this.scrollTo(o, n, 0),
                    (this.keyTime = r);
            }
        },
        _animate: function(t, i, s, e) {
            function o() {
                var d,
                    u,
                    f,
                    m = h.getTime();
                return m >= p ?
                    ((n.isAnimating = !1),
                        n._translate(t, i),
                        void(
                            n.resetPosition(n.options.bounceTime) || n._execEvent("scrollEnd")
                        )) :
                    ((m = (m - c) / s),
                        (f = e(m)),
                        (d = (t - a) * f + a),
                        (u = (i - l) * f + l),
                        n._translate(d, u),
                        void(n.isAnimating && r(o)));
            }
            var n = this,
                a = this.x,
                l = this.y,
                c = h.getTime(),
                p = c + s;
            (this.isAnimating = !0), o();
        },
        handleEvent: function(t) {
            switch (t.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(t);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(t);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(t);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(t);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(t);
                    break;
                case "keydown":
                    this._key(t);
                    break;
                case "click":
                    this.enabled &&
                        !t._constructed &&
                        (t.preventDefault(), t.stopPropagation());
            }
        },
    }),
    (n.prototype = {
        handleEvent: function(t) {
            switch (t.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(t);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(t);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(t);
            }
        },
        destroy: function() {
            this.options.fadeScrollbars &&
                (clearTimeout(this.fadeTimeout), (this.fadeTimeout = null)),
                this.options.interactive &&
                (h.removeEvent(this.indicator, "touchstart", this),
                    h.removeEvent(
                        this.indicator,
                        h.prefixPointerEvent("pointerdown"),
                        this
                    ),
                    h.removeEvent(this.indicator, "mousedown", this),
                    h.removeEvent(t, "touchmove", this),
                    h.removeEvent(t, h.prefixPointerEvent("pointermove"), this),
                    h.removeEvent(t, "mousemove", this),
                    h.removeEvent(t, "touchend", this),
                    h.removeEvent(t, h.prefixPointerEvent("pointerup"), this),
                    h.removeEvent(t, "mouseup", this)),
                this.options.defaultScrollbars &&
                this.wrapper.parentNode.removeChild(this.wrapper);
        },
        _start: function(i) {
            var s = i.touches ? i.touches[0] : i;
            i.preventDefault(),
                i.stopPropagation(),
                this.transitionTime(),
                (this.initiated = !0),
                (this.moved = !1),
                (this.lastPointX = s.pageX),
                (this.lastPointY = s.pageY),
                (this.startTime = h.getTime()),
                this.options.disableTouch || h.addEvent(t, "touchmove", this),
                this.options.disablePointer ||
                h.addEvent(t, h.prefixPointerEvent("pointermove"), this),
                this.options.disableMouse || h.addEvent(t, "mousemove", this),
                this.scroller._execEvent("beforeScrollStart");
        },
        _move: function(t) {
            var i,
                s,
                e,
                o,
                n = t.touches ? t.touches[0] : t;
            h.getTime();
            this.moved || this.scroller._execEvent("scrollStart"),
                (this.moved = !0),
                (i = n.pageX - this.lastPointX),
                (this.lastPointX = n.pageX),
                (s = n.pageY - this.lastPointY),
                (this.lastPointY = n.pageY),
                (e = this.x + i),
                (o = this.y + s),
                this._pos(e, o),
                t.preventDefault(),
                t.stopPropagation();
        },
        _end: function(i) {
            if (this.initiated) {
                if (
                    ((this.initiated = !1),
                        i.preventDefault(),
                        i.stopPropagation(),
                        h.removeEvent(t, "touchmove", this),
                        h.removeEvent(t, h.prefixPointerEvent("pointermove"), this),
                        h.removeEvent(t, "mousemove", this),
                        this.scroller.options.snap)
                ) {
                    var e = this.scroller._nearestSnap(
                            this.scroller.x,
                            this.scroller.y
                        ),
                        o =
                        this.options.snapSpeed ||
                        s.max(
                            s.max(
                                s.min(s.abs(this.scroller.x - e.x), 1e3),
                                s.min(s.abs(this.scroller.y - e.y), 1e3)
                            ),
                            300
                        );
                    (this.scroller.x != e.x || this.scroller.y != e.y) &&
                    ((this.scroller.directionX = 0),
                        (this.scroller.directionY = 0),
                        (this.scroller.currentPage = e),
                        this.scroller.scrollTo(
                            e.x,
                            e.y,
                            o,
                            this.scroller.options.bounceEasing
                        ));
                }
                this.moved && this.scroller._execEvent("scrollEnd");
            }
        },
        transitionTime: function(t) {
            t = t || 0;
            var i = h.style.transitionDuration;
            if (i && ((this.indicatorStyle[i] = t + "ms"), !t && h.isBadAndroid)) {
                this.indicatorStyle[i] = "0.0001ms";
                var s = this;
                r(function() {
                    "0.0001ms" === s.indicatorStyle[i] && (s.indicatorStyle[i] = "0s");
                });
            }
        },
        transitionTimingFunction: function(t) {
            this.indicatorStyle[h.style.transitionTimingFunction] = t;
        },
        refresh: function() {
            this.transitionTime(),
                this.options.listenX && !this.options.listenY ?
                (this.indicatorStyle.display = this.scroller.hasHorizontalScroll ?
                    "block" :
                    "none") :
                this.options.listenY && !this.options.listenX ?
                (this.indicatorStyle.display = this.scroller.hasVerticalScroll ?
                    "block" :
                    "none") :
                (this.indicatorStyle.display =
                    this.scroller.hasHorizontalScroll ||
                    this.scroller.hasVerticalScroll ?
                    "block" :
                    "none"),
                this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ?
                (h.addClass(this.wrapper, "iScrollBothScrollbars"),
                    h.removeClass(this.wrapper, "iScrollLoneScrollbar"),
                    this.options.defaultScrollbars &&
                    this.options.customStyle &&
                    (this.options.listenX ?
                        (this.wrapper.style.right = "8px") :
                        (this.wrapper.style.bottom = "8px"))) :
                (h.removeClass(this.wrapper, "iScrollBothScrollbars"),
                    h.addClass(this.wrapper, "iScrollLoneScrollbar"),
                    this.options.defaultScrollbars &&
                    this.options.customStyle &&
                    (this.options.listenX ?
                        (this.wrapper.style.right = "2px") :
                        (this.wrapper.style.bottom = "2px")));
            this.wrapper.offsetHeight;
            this.options.listenX &&
                ((this.wrapperWidth = this.wrapper.clientWidth),
                    this.options.resize ?
                    ((this.indicatorWidth = s.max(
                            s.round(
                                (this.wrapperWidth * this.wrapperWidth) /
                                (this.scroller.scrollerWidth || this.wrapperWidth || 1)
                            ),
                            8
                        )),
                        (this.indicatorStyle.width = this.indicatorWidth + "px")) :
                    (this.indicatorWidth = this.indicator.clientWidth),
                    (this.maxPosX = this.wrapperWidth - this.indicatorWidth),
                    "clip" == this.options.shrink ?
                    ((this.minBoundaryX = -this.indicatorWidth + 8),
                        (this.maxBoundaryX = this.wrapperWidth - 8)) :
                    ((this.minBoundaryX = 0), (this.maxBoundaryX = this.maxPosX)),
                    (this.sizeRatioX =
                        this.options.speedRatioX ||
                        (this.scroller.maxScrollX &&
                            this.maxPosX / this.scroller.maxScrollX))),
                this.options.listenY &&
                ((this.wrapperHeight = this.wrapper.clientHeight),
                    this.options.resize ?
                    ((this.indicatorHeight = s.max(
                            s.round(
                                (this.wrapperHeight * this.wrapperHeight) /
                                (this.scroller.scrollerHeight || this.wrapperHeight || 1)
                            ),
                            8
                        )),
                        (this.indicatorStyle.height = this.indicatorHeight + "px")) :
                    (this.indicatorHeight = this.indicator.clientHeight),
                    (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
                    "clip" == this.options.shrink ?
                    ((this.minBoundaryY = -this.indicatorHeight + 8),
                        (this.maxBoundaryY = this.wrapperHeight - 8)) :
                    ((this.minBoundaryY = 0), (this.maxBoundaryY = this.maxPosY)),
                    (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
                    (this.sizeRatioY =
                        this.options.speedRatioY ||
                        (this.scroller.maxScrollY &&
                            this.maxPosY / this.scroller.maxScrollY))),
                this.updatePosition();
        },
        updatePosition: function() {
            var t =
                (this.options.listenX &&
                    s.round(this.sizeRatioX * this.scroller.x)) ||
                0,
                i =
                (this.options.listenY &&
                    s.round(this.sizeRatioY * this.scroller.y)) ||
                0;
            this.options.ignoreBoundaries ||
                (t < this.minBoundaryX ?
                    ("scale" == this.options.shrink &&
                        ((this.width = s.max(this.indicatorWidth + t, 8)),
                            (this.indicatorStyle.width = this.width + "px")),
                        (t = this.minBoundaryX)) :
                    t > this.maxBoundaryX ?
                    "scale" == this.options.shrink ?
                    ((this.width = s.max(
                            this.indicatorWidth - (t - this.maxPosX),
                            8
                        )),
                        (this.indicatorStyle.width = this.width + "px"),
                        (t = this.maxPosX + this.indicatorWidth - this.width)) :
                    (t = this.maxBoundaryX) :
                    "scale" == this.options.shrink &&
                    this.width != this.indicatorWidth &&
                    ((this.width = this.indicatorWidth),
                        (this.indicatorStyle.width = this.width + "px")),
                    i < this.minBoundaryY ?
                    ("scale" == this.options.shrink &&
                        ((this.height = s.max(this.indicatorHeight + 3 * i, 8)),
                            (this.indicatorStyle.height = this.height + "px")),
                        (i = this.minBoundaryY)) :
                    i > this.maxBoundaryY ?
                    "scale" == this.options.shrink ?
                    ((this.height = s.max(
                            this.indicatorHeight - 3 * (i - this.maxPosY),
                            8
                        )),
                        (this.indicatorStyle.height = this.height + "px"),
                        (i = this.maxPosY + this.indicatorHeight - this.height)) :
                    (i = this.maxBoundaryY) :
                    "scale" == this.options.shrink &&
                    this.height != this.indicatorHeight &&
                    ((this.height = this.indicatorHeight),
                        (this.indicatorStyle.height = this.height + "px"))),
                (this.x = t),
                (this.y = i),
                this.scroller.options.useTransform ?
                (this.indicatorStyle[h.style.transform] =
                    "translate(" + t + "px," + i + "px)" + this.scroller.translateZ) :
                ((this.indicatorStyle.left = t + "px"),
                    (this.indicatorStyle.top = i + "px"));
        },
        _pos: function(t, i) {
            0 > t ? (t = 0) : t > this.maxPosX && (t = this.maxPosX),
                0 > i ? (i = 0) : i > this.maxPosY && (i = this.maxPosY),
                (t = this.options.listenX ?
                    s.round(t / this.sizeRatioX) :
                    this.scroller.x),
                (i = this.options.listenY ?
                    s.round(i / this.sizeRatioY) :
                    this.scroller.y),
                this.scroller.scrollTo(t, i);
        },
        fade: function(t, i) {
            if (!i || this.visible) {
                clearTimeout(this.fadeTimeout), (this.fadeTimeout = null);
                var s = t ? 250 : 500,
                    e = t ? 0 : 300;
                (t = t ? "1" : "0"),
                (this.wrapperStyle[h.style.transitionDuration] = s + "ms"),
                (this.fadeTimeout = setTimeout(
                    function(t) {
                        (this.wrapperStyle.opacity = t), (this.visible = +t);
                    }.bind(this, t),
                    e
                ));
            }
        },
    }),
    (e.utils = h),
    "undefined" != typeof module && module.exports ?
        (module.exports = e) :
        "function" == typeof define && define.amd ?
        define(function() {
            return e;
        }) :
        (t.IScroll = e);
})(window, document, Math);

/*iscroll end*/

/*steller start*/

!(function(t, e, i, s) {
    function o(e, i) {
        (this.element = e),
        (this.options = t.extend({}, r, i)),
        (this._defaults = r),
        (this._name = n),
        this.init();
    }
    var n = "stellar",
        r = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function(t) {
                t.hide();
            },
            showElement: function(t) {
                t.show();
            },
        },
        a = {
            scroll: {
                getLeft: function(t) {
                    return t.scrollLeft();
                },
                setLeft: function(t, e) {
                    t.scrollLeft(e);
                },
                getTop: function(t) {
                    return t.scrollTop();
                },
                setTop: function(t, e) {
                    t.scrollTop(e);
                },
            },
            position: {
                getLeft: function(t) {
                    return -1 * parseInt(t.css("left"), 10);
                },
                getTop: function(t) {
                    return -1 * parseInt(t.css("top"), 10);
                },
            },
            margin: {
                getLeft: function(t) {
                    return -1 * parseInt(t.css("margin-left"), 10);
                },
                getTop: function(t) {
                    return -1 * parseInt(t.css("margin-top"), 10);
                },
            },
            transform: {
                getLeft: function(t) {
                    var e = getComputedStyle(t[0])[c];
                    return "none" !== e ?
                        -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) :
                        0;
                },
                getTop: function(t) {
                    var e = getComputedStyle(t[0])[c];
                    return "none" !== e ?
                        -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) :
                        0;
                },
            },
        },
        l = {
            position: {
                setLeft: function(t, e) {
                    t.css("left", e);
                },
                setTop: function(t, e) {
                    t.css("top", e);
                },
            },
            transform: {
                setPosition: function(t, e, i, s, o) {
                    t[0].style[c] =
                        "translate3d(" + (e - i) + "px, " + (s - o) + "px, 0)";
                },
            },
        },
        f = (function() {
            var e,
                i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                s = t("script")[0].style,
                o = "";
            for (e in s)
                if (i.test(e)) {
                    o = e.match(i)[0];
                    break;
                }
            return (
                "WebkitOpacity" in s && (o = "Webkit"),
                "KhtmlOpacity" in s && (o = "Khtml"),
                function(t) {
                    return (
                        o + (o.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
                    );
                }
            );
        })(),
        c = f("transform"),
        h =
        t("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !==
        s,
        p = h ?
        function(t, e, i) {
            t.css({
                "background-position-x": e,
                "background-position-y": i
            });
        } :
        function(t, e, i) {
            t.css("background-position", e + " " + i);
        },
        d = h ?
        function(t) {
            return [
                t.css("background-position-x"),
                t.css("background-position-y"),
            ];
        } :
        function(t) {
            return t.css("background-position").split(" ");
        },
        u =
        e.requestAnimationFrame ||
        e.webkitRequestAnimationFrame ||
        e.mozRequestAnimationFrame ||
        e.oRequestAnimationFrame ||
        e.msRequestAnimationFrame ||
        function(t) {
            setTimeout(t, 1e3 / 60);
        };
    (o.prototype = {
        init: function() {
            (this.options.name = n + "_" + Math.floor(1e9 * Math.random())),
            this._defineElements(),
                this._defineGetters(),
                this._defineSetters(),
                this._handleWindowLoadAndResize(),
                this._detectViewport(),
                this.refresh({
                    firstLoad: !0
                }),
                "scroll" === this.options.scrollProperty ?
                this._handleScrollEvent() :
                this._startAnimationLoop();
        },
        _defineElements: function() {
            this.element === i.body && (this.element = e),
                (this.$scrollElement = t(this.element)),
                (this.$element = this.element === e ? t("body") : this.$scrollElement),
                (this.$viewportElement =
                    this.options.viewportElement !== s ?
                    t(this.options.viewportElement) :
                    this.$scrollElement[0] === e ||
                    "scroll" === this.options.scrollProperty ?
                    this.$scrollElement :
                    this.$scrollElement.parent());
        },
        _defineGetters: function() {
            var t = this,
                e = a[t.options.scrollProperty];
            (this._getScrollLeft = function() {
                return e.getLeft(t.$scrollElement);
            }),
            (this._getScrollTop = function() {
                return e.getTop(t.$scrollElement);
            });
        },
        _defineSetters: function() {
            var e = this,
                i = a[e.options.scrollProperty],
                s = l[e.options.positionProperty],
                o = i.setLeft,
                n = i.setTop;
            (this._setScrollLeft =
                "function" == typeof o ?
                function(t) {
                    o(e.$scrollElement, t);
                } :
                t.noop),
            (this._setScrollTop =
                "function" == typeof n ?
                function(t) {
                    n(e.$scrollElement, t);
                } :
                t.noop),
            (this._setPosition =
                s.setPosition ||
                function(t, i, o, n, r) {
                    e.options.horizontalScrolling && s.setLeft(t, i, o),
                        e.options.verticalScrolling && s.setTop(t, n, r);
                });
        },
        _handleWindowLoadAndResize: function() {
            var i = this,
                s = t(e);
            i.options.responsive &&
                s.bind("load." + this.name, function() {
                    i.refresh();
                }),
                s.bind("resize." + this.name, function() {
                    i._detectViewport(), i.options.responsive && i.refresh();
                });
        },
        refresh: function(i) {
            var s = this,
                o = s._getScrollLeft(),
                n = s._getScrollTop();
            (i && i.firstLoad) || this._reset(),
                this._setScrollLeft(0),
                this._setScrollTop(0),
                this._setOffsets(),
                this._findParticles(),
                this._findBackgrounds(),
                i &&
                i.firstLoad &&
                /WebKit/.test(navigator.userAgent) &&
                t(e).load(function() {
                    var t = s._getScrollLeft(),
                        e = s._getScrollTop();
                    s._setScrollLeft(t + 1),
                        s._setScrollTop(e + 1),
                        s._setScrollLeft(t),
                        s._setScrollTop(e);
                }),
                this._setScrollLeft(o),
                this._setScrollTop(n);
        },
        _detectViewport: function() {
            var t = this.$viewportElement.offset(),
                e = null !== t && t !== s;
            (this.viewportWidth = this.$viewportElement.width()),
            (this.viewportHeight = this.$viewportElement.height()),
            (this.viewportOffsetTop = e ? t.top : 0),
            (this.viewportOffsetLeft = e ? t.left : 0);
        },
        _findParticles: function() {
            var e = this;
            this._getScrollLeft(), this._getScrollTop();
            if (this.particles !== s)
                for (var i = this.particles.length - 1; i >= 0; i--)
                    this.particles[i].$element.data("stellar-elementIsActive", s);
            (this.particles = []),
            this.options.parallaxElements &&
                this.$element.find("[data-stellar-ratio]").each(function(i) {
                    var o,
                        n,
                        r,
                        a,
                        l,
                        f,
                        c,
                        h,
                        p,
                        d = t(this),
                        u = 0,
                        g = 0,
                        m = 0,
                        v = 0;
                    if (d.data("stellar-elementIsActive")) {
                        if (d.data("stellar-elementIsActive") !== this) return;
                    } else d.data("stellar-elementIsActive", this);
                    e.options.showElement(d),
                        d.data("stellar-startingLeft") ?
                        (d.css("left", d.data("stellar-startingLeft")),
                            d.css("top", d.data("stellar-startingTop"))) :
                        (d.data("stellar-startingLeft", d.css("left")),
                            d.data("stellar-startingTop", d.css("top"))),
                        (r = d.position().left),
                        (a = d.position().top),
                        (l =
                            "auto" === d.css("margin-left") ?
                            0 :
                            parseInt(d.css("margin-left"), 10)),
                        (f =
                            "auto" === d.css("margin-top") ?
                            0 :
                            parseInt(d.css("margin-top"), 10)),
                        (h = d.offset().left - l),
                        (p = d.offset().top - f),
                        d.parents().each(function() {
                            var e = t(this);
                            return e.data("stellar-offset-parent") === !0 ?
                                ((u = m), (g = v), (c = e), !1) :
                                ((m += e.position().left), void(v += e.position().top));
                        }),
                        (o =
                            d.data("stellar-horizontal-offset") !== s ?
                            d.data("stellar-horizontal-offset") :
                            c !== s && c.data("stellar-horizontal-offset") !== s ?
                            c.data("stellar-horizontal-offset") :
                            e.horizontalOffset),
                        (n =
                            d.data("stellar-vertical-offset") !== s ?
                            d.data("stellar-vertical-offset") :
                            c !== s && c.data("stellar-vertical-offset") !== s ?
                            c.data("stellar-vertical-offset") :
                            e.verticalOffset),
                        e.particles.push({
                            $element: d,
                            $offsetParent: c,
                            isFixed: "fixed" === d.css("position"),
                            horizontalOffset: o,
                            verticalOffset: n,
                            startingPositionLeft: r,
                            startingPositionTop: a,
                            startingOffsetLeft: h,
                            startingOffsetTop: p,
                            parentOffsetLeft: u,
                            parentOffsetTop: g,
                            stellarRatio: d.data("stellar-ratio") !== s ? d.data("stellar-ratio") : 1,
                            width: d.outerWidth(!0),
                            height: d.outerHeight(!0),
                            isHidden: !1,
                        });
                });
        },
        _findBackgrounds: function() {
            var e,
                i = this,
                o = this._getScrollLeft(),
                n = this._getScrollTop();
            (this.backgrounds = []),
            this.options.parallaxBackgrounds &&
                ((e = this.$element.find("[data-stellar-background-ratio]")),
                    this.$element.data("stellar-background-ratio") &&
                    (e = e.add(this.$element)),
                    e.each(function() {
                        var e,
                            r,
                            a,
                            l,
                            f,
                            c,
                            h,
                            u = t(this),
                            g = d(u),
                            m = 0,
                            v = 0,
                            L = 0,
                            _ = 0;
                        if (u.data("stellar-backgroundIsActive")) {
                            if (u.data("stellar-backgroundIsActive") !== this) return;
                        } else u.data("stellar-backgroundIsActive", this);
                        u.data("stellar-backgroundStartingLeft") ?
                            p(
                                u,
                                u.data("stellar-backgroundStartingLeft"),
                                u.data("stellar-backgroundStartingTop")
                            ) :
                            (u.data("stellar-backgroundStartingLeft", g[0]),
                                u.data("stellar-backgroundStartingTop", g[1])),
                            (a =
                                "auto" === u.css("margin-left") ?
                                0 :
                                parseInt(u.css("margin-left"), 10)),
                            (l =
                                "auto" === u.css("margin-top") ?
                                0 :
                                parseInt(u.css("margin-top"), 10)),
                            (f = u.offset().left - a - o),
                            (c = u.offset().top - l - n),
                            u.parents().each(function() {
                                var e = t(this);
                                return e.data("stellar-offset-parent") === !0 ?
                                    ((m = L), (v = _), (h = e), !1) :
                                    ((L += e.position().left), void(_ += e.position().top));
                            }),
                            (e =
                                u.data("stellar-horizontal-offset") !== s ?
                                u.data("stellar-horizontal-offset") :
                                h !== s && h.data("stellar-horizontal-offset") !== s ?
                                h.data("stellar-horizontal-offset") :
                                i.horizontalOffset),
                            (r =
                                u.data("stellar-vertical-offset") !== s ?
                                u.data("stellar-vertical-offset") :
                                h !== s && h.data("stellar-vertical-offset") !== s ?
                                h.data("stellar-vertical-offset") :
                                i.verticalOffset),
                            i.backgrounds.push({
                                $element: u,
                                $offsetParent: h,
                                isFixed: "fixed" === u.css("background-attachment"),
                                horizontalOffset: e,
                                verticalOffset: r,
                                startingValueLeft: g[0],
                                startingValueTop: g[1],
                                startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10)) ?
                                    0 :
                                    parseInt(g[0], 10),
                                startingBackgroundPositionTop: isNaN(parseInt(g[1], 10)) ?
                                    0 :
                                    parseInt(g[1], 10),
                                startingPositionLeft: u.position().left,
                                startingPositionTop: u.position().top,
                                startingOffsetLeft: f,
                                startingOffsetTop: c,
                                parentOffsetLeft: m,
                                parentOffsetTop: v,
                                stellarRatio: u.data("stellar-background-ratio") === s ?
                                    1 :
                                    u.data("stellar-background-ratio"),
                            });
                    }));
        },
        _reset: function() {
            var t, e, i, s, o;
            for (o = this.particles.length - 1; o >= 0; o--)
                (t = this.particles[o]),
                (e = t.$element.data("stellar-startingLeft")),
                (i = t.$element.data("stellar-startingTop")),
                this._setPosition(t.$element, e, e, i, i),
                this.options.showElement(t.$element),
                t.$element
                .data("stellar-startingLeft", null)
                .data("stellar-elementIsActive", null)
                .data("stellar-backgroundIsActive", null);
            for (o = this.backgrounds.length - 1; o >= 0; o--)
                (s = this.backgrounds[o]),
                s.$element
                .data("stellar-backgroundStartingLeft", null)
                .data("stellar-backgroundStartingTop", null),
                p(s.$element, s.startingValueLeft, s.startingValueTop);
        },
        destroy: function() {
            this._reset(),
                this.$scrollElement
                .unbind("resize." + this.name)
                .unbind("scroll." + this.name),
                (this._animationLoop = t.noop),
                t(e)
                .unbind("load." + this.name)
                .unbind("resize." + this.name);
        },
        _setOffsets: function() {
            var i = this,
                s = t(e);
            s
                .unbind("resize.horizontal-" + this.name)
                .unbind("resize.vertical-" + this.name),
                "function" == typeof this.options.horizontalOffset ?
                ((this.horizontalOffset = this.options.horizontalOffset()),
                    s.bind("resize.horizontal-" + this.name, function() {
                        i.horizontalOffset = i.options.horizontalOffset();
                    })) :
                (this.horizontalOffset = this.options.horizontalOffset),
                "function" == typeof this.options.verticalOffset ?
                ((this.verticalOffset = this.options.verticalOffset()),
                    s.bind("resize.vertical-" + this.name, function() {
                        i.verticalOffset = i.options.verticalOffset();
                    })) :
                (this.verticalOffset = this.options.verticalOffset);
        },
        _repositionElements: function() {
            var t,
                e,
                i,
                s,
                o,
                n,
                r,
                a,
                l,
                f,
                c = this._getScrollLeft(),
                h = this._getScrollTop(),
                d = !0,
                u = !0;
            if (
                this.currentScrollLeft !== c ||
                this.currentScrollTop !== h ||
                this.currentWidth !== this.viewportWidth ||
                this.currentHeight !== this.viewportHeight
            ) {
                for (
                    this.currentScrollLeft = c,
                    this.currentScrollTop = h,
                    this.currentWidth = this.viewportWidth,
                    this.currentHeight = this.viewportHeight,
                    f = this.particles.length - 1; f >= 0; f--
                )
                    (t = this.particles[f]),
                    (e = t.isFixed ? 1 : 0),
                    this.options.horizontalScrolling ?
                    ((n =
                            (c +
                                t.horizontalOffset +
                                this.viewportOffsetLeft +
                                t.startingPositionLeft -
                                t.startingOffsetLeft +
                                t.parentOffsetLeft) *
                            -(t.stellarRatio + e - 1) +
                            t.startingPositionLeft),
                        (a = n - t.startingPositionLeft + t.startingOffsetLeft)) :
                    ((n = t.startingPositionLeft), (a = t.startingOffsetLeft)),
                    this.options.verticalScrolling ?
                    ((r =
                            (h +
                                t.verticalOffset +
                                this.viewportOffsetTop +
                                t.startingPositionTop -
                                t.startingOffsetTop +
                                t.parentOffsetTop) *
                            -(t.stellarRatio + e - 1) +
                            t.startingPositionTop),
                        (l = r - t.startingPositionTop + t.startingOffsetTop)) :
                    ((r = t.startingPositionTop), (l = t.startingOffsetTop)),
                    this.options.hideDistantElements &&
                    ((u = !this.options.horizontalScrolling ||
                            (a + t.width > (t.isFixed ? 0 : c) &&
                                a <
                                (t.isFixed ? 0 : c) +
                                this.viewportWidth +
                                this.viewportOffsetLeft)),
                        (d = !this.options.verticalScrolling ||
                            (l + t.height > (t.isFixed ? 0 : h) &&
                                l <
                                (t.isFixed ? 0 : h) +
                                this.viewportHeight +
                                this.viewportOffsetTop))),
                    u && d ?
                    (t.isHidden &&
                        (this.options.showElement(t.$element), (t.isHidden = !1)),
                        this._setPosition(
                            t.$element,
                            n,
                            t.startingPositionLeft,
                            r,
                            t.startingPositionTop
                        )) :
                    t.isHidden ||
                    (this.options.hideElement(t.$element), (t.isHidden = !0));
                for (f = this.backgrounds.length - 1; f >= 0; f--)
                    (i = this.backgrounds[f]),
                    (e = i.isFixed ? 0 : 1),
                    (s = this.options.horizontalScrolling ?
                        (c +
                            i.horizontalOffset -
                            this.viewportOffsetLeft -
                            i.startingOffsetLeft +
                            i.parentOffsetLeft -
                            i.startingBackgroundPositionLeft) *
                        (e - i.stellarRatio) +
                        "px" :
                        i.startingValueLeft),
                    (o = this.options.verticalScrolling ?
                        (h +
                            i.verticalOffset -
                            this.viewportOffsetTop -
                            i.startingOffsetTop +
                            i.parentOffsetTop -
                            i.startingBackgroundPositionTop) *
                        (e - i.stellarRatio) +
                        "px" :
                        i.startingValueTop),
                    p(i.$element, s, o);
            }
        },
        _handleScrollEvent: function() {
            var t = this,
                e = !1,
                i = function() {
                    t._repositionElements(), (e = !1);
                },
                s = function() {
                    e || (u(i), (e = !0));
                };
            this.$scrollElement.bind("scroll." + this.name, s), s();
        },
        _startAnimationLoop: function() {
            var t = this;
            (this._animationLoop = function() {
                u(t._animationLoop), t._repositionElements();
            }),
            this._animationLoop();
        },
    }),
    (t.fn[n] = function(e) {
        var i = arguments;
        return e === s || "object" == typeof e ?
            this.each(function() {
                t.data(this, "plugin_" + n) ||
                    t.data(this, "plugin_" + n, new o(this, e));
            }) :
            "string" == typeof e && "_" !== e[0] && "init" !== e ?
            this.each(function() {
                var s = t.data(this, "plugin_" + n);
                s instanceof o &&
                    "function" == typeof s[e] &&
                    s[e].apply(s, Array.prototype.slice.call(i, 1)),
                    "destroy" === e && t.data(this, "plugin_" + n, null);
            }) :
            void 0;
    }),
    (t[n] = function(i) {
        var s = t(e);
        return s.stellar.apply(s, Array.prototype.slice.call(arguments, 0));
    }),
    (t[n].scrollProperty = a),
    (t[n].positionProperty = l),
    (e.Stellar = o);
})(jQuery, this, document);

/*steller end*/

/*scrllit start*/

!(function(t) {
    "use strict";
    var a = {
        upKey: 38,
        downKey: 40,
        easing: "linear",
        scrollTime: 600,
        activeClass: "active",
        onPageChange: null,
        topOffset: 0,
        onUpdateActive: function() {},
    };
    t.scrollIt = function(o) {
        var e = t.extend(a, o),
            n = 0,
            l = t("[data-scroll-index]:last").attr("data-scroll-index"),
            s = function(a) {
                if (!(0 > a || a > l)) {
                    var o =
                        t("[data-scroll-index=" + a + "]").offset().top + e.topOffset + 1;
                    t("html,body").animate({
                            scrollTop: o,
                            easing: e.easing
                        },
                        e.scrollTime
                    );
                }
            },
            r = function(a) {
                var o =
                    t(a.target).closest("[data-scroll-nav]").attr("data-scroll-nav") ||
                    t(a.target).closest("[data-scroll-goto]").attr("data-scroll-goto");
                s(parseInt(o));
            },
            c = function(a) {
                var o = a.which;
                return !t("html,body").is(":animated") ||
                    (o != e.upKey && o != e.downKey) ?
                    o == e.upKey && n > 0 ?
                    (s(parseInt(n) - 1), !1) :
                    o == e.downKey && l > n ?
                    (s(parseInt(n) + 1), !1) :
                    !0 :
                    !1;
            },
            i = function(a) {
                e.onPageChange && a && n != a && e.onPageChange(a),
                    (n = a),
                    t("[data-scroll-nav]").removeClass(e.activeClass),
                    t("[data-scroll-nav=" + a + "]").addClass(e.activeClass),
                    e.onUpdateActive();
            },
            d = function() {
                var a = t(window).scrollTop(),
                    o = t("[data-scroll-index]").filter(function(o, n) {
                        return (
                            a >= t(n).offset().top + e.topOffset &&
                            a < t(n).offset().top + e.topOffset + t(n).outerHeight()
                        );
                    }),
                    n = o.first().attr("data-scroll-index");
                i(n);
            };
        t(window).on("scroll", d).scroll(),
            t(window).on("keydown", c),
            t("body").on(
                "click",
                "[data-scroll-nav], [data-scroll-goto]",
                function(t) {
                    t.preventDefault(), r(t);
                }
            );
    };
})(jQuery);

/*scrllit end*/

/*sticky start*/

!(function(t) {
    var e = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: "is-sticky",
            wrapperClassName: "sticky-wrapper",
            center: !1,
            getWidthFrom: "",
        },
        i = t(window),
        n = t(document),
        s = [],
        o = i.height(),
        a = function() {
            for (
                var e = i.scrollTop(),
                    a = n.height(),
                    r = a - o,
                    c = e > r ? r - e : 0,
                    p = 0; p < s.length; p++
            ) {
                var l = s[p],
                    d = l.stickyWrapper.offset().top,
                    h = d - l.topSpacing - c;
                if (h >= e)
                    null !== l.currentTop &&
                    (l.stickyElement.css("position", "").css("top", ""),
                        l.stickyElement.parent().removeClass(l.className),
                        (l.currentTop = null));
                else {
                    var u =
                        a -
                        l.stickyElement.outerHeight() -
                        l.topSpacing -
                        l.bottomSpacing -
                        e -
                        c;
                    0 > u ? (u += l.topSpacing) : (u = l.topSpacing),
                        l.currentTop != u &&
                        (l.stickyElement.css("position", "fixed").css("top", u),
                            "undefined" != typeof l.getWidthFrom &&
                            l.stickyElement.css("width", t(l.getWidthFrom).width()),
                            l.stickyElement.parent().addClass(l.className),
                            (l.currentTop = u));
                }
            }
        },
        r = function() {
            o = i.height();
        },
        c = {
            init: function(i) {
                var n = t.extend(e, i);
                return this.each(function() {
                    var e = t(this),
                        i = e.attr("id"),
                        o = t("<div></div>")
                        .attr("id", i + "-sticky-wrapper")
                        .addClass(n.wrapperClassName);
                    e.wrapAll(o),
                        n.center &&
                        e.parent().css({
                            width: e.outerWidth(),
                            marginLeft: "auto",
                            marginRight: "auto",
                        }),
                        "right" == e.css("float") &&
                        e.css({
                            float: "none"
                        }).parent().css({
                            float: "right"
                        });
                    var a = e.parent();
                    a.css("height", e.outerHeight()),
                        s.push({
                            topSpacing: n.topSpacing,
                            bottomSpacing: n.bottomSpacing,
                            stickyElement: e,
                            currentTop: null,
                            stickyWrapper: a,
                            className: n.className,
                            getWidthFrom: n.getWidthFrom,
                        });
                });
            },
            update: a,
        };
    window.addEventListener ?
        (window.addEventListener("scroll", a, !1),
            window.addEventListener("resize", r, !1)) :
        window.attachEvent &&
        (window.attachEvent("onscroll", a), window.attachEvent("onresize", r)),
        (t.fn.sticky = function(e) {
            return c[e] ?
                c[e].apply(this, Array.prototype.slice.call(arguments, 1)) :
                "object" != typeof e && e ?
                void t.error("Method " + e + " does not exist on jQuery.sticky") :
                c.init.apply(this, arguments);
        }),
        t(function() {
            setTimeout(a, 0);
        });
})(jQuery);

/*sticky end*/

/*black and white start*/

!(function(e) {
    e.fn.extend({
        BlackAndWhite: function(t) {
            "use strict";
            var n = this,
                a = e.extend({
                        hoverEffect: !0,
                        webworkerPath: !1,
                        invertHoverEffect: !1,
                        speed: 500,
                        onImageReady: null,
                        intensity: 1,
                    },
                    t
                ),
                i = a.hoverEffect,
                o = a.webworkerPath,
                r = a.invertHoverEffect,
                d =
                "number" == typeof a.intensity && a.intensity < 1 && a.intensity > 0 ?
                a.intensity :
                1,
                c = e.isPlainObject(a.speed) ? a.speed.fadeIn : a.speed,
                s = e.isPlainObject(a.speed) ? a.speed.fadeOut : a.speed,
                u = e(window),
                f = ".BlackAndWhite",
                l =
                (document.all && !window.opera && window.XMLHttpRequest ? !0 : !1,
                    " -webkit- -moz- -o- -ms- ".split(" ")),
                m = {},
                g = function(e) {
                    if (m[e] || "" === m[e]) return m[e] + e;
                    var t = document.createElement("div"),
                        n = ["", "Moz", "Webkit", "O", "ms", "Khtml"];
                    for (var a in n)
                        if ("undefined" != typeof t.style[n[a] + e])
                            return (m[e] = n[a]), n[a] + e;
                    return e.toLowerCase();
                },
                h = (function() {
                    var e = document.createElement("div");
                    return (
                        (e.style.cssText = l.join("filter:blur(2px); ")),
                        !!e.style.length &&
                        (void 0 === document.documentMode || document.documentMode > 9)
                    );
                })(),
                p = !!document.createElement("canvas").getContext,
                v = (function() {
                    return "undefined" != typeof Worker ? !0 : !1;
                })(),
                y = g("Filter"),
                w = [],
                b = v && o ? new Worker(o + "BnWWorker.js") : !1,
                W = function(t) {
                    e(t.currentTarget)
                        .find(".BWfade")
                        .stop(!0, !0)
                        .animate({
                            opacity: r ? 0 : 1
                        }, s);
                },
                k = function(t) {
                    e(t.currentTarget)
                        .find(".BWfade")
                        .stop(!0, !0)
                        .animate({
                            opacity: r ? 1 : 0
                        }, c);
                },
                I = function(e) {
                    "function" == typeof a.onImageReady && a.onImageReady(e);
                },
                B = function(e) {
                    b && p && !h && !e && x();
                },
                x = function() {
                    return w.length ?
                        (b.postMessage({
                                imgData: w[0].imageData,
                                intensity: d
                            }),
                            void(b.onmessage = function(e) {
                                w[0].ctx.putImageData(e.data, 0, 0),
                                    I(w[0].img),
                                    w.splice(0, 1),
                                    x();
                            })) :
                        (b.terminate && b.terminate(), void(b.close && b.close()));
                },
                D = function(e) {
                    return (
                        e.complete ||
                        ("undefined" != typeof e.naturalWidth && e.naturalWidth)
                    );
                },
                E = function(e, t, n, a) {
                    var i = t.getContext("2d"),
                        o = 0;
                    i.drawImage(e, 0, 0, n, a);
                    var r = i.getImageData(0, 0, n, a),
                        c = r.data,
                        s = c.length;
                    if (b) w.push({
                        imageData: r,
                        ctx: i,
                        img: e
                    });
                    else {
                        for (; s > o; o += 4) {
                            var u = 0.3 * c[o] + 0.59 * c[o + 1] + 0.11 * c[o + 2];
                            (c[o] = ~~(u * d + c[o] * (1 - d))),
                            (c[o + 1] = ~~(u * d + c[o + 1] * (1 - d))),
                            (c[o + 2] = ~~(u * d + c[o + 2] * (1 - d)));
                        }
                        i.putImageData(r, 0, 0), I(e);
                    }
                },
                _ = function(t, n) {
                    var a,
                        i = t[0],
                        o = (i.src, t.position()),
                        c = {
                            top: o.top,
                            left: o.left,
                            position: "absolute",
                            "-webkit-transform": "translate3d(0,0,0)",
                            opacity: r ? 0 : 1,
                        };
                    (i.crossOrigin = "anonymous"),
                    p && !h ?
                        ((a = e(
                                '<canvas width="' +
                                i.naturalWidth +
                                '" height="' +
                                i.naturalHeight +
                                '" class="BWfade"></canvas>'
                            )),
                            (c.width = t.width()),
                            (c.height = t.height()),
                            E(i, a.get(0), i.naturalWidth, i.naturalHeight)) :
                        (p ?
                            (c[y] = "grayscale(" + 100 * d + "%)") :
                            (c.filter =
                                "progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)"),
                            (a = t.clone().addClass("BWFilter BWfade")),
                            I(i)),
                        a.css(c).prependTo(n),
                        !e.support.opacity && r && a.animate({
                            opacity: 0
                        }, 0);
                },
                M = function() {
                    n.each(function(t, n) {
                        var a = e(n).find("img"),
                            i = e(a).width(),
                            o = e(a).height();
                        e(this).find("canvas").css({
                            width: i,
                            height: o
                        });
                    });
                },
                T = function() {
                    var t = n.find("img").filter(function() {
                        return !e(this).data("_b&w");
                    }).length;
                    n.each(function(n, a) {
                            var i = e(a),
                                o = i.find("img");
                            o.data("_b&w") ||
                                (D(o[0]) ?
                                    (t--, _(o, i)) :
                                    o
                                    .on("load", function() {
                                        return o.data("_b&w_loaded") || !o[0].complete ?
                                            void setTimeout(function() {
                                                o.load();
                                            }, 20) :
                                            (_(o, i), o.data("_b&w_loaded", !0), t--, void B(t));
                                    })
                                    .load(),
                                    o.data("_b&w", !0));
                        }),
                        B(t),
                        i &&
                        n
                        .unbind(f)
                        .on("mouseleave" + f, W)
                        .on("mouseenter" + f, k),
                        p &&
                        !h &&
                        u.unbind(f).on("resize" + f + " orientationchange" + f, M);
                },
                j = function() {
                    n.off(f), u.off(f);
                };
            return T(), {
                destroy: j
            };
        },
    });
})(jQuery);

/*black and white end*/

/*magnific popup start*/

/*! Magnific Popup - v1.1.0 - 2016-02-20

* http://dimsemenov.com/plugins/magnific-popup/

* Copyright (c) 2016 Dmitry Semenov; */

!(function(a) {
    "function" == typeof define && define.amd ?
        define(["jquery"], a) :
        a(
            "object" == typeof exports ?
            require("jquery") :
            window.jQuery || window.Zepto
        );
})(function(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c);
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return (
                (f.className = "mfp-" + b),
                d && (f.innerHTML = d),
                e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
                f
            );
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d),
                b.st.callbacks &&
                ((c = c.charAt(0).toLowerCase() + c.slice(1)),
                    b.st.callbacks[c] &&
                    b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
        },
        z = function(c) {
            return (
                (c === g && b.currTemplate.closeBtn) ||
                ((b.currTemplate.closeBtn = a(
                        b.st.closeMarkup.replace("%title%", b.st.tClose)
                    )),
                    (g = c)),
                b.currTemplate.closeBtn
            );
        },
        A = function() {
            a.magnificPopup.instance ||
                ((b = new t()), b.init(), (a.magnificPopup.instance = b));
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1;
        };
    (t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
            (b.isAndroid = /android/gi.test(c)),
            (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
            (b.supportsTransition = B()),
            (b.probablyMobile =
                b.isAndroid ||
                b.isIOS ||
                /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                    navigator.userAgent
                )),
            (d = a(document)),
            (b.popupsCache = {});
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                (b.items = c.items.toArray()), (b.index = 0);
                var g,
                    h = c.items;
                for (e = 0; e < h.length; e++)
                    if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
                        b.index = e;
                        break;
                    }
            } else
                (b.items = a.isArray(c.items) ? c.items : [c.items]),
                (b.index = c.index || 0);
            if (b.isOpen) return void b.updateItemHTML();
            (b.types = []),
            (f = ""),
            c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
                c.key ?
                (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
                    (b.currTemplate = b.popupsCache[c.key])) :
                (b.currTemplate = {}),
                (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
                (b.fixedContentPos =
                    "auto" === b.st.fixedContentPos ?
                    !b.probablyMobile :
                    b.st.fixedContentPos),
                b.st.modal &&
                ((b.st.closeOnContentClick = !1),
                    (b.st.closeOnBgClick = !1),
                    (b.st.showCloseBtn = !1),
                    (b.st.enableEscapeKey = !1)),
                b.bgOverlay ||
                ((b.bgOverlay = x("bg").on("click" + p, function() {
                        b.close();
                    })),
                    (b.wrap = x("wrap")
                        .attr("tabindex", -1)
                        .on("click" + p, function(a) {
                            b._checkIfClose(a.target) && b.close();
                        })),
                    (b.container = x("container", b.wrap))),
                (b.contentContainer = x("content")),
                b.st.preloader &&
                (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
            }
            y("BeforeOpen"),
                b.st.showCloseBtn &&
                (b.st.closeBtnInside ?
                    (w(l, function(a, b, c, d) {
                            c.close_replaceWith = z(d.type);
                        }),
                        (f += " mfp-close-btn-in")) :
                    b.wrap.append(z())),
                b.st.alignTop && (f += " mfp-align-top"),
                b.fixedContentPos ?
                b.wrap.css({
                    overflow: b.st.overflowY,
                    overflowX: "hidden",
                    overflowY: b.st.overflowY,
                }) :
                b.wrap.css({
                    top: v.scrollTop(),
                    position: "absolute"
                }),
                (b.st.fixedBgPos === !1 ||
                    ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
                b.bgOverlay.css({
                    height: d.height(),
                    position: "absolute"
                }),
                b.st.enableEscapeKey &&
                d.on("keyup" + p, function(a) {
                    27 === a.keyCode && b.close();
                }),
                v.on("resize" + p, function() {
                    b.updateSize();
                }),
                b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
                f && b.wrap.addClass(f);
            var k = (b.wH = v.height()),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o);
            }
            b.fixedContentPos &&
                (b.isIE7 ?
                    a("body, html").css("overflow", "hidden") :
                    (n.overflow = "hidden"));
            var r = b.st.mainClass;
            return (
                b.isIE7 && (r += " mfp-ie7"),
                r && b._addClassToMFP(r),
                b.updateItemHTML(),
                y("BuildControls"),
                a("html").css(n),
                b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
                (b._lastFocusedEl = document.activeElement),
                setTimeout(function() {
                    b.content ?
                        (b._addClassToMFP(q), b._setFocus()) :
                        b.bgOverlay.addClass(q),
                        d.on("focusin" + p, b._onFocusIn);
                }, 16),
                (b.isOpen = !0),
                b.updateSize(k),
                y(m),
                c
            );
        },
        close: function() {
            b.isOpen &&
                (y(i),
                    (b.isOpen = !1),
                    b.st.removalDelay && !b.isLowIE && b.supportsTransition ?
                    (b._addClassToMFP(r),
                        setTimeout(function() {
                            b._close();
                        }, b.st.removalDelay)) :
                    b._close());
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (
                (b.bgOverlay.detach(),
                    b.wrap.detach(),
                    b.container.empty(),
                    b.st.mainClass && (c += b.st.mainClass + " "),
                    b._removeClassFromMFP(c),
                    b.fixedContentPos)
            ) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
                    a("html").css(e);
            }
            d.off("keyup" + p + " focusin" + p),
                b.ev.off(p),
                b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                b.bgOverlay.attr("class", "mfp-bg"),
                b.container.attr("class", "mfp-container"),
                !b.st.showCloseBtn ||
                (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
                (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
                b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
                (b.currItem = null),
                (b.content = null),
                (b.currTemplate = null),
                (b.prevHeight = 0),
                y(j);
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), (b.wH = d);
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(),
                b.content && b.content.detach(),
                c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (
                (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
                    (b.currItem = c),
                    !b.currTemplate[d])
            ) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f),
                    f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
                c,
                b.currTemplate[d]
            );
            b.appendContent(g, d),
                (c.preloaded = !0),
                y(n, c),
                (e = c.type),
                b.container.prepend(b.contentContainer),
                y("AfterChange");
        },
        appendContent: function(a, c) {
            (b.content = a),
            a
                ?
                b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ?
                b.content.find(".mfp-close").length || b.content.append(z()) :
                (b.content = a) :
                (b.content = ""),
                y(k),
                b.container.addClass("mfp-" + c + "-holder"),
                b.contentContainer.append(b.content);
        },
        parseEl: function(c) {
            var d,
                e = b.items[c];
            if (
                (e.tagName ?
                    (e = {
                        el: a(e)
                    }) :
                    ((d = e.type), (e = {
                        data: e,
                        src: e.src
                    })),
                    e.el)
            ) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break;
                    }
                    (e.src = e.el.attr("data-mfp-src")),
                e.src || (e.src = e.el.attr("href"));
            }
            return (
                (e.type = d || b.st.type || "inline"),
                (e.index = c),
                (e.parsed = !0),
                (b.items[c] = e),
                y("ElementParse", e),
                b.items[c]
            );
        },
        addGroup: function(a, c) {
            var d = function(d) {
                (d.mfpEl = this), b._openClick(d, a, c);
            };
            c || (c = {});
            var e = "click.magnificPopup";
            (c.mainEl = a),
            c.items ?
                ((c.isObj = !0), a.off(e).on(e, d)) :
                ((c.isObj = !1),
                    c.delegate ?
                    a.off(e).on(e, c.delegate, d) :
                    ((c.items = a), a.off(e).on(e, d)));
        },
        _openClick: function(c, d, e) {
            var f =
                void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (
                f ||
                !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
            ) {
                var g =
                    void 0 !== e.disableOn ?
                    e.disableOn :
                    a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0;
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
                    (e.el = a(c.mfpEl)),
                    e.delegate && (e.items = d.find(e.delegate)),
                    b.open(e);
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c),
                    d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e),
                    (a = e.status),
                    (d = e.text),
                    b.preloader.html(d),
                    b.preloader.find("a").on("click", function(a) {
                        a.stopImmediatePropagation();
                    }),
                    b.container.addClass("mfp-s-" + a),
                    (c = a);
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (
                    !b.content ||
                    a(c).hasClass("mfp-close") ||
                    (b.preloader && c === b.preloader[0])
                )
                    return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0;
                } else if (e && a.contains(document, c)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a);
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
        },
        _hasScrollBar: function(a) {
            return (
                (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
            );
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ?
                void 0 :
                (b._setFocus(), !1);
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
                y(l, [b, c, d]),
                a.each(c, function(c, d) {
                    if (void 0 === d || d === !1) return !0;
                    if (((e = c.split("_")), e.length > 1)) {
                        var f = b.find(p + "-" + e[0]);
                        if (f.length > 0) {
                            var g = e[1];
                            "replaceWith" === g
                                ?
                                f[0] !== d[0] && f.replaceWith(d) :
                                "img" === g ?
                                f.is("img") ?
                                f.attr("src", d) :
                                f.replaceWith(
                                    a("<img>").attr("src", d).attr("class", f.attr("class"))
                                ) :
                                f.attr(e[1], d);
                        }
                    } else b.find(p + "-" + c).html(d);
                });
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                (a.style.cssText =
                    "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
                document.body.appendChild(a),
                    (b.scrollbarSize = a.offsetWidth - a.clientWidth),
                    document.body.removeChild(a);
            }
            return b.scrollbarSize;
        },
    }),
    (a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return (
                A(),
                (b = b ? a.extend(!0, {}, b) : {}),
                (b.isObj = !0),
                (b.index = c || 0),
                this.instance.open(b)
            );
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close();
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options),
                a.extend(this.proto, c.proto),
                this.modules.push(b);
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0,
        },
    }),
    (a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e,
                    f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ?
                    (e = f.items[g]) :
                    ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
                    b._openClick({
                        mfpEl: e
                    }, d, f);
            } else
                b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else
            (c = a.extend(!0, {}, c)),
            u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
            b.addGroup(d, c);
        return d;
    });
    var C,
        D,
        E,
        F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), (E = null));
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F),
                    w(h + "." + F, function() {
                        G();
                    });
            },
            getInline: function(c, d) {
                if ((G(), c.src)) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g &&
                            g.tagName &&
                            (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
                                (E = f.after(D).detach().removeClass(C))),
                            b.updateStatus("ready");
                    } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
                    return (c.inlineElement = f), f;
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
            },
        },
    });
    var H,
        I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H);
        },
        K = function() {
            J(), b.req && b.req.abort();
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.',
        },
        proto: {
            initAjax: function() {
                b.types.push(I),
                    (H = b.st.ajax.cursor),
                    w(h + "." + I, K),
                    w("BeforeChange." + I, K);
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                        url: c.src,
                        success: function(d, e, f) {
                            var g = {
                                data: d,
                                xhr: f
                            };
                            y("ParseAjax", g),
                                b.appendContent(a(g.data), I),
                                (c.finished = !0),
                                J(),
                                b._setFocus(),
                                setTimeout(function() {
                                    b.wrap.addClass(q);
                                }, 16),
                                b.updateStatus("ready"),
                                y("AjaxContentAdded");
                        },
                        error: function() {
                            J(),
                                (c.finished = c.loadError = !0),
                                b.updateStatus(
                                    "error",
                                    b.st.ajax.tError.replace("%url%", c.src)
                                );
                        },
                    },
                    b.st.ajax.settings
                );
                return (b.req = a.ajax(d)), "";
            },
        },
    });
    var L,
        M = function(c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || "";
            }
            return "";
        };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.',
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"),
                    w(m + d, function() {
                        "image" === b.currItem.type &&
                            c.cursor &&
                            a(document.body).addClass(c.cursor);
                    }),
                    w(h + d, function() {
                        c.cursor && a(document.body).removeClass(c.cursor),
                            v.off("resize" + p);
                    }),
                    w("Resize" + d, b.resizeImage),
                    b.isLowIE && w("AfterChange", b.resizeImage);
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE &&
                        (c =
                            parseInt(a.img.css("padding-top"), 10) +
                            parseInt(a.img.css("padding-bottom"), 10)),
                        a.img.css("max-height", b.wH - c);
                }
            },
            _onImageHasSize: function(a) {
                a.img &&
                    ((a.hasSize = !0),
                        L && clearInterval(L),
                        (a.isCheckingImgSize = !1),
                        y("ImageHasSize", a),
                        a.imgHidden &&
                        (b.content && b.content.removeClass("mfp-loading"),
                            (a.imgHidden = !1)));
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L),
                            (L = setInterval(function() {
                                return d.naturalWidth > 0 ?
                                    void b._onImageHasSize(a) :
                                    (c > 200 && clearInterval(L),
                                        c++,
                                        void(3 === c ?
                                            e(10) :
                                            40 === c ?
                                            e(50) :
                                            100 === c && e(500)));
                            }, f));
                    };
                e(1);
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c &&
                            (c.img[0].complete ?
                                (c.img.off(".mfploader"),
                                    c === b.currItem &&
                                    (b._onImageHasSize(c), b.updateStatus("ready")),
                                    (c.hasSize = !0),
                                    (c.loaded = !0),
                                    y("ImageLoadComplete")) :
                                (e++, 200 > e ? setTimeout(f, 100) : g()));
                    },
                    g = function() {
                        c &&
                            (c.img.off(".mfploader"),
                                c === b.currItem &&
                                (b._onImageHasSize(c),
                                    b.updateStatus("error", h.tError.replace("%url%", c.src))),
                                (c.hasSize = !0),
                                (c.loaded = !0),
                                (c.loadError = !0));
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    (j.className = "mfp-img"),
                    c.el &&
                        c.el.find("img").length &&
                        (j.alt = c.el.find("img").attr("alt")),
                        (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
                        (j.src = c.src),
                        i.is("img") && (c.img = c.img.clone()),
                        (j = c.img[0]),
                        j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
                }
                return (
                    b._parseMarkup(d, {
                        title: M(c),
                        img_replaceWith: c.img
                    }, c),
                    b.resizeImage(),
                    c.hasSize ?
                    (L && clearInterval(L),
                        c.loadError ?
                        (d.addClass("mfp-loading"),
                            b.updateStatus("error", h.tError.replace("%url%", c.src))) :
                        (d.removeClass("mfp-loading"), b.updateStatus("ready")),
                        d) :
                    (b.updateStatus("loading"),
                        (c.loading = !0),
                        c.hasSize ||
                        ((c.imgHidden = !0),
                            d.addClass("mfp-loading"),
                            b.findImageSize(c)),
                        d)
                );
            },
        },
    });
    var N,
        O = function() {
            return (
                void 0 === N &&
                (N = void 0 !== document.createElement("p").style.MozTransform),
                N
            );
        };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img");
            },
        },
        proto: {
            initZoom: function() {
                var a,
                    c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e,
                        f,
                        g = c.duration,
                        j = function(a) {
                            var b = a
                                .clone()
                                .removeAttr("style")
                                .removeAttr("class")
                                .addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden",
                                },
                                f = "transition";
                            return (
                                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                                b.css(e),
                                b
                            );
                        },
                        k = function() {
                            b.content.css("visibility", "visible");
                        };
                    w("BuildControls" + d, function() {
                            if (b._allowZoom()) {
                                if (
                                    (clearTimeout(e),
                                        b.content.css("visibility", "hidden"),
                                        (a = b._getItemToZoom()),
                                        !a)
                                )
                                    return void k();
                                (f = j(a)),
                                f.css(b._getOffset()),
                                    b.wrap.append(f),
                                    (e = setTimeout(function() {
                                        f.css(b._getOffset(!0)),
                                            (e = setTimeout(function() {
                                                k(),
                                                    setTimeout(function() {
                                                        f.remove(), (a = f = null), y("ZoomAnimationEnded");
                                                    }, 16);
                                            }, g));
                                    }, 16));
                            }
                        }),
                        w(i + d, function() {
                            if (b._allowZoom()) {
                                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                                    if (((a = b._getItemToZoom()), !a)) return;
                                    f = j(a);
                                }
                                f.css(b._getOffset(!0)),
                                    b.wrap.append(f),
                                    b.content.css("visibility", "hidden"),
                                    setTimeout(function() {
                                        f.css(b._getOffset());
                                    }, 16);
                            }
                        }),
                        w(h + d, function() {
                            b._allowZoom() && (k(), f && f.remove(), (a = null));
                        });
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type;
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1;
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
                };
                return (
                    O() ?
                    (h["-moz-transform"] = h.transform =
                        "translate(" + e.left + "px," + e.top + "px)") :
                    ((h.left = e.left), (h.top = e.top)),
                    h
                );
            },
        },
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length &&
                    (a || (c[0].src = Q),
                        b.isIE8 && c.css("display", a ? "block" : "none"));
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1",
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1",
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                },
            },
        },
        proto: {
            initIframe: function() {
                b.types.push(P),
                    w("BeforeChange", function(a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0));
                    }),
                    w(h + "." + P, function() {
                        R();
                    });
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ?
                        (this.id &&
                            (e =
                                "string" == typeof this.id ?
                                e.substr(
                                    e.lastIndexOf(this.id) + this.id.length,
                                    e.length
                                ) :
                                this.id.call(this, e)),
                            (e = this.src.replace("%id%", e)),
                            !1) :
                        void 0;
                });
                var g = {};
                return (
                    f.srcAction && (g[f.srcAction] = e),
                    b._parseMarkup(d, g, c),
                    b.updateStatus("ready"),
                    d
                );
            },
        },
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a;
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%",
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return (
                    (b.direction = !0),
                    c && c.enabled ?
                    ((f += " mfp-gallery"),
                        w(m + e, function() {
                            c.navigateByImgClick &&
                                b.wrap.on("click" + e, ".mfp-img", function() {
                                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                                }),
                                d.on("keydown" + e, function(a) {
                                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                                });
                        }),
                        w("UpdateStatus" + e, function(a, c) {
                            c.text &&
                                (c.text = T(c.text, b.currItem.index, b.items.length));
                        }),
                        w(l + e, function(a, d, e, f) {
                            var g = b.items.length;
                            e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
                        }),
                        w("BuildControls" + e, function() {
                            if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                                var d = c.arrowMarkup,
                                    e = (b.arrowLeft = a(
                                        d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                                    ).addClass(s)),
                                    f = (b.arrowRight = a(
                                        d
                                        .replace(/%title%/gi, c.tNext)
                                        .replace(/%dir%/gi, "right")
                                    ).addClass(s));
                                e.click(function() {
                                        b.prev();
                                    }),
                                    f.click(function() {
                                        b.next();
                                    }),
                                    b.container.append(e.add(f));
                            }
                        }),
                        w(n + e, function() {
                            b._preloadTimeout && clearTimeout(b._preloadTimeout),
                                (b._preloadTimeout = setTimeout(function() {
                                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                                }, 16));
                        }),
                        void w(h + e, function() {
                            d.off(e),
                                b.wrap.off("click" + e),
                                (b.arrowRight = b.arrowLeft = null);
                        })) :
                    !1
                );
            },
            next: function() {
                (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
            },
            prev: function() {
                (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
            },
            goTo: function(a) {
                (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
            },
            preloadNearbyImages: function() {
                var a,
                    c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++)
                    b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++)
                    b._preloadItem(b.index - a);
            },
            _preloadItem: function(c) {
                if (((c = S(c)), !b.items[c].preloaded)) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                        y("LazyLoad", d),
                        "image" === d.type &&
                        (d.img = a('<img class="mfp-img" />')
                            .on("load.mfploader", function() {
                                d.hasSize = !0;
                            })
                            .on("error.mfploader", function() {
                                (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                            })
                            .attr("src", d.src)),
                        (d.preloaded = !0);
                }
            },
        },
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
            options: {
                replaceSrc: function(a) {
                    return a.src.replace(/\.\w+$/, function(a) {
                        return "@2x" + a;
                    });
                },
                ratio: 1,
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var a = b.st.retina,
                            c = a.ratio;
                        (c = isNaN(c) ? c() : c),
                        c > 1 &&
                            (w("ImageHasSize." + U, function(a, b) {
                                    b.img.css({
                                        "max-width": b.img[0].naturalWidth / c,
                                        width: "100%",
                                    });
                                }),
                                w("ElementParse." + U, function(b, d) {
                                    d.src = a.replaceSrc(d, c);
                                }));
                    }
                },
            },
        }),
        A();
});

/*magnific popup end*/

/*scrollreveal start*/

!(function(e, t) {
    "function" == typeof define && define.amd ?
        define(t) :
        "object" == typeof exports ?
        (module.exports = t(require, exports, module)) :
        (e.ScrollReveal = t());
})(this, function(e, t, n) {
    return (
        function() {
            "use strict";
            var e, t, n;
            (this.ScrollReveal = (function() {
                function i(n) {
                    return "undefined" == typeof this ||
                        Object.getPrototypeOf(this) !== i.prototype ?
                        new i(n) :
                        ((e = this),
                            (e.tools = new t()),
                            e.isSupported() ?
                            (e.tools.extend(e.defaults, n || {}),
                                o(e.defaults),
                                (e.store = {
                                    elements: {},
                                    containers: []
                                }),
                                (e.sequences = {}),
                                (e.history = []),
                                (e.uid = 0),
                                (e.initialized = !1)) :
                            "undefined" != typeof console &&
                            null !== console &&
                            console.log("ScrollReveal is not supported in this browser."),
                            e);
                }

                function o(t) {
                    var n = t.container;
                    return n && "string" == typeof n ?
                        (t.container = window.document.querySelector(n)) :
                        (n &&
                            !e.tools.isNode(n) &&
                            (console.log(
                                    "ScrollReveal: Invalid container provided, using <html> instead."
                                ),
                                (t.container = null)),
                            null == n && (t.container = window.document.documentElement),
                            t.container);
                }

                function r() {
                    return ++e.uid;
                }

                function s(t, n) {
                    t.config ?
                        (t.config = e.tools.extendClone(t.config, n)) :
                        (t.config = e.tools.extendClone(e.defaults, n)),
                        "top" === t.config.origin || "bottom" === t.config.origin ?
                        (t.config.axis = "Y") :
                        (t.config.axis = "X"),
                        ("top" === t.config.origin || "left" === t.config.origin) &&
                        (t.config.distance = "-" + t.config.distance);
                }

                function a(e) {
                    var t = window.getComputedStyle(e.domEl);
                    e.styles ||
                        ((e.styles = {
                                transition: {},
                                transform: {},
                                computed: {}
                            }),
                            (e.styles.inline = e.domEl.getAttribute("style") || ""),
                            (e.styles.inline += "; visibility: visible; "),
                            (e.styles.computed.opacity = t.opacity),
                            t.transition && "all 0s ease 0s" != t.transition ?
                            (e.styles.computed.transition = t.transition + ", ") :
                            (e.styles.computed.transition = "")),
                        (e.styles.transition.instant = l(e, 0)),
                        (e.styles.transition.delayed = l(e, e.config.delay)),
                        (e.styles.transform.initial = " -webkit-transform:"),
                        (e.styles.transform.target = " -webkit-transform:"),
                        c(e),
                        (e.styles.transform.initial += "transform:"),
                        (e.styles.transform.target += "transform:"),
                        c(e);
                }

                function l(e, t) {
                    var n = e.config;
                    return (
                        "-webkit-transition: " +
                        e.styles.computed.transition +
                        "-webkit-transform " +
                        n.duration / 1e3 +
                        "s " +
                        n.easing +
                        " " +
                        t / 1e3 +
                        "s, opacity " +
                        n.duration / 1e3 +
                        "s " +
                        n.easing +
                        " " +
                        t / 1e3 +
                        "s; transition: " +
                        e.styles.computed.transition +
                        "transform " +
                        n.duration / 1e3 +
                        "s " +
                        n.easing +
                        " " +
                        t / 1e3 +
                        "s, opacity " +
                        n.duration / 1e3 +
                        "s " +
                        n.easing +
                        " " +
                        t / 1e3 +
                        "s; "
                    );
                }

                function c(e) {
                    var t = e.config,
                        n = e.styles.transform;
                    parseInt(t.distance) &&
                        ((n.initial += " translate" + t.axis + "(" + t.distance + ")"),
                            (n.target += " translate" + t.axis + "(0)")),
                        t.scale &&
                        ((n.initial += " scale(" + t.scale + ")"),
                            (n.target += " scale(1)")),
                        t.rotate.x &&
                        ((n.initial += " rotateX(" + t.rotate.x + "deg)"),
                            (n.target += " rotateX(0)")),
                        t.rotate.y &&
                        ((n.initial += " rotateY(" + t.rotate.y + "deg)"),
                            (n.target += " rotateY(0)")),
                        t.rotate.z &&
                        ((n.initial += " rotateZ(" + t.rotate.z + "deg)"),
                            (n.target += " rotateZ(0)")),
                        (n.initial += "; opacity: " + t.opacity + ";"),
                        (n.target += "; opacity: " + e.styles.computed.opacity + ";");
                }

                function f(t) {
                    var n = t.config.container;
                    n &&
                        -1 == e.store.containers.indexOf(n) &&
                        e.store.containers.push(t.config.container),
                        (e.store.elements[t.id] = t);
                }

                function u(t, n, i) {
                    var o = {
                        selector: t,
                        config: n,
                        interval: i
                    };
                    e.history.push(o);
                }

                function d() {
                    if (e.isSupported()) {
                        g();
                        for (var t = 0; t < e.store.containers.length; t++)
                            e.store.containers[t].addEventListener("scroll", y),
                            e.store.containers[t].addEventListener("resize", y);
                        e.initialized ||
                            (window.addEventListener("scroll", y),
                                window.addEventListener("resize", y),
                                (e.initialized = !0));
                    }
                    return e;
                }

                function y() {
                    n(g);
                }

                function m() {
                    var t, n, i, o;
                    e.tools.forOwn(e.sequences, function(r) {
                        (o = e.sequences[r]), (t = !1);
                        for (var s = 0; s < o.elemIds.length; s++)
                            (i = o.elemIds[s]),
                            (n = e.store.elements[i]),
                            O(n) && !t && (t = !0);
                        o.active = t;
                    });
                }

                function g() {
                    var t, n;
                    m(),
                        e.tools.forOwn(e.store.elements, function(i) {
                            (n = e.store.elements[i]),
                            (t = b(n)),
                            w(n) ?
                                (t ?
                                    n.domEl.setAttribute(
                                        "style",
                                        n.styles.inline +
                                        n.styles.transform.target +
                                        n.styles.transition.delayed
                                    ) :
                                    n.domEl.setAttribute(
                                        "style",
                                        n.styles.inline +
                                        n.styles.transform.target +
                                        n.styles.transition.instant
                                    ),
                                    v("reveal", n, t),
                                    (n.revealing = !0),
                                    (n.seen = !0),
                                    n.sequence && p(n, t)) :
                                h(n) &&
                                (n.domEl.setAttribute(
                                        "style",
                                        n.styles.inline +
                                        n.styles.transform.initial +
                                        n.styles.transition.instant
                                    ),
                                    v("reset", n),
                                    (n.revealing = !1));
                        });
                }

                function p(t, n) {
                    var i = 0,
                        o = 0,
                        r = e.sequences[t.sequence.id];
                    (r.blocked = !0),
                    n && "onload" == t.config.useDelay && (o = t.config.delay),
                        t.sequence.timer &&
                        ((i = Math.abs(t.sequence.timer.started - new Date())),
                            window.clearTimeout(t.sequence.timer)),
                        (t.sequence.timer = {
                            started: new Date()
                        }),
                        (t.sequence.timer.clock = window.setTimeout(function() {
                            (r.blocked = !1), (t.sequence.timer = null), y();
                        }, Math.abs(r.interval) + o - i));
                }

                function v(e, t, n) {
                    var i = 0,
                        o = 0,
                        r = "after";
                    switch (e) {
                        case "reveal":
                            (o = t.config.duration),
                            n && (o += t.config.delay),
                                (r += "Reveal");
                            break;
                        case "reset":
                            (o = t.config.duration), (r += "Reset");
                    }
                    t.timer &&
                        ((i = Math.abs(t.timer.started - new Date())),
                            window.clearTimeout(t.timer.clock)),
                        (t.timer = {
                            started: new Date()
                        }),
                        (t.timer.clock = window.setTimeout(function() {
                            t.config[r](t.domEl), (t.timer = null);
                        }, o - i));
                }

                function w(t) {
                    if (t.sequence) {
                        var n = e.sequences[t.sequence.id];
                        return n.active && !n.blocked && !t.revealing && !t.disabled;
                    }
                    return O(t) && !t.revealing && !t.disabled;
                }

                function b(t) {
                    var n = t.config.useDelay;
                    return (
                        "always" === n ||
                        ("onload" === n && !e.initialized) ||
                        ("once" === n && !t.seen)
                    );
                }

                function h(t) {
                    if (t.sequence) {
                        var n = e.sequences[t.sequence.id];
                        return !n.active && t.config.reset && t.revealing && !t.disabled;
                    }
                    return !O(t) && t.config.reset && t.revealing && !t.disabled;
                }

                function x(e) {
                    return {
                        width: e.clientWidth,
                        height: e.clientHeight
                    };
                }

                function q(e) {
                    if (e && e !== window.document.documentElement) {
                        var t = E(e);
                        return {
                            x: e.scrollLeft + t.left,
                            y: e.scrollTop + t.top
                        };
                    }
                    return {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    };
                }

                function E(e) {
                    var t = 0,
                        n = 0,
                        i = e.offsetHeight,
                        o = e.offsetWidth;
                    do
                        isNaN(e.offsetTop) || (t += e.offsetTop),
                        isNaN(e.offsetLeft) || (n += e.offsetLeft);
                    while ((e = e.offsetParent));
                    return {
                        top: t,
                        left: n,
                        height: i,
                        width: o
                    };
                }

                function O(e) {
                    function t() {
                        var t = c + a * s,
                            n = f + l * s,
                            i = u - a * s,
                            y = d - l * s,
                            m = r.y + e.config.viewOffset.top,
                            g = r.x + e.config.viewOffset.left,
                            p = r.y - e.config.viewOffset.bottom + o.height,
                            v = r.x - e.config.viewOffset.right + o.width;
                        return p > t && i > m && n > g && v > y;
                    }

                    function n() {
                        return "fixed" === window.getComputedStyle(e.domEl).position;
                    }
                    var i = E(e.domEl),
                        o = x(e.config.container),
                        r = q(e.config.container),
                        s = e.config.viewFactor,
                        a = i.height,
                        l = i.width,
                        c = i.top,
                        f = i.left,
                        u = c + a,
                        d = f + l;
                    return t() || n();
                }
                return (
                    (i.prototype.defaults = {
                        origin: "bottom",
                        distance: "20px",
                        duration: 500,
                        delay: 0,
                        rotate: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        opacity: 0,
                        scale: 0.9,
                        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
                        container: null,
                        mobile: !0,
                        reset: !1,
                        useDelay: "always",
                        viewFactor: 0.2,
                        viewOffset: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        },
                        afterReveal: function(e) {},
                        afterReset: function(e) {},
                    }),
                    (i.prototype.isSupported = function() {
                        var e = document.documentElement.style;
                        return (
                            ("WebkitTransition" in e && "WebkitTransform" in e) ||
                            ("transition" in e && "transform" in e)
                        );
                    }),
                    (i.prototype.reveal = function(t, n, i, l) {
                        var c, y, m, g, p, v;
                        if (
                            ((c = n && n.container ? o(n) : e.defaults.container),
                                (y = e.tools.isNode(t) ?
                                    [t] :
                                    Array.prototype.slice.call(c.querySelectorAll(t))),
                                !y.length)
                        )
                            return (
                                console.log(
                                    'ScrollReveal: reveal on "' +
                                    t +
                                    '" failed, no elements found.'
                                ),
                                e
                            );
                        n && "number" == typeof n && ((i = n), (n = {})),
                            i &&
                            "number" == typeof i &&
                            ((v = r()),
                                (p = e.sequences[v] = {
                                    id: v,
                                    interval: i,
                                    elemIds: [],
                                    active: !1
                                }));
                        for (var w = 0; w < y.length; w++)
                            (g = y[w].getAttribute("data-sr-id")),
                            g ?
                            (m = e.store.elements[g]) :
                            ((m = {
                                    id: r(),
                                    domEl: y[w],
                                    seen: !1,
                                    revealing: !1
                                }),
                                m.domEl.setAttribute("data-sr-id", m.id)),
                            p &&
                            ((m.sequence = {
                                    id: p.id,
                                    index: p.elemIds.length
                                }),
                                p.elemIds.push(m.id)),
                            s(m, n || {}),
                            a(m),
                            f(m),
                            (e.tools.isMobile() && !m.config.mobile) || !e.isSupported() ?
                            (m.domEl.setAttribute("style", m.styles.inline),
                                (m.disabled = !0)) :
                            m.revealing ||
                            m.domEl.setAttribute(
                                "style",
                                m.styles.inline + m.styles.transform.initial
                            );
                        return (
                            !l &&
                            e.isSupported() &&
                            (u(t, n),
                                e.initTimeout && window.clearTimeout(e.initTimeout),
                                (e.initTimeout = window.setTimeout(d, 0))),
                            e
                        );
                    }),
                    (i.prototype.sync = function() {
                        if (e.history.length && e.isSupported()) {
                            for (var t = 0; t < e.history.length; t++) {
                                var n = e.history[t];
                                e.reveal(n.selector, n.config, n.interval, !0);
                            }
                            d();
                        } else console.log("ScrollReveal: sync failed, no reveals found.");
                        return e;
                    }),
                    i
                );
            })()),
            (t = (function() {
                function e() {}
                return (
                    (e.prototype.isObject = function(e) {
                        return (
                            null !== e && "object" == typeof e && e.constructor == Object
                        );
                    }),
                    (e.prototype.isNode = function(e) {
                        return "object" == typeof Node ?
                            e instanceof Node :
                            e &&
                            "object" == typeof e &&
                            "number" == typeof e.nodeType &&
                            "string" == typeof e.nodeName;
                    }),
                    (e.prototype.forOwn = function(e, t) {
                        if (!this.isObject(e))
                            throw new TypeError(
                                'Expected "object", but received "' + typeof e + '".'
                            );
                        for (var n in e) e.hasOwnProperty(n) && t(n);
                    }),
                    (e.prototype.extend = function(e, t) {
                        return (
                            this.forOwn(
                                t,
                                function(n) {
                                    this.isObject(t[n]) ?
                                        ((e[n] && this.isObject(e[n])) || (e[n] = {}),
                                            this.extend(e[n], t[n])) :
                                        (e[n] = t[n]);
                                }.bind(this)
                            ),
                            e
                        );
                    }),
                    (e.prototype.extendClone = function(e, t) {
                        return this.extend(this.extend({}, e), t);
                    }),
                    (e.prototype.isMobile = function() {
                        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                            navigator.userAgent
                        );
                    }),
                    e
                );
            })()),
            (n =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame);
        }.call(this),
        this.ScrollReveal
    );
});

/*scrollreveal end*/

/*TweenMax.min start @112kb*/
/*!
 * VERSION: 1.20.2
 * DATE: 2017-06-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope =
    "undefined" != typeof module && module.exports && "undefined" != typeof global ?
    global :
    this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine(
                "TweenMax",
                ["core.Animation", "core.SimpleTimeline", "TweenLite"],
                function(a, b, c) {
                    var d = function(a) {
                            var b,
                                c = [],
                                d = a.length;
                            for (b = 0; b !== d; c.push(a[b++]));
                            return c;
                        },
                        e = function(a, b, c) {
                            var d,
                                e,
                                f = a.cycle;
                            for (d in f)
                                (e = f[d]),
                                (a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]);
                            delete a.cycle;
                        },
                        f = function(a, b, d) {
                            c.call(this, a, b, d),
                                (this._cycle = 0),
                                (this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
                                (this._repeat = this.vars.repeat || 0),
                                (this._repeatDelay = this.vars.repeatDelay || 0),
                                (this._dirty = !0),
                                (this.render = f.prototype.render);
                        },
                        g = 1e-10,
                        h = c._internals,
                        i = h.isSelector,
                        j = h.isArray,
                        k = (f.prototype = c.to({}, 0.1, {})),
                        l = [];
                    (f.version = "1.20.2"),
                    (k.constructor = f),
                    (k.kill()._gc = !1),
                    (f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf),
                    (f.getTweensOf = c.getTweensOf),
                    (f.lagSmoothing = c.lagSmoothing),
                    (f.ticker = c.ticker),
                    (f.render = c.render),
                    (k.invalidate = function() {
                        return (
                            (this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
                            (this._repeat = this.vars.repeat || 0),
                            (this._repeatDelay = this.vars.repeatDelay || 0),
                            (this._yoyoEase = null),
                            this._uncache(!0),
                            c.prototype.invalidate.call(this)
                        );
                    }),
                    (k.updateTo = function(a, b) {
                        var d,
                            e = this.ratio,
                            f = this.vars.immediateRender || a.immediateRender;
                        b &&
                            this._startTime < this._timeline._time &&
                            ((this._startTime = this._timeline._time),
                                this._uncache(!1),
                                this._gc ?
                                this._enabled(!0, !1) :
                                this._timeline.insert(this, this._startTime - this._delay));
                        for (d in a) this.vars[d] = a[d];
                        if (this._initted || f)
                            if (b)(this._initted = !1), f && this.render(0, !0, !0);
                            else if (
                            (this._gc && this._enabled(!0, !1),
                                this._notifyPluginsOfEnabled &&
                                this._firstPT &&
                                c._onPluginEvent("_onDisable", this),
                                this._time / this._duration > 0.998)
                        ) {
                            var g = this._totalTime;
                            this.render(0, !0, !1),
                                (this._initted = !1),
                                this.render(g, !0, !1);
                        } else if (
                            ((this._initted = !1), this._init(), this._time > 0 || f)
                        )
                            for (var h, i = 1 / (1 - e), j = this._firstPT; j;)
                                (h = j.s + j.c), (j.c *= i), (j.s = h - j.c), (j = j._next);
                        return this;
                    }),
                    (k.render = function(a, b, d) {
                        this._initted ||
                            (0 === this._duration && this.vars.repeat && this.invalidate());
                        var e,
                            f,
                            i,
                            j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p = this._dirty ? this.totalDuration() : this._totalDuration,
                            q = this._time,
                            r = this._totalTime,
                            s = this._cycle,
                            t = this._duration,
                            u = this._rawPrevTime;
                        if (
                            (a >= p - 1e-7 && a >= 0 ?
                                ((this._totalTime = p),
                                    (this._cycle = this._repeat),
                                    this._yoyo && 0 !== (1 & this._cycle) ?
                                    ((this._time = 0),
                                        (this.ratio = this._ease._calcEnd ?
                                            this._ease.getRatio(0) :
                                            0)) :
                                    ((this._time = t),
                                        (this.ratio = this._ease._calcEnd ?
                                            this._ease.getRatio(1) :
                                            1)),
                                    this._reversed ||
                                    ((e = !0),
                                        (f = "onComplete"),
                                        (d = d || this._timeline.autoRemoveChildren)),
                                    0 === t &&
                                    (this._initted || !this.vars.lazy || d) &&
                                    (this._startTime === this._timeline._duration && (a = 0),
                                        (0 > u ||
                                            (0 >= a && a >= -1e-7) ||
                                            (u === g && "isPause" !== this.data)) &&
                                        u !== a &&
                                        ((d = !0), u > g && (f = "onReverseComplete")),
                                        (this._rawPrevTime = n = !b || a || u === a ? a : g))) :
                                1e-7 > a ?
                                ((this._totalTime = this._time = this._cycle = 0),
                                    (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                                    (0 !== r || (0 === t && u > 0)) &&
                                    ((f = "onReverseComplete"), (e = this._reversed)),
                                    0 > a &&
                                    ((this._active = !1),
                                        0 === t &&
                                        (this._initted || !this.vars.lazy || d) &&
                                        (u >= 0 && (d = !0),
                                            (this._rawPrevTime = n = !b || a || u === a ? a : g))),
                                    this._initted || (d = !0)) :
                                ((this._totalTime = this._time = a),
                                    0 !== this._repeat &&
                                    ((j = t + this._repeatDelay),
                                        (this._cycle = (this._totalTime / j) >> 0),
                                        0 !== this._cycle &&
                                        this._cycle === this._totalTime / j &&
                                        a >= r &&
                                        this._cycle--,
                                        (this._time = this._totalTime - this._cycle * j),
                                        this._yoyo &&
                                        0 !== (1 & this._cycle) &&
                                        ((this._time = t - this._time),
                                            (o = this._yoyoEase || this.vars.yoyoEase),
                                            o &&
                                            (this._yoyoEase ||
                                                (o !== !0 || this._initted ?
                                                    (this._yoyoEase = o =
                                                        o === !0 ?
                                                        this._ease :
                                                        o instanceof Ease ?
                                                        o :
                                                        Ease.map[o]) :
                                                    ((o = this.vars.ease),
                                                        (this._yoyoEase = o =
                                                            o ?
                                                            o instanceof Ease ?
                                                            o :
                                                            "function" == typeof o ?
                                                            new Ease(o, this.vars.easeParams) :
                                                            Ease.map[o] || c.defaultEase :
                                                            c.defaultEase))),
                                                (this.ratio = o ?
                                                    1 - o.getRatio((t - this._time) / t) :
                                                    0))),
                                        this._time > t ?
                                        (this._time = t) :
                                        this._time < 0 && (this._time = 0)),
                                    this._easeType && !o ?
                                    ((k = this._time / t),
                                        (l = this._easeType),
                                        (m = this._easePower),
                                        (1 === l || (3 === l && k >= 0.5)) && (k = 1 - k),
                                        3 === l && (k *= 2),
                                        1 === m ?
                                        (k *= k) :
                                        2 === m ?
                                        (k *= k * k) :
                                        3 === m ?
                                        (k *= k * k * k) :
                                        4 === m && (k *= k * k * k * k),
                                        1 === l ?
                                        (this.ratio = 1 - k) :
                                        2 === l ?
                                        (this.ratio = k) :
                                        this._time / t < 0.5 ?
                                        (this.ratio = k / 2) :
                                        (this.ratio = 1 - k / 2)) :
                                    o || (this.ratio = this._ease.getRatio(this._time / t))),
                                q === this._time && !d && s === this._cycle)
                        )
                            return void(
                                r !== this._totalTime &&
                                this._onUpdate &&
                                (b || this._callback("onUpdate"))
                            );
                        if (!this._initted) {
                            if ((this._init(), !this._initted || this._gc)) return;
                            if (
                                !d &&
                                this._firstPT &&
                                ((this.vars.lazy !== !1 && this._duration) ||
                                    (this.vars.lazy && !this._duration))
                            )
                                return (
                                    (this._time = q),
                                    (this._totalTime = r),
                                    (this._rawPrevTime = u),
                                    (this._cycle = s),
                                    h.lazyTweens.push(this),
                                    void(this._lazy = [a, b])
                                );
                            !this._time || e || o ?
                                e &&
                                this._ease._calcEnd &&
                                !o &&
                                (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) :
                                (this.ratio = this._ease.getRatio(this._time / t));
                        }
                        for (
                            this._lazy !== !1 && (this._lazy = !1),
                            this._active ||
                            (!this._paused &&
                                this._time !== q &&
                                a >= 0 &&
                                (this._active = !0)),
                            0 === r &&
                            (2 === this._initted && a > 0 && this._init(),
                                this._startAt &&
                                (a >= 0 ?
                                    this._startAt.render(a, b, d) :
                                    f || (f = "_dummyGS")),
                                this.vars.onStart &&
                                (0 !== this._totalTime || 0 === t) &&
                                (b || this._callback("onStart"))),
                            i = this._firstPT; i;

                        )
                            i.f ?
                            i.t[i.p](i.c * this.ratio + i.s) :
                            (i.t[i.p] = i.c * this.ratio + i.s),
                            (i = i._next);
                        this._onUpdate &&
                            (0 > a &&
                                this._startAt &&
                                this._startTime &&
                                this._startAt.render(a, b, d),
                                b || ((this._totalTime !== r || f) && this._callback("onUpdate"))),
                            this._cycle !== s &&
                            (b ||
                                this._gc ||
                                (this.vars.onRepeat && this._callback("onRepeat"))),
                            f &&
                            (!this._gc || d) &&
                            (0 > a &&
                                this._startAt &&
                                !this._onUpdate &&
                                this._startTime &&
                                this._startAt.render(a, b, d),
                                e &&
                                (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                                    (this._active = !1)),
                                !b && this.vars[f] && this._callback(f),
                                0 === t &&
                                this._rawPrevTime === g &&
                                n !== g &&
                                (this._rawPrevTime = 0));
                    }),
                    (f.to = function(a, b, c) {
                        return new f(a, b, c);
                    }),
                    (f.from = function(a, b, c) {
                        return (
                            (c.runBackwards = !0),
                            (c.immediateRender = 0 != c.immediateRender),
                            new f(a, b, c)
                        );
                    }),
                    (f.fromTo = function(a, b, c, d) {
                        return (
                            (d.startAt = c),
                            (d.immediateRender =
                                0 != d.immediateRender && 0 != c.immediateRender),
                            new f(a, b, d)
                        );
                    }),
                    (f.staggerTo = f.allTo =
                        function(a, b, g, h, k, m, n) {
                            h = h || 0;
                            var o,
                                p,
                                q,
                                r,
                                s = 0,
                                t = [],
                                u = function() {
                                    g.onComplete &&
                                        g.onComplete.apply(g.onCompleteScope || this, arguments),
                                        k.apply(n || g.callbackScope || this, m || l);
                                },
                                v = g.cycle,
                                w = g.startAt && g.startAt.cycle;
                            for (
                                j(a) ||
                                ("string" == typeof a && (a = c.selector(a) || a),
                                    i(a) && (a = d(a))),
                                a = a || [],
                                0 > h && ((a = d(a)), a.reverse(), (h *= -1)),
                                o = a.length - 1,
                                q = 0; o >= q; q++
                            ) {
                                p = {};
                                for (r in g) p[r] = g[r];
                                if (
                                    (v &&
                                        (e(p, a, q),
                                            null != p.duration && ((b = p.duration), delete p.duration)),
                                        w)
                                ) {
                                    w = p.startAt = {};
                                    for (r in g.startAt) w[r] = g.startAt[r];
                                    e(p.startAt, a, q);
                                }
                                (p.delay = s + (p.delay || 0)),
                                q === o && k && (p.onComplete = u),
                                    (t[q] = new f(a[q], b, p)),
                                    (s += h);
                            }
                            return t;
                        }),
                    (f.staggerFrom = f.allFrom =
                        function(a, b, c, d, e, g, h) {
                            return (
                                (c.runBackwards = !0),
                                (c.immediateRender = 0 != c.immediateRender),
                                f.staggerTo(a, b, c, d, e, g, h)
                            );
                        }),
                    (f.staggerFromTo = f.allFromTo =
                        function(a, b, c, d, e, g, h, i) {
                            return (
                                (d.startAt = c),
                                (d.immediateRender =
                                    0 != d.immediateRender && 0 != c.immediateRender),
                                f.staggerTo(a, b, d, e, g, h, i)
                            );
                        }),
                    (f.delayedCall = function(a, b, c, d, e) {
                        return new f(b, 0, {
                            delay: a,
                            onComplete: b,
                            onCompleteParams: c,
                            callbackScope: d,
                            onReverseComplete: b,
                            onReverseCompleteParams: c,
                            immediateRender: !1,
                            useFrames: e,
                            overwrite: 0,
                        });
                    }),
                    (f.set = function(a, b) {
                        return new f(a, 0, b);
                    }),
                    (f.isTweening = function(a) {
                        return c.getTweensOf(a, !0).length > 0;
                    });
                    var m = function(a, b) {
                            for (var d = [], e = 0, f = a._first; f;)
                                f instanceof c ?
                                (d[e++] = f) :
                                (b && (d[e++] = f), (d = d.concat(m(f, b))), (e = d.length)),
                                (f = f._next);
                            return d;
                        },
                        n = (f.getAllTweens = function(b) {
                            return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b));
                        });
                    (f.killAll = function(a, c, d, e) {
                        null == c && (c = !0), null == d && (d = !0);
                        var f,
                            g,
                            h,
                            i = n(0 != e),
                            j = i.length,
                            k = c && d && e;
                        for (h = 0; j > h; h++)
                            (g = i[h]),
                            (k ||
                                g instanceof b ||
                                ((f = g.target === g.vars.onComplete) && d) ||
                                (c && !f)) &&
                            (a ?
                                g.totalTime(g._reversed ? 0 : g.totalDuration()) :
                                g._enabled(!1, !1));
                    }),
                    (f.killChildTweensOf = function(a, b) {
                        if (null != a) {
                            var e,
                                g,
                                k,
                                l,
                                m,
                                n = h.tweenLookup;
                            if (
                                ("string" == typeof a && (a = c.selector(a) || a),
                                    i(a) && (a = d(a)),
                                    j(a))
                            )
                                for (l = a.length; --l > -1;) f.killChildTweensOf(a[l], b);
                            else {
                                e = [];
                                for (k in n)
                                    for (g = n[k].target.parentNode; g;)
                                        g === a && (e = e.concat(n[k].tweens)), (g = g.parentNode);
                                for (m = e.length, l = 0; m > l; l++)
                                    b && e[l].totalTime(e[l].totalDuration()),
                                    e[l]._enabled(!1, !1);
                            }
                        }
                    });
                    var o = function(a, c, d, e) {
                        (c = c !== !1), (d = d !== !1), (e = e !== !1);
                        for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1;)
                            (g = h[j]),
                            (i ||
                                g instanceof b ||
                                ((f = g.target === g.vars.onComplete) && d) ||
                                (c && !f)) &&
                            g.paused(a);
                    };
                    return (
                        (f.pauseAll = function(a, b, c) {
                            o(!0, a, b, c);
                        }),
                        (f.resumeAll = function(a, b, c) {
                            o(!1, a, b, c);
                        }),
                        (f.globalTimeScale = function(b) {
                            var d = a._rootTimeline,
                                e = c.ticker.time;
                            return arguments.length ?
                                ((b = b || g),
                                    (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
                                    (d = a._rootFramesTimeline),
                                    (e = c.ticker.frame),
                                    (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
                                    (d._timeScale = a._rootTimeline._timeScale = b),
                                    b) :
                                d._timeScale;
                        }),
                        (k.progress = function(a, b) {
                            return arguments.length ?
                                this.totalTime(
                                    this.duration() *
                                    (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) +
                                    this._cycle * (this._duration + this._repeatDelay),
                                    b
                                ) :
                                this._time / this.duration();
                        }),
                        (k.totalProgress = function(a, b) {
                            return arguments.length ?
                                this.totalTime(this.totalDuration() * a, b) :
                                this._totalTime / this.totalDuration();
                        }),
                        (k.time = function(a, b) {
                            return arguments.length ?
                                (this._dirty && this.totalDuration(),
                                    a > this._duration && (a = this._duration),
                                    this._yoyo && 0 !== (1 & this._cycle) ?
                                    (a =
                                        this._duration -
                                        a +
                                        this._cycle * (this._duration + this._repeatDelay)) :
                                    0 !== this._repeat &&
                                    (a += this._cycle * (this._duration + this._repeatDelay)),
                                    this.totalTime(a, b)) :
                                this._time;
                        }),
                        (k.duration = function(b) {
                            return arguments.length ?
                                a.prototype.duration.call(this, b) :
                                this._duration;
                        }),
                        (k.totalDuration = function(a) {
                            return arguments.length ?
                                -1 === this._repeat ?
                                this :
                                this.duration(
                                    (a - this._repeat * this._repeatDelay) / (this._repeat + 1)
                                ) :
                                (this._dirty &&
                                    ((this._totalDuration = -1 === this._repeat ?
                                            999999999999 :
                                            this._duration * (this._repeat + 1) +
                                            this._repeatDelay * this._repeat),
                                        (this._dirty = !1)),
                                    this._totalDuration);
                        }),
                        (k.repeat = function(a) {
                            return arguments.length ?
                                ((this._repeat = a), this._uncache(!0)) :
                                this._repeat;
                        }),
                        (k.repeatDelay = function(a) {
                            return arguments.length ?
                                ((this._repeatDelay = a), this._uncache(!0)) :
                                this._repeatDelay;
                        }),
                        (k.yoyo = function(a) {
                            return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
                        }),
                        f
                    );
                },
                !0
            ),
            _gsScope._gsDefine(
                "TimelineLite",
                ["core.Animation", "core.SimpleTimeline", "TweenLite"],
                function(a, b, c) {
                    var d = function(a) {
                            b.call(this, a),
                                (this._labels = {}),
                                (this.autoRemoveChildren = this.vars.autoRemoveChildren === !0),
                                (this.smoothChildTiming = this.vars.smoothChildTiming === !0),
                                (this._sortChildren = !0),
                                (this._onUpdate = this.vars.onUpdate);
                            var c,
                                d,
                                e = this.vars;
                            for (d in e)
                                (c = e[d]),
                                i(c) &&
                                -1 !== c.join("").indexOf("{self}") &&
                                (e[d] = this._swapSelfInParams(c));
                            i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger);
                        },
                        e = 1e-10,
                        f = c._internals,
                        g = (d._internals = {}),
                        h = f.isSelector,
                        i = f.isArray,
                        j = f.lazyTweens,
                        k = f.lazyRender,
                        l = _gsScope._gsDefine.globals,
                        m = function(a) {
                            var b,
                                c = {};
                            for (b in a) c[b] = a[b];
                            return c;
                        },
                        n = function(a, b, c) {
                            var d,
                                e,
                                f = a.cycle;
                            for (d in f)
                                (e = f[d]),
                                (a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]);
                            delete a.cycle;
                        },
                        o = (g.pauseCallback = function() {}),
                        p = function(a) {
                            var b,
                                c = [],
                                d = a.length;
                            for (b = 0; b !== d; c.push(a[b++]));
                            return c;
                        },
                        q = (d.prototype = new b());
                    return (
                        (d.version = "1.20.2"),
                        (q.constructor = d),
                        (q.kill()._gc = q._forcingPlayhead = q._hasPause = !1),
                        (q.to = function(a, b, d, e) {
                            var f = (d.repeat && l.TweenMax) || c;
                            return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
                        }),
                        (q.from = function(a, b, d, e) {
                            return this.add(((d.repeat && l.TweenMax) || c).from(a, b, d), e);
                        }),
                        (q.fromTo = function(a, b, d, e, f) {
                            var g = (e.repeat && l.TweenMax) || c;
                            return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
                        }),
                        (q.staggerTo = function(a, b, e, f, g, i, j, k) {
                            var l,
                                o,
                                q = new d({
                                    onComplete: i,
                                    onCompleteParams: j,
                                    callbackScope: k,
                                    smoothChildTiming: this.smoothChildTiming,
                                }),
                                r = e.cycle;
                            for (
                                "string" == typeof a && (a = c.selector(a) || a),
                                a = a || [],
                                h(a) && (a = p(a)),
                                f = f || 0,
                                0 > f && ((a = p(a)), a.reverse(), (f *= -1)),
                                o = 0; o < a.length; o++
                            )
                                (l = m(e)),
                                l.startAt &&
                                ((l.startAt = m(l.startAt)),
                                    l.startAt.cycle && n(l.startAt, a, o)),
                                r &&
                                (n(l, a, o),
                                    null != l.duration && ((b = l.duration), delete l.duration)),
                                q.to(a[o], b, l, o * f);
                            return this.add(q, g);
                        }),
                        (q.staggerFrom = function(a, b, c, d, e, f, g, h) {
                            return (
                                (c.immediateRender = 0 != c.immediateRender),
                                (c.runBackwards = !0),
                                this.staggerTo(a, b, c, d, e, f, g, h)
                            );
                        }),
                        (q.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
                            return (
                                (d.startAt = c),
                                (d.immediateRender =
                                    0 != d.immediateRender && 0 != c.immediateRender),
                                this.staggerTo(a, b, d, e, f, g, h, i)
                            );
                        }),
                        (q.call = function(a, b, d, e) {
                            return this.add(c.delayedCall(0, a, b, d), e);
                        }),
                        (q.set = function(a, b, d) {
                            return (
                                (d = this._parseTimeOrLabel(d, 0, !0)),
                                null == b.immediateRender &&
                                (b.immediateRender = d === this._time && !this._paused),
                                this.add(new c(a, 0, b), d)
                            );
                        }),
                        (d.exportRoot = function(a, b) {
                            (a = a || {}),
                            null == a.smoothChildTiming && (a.smoothChildTiming = !0);
                            var e,
                                f,
                                g = new d(a),
                                h = g._timeline;
                            for (
                                null == b && (b = !0),
                                h._remove(g, !0),
                                g._startTime = 0,
                                g._rawPrevTime = g._time = g._totalTime = h._time,
                                e = h._first; e;

                            )
                                (f = e._next),
                                (b && e instanceof c && e.target === e.vars.onComplete) ||
                                g.add(e, e._startTime - e._delay),
                                (e = f);
                            return h.add(g, 0), g;
                        }),
                        (q.add = function(e, f, g, h) {
                            var j, k, l, m, n, o;
                            if (
                                ("number" != typeof f &&
                                    (f = this._parseTimeOrLabel(f, 0, !0, e)),
                                    !(e instanceof a))
                            ) {
                                if (e instanceof Array || (e && e.push && i(e))) {
                                    for (
                                        g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++
                                    )
                                        i((m = e[l])) && (m = new d({
                                            tweens: m
                                        })),
                                        this.add(m, j),
                                        "string" != typeof m &&
                                        "function" != typeof m &&
                                        ("sequence" === g ?
                                            (j = m._startTime + m.totalDuration() / m._timeScale) :
                                            "start" === g && (m._startTime -= m.delay())),
                                        (j += h);
                                    return this._uncache(!0);
                                }
                                if ("string" == typeof e) return this.addLabel(e, f);
                                if ("function" != typeof e)
                                    throw (
                                        "Cannot add " +
                                        e +
                                        " into the timeline; it is not a tween, timeline, function, or string."
                                    );
                                e = c.delayedCall(0, e);
                            }
                            if (
                                (b.prototype.add.call(this, e, f),
                                    e._time &&
                                    e.render(
                                        (this.rawTime() - e._startTime) * e._timeScale,
                                        !1,
                                        !1
                                    ),
                                    (this._gc || this._time === this._duration) &&
                                    !this._paused &&
                                    this._duration < this.duration())
                            )
                                for (n = this, o = n.rawTime() > e._startTime; n._timeline;)
                                    o && n._timeline.smoothChildTiming ?
                                    n.totalTime(n._totalTime, !0) :
                                    n._gc && n._enabled(!0, !1),
                                    (n = n._timeline);
                            return this;
                        }),
                        (q.remove = function(b) {
                            if (b instanceof a) {
                                this._remove(b, !1);
                                var c = (b._timeline = b.vars.useFrames ?
                                    a._rootFramesTimeline :
                                    a._rootTimeline);
                                return (
                                    (b._startTime =
                                        (b._paused ? b._pauseTime : c._time) -
                                        (b._reversed ?
                                            b.totalDuration() - b._totalTime :
                                            b._totalTime) /
                                        b._timeScale),
                                    this
                                );
                            }
                            if (b instanceof Array || (b && b.push && i(b))) {
                                for (var d = b.length; --d > -1;) this.remove(b[d]);
                                return this;
                            }
                            return "string" == typeof b ?
                                this.removeLabel(b) :
                                this.kill(null, b);
                        }),
                        (q._remove = function(a, c) {
                            b.prototype._remove.call(this, a, c);
                            var d = this._last;
                            return (
                                d ?
                                this._time > this.duration() &&
                                ((this._time = this._duration),
                                    (this._totalTime = this._totalDuration)) :
                                (this._time =
                                    this._totalTime =
                                    this._duration =
                                    this._totalDuration =
                                    0),
                                this
                            );
                        }),
                        (q.append = function(a, b) {
                            return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
                        }),
                        (q.insert = q.insertMultiple =
                            function(a, b, c, d) {
                                return this.add(a, b || 0, c, d);
                            }),
                        (q.appendMultiple = function(a, b, c, d) {
                            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
                        }),
                        (q.addLabel = function(a, b) {
                            return (this._labels[a] = this._parseTimeOrLabel(b)), this;
                        }),
                        (q.addPause = function(a, b, d, e) {
                            var f = c.delayedCall(0, o, d, e || this);
                            return (
                                (f.vars.onComplete = f.vars.onReverseComplete = b),
                                (f.data = "isPause"),
                                (this._hasPause = !0),
                                this.add(f, a)
                            );
                        }),
                        (q.removeLabel = function(a) {
                            return delete this._labels[a], this;
                        }),
                        (q.getLabelTime = function(a) {
                            return null != this._labels[a] ? this._labels[a] : -1;
                        }),
                        (q._parseTimeOrLabel = function(b, c, d, e) {
                            var f, g;
                            if (e instanceof a && e.timeline === this) this.remove(e);
                            else if (e && (e instanceof Array || (e.push && i(e))))
                                for (g = e.length; --g > -1;)
                                    e[g] instanceof a &&
                                    e[g].timeline === this &&
                                    this.remove(e[g]);
                            if (
                                ((f =
                                        this.duration() > 99999999999 ?
                                        this.recent().endTime(!1) :
                                        this._duration),
                                    "string" == typeof c)
                            )
                                return this._parseTimeOrLabel(
                                    c,
                                    d && "number" == typeof b && null == this._labels[c] ?
                                    b - f :
                                    0,
                                    d
                                );
                            if (
                                ((c = c || 0),
                                    "string" != typeof b || (!isNaN(b) && null == this._labels[b]))
                            )
                                null == b && (b = f);
                            else {
                                if (((g = b.indexOf("=")), -1 === g))
                                    return null == this._labels[b] ?
                                        d ?
                                        (this._labels[b] = f + c) :
                                        c :
                                        this._labels[b] + c;
                                (c =
                                    parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1))),
                                (b =
                                    g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f);
                            }
                            return Number(b) + c;
                        }),
                        (q.seek = function(a, b) {
                            return this.totalTime(
                                "number" == typeof a ? a : this._parseTimeOrLabel(a),
                                b !== !1
                            );
                        }),
                        (q.stop = function() {
                            return this.paused(!0);
                        }),
                        (q.gotoAndPlay = function(a, b) {
                            return this.play(a, b);
                        }),
                        (q.gotoAndStop = function(a, b) {
                            return this.pause(a, b);
                        }),
                        (q.render = function(a, b, c) {
                            this._gc && this._enabled(!0, !1);
                            var d,
                                f,
                                g,
                                h,
                                i,
                                l,
                                m,
                                n = this._dirty ? this.totalDuration() : this._totalDuration,
                                o = this._time,
                                p = this._startTime,
                                q = this._timeScale,
                                r = this._paused;
                            if (a >= n - 1e-7 && a >= 0)
                                (this._totalTime = this._time = n),
                                this._reversed ||
                                this._hasPausedChild() ||
                                ((f = !0),
                                    (h = "onComplete"),
                                    (i = !!this._timeline.autoRemoveChildren),
                                    0 === this._duration &&
                                    ((0 >= a && a >= -1e-7) ||
                                        this._rawPrevTime < 0 ||
                                        this._rawPrevTime === e) &&
                                    this._rawPrevTime !== a &&
                                    this._first &&
                                    ((i = !0),
                                        this._rawPrevTime > e && (h = "onReverseComplete"))),
                                (this._rawPrevTime =
                                    this._duration || !b || a || this._rawPrevTime === a ? a : e),
                                (a = n + 1e-4);
                            else if (1e-7 > a)
                                if (
                                    ((this._totalTime = this._time = 0),
                                        (0 !== o ||
                                            (0 === this._duration &&
                                                this._rawPrevTime !== e &&
                                                (this._rawPrevTime > 0 ||
                                                    (0 > a && this._rawPrevTime >= 0)))) &&
                                        ((h = "onReverseComplete"), (f = this._reversed)),
                                        0 > a)
                                )
                                    (this._active = !1),
                                    this._timeline.autoRemoveChildren && this._reversed ?
                                    ((i = f = !0), (h = "onReverseComplete")) :
                                    this._rawPrevTime >= 0 && this._first && (i = !0),
                                    (this._rawPrevTime = a);
                                else {
                                    if (
                                        ((this._rawPrevTime =
                                                this._duration || !b || a || this._rawPrevTime === a ?
                                                a :
                                                e),
                                            0 === a && f)
                                    )
                                        for (d = this._first; d && 0 === d._startTime;)
                                            d._duration || (f = !1), (d = d._next);
                                    (a = 0), this._initted || (i = !0);
                                }
                            else {
                                if (this._hasPause && !this._forcingPlayhead && !b) {
                                    if (a >= o)
                                        for (d = this._first; d && d._startTime <= a && !l;)
                                            d._duration ||
                                            "isPause" !== d.data ||
                                            d.ratio ||
                                            (0 === d._startTime && 0 === this._rawPrevTime) ||
                                            (l = d),
                                            (d = d._next);
                                    else
                                        for (d = this._last; d && d._startTime >= a && !l;)
                                            d._duration ||
                                            ("isPause" === d.data && d._rawPrevTime > 0 && (l = d)),
                                            (d = d._prev);
                                    l &&
                                        ((this._time = a = l._startTime),
                                            (this._totalTime =
                                                a +
                                                this._cycle * (this._totalDuration + this._repeatDelay)));
                                }
                                this._totalTime = this._time = this._rawPrevTime = a;
                            }
                            if ((this._time !== o && this._first) || c || i || l) {
                                if (
                                    (this._initted || (this._initted = !0),
                                        this._active ||
                                        (!this._paused &&
                                            this._time !== o &&
                                            a > 0 &&
                                            (this._active = !0)),
                                        0 === o &&
                                        this.vars.onStart &&
                                        ((0 === this._time && this._duration) ||
                                            b ||
                                            this._callback("onStart")),
                                        (m = this._time),
                                        m >= o)
                                )
                                    for (
                                        d = this._first; d &&
                                        ((g = d._next), m === this._time && (!this._paused || r));

                                    )
                                        (d._active || (d._startTime <= m && !d._paused && !d._gc)) &&
                                        (l === d && this.pause(),
                                            d._reversed ?
                                            d.render(
                                                (d._dirty ? d.totalDuration() : d._totalDuration) -
                                                (a - d._startTime) * d._timeScale,
                                                b,
                                                c
                                            ) :
                                            d.render((a - d._startTime) * d._timeScale, b, c)),
                                        (d = g);
                                else
                                    for (
                                        d = this._last; d &&
                                        ((g = d._prev), m === this._time && (!this._paused || r));

                                    ) {
                                        if (
                                            d._active ||
                                            (d._startTime <= o && !d._paused && !d._gc)
                                        ) {
                                            if (l === d) {
                                                for (l = d._prev; l && l.endTime() > this._time;)
                                                    l.render(
                                                        l._reversed ?
                                                        l.totalDuration() -
                                                        (a - l._startTime) * l._timeScale :
                                                        (a - l._startTime) * l._timeScale,
                                                        b,
                                                        c
                                                    ),
                                                    (l = l._prev);
                                                (l = null), this.pause();
                                            }
                                            d._reversed ?
                                                d.render(
                                                    (d._dirty ? d.totalDuration() : d._totalDuration) -
                                                    (a - d._startTime) * d._timeScale,
                                                    b,
                                                    c
                                                ) :
                                                d.render((a - d._startTime) * d._timeScale, b, c);
                                        }
                                        d = g;
                                    }
                                this._onUpdate &&
                                    (b || (j.length && k(), this._callback("onUpdate"))),
                                    h &&
                                    (this._gc ||
                                        ((p === this._startTime || q !== this._timeScale) &&
                                            (0 === this._time || n >= this.totalDuration()) &&
                                            (f &&
                                                (j.length && k(),
                                                    this._timeline.autoRemoveChildren &&
                                                    this._enabled(!1, !1),
                                                    (this._active = !1)),
                                                !b && this.vars[h] && this._callback(h))));
                            }
                        }),
                        (q._hasPausedChild = function() {
                            for (var a = this._first; a;) {
                                if (a._paused || (a instanceof d && a._hasPausedChild()))
                                    return !0;
                                a = a._next;
                            }
                            return !1;
                        }),
                        (q.getChildren = function(a, b, d, e) {
                            e = e || -9999999999;
                            for (var f = [], g = this._first, h = 0; g;)
                                g._startTime < e ||
                                (g instanceof c ?
                                    b !== !1 && (f[h++] = g) :
                                    (d !== !1 && (f[h++] = g),
                                        a !== !1 &&
                                        ((f = f.concat(g.getChildren(!0, b, d))),
                                            (h = f.length)))),
                                (g = g._next);
                            return f;
                        }),
                        (q.getTweensOf = function(a, b) {
                            var d,
                                e,
                                f = this._gc,
                                g = [],
                                h = 0;
                            for (
                                f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length;
                                --e > -1;

                            )
                                (d[e].timeline === this || (b && this._contains(d[e]))) &&
                                (g[h++] = d[e]);
                            return f && this._enabled(!1, !0), g;
                        }),
                        (q.recent = function() {
                            return this._recent;
                        }),
                        (q._contains = function(a) {
                            for (var b = a.timeline; b;) {
                                if (b === this) return !0;
                                b = b.timeline;
                            }
                            return !1;
                        }),
                        (q.shiftChildren = function(a, b, c) {
                            c = c || 0;
                            for (var d, e = this._first, f = this._labels; e;)
                                e._startTime >= c && (e._startTime += a), (e = e._next);
                            if (b)
                                for (d in f) f[d] >= c && (f[d] += a);
                            return this._uncache(!0);
                        }),
                        (q._kill = function(a, b) {
                            if (!a && !b) return this._enabled(!1, !1);
                            for (
                                var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1),
                                    d = c.length,
                                    e = !1;
                                --d > -1;

                            )
                                c[d]._kill(a, b) && (e = !0);
                            return e;
                        }),
                        (q.clear = function(a) {
                            var b = this.getChildren(!1, !0, !0),
                                c = b.length;
                            for (this._time = this._totalTime = 0; --c > -1;)
                                b[c]._enabled(!1, !1);
                            return a !== !1 && (this._labels = {}), this._uncache(!0);
                        }),
                        (q.invalidate = function() {
                            for (var b = this._first; b;) b.invalidate(), (b = b._next);
                            return a.prototype.invalidate.call(this);
                        }),
                        (q._enabled = function(a, c) {
                            if (a === this._gc)
                                for (var d = this._first; d;) d._enabled(a, !0), (d = d._next);
                            return b.prototype._enabled.call(this, a, c);
                        }),
                        (q.totalTime = function(b, c, d) {
                            this._forcingPlayhead = !0;
                            var e = a.prototype.totalTime.apply(this, arguments);
                            return (this._forcingPlayhead = !1), e;
                        }),
                        (q.duration = function(a) {
                            return arguments.length ?
                                (0 !== this.duration() &&
                                    0 !== a &&
                                    this.timeScale(this._duration / a),
                                    this) :
                                (this._dirty && this.totalDuration(), this._duration);
                        }),
                        (q.totalDuration = function(a) {
                            if (!arguments.length) {
                                if (this._dirty) {
                                    for (var b, c, d = 0, e = this._last, f = 999999999999; e;)
                                        (b = e._prev),
                                        e._dirty && e.totalDuration(),
                                        e._startTime > f && this._sortChildren && !e._paused ?
                                        this.add(e, e._startTime - e._delay) :
                                        (f = e._startTime),
                                        e._startTime < 0 &&
                                        !e._paused &&
                                        ((d -= e._startTime),
                                            this._timeline.smoothChildTiming &&
                                            (this._startTime += e._startTime / this._timeScale),
                                            this.shiftChildren(-e._startTime, !1, -9999999999),
                                            (f = 0)),
                                        (c = e._startTime + e._totalDuration / e._timeScale),
                                        c > d && (d = c),
                                        (e = b);
                                    (this._duration = this._totalDuration = d), (this._dirty = !1);
                                }
                                return this._totalDuration;
                            }
                            return a && this.totalDuration() ?
                                this.timeScale(this._totalDuration / a) :
                                this;
                        }),
                        (q.paused = function(b) {
                            if (!b)
                                for (var c = this._first, d = this._time; c;)
                                    c._startTime === d &&
                                    "isPause" === c.data &&
                                    (c._rawPrevTime = 0),
                                    (c = c._next);
                            return a.prototype.paused.apply(this, arguments);
                        }),
                        (q.usesFrames = function() {
                            for (var b = this._timeline; b._timeline;) b = b._timeline;
                            return b === a._rootFramesTimeline;
                        }),
                        (q.rawTime = function(a) {
                            return a &&
                                (this._paused ||
                                    (this._repeat && this.time() > 0 && this.totalProgress() < 1)) ?
                                this._totalTime % (this._duration + this._repeatDelay) :
                                this._paused ?
                                this._totalTime :
                                (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
                        }),
                        d
                    );
                },
                !0
            ),
            _gsScope._gsDefine(
                "TimelineMax",
                ["TimelineLite", "TweenLite", "easing.Ease"],
                function(a, b, c) {
                    var d = function(b) {
                            a.call(this, b),
                                (this._repeat = this.vars.repeat || 0),
                                (this._repeatDelay = this.vars.repeatDelay || 0),
                                (this._cycle = 0),
                                (this._yoyo = this.vars.yoyo === !0),
                                (this._dirty = !0);
                        },
                        e = 1e-10,
                        f = b._internals,
                        g = f.lazyTweens,
                        h = f.lazyRender,
                        i = _gsScope._gsDefine.globals,
                        j = new c(null, null, 1, 0),
                        k = (d.prototype = new a());
                    return (
                        (k.constructor = d),
                        (k.kill()._gc = !1),
                        (d.version = "1.20.2"),
                        (k.invalidate = function() {
                            return (
                                (this._yoyo = this.vars.yoyo === !0),
                                (this._repeat = this.vars.repeat || 0),
                                (this._repeatDelay = this.vars.repeatDelay || 0),
                                this._uncache(!0),
                                a.prototype.invalidate.call(this)
                            );
                        }),
                        (k.addCallback = function(a, c, d, e) {
                            return this.add(b.delayedCall(0, a, d, e), c);
                        }),
                        (k.removeCallback = function(a, b) {
                            if (a)
                                if (null == b) this._kill(null, a);
                                else
                                    for (
                                        var c = this.getTweensOf(a, !1),
                                            d = c.length,
                                            e = this._parseTimeOrLabel(b);
                                        --d > -1;

                                    )
                                        c[d]._startTime === e && c[d]._enabled(!1, !1);
                            return this;
                        }),
                        (k.removePause = function(b) {
                            return this.removeCallback(a._internals.pauseCallback, b);
                        }),
                        (k.tweenTo = function(a, c) {
                            c = c || {};
                            var d,
                                e,
                                f,
                                g = {
                                    ease: j,
                                    useFrames: this.usesFrames(),
                                    immediateRender: !1
                                },
                                h = (c.repeat && i.TweenMax) || b;
                            for (e in c) g[e] = c[e];
                            return (
                                (g.time = this._parseTimeOrLabel(a)),
                                (d =
                                    Math.abs(Number(g.time) - this._time) / this._timeScale ||
                                    0.001),
                                (f = new h(this, d, g)),
                                (g.onStart = function() {
                                    f.target.paused(!0),
                                        f.vars.time !== f.target.time() &&
                                        d === f.duration() &&
                                        f.duration(
                                            Math.abs(f.vars.time - f.target.time()) /
                                            f.target._timeScale
                                        ),
                                        c.onStart &&
                                        c.onStart.apply(
                                            c.onStartScope || c.callbackScope || f,
                                            c.onStartParams || []
                                        );
                                }),
                                f
                            );
                        }),
                        (k.tweenFromTo = function(a, b, c) {
                            (c = c || {}),
                            (a = this._parseTimeOrLabel(a)),
                            (c.startAt = {
                                onComplete: this.seek,
                                onCompleteParams: [a],
                                callbackScope: this,
                            }),
                            (c.immediateRender = c.immediateRender !== !1);
                            var d = this.tweenTo(b, c);
                            return d.duration(
                                Math.abs(d.vars.time - a) / this._timeScale || 0.001
                            );
                        }),
                        (k.render = function(a, b, c) {
                            this._gc && this._enabled(!0, !1);
                            var d,
                                f,
                                i,
                                j,
                                k,
                                l,
                                m,
                                n,
                                o = this._dirty ? this.totalDuration() : this._totalDuration,
                                p = this._duration,
                                q = this._time,
                                r = this._totalTime,
                                s = this._startTime,
                                t = this._timeScale,
                                u = this._rawPrevTime,
                                v = this._paused,
                                w = this._cycle;
                            if (a >= o - 1e-7 && a >= 0)
                                this._locked ||
                                ((this._totalTime = o), (this._cycle = this._repeat)),
                                this._reversed ||
                                this._hasPausedChild() ||
                                ((f = !0),
                                    (j = "onComplete"),
                                    (k = !!this._timeline.autoRemoveChildren),
                                    0 === this._duration &&
                                    ((0 >= a && a >= -1e-7) || 0 > u || u === e) &&
                                    u !== a &&
                                    this._first &&
                                    ((k = !0), u > e && (j = "onReverseComplete"))),
                                (this._rawPrevTime =
                                    this._duration || !b || a || this._rawPrevTime === a ? a : e),
                                this._yoyo && 0 !== (1 & this._cycle) ?
                                (this._time = a = 0) :
                                ((this._time = p), (a = p + 1e-4));
                            else if (1e-7 > a)
                                if (
                                    (this._locked || (this._totalTime = this._cycle = 0),
                                        (this._time = 0),
                                        (0 !== q ||
                                            (0 === p &&
                                                u !== e &&
                                                (u > 0 || (0 > a && u >= 0)) &&
                                                !this._locked)) &&
                                        ((j = "onReverseComplete"), (f = this._reversed)),
                                        0 > a)
                                )
                                    (this._active = !1),
                                    this._timeline.autoRemoveChildren && this._reversed ?
                                    ((k = f = !0), (j = "onReverseComplete")) :
                                    u >= 0 && this._first && (k = !0),
                                    (this._rawPrevTime = a);
                                else {
                                    if (
                                        ((this._rawPrevTime =
                                                p || !b || a || this._rawPrevTime === a ? a : e),
                                            0 === a && f)
                                    )
                                        for (d = this._first; d && 0 === d._startTime;)
                                            d._duration || (f = !1), (d = d._next);
                                    (a = 0), this._initted || (k = !0);
                                }
                            else if (
                                (0 === p && 0 > u && (k = !0),
                                    (this._time = this._rawPrevTime = a),
                                    this._locked ||
                                    ((this._totalTime = a),
                                        0 !== this._repeat &&
                                        ((l = p + this._repeatDelay),
                                            (this._cycle = (this._totalTime / l) >> 0),
                                            0 !== this._cycle &&
                                            this._cycle === this._totalTime / l &&
                                            a >= r &&
                                            this._cycle--,
                                            (this._time = this._totalTime - this._cycle * l),
                                            this._yoyo &&
                                            0 !== (1 & this._cycle) &&
                                            (this._time = p - this._time),
                                            this._time > p ?
                                            ((this._time = p), (a = p + 1e-4)) :
                                            this._time < 0 ?
                                            (this._time = a = 0) :
                                            (a = this._time))),
                                    this._hasPause && !this._forcingPlayhead && !b)
                            ) {
                                if (
                                    ((a = this._time),
                                        a >= q || (this._repeat && w !== this._cycle))
                                )
                                    for (d = this._first; d && d._startTime <= a && !m;)
                                        d._duration ||
                                        "isPause" !== d.data ||
                                        d.ratio ||
                                        (0 === d._startTime && 0 === this._rawPrevTime) ||
                                        (m = d),
                                        (d = d._next);
                                else
                                    for (d = this._last; d && d._startTime >= a && !m;)
                                        d._duration ||
                                        ("isPause" === d.data && d._rawPrevTime > 0 && (m = d)),
                                        (d = d._prev);
                                m &&
                                    m._startTime < p &&
                                    ((this._time = a = m._startTime),
                                        (this._totalTime =
                                            a + this._cycle * (this._totalDuration + this._repeatDelay)));
                            }
                            if (this._cycle !== w && !this._locked) {
                                var x = this._yoyo && 0 !== (1 & w),
                                    y = x === (this._yoyo && 0 !== (1 & this._cycle)),
                                    z = this._totalTime,
                                    A = this._cycle,
                                    B = this._rawPrevTime,
                                    C = this._time;
                                if (
                                    ((this._totalTime = w * p),
                                        this._cycle < w ? (x = !x) : (this._totalTime += p),
                                        (this._time = q),
                                        (this._rawPrevTime = 0 === p ? u - 1e-4 : u),
                                        (this._cycle = w),
                                        (this._locked = !0),
                                        (q = x ? 0 : p),
                                        this.render(q, b, 0 === p),
                                        b ||
                                        this._gc ||
                                        (this.vars.onRepeat &&
                                            ((this._cycle = A),
                                                (this._locked = !1),
                                                this._callback("onRepeat"))),
                                        q !== this._time)
                                )
                                    return;
                                if (
                                    (y &&
                                        ((this._cycle = w),
                                            (this._locked = !0),
                                            (q = x ? p + 1e-4 : -1e-4),
                                            this.render(q, !0, !1)),
                                        (this._locked = !1),
                                        this._paused && !v)
                                )
                                    return;
                                (this._time = C),
                                (this._totalTime = z),
                                (this._cycle = A),
                                (this._rawPrevTime = B);
                            }
                            if (!((this._time !== q && this._first) || c || k || m))
                                return void(
                                    r !== this._totalTime &&
                                    this._onUpdate &&
                                    (b || this._callback("onUpdate"))
                                );
                            if (
                                (this._initted || (this._initted = !0),
                                    this._active ||
                                    (!this._paused &&
                                        this._totalTime !== r &&
                                        a > 0 &&
                                        (this._active = !0)),
                                    0 === r &&
                                    this.vars.onStart &&
                                    ((0 === this._totalTime && this._totalDuration) ||
                                        b ||
                                        this._callback("onStart")),
                                    (n = this._time),
                                    n >= q)
                            )
                                for (
                                    d = this._first; d && ((i = d._next), n === this._time && (!this._paused || v));

                                )
                                    (d._active ||
                                        (d._startTime <= this._time && !d._paused && !d._gc)) &&
                                    (m === d && this.pause(),
                                        d._reversed ?
                                        d.render(
                                            (d._dirty ? d.totalDuration() : d._totalDuration) -
                                            (a - d._startTime) * d._timeScale,
                                            b,
                                            c
                                        ) :
                                        d.render((a - d._startTime) * d._timeScale, b, c)),
                                    (d = i);
                            else
                                for (
                                    d = this._last; d && ((i = d._prev), n === this._time && (!this._paused || v));

                                ) {
                                    if (d._active || (d._startTime <= q && !d._paused && !d._gc)) {
                                        if (m === d) {
                                            for (m = d._prev; m && m.endTime() > this._time;)
                                                m.render(
                                                    m._reversed ?
                                                    m.totalDuration() -
                                                    (a - m._startTime) * m._timeScale :
                                                    (a - m._startTime) * m._timeScale,
                                                    b,
                                                    c
                                                ),
                                                (m = m._prev);
                                            (m = null), this.pause();
                                        }
                                        d._reversed ?
                                            d.render(
                                                (d._dirty ? d.totalDuration() : d._totalDuration) -
                                                (a - d._startTime) * d._timeScale,
                                                b,
                                                c
                                            ) :
                                            d.render((a - d._startTime) * d._timeScale, b, c);
                                    }
                                    d = i;
                                }
                            this._onUpdate &&
                                (b || (g.length && h(), this._callback("onUpdate"))),
                                j &&
                                (this._locked ||
                                    this._gc ||
                                    ((s === this._startTime || t !== this._timeScale) &&
                                        (0 === this._time || o >= this.totalDuration()) &&
                                        (f &&
                                            (g.length && h(),
                                                this._timeline.autoRemoveChildren &&
                                                this._enabled(!1, !1),
                                                (this._active = !1)),
                                            !b && this.vars[j] && this._callback(j))));
                        }),
                        (k.getActive = function(a, b, c) {
                            null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
                            var d,
                                e,
                                f = [],
                                g = this.getChildren(a, b, c),
                                h = 0,
                                i = g.length;
                            for (d = 0; i > d; d++)(e = g[d]), e.isActive() && (f[h++] = e);
                            return f;
                        }),
                        (k.getLabelAfter = function(a) {
                            a || (0 !== a && (a = this._time));
                            var b,
                                c = this.getLabelsArray(),
                                d = c.length;
                            for (b = 0; d > b; b++)
                                if (c[b].time > a) return c[b].name;
                            return null;
                        }),
                        (k.getLabelBefore = function(a) {
                            null == a && (a = this._time);
                            for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                                if (b[c].time < a) return b[c].name;
                            return null;
                        }),
                        (k.getLabelsArray = function() {
                            var a,
                                b = [],
                                c = 0;
                            for (a in this._labels) b[c++] = {
                                time: this._labels[a],
                                name: a
                            };
                            return (
                                b.sort(function(a, b) {
                                    return a.time - b.time;
                                }),
                                b
                            );
                        }),
                        (k.invalidate = function() {
                            return (this._locked = !1), a.prototype.invalidate.call(this);
                        }),
                        (k.progress = function(a, b) {
                            return arguments.length ?
                                this.totalTime(
                                    this.duration() *
                                    (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) +
                                    this._cycle * (this._duration + this._repeatDelay),
                                    b
                                ) :
                                this._time / this.duration() || 0;
                        }),
                        (k.totalProgress = function(a, b) {
                            return arguments.length ?
                                this.totalTime(this.totalDuration() * a, b) :
                                this._totalTime / this.totalDuration() || 0;
                        }),
                        (k.totalDuration = function(b) {
                            return arguments.length ?
                                -1 !== this._repeat && b ?
                                this.timeScale(this.totalDuration() / b) :
                                this :
                                (this._dirty &&
                                    (a.prototype.totalDuration.call(this),
                                        (this._totalDuration = -1 === this._repeat ?
                                            999999999999 :
                                            this._duration * (this._repeat + 1) +
                                            this._repeatDelay * this._repeat)),
                                    this._totalDuration);
                        }),
                        (k.time = function(a, b) {
                            return arguments.length ?
                                (this._dirty && this.totalDuration(),
                                    a > this._duration && (a = this._duration),
                                    this._yoyo && 0 !== (1 & this._cycle) ?
                                    (a =
                                        this._duration -
                                        a +
                                        this._cycle * (this._duration + this._repeatDelay)) :
                                    0 !== this._repeat &&
                                    (a += this._cycle * (this._duration + this._repeatDelay)),
                                    this.totalTime(a, b)) :
                                this._time;
                        }),
                        (k.repeat = function(a) {
                            return arguments.length ?
                                ((this._repeat = a), this._uncache(!0)) :
                                this._repeat;
                        }),
                        (k.repeatDelay = function(a) {
                            return arguments.length ?
                                ((this._repeatDelay = a), this._uncache(!0)) :
                                this._repeatDelay;
                        }),
                        (k.yoyo = function(a) {
                            return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
                        }),
                        (k.currentLabel = function(a) {
                            return arguments.length ?
                                this.seek(a, !0) :
                                this.getLabelBefore(this._time + 1e-8);
                        }),
                        d
                    );
                },
                !0
            ),
            (function() {
                var a = 180 / Math.PI,
                    b = [],
                    c = [],
                    d = [],
                    e = {},
                    f = _gsScope._gsDefine.globals,
                    g = function(a, b, c, d) {
                        c === d && (c = d - (d - b) / 1e6),
                            a === b && (b = a + (c - a) / 1e6),
                            (this.a = a),
                            (this.b = b),
                            (this.c = c),
                            (this.d = d),
                            (this.da = d - a),
                            (this.ca = c - a),
                            (this.ba = b - a);
                    },
                    h =
                    ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    i = function(a, b, c, d) {
                        var e = {
                                a: a
                            },
                            f = {},
                            g = {},
                            h = {
                                c: d
                            },
                            i = (a + b) / 2,
                            j = (b + c) / 2,
                            k = (c + d) / 2,
                            l = (i + j) / 2,
                            m = (j + k) / 2,
                            n = (m - l) / 8;
                        return (
                            (e.b = i + (a - i) / 4),
                            (f.b = l + n),
                            (e.c = f.a = (e.b + f.b) / 2),
                            (f.c = g.a = (l + m) / 2),
                            (g.b = m - n),
                            (h.b = k + (d - k) / 4),
                            (g.c = h.a = (g.b + h.b) / 2),
                            [e, f, g, h]
                        );
                    },
                    j = function(a, e, f, g, h) {
                        var j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p,
                            q,
                            r,
                            s,
                            t,
                            u,
                            v,
                            w = a.length - 1,
                            x = 0,
                            y = a[0].a;
                        for (j = 0; w > j; j++)
                            (n = a[x]),
                            (k = n.a),
                            (l = n.d),
                            (m = a[x + 1].d),
                            h ?
                            ((t = b[j]),
                                (u = c[j]),
                                (v = ((u + t) * e * 0.25) / (g ? 0.5 : d[j] || 0.5)),
                                (o = l - (l - k) * (g ? 0.5 * e : 0 !== t ? v / t : 0)),
                                (p = l + (m - l) * (g ? 0.5 * e : 0 !== u ? v / u : 0)),
                                (q =
                                    l - (o + (((p - o) * ((3 * t) / (t + u) + 0.5)) / 4 || 0)))) :
                            ((o = l - (l - k) * e * 0.5),
                                (p = l + (m - l) * e * 0.5),
                                (q = l - (o + p) / 2)),
                            (o += q),
                            (p += q),
                            (n.c = r = o),
                            0 !== j ? (n.b = y) : (n.b = y = n.a + 0.6 * (n.c - n.a)),
                            (n.da = l - k),
                            (n.ca = r - k),
                            (n.ba = y - k),
                            f ?
                            ((s = i(k, y, r, l)),
                                a.splice(x, 1, s[0], s[1], s[2], s[3]),
                                (x += 4)) :
                            x++,
                            (y = p);
                        (n = a[x]),
                        (n.b = y),
                        (n.c = y + 0.4 * (n.d - y)),
                        (n.da = n.d - n.a),
                        (n.ca = n.c - n.a),
                        (n.ba = y - n.a),
                        f &&
                            ((s = i(n.a, y, n.c, n.d)),
                                a.splice(x, 1, s[0], s[1], s[2], s[3]));
                    },
                    k = function(a, d, e, f) {
                        var h,
                            i,
                            j,
                            k,
                            l,
                            m,
                            n = [];
                        if (f)
                            for (a = [f].concat(a), i = a.length; --i > -1;)
                                "string" == typeof(m = a[i][d]) &&
                                "=" === m.charAt(1) &&
                                (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
                        if (((h = a.length - 2), 0 > h))
                            return (n[0] = new g(a[0][d], 0, 0, a[0][d])), n;
                        for (i = 0; h > i; i++)
                            (j = a[i][d]),
                            (k = a[i + 1][d]),
                            (n[i] = new g(j, 0, 0, k)),
                            e &&
                            ((l = a[i + 2][d]),
                                (b[i] = (b[i] || 0) + (k - j) * (k - j)),
                                (c[i] = (c[i] || 0) + (l - k) * (l - k)));
                        return (n[i] = new g(a[i][d], 0, 0, a[i + 1][d])), n;
                    },
                    l = function(a, f, g, i, l, m) {
                        var n,
                            o,
                            p,
                            q,
                            r,
                            s,
                            t,
                            u,
                            v = {},
                            w = [],
                            x = m || a[0];
                        (l = "string" == typeof l ? "," + l + "," : h), null == f && (f = 1);
                        for (o in a[0]) w.push(o);
                        if (a.length > 1) {
                            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)
                                if (((o = w[n]), Math.abs(x[o] - u[o]) > 0.05)) {
                                    t = !1;
                                    break;
                                }
                            t &&
                                ((a = a.concat()),
                                    m && a.unshift(m),
                                    a.push(a[1]),
                                    (m = a[a.length - 3]));
                        }
                        for (b.length = c.length = d.length = 0, n = w.length; --n > -1;)
                            (o = w[n]),
                            (e[o] = -1 !== l.indexOf("," + o + ",")),
                            (v[o] = k(a, o, e[o], m));
                        for (n = b.length; --n > -1;)
                            (b[n] = Math.sqrt(b[n])), (c[n] = Math.sqrt(c[n]));
                        if (!i) {
                            for (n = w.length; --n > -1;)
                                if (e[o])
                                    for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++)
                                        (r = p[q + 1].da / c[q] + p[q].da / b[q] || 0),
                                        (d[q] = (d[q] || 0) + r * r);
                            for (n = d.length; --n > -1;) d[n] = Math.sqrt(d[n]);
                        }
                        for (n = w.length, q = g ? 4 : 1; --n > -1;)
                            (o = w[n]),
                            (p = v[o]),
                            j(p, f, g, i, e[o]),
                            t && (p.splice(0, q), p.splice(p.length - q, q));
                        return v;
                    },
                    m = function(a, b, c) {
                        b = b || "soft";
                        var d,
                            e,
                            f,
                            h,
                            i,
                            j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p = {},
                            q = "cubic" === b ? 3 : 2,
                            r = "soft" === b,
                            s = [];
                        if ((r && c && (a = [c].concat(a)), null == a || a.length < q + 1))
                            throw "invalid Bezier data";
                        for (m in a[0]) s.push(m);
                        for (j = s.length; --j > -1;) {
                            for (
                                m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++
                            )
                                (d =
                                    null == c ?
                                    a[k][m] :
                                    "string" == typeof(o = a[k][m]) && "=" === o.charAt(1) ?
                                    c[m] + Number(o.charAt(0) + o.substr(2)) :
                                    Number(o)),
                                r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2),
                                (i[n++] = d);
                            for (l = n - q + 1, n = 0, k = 0; l > k; k += q)
                                (d = i[k]),
                                (e = i[k + 1]),
                                (f = i[k + 2]),
                                (h = 2 === q ? 0 : i[k + 3]),
                                (i[n++] = o =
                                    3 === q ?
                                    new g(d, e, f, h) :
                                    new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f));
                            i.length = n;
                        }
                        return p;
                    },
                    n = function(a, b, c) {
                        for (
                            var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length;
                            --p > -1;

                        )
                            for (
                                m = a[p],
                                f = m.a,
                                g = m.d - f,
                                h = m.c - f,
                                i = m.b - f,
                                d = e = 0,
                                k = 1; c >= k; k++
                            )
                                (j = o * k),
                                (l = 1 - j),
                                (d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j)),
                                (n = p * c + k - 1),
                                (b[n] = (b[n] || 0) + d * d);
                    },
                    o = function(a, b) {
                        b = b >> 0 || 6;
                        var c,
                            d,
                            e,
                            f,
                            g = [],
                            h = [],
                            i = 0,
                            j = 0,
                            k = b - 1,
                            l = [],
                            m = [];
                        for (c in a) n(a[c], g, b);
                        for (e = g.length, d = 0; e > d; d++)
                            (i += Math.sqrt(g[d])),
                            (f = d % b),
                            (m[f] = i),
                            f === k &&
                            ((j += i),
                                (f = (d / b) >> 0),
                                (l[f] = m),
                                (h[f] = j),
                                (i = 0),
                                (m = []));
                        return {
                            length: j,
                            lengths: h,
                            segments: l
                        };
                    },
                    p = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.8",
                        API: 2,
                        global: !0,
                        init: function(a, b, c) {
                            (this._target = a),
                            b instanceof Array && (b = {
                                    values: b
                                }),
                                (this._func = {}),
                                (this._mod = {}),
                                (this._props = []),
                                (this._timeRes =
                                    null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10));
                            var d,
                                e,
                                f,
                                g,
                                h,
                                i = b.values || [],
                                j = {},
                                k = i[0],
                                n = b.autoRotate || c.vars.orientToBezier;
                            this._autoRotate = n ?
                                n instanceof Array ?
                                n :
                                [
                                    ["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]
                                ] :
                                null;
                            for (d in k) this._props.push(d);
                            for (f = this._props.length; --f > -1;)
                                (d = this._props[f]),
                                this._overwriteProps.push(d),
                                (e = this._func[d] = "function" == typeof a[d]),
                                (j[d] = e ?
                                    a[
                                        d.indexOf("set") ||
                                        "function" != typeof a["get" + d.substr(3)] ?
                                        d :
                                        "get" + d.substr(3)
                                    ]() :
                                    parseFloat(a[d])),
                                h || (j[d] !== i[0][d] && (h = j));
                            if (
                                ((this._beziers =
                                        "cubic" !== b.type &&
                                        "quadratic" !== b.type &&
                                        "soft" !== b.type ?
                                        l(
                                            i,
                                            isNaN(b.curviness) ? 1 : b.curviness,
                                            !1,
                                            "thruBasic" === b.type,
                                            b.correlate,
                                            h
                                        ) :
                                        m(i, b.type, j)),
                                    (this._segCount = this._beziers[d].length),
                                    this._timeRes)
                            ) {
                                var p = o(this._beziers, this._timeRes);
                                (this._length = p.length),
                                (this._lengths = p.lengths),
                                (this._segments = p.segments),
                                (this._l1 = this._li = this._s1 = this._si = 0),
                                (this._l2 = this._lengths[0]),
                                (this._curSeg = this._segments[0]),
                                (this._s2 = this._curSeg[0]),
                                (this._prec = 1 / this._curSeg.length);
                            }
                            if ((n = this._autoRotate))
                                for (
                                    this._initialRotations = [],
                                    n[0] instanceof Array || (this._autoRotate = n = [n]),
                                    f = n.length;
                                    --f > -1;

                                ) {
                                    for (g = 0; 3 > g; g++)
                                        (d = n[f][g]),
                                        (this._func[d] =
                                            "function" == typeof a[d] ?
                                            a[
                                                d.indexOf("set") ||
                                                "function" != typeof a["get" + d.substr(3)] ?
                                                d :
                                                "get" + d.substr(3)
                                            ] :
                                            !1);
                                    (d = n[f][2]),
                                    (this._initialRotations[f] =
                                        (this._func[d] ?
                                            this._func[d].call(this._target) :
                                            this._target[d]) || 0),
                                    this._overwriteProps.push(d);
                                }
                            return (this._startRatio = c.vars.runBackwards ? 1 : 0), !0;
                        },
                        set: function(b) {
                            var c,
                                d,
                                e,
                                f,
                                g,
                                h,
                                i,
                                j,
                                k,
                                l,
                                m = this._segCount,
                                n = this._func,
                                o = this._target,
                                p = b !== this._startRatio;
                            if (this._timeRes) {
                                if (
                                    ((k = this._lengths),
                                        (l = this._curSeg),
                                        (b *= this._length),
                                        (e = this._li),
                                        b > this._l2 && m - 1 > e)
                                ) {
                                    for (j = m - 1; j > e && (this._l2 = k[++e]) <= b;);
                                    (this._l1 = k[e - 1]),
                                    (this._li = e),
                                    (this._curSeg = l = this._segments[e]),
                                    (this._s2 = l[(this._s1 = this._si = 0)]);
                                } else if (b < this._l1 && e > 0) {
                                    for (; e > 0 && (this._l1 = k[--e]) >= b;);
                                    0 === e && b < this._l1 ? (this._l1 = 0) : e++,
                                        (this._l2 = k[e]),
                                        (this._li = e),
                                        (this._curSeg = l = this._segments[e]),
                                        (this._s1 = l[(this._si = l.length - 1) - 1] || 0),
                                        (this._s2 = l[this._si]);
                                }
                                if (
                                    ((c = e),
                                        (b -= this._l1),
                                        (e = this._si),
                                        b > this._s2 && e < l.length - 1)
                                ) {
                                    for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b;);
                                    (this._s1 = l[e - 1]), (this._si = e);
                                } else if (b < this._s1 && e > 0) {
                                    for (; e > 0 && (this._s1 = l[--e]) >= b;);
                                    0 === e && b < this._s1 ? (this._s1 = 0) : e++,
                                        (this._s2 = l[e]),
                                        (this._si = e);
                                }
                                h =
                                    (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
                            } else
                                (c = 0 > b ? 0 : b >= 1 ? m - 1 : (m * b) >> 0),
                                (h = (b - c * (1 / m)) * m);
                            for (d = 1 - h, e = this._props.length; --e > -1;)
                                (f = this._props[e]),
                                (g = this._beziers[f][c]),
                                (i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a),
                                this._mod[f] && (i = this._mod[f](i, o)),
                                n[f] ? o[f](i) : (o[f] = i);
                            if (this._autoRotate) {
                                var q,
                                    r,
                                    s,
                                    t,
                                    u,
                                    v,
                                    w,
                                    x = this._autoRotate;
                                for (e = x.length; --e > -1;)
                                    (f = x[e][2]),
                                    (v = x[e][3] || 0),
                                    (w = x[e][4] === !0 ? 1 : a),
                                    (g = this._beziers[x[e][0]]),
                                    (q = this._beziers[x[e][1]]),
                                    g &&
                                    q &&
                                    ((g = g[c]),
                                        (q = q[c]),
                                        (r = g.a + (g.b - g.a) * h),
                                        (t = g.b + (g.c - g.b) * h),
                                        (r += (t - r) * h),
                                        (t += (g.c + (g.d - g.c) * h - t) * h),
                                        (s = q.a + (q.b - q.a) * h),
                                        (u = q.b + (q.c - q.b) * h),
                                        (s += (u - s) * h),
                                        (u += (q.c + (q.d - q.c) * h - u) * h),
                                        (i = p ?
                                            Math.atan2(u - s, t - r) * w + v :
                                            this._initialRotations[e]),
                                        this._mod[f] && (i = this._mod[f](i, o)),
                                        n[f] ? o[f](i) : (o[f] = i));
                            }
                        },
                    }),
                    q = p.prototype;
                (p.bezierThrough = l),
                (p.cubicToQuadratic = i),
                (p._autoCSS = !0),
                (p.quadraticToCubic = function(a, b, c) {
                    return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
                }),
                (p._cssRegister = function() {
                    var a = f.CSSPlugin;
                    if (a) {
                        var b = a._internals,
                            c = b._parseToProxy,
                            d = b._setPluginRatio,
                            e = b.CSSPropTween;
                        b._registerComplexSpecialProp("bezier", {
                            parser: function(a, b, f, g, h, i) {
                                b instanceof Array && (b = {
                                    values: b
                                }), (i = new p());
                                var j,
                                    k,
                                    l,
                                    m = b.values,
                                    n = m.length - 1,
                                    o = [],
                                    q = {};
                                if (0 > n) return h;
                                for (j = 0; n >= j; j++)
                                    (l = c(a, m[j], g, h, i, n !== j)), (o[j] = l.end);
                                for (k in b) q[k] = b[k];
                                return (
                                    (q.values = o),
                                    (h = new e(a, "bezier", 0, 0, l.pt, 2)),
                                    (h.data = l),
                                    (h.plugin = i),
                                    (h.setRatio = d),
                                    0 === q.autoRotate && (q.autoRotate = !0),
                                    !q.autoRotate ||
                                    q.autoRotate instanceof Array ||
                                    ((j = q.autoRotate === !0 ? 0 : Number(q.autoRotate)),
                                        (q.autoRotate =
                                            null != l.end.left ?
                                            [
                                                ["left", "top", "rotation", j, !1]
                                            ] :
                                            null != l.end.x ?
                                            [
                                                ["x", "y", "rotation", j, !1]
                                            ] :
                                            !1)),
                                    q.autoRotate &&
                                    (g._transform || g._enableTransforms(!1),
                                        (l.autoRotate = g._target._gsTransform),
                                        (l.proxy.rotation = l.autoRotate.rotation || 0),
                                        g._overwriteProps.push("rotation")),
                                    i._onInitTween(l.proxy, q, g._tween),
                                    h
                                );
                            },
                        });
                    }
                }),
                (q._mod = function(a) {
                    for (var b, c = this._overwriteProps, d = c.length; --d > -1;)
                        (b = a[c[d]]), b && "function" == typeof b && (this._mod[c[d]] = b);
                }),
                (q._kill = function(a) {
                    var b,
                        c,
                        d = this._props;
                    for (b in this._beziers)
                        if (b in a)
                            for (
                                delete this._beziers[b], delete this._func[b], c = d.length;
                                --c > -1;

                            )
                                d[c] === b && d.splice(c, 1);
                    if ((d = this._autoRotate))
                        for (c = d.length; --c > -1;) a[d[c][2]] && d.splice(c, 1);
                    return this._super._kill.call(this, a);
                });
            })(),
            _gsScope._gsDefine(
                "plugins.CSSPlugin",
                ["plugins.TweenPlugin", "TweenLite"],
                function(a, b) {
                    var c,
                        d,
                        e,
                        f,
                        g = function() {
                            a.call(this, "css"),
                                (this._overwriteProps.length = 0),
                                (this.setRatio = g.prototype.setRatio);
                        },
                        h = _gsScope._gsDefine.globals,
                        i = {},
                        j = (g.prototype = new a("css"));
                    (j.constructor = g),
                    (g.version = "1.20.0"),
                    (g.API = 2),
                    (g.defaultTransformPerspective = 0),
                    (g.defaultSkewType = "compensated"),
                    (g.defaultSmoothOrigin = !0),
                    (j = "px"),
                    (g.suffixMap = {
                        top: j,
                        right: j,
                        bottom: j,
                        left: j,
                        width: j,
                        height: j,
                        fontSize: j,
                        padding: j,
                        margin: j,
                        perspective: j,
                        lineHeight: "",
                    });
                    var k,
                        l,
                        m,
                        n,
                        o,
                        p,
                        q,
                        r,
                        s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                        t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                        u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                        v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                        w = /(?:\d|\-|\+|=|#|\.)*/g,
                        x = /opacity *= *([^)]*)/i,
                        y = /opacity:([^;]*)/i,
                        z = /alpha\(opacity *=.+?\)/i,
                        A = /^(rgb|hsl)/,
                        B = /([A-Z])/g,
                        C = /-([a-z])/gi,
                        D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                        E = function(a, b) {
                            return b.toUpperCase();
                        },
                        F = /(?:Left|Right|Width)/i,
                        G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                        H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                        I = /,(?=[^\)]*(?:\(|$))/gi,
                        J = /[\s,\(]/i,
                        K = Math.PI / 180,
                        L = 180 / Math.PI,
                        M = {},
                        N = {
                            style: {}
                        },
                        O = _gsScope.document || {
                            createElement: function() {
                                return N;
                            },
                        },
                        P = function(a, b) {
                            return O.createElementNS ?
                                O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) :
                                O.createElement(a);
                        },
                        Q = P("div"),
                        R = P("img"),
                        S = (g._internals = {
                            _specialProps: i
                        }),
                        T = (_gsScope.navigator || {}).userAgent || "",
                        U = (function() {
                            var a = T.indexOf("Android"),
                                b = P("a");
                            return (
                                (m = -1 !== T.indexOf("Safari") &&
                                    -1 === T.indexOf("Chrome") &&
                                    (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3)),
                                (o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6),
                                (n = -1 !== T.indexOf("Firefox")),
                                (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) ||
                                    /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) &&
                                (p = parseFloat(RegExp.$1)),
                                b ?
                                ((b.style.cssText = "top:1px;opacity:.55;"),
                                    /^0.55/.test(b.style.opacity)) :
                                !1
                            );
                        })(),
                        V = function(a) {
                            return x.test(
                                    "string" == typeof a ?
                                    a :
                                    (a.currentStyle ? a.currentStyle.filter : a.style.filter) ||
                                    ""
                                ) ?
                                parseFloat(RegExp.$1) / 100 :
                                1;
                        },
                        W = function(a) {
                            _gsScope.console && console.log(a);
                        },
                        X = "",
                        Y = "",
                        Z = function(a, b) {
                            b = b || Q;
                            var c,
                                d,
                                e = b.style;
                            if (void 0 !== e[a]) return a;
                            for (
                                a = a.charAt(0).toUpperCase() + a.substr(1),
                                c = ["O", "Moz", "ms", "Ms", "Webkit"],
                                d = 5;
                                --d > -1 && void 0 === e[c[d] + a];

                            );
                            return d >= 0 ?
                                ((Y = 3 === d ? "ms" : c[d]),
                                    (X = "-" + Y.toLowerCase() + "-"),
                                    Y + a) :
                                null;
                        },
                        $ = O.defaultView ? O.defaultView.getComputedStyle : function() {},
                        _ = (g.getStyle = function(a, b, c, d, e) {
                            var f;
                            return U || "opacity" !== b ?
                                (!d && a.style[b] ?
                                    (f = a.style[b]) :
                                    (c = c || $(a)) ?
                                    (f =
                                        c[b] ||
                                        c.getPropertyValue(b) ||
                                        c.getPropertyValue(b.replace(B, "-$1").toLowerCase())) :
                                    a.currentStyle && (f = a.currentStyle[b]),
                                    null == e ||
                                    (f && "none" !== f && "auto" !== f && "auto auto" !== f) ?
                                    f :
                                    e) :
                                V(a);
                        }),
                        aa = (S.convertToPixels = function(a, c, d, e, f) {
                            if ("px" === e || (!e && "lineHeight" !== c)) return d;
                            if ("auto" === e || !d) return 0;
                            var h,
                                i,
                                j,
                                k = F.test(c),
                                l = a,
                                m = Q.style,
                                n = 0 > d,
                                o = 1 === d;
                            if ((n && (d = -d), o && (d *= 100), "lineHeight" !== c || e))
                                if ("%" === e && -1 !== c.indexOf("border"))
                                    h = (d / 100) * (k ? a.clientWidth : a.clientHeight);
                                else {
                                    if (
                                        ((m.cssText =
                                                "border:0 solid red;position:" +
                                                _(a, "position") +
                                                ";line-height:0;"),
                                            "%" !== e &&
                                            l.appendChild &&
                                            "v" !== e.charAt(0) &&
                                            "rem" !== e)
                                    )
                                        m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                                    else {
                                        if (
                                            ((l = a.parentNode || O.body),
                                                -1 !== _(l, "display").indexOf("flex") &&
                                                (m.position = "absolute"),
                                                (i = l._gsCache),
                                                (j = b.ticker.frame),
                                                i && k && i.time === j)
                                        )
                                            return (i.width * d) / 100;
                                        m[k ? "width" : "height"] = d + e;
                                    }
                                    l.appendChild(Q),
                                        (h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"])),
                                        l.removeChild(Q),
                                        k &&
                                        "%" === e &&
                                        g.cacheWidths !== !1 &&
                                        ((i = l._gsCache = l._gsCache || {}),
                                            (i.time = j),
                                            (i.width = (h / d) * 100)),
                                        0 !== h || f || (h = aa(a, c, d, e, !0));
                                }
                            else
                                (i = $(a).lineHeight),
                                (a.style.lineHeight = d),
                                (h = parseFloat($(a).lineHeight)),
                                (a.style.lineHeight = i);
                            return o && (h /= 100), n ? -h : h;
                        }),
                        ba = (S.calculateOffset = function(a, b, c) {
                            if ("absolute" !== _(a, "position", c)) return 0;
                            var d = "left" === b ? "Left" : "Top",
                                e = _(a, "margin" + d, c);
                            return (
                                a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0)
                            );
                        }),
                        ca = function(a, b) {
                            var c,
                                d,
                                e,
                                f = {};
                            if ((b = b || $(a, null)))
                                if ((c = b.length))
                                    for (; --c > -1;)
                                        (e = b[c]),
                                        (-1 === e.indexOf("-transform") || Da === e) &&
                                        (f[e.replace(C, E)] = b.getPropertyValue(e));
                                else
                                    for (c in b)
                                        (-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
                            else if ((b = a.currentStyle || a.style))
                                for (c in b)
                                    "string" == typeof c &&
                                    void 0 === f[c] &&
                                    (f[c.replace(C, E)] = b[c]);
                            return (
                                U || (f.opacity = V(a)),
                                (d = Ra(a, b, !1)),
                                (f.rotation = d.rotation),
                                (f.skewX = d.skewX),
                                (f.scaleX = d.scaleX),
                                (f.scaleY = d.scaleY),
                                (f.x = d.x),
                                (f.y = d.y),
                                Fa &&
                                ((f.z = d.z),
                                    (f.rotationX = d.rotationX),
                                    (f.rotationY = d.rotationY),
                                    (f.scaleZ = d.scaleZ)),
                                f.filters && delete f.filters,
                                f
                            );
                        },
                        da = function(a, b, c, d, e) {
                            var f,
                                g,
                                h,
                                i = {},
                                j = a.style;
                            for (g in c)
                                "cssText" !== g &&
                                "length" !== g &&
                                isNaN(g) &&
                                (b[g] !== (f = c[g]) || (e && e[g])) &&
                                -1 === g.indexOf("Origin") &&
                                ("number" == typeof f || "string" == typeof f) &&
                                ((i[g] =
                                        "auto" !== f || ("left" !== g && "top" !== g) ?
                                        ("" !== f && "auto" !== f && "none" !== f) ||
                                        "string" != typeof b[g] ||
                                        "" === b[g].replace(v, "") ?
                                        f :
                                        0 :
                                        ba(a, g)),
                                    void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
                            if (d)
                                for (g in d) "className" !== g && (i[g] = d[g]);
                            return {
                                difs: i,
                                firstMPT: h
                            };
                        },
                        ea = {
                            width: ["Left", "Right"],
                            height: ["Top", "Bottom"]
                        },
                        fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                        ga = function(a, b, c) {
                            if ("svg" === (a.nodeName + "").toLowerCase())
                                return (c || $(a))[b] || 0;
                            if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
                            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                                e = ea[b],
                                f = e.length;
                            for (c = c || $(a, null); --f > -1;)
                                (d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0),
                                (d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0);
                            return d;
                        },
                        ha = function(a, b) {
                            if ("contain" === a || "auto" === a || "auto auto" === a)
                                return a + " ";
                            (null == a || "" === a) && (a = "0 0");
                            var c,
                                d = a.split(" "),
                                e = -1 !== a.indexOf("left") ?
                                "0%" :
                                -1 !== a.indexOf("right") ?
                                "100%" :
                                d[0],
                                f = -1 !== a.indexOf("top") ?
                                "0%" :
                                -1 !== a.indexOf("bottom") ?
                                "100%" :
                                d[1];
                            if (d.length > 3 && !b) {
                                for (
                                    d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++
                                )
                                    a.push(ha(d[c]));
                                return a.join(",");
                            }
                            return (
                                null == f ?
                                (f = "center" === e ? "50%" : "0") :
                                "center" === f && (f = "50%"),
                                ("center" === e ||
                                    (isNaN(parseFloat(e)) && -1 === (e + "").indexOf("="))) &&
                                (e = "50%"),
                                (a = e + " " + f + (d.length > 2 ? " " + d[2] : "")),
                                b &&
                                ((b.oxp = -1 !== e.indexOf("%")),
                                    (b.oyp = -1 !== f.indexOf("%")),
                                    (b.oxr = "=" === e.charAt(1)),
                                    (b.oyr = "=" === f.charAt(1)),
                                    (b.ox = parseFloat(e.replace(v, ""))),
                                    (b.oy = parseFloat(f.replace(v, ""))),
                                    (b.v = a)),
                                b || a
                            );
                        },
                        ia = function(a, b) {
                            return (
                                "function" == typeof a && (a = a(r, q)),
                                "string" == typeof a && "=" === a.charAt(1) ?
                                parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) :
                                parseFloat(a) - parseFloat(b) || 0
                            );
                        },
                        ja = function(a, b) {
                            return (
                                "function" == typeof a && (a = a(r, q)),
                                null == a ?
                                b :
                                "string" == typeof a && "=" === a.charAt(1) ?
                                parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b :
                                parseFloat(a) || 0
                            );
                        },
                        ka = function(a, b, c, d) {
                            var e,
                                f,
                                g,
                                h,
                                i,
                                j = 1e-6;
                            return (
                                "function" == typeof a && (a = a(r, q)),
                                null == a ?
                                (h = b) :
                                "number" == typeof a ?
                                (h = a) :
                                ((e = 360),
                                    (f = a.split("_")),
                                    (i = "=" === a.charAt(1)),
                                    (g =
                                        (i ?
                                            parseInt(a.charAt(0) + "1", 10) *
                                            parseFloat(f[0].substr(2)) :
                                            parseFloat(f[0])) *
                                        (-1 === a.indexOf("rad") ? 1 : L) -
                                        (i ? 0 : b)),
                                    f.length &&
                                    (d && (d[c] = b + g),
                                        -1 !== a.indexOf("short") &&
                                        ((g %= e),
                                            g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)),
                                        -1 !== a.indexOf("_cw") && 0 > g ?
                                        (g = ((g + 9999999999 * e) % e) - ((g / e) | 0) * e) :
                                        -1 !== a.indexOf("ccw") &&
                                        g > 0 &&
                                        (g = ((g - 9999999999 * e) % e) - ((g / e) | 0) * e)),
                                    (h = b + g)),
                                j > h && h > -j && (h = 0),
                                h
                            );
                        },
                        la = {
                            aqua: [0, 255, 255],
                            lime: [0, 255, 0],
                            silver: [192, 192, 192],
                            black: [0, 0, 0],
                            maroon: [128, 0, 0],
                            teal: [0, 128, 128],
                            blue: [0, 0, 255],
                            navy: [0, 0, 128],
                            white: [255, 255, 255],
                            fuchsia: [255, 0, 255],
                            olive: [128, 128, 0],
                            yellow: [255, 255, 0],
                            orange: [255, 165, 0],
                            gray: [128, 128, 128],
                            purple: [128, 0, 128],
                            green: [0, 128, 0],
                            red: [255, 0, 0],
                            pink: [255, 192, 203],
                            cyan: [0, 255, 255],
                            cardinal: [239, 76, 91],
                            transparent: [255, 255, 255, 0],
                        },
                        ma = function(a, b, c) {
                            return (
                                (a = 0 > a ? a + 1 : a > 1 ? a - 1 : a),
                                (255 *
                                    (1 > 6 * a ?
                                        b + (c - b) * a * 6 :
                                        0.5 > a ?
                                        c :
                                        2 > 3 * a ?
                                        b + (c - b) * (2 / 3 - a) * 6 :
                                        b) +
                                    0.5) |
                                0
                            );
                        },
                        na = (g.parseColor = function(a, b) {
                            var c, d, e, f, g, h, i, j, k, l, m;
                            if (a)
                                if ("number" == typeof a) c = [a >> 16, (a >> 8) & 255, 255 & a];
                                else {
                                    if (
                                        ("," === a.charAt(a.length - 1) &&
                                            (a = a.substr(0, a.length - 1)),
                                            la[a])
                                    )
                                        c = la[a];
                                    else if ("#" === a.charAt(0))
                                        4 === a.length &&
                                        ((d = a.charAt(1)),
                                            (e = a.charAt(2)),
                                            (f = a.charAt(3)),
                                            (a = "#" + d + d + e + e + f + f)),
                                        (a = parseInt(a.substr(1), 16)),
                                        (c = [a >> 16, (a >> 8) & 255, 255 & a]);
                                    else if ("hsl" === a.substr(0, 3))
                                        if (((c = m = a.match(s)), b)) {
                                            if (-1 !== a.indexOf("=")) return a.match(t);
                                        } else
                                            (g = (Number(c[0]) % 360) / 360),
                                            (h = Number(c[1]) / 100),
                                            (i = Number(c[2]) / 100),
                                            (e = 0.5 >= i ? i * (h + 1) : i + h - i * h),
                                            (d = 2 * i - e),
                                            c.length > 3 && (c[3] = Number(a[3])),
                                            (c[0] = ma(g + 1 / 3, d, e)),
                                            (c[1] = ma(g, d, e)),
                                            (c[2] = ma(g - 1 / 3, d, e));
                                    else c = a.match(s) || la.transparent;
                                    (c[0] = Number(c[0])),
                                    (c[1] = Number(c[1])),
                                    (c[2] = Number(c[2])),
                                    c.length > 3 && (c[3] = Number(c[3]));
                                }
                            else c = la.black;
                            return (
                                b &&
                                !m &&
                                ((d = c[0] / 255),
                                    (e = c[1] / 255),
                                    (f = c[2] / 255),
                                    (j = Math.max(d, e, f)),
                                    (k = Math.min(d, e, f)),
                                    (i = (j + k) / 2),
                                    j === k ?
                                    (g = h = 0) :
                                    ((l = j - k),
                                        (h = i > 0.5 ? l / (2 - j - k) : l / (j + k)),
                                        (g =
                                            j === d ?
                                            (e - f) / l + (f > e ? 6 : 0) :
                                            j === e ?
                                            (f - d) / l + 2 :
                                            (d - e) / l + 4),
                                        (g *= 60)),
                                    (c[0] = (g + 0.5) | 0),
                                    (c[1] = (100 * h + 0.5) | 0),
                                    (c[2] = (100 * i + 0.5) | 0)),
                                c
                            );
                        }),
                        oa = function(a, b) {
                            var c,
                                d,
                                e,
                                f = a.match(pa) || [],
                                g = 0,
                                h = "";
                            if (!f.length) return a;
                            for (c = 0; c < f.length; c++)
                                (d = f[c]),
                                (e = a.substr(g, a.indexOf(d, g) - g)),
                                (g += e.length + d.length),
                                (d = na(d, b)),
                                3 === d.length && d.push(1),
                                (h +=
                                    e +
                                    (b ?
                                        "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] :
                                        "rgba(" + d.join(",")) +
                                    ")");
                            return h + a.substr(g);
                        },
                        pa =
                        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                    for (j in la) pa += "|" + j + "\\b";
                    (pa = new RegExp(pa + ")", "gi")),
                    (g.colorStringFilter = function(a) {
                        var b,
                            c = a[0] + " " + a[1];
                        pa.test(c) &&
                            ((b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla(")),
                                (a[0] = oa(a[0], b)),
                                (a[1] = oa(a[1], b))),
                            (pa.lastIndex = 0);
                    }),
                    b.defaultStringFilter ||
                        (b.defaultStringFilter = g.colorStringFilter);
                    var qa = function(a, b, c, d) {
                            if (null == a)
                                return function(a) {
                                    return a;
                                };
                            var e,
                                f = b ? (a.match(pa) || [""])[0] : "",
                                g = a.split(f).join("").match(u) || [],
                                h = a.substr(0, a.indexOf(g[0])),
                                i = ")" === a.charAt(a.length - 1) ? ")" : "",
                                j = -1 !== a.indexOf(" ") ? " " : ",",
                                k = g.length,
                                l = k > 0 ? g[0].replace(s, "") : "";
                            return k ?
                                (e = b ?
                                    function(a) {
                                        var b, m, n, o;
                                        if ("number" == typeof a) a += l;
                                        else if (d && I.test(a)) {
                                            for (
                                                o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++
                                            )
                                                o[n] = e(o[n]);
                                            return o.join(",");
                                        }
                                        if (
                                            ((b = (a.match(pa) || [f])[0]),
                                                (m = a.split(b).join("").match(u) || []),
                                                (n = m.length),
                                                k > n--)
                                        )
                                            for (; ++n < k;)
                                                m[n] = c ? m[((n - 1) / 2) | 0] : g[n];
                                        return (
                                            h +
                                            m.join(j) +
                                            j +
                                            b +
                                            i +
                                            (-1 !== a.indexOf("inset") ? " inset" : "")
                                        );
                                    } :
                                    function(a) {
                                        var b, f, m;
                                        if ("number" == typeof a) a += l;
                                        else if (d && I.test(a)) {
                                            for (
                                                f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++
                                            )
                                                f[m] = e(f[m]);
                                            return f.join(",");
                                        }
                                        if (((b = a.match(u) || []), (m = b.length), k > m--))
                                            for (; ++m < k;)
                                                b[m] = c ? b[((m - 1) / 2) | 0] : g[m];
                                        return h + b.join(j) + i;
                                    }) :
                                function(a) {
                                    return a;
                                };
                        },
                        ra = function(a) {
                            return (
                                (a = a.split(",")),
                                function(b, c, d, e, f, g, h) {
                                    var i,
                                        j = (c + "").split(" ");
                                    for (h = {}, i = 0; 4 > i; i++)
                                        h[a[i]] = j[i] = j[i] || j[((i - 1) / 2) >> 0];
                                    return e.parse(b, h, f, g);
                                }
                            );
                        },
                        sa =
                        ((S._setPluginRatio = function(a) {
                                this.plugin.setRatio(a);
                                for (
                                    var b,
                                        c,
                                        d,
                                        e,
                                        f,
                                        g = this.data,
                                        h = g.proxy,
                                        i = g.firstMPT,
                                        j = 1e-6; i;

                                )
                                    (b = h[i.v]),
                                    i.r ? (b = Math.round(b)) : j > b && b > -j && (b = 0),
                                    (i.t[i.p] = b),
                                    (i = i._next);
                                if (
                                    (g.autoRotate &&
                                        (g.autoRotate.rotation = g.mod ?
                                            g.mod(h.rotation, this.t) :
                                            h.rotation),
                                        1 === a || 0 === a)
                                )
                                    for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
                                        if (((c = i.t), c.type)) {
                                            if (1 === c.type) {
                                                for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++)
                                                    e += c["xn" + d] + c["xs" + (d + 1)];
                                                c[f] = e;
                                            }
                                        } else c[f] = c.s + c.xs0;
                                        i = i._next;
                                    }
                            }),
                            function(a, b, c, d, e) {
                                (this.t = a),
                                (this.p = b),
                                (this.v = c),
                                (this.r = e),
                                d && ((d._prev = this), (this._next = d));
                            }),
                        ta =
                        ((S._parseToProxy = function(a, b, c, d, e, f) {
                                var g,
                                    h,
                                    i,
                                    j,
                                    k,
                                    l = d,
                                    m = {},
                                    n = {},
                                    o = c._transform,
                                    p = M;
                                for (
                                    c._transform = null,
                                    M = b,
                                    d = k = c.parse(a, b, d, e),
                                    M = p,
                                    f &&
                                    ((c._transform = o),
                                        l && ((l._prev = null), l._prev && (l._prev._next = null))); d && d !== l;

                                ) {
                                    if (
                                        d.type <= 1 &&
                                        ((h = d.p),
                                            (n[h] = d.s + d.c),
                                            (m[h] = d.s),
                                            f || ((j = new sa(d, "s", h, j, d.r)), (d.c = 0)),
                                            1 === d.type)
                                    )
                                        for (g = d.l; --g > 0;)
                                            (i = "xn" + g),
                                            (h = d.p + "_" + i),
                                            (n[h] = d.data[i]),
                                            (m[h] = d[i]),
                                            f || (j = new sa(d, i, h, j, d.rxp[i]));
                                    d = d._next;
                                }
                                return {
                                    proxy: m,
                                    end: n,
                                    firstMPT: j,
                                    pt: k
                                };
                            }),
                            (S.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
                                (this.t = a),
                                (this.p = b),
                                (this.s = d),
                                (this.c = e),
                                (this.n = i || b),
                                a instanceof ta || f.push(this.n),
                                    (this.r = j),
                                    (this.type = h || 0),
                                    k && ((this.pr = k), (c = !0)),
                                    (this.b = void 0 === l ? d : l),
                                    (this.e = void 0 === m ? d + e : m),
                                    g && ((this._next = g), (g._prev = this));
                            })),
                        ua = function(a, b, c, d, e, f) {
                            var g = new ta(a, b, c, d - c, e, -1, f);
                            return (g.b = c), (g.e = g.xs0 = d), g;
                        },
                        va = (g.parseComplex = function(a, b, c, d, e, f, h, i, j, l) {
                            (c = c || f || ""),
                            "function" == typeof d && (d = d(r, q)),
                                (h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d)),
                                (d += ""),
                                e &&
                                pa.test(d + c) &&
                                ((d = [c, d]), g.colorStringFilter(d), (c = d[0]), (d = d[1]));
                            var m,
                                n,
                                o,
                                p,
                                u,
                                v,
                                w,
                                x,
                                y,
                                z,
                                A,
                                B,
                                C,
                                D = c.split(", ").join(",").split(" "),
                                E = d.split(", ").join(",").split(" "),
                                F = D.length,
                                G = k !== !1;
                            for (
                                (-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) &&
                                ((D = D.join(" ").replace(I, ", ").split(" ")),
                                    (E = E.join(" ").replace(I, ", ").split(" ")),
                                    (F = D.length)),
                                F !== E.length && ((D = (f || "").split(" ")), (F = D.length)),
                                h.plugin = j,
                                h.setRatio = l,
                                pa.lastIndex = 0,
                                m = 0; F > m; m++
                            )
                                if (((p = D[m]), (u = E[m]), (x = parseFloat(p)), x || 0 === x))
                                    h.appendXtra(
                                        "",
                                        x,
                                        ia(u, x),
                                        u.replace(t, ""),
                                        G && -1 !== u.indexOf("px"),
                                        !0
                                    );
                                else if (e && pa.test(p))
                                (B = u.indexOf(")") + 1),
                                (B = ")" + (B ? u.substr(B) : "")),
                                (C = -1 !== u.indexOf("hsl") && U),
                                (z = u),
                                (p = na(p, C)),
                                (u = na(u, C)),
                                (y = p.length + u.length > 6),
                                y && !U && 0 === u[3] ?
                                ((h["xs" + h.l] += h.l ? " transparent" : "transparent"),
                                    (h.e = h.e.split(E[m]).join("transparent"))) :
                                (U || (y = !1),
                                    C ?
                                    h
                                    .appendXtra(
                                        z.substr(0, z.indexOf("hsl")) +
                                        (y ? "hsla(" : "hsl("),
                                        p[0],
                                        ia(u[0], p[0]),
                                        ",",
                                        !1,
                                        !0
                                    )
                                    .appendXtra("", p[1], ia(u[1], p[1]), "%,", !1)
                                    .appendXtra(
                                        "",
                                        p[2],
                                        ia(u[2], p[2]),
                                        y ? "%," : "%" + B,
                                        !1
                                    ) :
                                    h
                                    .appendXtra(
                                        z.substr(0, z.indexOf("rgb")) +
                                        (y ? "rgba(" : "rgb("),
                                        p[0],
                                        u[0] - p[0],
                                        ",",
                                        !0,
                                        !0
                                    )
                                    .appendXtra("", p[1], u[1] - p[1], ",", !0)
                                    .appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0),
                                    y &&
                                    ((p = p.length < 4 ? 1 : p[3]),
                                        h.appendXtra(
                                            "",
                                            p,
                                            (u.length < 4 ? 1 : u[3]) - p,
                                            B,
                                            !1
                                        ))),
                                (pa.lastIndex = 0);
                            else if ((v = p.match(s))) {
                                if (((w = u.match(t)), !w || w.length !== v.length)) return h;
                                for (o = 0, n = 0; n < v.length; n++)
                                    (A = v[n]),
                                    (z = p.indexOf(A, o)),
                                    h.appendXtra(
                                        p.substr(o, z - o),
                                        Number(A),
                                        ia(w[n], A),
                                        "",
                                        G && "px" === p.substr(z + A.length, 2),
                                        0 === n
                                    ),
                                    (o = z + A.length);
                                h["xs" + h.l] += p.substr(o);
                            } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
                            if (-1 !== d.indexOf("=") && h.data) {
                                for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++)
                                    B += h["xs" + m] + h.data["xn" + m];
                                h.e = B + h["xs" + m];
                            }
                            return h.l || ((h.type = -1), (h.xs0 = h.e)), h.xfirst || h;
                        }),
                        wa = 9;
                    for (j = ta.prototype, j.l = j.pr = 0; --wa > 0;)
                        (j["xn" + wa] = 0), (j["xs" + wa] = "");
                    (j.xs0 = ""),
                    (j._next =
                        j._prev =
                        j.xfirst =
                        j.data =
                        j.plugin =
                        j.setRatio =
                        j.rxp =
                        null),
                    (j.appendXtra = function(a, b, c, d, e, f) {
                        var g = this,
                            h = g.l;
                        return (
                            (g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || ""),
                            c || 0 === h || g.plugin ?
                            (g.l++,
                                (g.type = g.setRatio ? 2 : 1),
                                (g["xs" + g.l] = d || ""),
                                h > 0 ?
                                ((g.data["xn" + h] = b + c),
                                    (g.rxp["xn" + h] = e),
                                    (g["xn" + h] = b),
                                    g.plugin ||
                                    ((g.xfirst = new ta(
                                            g,
                                            "xn" + h,
                                            b,
                                            c,
                                            g.xfirst || g,
                                            0,
                                            g.n,
                                            e,
                                            g.pr
                                        )),
                                        (g.xfirst.xs0 = 0)),
                                    g) :
                                ((g.data = {
                                        s: b + c
                                    }),
                                    (g.rxp = {}),
                                    (g.s = b),
                                    (g.c = c),
                                    (g.r = e),
                                    g)) :
                            ((g["xs" + h] += b + (d || "")), g)
                        );
                    });
                    var xa = function(a, b) {
                            (b = b || {}),
                            (this.p = b.prefix ? Z(a) || a : a),
                            (i[a] = i[this.p] = this),
                            (this.format =
                                b.formatter ||
                                qa(b.defaultValue, b.color, b.collapsible, b.multi)),
                            b.parser && (this.parse = b.parser),
                                (this.clrs = b.color),
                                (this.multi = b.multi),
                                (this.keyword = b.keyword),
                                (this.dflt = b.defaultValue),
                                (this.pr = b.priority || 0);
                        },
                        ya = (S._registerComplexSpecialProp = function(a, b, c) {
                            "object" != typeof b && (b = {
                                parser: c
                            });
                            var d,
                                e,
                                f = a.split(","),
                                g = b.defaultValue;
                            for (c = c || [g], d = 0; d < f.length; d++)
                                (b.prefix = 0 === d && b.prefix),
                                (b.defaultValue = c[d] || g),
                                (e = new xa(f[d], b));
                        }),
                        za = (S._registerPluginProp = function(a) {
                            if (!i[a]) {
                                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                                ya(a, {
                                    parser: function(a, c, d, e, f, g, j) {
                                        var k = h.com.greensock.plugins[b];
                                        return k ?
                                            (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) :
                                            (W("Error: " + b + " js file not loaded."), f);
                                    },
                                });
                            }
                        });
                    (j = xa.prototype),
                    (j.parseComplex = function(a, b, c, d, e, f) {
                        var g,
                            h,
                            i,
                            j,
                            k,
                            l,
                            m = this.keyword;
                        if (
                            (this.multi &&
                                (I.test(c) || I.test(b) ?
                                    ((h = b.replace(I, "|").split("|")),
                                        (i = c.replace(I, "|").split("|"))) :
                                    m && ((h = [b]), (i = [c]))),
                                i)
                        ) {
                            for (
                                j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++
                            )
                                (b = h[g] = h[g] || this.dflt),
                                (c = i[g] = i[g] || this.dflt),
                                m &&
                                ((k = b.indexOf(m)),
                                    (l = c.indexOf(m)),
                                    k !== l &&
                                    (-1 === l ?
                                        (h[g] = h[g].split(m).join("")) :
                                        -1 === k && (h[g] += " " + m)));
                            (b = h.join(", ")), (c = i.join(", "));
                        }
                        return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
                    }),
                    (j.parse = function(a, b, c, d, f, g, h) {
                        return this.parseComplex(
                            a.style,
                            this.format(_(a, this.p, e, !1, this.dflt)),
                            this.format(b),
                            f,
                            g
                        );
                    }),
                    (g.registerSpecialProp = function(a, b, c) {
                        ya(a, {
                            parser: function(a, d, e, f, g, h, i) {
                                var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
                                return (j.plugin = h), (j.setRatio = b(a, d, f._tween, e)), j;
                            },
                            priority: c,
                        });
                    }),
                    (g.useSVGTransformAttr = !0);
                    var Aa,
                        Ba =
                        "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
                            ","
                        ),
                        Ca = Z("transform"),
                        Da = X + "transform",
                        Ea = Z("transformOrigin"),
                        Fa = null !== Z("perspective"),
                        Ga = (S.Transform = function() {
                            (this.perspective = parseFloat(g.defaultTransformPerspective) || 0),
                            (this.force3D =
                                g.defaultForce3D !== !1 && Fa ?
                                g.defaultForce3D || "auto" :
                                !1);
                        }),
                        Ha = _gsScope.SVGElement,
                        Ia = function(a, b, c) {
                            var d,
                                e = O.createElementNS("http://www.w3.org/2000/svg", a),
                                f = /([a-z])([A-Z])/g;
                            for (d in c)
                                e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                            return b.appendChild(e), e;
                        },
                        Ja = O.documentElement || {},
                        Ka = (function() {
                            var a,
                                b,
                                c,
                                d = p || (/Android/i.test(T) && !_gsScope.chrome);
                            return (
                                O.createElementNS &&
                                !d &&
                                ((a = Ia("svg", Ja)),
                                    (b = Ia("rect", a, {
                                        width: 100,
                                        height: 50,
                                        x: 100
                                    })),
                                    (c = b.getBoundingClientRect().width),
                                    (b.style[Ea] = "50% 50%"),
                                    (b.style[Ca] = "scaleX(0.5)"),
                                    (d = c === b.getBoundingClientRect().width && !(n && Fa)),
                                    Ja.removeChild(a)),
                                d
                            );
                        })(),
                        La = function(a, b, c, d, e, f) {
                            var h,
                                i,
                                j,
                                k,
                                l,
                                m,
                                n,
                                o,
                                p,
                                q,
                                r,
                                s,
                                t,
                                u,
                                v = a._gsTransform,
                                w = Qa(a, !0);
                            v && ((t = v.xOrigin), (u = v.yOrigin)),
                                (!d || (h = d.split(" ")).length < 2) &&
                                ((n = a.getBBox()),
                                    0 === n.x &&
                                    0 === n.y &&
                                    n.width + n.height === 0 &&
                                    (n = {
                                        x: parseFloat(
                                            a.hasAttribute("x") ?
                                            a.getAttribute("x") :
                                            a.hasAttribute("cx") ?
                                            a.getAttribute("cx") :
                                            0
                                        ) || 0,
                                        y: parseFloat(
                                            a.hasAttribute("y") ?
                                            a.getAttribute("y") :
                                            a.hasAttribute("cy") ?
                                            a.getAttribute("cy") :
                                            0
                                        ) || 0,
                                        width: 0,
                                        height: 0,
                                    }),
                                    (b = ha(b).split(" ")),
                                    (h = [
                                        (-1 !== b[0].indexOf("%") ?
                                            (parseFloat(b[0]) / 100) * n.width :
                                            parseFloat(b[0])) + n.x,
                                        (-1 !== b[1].indexOf("%") ?
                                            (parseFloat(b[1]) / 100) * n.height :
                                            parseFloat(b[1])) + n.y,
                                    ])),
                                (c.xOrigin = k = parseFloat(h[0])),
                                (c.yOrigin = l = parseFloat(h[1])),
                                d &&
                                w !== Pa &&
                                ((m = w[0]),
                                    (n = w[1]),
                                    (o = w[2]),
                                    (p = w[3]),
                                    (q = w[4]),
                                    (r = w[5]),
                                    (s = m * p - n * o),
                                    s &&
                                    ((i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s),
                                        (j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s),
                                        (k = c.xOrigin = h[0] = i),
                                        (l = c.yOrigin = h[1] = j))),
                                v &&
                                (f &&
                                    ((c.xOffset = v.xOffset), (c.yOffset = v.yOffset), (v = c)),
                                    e || (e !== !1 && g.defaultSmoothOrigin !== !1) ?
                                    ((i = k - t),
                                        (j = l - u),
                                        (v.xOffset += i * w[0] + j * w[2] - i),
                                        (v.yOffset += i * w[1] + j * w[3] - j)) :
                                    (v.xOffset = v.yOffset = 0)),
                                f || a.setAttribute("data-svg-origin", h.join(" "));
                        },
                        Ma = function(a) {
                            var b,
                                c = P(
                                    "svg",
                                    this.ownerSVGElement.getAttribute("xmlns") ||
                                    "http://www.w3.org/2000/svg"
                                ),
                                d = this.parentNode,
                                e = this.nextSibling,
                                f = this.style.cssText;
                            if (
                                (Ja.appendChild(c),
                                    c.appendChild(this),
                                    (this.style.display = "block"),
                                    a)
                            )
                                try {
                                    (b = this.getBBox()),
                                    (this._originalGetBBox = this.getBBox),
                                    (this.getBBox = Ma);
                                } catch (g) {}
                            else this._originalGetBBox && (b = this._originalGetBBox());
                            return (
                                e ? d.insertBefore(this, e) : d.appendChild(this),
                                Ja.removeChild(c),
                                (this.style.cssText = f),
                                b
                            );
                        },
                        Na = function(a) {
                            try {
                                return a.getBBox();
                            } catch (b) {
                                return Ma.call(a, !0);
                            }
                        },
                        Oa = function(a) {
                            return !(
                                !(Ha && a.getCTM && Na(a)) ||
                                (a.parentNode && !a.ownerSVGElement)
                            );
                        },
                        Pa = [1, 0, 0, 1, 0, 0],
                        Qa = function(a, b) {
                            var c,
                                d,
                                e,
                                f,
                                g,
                                h,
                                i = a._gsTransform || new Ga(),
                                j = 1e5,
                                k = a.style;
                            if (
                                (Ca ?
                                    (d = _(a, Da, null, !0)) :
                                    a.currentStyle &&
                                    ((d = a.currentStyle.filter.match(G)),
                                        (d =
                                            d && 4 === d.length ?
                                            [
                                                d[0].substr(4),
                                                Number(d[2].substr(4)),
                                                Number(d[1].substr(4)),
                                                d[3].substr(4),
                                                i.x || 0,
                                                i.y || 0,
                                            ].join(",") :
                                            "")),
                                    (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
                                    !Ca ||
                                    (!(h = "none" === $(a).display) && a.parentNode) ||
                                    (h && ((f = k.display), (k.display = "block")),
                                        a.parentNode || ((g = 1), Ja.appendChild(a)),
                                        (d = _(a, Da, null, !0)),
                                        (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
                                        f ? (k.display = f) : h && Va(k, "display"),
                                        g && Ja.removeChild(a)),
                                    (i.svg || (a.getCTM && Oa(a))) &&
                                    (c &&
                                        -1 !== (k[Ca] + "").indexOf("matrix") &&
                                        ((d = k[Ca]), (c = 0)),
                                        (e = a.getAttribute("transform")),
                                        c &&
                                        e &&
                                        (-1 !== e.indexOf("matrix") ?
                                            ((d = e), (c = 0)) :
                                            -1 !== e.indexOf("translate") &&
                                            ((d =
                                                    "matrix(1,0,0,1," +
                                                    e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") +
                                                    ")"),
                                                (c = 0)))),
                                    c)
                            )
                                return Pa;
                            for (e = (d || "").match(s) || [], wa = e.length; --wa > -1;)
                                (f = Number(e[wa])),
                                (e[wa] = (g = f - (f |= 0)) ?
                                    ((g * j + (0 > g ? -0.5 : 0.5)) | 0) / j + f :
                                    f);
                            return b && e.length > 6 ?
                                [e[0], e[1], e[4], e[5], e[12], e[13]] :
                                e;
                        },
                        Ra = (S.getTransform = function(a, c, d, e) {
                            if (a._gsTransform && d && !e) return a._gsTransform;
                            var f,
                                h,
                                i,
                                j,
                                k,
                                l,
                                m = d ? a._gsTransform || new Ga() : new Ga(),
                                n = m.scaleX < 0,
                                o = 2e-5,
                                p = 1e5,
                                q = Fa ?
                                parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) ||
                                m.zOrigin ||
                                0 :
                                0,
                                r = parseFloat(g.defaultTransformPerspective) || 0;
                            if (
                                ((m.svg = !(!a.getCTM || !Oa(a))),
                                    m.svg &&
                                    (La(
                                            a,
                                            _(a, Ea, c, !1, "50% 50%") + "",
                                            m,
                                            a.getAttribute("data-svg-origin")
                                        ),
                                        (Aa = g.useSVGTransformAttr || Ka)),
                                    (f = Qa(a)),
                                    f !== Pa)
                            ) {
                                if (16 === f.length) {
                                    var s,
                                        t,
                                        u,
                                        v,
                                        w,
                                        x = f[0],
                                        y = f[1],
                                        z = f[2],
                                        A = f[3],
                                        B = f[4],
                                        C = f[5],
                                        D = f[6],
                                        E = f[7],
                                        F = f[8],
                                        G = f[9],
                                        H = f[10],
                                        I = f[12],
                                        J = f[13],
                                        K = f[14],
                                        M = f[11],
                                        N = Math.atan2(D, H);
                                    m.zOrigin &&
                                        ((K = -m.zOrigin),
                                            (I = F * K - f[12]),
                                            (J = G * K - f[13]),
                                            (K = H * K + m.zOrigin - f[14])),
                                        (m.rotationX = N * L),
                                        N &&
                                        ((v = Math.cos(-N)),
                                            (w = Math.sin(-N)),
                                            (s = B * v + F * w),
                                            (t = C * v + G * w),
                                            (u = D * v + H * w),
                                            (F = B * -w + F * v),
                                            (G = C * -w + G * v),
                                            (H = D * -w + H * v),
                                            (M = E * -w + M * v),
                                            (B = s),
                                            (C = t),
                                            (D = u)),
                                        (N = Math.atan2(-z, H)),
                                        (m.rotationY = N * L),
                                        N &&
                                        ((v = Math.cos(-N)),
                                            (w = Math.sin(-N)),
                                            (s = x * v - F * w),
                                            (t = y * v - G * w),
                                            (u = z * v - H * w),
                                            (G = y * w + G * v),
                                            (H = z * w + H * v),
                                            (M = A * w + M * v),
                                            (x = s),
                                            (y = t),
                                            (z = u)),
                                        (N = Math.atan2(y, x)),
                                        (m.rotation = N * L),
                                        N &&
                                        ((v = Math.cos(N)),
                                            (w = Math.sin(N)),
                                            (s = x * v + y * w),
                                            (t = B * v + C * w),
                                            (u = F * v + G * w),
                                            (y = y * v - x * w),
                                            (C = C * v - B * w),
                                            (G = G * v - F * w),
                                            (x = s),
                                            (B = t),
                                            (F = u)),
                                        m.rotationX &&
                                        Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 &&
                                        ((m.rotationX = m.rotation = 0),
                                            (m.rotationY = 180 - m.rotationY)),
                                        (N = Math.atan2(B, C)),
                                        (m.scaleX =
                                            ((Math.sqrt(x * x + y * y + z * z) * p + 0.5) | 0) / p),
                                        (m.scaleY = ((Math.sqrt(C * C + D * D) * p + 0.5) | 0) / p),
                                        (m.scaleZ =
                                            ((Math.sqrt(F * F + G * G + H * H) * p + 0.5) | 0) / p),
                                        (x /= m.scaleX),
                                        (B /= m.scaleY),
                                        (y /= m.scaleX),
                                        (C /= m.scaleY),
                                        Math.abs(N) > o ?
                                        ((m.skewX = N * L),
                                            (B = 0),
                                            "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) :
                                        (m.skewX = 0),
                                        (m.perspective = M ? 1 / (0 > M ? -M : M) : 0),
                                        (m.x = I),
                                        (m.y = J),
                                        (m.z = K),
                                        m.svg &&
                                        ((m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B)),
                                            (m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C)));
                                } else if (
                                    !Fa ||
                                    e ||
                                    !f.length ||
                                    m.x !== f[4] ||
                                    m.y !== f[5] ||
                                    (!m.rotationX && !m.rotationY)
                                ) {
                                    var O = f.length >= 6,
                                        P = O ? f[0] : 1,
                                        Q = f[1] || 0,
                                        R = f[2] || 0,
                                        S = O ? f[3] : 1;
                                    (m.x = f[4] || 0),
                                    (m.y = f[5] || 0),
                                    (i = Math.sqrt(P * P + Q * Q)),
                                    (j = Math.sqrt(S * S + R * R)),
                                    (k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0),
                                    (l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0),
                                    (m.scaleX = i),
                                    (m.scaleY = j),
                                    (m.rotation = k),
                                    (m.skewX = l),
                                    Fa &&
                                        ((m.rotationX = m.rotationY = m.z = 0),
                                            (m.perspective = r),
                                            (m.scaleZ = 1)),
                                        m.svg &&
                                        ((m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R)),
                                            (m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S)));
                                }
                                Math.abs(m.skewX) > 90 &&
                                    Math.abs(m.skewX) < 270 &&
                                    (n ?
                                        ((m.scaleX *= -1),
                                            (m.skewX += m.rotation <= 0 ? 180 : -180),
                                            (m.rotation += m.rotation <= 0 ? 180 : -180)) :
                                        ((m.scaleY *= -1), (m.skewX += m.skewX <= 0 ? 180 : -180))),
                                    (m.zOrigin = q);
                                for (h in m) m[h] < o && m[h] > -o && (m[h] = 0);
                            }
                            return (
                                d &&
                                ((a._gsTransform = m),
                                    m.svg &&
                                    (Aa && a.style[Ca] ?
                                        b.delayedCall(0.001, function() {
                                            Va(a.style, Ca);
                                        }) :
                                        !Aa &&
                                        a.getAttribute("transform") &&
                                        b.delayedCall(0.001, function() {
                                            a.removeAttribute("transform");
                                        }))),
                                m
                            );
                        }),
                        Sa = function(a) {
                            var b,
                                c,
                                d = this.data,
                                e = -d.rotation * K,
                                f = e + d.skewX * K,
                                g = 1e5,
                                h = ((Math.cos(e) * d.scaleX * g) | 0) / g,
                                i = ((Math.sin(e) * d.scaleX * g) | 0) / g,
                                j = ((Math.sin(f) * -d.scaleY * g) | 0) / g,
                                k = ((Math.cos(f) * d.scaleY * g) | 0) / g,
                                l = this.t.style,
                                m = this.t.currentStyle;
                            if (m) {
                                (c = i), (i = -j), (j = -c), (b = m.filter), (l.filter = "");
                                var n,
                                    o,
                                    q = this.t.offsetWidth,
                                    r = this.t.offsetHeight,
                                    s = "absolute" !== m.position,
                                    t =
                                    "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                                    h +
                                    ", M12=" +
                                    i +
                                    ", M21=" +
                                    j +
                                    ", M22=" +
                                    k,
                                    u = d.x + (q * d.xPercent) / 100,
                                    v = d.y + (r * d.yPercent) / 100;
                                if (
                                    (null != d.ox &&
                                        ((n = (d.oxp ? q * d.ox * 0.01 : d.ox) - q / 2),
                                            (o = (d.oyp ? r * d.oy * 0.01 : d.oy) - r / 2),
                                            (u += n - (n * h + o * i)),
                                            (v += o - (n * j + o * k))),
                                        s ?
                                        ((n = q / 2),
                                            (o = r / 2),
                                            (t +=
                                                ", Dx=" +
                                                (n - (n * h + o * i) + u) +
                                                ", Dy=" +
                                                (o - (n * j + o * k) + v) +
                                                ")")) :
                                        (t += ", sizingMethod='auto expand')"),
                                        -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ?
                                        (l.filter = b.replace(H, t)) :
                                        (l.filter = t + " " + b),
                                        (0 === a || 1 === a) &&
                                        1 === h &&
                                        0 === i &&
                                        0 === j &&
                                        1 === k &&
                                        ((s && -1 === t.indexOf("Dx=0, Dy=0")) ||
                                            (x.test(b) && 100 !== parseFloat(RegExp.$1)) ||
                                            (-1 === b.indexOf(b.indexOf("Alpha")) &&
                                                l.removeAttribute("filter"))),
                                        !s)
                                ) {
                                    var y,
                                        z,
                                        A,
                                        B = 8 > p ? 1 : -1;
                                    for (
                                        n = d.ieOffsetX || 0,
                                        o = d.ieOffsetY || 0,
                                        d.ieOffsetX = Math.round(
                                            (q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 +
                                            u
                                        ),
                                        d.ieOffsetY = Math.round(
                                            (r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 +
                                            v
                                        ),
                                        wa = 0; 4 > wa; wa++
                                    )
                                        (z = fa[wa]),
                                        (y = m[z]),
                                        (c = -1 !== y.indexOf("px") ?
                                            parseFloat(y) :
                                            aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0),
                                        (A =
                                            c !== d[z] ?
                                            2 > wa ?
                                            -d.ieOffsetX :
                                            -d.ieOffsetY :
                                            2 > wa ?
                                            n - d.ieOffsetX :
                                            o - d.ieOffsetY),
                                        (l[z] =
                                            (d[z] = Math.round(
                                                c - A * (0 === wa || 2 === wa ? 1 : B)
                                            )) + "px");
                                }
                            }
                        },
                        Ta =
                        (S.set3DTransformRatio =
                            S.setTransformRatio =
                            function(a) {
                                var b,
                                    c,
                                    d,
                                    e,
                                    f,
                                    g,
                                    h,
                                    i,
                                    j,
                                    k,
                                    l,
                                    m,
                                    o,
                                    p,
                                    q,
                                    r,
                                    s,
                                    t,
                                    u,
                                    v,
                                    w,
                                    x,
                                    y,
                                    z = this.data,
                                    A = this.t.style,
                                    B = z.rotation,
                                    C = z.rotationX,
                                    D = z.rotationY,
                                    E = z.scaleX,
                                    F = z.scaleY,
                                    G = z.scaleZ,
                                    H = z.x,
                                    I = z.y,
                                    J = z.z,
                                    L = z.svg,
                                    M = z.perspective,
                                    N = z.force3D,
                                    O = z.skewY,
                                    P = z.skewX;
                                if (
                                    (O && ((P += O), (B += O)),
                                        ((((1 === a || 0 === a) &&
                                                    "auto" === N &&
                                                    (this.tween._totalTime === this.tween._totalDuration ||
                                                        !this.tween._totalTime)) ||
                                                !N) &&
                                            !J &&
                                            !M &&
                                            !D &&
                                            !C &&
                                            1 === G) ||
                                        (Aa && L) ||
                                        !Fa)
                                )
                                    return void(B || P || L ?
                                        ((B *= K),
                                            (x = P * K),
                                            (y = 1e5),
                                            (c = Math.cos(B) * E),
                                            (f = Math.sin(B) * E),
                                            (d = Math.sin(B - x) * -F),
                                            (g = Math.cos(B - x) * F),
                                            x &&
                                            "simple" === z.skewType &&
                                            ((b = Math.tan(x - O * K)),
                                                (b = Math.sqrt(1 + b * b)),
                                                (d *= b),
                                                (g *= b),
                                                O &&
                                                ((b = Math.tan(O * K)),
                                                    (b = Math.sqrt(1 + b * b)),
                                                    (c *= b),
                                                    (f *= b))),
                                            L &&
                                            ((H +=
                                                    z.xOrigin -
                                                    (z.xOrigin * c + z.yOrigin * d) +
                                                    z.xOffset),
                                                (I +=
                                                    z.yOrigin -
                                                    (z.xOrigin * f + z.yOrigin * g) +
                                                    z.yOffset),
                                                Aa &&
                                                (z.xPercent || z.yPercent) &&
                                                ((q = this.t.getBBox()),
                                                    (H += 0.01 * z.xPercent * q.width),
                                                    (I += 0.01 * z.yPercent * q.height)),
                                                (q = 1e-6),
                                                q > H && H > -q && (H = 0),
                                                q > I && I > -q && (I = 0)),
                                            (u =
                                                ((c * y) | 0) / y +
                                                "," +
                                                ((f * y) | 0) / y +
                                                "," +
                                                ((d * y) | 0) / y +
                                                "," +
                                                ((g * y) | 0) / y +
                                                "," +
                                                H +
                                                "," +
                                                I +
                                                ")"),
                                            L && Aa ?
                                            this.t.setAttribute("transform", "matrix(" + u) :
                                            (A[Ca] =
                                                (z.xPercent || z.yPercent ?
                                                    "translate(" +
                                                    z.xPercent +
                                                    "%," +
                                                    z.yPercent +
                                                    "%) matrix(" :
                                                    "matrix(") + u)) :
                                        (A[Ca] =
                                            (z.xPercent || z.yPercent ?
                                                "translate(" +
                                                z.xPercent +
                                                "%," +
                                                z.yPercent +
                                                "%) matrix(" :
                                                "matrix(") +
                                            E +
                                            ",0,0," +
                                            F +
                                            "," +
                                            H +
                                            "," +
                                            I +
                                            ")"));
                                if (
                                    (n &&
                                        ((q = 1e-4),
                                            q > E && E > -q && (E = G = 2e-5),
                                            q > F && F > -q && (F = G = 2e-5),
                                            !M || z.z || z.rotationX || z.rotationY || (M = 0)),
                                        B || P)
                                )
                                    (B *= K),
                                    (r = c = Math.cos(B)),
                                    (s = f = Math.sin(B)),
                                    P &&
                                    ((B -= P * K),
                                        (r = Math.cos(B)),
                                        (s = Math.sin(B)),
                                        "simple" === z.skewType &&
                                        ((b = Math.tan((P - O) * K)),
                                            (b = Math.sqrt(1 + b * b)),
                                            (r *= b),
                                            (s *= b),
                                            z.skewY &&
                                            ((b = Math.tan(O * K)),
                                                (b = Math.sqrt(1 + b * b)),
                                                (c *= b),
                                                (f *= b)))),
                                    (d = -s),
                                    (g = r);
                                else {
                                    if (!(D || C || 1 !== G || M || L))
                                        return void(A[Ca] =
                                            (z.xPercent || z.yPercent ?
                                                "translate(" +
                                                z.xPercent +
                                                "%," +
                                                z.yPercent +
                                                "%) translate3d(" :
                                                "translate3d(") +
                                            H +
                                            "px," +
                                            I +
                                            "px," +
                                            J +
                                            "px)" +
                                            (1 !== E || 1 !== F ?
                                                " scale(" + E + "," + F + ")" :
                                                ""));
                                    (c = g = 1), (d = f = 0);
                                }
                                (k = 1),
                                (e = h = i = j = l = m = 0),
                                (o = M ? -1 / M : 0),
                                (p = z.zOrigin),
                                (q = 1e-6),
                                (v = ","),
                                (w = "0"),
                                (B = D * K),
                                B &&
                                    ((r = Math.cos(B)),
                                        (s = Math.sin(B)),
                                        (i = -s),
                                        (l = o * -s),
                                        (e = c * s),
                                        (h = f * s),
                                        (k = r),
                                        (o *= r),
                                        (c *= r),
                                        (f *= r)),
                                    (B = C * K),
                                    B &&
                                    ((r = Math.cos(B)),
                                        (s = Math.sin(B)),
                                        (b = d * r + e * s),
                                        (t = g * r + h * s),
                                        (j = k * s),
                                        (m = o * s),
                                        (e = d * -s + e * r),
                                        (h = g * -s + h * r),
                                        (k *= r),
                                        (o *= r),
                                        (d = b),
                                        (g = t)),
                                    1 !== G && ((e *= G), (h *= G), (k *= G), (o *= G)),
                                    1 !== F && ((d *= F), (g *= F), (j *= F), (m *= F)),
                                    1 !== E && ((c *= E), (f *= E), (i *= E), (l *= E)),
                                    (p || L) &&
                                    (p && ((H += e * -p), (I += h * -p), (J += k * -p + p)),
                                        L &&
                                        ((H +=
                                                z.xOrigin -
                                                (z.xOrigin * c + z.yOrigin * d) +
                                                z.xOffset),
                                            (I +=
                                                z.yOrigin -
                                                (z.xOrigin * f + z.yOrigin * g) +
                                                z.yOffset)),
                                        q > H && H > -q && (H = w),
                                        q > I && I > -q && (I = w),
                                        q > J && J > -q && (J = 0)),
                                    (u =
                                        z.xPercent || z.yPercent ?
                                        "translate(" +
                                        z.xPercent +
                                        "%," +
                                        z.yPercent +
                                        "%) matrix3d(" :
                                        "matrix3d("),
                                    (u +=
                                        (q > c && c > -q ? w : c) +
                                        v +
                                        (q > f && f > -q ? w : f) +
                                        v +
                                        (q > i && i > -q ? w : i)),
                                    (u +=
                                        v +
                                        (q > l && l > -q ? w : l) +
                                        v +
                                        (q > d && d > -q ? w : d) +
                                        v +
                                        (q > g && g > -q ? w : g)),
                                    C || D || 1 !== G ?
                                    ((u +=
                                            v +
                                            (q > j && j > -q ? w : j) +
                                            v +
                                            (q > m && m > -q ? w : m) +
                                            v +
                                            (q > e && e > -q ? w : e)),
                                        (u +=
                                            v +
                                            (q > h && h > -q ? w : h) +
                                            v +
                                            (q > k && k > -q ? w : k) +
                                            v +
                                            (q > o && o > -q ? w : o) +
                                            v)) :
                                    (u += ",0,0,0,0,1,0,"),
                                    (u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")"),
                                    (A[Ca] = u);
                            });
                    (j = Ga.prototype),
                    (j.x =
                        j.y =
                        j.z =
                        j.skewX =
                        j.skewY =
                        j.rotation =
                        j.rotationX =
                        j.rotationY =
                        j.zOrigin =
                        j.xPercent =
                        j.yPercent =
                        j.xOffset =
                        j.yOffset =
                        0),
                    (j.scaleX = j.scaleY = j.scaleZ = 1),
                    ya(
                            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                                parser: function(a, b, c, d, f, h, i) {
                                    if (d._lastParsedTransform === i) return f;
                                    d._lastParsedTransform = i;
                                    var j,
                                        k = i.scale && "function" == typeof i.scale ? i.scale : 0;
                                    "function" == typeof i[c] && ((j = i[c]), (i[c] = b)),
                                        k && (i.scale = k(r, a));
                                    var l,
                                        m,
                                        n,
                                        o,
                                        p,
                                        s,
                                        t,
                                        u,
                                        v,
                                        w = a._gsTransform,
                                        x = a.style,
                                        y = 1e-6,
                                        z = Ba.length,
                                        A = i,
                                        B = {},
                                        C = "transformOrigin",
                                        D = Ra(a, e, !0, A.parseTransform),
                                        E =
                                        A.transform &&
                                        ("function" == typeof A.transform ?
                                            A.transform(r, q) :
                                            A.transform);
                                    if (
                                        ((D.skewType = A.skewType || D.skewType || g.defaultSkewType),
                                            (d._transform = D),
                                            E && "string" == typeof E && Ca)
                                    )
                                        (m = Q.style),
                                        (m[Ca] = E),
                                        (m.display = "block"),
                                        (m.position = "absolute"),
                                        O.body.appendChild(Q),
                                        (l = Ra(Q, null, !1)),
                                        "simple" === D.skewType &&
                                        (l.scaleY *= Math.cos(l.skewX * K)),
                                        D.svg &&
                                        ((s = D.xOrigin),
                                            (t = D.yOrigin),
                                            (l.x -= D.xOffset),
                                            (l.y -= D.yOffset),
                                            (A.transformOrigin || A.svgOrigin) &&
                                            ((E = {}),
                                                La(
                                                    a,
                                                    ha(A.transformOrigin),
                                                    E,
                                                    A.svgOrigin,
                                                    A.smoothOrigin,
                                                    !0
                                                ),
                                                (s = E.xOrigin),
                                                (t = E.yOrigin),
                                                (l.x -= E.xOffset - D.xOffset),
                                                (l.y -= E.yOffset - D.yOffset)),
                                            (s || t) &&
                                            ((u = Qa(Q, !0)),
                                                (l.x -= s - (s * u[0] + t * u[2])),
                                                (l.y -= t - (s * u[1] + t * u[3])))),
                                        O.body.removeChild(Q),
                                        l.perspective || (l.perspective = D.perspective),
                                        null != A.xPercent &&
                                        (l.xPercent = ja(A.xPercent, D.xPercent)),
                                        null != A.yPercent &&
                                        (l.yPercent = ja(A.yPercent, D.yPercent));
                                    else if ("object" == typeof A) {
                                        if (
                                            ((l = {
                                                    scaleX: ja(
                                                        null != A.scaleX ? A.scaleX : A.scale,
                                                        D.scaleX
                                                    ),
                                                    scaleY: ja(
                                                        null != A.scaleY ? A.scaleY : A.scale,
                                                        D.scaleY
                                                    ),
                                                    scaleZ: ja(A.scaleZ, D.scaleZ),
                                                    x: ja(A.x, D.x),
                                                    y: ja(A.y, D.y),
                                                    z: ja(A.z, D.z),
                                                    xPercent: ja(A.xPercent, D.xPercent),
                                                    yPercent: ja(A.yPercent, D.yPercent),
                                                    perspective: ja(A.transformPerspective, D.perspective),
                                                }),
                                                (p = A.directionalRotation),
                                                null != p)
                                        )
                                            if ("object" == typeof p)
                                                for (m in p) A[m] = p[m];
                                            else A.rotation = p;
                                        "string" == typeof A.x &&
                                            -1 !== A.x.indexOf("%") &&
                                            ((l.x = 0), (l.xPercent = ja(A.x, D.xPercent))),
                                            "string" == typeof A.y &&
                                            -1 !== A.y.indexOf("%") &&
                                            ((l.y = 0), (l.yPercent = ja(A.y, D.yPercent))),
                                            (l.rotation = ka(
                                                "rotation" in A ?
                                                A.rotation :
                                                "shortRotation" in A ?
                                                A.shortRotation + "_short" :
                                                "rotationZ" in A ?
                                                A.rotationZ :
                                                D.rotation,
                                                D.rotation,
                                                "rotation",
                                                B
                                            )),
                                            Fa &&
                                            ((l.rotationX = ka(
                                                    "rotationX" in A ?
                                                    A.rotationX :
                                                    "shortRotationX" in A ?
                                                    A.shortRotationX + "_short" :
                                                    D.rotationX || 0,
                                                    D.rotationX,
                                                    "rotationX",
                                                    B
                                                )),
                                                (l.rotationY = ka(
                                                    "rotationY" in A ?
                                                    A.rotationY :
                                                    "shortRotationY" in A ?
                                                    A.shortRotationY + "_short" :
                                                    D.rotationY || 0,
                                                    D.rotationY,
                                                    "rotationY",
                                                    B
                                                ))),
                                            (l.skewX = ka(A.skewX, D.skewX)),
                                            (l.skewY = ka(A.skewY, D.skewY));
                                    }
                                    for (
                                        Fa &&
                                        null != A.force3D &&
                                        ((D.force3D = A.force3D), (o = !0)),
                                        n =
                                        D.force3D ||
                                        D.z ||
                                        D.rotationX ||
                                        D.rotationY ||
                                        l.z ||
                                        l.rotationX ||
                                        l.rotationY ||
                                        l.perspective,
                                        n || null == A.scale || (l.scaleZ = 1);
                                        --z > -1;

                                    )
                                        (v = Ba[z]),
                                        (E = l[v] - D[v]),
                                        (E > y || -y > E || null != A[v] || null != M[v]) &&
                                        ((o = !0),
                                            (f = new ta(D, v, D[v], E, f)),
                                            v in B && (f.e = B[v]),
                                            (f.xs0 = 0),
                                            (f.plugin = h),
                                            d._overwriteProps.push(f.n));
                                    return (
                                        (E = A.transformOrigin),
                                        D.svg &&
                                        (E || A.svgOrigin) &&
                                        ((s = D.xOffset),
                                            (t = D.yOffset),
                                            La(a, ha(E), l, A.svgOrigin, A.smoothOrigin),
                                            (f = ua(
                                                D,
                                                "xOrigin",
                                                (w ? D : l).xOrigin,
                                                l.xOrigin,
                                                f,
                                                C
                                            )),
                                            (f = ua(
                                                D,
                                                "yOrigin",
                                                (w ? D : l).yOrigin,
                                                l.yOrigin,
                                                f,
                                                C
                                            )),
                                            (s !== D.xOffset || t !== D.yOffset) &&
                                            ((f = ua(
                                                    D,
                                                    "xOffset",
                                                    w ? s : D.xOffset,
                                                    D.xOffset,
                                                    f,
                                                    C
                                                )),
                                                (f = ua(
                                                    D,
                                                    "yOffset",
                                                    w ? t : D.yOffset,
                                                    D.yOffset,
                                                    f,
                                                    C
                                                ))),
                                            (E = "0px 0px")),
                                        (E || (Fa && n && D.zOrigin)) &&
                                        (Ca ?
                                            ((o = !0),
                                                (v = Ea),
                                                (E = (E || _(a, v, e, !1, "50% 50%")) + ""),
                                                (f = new ta(x, v, 0, 0, f, -1, C)),
                                                (f.b = x[v]),
                                                (f.plugin = h),
                                                Fa ?
                                                ((m = D.zOrigin),
                                                    (E = E.split(" ")),
                                                    (D.zOrigin =
                                                        (E.length > 2 && (0 === m || "0px" !== E[2]) ?
                                                            parseFloat(E[2]) :
                                                            m) || 0),
                                                    (f.xs0 = f.e =
                                                        E[0] + " " + (E[1] || "50%") + " 0px"),
                                                    (f = new ta(D, "zOrigin", 0, 0, f, -1, f.n)),
                                                    (f.b = m),
                                                    (f.xs0 = f.e = D.zOrigin)) :
                                                (f.xs0 = f.e = E)) :
                                            ha(E + "", D)),
                                        o &&
                                        (d._transformType =
                                            (D.svg && Aa) || (!n && 3 !== this._transformType) ?
                                            2 :
                                            3),
                                        j && (i[c] = j),
                                        k && (i.scale = k),
                                        f
                                    );
                                },
                                prefix: !0,
                            }
                        ),
                        ya("boxShadow", {
                            defaultValue: "0px 0px 0px 0px #999",
                            prefix: !0,
                            color: !0,
                            multi: !0,
                            keyword: "inset",
                        }),
                        ya("borderRadius", {
                            defaultValue: "0px",
                            parser: function(a, b, c, f, g, h) {
                                b = this.format(b);
                                var i,
                                    j,
                                    k,
                                    l,
                                    m,
                                    n,
                                    o,
                                    p,
                                    q,
                                    r,
                                    s,
                                    t,
                                    u,
                                    v,
                                    w,
                                    x,
                                    y = [
                                        "borderTopLeftRadius",
                                        "borderTopRightRadius",
                                        "borderBottomRightRadius",
                                        "borderBottomLeftRadius",
                                    ],
                                    z = a.style;
                                for (
                                    q = parseFloat(a.offsetWidth),
                                    r = parseFloat(a.offsetHeight),
                                    i = b.split(" "),
                                    j = 0; j < y.length; j++
                                )
                                    this.p.indexOf("border") && (y[j] = Z(y[j])),
                                    (m = l = _(a, y[j], e, !1, "0px")),
                                    -1 !== m.indexOf(" ") &&
                                    ((l = m.split(" ")), (m = l[0]), (l = l[1])),
                                    (n = k = i[j]),
                                    (o = parseFloat(m)),
                                    (t = m.substr((o + "").length)),
                                    (u = "=" === n.charAt(1)),
                                    u ?
                                    ((p = parseInt(n.charAt(0) + "1", 10)),
                                        (n = n.substr(2)),
                                        (p *= parseFloat(n)),
                                        (s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "")) :
                                    ((p = parseFloat(n)), (s = n.substr((p + "").length))),
                                    "" === s && (s = d[c] || t),
                                    s !== t &&
                                    ((v = aa(a, "borderLeft", o, t)),
                                        (w = aa(a, "borderTop", o, t)),
                                        "%" === s ?
                                        ((m = (v / q) * 100 + "%"), (l = (w / r) * 100 + "%")) :
                                        "em" === s ?
                                        ((x = aa(a, "borderLeft", 1, "em")),
                                            (m = v / x + "em"),
                                            (l = w / x + "em")) :
                                        ((m = v + "px"), (l = w + "px")),
                                        u &&
                                        ((n = parseFloat(m) + p + s),
                                            (k = parseFloat(l) + p + s))),
                                    (g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g));
                                return g;
                            },
                            prefix: !0,
                            formatter: qa("0px 0px 0px 0px", !1, !0),
                        }),
                        ya(
                            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                                defaultValue: "0px",
                                parser: function(a, b, c, d, f, g) {
                                    return va(
                                        a.style,
                                        c,
                                        this.format(_(a, c, e, !1, "0px 0px")),
                                        this.format(b),
                                        !1,
                                        "0px",
                                        f
                                    );
                                },
                                prefix: !0,
                                formatter: qa("0px 0px", !1, !0),
                            }
                        ),
                        ya("backgroundPosition", {
                            defaultValue: "0 0",
                            parser: function(a, b, c, d, f, g) {
                                var h,
                                    i,
                                    j,
                                    k,
                                    l,
                                    m,
                                    n = "background-position",
                                    o = e || $(a, null),
                                    q = this.format(
                                        (o ?
                                            p ?
                                            o.getPropertyValue(n + "-x") +
                                            " " +
                                            o.getPropertyValue(n + "-y") :
                                            o.getPropertyValue(n) :
                                            a.currentStyle.backgroundPositionX +
                                            " " +
                                            a.currentStyle.backgroundPositionY) || "0 0"
                                    ),
                                    r = this.format(b);
                                if (
                                    (-1 !== q.indexOf("%")) != (-1 !== r.indexOf("%")) &&
                                    r.split(",").length < 2 &&
                                    ((m = _(a, "backgroundImage").replace(D, "")),
                                        m && "none" !== m)
                                ) {
                                    for (
                                        h = q.split(" "),
                                        i = r.split(" "),
                                        R.setAttribute("src", m),
                                        j = 2;
                                        --j > -1;

                                    )
                                        (q = h[j]),
                                        (k = -1 !== q.indexOf("%")),
                                        k !== (-1 !== i[j].indexOf("%")) &&
                                        ((l =
                                                0 === j ?
                                                a.offsetWidth - R.width :
                                                a.offsetHeight - R.height),
                                            (h[j] = k ?
                                                (parseFloat(q) / 100) * l + "px" :
                                                (parseFloat(q) / l) * 100 + "%"));
                                    q = h.join(" ");
                                }
                                return this.parseComplex(a.style, q, r, f, g);
                            },
                            formatter: ha,
                        }),
                        ya("backgroundSize", {
                            defaultValue: "0 0",
                            formatter: function(a) {
                                return (a += ""), ha(-1 === a.indexOf(" ") ? a + " " + a : a);
                            },
                        }),
                        ya("perspective", {
                            defaultValue: "0px",
                            prefix: !0
                        }),
                        ya("perspectiveOrigin", {
                            defaultValue: "50% 50%",
                            prefix: !0
                        }),
                        ya("transformStyle", {
                            prefix: !0
                        }),
                        ya("backfaceVisibility", {
                            prefix: !0
                        }),
                        ya("userSelect", {
                            prefix: !0
                        }),
                        ya("margin", {
                            parser: ra("marginTop,marginRight,marginBottom,marginLeft"),
                        }),
                        ya("padding", {
                            parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft"),
                        }),
                        ya("clip", {
                            defaultValue: "rect(0px,0px,0px,0px)",
                            parser: function(a, b, c, d, f, g) {
                                var h, i, j;
                                return (
                                    9 > p ?
                                    ((i = a.currentStyle),
                                        (j = 8 > p ? " " : ","),
                                        (h =
                                            "rect(" +
                                            i.clipTop +
                                            j +
                                            i.clipRight +
                                            j +
                                            i.clipBottom +
                                            j +
                                            i.clipLeft +
                                            ")"),
                                        (b = this.format(b).split(",").join(j))) :
                                    ((h = this.format(_(a, this.p, e, !1, this.dflt))),
                                        (b = this.format(b))),
                                    this.parseComplex(a.style, h, b, f, g)
                                );
                            },
                        }),
                        ya("textShadow", {
                            defaultValue: "0px 0px 0px #999",
                            color: !0,
                            multi: !0,
                        }),
                        ya("autoRound,strictUnits", {
                            parser: function(a, b, c, d, e) {
                                return e;
                            },
                        }),
                        ya("border", {
                            defaultValue: "0px solid #000",
                            parser: function(a, b, c, d, f, g) {
                                var h = _(a, "borderTopWidth", e, !1, "0px"),
                                    i = this.format(b).split(" "),
                                    j = i[0].replace(w, "");
                                return (
                                    "px" !== j &&
                                    (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j),
                                    this.parseComplex(
                                        a.style,
                                        this.format(
                                            h +
                                            " " +
                                            _(a, "borderTopStyle", e, !1, "solid") +
                                            " " +
                                            _(a, "borderTopColor", e, !1, "#000")
                                        ),
                                        i.join(" "),
                                        f,
                                        g
                                    )
                                );
                            },
                            color: !0,
                            formatter: function(a) {
                                var b = a.split(" ");
                                return (
                                    b[0] +
                                    " " +
                                    (b[1] || "solid") +
                                    " " +
                                    (a.match(pa) || ["#000"])[0]
                                );
                            },
                        }),
                        ya("borderWidth", {
                            parser: ra(
                                "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
                            ),
                        }),
                        ya("float,cssFloat,styleFloat", {
                            parser: function(a, b, c, d, e, f) {
                                var g = a.style,
                                    h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                                return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
                            },
                        });
                    var Ua = function(a) {
                        var b,
                            c = this.t,
                            d = c.filter || _(this.data, "filter") || "",
                            e = (this.s + this.c * a) | 0;
                        100 === e &&
                            (-1 === d.indexOf("atrix(") &&
                                -1 === d.indexOf("radient(") &&
                                -1 === d.indexOf("oader(") ?
                                (c.removeAttribute("filter"), (b = !_(this.data, "filter"))) :
                                ((c.filter = d.replace(z, "")), (b = !0))),
                            b ||
                            (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"),
                                -1 === d.indexOf("pacity") ?
                                (0 === e && this.xn1) ||
                                (c.filter = d + " alpha(opacity=" + e + ")") :
                                (c.filter = d.replace(x, "opacity=" + e)));
                    };
                    ya("opacity,alpha,autoAlpha", {
                        defaultValue: "1",
                        parser: function(a, b, c, d, f, g) {
                            var h = parseFloat(_(a, "opacity", e, !1, "1")),
                                i = a.style,
                                j = "autoAlpha" === c;
                            return (
                                "string" == typeof b &&
                                "=" === b.charAt(1) &&
                                (b =
                                    ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h),
                                j &&
                                1 === h &&
                                "hidden" === _(a, "visibility", e) &&
                                0 !== b &&
                                (h = 0),
                                U ?
                                (f = new ta(i, "opacity", h, b - h, f)) :
                                ((f = new ta(i, "opacity", 100 * h, 100 * (b - h), f)),
                                    (f.xn1 = j ? 1 : 0),
                                    (i.zoom = 1),
                                    (f.type = 2),
                                    (f.b = "alpha(opacity=" + f.s + ")"),
                                    (f.e = "alpha(opacity=" + (f.s + f.c) + ")"),
                                    (f.data = a),
                                    (f.plugin = g),
                                    (f.setRatio = Ua)),
                                j &&
                                ((f = new ta(
                                        i,
                                        "visibility",
                                        0,
                                        0,
                                        f,
                                        -1,
                                        null,
                                        !1,
                                        0,
                                        0 !== h ? "inherit" : "hidden",
                                        0 === b ? "hidden" : "inherit"
                                    )),
                                    (f.xs0 = "inherit"),
                                    d._overwriteProps.push(f.n),
                                    d._overwriteProps.push(c)),
                                f
                            );
                        },
                    });
                    var Va = function(a, b) {
                            b &&
                                (a.removeProperty ?
                                    (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) &&
                                        (b = "-" + b),
                                        a.removeProperty(b.replace(B, "-$1").toLowerCase())) :
                                    a.removeAttribute(b));
                        },
                        Wa = function(a) {
                            if (((this.t._gsClassPT = this), 1 === a || 0 === a)) {
                                this.t.setAttribute("class", 0 === a ? this.b : this.e);
                                for (var b = this.data, c = this.t.style; b;)
                                    b.v ? (c[b.p] = b.v) : Va(c, b.p), (b = b._next);
                                1 === a &&
                                    this.t._gsClassPT === this &&
                                    (this.t._gsClassPT = null);
                            } else
                                this.t.getAttribute("class") !== this.e &&
                                this.t.setAttribute("class", this.e);
                        };
                    ya("className", {
                        parser: function(a, b, d, f, g, h, i) {
                            var j,
                                k,
                                l,
                                m,
                                n,
                                o = a.getAttribute("class") || "",
                                p = a.style.cssText;
                            if (
                                ((g = f._classNamePT = new ta(a, d, 0, 0, g, 2)),
                                    (g.setRatio = Wa),
                                    (g.pr = -11),
                                    (c = !0),
                                    (g.b = o),
                                    (k = ca(a, e)),
                                    (l = a._gsClassPT))
                            ) {
                                for (m = {}, n = l.data; n;)(m[n.p] = 1), (n = n._next);
                                l.setRatio(1);
                            }
                            return (
                                (a._gsClassPT = g),
                                (g.e =
                                    "=" !== b.charAt(1) ?
                                    b :
                                    o.replace(
                                        new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"),
                                        ""
                                    ) + ("+" === b.charAt(0) ? " " + b.substr(2) : "")),
                                a.setAttribute("class", g.e),
                                (j = da(a, k, ca(a), i, m)),
                                a.setAttribute("class", o),
                                (g.data = j.firstMPT),
                                (a.style.cssText = p),
                                (g = g.xfirst = f.parse(a, j.difs, g, h))
                            );
                        },
                    });
                    var Xa = function(a) {
                        if (
                            (1 === a || 0 === a) &&
                            this.data._totalTime === this.data._totalDuration &&
                            "isFromStart" !== this.data.data
                        ) {
                            var b,
                                c,
                                d,
                                e,
                                f,
                                g = this.t.style,
                                h = i.transform.parse;
                            if ("all" === this.e)(g.cssText = ""), (e = !0);
                            else
                                for (
                                    b = this.e.split(" ").join("").split(","), d = b.length;
                                    --d > -1;

                                )
                                    (c = b[d]),
                                    i[c] &&
                                    (i[c].parse === h ?
                                        (e = !0) :
                                        (c = "transformOrigin" === c ? Ea : i[c].p)),
                                    Va(g, c);
                            e &&
                                (Va(g, Ca),
                                    (f = this.t._gsTransform),
                                    f &&
                                    (f.svg &&
                                        (this.t.removeAttribute("data-svg-origin"),
                                            this.t.removeAttribute("transform")),
                                        delete this.t._gsTransform));
                        }
                    };
                    for (
                        ya("clearProps", {
                            parser: function(a, b, d, e, f) {
                                return (
                                    (f = new ta(a, d, 0, 0, f, 2)),
                                    (f.setRatio = Xa),
                                    (f.e = b),
                                    (f.pr = -10),
                                    (f.data = e._tween),
                                    (c = !0),
                                    f
                                );
                            },
                        }),
                        j = "bezier,throwProps,physicsProps,physics2D".split(","),
                        wa = j.length; wa--;

                    )
                        za(j[wa]);
                    (j = g.prototype),
                    (j._firstPT = j._lastParsedTransform = j._transform = null),
                    (j._onInitTween = function(a, b, h, j) {
                        if (!a.nodeType) return !1;
                        (this._target = q = a),
                        (this._tween = h),
                        (this._vars = b),
                        (r = j),
                        (k = b.autoRound),
                        (c = !1),
                        (d = b.suffixMap || g.suffixMap),
                        (e = $(a, "")),
                        (f = this._overwriteProps);
                        var n,
                            p,
                            s,
                            t,
                            u,
                            v,
                            w,
                            x,
                            z,
                            A = a.style;
                        if (
                            (l &&
                                "" === A.zIndex &&
                                ((n = _(a, "zIndex", e)),
                                    ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)),
                                "string" == typeof b &&
                                ((t = A.cssText),
                                    (n = ca(a, e)),
                                    (A.cssText = t + ";" + b),
                                    (n = da(a, n, ca(a)).difs),
                                    !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)),
                                    (b = n),
                                    (A.cssText = t)),
                                b.className ?
                                (this._firstPT = p =
                                    i.className.parse(
                                        a,
                                        b.className,
                                        "className",
                                        this,
                                        null,
                                        null,
                                        b
                                    )) :
                                (this._firstPT = p = this.parse(a, b, null)),
                                this._transformType)
                        ) {
                            for (
                                z = 3 === this._transformType,
                                Ca ?
                                m &&
                                ((l = !0),
                                    "" === A.zIndex &&
                                    ((w = _(a, "zIndex", e)),
                                        ("auto" === w || "" === w) &&
                                        this._addLazySet(A, "zIndex", 0)),
                                    o &&
                                    this._addLazySet(
                                        A,
                                        "WebkitBackfaceVisibility",
                                        this._vars.WebkitBackfaceVisibility ||
                                        (z ? "visible" : "hidden")
                                    )) :
                                (A.zoom = 1),
                                s = p; s && s._next;

                            )
                                s = s._next;
                            (x = new ta(a, "transform", 0, 0, null, 2)),
                            this._linkCSSP(x, null, s),
                                (x.setRatio = Ca ? Ta : Sa),
                                (x.data = this._transform || Ra(a, e, !0)),
                                (x.tween = h),
                                (x.pr = -1),
                                f.pop();
                        }
                        if (c) {
                            for (; p;) {
                                for (v = p._next, s = t; s && s.pr > p.pr;) s = s._next;
                                (p._prev = s ? s._prev : u) ? (p._prev._next = p) : (t = p),
                                (p._next = s) ? (s._prev = p) : (u = p),
                                (p = v);
                            }
                            this._firstPT = t;
                        }
                        return !0;
                    }),
                    (j.parse = function(a, b, c, f) {
                        var g,
                            h,
                            j,
                            l,
                            m,
                            n,
                            o,
                            p,
                            s,
                            t,
                            u = a.style;
                        for (g in b) {
                            if (
                                ((n = b[g]),
                                    "function" == typeof n && (n = n(r, q)),
                                    (h = i[g]))
                            )
                                c = h.parse(a, n, g, this, c, f, b);
                            else {
                                if ("--" === g.substr(0, 2)) {
                                    this._tween._propLookup[g] = this._addTween.call(
                                        this._tween,
                                        a.style,
                                        "setProperty",
                                        $(a).getPropertyValue(g) + "",
                                        n + "",
                                        g,
                                        !1,
                                        g
                                    );
                                    continue;
                                }
                                (m = _(a, g, e) + ""),
                                (s = "string" == typeof n),
                                "color" === g ||
                                    "fill" === g ||
                                    "stroke" === g ||
                                    -1 !== g.indexOf("Color") ||
                                    (s && A.test(n)) ?
                                    (s ||
                                        ((n = na(n)),
                                            (n =
                                                (n.length > 3 ? "rgba(" : "rgb(") +
                                                n.join(",") +
                                                ")")),
                                        (c = va(u, g, m, n, !0, "transparent", c, 0, f))) :
                                    s && J.test(n) ?
                                    (c = va(u, g, m, n, !0, null, c, 0, f)) :
                                    ((j = parseFloat(m)),
                                        (o = j || 0 === j ? m.substr((j + "").length) : ""),
                                        ("" === m || "auto" === m) &&
                                        ("width" === g || "height" === g ?
                                            ((j = ga(a, g, e)), (o = "px")) :
                                            "left" === g || "top" === g ?
                                            ((j = ba(a, g, e)), (o = "px")) :
                                            ((j = "opacity" !== g ? 0 : 1), (o = ""))),
                                        (t = s && "=" === n.charAt(1)),
                                        t ?
                                        ((l = parseInt(n.charAt(0) + "1", 10)),
                                            (n = n.substr(2)),
                                            (l *= parseFloat(n)),
                                            (p = n.replace(w, ""))) :
                                        ((l = parseFloat(n)),
                                            (p = s ? n.replace(w, "") : "")),
                                        "" === p && (p = g in d ? d[g] : o),
                                        (n = l || 0 === l ? (t ? l + j : l) + p : b[g]),
                                        o !== p &&
                                        ("" !== p || "lineHeight" === g) &&
                                        (l || 0 === l) &&
                                        j &&
                                        ((j = aa(a, g, j, o)),
                                            "%" === p ?
                                            ((j /= aa(a, g, 100, "%") / 100),
                                                b.strictUnits !== !0 && (m = j + "%")) :
                                            "em" === p ||
                                            "rem" === p ||
                                            "vw" === p ||
                                            "vh" === p ?
                                            (j /= aa(a, g, 1, p)) :
                                            "px" !== p && ((l = aa(a, g, l, p)), (p = "px")),
                                            t && (l || 0 === l) && (n = l + j + p)),
                                        t && (l += j),
                                        (!j && 0 !== j) || (!l && 0 !== l) ?
                                        void 0 !== u[g] &&
                                        (n || (n + "" != "NaN" && null != n)) ?
                                        ((c = new ta(
                                                u,
                                                g,
                                                l || j || 0,
                                                0,
                                                c,
                                                -1,
                                                g,
                                                !1,
                                                0,
                                                m,
                                                n
                                            )),
                                            (c.xs0 =
                                                "none" !== n ||
                                                ("display" !== g && -1 === g.indexOf("Style")) ?
                                                n :
                                                m)) :
                                        W("invalid " + g + " tween value: " + b[g]) :
                                        ((c = new ta(
                                                u,
                                                g,
                                                j,
                                                l - j,
                                                c,
                                                0,
                                                g,
                                                k !== !1 && ("px" === p || "zIndex" === g),
                                                0,
                                                m,
                                                n
                                            )),
                                            (c.xs0 = p)));
                            }
                            f && c && !c.plugin && (c.plugin = f);
                        }
                        return c;
                    }),
                    (j.setRatio = function(a) {
                        var b,
                            c,
                            d,
                            e = this._firstPT,
                            f = 1e-6;
                        if (
                            1 !== a ||
                            (this._tween._time !== this._tween._duration &&
                                0 !== this._tween._time)
                        )
                            if (
                                a ||
                                (this._tween._time !== this._tween._duration &&
                                    0 !== this._tween._time) ||
                                this._tween._rawPrevTime === -1e-6
                            )
                                for (; e;) {
                                    if (
                                        ((b = e.c * a + e.s),
                                            e.r ? (b = Math.round(b)) : f > b && b > -f && (b = 0),
                                            e.type)
                                    )
                                        if (1 === e.type)
                                            if (((d = e.l), 2 === d))
                                                e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                            else if (3 === d)
                                        e.t[e.p] =
                                        e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                    else if (4 === d)
                                        e.t[e.p] =
                                        e.xs0 +
                                        b +
                                        e.xs1 +
                                        e.xn1 +
                                        e.xs2 +
                                        e.xn2 +
                                        e.xs3 +
                                        e.xn3 +
                                        e.xs4;
                                    else if (5 === d)
                                        e.t[e.p] =
                                        e.xs0 +
                                        b +
                                        e.xs1 +
                                        e.xn1 +
                                        e.xs2 +
                                        e.xn2 +
                                        e.xs3 +
                                        e.xn3 +
                                        e.xs4 +
                                        e.xn4 +
                                        e.xs5;
                                    else {
                                        for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++)
                                            c += e["xn" + d] + e["xs" + (d + 1)];
                                        e.t[e.p] = c;
                                    } else
                                        -
                                        1 === e.type ?
                                        (e.t[e.p] = e.xs0) :
                                        e.setRatio && e.setRatio(a);
                                    else e.t[e.p] = b + e.xs0;
                                    e = e._next;
                                }
                        else
                            for (; e;)
                                2 !== e.type ? (e.t[e.p] = e.b) : e.setRatio(a),
                                (e = e._next);
                        else
                            for (; e;) {
                                if (2 !== e.type)
                                    if (e.r && -1 !== e.type)
                                        if (((b = Math.round(e.s + e.c)), e.type)) {
                                            if (1 === e.type) {
                                                for (
                                                    d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++
                                                )
                                                    c += e["xn" + d] + e["xs" + (d + 1)];
                                                e.t[e.p] = c;
                                            }
                                        } else e.t[e.p] = b + e.xs0;
                                else e.t[e.p] = e.e;
                                else e.setRatio(a);
                                e = e._next;
                            }
                    }),
                    (j._enableTransforms = function(a) {
                        (this._transform = this._transform || Ra(this._target, e, !0)),
                        (this._transformType =
                            (this._transform.svg && Aa) || (!a && 3 !== this._transformType) ?
                            2 :
                            3);
                    });
                    var Ya = function(a) {
                        (this.t[this.p] = this.e),
                        this.data._linkCSSP(this, this._next, null, !0);
                    };
                    (j._addLazySet = function(a, b, c) {
                        var d = (this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2));
                        (d.e = c), (d.setRatio = Ya), (d.data = this);
                    }),
                    (j._linkCSSP = function(a, b, c, d) {
                        return (
                            a &&
                            (b && (b._prev = a),
                                a._next && (a._next._prev = a._prev),
                                a._prev ?
                                (a._prev._next = a._next) :
                                this._firstPT === a &&
                                ((this._firstPT = a._next), (d = !0)),
                                c ?
                                (c._next = a) :
                                d || null !== this._firstPT || (this._firstPT = a),
                                (a._next = b),
                                (a._prev = c)),
                            a
                        );
                    }),
                    (j._mod = function(a) {
                        for (var b = this._firstPT; b;)
                            "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1),
                            (b = b._next);
                    }),
                    (j._kill = function(b) {
                        var c,
                            d,
                            e,
                            f = b;
                        if (b.autoAlpha || b.alpha) {
                            f = {};
                            for (d in b) f[d] = b[d];
                            (f.opacity = 1), f.autoAlpha && (f.visibility = 1);
                        }
                        for (
                            b.className &&
                            (c = this._classNamePT) &&
                            ((e = c.xfirst),
                                e && e._prev ?
                                this._linkCSSP(e._prev, c._next, e._prev._prev) :
                                e === this._firstPT && (this._firstPT = c._next),
                                c._next && this._linkCSSP(c._next, c._next._next, e._prev),
                                (this._classNamePT = null)),
                            c = this._firstPT; c;

                        )
                            c.plugin &&
                            c.plugin !== d &&
                            c.plugin._kill &&
                            (c.plugin._kill(b), (d = c.plugin)),
                            (c = c._next);
                        return a.prototype._kill.call(this, f);
                    });
                    var Za = function(a, b, c) {
                        var d, e, f, g;
                        if (a.slice)
                            for (e = a.length; --e > -1;) Za(a[e], b, c);
                        else
                            for (d = a.childNodes, e = d.length; --e > -1;)
                                (f = d[e]),
                                (g = f.type),
                                f.style && (b.push(ca(f)), c && c.push(f)),
                                (1 !== g && 9 !== g && 11 !== g) ||
                                !f.childNodes.length ||
                                Za(f, b, c);
                    };
                    return (
                        (g.cascadeTo = function(a, c, d) {
                            var e,
                                f,
                                g,
                                h,
                                i = b.to(a, c, d),
                                j = [i],
                                k = [],
                                l = [],
                                m = [],
                                n = b._internals.reservedProps;
                            for (
                                a = i._targets || i.target,
                                Za(a, k, m),
                                i.render(c, !0, !0),
                                Za(a, l),
                                i.render(0, !0, !0),
                                i._enabled(!0),
                                e = m.length;
                                --e > -1;

                            )
                                if (((f = da(m[e], k[e], l[e])), f.firstMPT)) {
                                    f = f.difs;
                                    for (g in d) n[g] && (f[g] = d[g]);
                                    h = {};
                                    for (g in f) h[g] = k[e][g];
                                    j.push(b.fromTo(m[e], c, h, f));
                                }
                            return j;
                        }),
                        a.activate([g]),
                        g
                    );
                },
                !0
            ),
            (function() {
                var a = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.6.0",
                        priority: -1,
                        API: 2,
                        init: function(a, b, c) {
                            return (this._tween = c), !0;
                        },
                    }),
                    b = function(a) {
                        for (; a;) a.f || a.blob || (a.m = Math.round), (a = a._next);
                    },
                    c = a.prototype;
                (c._onInitAllProps = function() {
                    for (
                        var a,
                            c,
                            d,
                            e = this._tween,
                            f = e.vars.roundProps.join ?
                            e.vars.roundProps :
                            e.vars.roundProps.split(","),
                            g = f.length,
                            h = {},
                            i = e._propLookup.roundProps;
                        --g > -1;

                    )
                        h[f[g]] = Math.round;
                    for (g = f.length; --g > -1;)
                        for (a = f[g], c = e._firstPT; c;)
                            (d = c._next),
                            c.pg ?
                            c.t._mod(h) :
                            c.n === a &&
                            (2 === c.f && c.t ?
                                b(c.t._firstPT) :
                                (this._add(c.t, a, c.s, c.c),
                                    d && (d._prev = c._prev),
                                    c._prev ?
                                    (c._prev._next = d) :
                                    e._firstPT === c && (e._firstPT = d),
                                    (c._next = c._prev = null),
                                    (e._propLookup[a] = i))),
                            (c = d);
                    return !1;
                }),
                (c._add = function(a, b, c, d) {
                    this._addTween(a, b, c, c + d, b, Math.round),
                        this._overwriteProps.push(b);
                });
            })(),
            (function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.6.1",
                    init: function(a, b, c, d) {
                        var e, f;
                        if ("function" != typeof a.setAttribute) return !1;
                        for (e in b)
                            (f = b[e]),
                            "function" == typeof f && (f = f(d, a)),
                            this._addTween(
                                a,
                                "setAttribute",
                                a.getAttribute(e) + "",
                                f + "",
                                e,
                                !1,
                                e
                            ),
                            this._overwriteProps.push(e);
                        return !0;
                    },
                });
            })(),
            (_gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(a, b, c, d) {
                    "object" != typeof b && (b = {
                        rotation: b
                    }), (this.finals = {});
                    var e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k = b.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6;
                    for (e in b)
                        "useRadians" !== e &&
                        ((h = b[e]),
                            "function" == typeof h && (h = h(d, a)),
                            (j = (h + "").split("_")),
                            (f = j[0]),
                            (g = parseFloat(
                                "function" != typeof a[e] ?
                                a[e] :
                                a[
                                    e.indexOf("set") ||
                                    "function" != typeof a["get" + e.substr(3)] ?
                                    e :
                                    "get" + e.substr(3)
                                ]()
                            )),
                            (h = this.finals[e] =
                                "string" == typeof f && "=" === f.charAt(1) ?
                                g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) :
                                Number(f) || 0),
                            (i = h - g),
                            j.length &&
                            ((f = j.join("_")),
                                -1 !== f.indexOf("short") &&
                                ((i %= k), i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)),
                                -1 !== f.indexOf("_cw") && 0 > i ?
                                (i = ((i + 9999999999 * k) % k) - ((i / k) | 0) * k) :
                                -1 !== f.indexOf("ccw") &&
                                i > 0 &&
                                (i = ((i - 9999999999 * k) % k) - ((i / k) | 0) * k)),
                            (i > l || -l > i) &&
                            (this._addTween(a, e, g, g + i, e),
                                this._overwriteProps.push(e)));
                    return !0;
                },
                set: function(a) {
                    var b;
                    if (1 !== a) this._super.setRatio.call(this, a);
                    else
                        for (b = this._firstPT; b;)
                            b.f ? b.t[b.p](this.finals[b.p]) : (b.t[b.p] = this.finals[b.p]),
                            (b = b._next);
                },
            })._autoCSS = !0),
            _gsScope._gsDefine(
                "easing.Back",
                ["easing.Ease"],
                function(a) {
                    var b,
                        c,
                        d,
                        e = _gsScope.GreenSockGlobals || _gsScope,
                        f = e.com.greensock,
                        g = 2 * Math.PI,
                        h = Math.PI / 2,
                        i = f._class,
                        j = function(b, c) {
                            var d = i("easing." + b, function() {}, !0),
                                e = (d.prototype = new a());
                            return (e.constructor = d), (e.getRatio = c), d;
                        },
                        k = a.register || function() {},
                        l = function(a, b, c, d, e) {
                            var f = i(
                                "easing." + a, {
                                    easeOut: new b(),
                                    easeIn: new c(),
                                    easeInOut: new d()
                                },
                                !0
                            );
                            return k(f, a), f;
                        },
                        m = function(a, b, c) {
                            (this.t = a),
                            (this.v = b),
                            c &&
                                ((this.next = c),
                                    (c.prev = this),
                                    (this.c = c.v - b),
                                    (this.gap = c.t - a));
                        },
                        n = function(b, c) {
                            var d = i(
                                    "easing." + b,
                                    function(a) {
                                        (this._p1 = a || 0 === a ? a : 1.70158),
                                        (this._p2 = 1.525 * this._p1);
                                    },
                                    !0
                                ),
                                e = (d.prototype = new a());
                            return (
                                (e.constructor = d),
                                (e.getRatio = c),
                                (e.config = function(a) {
                                    return new d(a);
                                }),
                                d
                            );
                        },
                        o = l(
                            "Back",
                            n("BackOut", function(a) {
                                return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
                            }),
                            n("BackIn", function(a) {
                                return a * a * ((this._p1 + 1) * a - this._p1);
                            }),
                            n("BackInOut", function(a) {
                                return (a *= 2) < 1 ?
                                    0.5 * a * a * ((this._p2 + 1) * a - this._p2) :
                                    0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
                            })
                        ),
                        p = i(
                            "easing.SlowMo",
                            function(a, b, c) {
                                (b = b || 0 === b ? b : 0.7),
                                null == a ? (a = 0.7) : a > 1 && (a = 1),
                                    (this._p = 1 !== a ? b : 0),
                                    (this._p1 = (1 - a) / 2),
                                    (this._p2 = a),
                                    (this._p3 = this._p1 + this._p2),
                                    (this._calcEnd = c === !0);
                            },
                            !0
                        ),
                        q = (p.prototype = new a());
                    return (
                        (q.constructor = p),
                        (q.getRatio = function(a) {
                            var b = a + (0.5 - a) * this._p;
                            return a < this._p1 ?
                                this._calcEnd ?
                                1 - (a = 1 - a / this._p1) * a :
                                b - (a = 1 - a / this._p1) * a * a * a * b :
                                a > this._p3 ?
                                this._calcEnd ?
                                1 - (a = (a - this._p3) / this._p1) * a :
                                b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a :
                                this._calcEnd ?
                                1 :
                                b;
                        }),
                        (p.ease = new p(0.7, 0.7)),
                        (q.config = p.config =
                            function(a, b, c) {
                                return new p(a, b, c);
                            }),
                        (b = i(
                            "easing.SteppedEase",
                            function(a, b) {
                                (a = a || 1),
                                (this._p1 = 1 / a),
                                (this._p2 = a + (b ? 0 : 1)),
                                (this._p3 = b ? 1 : 0);
                            },
                            !0
                        )),
                        (q = b.prototype = new a()),
                        (q.constructor = b),
                        (q.getRatio = function(a) {
                            return (
                                0 > a ? (a = 0) : a >= 1 && (a = 0.999999999),
                                (((this._p2 * a) | 0) + this._p3) * this._p1
                            );
                        }),
                        (q.config = b.config =
                            function(a, c) {
                                return new b(a, c);
                            }),
                        (c = i(
                            "easing.RoughEase",
                            function(b) {
                                b = b || {};
                                for (
                                    var c,
                                        d,
                                        e,
                                        f,
                                        g,
                                        h,
                                        i = b.taper || "none",
                                        j = [],
                                        k = 0,
                                        l = 0 | (b.points || 20),
                                        n = l,
                                        o = b.randomize !== !1,
                                        p = b.clamp === !0,
                                        q = b.template instanceof a ? b.template : null,
                                        r = "number" == typeof b.strength ? 0.4 * b.strength : 0.4;
                                    --n > -1;

                                )
                                    (c = o ? Math.random() : (1 / l) * n),
                                    (d = q ? q.getRatio(c) : c),
                                    "none" === i ?
                                    (e = r) :
                                    "out" === i ?
                                    ((f = 1 - c), (e = f * f * r)) :
                                    "in" === i ?
                                    (e = c * c * r) :
                                    0.5 > c ?
                                    ((f = 2 * c), (e = f * f * 0.5 * r)) :
                                    ((f = 2 * (1 - c)), (e = f * f * 0.5 * r)),
                                    o ?
                                    (d += Math.random() * e - 0.5 * e) :
                                    n % 2 ?
                                    (d += 0.5 * e) :
                                    (d -= 0.5 * e),
                                    p && (d > 1 ? (d = 1) : 0 > d && (d = 0)),
                                    (j[k++] = {
                                        x: c,
                                        y: d
                                    });
                                for (
                                    j.sort(function(a, b) {
                                        return a.x - b.x;
                                    }),
                                    h = new m(1, 1, null),
                                    n = l;
                                    --n > -1;

                                )
                                    (g = j[n]), (h = new m(g.x, g.y, h));
                                this._prev = new m(0, 0, 0 !== h.t ? h : h.next);
                            },
                            !0
                        )),
                        (q = c.prototype = new a()),
                        (q.constructor = c),
                        (q.getRatio = function(a) {
                            var b = this._prev;
                            if (a > b.t) {
                                for (; b.next && a >= b.t;) b = b.next;
                                b = b.prev;
                            } else
                                for (; b.prev && a <= b.t;) b = b.prev;
                            return (this._prev = b), b.v + ((a - b.t) / b.gap) * b.c;
                        }),
                        (q.config = function(a) {
                            return new c(a);
                        }),
                        (c.ease = new c()),
                        l(
                            "Bounce",
                            j("BounceOut", function(a) {
                                return 1 / 2.75 > a ?
                                    7.5625 * a * a :
                                    2 / 2.75 > a ?
                                    7.5625 * (a -= 1.5 / 2.75) * a + 0.75 :
                                    2.5 / 2.75 > a ?
                                    7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 :
                                    7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
                            }),
                            j("BounceIn", function(a) {
                                return (a = 1 - a) < 1 / 2.75 ?
                                    1 - 7.5625 * a * a :
                                    2 / 2.75 > a ?
                                    1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) :
                                    2.5 / 2.75 > a ?
                                    1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) :
                                    1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
                            }),
                            j("BounceInOut", function(a) {
                                var b = 0.5 > a;
                                return (
                                    (a = b ? 1 - 2 * a : 2 * a - 1),
                                    (a =
                                        1 / 2.75 > a ?
                                        7.5625 * a * a :
                                        2 / 2.75 > a ?
                                        7.5625 * (a -= 1.5 / 2.75) * a + 0.75 :
                                        2.5 / 2.75 > a ?
                                        7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 :
                                        7.5625 * (a -= 2.625 / 2.75) * a + 0.984375),
                                    b ? 0.5 * (1 - a) : 0.5 * a + 0.5
                                );
                            })
                        ),
                        l(
                            "Circ",
                            j("CircOut", function(a) {
                                return Math.sqrt(1 - (a -= 1) * a);
                            }),
                            j("CircIn", function(a) {
                                return -(Math.sqrt(1 - a * a) - 1);
                            }),
                            j("CircInOut", function(a) {
                                return (a *= 2) < 1 ?
                                    -0.5 * (Math.sqrt(1 - a * a) - 1) :
                                    0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
                            })
                        ),
                        (d = function(b, c, d) {
                            var e = i(
                                    "easing." + b,
                                    function(a, b) {
                                        (this._p1 = a >= 1 ? a : 1),
                                        (this._p2 = (b || d) / (1 > a ? a : 1)),
                                        (this._p3 =
                                            (this._p2 / g) * (Math.asin(1 / this._p1) || 0)),
                                        (this._p2 = g / this._p2);
                                    },
                                    !0
                                ),
                                f = (e.prototype = new a());
                            return (
                                (f.constructor = e),
                                (f.getRatio = c),
                                (f.config = function(a, b) {
                                    return new e(a, b);
                                }),
                                e
                            );
                        }),
                        l(
                            "Elastic",
                            d(
                                "ElasticOut",
                                function(a) {
                                    return (
                                        this._p1 *
                                        Math.pow(2, -10 * a) *
                                        Math.sin((a - this._p3) * this._p2) +
                                        1
                                    );
                                },
                                0.3
                            ),
                            d(
                                "ElasticIn",
                                function(a) {
                                    return -(
                                        this._p1 *
                                        Math.pow(2, 10 * (a -= 1)) *
                                        Math.sin((a - this._p3) * this._p2)
                                    );
                                },
                                0.3
                            ),
                            d(
                                "ElasticInOut",
                                function(a) {
                                    return (a *= 2) < 1 ?
                                        -0.5 *
                                        (this._p1 *
                                            Math.pow(2, 10 * (a -= 1)) *
                                            Math.sin((a - this._p3) * this._p2)) :
                                        this._p1 *
                                        Math.pow(2, -10 * (a -= 1)) *
                                        Math.sin((a - this._p3) * this._p2) *
                                        0.5 +
                                        1;
                                },
                                0.45
                            )
                        ),
                        l(
                            "Expo",
                            j("ExpoOut", function(a) {
                                return 1 - Math.pow(2, -10 * a);
                            }),
                            j("ExpoIn", function(a) {
                                return Math.pow(2, 10 * (a - 1)) - 0.001;
                            }),
                            j("ExpoInOut", function(a) {
                                return (a *= 2) < 1 ?
                                    0.5 * Math.pow(2, 10 * (a - 1)) :
                                    0.5 * (2 - Math.pow(2, -10 * (a - 1)));
                            })
                        ),
                        l(
                            "Sine",
                            j("SineOut", function(a) {
                                return Math.sin(a * h);
                            }),
                            j("SineIn", function(a) {
                                return -Math.cos(a * h) + 1;
                            }),
                            j("SineInOut", function(a) {
                                return -0.5 * (Math.cos(Math.PI * a) - 1);
                            })
                        ),
                        i(
                            "easing.EaseLookup", {
                                find: function(b) {
                                    return a.map[b];
                                },
                            },
                            !0
                        ),
                        k(e.SlowMo, "SlowMo", "ease,"),
                        k(c, "RoughEase", "ease,"),
                        k(b, "SteppedEase", "ease,"),
                        o
                    );
                },
                !0
            );
    }),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    (function(a, b) {
        "use strict";
        var c = {},
            d = a.document,
            e = (a.GreenSockGlobals = a.GreenSockGlobals || a);
        if (!e.TweenLite) {
            var f,
                g,
                h,
                i,
                j,
                k = function(a) {
                    var b,
                        c = a.split("."),
                        d = e;
                    for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
                    return d;
                },
                l = k("com.greensock"),
                m = 1e-10,
                n = function(a) {
                    var b,
                        c = [],
                        d = a.length;
                    for (b = 0; b !== d; c.push(a[b++]));
                    return c;
                },
                o = function() {},
                p = (function() {
                    var a = Object.prototype.toString,
                        b = a.call([]);
                    return function(c) {
                        return (
                            null != c &&
                            (c instanceof Array ||
                                ("object" == typeof c && !!c.push && a.call(c) === b))
                        );
                    };
                })(),
                q = {},
                r = function(d, f, g, h) {
                    (this.sc = q[d] ? q[d].sc : []),
                    (q[d] = this),
                    (this.gsClass = null),
                    (this.func = g);
                    var i = [];
                    (this.check = function(j) {
                        for (var l, m, n, o, p = f.length, s = p; --p > -1;)
                            (l = q[f[p]] || new r(f[p], [])).gsClass ?
                            ((i[p] = l.gsClass), s--) :
                            j && l.sc.push(this);
                        if (0 === s && g) {
                            if (
                                ((m = ("com.greensock." + d).split(".")),
                                    (n = m.pop()),
                                    (o = k(m.join("."))[n] = this.gsClass = g.apply(g, i)),
                                    h)
                            )
                                if (
                                    ((e[n] = c[n] = o),
                                        "undefined" != typeof module && module.exports)
                                )
                                    if (d === b) {
                                        module.exports = c[b] = o;
                                        for (p in c) o[p] = c[p];
                                    } else c[b] && (c[b][n] = o);
                            else
                                "function" == typeof define &&
                                define.amd &&
                                define(
                                    (a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") +
                                    d.split(".").pop(),
                                    [],
                                    function() {
                                        return o;
                                    }
                                );
                            for (p = 0; p < this.sc.length; p++) this.sc[p].check();
                        }
                    }),
                    this.check(!0);
                },
                s = (a._gsDefine = function(a, b, c, d) {
                    return new r(a, b, c, d);
                }),
                t = (l._class = function(a, b, c) {
                    return (
                        (b = b || function() {}),
                        s(
                            a,
                            [],
                            function() {
                                return b;
                            },
                            c
                        ),
                        b
                    );
                });
            s.globals = e;
            var u = [0, 0, 1, 1],
                v = t(
                    "easing.Ease",
                    function(a, b, c, d) {
                        (this._func = a),
                        (this._type = c || 0),
                        (this._power = d || 0),
                        (this._params = b ? u.concat(b) : u);
                    },
                    !0
                ),
                w = (v.map = {}),
                x = (v.register = function(a, b, c, d) {
                    for (
                        var e,
                            f,
                            g,
                            h,
                            i = b.split(","),
                            j = i.length,
                            k = (c || "easeIn,easeOut,easeInOut").split(",");
                        --j > -1;

                    )
                        for (
                            f = i[j],
                            e = d ? t("easing." + f, null, !0) : l.easing[f] || {},
                            g = k.length;
                            --g > -1;

                        )
                            (h = k[g]),
                            (w[f + "." + h] =
                                w[h + f] =
                                e[h] =
                                a.getRatio ? a : a[h] || new a());
                });
            for (
                h = v.prototype,
                h._calcEnd = !1,
                h.getRatio = function(a) {
                    if (this._func)
                        return (
                            (this._params[0] = a), this._func.apply(null, this._params)
                        );
                    var b = this._type,
                        c = this._power,
                        d = 1 === b ? 1 - a : 2 === b ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
                    return (
                        1 === c ?
                        (d *= d) :
                        2 === c ?
                        (d *= d * d) :
                        3 === c ?
                        (d *= d * d * d) :
                        4 === c && (d *= d * d * d * d),
                        1 === b ? 1 - d : 2 === b ? d : 0.5 > a ? d / 2 : 1 - d / 2
                    );
                },
                f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
                g = f.length;
                --g > -1;

            )
                (h = f[g] + ",Power" + g),
                x(new v(null, null, 1, g), h, "easeOut", !0),
                x(
                    new v(null, null, 2, g),
                    h,
                    "easeIn" + (0 === g ? ",easeNone" : "")
                ),
                x(new v(null, null, 3, g), h, "easeInOut");
            (w.linear = l.easing.Linear.easeIn), (w.swing = l.easing.Quad.easeInOut);
            var y = t("events.EventDispatcher", function(a) {
                (this._listeners = {}), (this._eventTarget = a || this);
            });
            (h = y.prototype),
            (h.addEventListener = function(a, b, c, d, e) {
                e = e || 0;
                var f,
                    g,
                    h = this._listeners[a],
                    k = 0;
                for (
                    this !== i || j || i.wake(),
                    null == h && (this._listeners[a] = h = []),
                    g = h.length;
                    --g > -1;

                )
                    (f = h[g]),
                    f.c === b && f.s === c ?
                    h.splice(g, 1) :
                    0 === k && f.pr < e && (k = g + 1);
                h.splice(k, 0, {
                    c: b,
                    s: c,
                    up: d,
                    pr: e
                });
            }),
            (h.removeEventListener = function(a, b) {
                var c,
                    d = this._listeners[a];
                if (d)
                    for (c = d.length; --c > -1;)
                        if (d[c].c === b) return void d.splice(c, 1);
            }),
            (h.dispatchEvent = function(a) {
                var b,
                    c,
                    d,
                    e = this._listeners[a];
                if (e)
                    for (
                        b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget;
                        --b > -1;

                    )
                        (d = e[b]),
                        d &&
                        (d.up ?
                            d.c.call(d.s || c, {
                                type: a,
                                target: c
                            }) :
                            d.c.call(d.s || c));
            });
            var z = a.requestAnimationFrame,
                A = a.cancelAnimationFrame,
                B =
                Date.now ||
                function() {
                    return new Date().getTime();
                },
                C = B();
            for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z;)
                (z = a[f[g] + "RequestAnimationFrame"]),
                (A =
                    a[f[g] + "CancelAnimationFrame"] ||
                    a[f[g] + "CancelRequestAnimationFrame"]);
            t("Ticker", function(a, b) {
                    var c,
                        e,
                        f,
                        g,
                        h,
                        k = this,
                        l = B(),
                        n = b !== !1 && z ? "auto" : !1,
                        p = 500,
                        q = 33,
                        r = "tick",
                        s = function(a) {
                            var b,
                                d,
                                i = B() - C;
                            i > p && (l += i - q),
                                (C += i),
                                (k.time = (C - l) / 1e3),
                                (b = k.time - h),
                                (!c || b > 0 || a === !0) &&
                                (k.frame++, (h += b + (b >= g ? 0.004 : g - b)), (d = !0)),
                                a !== !0 && (f = e(s)),
                                d && k.dispatchEvent(r);
                        };
                    y.call(k),
                        (k.time = k.frame = 0),
                        (k.tick = function() {
                            s(!0);
                        }),
                        (k.lagSmoothing = function(a, b) {
                            (p = a || 1 / m), (q = Math.min(b, p, 0));
                        }),
                        (k.sleep = function() {
                            null != f &&
                                (n && A ? A(f) : clearTimeout(f),
                                    (e = o),
                                    (f = null),
                                    k === i && (j = !1));
                        }),
                        (k.wake = function(a) {
                            null !== f ?
                                k.sleep() :
                                a ?
                                (l += -C + (C = B())) :
                                k.frame > 10 && (C = B() - p + 5),
                                (e =
                                    0 === c ?
                                    o :
                                    n && z ?
                                    z :
                                    function(a) {
                                        return setTimeout(a, (1e3 * (h - k.time) + 1) | 0);
                                    }),
                                k === i && (j = !0),
                                s(2);
                        }),
                        (k.fps = function(a) {
                            return arguments.length ?
                                ((c = a),
                                    (g = 1 / (c || 60)),
                                    (h = this.time + g),
                                    void k.wake()) :
                                c;
                        }),
                        (k.useRAF = function(a) {
                            return arguments.length ? (k.sleep(), (n = a), void k.fps(c)) : n;
                        }),
                        k.fps(a),
                        setTimeout(function() {
                            "auto" === n &&
                                k.frame < 5 &&
                                "hidden" !== d.visibilityState &&
                                k.useRAF(!1);
                        }, 1500);
                }),
                (h = l.Ticker.prototype = new l.events.EventDispatcher()),
                (h.constructor = l.Ticker);
            var D = t("core.Animation", function(a, b) {
                if (
                    ((this.vars = b = b || {}),
                        (this._duration = this._totalDuration = a || 0),
                        (this._delay = Number(b.delay) || 0),
                        (this._timeScale = 1),
                        (this._active = b.immediateRender === !0),
                        (this.data = b.data),
                        (this._reversed = b.reversed === !0),
                        X)
                ) {
                    j || i.wake();
                    var c = this.vars.useFrames ? W : X;
                    c.add(this, c._time), this.vars.paused && this.paused(!0);
                }
            });
            (i = D.ticker = new l.Ticker()),
            (h = D.prototype),
            (h._dirty = h._gc = h._initted = h._paused = !1),
            (h._totalTime = h._time = 0),
            (h._rawPrevTime = -1),
            (h._next = h._last = h._onUpdate = h._timeline = h.timeline = null),
            (h._paused = !1);
            var E = function() {
                j && B() - C > 2e3 && "hidden" !== d.visibilityState && i.wake();
                var a = setTimeout(E, 2e3);
                a.unref && a.unref();
            };
            E(),
                (h.play = function(a, b) {
                    return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
                }),
                (h.pause = function(a, b) {
                    return null != a && this.seek(a, b), this.paused(!0);
                }),
                (h.resume = function(a, b) {
                    return null != a && this.seek(a, b), this.paused(!1);
                }),
                (h.seek = function(a, b) {
                    return this.totalTime(Number(a), b !== !1);
                }),
                (h.restart = function(a, b) {
                    return this.reversed(!1)
                        .paused(!1)
                        .totalTime(a ? -this._delay : 0, b !== !1, !0);
                }),
                (h.reverse = function(a, b) {
                    return (
                        null != a && this.seek(a || this.totalDuration(), b),
                        this.reversed(!0).paused(!1)
                    );
                }),
                (h.render = function(a, b, c) {}),
                (h.invalidate = function() {
                    return (
                        (this._time = this._totalTime = 0),
                        (this._initted = this._gc = !1),
                        (this._rawPrevTime = -1),
                        (this._gc || !this.timeline) && this._enabled(!0),
                        this
                    );
                }),
                (h.isActive = function() {
                    var a,
                        b = this._timeline,
                        c = this._startTime;
                    return (
                        !b ||
                        (!this._gc &&
                            !this._paused &&
                            b.isActive() &&
                            (a = b.rawTime(!0)) >= c &&
                            a < c + this.totalDuration() / this._timeScale - 1e-7)
                    );
                }),
                (h._enabled = function(a, b) {
                    return (
                        j || i.wake(),
                        (this._gc = !a),
                        (this._active = this.isActive()),
                        b !== !0 &&
                        (a && !this.timeline ?
                            this._timeline.add(this, this._startTime - this._delay) :
                            !a && this.timeline && this._timeline._remove(this, !0)),
                        !1
                    );
                }),
                (h._kill = function(a, b) {
                    return this._enabled(!1, !1);
                }),
                (h.kill = function(a, b) {
                    return this._kill(a, b), this;
                }),
                (h._uncache = function(a) {
                    for (var b = a ? this : this.timeline; b;)
                        (b._dirty = !0), (b = b.timeline);
                    return this;
                }),
                (h._swapSelfInParams = function(a) {
                    for (var b = a.length, c = a.concat(); --b > -1;)
                        "{self}" === a[b] && (c[b] = this);
                    return c;
                }),
                (h._callback = function(a) {
                    var b = this.vars,
                        c = b[a],
                        d = b[a + "Params"],
                        e = b[a + "Scope"] || b.callbackScope || this,
                        f = d ? d.length : 0;
                    switch (f) {
                        case 0:
                            c.call(e);
                            break;
                        case 1:
                            c.call(e, d[0]);
                            break;
                        case 2:
                            c.call(e, d[0], d[1]);
                            break;
                        default:
                            c.apply(e, d);
                    }
                }),
                (h.eventCallback = function(a, b, c, d) {
                    if ("on" === (a || "").substr(0, 2)) {
                        var e = this.vars;
                        if (1 === arguments.length) return e[a];
                        null == b ?
                            delete e[a] :
                            ((e[a] = b),
                                (e[a + "Params"] =
                                    p(c) && -1 !== c.join("").indexOf("{self}") ?
                                    this._swapSelfInParams(c) :
                                    c),
                                (e[a + "Scope"] = d)),
                            "onUpdate" === a && (this._onUpdate = b);
                    }
                    return this;
                }),
                (h.delay = function(a) {
                    return arguments.length ?
                        (this._timeline.smoothChildTiming &&
                            this.startTime(this._startTime + a - this._delay),
                            (this._delay = a),
                            this) :
                        this._delay;
                }),
                (h.duration = function(a) {
                    return arguments.length ?
                        ((this._duration = this._totalDuration = a),
                            this._uncache(!0),
                            this._timeline.smoothChildTiming &&
                            this._time > 0 &&
                            this._time < this._duration &&
                            0 !== a &&
                            this.totalTime(this._totalTime * (a / this._duration), !0),
                            this) :
                        ((this._dirty = !1), this._duration);
                }),
                (h.totalDuration = function(a) {
                    return (
                        (this._dirty = !1),
                        arguments.length ? this.duration(a) : this._totalDuration
                    );
                }),
                (h.time = function(a, b) {
                    return arguments.length ?
                        (this._dirty && this.totalDuration(),
                            this.totalTime(a > this._duration ? this._duration : a, b)) :
                        this._time;
                }),
                (h.totalTime = function(a, b, c) {
                    if ((j || i.wake(), !arguments.length)) return this._totalTime;
                    if (this._timeline) {
                        if (
                            (0 > a && !c && (a += this.totalDuration()),
                                this._timeline.smoothChildTiming)
                        ) {
                            this._dirty && this.totalDuration();
                            var d = this._totalDuration,
                                e = this._timeline;
                            if (
                                (a > d && !c && (a = d),
                                    (this._startTime =
                                        (this._paused ? this._pauseTime : e._time) -
                                        (this._reversed ? d - a : a) / this._timeScale),
                                    e._dirty || this._uncache(!1),
                                    e._timeline)
                            )
                                for (; e._timeline;)
                                    e._timeline._time !==
                                    (e._startTime + e._totalTime) / e._timeScale &&
                                    e.totalTime(e._totalTime, !0),
                                    (e = e._timeline);
                        }
                        this._gc && this._enabled(!0, !1),
                            (this._totalTime !== a || 0 === this._duration) &&
                            (J.length && Z(), this.render(a, b, !1), J.length && Z());
                    }
                    return this;
                }),
                (h.progress = h.totalProgress =
                    function(a, b) {
                        var c = this.duration();
                        return arguments.length ?
                            this.totalTime(c * a, b) :
                            c ?
                            this._time / c :
                            this.ratio;
                    }),
                (h.startTime = function(a) {
                    return arguments.length ?
                        (a !== this._startTime &&
                            ((this._startTime = a),
                                this.timeline &&
                                this.timeline._sortChildren &&
                                this.timeline.add(this, a - this._delay)),
                            this) :
                        this._startTime;
                }),
                (h.endTime = function(a) {
                    return (
                        this._startTime +
                        (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
                    );
                }),
                (h.timeScale = function(a) {
                    if (!arguments.length) return this._timeScale;
                    if (
                        ((a = a || m), this._timeline && this._timeline.smoothChildTiming)
                    ) {
                        var b = this._pauseTime,
                            c = b || 0 === b ? b : this._timeline.totalTime();
                        this._startTime = c - ((c - this._startTime) * this._timeScale) / a;
                    }
                    return (this._timeScale = a), this._uncache(!1);
                }),
                (h.reversed = function(a) {
                    return arguments.length ?
                        (a != this._reversed &&
                            ((this._reversed = a),
                                this.totalTime(
                                    this._timeline && !this._timeline.smoothChildTiming ?
                                    this.totalDuration() - this._totalTime :
                                    this._totalTime,
                                    !0
                                )),
                            this) :
                        this._reversed;
                }),
                (h.paused = function(a) {
                    if (!arguments.length) return this._paused;
                    var b,
                        c,
                        d = this._timeline;
                    return (
                        a != this._paused &&
                        d &&
                        (j || a || i.wake(),
                            (b = d.rawTime()),
                            (c = b - this._pauseTime),
                            !a &&
                            d.smoothChildTiming &&
                            ((this._startTime += c), this._uncache(!1)),
                            (this._pauseTime = a ? b : null),
                            (this._paused = a),
                            (this._active = this.isActive()),
                            !a &&
                            0 !== c &&
                            this._initted &&
                            this.duration() &&
                            ((b = d.smoothChildTiming ?
                                    this._totalTime :
                                    (b - this._startTime) / this._timeScale),
                                this.render(b, b === this._totalTime, !0))),
                        this._gc && !a && this._enabled(!0, !1),
                        this
                    );
                });
            var F = t("core.SimpleTimeline", function(a) {
                D.call(this, 0, a),
                    (this.autoRemoveChildren = this.smoothChildTiming = !0);
            });
            (h = F.prototype = new D()),
            (h.constructor = F),
            (h.kill()._gc = !1),
            (h._first = h._last = h._recent = null),
            (h._sortChildren = !1),
            (h.add = h.insert =
                function(a, b, c, d) {
                    var e, f;
                    if (
                        ((a._startTime = Number(b || 0) + a._delay),
                            a._paused &&
                            this !== a._timeline &&
                            (a._pauseTime =
                                a._startTime +
                                (this.rawTime() - a._startTime) / a._timeScale),
                            a.timeline && a.timeline._remove(a, !0),
                            (a.timeline = a._timeline = this),
                            a._gc && a._enabled(!0, !0),
                            (e = this._last),
                            this._sortChildren)
                    )
                        for (f = a._startTime; e && e._startTime > f;) e = e._prev;
                    return (
                        e ?
                        ((a._next = e._next), (e._next = a)) :
                        ((a._next = this._first), (this._first = a)),
                        a._next ? (a._next._prev = a) : (this._last = a),
                        (a._prev = e),
                        (this._recent = a),
                        this._timeline && this._uncache(!0),
                        this
                    );
                }),
            (h._remove = function(a, b) {
                return (
                    a.timeline === this &&
                    (b || a._enabled(!1, !0),
                        a._prev ?
                        (a._prev._next = a._next) :
                        this._first === a && (this._first = a._next),
                        a._next ?
                        (a._next._prev = a._prev) :
                        this._last === a && (this._last = a._prev),
                        (a._next = a._prev = a.timeline = null),
                        a === this._recent && (this._recent = this._last),
                        this._timeline && this._uncache(!0)),
                    this
                );
            }),
            (h.render = function(a, b, c) {
                var d,
                    e = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = a; e;)
                    (d = e._next),
                    (e._active || (a >= e._startTime && !e._paused && !e._gc)) &&
                    (e._reversed ?
                        e.render(
                            (e._dirty ? e.totalDuration() : e._totalDuration) -
                            (a - e._startTime) * e._timeScale,
                            b,
                            c
                        ) :
                        e.render((a - e._startTime) * e._timeScale, b, c)),
                    (e = d);
            }),
            (h.rawTime = function() {
                return j || i.wake(), this._totalTime;
            });
            var G = t(
                    "TweenLite",
                    function(b, c, d) {
                        if (
                            (D.call(this, c, d),
                                (this.render = G.prototype.render),
                                null == b)
                        )
                            throw "Cannot tween a null target.";
                        this.target = b = "string" != typeof b ? b : G.selector(b) || b;
                        var e,
                            f,
                            g,
                            h =
                            b.jquery ||
                            (b.length &&
                                b !== a &&
                                b[0] &&
                                (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))),
                            i = this.vars.overwrite;
                        if (
                            ((this._overwrite = i =
                                    null == i ?
                                    V[G.defaultOverwrite] :
                                    "number" == typeof i ?
                                    i >> 0 :
                                    V[i]),
                                (h || b instanceof Array || (b.push && p(b))) &&
                                "number" != typeof b[0])
                        )
                            for (
                                this._targets = g = n(b),
                                this._propLookup = [],
                                this._siblings = [],
                                e = 0; e < g.length; e++
                            )
                                (f = g[e]),
                                f ?
                                "string" != typeof f ?
                                f.length &&
                                f !== a &&
                                f[0] &&
                                (f[0] === a ||
                                    (f[0].nodeType && f[0].style && !f.nodeType)) ?
                                (g.splice(e--, 1),
                                    (this._targets = g = g.concat(n(f)))) :
                                ((this._siblings[e] = $(f, this, !1)),
                                    1 === i &&
                                    this._siblings[e].length > 1 &&
                                    aa(f, this, null, 1, this._siblings[e])) :
                                ((f = g[e--] = G.selector(f)),
                                    "string" == typeof f && g.splice(e + 1, 1)) :
                                g.splice(e--, 1);
                        else
                            (this._propLookup = {}),
                            (this._siblings = $(b, this, !1)),
                            1 === i &&
                            this._siblings.length > 1 &&
                            aa(b, this, null, 1, this._siblings);
                        (this.vars.immediateRender ||
                            (0 === c &&
                                0 === this._delay &&
                                this.vars.immediateRender !== !1)) &&
                        ((this._time = -m), this.render(Math.min(0, -this._delay)));
                    },
                    !0
                ),
                H = function(b) {
                    return (
                        b &&
                        b.length &&
                        b !== a &&
                        b[0] &&
                        (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))
                    );
                },
                I = function(a, b) {
                    var c,
                        d = {};
                    for (c in a)
                        U[c] ||
                        (c in b &&
                            "transform" !== c &&
                            "x" !== c &&
                            "y" !== c &&
                            "width" !== c &&
                            "height" !== c &&
                            "className" !== c &&
                            "border" !== c) ||
                        !(!R[c] || (R[c] && R[c]._autoCSS)) ||
                        ((d[c] = a[c]), delete a[c]);
                    a.css = d;
                };
            (h = G.prototype = new D()),
            (h.constructor = G),
            (h.kill()._gc = !1),
            (h.ratio = 0),
            (h._firstPT = h._targets = h._overwrittenProps = h._startAt = null),
            (h._notifyPluginsOfEnabled = h._lazy = !1),
            (G.version = "1.20.2"),
            (G.defaultEase = h._ease = new v(null, null, 1, 1)),
            (G.defaultOverwrite = "auto"),
            (G.ticker = i),
            (G.autoSleep = 120),
            (G.lagSmoothing = function(a, b) {
                i.lagSmoothing(a, b);
            }),
            (G.selector =
                a.$ ||
                a.jQuery ||
                function(b) {
                    var c = a.$ || a.jQuery;
                    return c ?
                        ((G.selector = c), c(b)) :
                        "undefined" == typeof d ?
                        b :
                        d.querySelectorAll ?
                        d.querySelectorAll(b) :
                        d.getElementById("#" === b.charAt(0) ? b.substr(1) : b);
                });
            var J = [],
                K = {},
                L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                M = /[\+-]=-?[\.\d]/,
                N = function(a) {
                    for (var b, c = this._firstPT, d = 1e-6; c;)
                        (b = c.blob ?
                            1 === a && this.end ?
                            this.end :
                            a ?
                            this.join("") :
                            this.start :
                            c.c * a + c.s),
                        c.m ?
                        (b = c.m(b, this._target || c.t)) :
                        d > b && b > -d && !c.blob && (b = 0),
                        c.f ? (c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b)) : (c.t[c.p] = b),
                        (c = c._next);
                },
                O = function(a, b, c, d) {
                    var e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k,
                        l = [],
                        m = 0,
                        n = "",
                        o = 0;
                    for (
                        l.start = a,
                        l.end = b,
                        a = l[0] = a + "",
                        b = l[1] = b + "",
                        c && (c(l), (a = l[0]), (b = l[1])),
                        l.length = 0,
                        e = a.match(L) || [],
                        f = b.match(L) || [],
                        d &&
                        ((d._next = null), (d.blob = 1), (l._firstPT = l._applyPT = d)),
                        i = f.length,
                        h = 0; i > h; h++
                    )
                        (k = f[h]),
                        (j = b.substr(m, b.indexOf(k, m) - m)),
                        (n += j || !h ? j : ","),
                        (m += j.length),
                        o ? (o = (o + 1) % 5) : "rgba(" === j.substr(-5) && (o = 1),
                        k === e[h] || e.length <= h ?
                        (n += k) :
                        (n && (l.push(n), (n = "")),
                            (g = parseFloat(e[h])),
                            l.push(g),
                            (l._firstPT = {
                                _next: l._firstPT,
                                t: l,
                                p: l.length - 1,
                                s: g,
                                c: ("=" === k.charAt(1) ?
                                    parseInt(k.charAt(0) + "1", 10) *
                                    parseFloat(k.substr(2)) :
                                    parseFloat(k) - g) || 0,
                                f: 0,
                                m: o && 4 > o ? Math.round : 0,
                            })),
                        (m += k.length);
                    return (
                        (n += b.substr(m)),
                        n && l.push(n),
                        (l.setRatio = N),
                        M.test(b) && (l.end = 0),
                        l
                    );
                },
                P = function(a, b, c, d, e, f, g, h, i) {
                    "function" == typeof d && (d = d(i || 0, a));
                    var j,
                        k = typeof a[b],
                        l =
                        "function" !== k ?
                        "" :
                        b.indexOf("set") ||
                        "function" != typeof a["get" + b.substr(3)] ?
                        b :
                        "get" + b.substr(3),
                        m = "get" !== c ? c : l ? (g ? a[l](g) : a[l]()) : a[b],
                        n = "string" == typeof d && "=" === d.charAt(1),
                        o = {
                            t: a,
                            p: b,
                            s: m,
                            f: "function" === k,
                            pg: 0,
                            n: e || b,
                            m: f ? ("function" == typeof f ? f : Math.round) : 0,
                            pr: 0,
                            c: n ?
                                parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) :
                                parseFloat(d) - m || 0,
                        };
                    return (
                        ("number" != typeof m || ("number" != typeof d && !n)) &&
                        (g ||
                            isNaN(m) ||
                            (!n && isNaN(d)) ||
                            "boolean" == typeof m ||
                            "boolean" == typeof d ?
                            ((o.fp = g),
                                (j = O(
                                    m,
                                    n ? parseFloat(o.s) + o.c : d,
                                    h || G.defaultStringFilter,
                                    o
                                )),
                                (o = {
                                    t: j,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: e || b,
                                    pr: 0,
                                    m: 0,
                                })) :
                            ((o.s = parseFloat(m)),
                                n || (o.c = parseFloat(d) - o.s || 0))),
                        o.c ?
                        ((o._next = this._firstPT) && (o._next._prev = o),
                            (this._firstPT = o),
                            o) :
                        void 0
                    );
                },
                Q = (G._internals = {
                    isArray: p,
                    isSelector: H,
                    lazyTweens: J,
                    blobDif: O,
                }),
                R = (G._plugins = {}),
                S = (Q.tweenLookup = {}),
                T = 0,
                U = (Q.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1,
                }),
                V = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0,
                },
                W = (D._rootFramesTimeline = new F()),
                X = (D._rootTimeline = new F()),
                Y = 30,
                Z = (Q.lazyRender = function() {
                    var a,
                        b = J.length;
                    for (K = {}; --b > -1;)
                        (a = J[b]),
                        a &&
                        a._lazy !== !1 &&
                        (a.render(a._lazy[0], a._lazy[1], !0), (a._lazy = !1));
                    J.length = 0;
                });
            (X._startTime = i.time),
            (W._startTime = i.frame),
            (X._active = W._active = !0),
            setTimeout(Z, 1),
                (D._updateRoot = G.render =
                    function() {
                        var a, b, c;
                        if (
                            (J.length && Z(),
                                X.render((i.time - X._startTime) * X._timeScale, !1, !1),
                                W.render((i.frame - W._startTime) * W._timeScale, !1, !1),
                                J.length && Z(),
                                i.frame >= Y)
                        ) {
                            Y = i.frame + (parseInt(G.autoSleep, 10) || 120);
                            for (c in S) {
                                for (b = S[c].tweens, a = b.length; --a > -1;)
                                    b[a]._gc && b.splice(a, 1);
                                0 === b.length && delete S[c];
                            }
                            if (
                                ((c = X._first),
                                    (!c || c._paused) &&
                                    G.autoSleep &&
                                    !W._first &&
                                    1 === i._listeners.tick.length)
                            ) {
                                for (; c && c._paused;) c = c._next;
                                c || i.sleep();
                            }
                        }
                    }),
                i.addEventListener("tick", D._updateRoot);
            var $ = function(a, b, c) {
                    var d,
                        e,
                        f = a._gsTweenID;
                    if (
                        (S[f || (a._gsTweenID = f = "t" + T++)] ||
                            (S[f] = {
                                target: a,
                                tweens: []
                            }),
                            b && ((d = S[f].tweens), (d[(e = d.length)] = b), c))
                    )
                        for (; --e > -1;) d[e] === b && d.splice(e, 1);
                    return S[f].tweens;
                },
                _ = function(a, b, c, d) {
                    var e,
                        f,
                        g = a.vars.onOverwrite;
                    return (
                        g && (e = g(a, b, c, d)),
                        (g = G.onOverwrite),
                        g && (f = g(a, b, c, d)),
                        e !== !1 && f !== !1
                    );
                },
                aa = function(a, b, c, d, e) {
                    var f, g, h, i;
                    if (1 === d || d >= 4) {
                        for (i = e.length, f = 0; i > f; f++)
                            if ((h = e[f]) !== b) h._gc || (h._kill(null, a, b) && (g = !0));
                            else if (5 === d) break;
                        return g;
                    }
                    var j,
                        k = b._startTime + m,
                        l = [],
                        n = 0,
                        o = 0 === b._duration;
                    for (f = e.length; --f > -1;)
                        (h = e[f]) === b ||
                        h._gc ||
                        h._paused ||
                        (h._timeline !== b._timeline ?
                            ((j = j || ba(b, 0, o)), 0 === ba(h, j, o) && (l[n++] = h)) :
                            h._startTime <= k &&
                            h._startTime + h.totalDuration() / h._timeScale > k &&
                            (((o || !h._initted) && k - h._startTime <= 2e-10) ||
                                (l[n++] = h)));
                    for (f = n; --f > -1;)
                        if (
                            ((h = l[f]),
                                2 === d && h._kill(c, a, b) && (g = !0),
                                2 !== d || (!h._firstPT && h._initted))
                        ) {
                            if (2 !== d && !_(h, b)) continue;
                            h._enabled(!1, !1) && (g = !0);
                        }
                    return g;
                },
                ba = function(a, b, c) {
                    for (
                        var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;

                    ) {
                        if (((f += d._startTime), (e *= d._timeScale), d._paused))
                            return -100;
                        d = d._timeline;
                    }
                    return (
                        (f /= e),
                        f > b ?
                        f - b :
                        (c && f === b) || (!a._initted && 2 * m > f - b) ?
                        m :
                        (f += a.totalDuration() / a._timeScale / e) > b + m ?
                        0 :
                        f - b - m
                    );
                };
            (h._init = function() {
                var a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g = this.vars,
                    h = this._overwrittenProps,
                    i = this._duration,
                    j = !!g.immediateRender,
                    k = g.ease;
                if (g.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()),
                        (e = {});
                    for (d in g.startAt) e[d] = g.startAt[d];
                    if (
                        ((e.overwrite = !1),
                            (e.immediateRender = !0),
                            (e.lazy = j && g.lazy !== !1),
                            (e.startAt = e.delay = null),
                            (e.onUpdate = g.onUpdate),
                            (e.onUpdateScope = g.onUpdateScope || g.callbackScope || this),
                            (this._startAt = G.to(this.target, 0, e)),
                            j)
                    )
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== i) return;
                } else if (g.runBackwards && 0 !== i)
                    if (this._startAt)
                        this._startAt.render(-1, !0),
                        this._startAt.kill(),
                        (this._startAt = null);
                    else {
                        0 !== this._time && (j = !1), (c = {});
                        for (d in g)(U[d] && "autoCSS" !== d) || (c[d] = g[d]);
                        if (
                            ((c.overwrite = 0),
                                (c.data = "isFromStart"),
                                (c.lazy = j && g.lazy !== !1),
                                (c.immediateRender = j),
                                (this._startAt = G.to(this.target, 0, c)),
                                j)
                        ) {
                            if (0 === this._time) return;
                        } else
                            this._startAt._init(),
                            this._startAt._enabled(!1),
                            this.vars.immediateRender && (this._startAt = null);
                    }
                if (
                    ((this._ease = k =
                            k ?
                            k instanceof v ?
                            k :
                            "function" == typeof k ?
                            new v(k, g.easeParams) :
                            w[k] || G.defaultEase :
                            G.defaultEase),
                        g.easeParams instanceof Array &&
                        k.config &&
                        (this._ease = k.config.apply(k, g.easeParams)),
                        (this._easeType = this._ease._type),
                        (this._easePower = this._ease._power),
                        (this._firstPT = null),
                        this._targets)
                )
                    for (f = this._targets.length, a = 0; f > a; a++)
                        this._initProps(
                            this._targets[a],
                            (this._propLookup[a] = {}),
                            this._siblings[a],
                            h ? h[a] : null,
                            a
                        ) && (b = !0);
                else
                    b = this._initProps(
                        this.target,
                        this._propLookup,
                        this._siblings,
                        h,
                        0
                    );
                if (
                    (b && G._onPluginEvent("_onInitAllProps", this),
                        h &&
                        (this._firstPT ||
                            ("function" != typeof this.target && this._enabled(!1, !1))),
                        g.runBackwards)
                )
                    for (c = this._firstPT; c;)
                        (c.s += c.c), (c.c = -c.c), (c = c._next);
                (this._onUpdate = g.onUpdate), (this._initted = !0);
            }),
            (h._initProps = function(b, c, d, e, f) {
                var g, h, i, j, k, l;
                if (null == b) return !1;
                K[b._gsTweenID] && Z(),
                    this.vars.css ||
                    (b.style &&
                        b !== a &&
                        b.nodeType &&
                        R.css &&
                        this.vars.autoCSS !== !1 &&
                        I(this.vars, b));
                for (g in this.vars)
                    if (((l = this.vars[g]), U[g]))
                        l &&
                        (l instanceof Array || (l.push && p(l))) &&
                        -1 !== l.join("").indexOf("{self}") &&
                        (this.vars[g] = l = this._swapSelfInParams(l, this));
                    else if (
                    R[g] &&
                    (j = new R[g]())._onInitTween(b, this.vars[g], this, f)
                ) {
                    for (
                        this._firstPT = k = {
                            _next: this._firstPT,
                            t: j,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: g,
                            pg: 1,
                            pr: j._priority,
                            m: 0,
                        },
                        h = j._overwriteProps.length;
                        --h > -1;

                    )
                        c[j._overwriteProps[h]] = this._firstPT;
                    (j._priority || j._onInitAllProps) && (i = !0),
                    (j._onDisable || j._onEnable) &&
                    (this._notifyPluginsOfEnabled = !0),
                    k._next && (k._next._prev = k);
                } else
                    c[g] = P.call(
                        this,
                        b,
                        g,
                        "get",
                        l,
                        g,
                        0,
                        null,
                        this.vars.stringFilter,
                        f
                    );
                return e && this._kill(e, b) ?
                    this._initProps(b, c, d, e, f) :
                    this._overwrite > 1 &&
                    this._firstPT &&
                    d.length > 1 &&
                    aa(b, this, c, this._overwrite, d) ?
                    (this._kill(c, b), this._initProps(b, c, d, e, f)) :
                    (this._firstPT &&
                        ((this.vars.lazy !== !1 && this._duration) ||
                            (this.vars.lazy && !this._duration)) &&
                        (K[b._gsTweenID] = !0),
                        i);
            }),
            (h.render = function(a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h = this._time,
                    i = this._duration,
                    j = this._rawPrevTime;
                if (a >= i - 1e-7 && a >= 0)
                    (this._totalTime = this._time = i),
                    (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                    this._reversed ||
                    ((d = !0),
                        (e = "onComplete"),
                        (c = c || this._timeline.autoRemoveChildren)),
                    0 === i &&
                    (this._initted || !this.vars.lazy || c) &&
                    (this._startTime === this._timeline._duration && (a = 0),
                        (0 > j ||
                            (0 >= a && a >= -1e-7) ||
                            (j === m && "isPause" !== this.data)) &&
                        j !== a &&
                        ((c = !0), j > m && (e = "onReverseComplete")),
                        (this._rawPrevTime = g = !b || a || j === a ? a : m));
                else if (1e-7 > a)
                    (this._totalTime = this._time = 0),
                    (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                    (0 !== h || (0 === i && j > 0)) &&
                    ((e = "onReverseComplete"), (d = this._reversed)),
                    0 > a &&
                    ((this._active = !1),
                        0 === i &&
                        (this._initted || !this.vars.lazy || c) &&
                        (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0),
                            (this._rawPrevTime = g = !b || a || j === a ? a : m))),
                    (!this._initted || (this._startAt && this._startAt.progress())) &&
                    (c = !0);
                else if (((this._totalTime = this._time = a), this._easeType)) {
                    var k = a / i,
                        l = this._easeType,
                        n = this._easePower;
                    (1 === l || (3 === l && k >= 0.5)) && (k = 1 - k),
                    3 === l && (k *= 2),
                        1 === n ?
                        (k *= k) :
                        2 === n ?
                        (k *= k * k) :
                        3 === n ?
                        (k *= k * k * k) :
                        4 === n && (k *= k * k * k * k),
                        1 === l ?
                        (this.ratio = 1 - k) :
                        2 === l ?
                        (this.ratio = k) :
                        0.5 > a / i ?
                        (this.ratio = k / 2) :
                        (this.ratio = 1 - k / 2);
                } else this.ratio = this._ease.getRatio(a / i);
                if (this._time !== h || c) {
                    if (!this._initted) {
                        if ((this._init(), !this._initted || this._gc)) return;
                        if (
                            !c &&
                            this._firstPT &&
                            ((this.vars.lazy !== !1 && this._duration) ||
                                (this.vars.lazy && !this._duration))
                        )
                            return (
                                (this._time = this._totalTime = h),
                                (this._rawPrevTime = j),
                                J.push(this),
                                void(this._lazy = [a, b])
                            );
                        this._time && !d ?
                            (this.ratio = this._ease.getRatio(this._time / i)) :
                            d &&
                            this._ease._calcEnd &&
                            (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                    }
                    for (
                        this._lazy !== !1 && (this._lazy = !1),
                        this._active ||
                        (!this._paused &&
                            this._time !== h &&
                            a >= 0 &&
                            (this._active = !0)),
                        0 === h &&
                        (this._startAt &&
                            (a >= 0 ?
                                this._startAt.render(a, b, c) :
                                e || (e = "_dummyGS")),
                            this.vars.onStart &&
                            (0 !== this._time || 0 === i) &&
                            (b || this._callback("onStart"))),
                        f = this._firstPT; f;

                    )
                        f.f ?
                        f.t[f.p](f.c * this.ratio + f.s) :
                        (f.t[f.p] = f.c * this.ratio + f.s),
                        (f = f._next);
                    this._onUpdate &&
                        (0 > a &&
                            this._startAt &&
                            a !== -1e-4 &&
                            this._startAt.render(a, b, c),
                            b ||
                            ((this._time !== h || d || c) && this._callback("onUpdate"))),
                        e &&
                        (!this._gc || c) &&
                        (0 > a &&
                            this._startAt &&
                            !this._onUpdate &&
                            a !== -1e-4 &&
                            this._startAt.render(a, b, c),
                            d &&
                            (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                                (this._active = !1)),
                            !b && this.vars[e] && this._callback(e),
                            0 === i &&
                            this._rawPrevTime === m &&
                            g !== m &&
                            (this._rawPrevTime = 0));
                }
            }),
            (h._kill = function(a, b, c) {
                if (
                    ("all" === a && (a = null),
                        null == a && (null == b || b === this.target))
                )
                    return (this._lazy = !1), this._enabled(!1, !1);
                b =
                    "string" != typeof b ?
                    b || this._targets || this.target :
                    G.selector(b) || b;
                var d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m =
                    c &&
                    this._time &&
                    c._startTime === this._startTime &&
                    this._timeline === c._timeline;
                if ((p(b) || H(b)) && "number" != typeof b[0])
                    for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
                else {
                    if (this._targets) {
                        for (d = this._targets.length; --d > -1;)
                            if (b === this._targets[d]) {
                                (h = this._propLookup[d] || {}),
                                (this._overwrittenProps = this._overwrittenProps || []),
                                (e = this._overwrittenProps[d] =
                                    a ? this._overwrittenProps[d] || {} : "all");
                                break;
                            }
                    } else {
                        if (b !== this.target) return !1;
                        (h = this._propLookup),
                        (e = this._overwrittenProps =
                            a ? this._overwrittenProps || {} : "all");
                    }
                    if (h) {
                        if (
                            ((j = a || h),
                                (k =
                                    a !== e &&
                                    "all" !== e &&
                                    a !== h &&
                                    ("object" != typeof a || !a._tempKill)),
                                c && (G.onOverwrite || this.vars.onOverwrite))
                        ) {
                            for (f in j) h[f] && (l || (l = []), l.push(f));
                            if ((l || !a) && !_(this, c, b, l)) return !1;
                        }
                        for (f in j)
                            (g = h[f]) &&
                            (m && (g.f ? g.t[g.p](g.s) : (g.t[g.p] = g.s), (i = !0)),
                                g.pg && g.t._kill(j) && (i = !0),
                                (g.pg && 0 !== g.t._overwriteProps.length) ||
                                (g._prev ?
                                    (g._prev._next = g._next) :
                                    g === this._firstPT && (this._firstPT = g._next),
                                    g._next && (g._next._prev = g._prev),
                                    (g._next = g._prev = null)),
                                delete h[f]),
                            k && (e[f] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1);
                    }
                }
                return i;
            }),
            (h.invalidate = function() {
                return (
                    this._notifyPluginsOfEnabled &&
                    G._onPluginEvent("_onDisable", this),
                    (this._firstPT =
                        this._overwrittenProps =
                        this._startAt =
                        this._onUpdate =
                        null),
                    (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                    (this._propLookup = this._targets ? {} : []),
                    D.prototype.invalidate.call(this),
                    this.vars.immediateRender &&
                    ((this._time = -m), this.render(Math.min(0, -this._delay))),
                    this
                );
            }),
            (h._enabled = function(a, b) {
                if ((j || i.wake(), a && this._gc)) {
                    var c,
                        d = this._targets;
                    if (d)
                        for (c = d.length; --c > -1;)
                            this._siblings[c] = $(d[c], this, !0);
                    else this._siblings = $(this.target, this, !0);
                }
                return (
                    D.prototype._enabled.call(this, a, b),
                    this._notifyPluginsOfEnabled && this._firstPT ?
                    G._onPluginEvent(a ? "_onEnable" : "_onDisable", this) :
                    !1
                );
            }),
            (G.to = function(a, b, c) {
                return new G(a, b, c);
            }),
            (G.from = function(a, b, c) {
                return (
                    (c.runBackwards = !0),
                    (c.immediateRender = 0 != c.immediateRender),
                    new G(a, b, c)
                );
            }),
            (G.fromTo = function(a, b, c, d) {
                return (
                    (d.startAt = c),
                    (d.immediateRender =
                        0 != d.immediateRender && 0 != c.immediateRender),
                    new G(a, b, d)
                );
            }),
            (G.delayedCall = function(a, b, c, d, e) {
                return new G(b, 0, {
                    delay: a,
                    onComplete: b,
                    onCompleteParams: c,
                    callbackScope: d,
                    onReverseComplete: b,
                    onReverseCompleteParams: c,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: e,
                    overwrite: 0,
                });
            }),
            (G.set = function(a, b) {
                return new G(a, 0, b);
            }),
            (G.getTweensOf = function(a, b) {
                if (null == a) return [];
                a = "string" != typeof a ? a : G.selector(a) || a;
                var c, d, e, f;
                if ((p(a) || H(a)) && "number" != typeof a[0]) {
                    for (c = a.length, d = []; --c > -1;)
                        d = d.concat(G.getTweensOf(a[c], b));
                    for (c = d.length; --c > -1;)
                        for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1);
                } else if (a._gsTweenID)
                    for (d = $(a).concat(), c = d.length; --c > -1;)
                        (d[c]._gc || (b && !d[c].isActive())) && d.splice(c, 1);
                return d || [];
            }),
            (G.killTweensOf = G.killDelayedCallsTo =
                function(a, b, c) {
                    "object" == typeof b && ((c = b), (b = !1));
                    for (var d = G.getTweensOf(a, b), e = d.length; --e > -1;)
                        d[e]._kill(c, a);
                });
            var ca = t(
                "plugins.TweenPlugin",
                function(a, b) {
                    (this._overwriteProps = (a || "").split(",")),
                    (this._propName = this._overwriteProps[0]),
                    (this._priority = b || 0),
                    (this._super = ca.prototype);
                },
                !0
            );
            if (
                ((h = ca.prototype),
                    (ca.version = "1.19.0"),
                    (ca.API = 2),
                    (h._firstPT = null),
                    (h._addTween = P),
                    (h.setRatio = N),
                    (h._kill = function(a) {
                        var b,
                            c = this._overwriteProps,
                            d = this._firstPT;
                        if (null != a[this._propName]) this._overwriteProps = [];
                        else
                            for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                        for (; d;)
                            null != a[d.n] &&
                            (d._next && (d._next._prev = d._prev),
                                d._prev ?
                                ((d._prev._next = d._next), (d._prev = null)) :
                                this._firstPT === d && (this._firstPT = d._next)),
                            (d = d._next);
                        return !1;
                    }),
                    (h._mod = h._roundProps =
                        function(a) {
                            for (var b, c = this._firstPT; c;)
                                (b =
                                    a[this._propName] ||
                                    (null != c.n && a[c.n.split(this._propName + "_").join("")])),
                                b &&
                                "function" == typeof b &&
                                (2 === c.f ? (c.t._applyPT.m = b) : (c.m = b)),
                                (c = c._next);
                        }),
                    (G._onPluginEvent = function(a, b) {
                        var c,
                            d,
                            e,
                            f,
                            g,
                            h = b._firstPT;
                        if ("_onInitAllProps" === a) {
                            for (; h;) {
                                for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                                (h._prev = d ? d._prev : f) ? (h._prev._next = h) : (e = h),
                                (h._next = d) ? (d._prev = h) : (f = h),
                                (h = g);
                            }
                            h = b._firstPT = e;
                        }
                        for (; h;)
                            h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0),
                            (h = h._next);
                        return c;
                    }),
                    (ca.activate = function(a) {
                        for (var b = a.length; --b > -1;)
                            a[b].API === ca.API && (R[new a[b]()._propName] = a[b]);
                        return !0;
                    }),
                    (s.plugin = function(a) {
                        if (!(a && a.propName && a.init && a.API))
                            throw "illegal plugin definition.";
                        var b,
                            c = a.propName,
                            d = a.priority || 0,
                            e = a.overwriteProps,
                            f = {
                                init: "_onInitTween",
                                set: "setRatio",
                                kill: "_kill",
                                round: "_mod",
                                mod: "_mod",
                                initAll: "_onInitAllProps",
                            },
                            g = t(
                                "plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin",
                                function() {
                                    ca.call(this, c, d), (this._overwriteProps = e || []);
                                },
                                a.global === !0
                            ),
                            h = (g.prototype = new ca(c));
                        (h.constructor = g), (g.API = a.API);
                        for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                        return (g.version = a.version), ca.activate([g]), g;
                    }),
                    (f = a._gsQueue))
            ) {
                for (g = 0; g < f.length; g++) f[g]();
                for (h in q)
                    q[h].func ||
                    a.console.log("GSAP encountered missing dependency: " + h);
            }
            j = !1;
        }
    })(
        "undefined" != typeof module &&
        module.exports &&
        "undefined" != typeof global ?
        global :
        this || window,
        "TweenMax"
    );
/*TweenMax.min end*/

/*main start*/

// unminify start

jQuery(document).ready(function(e) {
    // if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {

    // }

    var t = function() {
        var e = jQuery(".topSec").outerHeight();
        jQuery(
            ".page-template-template-recentwork .thumb_port, .single-recent .innerSecPort"
        ).css({
            paddingTop: e + "px",
        });
    };
    if (
        (t(),
            jQuery(window).resize(function() {
                t();
            }),
            1 == jQuery("#sticky_item").length)
    ) {
        var shpos = e(".blogContDt").height() - 494;
        var o = e("#sticky_item"),
            sh = e(".sharethis_short"),
            n = o.width(),
            shn = sh.width(),
            i = o.offset(),
            shi = sh.offset(),
            r = e(".topSec").outerHeight(),
            c = i.top - r,
            l =
            (o.outerHeight() + o.offset().top - window.innerHeight,
                o.parent().offset().top + o.parent().outerHeight());
        o.outerHeight() - o.offset().top,
            e(window).scroll(function() {
                var t = e(this).scrollTop();
                t >= c ?
                    l > t &&
                    o.css({
                        position: "fixed",
                        top: r,
                        left: i.left,
                        width: n,
                    }) &&
                    sh.css({
                        position: "fixed",
                        top: r,
                        left: shi.left,
                        width: shn,
                        paddingTop: 45,
                        transform: "translate3d(0px, 0px, 0px)",
                    }) :
                    o.removeAttr("style") && sh.removeAttr("style"),
                    t + window.innerHeight >= l &&
                    o.css({
                        position: "absolute",
                        bottom: 0,
                        left: "auto",
                        right: 0,
                        top: "auto",
                        width: n,
                    }) &&
                    sh.css({
                        position: "relative",
                        // bottom: "inherit",
                        left: "auto",
                        right: 0,
                        // top: 3817,shpos
                        transform: "translate3d(0px, " + shpos + "px, 0px)",
                        width: shn,
                        paddingTop: 0,
                    });
            });
    }
    e("#wpml-newsletters-3email").attr("placeholder", "your@email.com"),
        Modernizr.addTest("chk_device", function() {
            return Modernizr.iphone ||
                Modernizr.ipad ||
                Modernizr.android ||
                (Modernizr.windows && Modernizr.mobile) ?
                !1 :
                !0;
        }),
        e(".toggleButton").click(function(t) {
            t.preventDefault(),
                e(this).parent().next().children().stop(!0, !0).slideToggle();
        });
    var a = function() {
        var t =
            "<div class='mob_nav' id='mob_nav' style='display:none;'><a href='' class='mob_close' id='mob_close'>Close</a></div>",
            o = e("#menu-main-menu").clone();
        if (
            (e(t).append(o).prependTo("body"),
                "function" == typeof window.getComputedStyle)
        ) {
            var n = function(t) {
                    e(t).height(e(window).height());
                },
                i = document.getElementById("mob_nav");
            parseInt(getComputedStyle(i, null).height, 10) != e(window).height() &&
                (n(i),
                    e(window).resize(function() {
                        setTimeout(function() {
                            n(i);
                        }, 100);
                    }));
        }
        var t = e("#mob_nav");
        e(".mobilebutt").on("click", function() {
                return (
                    t.show(function() {
                        e(this).css({
                            opacity: 1,
                            display: "block",
                        });
                    }),
                    !1
                );
            }),
            e("#mob_close").click(function(e) {
                return t.hide(), !1;
            });
    };
    if (
        e(window).width() <= 1024 ||
        Modernizr.mobile ||
        Modernizr.tablet ||
        Modernizr.ipad
    ) {
        a();
    }

    if (!Modernizr.chk_device) {
        // if ((Modernizr.mobile || Modernizr.tablet || Modernizr.ipad) && a(), !Modernizr.chk_device) {
        var s,
            p = e(".forkit-curtain").css("display", "none");
        e(".desk-cus").css("display", "none");
        e(".mob-cus").css("display", "block");
        e(".requestButtonssss, .requestaqutebutton.mob-cus").click(function(t) {
                t.preventDefault(),
                    (s = -e(document).scrollTop() + "px"),
                    p.fadeIn(),
                    e("#hdJsTop, body.page-id-1619").css({
                        position: "fixed",
                        top: s,
                        width: "100%",
                    });

                // console.log(s);
            }),
            e(".close-button").click(function() {
                p.fadeOut(),
                    e("#hdJsTop, body.page-id-1619").css("position", "static"),
                    e("body, html").scrollTop(Math.abs(parseInt(s)));

                // console.log(s);
            });
    }
    Modernizr.load([{
            test: Modernizr.chk_device,
            yep: [path + "/css/forkit.css", path + "/js/forkit.js"],
            // complete: function() {
            //     Modernizr.chk_device && e(".forkit-curtain").css("display", "block")
            // }
        }, ]),
        e(window).stellar({
            horizontalScrolling: !1,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            scrollProperty: "scroll",
            positionProperty: "transform",
            parallaxBackgrounds: !1,
            parallaxElements: !0,
            hideDistantElements: !1,
        });
    var d = [],
        u = function() {
            (d.length = 0),
            e(".movingSec").each(function() {
                d.push({
                    color: e(this).data("color"),
                    pos: parseInt(e(this).position().top - e(".topSec").height()),
                });
            });
        };
    u();

    //requestaqutebutton
    //ipad only
    var ipadcheck = jQuery("html").hasClass("ipad");
    // console.log(ipadcheck, "rrr");
    // console.log(ipadcheck, "rrr");

    //    if(ipadcheck) {

    //      jQuery(".forkit").hide();
    //      var sposipad;
    //     jQuery("body").on("click", ".requestaqutebutton", function(){

    //         jQuery(".forkit-curtain").addClass("open-cus-mod");
    //    sposipad = -e(document).scrollTop() + "px";
    //    jQuery("body.page-id-1619").css({
    //      position: "fixed",
    //      top: sposipad,
    //      width: "100%"
    //    });
    //     });

    //     jQuery("body").on("click", ".close-button", function(){
    //         jQuery(".forkit-curtain").removeClass("open-cus-mod");
    //         e("body.page-id-1619").css("position", "static"), e("body, html").scrollTop(Math.abs(parseInt(sposipad)));
    //     });
    // }
    //ipad only
    var s;
    jQuery("body").on("click", ".requestaqutebutton.desk-cus", function(event) {
        event.preventDefault();
        jQuery(".forkit-curtain").addClass("open-cus-mod");
        s = -e(document).scrollTop() + "px";
        jQuery("body.page-id-1619").css({
            position: "fixed",
            top: s,
            width: "100%",
        });
        // console.log(spos);
    });

    jQuery("body").on(
        "click",
        ".forkit-curtain.open-cus-mod .close-button",
        function() {
            jQuery(".forkit-curtain").removeClass("open-cus-mod");
            e("body.page-id-1619").css("position", "static"),
                e("body, html").scrollTop(Math.abs(parseInt(s)));
            // console.log(spos);
        }
    );
    //constantcontact form start
    //footer
    jQuery(".ctct_signup").submit(function(event) {
        var formData = jQuery(".ctct_signup").serialize();
        jQuery.ajax({
            type: "POST",
            url: "https://visitor2.constantcontact.com/api/signup",
            data: formData,
            dataType: "json",
            success: function(data) {
                jQuery(".ctct_signup").replaceWith(
                    "<span class='ctct-form-success_message_cont'>Thank you for joining our mailing list!</span>"
                );
            },
            error: function(response) {
                jQuery(".ctct_signup").replaceWith(
                    "<span class='ctct-form-errorMessage_cont'>There was an error submitting your form response. Please wait a bit and try again.</span>"
                );
            },
        });
        event.preventDefault();
    });

    //blog POP CONSTAT CONTACT
    jQuery(".ctct_signupblog").submit(function(event) {
        var formData = jQuery(".ctct_signupblog").serialize();
        jQuery.ajax({
            type: "POST",
            url: "https://visitor2.constantcontact.com/api/signup",
            data: formData,
            dataType: "json",
            success: function(data) {
                jQuery(".ctct_signupblog").replaceWith(
                    "<span class='ctct-form-success_message_cont'>Thank you for joining our mailing list!</span>"
                );
                setTimeout(function() {
                    jQuery(".mfp-close").trigger("click");
                }, 1000);
            },
            error: function(response) {
                jQuery(".ctct_signupblog").replaceWith(
                    "<span class='ctct-form-errorMessage_cont'>There was an error submitting your form response. Please wait a bit and try again.</span>"
                );
            },
        });
        event.preventDefault();
    });

    //blog POP CONSTAT CONTACT
    ////constantcontact form end

    var si;

    function addClasssec(i) {
        jQuery(".movingSec[data-scroll-index='" + i + "']").addClass("anmdone");
    }

    function removeClasssec(i) {
        jQuery(".movingSec[data-scroll-index='" + i + "']").removeClass("anmdone");
    }

    function hasClasssec(i) {
        return jQuery(".movingSec[data-scroll-index='" + i + "']").hasClass(
            "anmdone"
        );
    }
    var webdesigntlm = new TimelineMax({
        paused: true
    });
    var maktlm = new TimelineMax({
        paused: true
    });
    //var standupgirltlm = new TimelineMax({ paused: true });
    var brandinglm = new TimelineMax({
        paused: true
    });
    var webdevelopmentlm = new TimelineMax({
        paused: true
    });
    var mobileappslm = new TimelineMax({
        paused: true
    });
    var sixStepstlm = new TimelineMax({
        paused: true
    });
    var webdesign = webdesigntlm
        .from(".light-fix", 0.5, {
            y: 150,
            scale: 0.7,
            opacity: 0,
        })
        .staggerFrom(
            ".design-light-wrap .web-el",
            2, {
                scale: 0.5,
                opacity: 0,
                ease: Elastic.easeOut,
                force3D: true,
            },
            0.2
        )
        .fromTo(
            ".light-shadow",
            1, {
                scale: 0.5,
                opacity: 0,
                ease: Elastic.easeOut,
                force3D: true,
            }, {
                scale: 1.3,
                opacity: 1,
                ease: Elastic.easeOut,
                force3D: true,
            },
            "-=1"
        )
        .to(".light-shadow", 1, {
            scale: 1,
        });

    var arrowheight = 440;
    var marketingTarget = maktlm
        .from(
            ".mak-target.dart-1 span",
            0.5, {
                yPercent: -99,
                opacity: 0,
                height: arrowheight,
            },
            0
        )
        .from(
            ".mak-target.dart-2 span",
            0.5, {
                yPercent: -85,
                opacity: 0,
                height: arrowheight,
            },
            "-=0.3"
        )
        .from(
            ".mak-target.dart-3 span",
            0.5, {
                yPercent: -111,
                opacity: 0,
                height: arrowheight,
            },
            "-=0.3"
        );

    //branding start
    var branding = brandinglm
        .from(
            ".card-black",
            1, {
                xPercent: -10,
                opacity: 0,
                ease: Linear.easeOut,
            },
            "-=0.3"
        )
        .from(
            ".card-violet",
            1, {
                xPercent: 5,
                opacity: 0,
            },
            "-=0.3"
        )
        .from(
            ".card-white",
            0.5, {
                yPercent: 5,
                opacity: 0,
            },
            "-=0.3"
        );
    //branding end

    //webdevelopment start
    var webdevelopment = webdevelopmentlm
        .from(
            ".desktop-view",
            1, {
                xPercent: 20,
                opacity: 0,
            },
            "-=0.5"
        )
        .from(
            ".mobile-view",
            1, {
                xPercent: 20,
                opacity: 0,
            },
            "-=0.5"
        )
        .from(
            ".tab-view",
            1, {
                xPercent: 20,
                opacity: 0,
            },
            "-=0.5"
        );
    //webdevelopment end

    //mobileapps start
    var mobileapps = mobileappslm
        .from(
            ".mb-app-1",
            0.8, {
                xPercent: -20,
                opacity: 0,
            },
            "-=0.3"
        )
        .staggerFromTo(
            ".stgger-mob-app",
            2.5, {
                yPercent: 20,
                opacity: 0,
                ease: Elastic.easeOut,
                force3D: true,
            }, {
                yPercent: 0,
                opacity: 1,
                ease: Elastic.easeOut,
                force3D: true
            },
            0.2
        );
    //mobileapps end

    /*var standupgirl = standupgirltlm.from('.stand-up-girl', 1, {
          xPercent: -50,
          opacity: 0
      });*/

    /*    e(window).on("orientationchange", function(){
        e(".mb-app-1").css({
           '-webkit-transform': 'translateY(-50%)',
           'transform': 'translateY(-50%)'
        })
      });*/

    var sixSteps = sixStepstlm.staggerFrom(
        ".steps_container img",
        2, {
            scale: 0.5,
            opacity: 0,
            ease: Elastic.easeOut,
            force3D: true,
        },
        0.2
    );

    var f = function(t) {
        e(".topSec")
            .removeClass(function(e, t) {
                return (t.match(/active\S+/g) || []).join(" ");
            })
            .addClass("active_" + d[t].color);

        si = t;

        if (!isNaN(si) || si == 0 || si == 6) {
            if (si === 1 && !hasClasssec(si)) {
                addClasssec(si);
                webdesign.play();
            }

            if (si === 2 && !hasClasssec(si)) {
                addClasssec(si);
                branding.play();
            }

            if (si === 3 && !hasClasssec(si)) {
                addClasssec(si);
                webdevelopment.play();
            }

            if (si === 4 && !hasClasssec(si)) {
                addClasssec(si);
                mobileapps.play();
            }

            if (si === 5 && !hasClasssec(si)) {
                addClasssec(si);
                marketingTarget.play();
            }

            if (si === 6 && !hasClasssec(si)) {
                addClasssec(si);
                sixSteps.play();
            }
        }
    };
    (calculate_color = function() {
        d.length &&
            e.scrollIt({
                topOffset: -1,
                onUpdateActive: function(t, o, n) {
                    e.each(d, function(t, o) {
                        var n = e(window).scrollTop();
                        if (n < d[1].pos) {
                            if (n >= 10) return f(t), !1;
                            e(".topSec").removeClass(function(e, t) {
                                return (t.match(/active\S+/g) || []).join(" ");
                            });
                        } else {
                            if (!d[t + 1]) return f(t), !1;
                            if (n > o.pos && n < d[t + 1].pos) return f(t), !1;
                        }
                    });
                },
            });
    }),
    calculate_color();
    var h;
    jQuery(window).on("orientationchange", function(e) {
            clearTimeout(h),
                (h = setTimeout(function() {
                    u(), calculate_color();
                }, 100));
        }),
        e(".innerBanner").length > 0 || e(".home").length > 0 ?
        e(".sticker").sticky({
            topSpacing: 0,
        }) :
        e(".headerSec").addClass("forced_inner").sticky({
            topSpacing: 0,
        }),
        e("a.downarw").on("click", function(t) {
            t.preventDefault(),
                e("html, body").animate({
                        scrollTop: e("#footer").offset().top,
                    },
                    2e3
                );
        }),
        e("a.clickBelow").on("click", function(t) {
            t.preventDefault(),
                e("html, body").animate({
                        scrollTop: e("#portfolioList").offset().top,
                    },
                    2e3
                );
        }),
        e(".bwWrapper").BlackAndWhite({
            hoverEffect: !0,
            webworkerPath: !1,
            invertHoverEffect: !1,
            intensity: 1,
            speed: {
                fadeIn: 200,
                fadeOut: 800,
            },
            onImageReady: function(e) {},
        }),
        e(".popup-with-form").magnificPopup({
            type: "inline",
        });

    // console.log(1111, e);
    //24-04-2019 - start
    function getFileData(myFile) {
        //console.log(myFile.value);
        var file = myFile.files ? myFile.files[0] : myFile.value;
        if (file.name) {
            var filename = file.name;
        } else {
            var fils = file.split("\\");
            var filename = fils[fils.length - 1];
        }
        return filename;
    }
    e(".upload").on("change", function() {
        e(this).parent().parent().prev(".uploadFiletext").text(getFileData(this));
    });

    //slider
    //var budgetMin =  $('.estd-slider').attr('data-estvalue');

    // For the budged slider in contact form start---------------
    // e(".estd-slider").length && e(".estd-slider").slider({
    //     value: 30000,
    //     step: 5000,
    //     max: 100000,
    //     min: 10000,
    //     range: "min",
    //     stop: function(event, ui) {
    //         var finalvalue = ui.value.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //         var $closestval = e(this).closest('.contact_form_mid_right');
    //         $closestval.find(".estd-slider-input").val(finalvalue);
    //         $closestval.find(".budget_amount_val").text(finalvalue);
    //     }
    // });
    // For the budged slider in contact form end---------------

    //https://plentz.github.io/jquery-maskmoney/
    jQuery(".estimate_budget .estd-slider-input").maskMoney({
        prefix: "$ ",
        precision: 0,
    });

    //24-04-2019 - end

    /*--------------------------------------------------------------
    3. >>> NiceSelect
    ----------------------------------------------------------------*/
    jQuery(".select_dropdown").length && jQuery(".select_dropdown").niceSelect();

    e("#post_cat_dynamic_select").length &&
        e("#post_cat_dynamic_select").on("change", function() {
            //console.log('++++++');
            var url = e(this).val(); // get selected value
            if (url) {
                // require a URL
                window.location = url; // redirect
            }
            return false;
        });

    // =======Long Island Service Section Start==========

    var slider = jQuery(".mySwiper_nav, .mySwiper_slide");

    jQuery(".swiper-button-prev").click(function() {
        slider.slick("slickPrev");
        return false;
    });

    jQuery(".swiper-button-next").click(function() {
        slider.slick("slickNext");
        return false;
    });

    jQuery(".mySwiper_slide").length &&
        jQuery(".mySwiper_slide").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            // fade: true,
            infinite: true,
            asNavFor: ".mySwiper_nav",
            responsive: [{
                breakpoint: 768,
                settings: "unslick",
            }, ],
        });

    jQuery(".mySwiper_nav").length &&
        jQuery(".mySwiper_nav").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: ".mySwiper_slide",
            // dots: true,
            centerMode: false,
            infinite: true,
            focusOnSelect: true,
            rows: 0,
            // slidesToShow: 2,
            arrows: false,
            draggable: false,
            useTransform: false,
            responsive: [{
                breakpoint: 768,
                settings: "unslick",
            }, ],
        });



    /* ===========On Resize=========== */
    window.addEventListener("resize", function() {
        // swiperMode();
        if (jQuery(window).width() > 767) {
            jQuery(".mySwiper_nav").length &&
                jQuery(".mySwiper_nav").slick("refresh");
            jQuery(".mySwiper_slide").length &&
                jQuery(".mySwiper_slide").slick("refresh");
        }
    });

    jQuery(".services_sec .mob_title").length &&
        jQuery(".services_sec .mob_title").click(function(e) {
            e.stopPropagation();

            jQuery(this).closest(".swiper-slide").toggleClass("ser_active");

            if (jQuery(".swiper-slide").not("ser_active")) {
                jQuery(this)
                    .closest(".swiper-slide")
                    .find(".ser_content")
                    .slideToggle("slow");
            }
        });
    // =======Long Island Service Section End==========

    //======= web-design-scholership start======

    jQuery(".prior-content").length &&
        jQuery(".prior-content").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            // fade: true,
            infinite: false,
            draggable: false,
            adaptiveHeight: true,
            asNavFor: ".prior-nav",
            responsive: [{
                breakpoint: 1199,
                settings: "unslick",
            }, ],
        });

    jQuery(".prior-nav").length &&
        jQuery(".prior-nav").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: ".prior-content",
            // dots: true,
            centerMode: false,
            infinite: false,
            focusOnSelect: true,

            // slidesToShow: 2,
            arrows: true,
            draggable: false,
            prevArrow: jQuery('.prev'),
            nextArrow: jQuery('.next'),
            useTransform: false,
            responsive: [{
                breakpoint: 1199,
                settings: "unslick",
            }, ],
        });
    jQuery(".prior-content-section").eq(0).addClass("active");
    jQuery(".prior-content-section").eq(0).find(".inner-content-area").slideDown();
    jQuery(".prior-content-section .winner-thumb-bx-mbl").click(function() {

        jQuery(".inner-content-area").not().stop().slideUp();
        jQuery(this).next().stop().slideToggle();

        if (jQuery(this).closest(".prior-content-section").hasClass("active")) {
            jQuery(this).closest(".prior-content-section").removeClass("active");
        } else {
            jQuery(".prior-content-section").not().removeClass("active");
            jQuery(this).closest(".prior-content-section").addClass("active");
        }
    });

    jQuery('.scrollTo').click(function(e) {
        e.preventDefault();
        var target = jQuery(jQuery(this).attr('href'));
        if (target.length) {
            var scrollTo = target.offset().top - 50;
            $('body, html').animate({
                scrollTop: scrollTo + 'px'
            }, 800);
        }
    });

    //======= web-design-scholership end======


    // =======Service Pagesn Start==========
    jQuery(".process_slide_js").length &&
        jQuery(".process_slide_js").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            // fade: true,
            infinite: true,
            nextArrow: '<button type="button" class="slick-next"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.3942L21.0423 11.3942M21.0423 11.3942L11.0212 1.37305M21.0423 11.3942L11.0212 21.4154" stroke="#02E0DF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            prevArrow: '<button type="button" class="slick-prev"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.3942L1.95766 11.3942M1.95766 11.3942L11.9788 1.37305M1.95766 11.3942L11.9788 21.4154" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        });

    jQuery(".service_slide_js").length &&
        jQuery(".service_slide_js").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: ".service_nav_js",
            infinite: false,
            nextArrow: '<button type="button" class="slick-next"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.3942L21.0423 11.3942M21.0423 11.3942L11.0212 1.37305M21.0423 11.3942L11.0212 21.4154" stroke="#02E0DF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            prevArrow: '<button type="button" class="slick-prev"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.3942L1.95766 11.3942M1.95766 11.3942L11.9788 1.37305M1.95766 11.3942L11.9788 21.4154" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            responsive: [{
                breakpoint: 768,
                settings: {
                    adaptiveHeight: true,
                },
            }, ],
        });

    jQuery(".service_nav_js").length &&
        jQuery(".service_nav_js").slick({
            slidesToShow: 5,
            asNavFor: ".service_slide_js",
            // dots: true,
            centerMode: false,
            infinite: false,
            focusOnSelect: true,
            rows: 0,
            // slidesToShow: 2,
            arrows: false,
            draggable: false,
            useTransform: false,
        });




    jQuery(".approach_slide_js").length &&
        jQuery(".approach_slide_js").slick({
            asNavFor: ".approach_nav_js",
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            infinite: false,
            nextArrow: '<button type="button" class="slick-next"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.3942L21.0423 11.3942M21.0423 11.3942L11.0212 1.37305M21.0423 11.3942L11.0212 21.4154" stroke="#02E0DF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            prevArrow: '<button type="button" class="slick-prev"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.3942L1.95766 11.3942M1.95766 11.3942L11.9788 1.37305M1.95766 11.3942L11.9788 21.4154" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            responsive: [{
                breakpoint: 768,
                settings: {
                    adaptiveHeight: true,
                },
            }, ],
        });

    jQuery(".approach_nav_js").length &&
        jQuery(".approach_nav_js").slick({
            asNavFor: ".approach_slide_js",
            slidesToShow: 5,
            // dots: true,
            centerMode: false,
            infinite: false,
            focusOnSelect: true,
            rows: 0,
            // slidesToShow: 2,
            arrows: false,
            draggable: false,
            useTransform: false,
        });

    if ($("body").hasClass("page-template-template-service")) {
        var top1 = new Rellax(".our_approach .heading_wrap", {
            speed: -1,
            center: true,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false,
        });
    }
    // On before slide change
    jQuery(".approach_slide_js")
        .on("beforeChange", function(event, slick, currentSlide, nextSlide) {
            jQuery(".approach_slide_js").toggleClass("slide_changed");
        })
        .trigger("beforeChange");
    // =======Service Pages End==========

    /*-----------------------------------------------------------------
        1. >>> Career  JS Start
      ----------------------------------------------------------------*/
    var headerheight = $(".topSec").outerHeight();
    //console.log(headerheight);
    var $root = $("html, body");

    $(
        '.page-template-template-career .innerBanner .innerCaption p a[href^="#"],.about_bottom a[href^="#"]'
    ).click(function() {
        $root.animate({
                scrollTop: $($.attr(this, "href")).offset().top - headerheight,
            },
            1000
        );

        return false;
    });

    // jQuery( window ).load( function ()
    // {
    //     if(jQuery('body').hasClass('page-template-template-career')){
    //         //if ( window.location.hash == "" ) return ;
    //         //var curnet_url = window.location.href;
    //         var hash = window.location.hash;
    //         var hashvalue = hash.substr(1);
    //         console.log(hashvalue);
    //         if(hashvalue != ''){
    //             jQuery("#accordion "+hash+" .accordion_heading_sec").trigger('click');
    //             jQuery('html, body').stop().animate({
    //               scrollTop: jQuery(hash).offset().top -headerheight
    //             }, 1000);
    //         }
    //     }
    // });

    $("#accordion .accordion_heading_sec").click(function() {
        $(".active").not(this).removeClass("active").next().hide(300);
        $(this).toggleClass("active");
        if (false == $(this).next().is(":visible")) {
            $("#accordion .accordion_content").slideUp(300);
        }
        $(this).next().slideToggle(300);
    });

    $(".accordion_close").click(function() {
        $(".accordion_heading_sec ").removeClass("active");
        $("#accordion .accordion_content").slideUp(800);
        var cur_ID = $(this).closest(".accordion_loop").attr("id");
        $([document.documentElement, document.body]).animate({
                scrollTop: $("#" + cur_ID).offset().top - headerheight,
            },
            2000
        );
    });

    $(".copy_text").click(function(e) {
        e.preventDefault();
        var copyText = $(this).attr("href");

        document.addEventListener(
            "copy",
            function(e) {
                e.clipboardData.setData("text/plain", copyText);
                e.preventDefault();
            },
            true
        );

        document.execCommand("copy");
        $(".copied").show().fadeOut(2500);
        //console.log('copied text : ', copyText);
        //alert('copied text: ' + copyText);
    });

    // var animationIsOff = $.fx.off;
    // $.fx.off = true;
    // $('#accordion .accordion_heading_sec:eq(0)').click()
    // $.fx.off = animationIsOff;

    jQuery(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        jQuery(".resumtext").addClass("selected").html(fileName);
    });

    jQuery("body").on(
        "click",
        ".job-section-list .apply-now-button",
        function() {
            var $job_poction = $(this)
                .closest(".accordion_loop")
                .find(".accordion_heading_sec .accordion_heading")
                .text();
            console.log($job_poction);
            jQuery(".applyforjob").val($job_poction);
            jQuery(".applyposition").text($job_poction);
        }
    );

    jQuery("body").on(
        "click",
        ".job-section-list .apply-now-button",
        function() {
            var $joblocation = $(this)
                .closest(".accordion_loop")
                .find(".accordion_heading_sec .logcation_deoartment .joblocation")
                .text();
            console.log($joblocation);
            jQuery(".job_location").val($joblocation);
        }
    );

    jQuery(".apply-now-button").magnificPopup({
        type: "inline",
        preloader: false,
        focus: "#name",
    });

    /*-----------------------------------------------------------------
         1. >>> Career  JS End
       ----------------------------------------------------------------*/

    jQuery(".nobanner")
        .parent()
        .next()
        .find(".our-works-main-wrapper")
        .css("margin-top", headerheight);
});

jQuery(window).load(function() {
    //console.log('Hellooooooo');
    jQuery("header .home_bnr_img_wrap").length &&
        jQuery("header .home_bnr_img_wrap").addClass("loaded_home");

    if (jQuery("body").hasClass("page-template-template-career")) {
        //if ( window.location.hash == "" ) return ;
        //var curnet_url = window.location.href;
        var headerheight = $(".topSec").outerHeight();
        var hash = window.location.hash;
        var hashvalue = hash.substr(1);
        console.log(
            hash,
            hashvalue,
            "'#accordion " + hash + " .accordion_heading_sec'"
        );
        if (hashvalue != "") {
            jQuery("html, body")
                .stop()
                .animate({
                        scrollTop: jQuery(hash).offset().top - headerheight,
                    },
                    1000
                );
            setTimeout(function() {
                jQuery("#accordion " + hash + " .accordion_heading_sec").trigger(
                    "click"
                );
            }, 1500);
        }
    }
});



var headerheight = jQuery(".topSec").outerHeight();
jQuery('a.tabils_heading_button').click(function(e) {
    jQuery('html, body').animate({
        scrollTop: jQuery(jQuery(this).attr('href')).offset().top - headerheight
    }, 1000);
});

// , jQuery(window).load(function() {
/*window.sr = ScrollReveal(), 
      sr.reveal("img.alignnone", {
          distance: "0px",
          scale: 1,
          delay: 100
      });
      sr.reveal("img.alignleft", {
      distance: "0px",
      scale: 1,
      delay: 100
    });
    sr.reveal("img.alignright", {
      distance: "0px",
      scale: 1,
      delay: 100
        });*/

// BLOG POP UP
// var e = window.location.pathname;
// "/blog/" != e && !jQuery(".single-post").length || 0 != !!window.sessionStorage.getItem("popOpened") || ( setTimeout(function(){jQuery(".email_link").length > 0 && jQuery(".email_link").trigger("click")}, 20000) , window.sessionStorage.setItem("popOpened", !0))

// BLOG POP UP

// });

// unminify end
/*main end*/

/*-----------------------------------------------------------------
  1. >>> blog inner page tab  JS start
----------------------------------------------------------------*/

$('.resources_item li a').on('click', function() {
    var target = $(this).attr('data-rel');
    $('.resources_item li a').removeClass('active');
    $(this).addClass('active');
    $("#" + target).fadeIn('slow').siblings(".tab-box-blog").hide();
    return false;
});

/*-----------------------------------------------------------------
  1. >>> blog inner page tab  JS end
----------------------------------------------------------------*/


/*--------------------------------
PDF File Populate
----------------------------------*/
var pdf_path = jQuery(document).find('.book_section, .download_frm_inner').data('pdf');
jQuery(".book_section form, .download_frm_inner form").find("#hdn-pdf-url").val(pdf_path);
// console.log(pdf_path);



/*-----------------------------------------------------------------
  1. >>> blog inner page slider  JS end
----------------------------------------------------------------*/

var btn = jQuery('#button');

jQuery(window).scroll(function() {
    if (jQuery(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    jQuery('html, body').animate({
        scrollTop: 0
    }, '300');
});

if ($("#progressBar").length) {
    function progressBarScroll() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
            height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
            scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    }

    window.onscroll = function() {
        progressBarScroll();
    };
}

/*-----------------------------------------------------------------
      1. >>> about inner page tabs  JS end
    ----------------------------------------------------------------*/
jQuery(document).ready(function(e) {

  var blog_cat_height = e('.blog-cat-section').outerHeight();
  var topSec_height = e('.topSec').outerHeight();

  //console.log(topSec_height);


    //e('.page-template-template-blog .blog_top_section,.archive.category .blog_content_archive_wrapper').css("padding-top", blog_cat_height + topSec_height);

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
    {
      console.log("This is a mobile device.");
      e('.page-template-template-blog .blog_top_section,.archive.category .blog_content_archive_wrapper').css("padding-top", blog_cat_height + topSec_height);
     
    }
    e(window).resize(function(){
        //console.log('window resized');
        // The viewport is less than 1199 pixels wide
        if(window.matchMedia("(max-width: 1199px)").matches){
          //console.log("This is max-width: 1199px");
          var blog_cat_height = e('.blog-cat-section').outerHeight();
          var topSec_height = e('.topSec').outerHeight();
          e('.page-template-template-blog .blog_top_section,.archive.category .blog_content_archive_wrapper').css("padding-top", blog_cat_height + topSec_height);
        }else{
          location.reload(true);
        }
    });


    

    // e('.clickme a').click(function() {
    //     e('.clickme a').removeClass('activelink');
    //     e(this).addClass('activelink');
    //     var tagid = $(this).data('tag');
    //     e('.list').removeClass('active').addClass('hide');
    //     e('#' + tagid).addClass('active').removeClass('hide');
    //      e('#' + tagid).fadeIn();
    //       return false;
    // });


jQuery('.clickme a').on('click', function() {
    var target = jQuery(this).attr('data-tag');
    jQuery('.clickme a').not(this).removeClass('activelink');
    jQuery(this).addClass('activelink');
    // jQuery('.design-content').not().stop().fadeOut();
    // jQuery('#' + target).stop().fadeIn(1000);

    //jQuery('.design-content').fadeOut();
    jQuery(".list:not(#" + target + ")").hide();
    jQuery('#' + target).fadeIn();

    return false;
});

    /*-----------------------------------------------------------------
    1. >>> blog inner page slider  JS start
    ----------------------------------------------------------------*/

    jQuery(".blogslider").length &&
        jQuery(".blogslider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            arrows: false,
            autoplay: true

        });


});
/*-----------------------------------------------------------------
    1. >>> about inner page brand  JS end
  ----------------------------------------------------------------*/
jQuery(document).ready(function() {
    $(".autoplay").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

/*-----------------------------------------------------------------
      1. >>> about inner page achievements  JS end
    ----------------------------------------------------------------*/
jQuery(document).ready(function() {
    $(".our_achievements-grup").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

/*-----------------------------------------------------------------
  1. >>> about inner page tabs  JS end
----------------------------------------------------------------*/


jQuery('.tabMenu a').on('click', function() {
    var target = jQuery(this).attr('data-id');
    jQuery('.tabMenu a').not(this).removeClass('activelink');
    jQuery(this).addClass('activelink');
    // jQuery('.design-content').not().stop().fadeOut();
    // jQuery('#' + target).stop().fadeIn(1000);

    //jQuery('.design-content').fadeOut();
    jQuery(".list-tab:not(#" + target + ")").hide();
    jQuery('#' + target).fadeIn();

    return false;
});

/*-----------------------------------------------------------------
  1. >>> Blog sticky  JS end
----------------------------------------------------------------*/
jQuery(document).ready(function() {
    //console.log("document ready!");
    var $sticky = jQuery('.sticky');
    var $stickyrStopper = jQuery('.sticky-stopper');
    if (!!$sticky.offset()) { // make sure ".sticky" element exists

        var generalSidebarHeight = $sticky.innerHeight();
        var stickyTop = $sticky.offset().top;
        var stickOffset = 75;
        var stickyStopperPosition = $stickyrStopper.offset().top;
        var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
        var diff = stopPoint + stickOffset;

        jQuery(window).scroll(function() { // scroll event
            var windowTop = jQuery(window).scrollTop(); // returns number

            if (stopPoint < windowTop) {
                $sticky.css({
                    position: 'static',
                    top: diff
                });
            } else if (stickyTop < windowTop + stickOffset) {
                $sticky.css({
                    position: 'fixed',
                    top: stickOffset
                });
            } else {
                $sticky.css({
                    position: 'static',
                    top: 'initial'
                });
            }
        });

    }
});

/*-------*/
// Select all »a« elements with a parent class »links« and add a function that is executed on click
// $('.tabMenu a').on('click', function(e) {

//     // Define variable of the clicked »a« element (»this«) and get its href value.
//     var href = $(this).attr('href');

//     // Run a scroll animation to the position of the element which has the same id like the href value.
//     $('html, body').animate({
//         scrollTop: $(href).offset().top - 100
//     }, '300');

//     // Prevent the browser from showing the attribute name of the clicked link in the address bar
//     e.preventDefault();

// });

// Select all »a« elements with a parent class »links« and add a function that is executed on click
// $('.clickme a').on('click', function(e) {

//     // Define variable of the clicked »a« element (»this«) and get its href value.
//     var href = $(this).attr('href');

//     // Run a scroll animation to the position of the element which has the same id like the href value.
//     $('html, body').animate({
//         scrollTop: $(href).offset().top - 100
//     }, '300');

//     // Prevent the browser from showing the attribute name of the clicked link in the address bar
//     e.preventDefault();

// });