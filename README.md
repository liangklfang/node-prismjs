
## 1.使用

```js
const Prism = require('node-prismjs');
function highlight(lang, sourceCode) {
  const language = Prism.languages[lang] || Prism.languages.autoit;
  return Prism.highlight(sourceCode, language);
}
```

## 2.注意事项

### 2.1 require.resolve把一个路径解析成为绝对路径
```js
console.log(require.resolve('prismjs/components/prism-core'));
///Users/liangklfangl/Desktop/node-prismjs/node_modules/prismjs/components/prism-core.js
```

### 2.2 fs.readdir读取一个文件夹下的所有的文件
```js
  console.log('fs.readdirSync(prismComponents)',fs.readdirSync(prismComponents));
```

得到一个文件数组：
```js
 [ 'prism-abap.js',
  'prism-abap.min.js',
  'prism-actionscript.js',
  'prism-actionscript.min.js',
  'prism-ada.js',
  'prism-ada.min.js',
  'prism-apacheconf.js',
  'prism-apacheconf.min.js',
  'prism-apl.js',
  'prism-apl.min.js',
  'prism-applescript.js',
  'prism-applescript.min.js',
  'prism-asciidoc.js',
  'prism-asciidoc.min.js',
  'prism-aspnet.js',
  'prism-aspnet.min.js',
  'prism-autohotkey.js',
  'prism-autohotkey.min.js',
  'prism-autoit.js',
  'prism-autoit.min.js',
  'prism-bash.js',
  'prism-bash.min.js',
  'prism-basic.js',
  'prism-basic.min.js',
  'prism-batch.js',
  'prism-batch.min.js',
  'prism-bison.js',
  'prism-bison.min.js',
  'prism-brainfuck.js',
  'prism-brainfuck.min.js',
  'prism-bro.js',
  'prism-bro.min.js',
  'prism-c.js',
  'prism-c.min.js',
  'prism-clike.js',
  'prism-clike.min.js',
  'prism-coffeescript.js',
  'prism-coffeescript.min.js',
  'prism-core.js',
  'prism-core.min.js',
  'prism-cpp.js',
  'prism-cpp.min.js',
  'prism-crystal.js',
  'prism-crystal.min.js',
  'prism-csharp.js',
  'prism-csharp.min.js',
  'prism-css-extras.js',
  'prism-css-extras.min.js',
  'prism-css.js',
  'prism-css.min.js',
  'prism-d.js',
  'prism-d.min.js',
  'prism-dart.js',
  'prism-dart.min.js',
  'prism-diff.js',
  'prism-diff.min.js',
  'prism-docker.js',
  'prism-docker.min.js',
  'prism-eiffel.js',
  'prism-eiffel.min.js',
  'prism-elixir.js',
  'prism-elixir.min.js',
  'prism-erlang.js',
  'prism-erlang.min.js',
  'prism-fortran.js',
  'prism-fortran.min.js',
  'prism-fsharp.js',
  'prism-fsharp.min.js',
  'prism-gherkin.js',
  'prism-gherkin.min.js',
  'prism-git.js',
  'prism-git.min.js',
  'prism-glsl.js',
  'prism-glsl.min.js',
  'prism-go.js',
  'prism-go.min.js',
  'prism-graphql.js',
  'prism-graphql.min.js',
  'prism-groovy.js',
  'prism-groovy.min.js',
  'prism-haml.js',
  'prism-haml.min.js',
  'prism-handlebars.js',
  'prism-handlebars.min.js',
  'prism-haskell.js',
  'prism-haskell.min.js',
  'prism-haxe.js',
  'prism-haxe.min.js',
  'prism-http.js',
  'prism-http.min.js',
  'prism-icon.js',
  'prism-icon.min.js',
  'prism-inform7.js',
  'prism-inform7.min.js',
  'prism-ini.js',
  'prism-ini.min.js',
  'prism-j.js',
  'prism-j.min.js',
  'prism-jade.js',
  'prism-jade.min.js',
  ... 142 more items ]
```

## 3.此处的require

在webpack中指定过了entry.js只是说从这个文件开始打包，打包的过程可以使用特定的loader。但是，我这里直接执行node main.js其实是直接执行这个模块而不仅仅是打包这个模块！

所以，当你引入node-prismjs的时候其实是把primjs中所有的模块都会引入了，因为有下面的代码被执行了:

```js
componentsSet
  .forEach((component) => require(path.join(prismComponents, component)));
```