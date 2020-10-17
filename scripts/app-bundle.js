define('app',['require','exports','module'],function (require, exports, module) {"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var App = (function () {
    function App() {
        this.message = 'Hello World!';
    }
    return App;
}());
exports.App = App;

});
;
define('text!app.html',[],function(){return "<template>\n  <h1>${message}</h1>\n</template>\n";});;
define('environment',['require','exports','module'],function (require, exports, module) {"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    debug: true,
    testing: true
};

});
;
define('main',['require','exports','module','./environment'],function (require, exports, module) {"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
var environment_1 = require("./environment");
function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature('resources');
    aurelia.use.developmentLogging(environment_1.default.debug ? 'debug' : 'warn');
    if (environment_1.default.testing) {
        aurelia.use.plugin('aurelia-testing');
    }
    aurelia.start().then(function () { return aurelia.setRoot(); });
}
exports.configure = configure;

});
;
define('resources/index',['require','exports','module'],function (require, exports, module) {"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
function configure(config) {
}
exports.configure = configure;

});
;
define('resources',['resources/index'],function(m){return m;});
//# sourceMappingURL=app-bundle.js.map