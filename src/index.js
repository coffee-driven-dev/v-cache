import localforage from "localforage";

/**
 * Merges target object's properties with the object found in localforage OR,
 * updates a target's value with the simple value found in localforage
 *
 * @param {any} value
 * @param {any} vnode
 * @param {any} restoreTarget
 */
const successHandlerFn = function(value, vnode, restoreTarget) {
  const isNotNull = value !== null;
  const isObject = isNotNull && typeof value === "object";

  if (isObject) {
    vnode.componentInstance[restoreTarget] = Object.assign(
      {},
      vnode.componentInstance[restoreTarget],
      value
    );
  } else {
    vnode.componentInstance[restoreTarget] = value;
  }
};

/**
 * Handle error returned by localforage or thrown in successHandler
 *
 * @param {any} err
 */
const errorHandlerFn = function(err) {
  console.error(err);
};

/**
 * Empty callback function; Called after successHandler, and with access
 * to the value returned by localforage
 *
 * @param {any} value
 */
const restoreCallbackFn = function(value) {};

export default {
  // This occurs once the directive is attached to the element.
  bind: function(el, binding, vnode) {
    const cacheKey = binding.value.key || binding.value;
    const restoreTarget = binding.value.restoreTarget || "form";
    const successHandler = binding.value.successHandler || successHandlerFn;
    const errorHandler = binding.value.errorHandler || errorHandlerFn;
    const restoreCallback = binding.value.restoreCallback || restoreCallbackFn;

    const noCacheKeyProvided = !cacheKey;
    if (noCacheKeyProvided) {
      console.warn(
        `<my-component v-cache="'unique-key'">, OR\n` +
          `<my-component v-cache="{ key: 'unique-key' }">:\n` +
          `You must provide a cache key to the v-cache directive for caching to work.`
      );
    }
    const directiveUsedOnNativeElement = !vnode.componentInstance;
    if (directiveUsedOnNativeElement) {
      console.warn(
        `v-cache currently only works when placed on custom components\n` +
          `Please feel free to PR functionality to support native components\n` +
          `The biggest hurdle is modifying logic to use native events + value attributes`
      );
    }
    const invalidRestoreTarget =
      vnode.componentInstance && !vnode.componentInstance[restoreTarget];
    if (invalidRestoreTarget) {
      console.warn(
        `v-cache defaults to restoring your compenent's "form" data value\n` +
          `v-cache has determined that the restoreTarget: ${restoreTarget} does not exist`
      );
    }

    // Cache
    const handleCache = eventData => localforage.setItem(cacheKey, eventData);
    vnode.componentInstance.$on("cache", handleCache);

    // Restore Cache
    const handleRestoreCache = eventData =>
      localforage
        .getItem(cacheKey)
        .then(value => {
          if (!value) {
            return value;
          }

          const isCustomSuccessHandler =
            eventData !== null && typeof eventData === "function";
          const isCustomRestoreTarget =
            eventData !== null &&
            typeof eventData === "function" &&
            eventData.length > 0;

          let customRestoreTarget = isCustomRestoreTarget
            ? eventData
            : restoreTarget;
          isCustomSuccessHandler
            ? eventData(value, vnode, customRestoreTarget)
            : successHandler(value, vnode, customRestoreTarget);

          return value;
        })
        .then(restoreCallback)
        .catch(errorHandler);

    vnode.componentInstance.$on("restore-cache", handleRestoreCache);

    // Clear Cache
    const handleClearCache = () => localforage.removeItem(cacheKey);
    vnode.componentInstance.$on("clear-cache", handleClearCache);
  },
  // This hook is called once the directive is removed.
  unbind: function(el, binding, vnode) {
    // Remove all custom event handlers
    vnode.componentInstance.$off();
  }
};
