'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var D3chartGenerator = module.exports = function D3chartGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(D3chartGenerator, yeoman.generators.Base);

D3chartGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));
};

D3chartGenerator.prototype.app = function app() {
  this.copy('_package.json', 'package.json');
  this.copy('README.md', 'README.md');
  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.copy('d3.chart.template.js', 'd3.chart.template.js');
  this.copy('d3.chart.template.min.js', 'd3.chart.template.min.js');
  this.directory('dist', 'dist');
  this.directory('example', 'example');
  this.directory('src', 'src');
};

D3chartGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('gitignore', '.gitignore');
};
