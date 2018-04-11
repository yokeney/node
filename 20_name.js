const{basename,dirname,extname}=require("path");
const filename='usr/local/1_file.txt';
//path.basename() 方法返回一个 path 的最后一部分，类似于 Unix 中的 basename 命令。 没有尾部文件分隔符，请查阅path.se
console.log(basename(filename));
//path.dirname() 方法返回一个 path 的目录名，类似于 Unix 中的 dirname 命令。 Trailing directory separators are ignored, see path.sep.
console.log(dirname(filename));
console.log(extname(filename));
// path.extname() 方法返回 path 的扩展名，即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束。
//  如果 path 的最后一部分没有 . 或 path 的文件名（见 path.basename()）的第一个字符是 .，则返回一个空字符串。
// path.extname('index.coffee.md');
// 返回: '.md'
