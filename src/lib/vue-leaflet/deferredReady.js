import Q from 'q'

export var DeferredReady = {
  install(Vue, options) {
    // Use the same merge strategy as regular hooks
    Vue.config.optionMergeStrategies.deferredReady = Vue.config.optionMergeStrategies.created;
  },
};

function runHooks(vm) {
  var hooks = vm.$options.deferredReady || [];
  if (typeof hooks === 'function') {
    hooks = [hooks]
  }
  Promise.all(hooks.map(x => {
    var rv;
    try {
      rv = x.apply(vm)
    } catch (err) {
      console.error(err.stack);
    }
    return rv;
  })) // execute all handlers, expecting them to return promises
  // wait for the promises to complete, before allowing child to execute
  .then(() => {
      vm.$deferredReadyDeferred.resolve()
  });
}

export var DeferredReadyMixin = {
  created() {
    this.$hasDeferredReadyAncestors = false;
    this.$deferredReadyDeferred = Q.defer();
  },

  ready() {
    this.$dispatch('register-deferredReadyChild', this);
    if (!this.$hasDeferredReadyAncestors) {
      // call deferredReady() hook only after ready() has completed
      this.$nextTick(() => runHooks(this));
    }
    /* else hooks will be called when parents are done */
  },

  events: {
    'register-deferredReadyChild' (child) {
      // console.log(this)
      if (this == child)
        return true;

      // delay child's execution of its hooks
      child.$hasDeferredReadyAncestors = true;

      // after we are done running deferredReady()
      // children should run their deferredReady()
      this.$deferredReadyDeferred.promise
      .then(() => runHooks(child));
    },
  },
};

