"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _logger = _interopRequireDefault(require("./logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(error, resources, source, module, callback) {
  if (error) {
    _logger["default"].debug('Resources: **not found**');

    return callback(error);
  }

  var stringifiedResources = "".concat(Array.isArray(resources) ? resources.join('\n') : resources, "\n");
  var output = stringifiedResources + source;

  _logger["default"].debug('Resources: \n', "/* ".concat(module, " */ \n"), output);

  return callback(null, output);
}