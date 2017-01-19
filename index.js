'use strict';
const fs = require('fs');
const path = require('path');
function uniq(arr) {
  const set = arr.reduce((set, item) => {
    set[item] = true;
    return set;
  }, {});
  return Object.keys(set);
}

const prismCore = 'prismjs/components/prism-core';
const Prism = require(prismCore);

const prelude = [
  'prism-clike', 'prism-javascript', 'prism-markup',
  'prism-c', 'prism-ruby', 'prism-css',
];
const prismComponents = path.dirname(require.resolve(prismCore));
//得到prismjs/components/prism-core.js所在的路径

const components = prelude.concat(fs.readdirSync(prismComponents))
        .map((component) => component.replace(/(\.min)?\.js$/, ''));
//去掉后缀名

const componentsSet = uniq(components);
//得到的是一个对象，如{prism-abap:true}，如果这个组件在这个对象中存在那么就是true

componentsSet
  .forEach((component) => require(path.join(prismComponents, component)));
//加载这个组件

module.exports = Prism;
