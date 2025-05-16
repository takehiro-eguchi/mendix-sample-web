import { asProperty, fromComputation$, readUntracked, newId, dynAvailable, jsxRuntimeExports, classNames, getLocale, getDefaultExportFromCjs$1 as getDefaultExportFromCjs, n, commonjsGlobal, reactExports, deepEqual, ensure, FormatterType } from './index-sUfOvV_8.js';
import './BQa9VDC5-DyZYO1l2.js';
import { runActionInComputed } from './BrzhM9fk-DCcHnYPV.js';
import './Bgp-XL0v-wsgFNuuZ.js';

const DerivedUniqueIdProperty = asProperty((config, store) => {
  const [uniqueId$, setUniqueId] = store.useSlot(config.widgetId, "uniqueId");
  return fromComputation$(`Derived unique id for ${config.widgetId}`, () => {
    const existingId = readUntracked(uniqueId$);
    if (existingId)
      return existingId;
    const value = newId(config.widgetId);
    return runActionInComputed(() => setUniqueId(value)), value;
  });
});

const ValidationProperty = asProperty(({ inputWidgetId }, store, widgetId) => {
  const [isInvalid$] = store.useSlot(inputWidgetId, "isInvalid");
  return fromComputation$(`Validity of ${inputWidgetId} (used by ${widgetId})`, () => dynAvailable(Boolean(isInvalid$.dependOn())));
});

const Alert = (props) => props.validation ? jsxRuntimeExports.jsx("div", { id: props.id, className: "alert alert-danger mx-validation-message", role: "alert", children: props.validation }) : null;

const getValidationAriaProps = (validation, id) => validation ? { "aria-invalid": true, "aria-describedby": `${id}-error` } : void 0, getAriaLabelProps = (value) => value ? { "aria-label": value } : {};

const hasCaption = (props) => void 0 !== props.caption, FormGroup = (props) => jsxRuntimeExports.jsxs("div", { className: classNames(props.class, "form-group", { "has-error": props.hasError.value, "no-columns": "vertical" === props.orientation }), style: props.style, children: [hasCaption(props) && jsxRuntimeExports.jsx("label", { className: classNames("control-label", { [`col-sm-${props.width}`]: "horizontal" === props.orientation }), htmlFor: props.labelFor, id: props.labelFor && props.labelFor + "-label", children: props.caption.value }), "horizontal" === props.orientation ? jsxRuntimeExports.jsx("div", { className: classNames("col-sm-" + (12 - props.width), { [`col-sm-offset-${props.width}`]: !hasCaption(props) }), children: props.control }) : props.control] });

let decimalSeparator;
function getDecimalSeparator() {
  return void 0 === decimalSeparator && (decimalSeparator = getLocale().numbers.decimalSeparator), decimalSeparator;
}

function debounce(func, timeout) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId), timeoutId = window.setTimeout(function() {
      timeoutId = void 0, func(...args);
    }, timeout);
  };
}

