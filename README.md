# Elf
A concise Sass Library ,Less is more;

一个简洁的Sass库,尽可能的简洁,轻量;

Elf库的使用场景为: IE8以上浏览器/移动端页面; 无视IE8以下浏览器兼容问题

全面支持CSS3特性 与 修复浏览器前缀等兼容问题的重任 将交给下一个重量级封装库——Viking(什么时候有空写就不知道了.)
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

两侧对其/首行缩进2格
### 初步将参考Compass项目整理项目结构目录

1. CSS3
2. Layout
3. Reset
4. Typography
5. Utilities
