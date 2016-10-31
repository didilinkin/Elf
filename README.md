# Elf
A concise Sass Library ,Less is more;

一个简洁的Sass库,尽可能的简洁,轻量;

Elf库的使用场景为: IE8以上浏览器/移动端页面; 无视IE8以下浏览器兼容问题

全面支持CSS3特性 与 修复浏览器前缀等兼容问题的重任 将交给下一个重量级封装库——Viking(什么时候有空写就不知道了.)

##### 同等效果下,少写每个字符都值得欢呼,极简是Elf的目的

##### 然而如果不能达到语义化,少写地每个字符都是一种罪恶,易于理解是Elf的灵魂

##### 希望Elf简单又好用,快捷又方便——我爱缩进语法,去TM SCSS
***
# Shorthand Naming Conventions / 简写命名规范

### 1. 通过"-"来连接两个属性
`w-h = width + height`

### 2. 通过驼峰命名方式来简写一个加长属性
`fZ = font-size `
`lH = line-height`
`mT = margin-top`

### 3. 常见属性值用驼峰写全称(属性 值)
```sass
%displayNone
    display: none
    // 下面可继续添加继承内容...
```

# Commonly used Sass Mixins / 常用Sass Mixins
1. 省略号，当超过宽度时，显示省略号——测试成功
```sass
%ell
     overflow: hidden
     -ms-text-overflow: ellipsis
     text-overflow: ellipsis
     white-space: nowrap
```
2. 同‘省略号’,添加行数控制;参数为(行高,行数)——测试成功
```sass
=ell-line($lH,$lineNum)
     overflow: hidden
     -ms-text-overflow: ellipsis
     text-overflow: ellipsis
     white-space: nowrap
     +lH($lH)
     display: -webkit-box
     -webkit-line-clamp: $lineNum
     -webkit-box-orient: vertical
```
***
## 经验
#### 简写属性(不管是拼合还是长属性)都应该围绕着两个原则

* 简写属性必须是`常用的`,不在不常用的属性上费工夫

* 简写属性的`属性值`尽量避免`取值区间`固定的问题,将`高频使用`的属性值设为`默认变量`

***

##### 两侧对其/首行缩进2格
##### 重置样式表
##### IE8以上的hack
##### UI框架: QMUI/Foundation/Bootstrap4/AmazeUI Touch
##### 根据[链接](http://www.w3school.com.cn/css/css_list.asp)整理 可简写的样式
* CSS样式(背景/文本/字体/列表/轮廓) ——完成
* 框模型(内边框/外边框/边框) Flex盒子
* CSS定位(相对/绝对/浮动)
* CSS高级(对齐/尺寸/分类/图片透明)
* CSS3动画

看待问题的角度不同,往往就会有不同的解决办法
### 初步将参考Compass项目整理项目结构目录

1. CSS3
2. Layout
3. Reset
4. Typography
5. Utilities