var e, module, exports, reactTextMask = { exports: {} }, ReactTextMask = getDefaultExportFromCjs(reactTextMask.exports = (e = n, function(e2) {
  function t(n) {
    if (r[n])
      return r[n].exports;
    var o = r[n] = { exports: {}, id: n, loaded: false };
    return e2[n].call(o.exports, o, o.exports, t), o.loaded = true, o.exports;
  }
  var r = {};
  return t.m = e2, t.c = r, t.p = "", t(0);
}([function(e2, t, r) {
  function n(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function o(e3, t2) {
    var r2 = {};
    for (var n2 in e3)
      t2.indexOf(n2) >= 0 || Object.prototype.hasOwnProperty.call(e3, n2) && (r2[n2] = e3[n2]);
    return r2;
  }
  function i(e3, t2) {
    if (!(e3 instanceof t2))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(e3, t2) {
    if (!e3)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t2 || "object" != typeof t2 && "function" != typeof t2 ? e3 : t2;
  }
  function u(e3, t2) {
    if ("function" != typeof t2 && null !== t2)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t2);
    e3.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t2 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t2) : e3.__proto__ = t2);
  }
  Object.defineProperty(t, "__esModule", { value: true }), t.conformToMask = void 0;
  var s = Object.assign || function(e3) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var r2 = arguments[t2];
      for (var n2 in r2)
        Object.prototype.hasOwnProperty.call(r2, n2) && (e3[n2] = r2[n2]);
    }
    return e3;
  }, l = /* @__PURE__ */ function() {
    function e3(e4, t2) {
      for (var r2 = 0; r2 < t2.length; r2++) {
        var n2 = t2[r2];
        n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e4, n2.key, n2);
      }
    }
    return function(t2, r2, n2) {
      return r2 && e3(t2.prototype, r2), n2 && e3(t2, n2), t2;
    };
  }(), f = r(3);
  Object.defineProperty(t, "conformToMask", { enumerable: true, get: function() {
    return n(f).default;
  } });
  var p = n(r(11)), h = n(r(9)), y = n(r(5)), m = r(2), b = function(e3) {
    function t2() {
      var e4;
      i(this, t2);
      for (var r2 = arguments.length, n2 = Array(r2), o2 = 0; o2 < r2; o2++)
        n2[o2] = arguments[o2];
      var u2 = a(this, (e4 = t2.__proto__ || Object.getPrototypeOf(t2)).call.apply(e4, [this].concat(n2)));
      return u2.setRef = u2.setRef.bind(u2), u2.onBlur = u2.onBlur.bind(u2), u2.onChange = u2.onChange.bind(u2), u2;
    }
    return u(t2, e3), l(t2, [{ key: "setRef", value: function(e4) {
      this.inputElement = e4;
    } }, { key: "initTextMask", value: function() {
      var e4 = this.props, t3 = this.props.value;
      this.textMaskInputElement = (0, y.default)(s({ inputElement: this.inputElement }, e4)), this.textMaskInputElement.update(t3);
    } }, { key: "componentDidMount", value: function() {
      this.initTextMask();
    } }, { key: "componentDidUpdate", value: function(e4) {
      var t3 = this.props, r2 = t3.value, n2 = t3.pipe, o2 = t3.mask, s2 = { guide: t3.guide, placeholderChar: t3.placeholderChar, showMask: t3.showMask }, l2 = "function" == typeof n2 && "function" == typeof e4.pipe ? n2.toString() !== e4.pipe.toString() : (0, m.isNil)(n2) && !(0, m.isNil)(e4.pipe) || !(0, m.isNil)(n2) && (0, m.isNil)(e4.pipe), f2 = o2.toString() !== e4.mask.toString(), c = Object.keys(s2).some(function(t4) {
        return s2[t4] !== e4[t4];
      }) || f2 || l2;
      (r2 !== this.inputElement.value || c) && this.initTextMask();
    } }, { key: "render", value: function() {
      var t3 = this.props, e4 = t3.render, r2 = o(t3, ["render"]);
      return delete r2.mask, delete r2.guide, delete r2.pipe, delete r2.placeholderChar, delete r2.keepCharPositions, delete r2.value, delete r2.onBlur, delete r2.onChange, delete r2.showMask, e4(this.setRef, s({ onBlur: this.onBlur, onChange: this.onChange, defaultValue: this.props.value }, r2));
    } }, { key: "onChange", value: function(e4) {
      this.textMaskInputElement.update(), "function" == typeof this.props.onChange && this.props.onChange(e4);
    } }, { key: "onBlur", value: function(e4) {
      "function" == typeof this.props.onBlur && this.props.onBlur(e4);
    } }]), t2;
  }(p.default.PureComponent);
  t.default = b, b.propTypes = { mask: h.default.oneOfType([h.default.array, h.default.func, h.default.bool, h.default.shape({ mask: h.default.oneOfType([h.default.array, h.default.func]), pipe: h.default.func })]).isRequired, guide: h.default.bool, value: h.default.oneOfType([h.default.string, h.default.number]), pipe: h.default.func, placeholderChar: h.default.string, keepCharPositions: h.default.bool, showMask: h.default.bool }, b.defaultProps = { render: function(e3, t2) {
    return p.default.createElement("input", s({ ref: e3 }, t2));
  } };
}, function(e2, t) {
  Object.defineProperty(t, "__esModule", { value: true }), t.placeholderChar = "_", t.strFunction = "function";
}, function(e2, t, r) {
  function n() {
    var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.placeholderChar;
    if (!o(e3))
      throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");
    if (-1 !== e3.indexOf(t2))
      throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: " + JSON.stringify(t2) + "\n\nThe mask that was received is: " + JSON.stringify(e3));
    return e3.map(function(e4) {
      return e4 instanceof RegExp ? t2 : e4;
    }).join("");
  }
  function o(e3) {
    return Array.isArray && Array.isArray(e3) || e3 instanceof Array;
  }
  function i(e3) {
    return "string" == typeof e3 || e3 instanceof String;
  }
  function a(e3) {
    return "number" == typeof e3 && void 0 === e3.length && !isNaN(e3);
  }
  function u(e3) {
    return null == e3;
  }
  function s(e3) {
    for (var t2 = [], r2 = void 0; -1 !== (r2 = e3.indexOf(c)); )
      t2.push(r2), e3.splice(r2, 1);
    return { maskWithoutCaretTraps: e3, indexes: t2 };
  }
  Object.defineProperty(t, "__esModule", { value: true }), t.convertMaskToPlaceholder = n, t.isArray = o, t.isString = i, t.isNumber = a, t.isNil = u, t.processCaretTraps = s;
  var l = r(1), f = [], c = "[]";
}, function(e2, t, r) {
  function n() {
    var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (!(0, i.isArray)(t2)) {
      if ((void 0 === t2 ? "undefined" : o(t2)) !== a.strFunction)
        throw new Error("Text-mask:conformToMask; The mask property must be an array.");
      t2 = t2(e3, r2), t2 = (0, i.processCaretTraps)(t2).maskWithoutCaretTraps;
    }
    var n2 = r2.guide, l = void 0 === n2 || n2, f = r2.previousConformedValue, c = void 0 === f ? s : f, p = r2.placeholderChar, d = void 0 === p ? a.placeholderChar : p, h = r2.placeholder, v = void 0 === h ? (0, i.convertMaskToPlaceholder)(t2, d) : h, y = r2.currentCaretPosition, m = r2.keepCharPositions, b = false === l && void 0 !== c, g = e3.length, k = c.length, C = v.length, O = t2.length, T = g - k, P = T > 0, x = y + (P ? -T : 0), w = x + Math.abs(T);
    if (true === m && !P) {
      for (var S = s, _ = x; _ < w; _++)
        v[_] === d && (S += d);
      e3 = e3.slice(0, x) + S + e3.slice(x, g);
    }
    for (var M = e3.split(s).map(function(e4, t3) {
      return { char: e4, isNew: t3 >= x && t3 < w };
    }), j = g - 1; j >= 0; j--) {
      var E = M[j].char;
      E !== d && E === v[j >= x && k === O ? j - T : j] && M.splice(j, 1);
    }
    var V = s, N = false;
    e:
      for (var A = 0; A < C; A++) {
        var B = v[A];
        if (B === d) {
          if (M.length > 0)
            for (; M.length > 0; ) {
              var I = M.shift(), F = I.char, q = I.isNew;
              if (F === d && true !== b) {
                V += d;
                continue e;
              }
              if (t2[A].test(F)) {
                if (true === m && false !== q && c !== s && false !== l && P) {
                  for (var D = M.length, L = null, W = 0; W < D; W++) {
                    var J = M[W];
                    if (J.char !== d && false === J.isNew)
                      break;
                    if (J.char === d) {
                      L = W;
                      break;
                    }
                  }
                  null !== L ? (V += F, M.splice(L, 1)) : A--;
                } else
                  V += F;
                continue e;
              }
              N = true;
            }
          false === b && (V += v.substr(A, C));
          break;
        }
        V += B;
      }
    if (b && false === P) {
      for (var U = null, H = 0; H < V.length; H++)
        v[H] === d && (U = H);
      V = null !== U ? V.substr(0, U + 1) : s;
    }
    return { conformedValue: V, meta: { someCharsRejected: N } };
  }
  Object.defineProperty(t, "__esModule", { value: true });
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  };
  t.default = n;
  var i = r(2), a = r(1), u = [], s = "";
}, function(e2, t) {
  function r(e3) {
    var t2 = e3.previousConformedValue, r2 = void 0 === t2 ? o : t2, i = e3.previousPlaceholder, a = void 0 === i ? o : i, u = e3.currentCaretPosition, s = void 0 === u ? 0 : u, l = e3.conformedValue, f = e3.rawValue, c = e3.placeholderChar, p = e3.placeholder, d = e3.indexesOfPipedChars, h = void 0 === d ? n : d, v = e3.caretTrapIndexes, y = void 0 === v ? n : v;
    if (0 === s || !f.length)
      return 0;
    var m = f.length, b = r2.length, g = p.length, k = l.length, C = m - b, O = C > 0;
    if (C > 1 && !O && 0 !== b)
      return s;
    var w = 0, S = void 0, _ = void 0;
    if (!O || r2 !== l && l !== p) {
      var M = l.toLowerCase(), R = f.toLowerCase().substr(0, s).split(o).filter(function(e4) {
        return -1 !== M.indexOf(e4);
      });
      _ = R[R.length - 1];
      var V = a.substr(0, R.length).split(o).filter(function(e4) {
        return e4 !== c;
      }).length, N = p.substr(0, R.length).split(o).filter(function(e4) {
        return e4 !== c;
      }).length, A = N !== V, B = void 0 !== a[R.length - 1] && void 0 !== p[R.length - 2] && a[R.length - 1] !== c && a[R.length - 1] !== p[R.length - 1] && a[R.length - 1] === p[R.length - 2];
      !O && (A || B) && V > 0 && p.indexOf(_) > -1 && void 0 !== f[s] && (S = true, _ = f[s]);
      for (var I = h.map(function(e4) {
        return M[e4];
      }), F = I.filter(function(e4) {
        return e4 === _;
      }).length, q = R.filter(function(e4) {
        return e4 === _;
      }).length, D = p.substr(0, p.indexOf(c)).split(o).filter(function(e4, t3) {
        return e4 === _ && f[t3] !== e4;
      }).length, L = D + q + F + (S ? 1 : 0), W = 0, J = 0; J < k && (w = J + 1, M[J] === _ && W++, !(W >= L)); J++)
        ;
    } else
      w = s - C;
    if (O) {
      for (var H = w, Y = w; Y <= g; Y++)
        if (p[Y] === c && (H = Y), p[Y] === c || -1 !== y.indexOf(Y) || Y === g)
          return H;
    } else if (S) {
      for (var z = w - 1; z >= 0; z--)
        if (l[z] === _ || -1 !== y.indexOf(z) || 0 === z)
          return z;
    } else
      for (var G = w; G >= 0; G--)
        if (p[G - 1] === c || -1 !== y.indexOf(G) || 0 === G)
          return G;
  }
  Object.defineProperty(t, "__esModule", { value: true }), t.default = r;
  var n = [], o = "";
}, function(e2, t, r) {
  function n(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function o(e3) {
    var t2 = { previousConformedValue: void 0, previousPlaceholder: void 0 };
    return { state: t2, update: function(r2) {
      var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e3, o2 = n2.inputElement, l = n2.mask, c = n2.guide, y2 = n2.pipe, b2 = n2.placeholderChar, g2 = void 0 === b2 ? h.placeholderChar : b2, k = n2.keepCharPositions, C = void 0 !== k && k, O = n2.showMask, T = void 0 !== O && O;
      if (void 0 === r2 && (r2 = o2.value), r2 !== t2.previousConformedValue) {
        (void 0 === l ? "undefined" : s(l)) === m && void 0 !== l.pipe && void 0 !== l.mask && (y2 = l.pipe, l = l.mask);
        var P = void 0, x = void 0;
        if (l instanceof Array && (P = (0, d.convertMaskToPlaceholder)(l, g2)), false !== l) {
          var w = a(r2), S = o2.selectionEnd, _ = t2.previousConformedValue, M = t2.previousPlaceholder, j = void 0;
          if ((void 0 === l ? "undefined" : s(l)) === h.strFunction) {
            if (false === (x = l(w, { currentCaretPosition: S, previousConformedValue: _, placeholderChar: g2 })))
              return;
            var E = (0, d.processCaretTraps)(x);
            x = E.maskWithoutCaretTraps, j = E.indexes, P = (0, d.convertMaskToPlaceholder)(x, g2);
          } else
            x = l;
          var N = { previousConformedValue: _, guide: c, placeholderChar: g2, pipe: y2, placeholder: P, currentCaretPosition: S, keepCharPositions: C }, B = (0, p.default)(w, x, N).conformedValue, I = (void 0 === y2 ? "undefined" : s(y2)) === h.strFunction, F = {};
          I && (false === (F = y2(B, u({ rawValue: w }, N))) ? F = { value: _, rejected: true } : (0, d.isString)(F) && (F = { value: F }));
          var q = I ? F.value : B, D = (0, f.default)({ previousConformedValue: _, previousPlaceholder: M, conformedValue: q, placeholder: P, rawValue: w, currentCaretPosition: S, placeholderChar: g2, indexesOfPipedChars: F.indexesOfPipedChars, caretTrapIndexes: j }), J = q === P && 0 === D ? T ? P : v : q;
          t2.previousConformedValue = J, t2.previousPlaceholder = P, o2.value !== J && (o2.value = J, i(o2, D));
        }
      }
    } };
  }
  function i(e3, t2) {
    document.activeElement === e3 && (b ? g(function() {
      return e3.setSelectionRange(t2, t2, y);
    }, 0) : e3.setSelectionRange(t2, t2, y));
  }
  function a(e3) {
    if ((0, d.isString)(e3))
      return e3;
    if ((0, d.isNumber)(e3))
      return String(e3);
    if (null == e3)
      return v;
    throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " + JSON.stringify(e3));
  }
  Object.defineProperty(t, "__esModule", { value: true });
  var u = Object.assign || function(e3) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var r2 = arguments[t2];
      for (var n2 in r2)
        Object.prototype.hasOwnProperty.call(r2, n2) && (e3[n2] = r2[n2]);
    }
    return e3;
  }, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  };
  t.default = o;
  var f = n(r(4)), p = n(r(3)), d = r(2), h = r(1), v = "", y = "none", m = "object", b = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent), g = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : setTimeout;
}, function(e2, t) {
  function r(e3) {
    return function() {
      return e3;
    };
  }
  var n = function() {
  };
  n.thatReturns = r, n.thatReturnsFalse = r(false), n.thatReturnsTrue = r(true), n.thatReturnsNull = r(null), n.thatReturnsThis = function() {
    return this;
  }, n.thatReturnsArgument = function(e3) {
    return e3;
  }, e2.exports = n;
}, function(e2, t, r) {
  function n(e3, t2, r2, n2, i, a, u, s) {
    if (!e3) {
      var l;
      if (void 0 === t2)
        l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      else {
        var f = [r2, n2, i, a, u, s], c = 0;
        (l = new Error(t2.replace(/%s/g, function() {
          return f[c++];
        }))).name = "Invariant Violation";
      }
      throw l.framesToPop = 1, l;
    }
  }
  e2.exports = n;
}, function(e2, t, r) {
  var n = r(6), o = r(7), i = r(10);
  e2.exports = function() {
    function e3(e4, t3, r3, n2, a, u) {
      u !== i && o(false, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    }
    function t2() {
      return e3;
    }
    e3.isRequired = e3;
    var r2 = { array: e3, bool: e3, func: e3, number: e3, object: e3, string: e3, symbol: e3, any: e3, arrayOf: t2, element: e3, instanceOf: t2, node: e3, objectOf: t2, oneOf: t2, oneOfType: t2, shape: t2, exact: t2 };
    return r2.checkPropTypes = n, r2.PropTypes = r2, r2;
  };
}, function(e2, t, r) {
  e2.exports = r(8)();
}, function(e2, t) {
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  e2.exports = r;
}, function(t, r) {
  t.exports = e;
}]))), regenerate = { exports: {} };
module = regenerate, exports = regenerate.exports, function(root) {
  var freeExports = exports, freeModule = module && module.exports == freeExports && module, freeGlobal = "object" == typeof commonjsGlobal && commonjsGlobal;
  freeGlobal.global !== freeGlobal && freeGlobal.window !== freeGlobal || (root = freeGlobal);
  var ERRORS_rangeOrder = "A range\u2019s `stop` value must be greater than or equal to the `start` value.", ERRORS_codePointRange = "Invalid code point value. Code points range from U+000000 to U+10FFFF.", regexNull = /\\x00([^0123456789]|$)/g, object = {}, hasOwnProperty = object.hasOwnProperty, forEach = function(array, callback) {
    for (var index = -1, length = array.length; ++index < length; )
      callback(array[index], index);
  }, toString = object.toString, isArray = function(value) {
    return "[object Array]" == toString.call(value);
  }, isNumber = function(value) {
    return "number" == typeof value || "[object Number]" == toString.call(value);
  }, pad = function(number2, totalCharacters) {
    var string = String(number2);
    return string.length < totalCharacters ? ("0000" + string).slice(-totalCharacters) : string;
  }, hex = function(number2) {
    return Number(number2).toString(16).toUpperCase();
  }, slice = [].slice, dataRemove = function(data, codePoint) {
    for (var start, end, index = 0, length = data.length; index < length; ) {
      if (start = data[index], end = data[index + 1], codePoint >= start && codePoint < end)
        return codePoint == start ? end == start + 1 ? (data.splice(index, 2), data) : (data[index] = codePoint + 1, data) : codePoint == end - 1 ? (data[index + 1] = codePoint, data) : (data.splice(index, 2, start, codePoint, codePoint + 1, end), data);
      index += 2;
    }
    return data;
  }, dataRemoveRange = function(data, rangeStart, rangeEnd) {
    if (rangeEnd < rangeStart)
      throw Error(ERRORS_rangeOrder);
    for (var start, end, index = 0; index < data.length; ) {
      if (start = data[index], end = data[index + 1] - 1, start > rangeEnd)
        return data;
      if (rangeStart <= start && rangeEnd >= end)
        data.splice(index, 2);
      else {
        if (rangeStart >= start && rangeEnd < end)
          return rangeStart == start ? (data[index] = rangeEnd + 1, data[index + 1] = end + 1, data) : (data.splice(index, 2, start, rangeStart, rangeEnd + 1, end + 1), data);
        if (rangeStart >= start && rangeStart <= end)
          data[index + 1] = rangeStart;
        else if (rangeEnd >= start && rangeEnd <= end)
          return data[index] = rangeEnd + 1, data;
        index += 2;
      }
    }
    return data;
  }, dataAdd = function(data, codePoint) {
    var start, end, index = 0, lastIndex = null, length = data.length;
    if (codePoint < 0 || codePoint > 1114111)
      throw RangeError(ERRORS_codePointRange);
    for (; index < length; ) {
      if (start = data[index], end = data[index + 1], codePoint >= start && codePoint < end)
        return data;
      if (codePoint == start - 1)
        return data[index] = codePoint, data;
      if (start > codePoint)
        return data.splice(null != lastIndex ? lastIndex + 2 : 0, 0, codePoint, codePoint + 1), data;
      if (codePoint == end)
        return codePoint + 1 == data[index + 2] ? (data.splice(index, 4, start, data[index + 3]), data) : (data[index + 1] = codePoint + 1, data);
      lastIndex = index, index += 2;
    }
    return data.push(codePoint, codePoint + 1), data;
  }, dataAddData = function(dataA, dataB) {
    for (var start, end, index = 0, data = dataA.slice(), length = dataB.length; index < length; )
      data = (start = dataB[index]) == (end = dataB[index + 1] - 1) ? dataAdd(data, start) : dataAddRange(data, start, end), index += 2;
    return data;
  }, dataAddRange = function(data, rangeStart, rangeEnd) {
    if (rangeEnd < rangeStart)
      throw Error(ERRORS_rangeOrder);
    if (rangeStart < 0 || rangeStart > 1114111 || rangeEnd < 0 || rangeEnd > 1114111)
      throw RangeError(ERRORS_codePointRange);
    for (var start, end, index = 0, added = false, length = data.length; index < length; ) {
      if (start = data[index], end = data[index + 1], added) {
        if (start == rangeEnd + 1)
          return data.splice(index - 1, 2), data;
        if (start > rangeEnd)
          return data;
        start >= rangeStart && start <= rangeEnd && (end > rangeStart && end - 1 <= rangeEnd ? (data.splice(index, 2), index -= 2) : (data.splice(index - 1, 2), index -= 2));
      } else {
        if (start == rangeEnd + 1 || start == rangeEnd)
          return data[index] = rangeStart, data;
        if (start > rangeEnd)
          return data.splice(index, 0, rangeStart, rangeEnd + 1), data;
        if (rangeStart >= start && rangeStart < end && rangeEnd + 1 <= end)
          return data;
        rangeStart >= start && rangeStart < end || end == rangeStart ? (data[index + 1] = rangeEnd + 1, added = true) : rangeStart <= start && rangeEnd + 1 >= end && (data[index] = rangeStart, data[index + 1] = rangeEnd + 1, added = true);
      }
      index += 2;
    }
    return added || data.push(rangeStart, rangeEnd + 1), data;
  }, dataContains = function(data, codePoint) {
    var index = 0, length = data.length, start = data[index], end = data[length - 1];
    if (length >= 2 && (codePoint < start || codePoint > end))
      return false;
    for (; index < length; ) {
      if (start = data[index], end = data[index + 1], codePoint >= start && codePoint < end)
        return true;
      index += 2;
    }
    return false;
  }, dataIsEmpty = function(data) {
    return !data.length;
  }, dataIsSingleton = function(data) {
    return 2 == data.length && data[0] + 1 == data[1];
  }, dataToArray = function(data) {
    for (var start, end, index = 0, result = [], length = data.length; index < length; ) {
      for (start = data[index], end = data[index + 1]; start < end; )
        result.push(start), ++start;
      index += 2;
    }
    return result;
  }, floor = Math.floor, highSurrogate = function(codePoint) {
    return parseInt(floor((codePoint - 65536) / 1024) + 55296, 10);
  }, lowSurrogate = function(codePoint) {
    return parseInt((codePoint - 65536) % 1024 + 56320, 10);
  }, stringFromCharCode = String.fromCharCode, codePointToString = function(codePoint) {
    return 9 == codePoint ? "\\t" : 10 == codePoint ? "\\n" : 12 == codePoint ? "\\f" : 13 == codePoint ? "\\r" : 45 == codePoint ? "\\x2D" : 92 == codePoint ? "\\\\" : 36 == codePoint || codePoint >= 40 && codePoint <= 43 || 46 == codePoint || 47 == codePoint || 63 == codePoint || codePoint >= 91 && codePoint <= 94 || codePoint >= 123 && codePoint <= 125 ? "\\" + stringFromCharCode(codePoint) : codePoint >= 32 && codePoint <= 126 ? stringFromCharCode(codePoint) : codePoint <= 255 ? "\\x" + pad(hex(codePoint), 2) : "\\u" + pad(hex(codePoint), 4);
  }, codePointToStringUnicode = function(codePoint) {
    return codePoint <= 65535 ? codePointToString(codePoint) : "\\u{" + codePoint.toString(16).toUpperCase() + "}";
  }, symbolToCodePoint = function(symbol) {
    var length = symbol.length, first = symbol.charCodeAt(0);
    return first >= 55296 && first <= 56319 && length > 1 ? 1024 * (first - 55296) + symbol.charCodeAt(1) - 56320 + 65536 : first;
  }, createBMPCharacterClasses = function(data) {
    var start, end, result = "", index = 0, length = data.length;
    if (dataIsSingleton(data))
      return codePointToString(data[0]);
    for (; index < length; )
      result += (start = data[index]) == (end = data[index + 1] - 1) ? codePointToString(start) : start + 1 == end ? codePointToString(start) + codePointToString(end) : codePointToString(start) + "-" + codePointToString(end), index += 2;
    return "[" + result + "]";
  }, optimizeByLowSurrogates = function(surrogateMappings) {
    if (1 == surrogateMappings.length)
      return surrogateMappings;
    for (var index = -1, innerIndex = -1; ++index < surrogateMappings.length; ) {
      var mapping = surrogateMappings[index], lowSurrogates = mapping[1], lowSurrogateStart = lowSurrogates[0], lowSurrogateEnd = lowSurrogates[1];
      for (innerIndex = index; ++innerIndex < surrogateMappings.length; ) {
        var otherMapping = surrogateMappings[innerIndex], otherLowSurrogates = otherMapping[1], otherLowSurrogateStart = otherLowSurrogates[0], otherLowSurrogateEnd = otherLowSurrogates[1];
        lowSurrogateStart == otherLowSurrogateStart && lowSurrogateEnd == otherLowSurrogateEnd && 2 === otherLowSurrogates.length && (dataIsSingleton(otherMapping[0]) ? mapping[0] = dataAdd(mapping[0], otherMapping[0][0]) : mapping[0] = dataAddRange(mapping[0], otherMapping[0][0], otherMapping[0][1] - 1), surrogateMappings.splice(innerIndex, 1), --innerIndex);
      }
    }
    return surrogateMappings;
  }, surrogateSet = function(data) {
    if (!data.length)
      return [];
    for (var start, end, startHigh, startLow, endHigh, endLow, index = 0, surrogateMappings = [], length = data.length; index < length; ) {
      start = data[index], end = data[index + 1] - 1, startHigh = highSurrogate(start), startLow = lowSurrogate(start), endHigh = highSurrogate(end);
      var endsWithHighestLowSurrogate = 57343 == (endLow = lowSurrogate(end)), complete = false;
      startHigh == endHigh || 56320 == startLow && endsWithHighestLowSurrogate ? (surrogateMappings.push([[startHigh, endHigh + 1], [startLow, endLow + 1]]), complete = true) : surrogateMappings.push([[startHigh, startHigh + 1], [startLow, 57344]]), !complete && startHigh + 1 < endHigh && (endsWithHighestLowSurrogate ? (surrogateMappings.push([[startHigh + 1, endHigh + 1], [56320, endLow + 1]]), complete = true) : surrogateMappings.push([[startHigh + 1, endHigh], [56320, 57344]])), complete || surrogateMappings.push([[endHigh, endHigh + 1], [56320, endLow + 1]]), index += 2;
    }
    return function(surrogateMappings2) {
      for (var mapping, nextMapping, highSurrogates, lowSurrogates, nextHighSurrogates, nextLowSurrogates, result = [], tmpLow = [], addLow = false, index2 = -1, length2 = surrogateMappings2.length; ++index2 < length2; )
        if (mapping = surrogateMappings2[index2], nextMapping = surrogateMappings2[index2 + 1]) {
          for (highSurrogates = mapping[0], lowSurrogates = mapping[1], nextHighSurrogates = nextMapping[0], nextLowSurrogates = nextMapping[1], tmpLow = lowSurrogates; nextHighSurrogates && highSurrogates[0] == nextHighSurrogates[0] && highSurrogates[1] == nextHighSurrogates[1]; )
            tmpLow = dataIsSingleton(nextLowSurrogates) ? dataAdd(tmpLow, nextLowSurrogates[0]) : dataAddRange(tmpLow, nextLowSurrogates[0], nextLowSurrogates[1] - 1), highSurrogates = (mapping = surrogateMappings2[++index2])[0], lowSurrogates = mapping[1], nextHighSurrogates = (nextMapping = surrogateMappings2[index2 + 1]) && nextMapping[0], nextLowSurrogates = nextMapping && nextMapping[1], addLow = true;
          result.push([highSurrogates, addLow ? tmpLow : lowSurrogates]), addLow = false;
        } else
          result.push(mapping);
      return optimizeByLowSurrogates(result);
    }(surrogateMappings);
  }, createCharacterClassesFromData = function(data, bmpOnly, hasUnicodeFlag) {
    if (hasUnicodeFlag)
      return function(data2) {
        var start, end, result2 = "", index = 0, length = data2.length;
        if (dataIsSingleton(data2))
          return codePointToStringUnicode(data2[0]);
        for (; index < length; )
          result2 += (start = data2[index]) == (end = data2[index + 1] - 1) ? codePointToStringUnicode(start) : start + 1 == end ? codePointToStringUnicode(start) + codePointToStringUnicode(end) : codePointToStringUnicode(start) + "-" + codePointToStringUnicode(end), index += 2;
        return "[" + result2 + "]";
      }(data);
    var result = [], parts = function(data2) {
      for (var start, end, loneHighSurrogates2 = [], loneLowSurrogates2 = [], bmp2 = [], astral2 = [], index = 0, length = data2.length; index < length; )
        start = data2[index], end = data2[index + 1] - 1, start < 55296 ? (end < 55296 && bmp2.push(start, end + 1), end >= 55296 && end <= 56319 && (bmp2.push(start, 55296), loneHighSurrogates2.push(55296, end + 1)), end >= 56320 && end <= 57343 && (bmp2.push(start, 55296), loneHighSurrogates2.push(55296, 56320), loneLowSurrogates2.push(56320, end + 1)), end > 57343 && (bmp2.push(start, 55296), loneHighSurrogates2.push(55296, 56320), loneLowSurrogates2.push(56320, 57344), end <= 65535 ? bmp2.push(57344, end + 1) : (bmp2.push(57344, 65536), astral2.push(65536, end + 1)))) : start >= 55296 && start <= 56319 ? (end >= 55296 && end <= 56319 && loneHighSurrogates2.push(start, end + 1), end >= 56320 && end <= 57343 && (loneHighSurrogates2.push(start, 56320), loneLowSurrogates2.push(56320, end + 1)), end > 57343 && (loneHighSurrogates2.push(start, 56320), loneLowSurrogates2.push(56320, 57344), end <= 65535 ? bmp2.push(57344, end + 1) : (bmp2.push(57344, 65536), astral2.push(65536, end + 1)))) : start >= 56320 && start <= 57343 ? (end >= 56320 && end <= 57343 && loneLowSurrogates2.push(start, end + 1), end > 57343 && (loneLowSurrogates2.push(start, 57344), end <= 65535 ? bmp2.push(57344, end + 1) : (bmp2.push(57344, 65536), astral2.push(65536, end + 1)))) : start > 57343 && start <= 65535 ? end <= 65535 ? bmp2.push(start, end + 1) : (bmp2.push(start, 65536), astral2.push(65536, end + 1)) : astral2.push(start, end + 1), index += 2;
      return { loneHighSurrogates: loneHighSurrogates2, loneLowSurrogates: loneLowSurrogates2, bmp: bmp2, astral: astral2 };
    }(data), loneHighSurrogates = parts.loneHighSurrogates, loneLowSurrogates = parts.loneLowSurrogates, bmp = parts.bmp, astral = parts.astral, hasLoneHighSurrogates = !dataIsEmpty(loneHighSurrogates), hasLoneLowSurrogates = !dataIsEmpty(loneLowSurrogates), surrogateMappings = surrogateSet(astral);
    return bmpOnly && (bmp = dataAddData(bmp, loneHighSurrogates), hasLoneHighSurrogates = false, bmp = dataAddData(bmp, loneLowSurrogates), hasLoneLowSurrogates = false), dataIsEmpty(bmp) || result.push(createBMPCharacterClasses(bmp)), surrogateMappings.length && result.push(function(surrogateMappings2) {
      var result2 = [];
      return forEach(surrogateMappings2, function(surrogateMapping) {
        var highSurrogates = surrogateMapping[0], lowSurrogates = surrogateMapping[1];
        result2.push(createBMPCharacterClasses(highSurrogates) + createBMPCharacterClasses(lowSurrogates));
      }), result2.join("|");
    }(surrogateMappings)), hasLoneHighSurrogates && result.push(createBMPCharacterClasses(loneHighSurrogates) + "(?![\\uDC00-\\uDFFF])"), hasLoneLowSurrogates && result.push("(?:[^\\uD800-\\uDBFF]|^)" + createBMPCharacterClasses(loneLowSurrogates)), result.join("|");
  }, regenerate2 = function(value) {
    return arguments.length > 1 && (value = slice.call(arguments)), this instanceof regenerate2 ? (this.data = [], value ? this.add(value) : this) : new regenerate2().add(value);
  };
  regenerate2.version = "1.4.2";
  var proto = regenerate2.prototype;
  !function(destination, source) {
    var key;
    for (key in source)
      hasOwnProperty.call(source, key) && (destination[key] = source[key]);
  }(proto, { add: function(value) {
    var $this = this;
    return null == value ? $this : value instanceof regenerate2 ? ($this.data = dataAddData($this.data, value.data), $this) : (arguments.length > 1 && (value = slice.call(arguments)), isArray(value) ? (forEach(value, function(item) {
      $this.add(item);
    }), $this) : ($this.data = dataAdd($this.data, isNumber(value) ? value : symbolToCodePoint(value)), $this));
  }, remove: function(value) {
    var $this = this;
    return null == value ? $this : value instanceof regenerate2 ? ($this.data = function(dataA, dataB) {
      for (var start, end, index = 0, data = dataA.slice(), length = dataB.length; index < length; )
        data = (start = dataB[index]) == (end = dataB[index + 1] - 1) ? dataRemove(data, start) : dataRemoveRange(data, start, end), index += 2;
      return data;
    }($this.data, value.data), $this) : (arguments.length > 1 && (value = slice.call(arguments)), isArray(value) ? (forEach(value, function(item) {
      $this.remove(item);
    }), $this) : ($this.data = dataRemove($this.data, isNumber(value) ? value : symbolToCodePoint(value)), $this));
  }, addRange: function(start, end) {
    return this.data = dataAddRange(this.data, isNumber(start) ? start : symbolToCodePoint(start), isNumber(end) ? end : symbolToCodePoint(end)), this;
  }, removeRange: function(start, end) {
    var startCodePoint = isNumber(start) ? start : symbolToCodePoint(start), endCodePoint = isNumber(end) ? end : symbolToCodePoint(end);
    return this.data = dataRemoveRange(this.data, startCodePoint, endCodePoint), this;
  }, intersection: function(argument) {
    var array = argument instanceof regenerate2 ? dataToArray(argument.data) : argument;
    return this.data = function(data, codePoints) {
      for (var codePoint, index = 0, length = codePoints.length, result = []; index < length; )
        codePoint = codePoints[index], dataContains(data, codePoint) && result.push(codePoint), ++index;
      return function(codePoints2) {
        for (var tmp, index2 = -1, length2 = codePoints2.length, max = length2 - 1, result2 = [], isStart = true, previous = 0; ++index2 < length2; )
          if (tmp = codePoints2[index2], isStart)
            result2.push(tmp), previous = tmp, isStart = false;
          else if (tmp == previous + 1) {
            if (index2 != max) {
              previous = tmp;
              continue;
            }
            isStart = true, result2.push(tmp + 1);
          } else
            result2.push(previous + 1, tmp), previous = tmp;
        return isStart || result2.push(tmp + 1), result2;
      }(result);
    }(this.data, array), this;
  }, contains: function(codePoint) {
    return dataContains(this.data, isNumber(codePoint) ? codePoint : symbolToCodePoint(codePoint));
  }, clone: function() {
    var set2 = new regenerate2();
    return set2.data = this.data.slice(0), set2;
  }, toString: function(options) {
    var result = createCharacterClassesFromData(this.data, !!options && options.bmpOnly, !!options && options.hasUnicodeFlag);
    return result ? result.replace(regexNull, "\\0$1") : "[]";
  }, toRegExp: function(flags) {
    var pattern = this.toString(flags && -1 != flags.indexOf("u") ? { hasUnicodeFlag: true } : null);
    return RegExp(pattern, flags || "");
  }, valueOf: function() {
    return dataToArray(this.data);
  } }), proto.toArray = proto.valueOf, freeExports && !freeExports.nodeType ? freeModule ? freeModule.exports = regenerate2 : freeExports.regenerate = regenerate2 : root.regenerate = regenerate2;
}(commonjsGlobal);
var regenerateExports = regenerate.exports;
const set$3 = regenerateExports(170, 181, 186, 748, 750, 895, 902, 908, 1369, 1749, 1791, 1808, 1969, 2042, 2074, 2084, 2088, 2365, 2384, 2482, 2493, 2510, 2556, 2654, 2749, 2768, 2809, 2877, 2929, 2947, 2972, 3024, 3133, 3200, 3261, 3294, 3389, 3406, 3517, 3716, 3749, 3773, 3782, 3840, 4159, 4193, 4238, 4295, 4301, 4696, 4800, 6103, 6108, 6314, 6823, 7418, 8025, 8027, 8029, 8126, 8305, 8319, 8450, 8455, 8469, 8484, 8486, 8488, 8526, 11559, 11565, 11631, 11823, 43259, 43471, 43642, 43697, 43712, 43714, 64285, 64318, 67592, 67644, 68096, 69415, 69956, 69959, 70006, 70106, 70108, 70280, 70461, 70480, 70855, 71236, 71352, 71945, 71999, 72001, 72161, 72163, 72192, 72250, 72272, 72349, 72768, 73030, 73112, 73648, 94032, 94179, 119970, 119995, 120134, 123214, 125259, 126500, 126503, 126521, 126523, 126530, 126535, 126537, 126539, 126548, 126551, 126553, 126555, 126557, 126559, 126564, 126590);
set$3.addRange(65, 90).addRange(97, 122).addRange(192, 214).addRange(216, 246).addRange(248, 705).addRange(710, 721).addRange(736, 740).addRange(880, 884).addRange(886, 887).addRange(890, 893).addRange(904, 906).addRange(910, 929).addRange(931, 1013).addRange(1015, 1153).addRange(1162, 1327).addRange(1329, 1366).addRange(1376, 1416).addRange(1488, 1514).addRange(1519, 1522).addRange(1568, 1610).addRange(1646, 1647).addRange(1649, 1747).addRange(1765, 1766).addRange(1774, 1775).addRange(1786, 1788).addRange(1810, 1839).addRange(1869, 1957).addRange(1994, 2026).addRange(2036, 2037).addRange(2048, 2069).addRange(2112, 2136).addRange(2144, 2154).addRange(2208, 2228).addRange(2230, 2247).addRange(2308, 2361).addRange(2392, 2401).addRange(2417, 2432).addRange(2437, 2444).addRange(2447, 2448).addRange(2451, 2472).addRange(2474, 2480).addRange(2486, 2489).addRange(2524, 2525).addRange(2527, 2529).addRange(2544, 2545).addRange(2565, 2570).addRange(2575, 2576).addRange(2579, 2600).addRange(2602, 2608).addRange(2610, 2611).addRange(2613, 2614), set$3.addRange(2616, 2617).addRange(2649, 2652).addRange(2674, 2676).addRange(2693, 2701).addRange(2703, 2705).addRange(2707, 2728).addRange(2730, 2736).addRange(2738, 2739).addRange(2741, 2745).addRange(2784, 2785).addRange(2821, 2828).addRange(2831, 2832).addRange(2835, 2856).addRange(2858, 2864).addRange(2866, 2867).addRange(2869, 2873).addRange(2908, 2909).addRange(2911, 2913).addRange(2949, 2954).addRange(2958, 2960).addRange(2962, 2965).addRange(2969, 2970).addRange(2974, 2975).addRange(2979, 2980).addRange(2984, 2986).addRange(2990, 3001).addRange(3077, 3084).addRange(3086, 3088).addRange(3090, 3112).addRange(3114, 3129).addRange(3160, 3162).addRange(3168, 3169).addRange(3205, 3212).addRange(3214, 3216).addRange(3218, 3240).addRange(3242, 3251).addRange(3253, 3257).addRange(3296, 3297).addRange(3313, 3314).addRange(3332, 3340).addRange(3342, 3344).addRange(3346, 3386).addRange(3412, 3414).addRange(3423, 3425).addRange(3450, 3455).addRange(3461, 3478).addRange(3482, 3505).addRange(3507, 3515).addRange(3520, 3526).addRange(3585, 3632).addRange(3634, 3635), set$3.addRange(3648, 3654).addRange(3713, 3714).addRange(3718, 3722).addRange(3724, 3747).addRange(3751, 3760).addRange(3762, 3763).addRange(3776, 3780).addRange(3804, 3807).addRange(3904, 3911).addRange(3913, 3948).addRange(3976, 3980).addRange(4096, 4138).addRange(4176, 4181).addRange(4186, 4189).addRange(4197, 4198).addRange(4206, 4208).addRange(4213, 4225).addRange(4256, 4293).addRange(4304, 4346).addRange(4348, 4680).addRange(4682, 4685).addRange(4688, 4694).addRange(4698, 4701).addRange(4704, 4744).addRange(4746, 4749).addRange(4752, 4784).addRange(4786, 4789).addRange(4792, 4798).addRange(4802, 4805).addRange(4808, 4822).addRange(4824, 4880).addRange(4882, 4885).addRange(4888, 4954).addRange(4992, 5007).addRange(5024, 5109).addRange(5112, 5117).addRange(5121, 5740).addRange(5743, 5759).addRange(5761, 5786).addRange(5792, 5866).addRange(5873, 5880).addRange(5888, 5900).addRange(5902, 5905).addRange(5920, 5937).addRange(5952, 5969).addRange(5984, 5996).addRange(5998, 6e3).addRange(6016, 6067).addRange(6176, 6264).addRange(6272, 6276).addRange(6279, 6312), set$3.addRange(6320, 6389).addRange(6400, 6430).addRange(6480, 6509).addRange(6512, 6516).addRange(6528, 6571).addRange(6576, 6601).addRange(6656, 6678).addRange(6688, 6740).addRange(6917, 6963).addRange(6981, 6987).addRange(7043, 7072).addRange(7086, 7087).addRange(7098, 7141).addRange(7168, 7203).addRange(7245, 7247).addRange(7258, 7293).addRange(7296, 7304).addRange(7312, 7354).addRange(7357, 7359).addRange(7401, 7404).addRange(7406, 7411).addRange(7413, 7414).addRange(7424, 7615).addRange(7680, 7957).addRange(7960, 7965).addRange(7968, 8005).addRange(8008, 8013).addRange(8016, 8023).addRange(8031, 8061).addRange(8064, 8116).addRange(8118, 8124).addRange(8130, 8132).addRange(8134, 8140).addRange(8144, 8147).addRange(8150, 8155).addRange(8160, 8172).addRange(8178, 8180).addRange(8182, 8188).addRange(8336, 8348).addRange(8458, 8467).addRange(8473, 8477).addRange(8490, 8493).addRange(8495, 8505).addRange(8508, 8511).addRange(8517, 8521).addRange(8579, 8580).addRange(11264, 11310).addRange(11312, 11358).addRange(11360, 11492).addRange(11499, 11502).addRange(11506, 11507), set$3.addRange(11520, 11557).addRange(11568, 11623).addRange(11648, 11670).addRange(11680, 11686).addRange(11688, 11694).addRange(11696, 11702).addRange(11704, 11710).addRange(11712, 11718).addRange(11720, 11726).addRange(11728, 11734).addRange(11736, 11742).addRange(12293, 12294).addRange(12337, 12341).addRange(12347, 12348).addRange(12353, 12438).addRange(12445, 12447).addRange(12449, 12538).addRange(12540, 12543).addRange(12549, 12591).addRange(12593, 12686).addRange(12704, 12735).addRange(12784, 12799).addRange(13312, 19903).addRange(19968, 40956).addRange(40960, 42124).addRange(42192, 42237).addRange(42240, 42508).addRange(42512, 42527).addRange(42538, 42539).addRange(42560, 42606).addRange(42623, 42653).addRange(42656, 42725).addRange(42775, 42783).addRange(42786, 42888).addRange(42891, 42943).addRange(42946, 42954).addRange(42997, 43009).addRange(43011, 43013).addRange(43015, 43018).addRange(43020, 43042).addRange(43072, 43123).addRange(43138, 43187).addRange(43250, 43255).addRange(43261, 43262).addRange(43274, 43301).addRange(43312, 43334).addRange(43360, 43388).addRange(43396, 43442).addRange(43488, 43492).addRange(43494, 43503).addRange(43514, 43518), set$3.addRange(43520, 43560).addRange(43584, 43586).addRange(43588, 43595).addRange(43616, 43638).addRange(43646, 43695).addRange(43701, 43702).addRange(43705, 43709).addRange(43739, 43741).addRange(43744, 43754).addRange(43762, 43764).addRange(43777, 43782).addRange(43785, 43790).addRange(43793, 43798).addRange(43808, 43814).addRange(43816, 43822).addRange(43824, 43866).addRange(43868, 43881).addRange(43888, 44002).addRange(44032, 55203).addRange(55216, 55238).addRange(55243, 55291).addRange(63744, 64109).addRange(64112, 64217).addRange(64256, 64262).addRange(64275, 64279).addRange(64287, 64296).addRange(64298, 64310).addRange(64312, 64316).addRange(64320, 64321).addRange(64323, 64324).addRange(64326, 64433).addRange(64467, 64829).addRange(64848, 64911).addRange(64914, 64967).addRange(65008, 65019).addRange(65136, 65140).addRange(65142, 65276).addRange(65313, 65338).addRange(65345, 65370).addRange(65382, 65470).addRange(65474, 65479).addRange(65482, 65487).addRange(65490, 65495).addRange(65498, 65500).addRange(65536, 65547).addRange(65549, 65574).addRange(65576, 65594).addRange(65596, 65597).addRange(65599, 65613).addRange(65616, 65629).addRange(65664, 65786), set$3.addRange(66176, 66204).addRange(66208, 66256).addRange(66304, 66335).addRange(66349, 66368).addRange(66370, 66377).addRange(66384, 66421).addRange(66432, 66461).addRange(66464, 66499).addRange(66504, 66511).addRange(66560, 66717).addRange(66736, 66771).addRange(66776, 66811).addRange(66816, 66855).addRange(66864, 66915).addRange(67072, 67382).addRange(67392, 67413).addRange(67424, 67431).addRange(67584, 67589).addRange(67594, 67637).addRange(67639, 67640).addRange(67647, 67669).addRange(67680, 67702).addRange(67712, 67742).addRange(67808, 67826).addRange(67828, 67829).addRange(67840, 67861).addRange(67872, 67897).addRange(67968, 68023).addRange(68030, 68031).addRange(68112, 68115).addRange(68117, 68119).addRange(68121, 68149).addRange(68192, 68220).addRange(68224, 68252).addRange(68288, 68295).addRange(68297, 68324).addRange(68352, 68405).addRange(68416, 68437).addRange(68448, 68466).addRange(68480, 68497).addRange(68608, 68680).addRange(68736, 68786).addRange(68800, 68850).addRange(68864, 68899).addRange(69248, 69289).addRange(69296, 69297).addRange(69376, 69404).addRange(69424, 69445).addRange(69552, 69572).addRange(69600, 69622).addRange(69635, 69687), set$3.addRange(69763, 69807).addRange(69840, 69864).addRange(69891, 69926).addRange(69968, 70002).addRange(70019, 70066).addRange(70081, 70084).addRange(70144, 70161).addRange(70163, 70187).addRange(70272, 70278).addRange(70282, 70285).addRange(70287, 70301).addRange(70303, 70312).addRange(70320, 70366).addRange(70405, 70412).addRange(70415, 70416).addRange(70419, 70440).addRange(70442, 70448).addRange(70450, 70451).addRange(70453, 70457).addRange(70493, 70497).addRange(70656, 70708).addRange(70727, 70730).addRange(70751, 70753).addRange(70784, 70831).addRange(70852, 70853).addRange(71040, 71086).addRange(71128, 71131).addRange(71168, 71215).addRange(71296, 71338).addRange(71424, 71450).addRange(71680, 71723).addRange(71840, 71903).addRange(71935, 71942).addRange(71948, 71955).addRange(71957, 71958).addRange(71960, 71983).addRange(72096, 72103).addRange(72106, 72144).addRange(72203, 72242).addRange(72284, 72329).addRange(72384, 72440).addRange(72704, 72712).addRange(72714, 72750).addRange(72818, 72847).addRange(72960, 72966).addRange(72968, 72969).addRange(72971, 73008).addRange(73056, 73061).addRange(73063, 73064).addRange(73066, 73097).addRange(73440, 73458), set$3.addRange(73728, 74649).addRange(74880, 75075).addRange(77824, 78894).addRange(82944, 83526).addRange(92160, 92728).addRange(92736, 92766).addRange(92880, 92909).addRange(92928, 92975).addRange(92992, 92995).addRange(93027, 93047).addRange(93053, 93071).addRange(93760, 93823).addRange(93952, 94026).addRange(94099, 94111).addRange(94176, 94177).addRange(94208, 100343).addRange(100352, 101589).addRange(101632, 101640).addRange(110592, 110878).addRange(110928, 110930).addRange(110948, 110951).addRange(110960, 111355).addRange(113664, 113770).addRange(113776, 113788).addRange(113792, 113800).addRange(113808, 113817).addRange(119808, 119892).addRange(119894, 119964).addRange(119966, 119967).addRange(119973, 119974).addRange(119977, 119980).addRange(119982, 119993).addRange(119997, 120003).addRange(120005, 120069).addRange(120071, 120074).addRange(120077, 120084).addRange(120086, 120092).addRange(120094, 120121).addRange(120123, 120126).addRange(120128, 120132).addRange(120138, 120144).addRange(120146, 120485).addRange(120488, 120512).addRange(120514, 120538).addRange(120540, 120570).addRange(120572, 120596).addRange(120598, 120628).addRange(120630, 120654).addRange(120656, 120686).addRange(120688, 120712).addRange(120714, 120744), set$3.addRange(120746, 120770).addRange(120772, 120779).addRange(123136, 123180).addRange(123191, 123197).addRange(123584, 123627).addRange(124928, 125124).addRange(125184, 125251).addRange(126464, 126467).addRange(126469, 126495).addRange(126497, 126498).addRange(126505, 126514).addRange(126516, 126519).addRange(126541, 126543).addRange(126545, 126546).addRange(126561, 126562).addRange(126567, 126570).addRange(126572, 126578).addRange(126580, 126583).addRange(126585, 126588).addRange(126592, 126601).addRange(126603, 126619).addRange(126625, 126627).addRange(126629, 126633).addRange(126635, 126651).addRange(131072, 173789).addRange(173824, 177972).addRange(177984, 178205).addRange(178208, 183969).addRange(183984, 191456).addRange(194560, 195101).addRange(196608, 201546);
var letter = getDefaultExportFromCjs(set$3);
const set$2 = regenerateExports(181, 257, 259, 261, 263, 265, 267, 269, 271, 273, 275, 277, 279, 281, 283, 285, 287, 289, 291, 293, 295, 297, 299, 301, 303, 305, 307, 309, 314, 316, 318, 320, 322, 324, 326, 331, 333, 335, 337, 339, 341, 343, 345, 347, 349, 351, 353, 355, 357, 359, 361, 363, 365, 367, 369, 371, 373, 375, 378, 380, 387, 389, 392, 402, 405, 414, 417, 419, 421, 424, 429, 432, 436, 438, 454, 457, 460, 462, 464, 466, 468, 470, 472, 474, 479, 481, 483, 485, 487, 489, 491, 493, 499, 501, 505, 507, 509, 511, 513, 515, 517, 519, 521, 523, 525, 527, 529, 531, 533, 535, 537, 539, 541, 543, 545, 547, 549, 551, 553, 555, 557, 559, 561, 572, 578, 583, 585, 587, 589, 881, 883, 887, 912, 985, 987, 989, 991, 993, 995, 997, 999, 1001, 1003, 1005, 1013, 1016, 1121, 1123, 1125, 1127, 1129, 1131, 1133, 1135, 1137, 1139, 1141, 1143, 1145, 1147, 1149, 1151, 1153, 1163, 1165, 1167, 1169, 1171, 1173, 1175, 1177, 1179, 1181, 1183, 1185, 1187, 1189, 1191, 1193, 1195, 1197, 1199, 1201, 1203, 1205, 1207, 1209, 1211, 1213, 1215, 1218, 1220, 1222, 1224, 1226, 1228, 1233, 1235, 1237, 1239, 1241, 1243, 1245, 1247, 1249, 1251, 1253, 1255, 1257, 1259, 1261, 1263, 1265, 1267, 1269, 1271, 1273, 1275, 1277, 1279, 1281, 1283, 1285, 1287, 1289, 1291, 1293, 1295, 1297, 1299, 1301, 1303, 1305, 1307, 1309, 1311, 1313, 1315, 1317, 1319, 1321, 1323, 1325, 1327, 7681, 7683, 7685, 7687, 7689, 7691, 7693, 7695, 7697, 7699, 7701, 7703, 7705, 7707, 7709, 7711, 7713, 7715, 7717, 7719, 7721, 7723, 7725, 7727, 7729, 7731, 7733, 7735, 7737, 7739, 7741, 7743, 7745, 7747, 7749, 7751, 7753, 7755, 7757, 7759, 7761, 7763, 7765, 7767, 7769, 7771, 7773, 7775, 7777, 7779, 7781, 7783, 7785, 7787, 7789, 7791, 7793, 7795, 7797, 7799, 7801, 7803, 7805, 7807, 7809, 7811, 7813, 7815, 7817, 7819, 7821, 7823, 7825, 7827, 7839, 7841, 7843, 7845, 7847, 7849, 7851, 7853, 7855, 7857, 7859, 7861, 7863, 7865, 7867, 7869, 7871, 7873, 7875, 7877, 7879, 7881, 7883, 7885, 7887, 7889, 7891, 7893, 7895, 7897, 7899, 7901, 7903, 7905, 7907, 7909, 7911, 7913, 7915, 7917, 7919, 7921, 7923, 7925, 7927, 7929, 7931, 7933, 8126, 8458, 8467, 8495, 8500, 8505, 8526, 8580, 11361, 11368, 11370, 11372, 11377, 11393, 11395, 11397, 11399, 11401, 11403, 11405, 11407, 11409, 11411, 11413, 11415, 11417, 11419, 11421, 11423, 11425, 11427, 11429, 11431, 11433, 11435, 11437, 11439, 11441, 11443, 11445, 11447, 11449, 11451, 11453, 11455, 11457, 11459, 11461, 11463, 11465, 11467, 11469, 11471, 11473, 11475, 11477, 11479, 11481, 11483, 11485, 11487, 11489, 11500, 11502, 11507, 11559, 11565, 42561, 42563, 42565, 42567, 42569, 42571, 42573, 42575, 42577, 42579, 42581, 42583, 42585, 42587, 42589, 42591, 42593, 42595, 42597, 42599, 42601, 42603, 42605, 42625, 42627, 42629, 42631, 42633, 42635, 42637, 42639, 42641, 42643, 42645, 42647, 42649, 42651, 42787, 42789, 42791, 42793, 42795, 42797, 42803, 42805, 42807, 42809, 42811, 42813, 42815, 42817, 42819, 42821, 42823, 42825, 42827, 42829, 42831, 42833, 42835, 42837, 42839, 42841, 42843, 42845, 42847, 42849, 42851, 42853, 42855, 42857, 42859, 42861, 42863, 42874, 42876, 42879, 42881, 42883, 42885, 42887, 42892, 42894, 42897, 42903, 42905, 42907, 42909, 42911, 42913, 42915, 42917, 42919, 42921, 42927, 42933, 42935, 42937, 42939, 42941, 42943, 42947, 42952, 42954, 42998, 43002, 119995, 120779);
set$2.addRange(97, 122).addRange(223, 246).addRange(248, 255).addRange(311, 312).addRange(328, 329).addRange(382, 384).addRange(396, 397).addRange(409, 411).addRange(426, 427).addRange(441, 442).addRange(445, 447).addRange(476, 477).addRange(495, 496).addRange(563, 569).addRange(575, 576).addRange(591, 659).addRange(661, 687).addRange(891, 893).addRange(940, 974).addRange(976, 977).addRange(981, 983).addRange(1007, 1011).addRange(1019, 1020).addRange(1072, 1119).addRange(1230, 1231).addRange(1376, 1416).addRange(4304, 4346).addRange(4349, 4351).addRange(5112, 5117).addRange(7296, 7304).addRange(7424, 7467).addRange(7531, 7543).addRange(7545, 7578).addRange(7829, 7837).addRange(7935, 7943).addRange(7952, 7957).addRange(7968, 7975).addRange(7984, 7991).addRange(8e3, 8005).addRange(8016, 8023).addRange(8032, 8039).addRange(8048, 8061).addRange(8064, 8071).addRange(8080, 8087).addRange(8096, 8103).addRange(8112, 8116).addRange(8118, 8119).addRange(8130, 8132).addRange(8134, 8135).addRange(8144, 8147).addRange(8150, 8151), set$2.addRange(8160, 8167).addRange(8178, 8180).addRange(8182, 8183).addRange(8462, 8463).addRange(8508, 8509).addRange(8518, 8521).addRange(11312, 11358).addRange(11365, 11366).addRange(11379, 11380).addRange(11382, 11387).addRange(11491, 11492).addRange(11520, 11557).addRange(42799, 42801).addRange(42865, 42872).addRange(42899, 42901).addRange(43824, 43866).addRange(43872, 43880).addRange(43888, 43967).addRange(64256, 64262).addRange(64275, 64279).addRange(65345, 65370).addRange(66600, 66639).addRange(66776, 66811).addRange(68800, 68850).addRange(71872, 71903).addRange(93792, 93823).addRange(119834, 119859).addRange(119886, 119892).addRange(119894, 119911).addRange(119938, 119963).addRange(119990, 119993).addRange(119997, 120003).addRange(120005, 120015).addRange(120042, 120067).addRange(120094, 120119).addRange(120146, 120171).addRange(120198, 120223).addRange(120250, 120275).addRange(120302, 120327).addRange(120354, 120379).addRange(120406, 120431).addRange(120458, 120485).addRange(120514, 120538).addRange(120540, 120545).addRange(120572, 120596).addRange(120598, 120603).addRange(120630, 120654).addRange(120656, 120661).addRange(120688, 120712).addRange(120714, 120719).addRange(120746, 120770), set$2.addRange(120772, 120777).addRange(125218, 125251);
var lowerCaseLetter = getDefaultExportFromCjs(set$2);
const set$1 = regenerateExports(185, 8304, 11517, 12295, 66369, 66378);
set$1.addRange(48, 57).addRange(178, 179).addRange(188, 190).addRange(1632, 1641).addRange(1776, 1785).addRange(1984, 1993).addRange(2406, 2415).addRange(2534, 2543).addRange(2548, 2553).addRange(2662, 2671).addRange(2790, 2799).addRange(2918, 2927).addRange(2930, 2935).addRange(3046, 3058).addRange(3174, 3183).addRange(3192, 3198).addRange(3302, 3311).addRange(3416, 3422).addRange(3430, 3448).addRange(3558, 3567).addRange(3664, 3673).addRange(3792, 3801).addRange(3872, 3891).addRange(4160, 4169).addRange(4240, 4249).addRange(4969, 4988).addRange(5870, 5872).addRange(6112, 6121).addRange(6128, 6137).addRange(6160, 6169).addRange(6470, 6479).addRange(6608, 6618).addRange(6784, 6793).addRange(6800, 6809).addRange(6992, 7001).addRange(7088, 7097).addRange(7232, 7241).addRange(7248, 7257).addRange(8308, 8313).addRange(8320, 8329).addRange(8528, 8578).addRange(8581, 8585).addRange(9312, 9371).addRange(9450, 9471).addRange(10102, 10131).addRange(12321, 12329).addRange(12344, 12346).addRange(12690, 12693).addRange(12832, 12841).addRange(12872, 12879).addRange(12881, 12895), set$1.addRange(12928, 12937).addRange(12977, 12991).addRange(42528, 42537).addRange(42726, 42735).addRange(43056, 43061).addRange(43216, 43225).addRange(43264, 43273).addRange(43472, 43481).addRange(43504, 43513).addRange(43600, 43609).addRange(44016, 44025).addRange(65296, 65305).addRange(65799, 65843).addRange(65856, 65912).addRange(65930, 65931).addRange(66273, 66299).addRange(66336, 66339).addRange(66513, 66517).addRange(66720, 66729).addRange(67672, 67679).addRange(67705, 67711).addRange(67751, 67759).addRange(67835, 67839).addRange(67862, 67867).addRange(68028, 68029).addRange(68032, 68047).addRange(68050, 68095).addRange(68160, 68168).addRange(68221, 68222).addRange(68253, 68255).addRange(68331, 68335).addRange(68440, 68447).addRange(68472, 68479).addRange(68521, 68527).addRange(68858, 68863).addRange(68912, 68921).addRange(69216, 69246).addRange(69405, 69414).addRange(69457, 69460).addRange(69573, 69579).addRange(69714, 69743).addRange(69872, 69881).addRange(69942, 69951).addRange(70096, 70105).addRange(70113, 70132).addRange(70384, 70393).addRange(70736, 70745).addRange(70864, 70873).addRange(71248, 71257).addRange(71360, 71369).addRange(71472, 71483), set$1.addRange(71904, 71922).addRange(72016, 72025).addRange(72784, 72812).addRange(73040, 73049).addRange(73120, 73129).addRange(73664, 73684).addRange(74752, 74862).addRange(92768, 92777).addRange(93008, 93017).addRange(93019, 93025).addRange(93824, 93846).addRange(119520, 119539).addRange(119648, 119672).addRange(120782, 120831).addRange(123200, 123209).addRange(123632, 123641).addRange(125127, 125135).addRange(125264, 125273).addRange(126065, 126123).addRange(126125, 126127).addRange(126129, 126132).addRange(126209, 126253).addRange(126255, 126269).addRange(127232, 127244).addRange(130032, 130041);
var number = getDefaultExportFromCjs(set$1);
const set = regenerateExports(256, 258, 260, 262, 264, 266, 268, 270, 272, 274, 276, 278, 280, 282, 284, 286, 288, 290, 292, 294, 296, 298, 300, 302, 304, 306, 308, 310, 313, 315, 317, 319, 321, 323, 325, 327, 330, 332, 334, 336, 338, 340, 342, 344, 346, 348, 350, 352, 354, 356, 358, 360, 362, 364, 366, 368, 370, 372, 374, 379, 381, 388, 418, 420, 425, 428, 437, 444, 452, 455, 458, 461, 463, 465, 467, 469, 471, 473, 475, 478, 480, 482, 484, 486, 488, 490, 492, 494, 497, 500, 506, 508, 510, 512, 514, 516, 518, 520, 522, 524, 526, 528, 530, 532, 534, 536, 538, 540, 542, 544, 546, 548, 550, 552, 554, 556, 558, 560, 562, 577, 584, 586, 588, 590, 880, 882, 886, 895, 902, 908, 975, 984, 986, 988, 990, 992, 994, 996, 998, 1e3, 1002, 1004, 1006, 1012, 1015, 1120, 1122, 1124, 1126, 1128, 1130, 1132, 1134, 1136, 1138, 1140, 1142, 1144, 1146, 1148, 1150, 1152, 1162, 1164, 1166, 1168, 1170, 1172, 1174, 1176, 1178, 1180, 1182, 1184, 1186, 1188, 1190, 1192, 1194, 1196, 1198, 1200, 1202, 1204, 1206, 1208, 1210, 1212, 1214, 1219, 1221, 1223, 1225, 1227, 1229, 1232, 1234, 1236, 1238, 1240, 1242, 1244, 1246, 1248, 1250, 1252, 1254, 1256, 1258, 1260, 1262, 1264, 1266, 1268, 1270, 1272, 1274, 1276, 1278, 1280, 1282, 1284, 1286, 1288, 1290, 1292, 1294, 1296, 1298, 1300, 1302, 1304, 1306, 1308, 1310, 1312, 1314, 1316, 1318, 1320, 1322, 1324, 1326, 4295, 4301, 7680, 7682, 7684, 7686, 7688, 7690, 7692, 7694, 7696, 7698, 7700, 7702, 7704, 7706, 7708, 7710, 7712, 7714, 7716, 7718, 7720, 7722, 7724, 7726, 7728, 7730, 7732, 7734, 7736, 7738, 7740, 7742, 7744, 7746, 7748, 7750, 7752, 7754, 7756, 7758, 7760, 7762, 7764, 7766, 7768, 7770, 7772, 7774, 7776, 7778, 7780, 7782, 7784, 7786, 7788, 7790, 7792, 7794, 7796, 7798, 7800, 7802, 7804, 7806, 7808, 7810, 7812, 7814, 7816, 7818, 7820, 7822, 7824, 7826, 7828, 7838, 7840, 7842, 7844, 7846, 7848, 7850, 7852, 7854, 7856, 7858, 7860, 7862, 7864, 7866, 7868, 7870, 7872, 7874, 7876, 7878, 7880, 7882, 7884, 7886, 7888, 7890, 7892, 7894, 7896, 7898, 7900, 7902, 7904, 7906, 7908, 7910, 7912, 7914, 7916, 7918, 7920, 7922, 7924, 7926, 7928, 7930, 7932, 7934, 8025, 8027, 8029, 8031, 8450, 8455, 8469, 8484, 8486, 8488, 8517, 8579, 11360, 11367, 11369, 11371, 11378, 11381, 11394, 11396, 11398, 11400, 11402, 11404, 11406, 11408, 11410, 11412, 11414, 11416, 11418, 11420, 11422, 11424, 11426, 11428, 11430, 11432, 11434, 11436, 11438, 11440, 11442, 11444, 11446, 11448, 11450, 11452, 11454, 11456, 11458, 11460, 11462, 11464, 11466, 11468, 11470, 11472, 11474, 11476, 11478, 11480, 11482, 11484, 11486, 11488, 11490, 11499, 11501, 11506, 42560, 42562, 42564, 42566, 42568, 42570, 42572, 42574, 42576, 42578, 42580, 42582, 42584, 42586, 42588, 42590, 42592, 42594, 42596, 42598, 42600, 42602, 42604, 42624, 42626, 42628, 42630, 42632, 42634, 42636, 42638, 42640, 42642, 42644, 42646, 42648, 42650, 42786, 42788, 42790, 42792, 42794, 42796, 42798, 42802, 42804, 42806, 42808, 42810, 42812, 42814, 42816, 42818, 42820, 42822, 42824, 42826, 42828, 42830, 42832, 42834, 42836, 42838, 42840, 42842, 42844, 42846, 42848, 42850, 42852, 42854, 42856, 42858, 42860, 42862, 42873, 42875, 42880, 42882, 42884, 42886, 42891, 42893, 42896, 42898, 42902, 42904, 42906, 42908, 42910, 42912, 42914, 42916, 42918, 42920, 42934, 42936, 42938, 42940, 42942, 42946, 42953, 42997, 119964, 119970, 120134, 120778);
set.addRange(65, 90).addRange(192, 214).addRange(216, 222).addRange(376, 377).addRange(385, 386).addRange(390, 391).addRange(393, 395).addRange(398, 401).addRange(403, 404).addRange(406, 408).addRange(412, 413).addRange(415, 416).addRange(422, 423).addRange(430, 431).addRange(433, 435).addRange(439, 440).addRange(502, 504).addRange(570, 571).addRange(573, 574).addRange(579, 582).addRange(904, 906).addRange(910, 911).addRange(913, 929).addRange(931, 939).addRange(978, 980).addRange(1017, 1018).addRange(1021, 1071).addRange(1216, 1217).addRange(1329, 1366).addRange(4256, 4293).addRange(5024, 5109).addRange(7312, 7354).addRange(7357, 7359).addRange(7944, 7951).addRange(7960, 7965).addRange(7976, 7983).addRange(7992, 7999).addRange(8008, 8013).addRange(8040, 8047).addRange(8120, 8123).addRange(8136, 8139).addRange(8152, 8155).addRange(8168, 8172).addRange(8184, 8187).addRange(8459, 8461).addRange(8464, 8466).addRange(8473, 8477).addRange(8490, 8493).addRange(8496, 8499).addRange(8510, 8511).addRange(11264, 11310), set.addRange(11362, 11364).addRange(11373, 11376).addRange(11390, 11392).addRange(42877, 42878).addRange(42922, 42926).addRange(42928, 42932).addRange(42948, 42951).addRange(65313, 65338).addRange(66560, 66599).addRange(66736, 66771).addRange(68736, 68786).addRange(71840, 71871).addRange(93760, 93791).addRange(119808, 119833).addRange(119860, 119885).addRange(119912, 119937).addRange(119966, 119967).addRange(119973, 119974).addRange(119977, 119980).addRange(119982, 119989).addRange(120016, 120041).addRange(120068, 120069).addRange(120071, 120074).addRange(120077, 120084).addRange(120086, 120092).addRange(120120, 120121).addRange(120123, 120126).addRange(120128, 120132).addRange(120138, 120144).addRange(120172, 120197).addRange(120224, 120249).addRange(120276, 120301).addRange(120328, 120353).addRange(120380, 120405).addRange(120432, 120457).addRange(120488, 120512).addRange(120546, 120570).addRange(120604, 120628).addRange(120662, 120686).addRange(120720, 120744).addRange(125184, 125217);
var uppercaseLetter = getDefaultExportFromCjs(set);
class MaskedInput extends reactExports.Component {
  constructor() {
    super(...arguments), this.state = { focused: false }, this.mask = MaskedInput.createInputMask(this.props.mask), this.onFocusHandler = this.onFocus.bind(this), this.onBlurHandler = this.onBlur.bind(this), this.onChangeHandler = this.onChange.bind(this), this.onKeyDownHandler = this.onKeyDown.bind(this), this.pipeHandler = this.pipe.bind(this);
  }
  pipe(value, { placeholder }) {
    return this.filteredValue = value === placeholder ? "" : value, this.state.focused ? value : this.filteredValue;
  }
  onFocus(e2) {
    setTimeout(() => {
      this.setState({ focused: true });
    }, 0), void 0 !== this.props.onFocus && this.props.onFocus(e2);
  }
  onBlur(e2) {
    this.setState({ focused: false }), void 0 !== this.props.onBlur && this.props.onBlur(e2);
  }
  onChange(e2) {
    this.dispatchOnChangeEvent(e2, this.filteredValue);
  }
  onKeyDown(e2) {
    this.props.onKeyDown?.(e2);
    const target = e2.target, selectionLength = Math.abs((target.selectionEnd ?? 0) - (target.selectionStart ?? 0));
    ("Delete" === e2.key || "Backspace" === e2.key) && selectionLength > 0 && this.filteredValue?.length === selectionLength && this.dispatchOnChangeEvent(e2, "");
  }
  dispatchOnChangeEvent(e2, value) {
    const filteredTarget = { ...e2.target, value }, filteredEvent = { ...e2, target: filteredTarget };
    this.props.onChange?.(filteredEvent);
  }
  render() {
    return void 0 !== this.mask ? reactExports.createElement(ReactTextMask, { ...this.props, maxLength: void 0, onChange: this.onChangeHandler, onKeyDown: this.onKeyDownHandler, onFocus: this.onFocusHandler, onBlur: this.onBlurHandler, mask: this.mask, pipe: this.pipeHandler, showMask: this.state.focused }) : reactExports.createElement("input", this.props);
  }
  static createInputMask(mask) {
    if ("" === mask)
      return;
    const maskCharMap = { 9: number.toRegExp(), Z: letter.toRegExp(), U: uppercaseLetter.toRegExp(), L: lowerCaseLetter.toRegExp(), "*": letter.clone().add(number).toRegExp() }, match = mask.match(/[^\\]|\\./g);
    return match ? match.map((item) => item[1] ? item[1] : maskCharMap[item] ?? item) : void 0;
  }
}

