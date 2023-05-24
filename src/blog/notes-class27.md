---
title: 27-课堂笔记
date: 2023-5-22 17:45:21
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

## 第二十七课

#### --青蛙跳跃

~~~c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
    private Rigidbody2D rb;
    public float jumpDistance;
    private float moveDistance; // 真实的跳跃距离
    private bool buttonHeld;  //判断是否长按
    private Vector2 destination; // 储存计算的值
    private bool isJump;

    public void Jump(InputAction.CallbackContext context){
        // 创建一个默认的函数写法
        // private 获取 Frog 自身的 Rigidbody2D 组件
        // public 公开的，其它类都可以调用
        // void 没有返回类型s
        if(context.performed){ 
            // 只有在功能完全输出后，我们才有里面的内容
            moveDistance = jumpDistance;
            Debug.Log("Jump!" + "" + moveDistance);
            // 执行跳跃
            destination = new Vector2(transform.position.x, transform.position.y + moveDistance);
        }
    }

        public void Awake(){ //在 start 之前执行

        rb = GetComponent<Rigidbody2D>(); // 获取自身的组件
    }
    private void FixedUpdate(){
        // 在 FixedUpdate 中执行物理模块
        rb.position = Vector2.Lerp(a:transform.position, b:destination, t:0.134f);
        // 每次移动 0.134 个单位(f)
        // 坐标 + moveDistance = 目标坐标
    }
    public void LongJump(InputAction.CallbackContext context){
        if (context.performed){
            moveDistance = jumpDistance * 2;
            // 小跳就是 jumpDistance
            // 大跳是 jumpDistance 的两倍
            buttonHeld = true;
        }
        if (context.canceled){
            // 执行跳跃
            
            Debug.Log("Long Jump!" + "" + moveDistance);
            buttonHeld = false;
            destination = new Vector2(transform.position.x, transform.position.y + moveDistance);
            isJump = true;

        }
    }

    public void GetTouchPosition(InputAction.CallbackContext context){

    }
}
~~~

