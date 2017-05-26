(function() {
  var env, node, bl;

  if (typeof require !== 'undefined') {
    require.paths.unshift('./');
  }

  function detectEnvironment() {
    if (typeof env !== 'undefined') {
      return env;
    }

    env = (function() {
      if (typeof XPCOMCore !== 'undefined') {
        return 'xpcomcore';
      } else if (typeof window === 'undefined' && typeof java !== 'undefined') {
        return 'rhino';
      } else if (typeof exports !== 'undefined') {
        // TODO: Node should be checked more thoroughly
        node = {
          fs: require('fs'),
          sys: require('sys')
        }

        return 'node';
      } else if (typeof window === 'undefined') {
        return 'non-browser-interpreter';
      } else {
        return 'browser';
      }
    })();

    return env;
  }

  bl = BambooLeaf = {
    isLoading: false,
    loadingItems: 0,

    webRelativePath: '',
    browserPaths: [],

    loading: function() {
      bl.loadingItems++;
      bl.isLoading = true;
    },

    doneLoading: function(request) {
      bl.loadingItems--;
      if (bl.loadingItems === 0) bl.isLoading = false;
    },

    load: function(script, eval) {
      if (!window.__bambooLeafInit) {
        window.__bambooLeafInit = true;
        BambooLeaf.init();
      }

      if (!script.match(/\.js$/)) {
        script = script + '.js';
      }

      if (!script.match(/\//)) {
        script = bl.browserPaths[0] + '/' + script;
        script = script.replace(/\.\//, '');
      }

      function loadIEScript() {
        var id = '__id_' + (new Date()).valueOf(),
            timer,
            scriptTag;
        document.write('<script id="' + id + '" type="text/javascript" src="' + script + '"></script>');
        scriptTag = document.getElementById(id);

        timer = setInterval(function() {
          if (/loaded|complete/.test(scriptTag.readyState)) {
            clearInterval(timer);
            bl.doneLoading();
          }
        }, 10);
      }

      function loadOtherScript() {
        var scriptTag = document.createElement('script'),
            head = document.getElementsByTagName('head');
        scriptTag.onload = function() { bl.doneLoading(); };
        scriptTag.setAttribute('type', 'text/javascript');
        scriptTag.setAttribute('src', script);
        head[0].insertBefore(scriptTag, head.firstChild);
      }

      switch (detectEnvironment()) {
        case 'xpcomcore':
        case 'rhino':
        case 'non-browser-interpreter':
          load(script);
        break;

        case 'node':
          // Evaluate the required code in the global context, like Rhino's load() would
          eval(node.fs.readFileSync(script).toString());
        break;

        case 'browser':
          this.loading();
          if (document.attachEvent) {
            loadIEScript();
          } else {
            loadOtherScript();
          }
        break;
      }
    },

    fakeTest: {
      run: function(tests) {
        if (bl.isLoading) {
          setTimeout(function() { bl.fakeTest.run(tests); }, 10);
        } else {
          return bl.testRunner.run(tests);
        }
      }
    },

    installBrowserPatching: function() {
      window.exports = [];
      window.__dirname = '';

      window.require = function(path) {
        exports = {};
        bl.load(path);

        if (path === 'test') {
          return bl.fakeTest;
        } else {
          return {};
        }
      };

      window.require.paths = {
        unshift: function(path) {
          bl.browserPaths.push(path);
        }
      };
    },

    init: function(options) {
      options = options || {};

      switch (detectEnvironment()) {
        case 'node':
          exports.load = bl.load;
          exports.test = require(__dirname + '/lib/test');
          exports.expect = require(__dirname + '/lib/expect').expect;
        break;

        case 'browser':
          this.webRelativePath = options.webRelativePath || '';
        break;
      }

      if (options.webScripts && options.eval) {
        for (var i = 0; i < options.webScripts.length; i++) {
          bl.load(options.webScripts[i], options.eval);
        }
      }
    }
  };

  switch (detectEnvironment()) {
    case 'node':
      exports.init = bl.init;
    break;

    case 'browser':
      bl.installBrowserPatching();
    break;
  }
})();
