const {normalize}=require("path");
console.log(normalize('C:\\temp\\\\foo\\bar\\..\\'));
// 当发现多个连续的路径分隔符时（如 POSIX 上的 / 与 Windows 上的 \ 或 /），它们会被单个的路径分隔符（POSIX 上是 /，Windows 上是 \）替换。 末尾的多个分隔符会被保留。
// 如果 path 是一个长度为零的字符串，则返回 '.'，表示当前工作目录。
// 返回: 'C:\\temp\\foo\\'
