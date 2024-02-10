/* Debounce: retraso al obtener el texto (valor) actual de los inputs

  tutorial Midudev 
  https://www.youtube.com/watch?v=GOEiMwDJ3lc&t=7020s

  Librería just-debounce-it de Angus C 
  https://github.com/angus-c/just#just-debounce-it

  https://github.com/angus-c/just/blob/master/packages/function-debounce/index.cjs

  Lodash 
  https://lodash.com/docs/4.17.15#debounce

  Custom Hooks UseDebounce
  https://www.npmjs.com/package/use-debounce*/

export function debounce(fn, wait, callFirst) {
  var timeout = null;
  var debouncedFn = null;

  var clear = function() {
    if (timeout) {
      clearTimeout(timeout);

      debouncedFn = null;
      timeout = null;
    }
  };

  var flush = function() {
    var call = debouncedFn;
    clear();

    if (call) {
      call();
    }
  };

  var debounceWrapper = function() {
    if (!wait) {
      return fn.apply(this, arguments);
    }

    var context = this;
    var args = arguments;
    var callNow = callFirst && !timeout;
    clear();

    debouncedFn = function() {
      fn.apply(context, args);
    };

    timeout = setTimeout(function() {
      timeout = null;

      if (!callNow) {
        var call = debouncedFn;
        debouncedFn = null;

        return call();
      }
    }, wait);

    if (callNow) {
      return debouncedFn();
    }
  };

  debounceWrapper.cancel = clear;
  debounceWrapper.flush = flush;

  return debounceWrapper;
}