class TextBox extends reactExports.Component {
  constructor() {
    super(...arguments), this.state = {}, this.onChangeHandler = this.onChange.bind(this), this.onKeyDownHandler = this.onKeyDown.bind(this), this.onKeyUpHandler = this.onKeyUp.bind(this), this.onFocusHandler = this.onFocus.bind(this), this.onBlurHandler = this.onBlur.bind(this), this.onSelectHandler = this.onSelect.bind(this), this.onChangeBehaviourHandler = this.createOnChangeBehaviour(), this.hadEnterKeyDown = false;
  }
  componentDidUpdate(prevProps, prevState) {
    if (!prevState.editedValue)
      return;
    const { value: newValue, displayValue: newDisplayValue } = this.props.inputValue, { value: oldValue, displayValue: oldDisplayValue } = prevProps.inputValue;
    !this.props.inputValue.readOnly && deepEqual(newValue, oldValue) && newDisplayValue === oldDisplayValue || this.setState({ editedValue: void 0 });
  }
  createOnChangeBehaviour() {
    return this.props.submitWhileEditing ? debounce(this.submitValue.bind(this), ensure(this.props.submitDelay)) : () => {
    };
  }
  onChange(e) {
    this.setDisplayValue(e.target.value, () => {
      !this.props.inputValue.readOnly && e.target instanceof HTMLInputElement && document.activeElement !== e.target && this.submitValue();
    }), this.onChangeBehaviourHandler();
  }
  setDisplayValue(displayValue, callback) {
    this.setState({ editedValue: { displayValue, internalValue: this.props.inputValue.formatter.parse(displayValue) } }, callback);
  }
  onKeyDown(e) {
    "Enter" === e.key && (this.hadEnterKeyDown = true), this.isNumberTextBox() && 110 === e.keyCode && this.convertNumpadDecimalToLocaleDecimalSeparator(e);
  }
  isNumberTextBox() {
    return this.props.inputValue.formatter.type === FormatterType.Number;
  }
  convertNumpadDecimalToLocaleDecimalSeparator(e) {
    const target = e.target, value = target.value, start = target.selectionStart, end = target.selectionEnd, prefix = value.substring(0, Math.min(start, end)) + getDecimalSeparator(), suffix = value.substring(Math.max(start, end));
    target.value = prefix + suffix, target.selectionStart = target.selectionEnd = prefix.length, e.preventDefault(), this.setDisplayValue(target.value);
  }
  onKeyUp(e) {
    "Enter" === e.key && this.hadEnterKeyDown && (this.submitValue(), this.dispatchAction("onEnterKeyPress"), this.hadEnterKeyDown = false);
  }
  onFocus() {
    this.setState({ afterFocus: true }), this.dispatchAction("onEnter");
  }
  onBlur() {
    this.submitValue(), this.dispatchAction("onLeave"), this.props.inputValue.setFormatter(void 0);
  }
  submitValue() {
    const editedValue = this.state.editedValue;
    if (!editedValue)
      return;
    let submitted = false;
    if (editedValue.internalValue.valid) {
      const newValue = editedValue.internalValue.value;
      void 0 === this.props.inputValue.validation && this.isSameValue(newValue, this.props.inputValue.value) || (this.props.inputValue.setValue(newValue), submitted = true);
    } else
      editedValue.displayValue !== this.props.inputValue.displayValue && (this.props.inputValue.setTextValue(editedValue.displayValue), submitted = true);
    submitted || this.setState({ editedValue: void 0 });
  }
  isSameValue(a, b) {
    const formatter = this.props.inputValue.formatter;
    return formatter.format(a) === formatter.format(b);
  }
  onSelect(e) {
    if (this.state.afterFocus) {
      const input = e.target, unfocusedValue = this.props.inputValue.displayValue, selectionStart = input.selectionStart, selectionEnd = input.selectionEnd, formatter = this.props.inputValue.formatter;
      formatter.type === FormatterType.Number && this.props.inputValue.setFormatter(formatter.withConfig({ ...formatter.config, groupDigits: false })), this.setState({ afterFocus: void 0 }, () => {
        const focusedValue = this.props.inputValue.displayValue;
        focusedValue !== unfocusedValue && (input.selectionStart = translatePosition(unfocusedValue, selectionStart, focusedValue), input.selectionEnd = translatePosition(unfocusedValue, selectionEnd, focusedValue));
      });
    }
  }
  render() {
    return jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [this.props.inputValue.readOnly && "control" !== this.props.readOnlyStyle ? this.renderAsText() : this.renderAsInput(), jsxRuntimeExports.jsx(Alert, { id: `${this.props.id}-error`, validation: this.props.inputValue.validation })] });
  }
  renderAsInput() {
    return jsxRuntimeExports.jsx(MaskedInput, { id: this.props.id, className: "form-control", type: this.props.isPassword ? "password" : "text", value: (this.state.editedValue ?? this.props.inputValue).displayValue, tabIndex: this.props.tabIndex, maxLength: this.props.maxLength, placeholder: this.props.placeholder.value && this.props.placeholder.value.length > 0 ? this.props.placeholder.value : void 0, onChange: this.onChangeHandler, onFocus: this.onFocusHandler, onBlur: this.onBlurHandler, onKeyDown: this.onKeyDownHandler, onKeyUp: this.onKeyUpHandler, onSelect: this.onSelectHandler, disabled: this.props.inputValue.readOnly, mask: this.props.mask, autoComplete: this.props.autocomplete, ...getAriaLabelProps(this.props.ariaLabel?.value), ...getValidationAriaProps(this.props.inputValue.validation, this.props.id), "aria-required": this.props.ariaRequired });
  }
  renderAsText() {
    return jsxRuntimeExports.jsx("div", { className: "form-control-static", children: (this.props.isPassword ? "" : this.props.inputValue.displayValue) || "\xA0" });
  }
  dispatchAction(property) {
    const prop = this.props[property];
    "available" === this.props.inputValue.status && prop && prop.execute();
  }
}
function translatePosition(oldString, oldPosition, newString) {
  if (newString === oldString)
    return Math.min(newString.length, oldPosition);
  let newPosition = 0;
  const len = Math.min(oldString.length, oldPosition);
  for (let i = 0; i < len && newPosition < newString.length; i++)
    oldString[i] === newString[newPosition] && newPosition++;
  return newPosition;
}

export { Alert, DerivedUniqueIdProperty, FormGroup, TextBox, ValidationProperty, debounce, getAriaLabelProps, getValidationAriaProps };
