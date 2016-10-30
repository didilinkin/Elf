# Elf
A concise Sass Library ,Less is more;

一个简洁的Sass库,尽可能的简洁,轻量;
***
# Shorthand Naming Conventions / 简写命名规范

### 1. 通过"-"来连接两个属性
`w-h = width + height`

### 2. 通过驼峰命名方式来简写一个加长属性
`fZ = font-size `  
`lH = line-height`  
`mT = margin-top`  

# Commonly used Sass Mixins / 常用Sass Mixins
1. 省略号，当超过宽度时，显示省略号
```sass
%ell
     overflow: hidden
     -ms-text-overflow: ellipsis
     text-overflow: ellipsis
     white-space: nowrap
```
2. 同‘省略号’,添加行数控制;参数为(行高,行数)
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


### 初步将参考Compass项目整理项目结构目录

1. CSS3
2. Layout
3. Reset
4. Typography
5. Utilities
