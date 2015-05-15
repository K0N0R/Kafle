var express = require("express");
var serveStatic = require('serve-static');
var app = express();
var server = app.listen(80);
app.use(serveStatic("./static", { index: ["index.html"] }));
//# sourceMappingURL=app.js.map