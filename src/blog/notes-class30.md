---
title: 30-课堂笔记
date: 2023-5-31 18:01:23
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

## 第三十课

#### --跳跃的动画

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
    private Animator anim;
    private bool canJump;

    public void Awake(){ //在 start 之前执行

        rb = GetComponent<Rigidbody2D>(); // 获取自身的组件
        anim = GetComponent<Animator>(); // 获取 Animator 中的组件
        
    }

    private void Update(){
        // 每更新一次，就判定是否要将 isJump 改为 false
        // if (destination.y - transform.position.y < 0.1f){
        // 如果跳跃的距离，减去判定的距离小于 0.1 的话，就代表青蛙要落地了
        // 避免连续跳跃
        //      isJump = false;
        // }
        if (canJump)
        {
            TriggerJump();
        }
    }

    private void FixedUpdate(){
        // 在 FixedUpdate 中执行物理模块
        if (isJump){

        rb.position = Vector2.Lerp(a:transform.position, b:destination, t:0.134f);
        // 坐标 + moveDistance = 目标坐标
        }
    }

    #region INPUT 输入回调函数

    ///<summary>
    /// 触发执行跳跃动画
    ///</summary>


    public void Jump(InputAction.CallbackContext context){
        // 创建一个默认的函数写法
        // private 获取 Frog 自身的 Rigidbody2D 组件
        // public 公开的，其它类都可以调用
        // void 没有返回类型s
        if(context.performed && !isJump){ 
            // 只有在功能完全输出后，我们才有里面的内容
            moveDistance = jumpDistance;
            Debug.Log("Jump!" + "" + moveDistance);
            // 执行跳跃
            destination = new Vector2(transform.position.x, transform.position.y + moveDistance);
            canJump = true;
        }
    }

    public void LongJump(InputAction.CallbackContext context){
        if (context.performed && !isJump){
            moveDistance = jumpDistance * 2;
            // 小跳就是 jumpDistance
            // 大跳是 jumpDistance 的两倍
            buttonHeld = true;
        }
        if (context.canceled && buttonHeld && !isJump){
            // 执行跳跃
            
            Debug.Log("Long Jump!" + "" + moveDistance);
            buttonHeld = false;
            destination = new Vector2(transform.position.x, transform.position.y + moveDistance);
            canJump = true;

        }
    }

    public void GetTouchPosition(InputAction.CallbackContext context){

    }
    #endregion

    private void TriggerJump(){
        canJump = false;
        // 获得移动方向，播放动画
        anim.SetTrigger("Jump");
        // 和 Unity Animator 中设置的参数名称一样
    }

    #region Animation Event

    public void JumpAnimationEvent(){ // 跳跃的动画事件
        // 改变状态
        isJump = true;
    }
    // 跳跃结束的时候，状态改为 false
    public void FinishJumpAnimationEvent(){
        isJump = false;
    }
    #endregion

}
~~~



