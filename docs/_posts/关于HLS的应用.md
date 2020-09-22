---
title: 在项目中使用HLS播放视频
date: 2020-09-22 16:53:16
permalink: /pages/b845d2/
sidebar: false
tags:
  - 业务
  - 音视频
categories:
  - 随笔
---

在最近的项目中，涉及了 HLS 播放音视频，用于防盗链。下面是我的使用总结

<!-- more-->

## 什么是 HLS

## 在页面中播放

- 使用`video`和`audio`标签
- 视频播放器
- hls.js

### 直接使用`video` 标签

因为是对已经上线的项目进行改造,而移动端是支持直接使用`video`标签播放的.考虑到兼容性和 pc 端播放的需求没有使用

### video.js

最新版的[video.js](https://videojs.com/)集成了 hls 的支持,不必安装[videojs-contrib-hls](https://github.com/videojs/videojs-contrib-hls)

- 优点:

  - 样式可定制,界面统一
  - 暴露出各种 API
  - 支持插件

- 不足:
  - 没有中文文档，看起来比较吃力

考虑到项目已经有定制的样式，而需求只是增加播放源支持。没有选择这个方案

### hls.js

各大播放器插件几乎都是引用的这个作为解码器

- 特点
  - 比起各大成熟的播放器,hls.js 需要你手动绑定`video`或`audio`标签

对于修改原有项目,`hls.js`再好不过了
