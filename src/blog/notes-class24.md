---
title: 24-课堂笔记
date: 2023-5-10 18:22:19
author: TCreograph
isOriginal: true
category:
    - blog
tag:
    - blog
icon: vuejs2
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
---

## 第二十四课

#### --编写代码 (PlayerController)

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerControl : MonoBehaviour
{
    // Start is called before the first frame update
    //在开始的第一帧启动
    void Start()
    {
        
    }

    // Update is called once per frame
    //循环执行，即为每一帧都会执行一遍
    //游戏不断的动作要放在 update 中进行
    void Update()
    {
        
    }
}

```

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerControl : MonoBehaviour
{
    pubilc void Jump()
    {
        //TODO：执行跳跃，跳跃的距离，记录分数，播放跳跃的音效
        //创建一个默认的函数写法
        //带有 public 标识的代码，其他类都可以调用
        // void 没有返回类型
        Debug.Log("Jump! Hello...");
    }
}

```

#### --带入程序

![image-20230510182726531](./notes-class24.assets/image-20230510182726531.png)

![image-20230510183042069](./notes-class24.assets/image-20230510183042069.png)

![image-20230510182826454](./notes-class24.assets/image-20230510182826454.png)

![image-20230510183219281](./notes-class24.assets/image-20230510183219281.png)

![image-20230510183402075](./notes-class24.assets/image-20230510183402075.png)

![image-20230510183558657](./notes-class24.assets/image-20230510183558657.png)

![image-20230510183944395](./notes-class24.assets/image-20230510183944395.png)
