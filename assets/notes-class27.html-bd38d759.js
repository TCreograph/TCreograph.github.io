import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,d as s}from"./app-5f5b5d01.js";const d={},l=s(`<h2 id="第二十七课" tabindex="-1"><a class="header-anchor" href="#第二十七课" aria-hidden="true">#</a> 第二十七课</h2><h4 id="青蛙跳跃" tabindex="-1"><a class="header-anchor" href="#青蛙跳跃" aria-hidden="true">#</a> --青蛙跳跃</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System.Collections;
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
            Debug.Log(&quot;Jump!&quot; + &quot;&quot; + moveDistance);
            // 执行跳跃
            destination = new Vector2(transform.position.x, transform.position.y + moveDistance);
        }
    }

        public void Awake(){ //在 start 之前执行

        rb = GetComponent&lt;Rigidbody2D&gt;(); // 获取自身的组件
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
            
            Debug.Log(&quot;Long Jump!&quot; + &quot;&quot; + moveDistance);
            buttonHeld = false;
            destination = new Vector2(transform.position.x, transform.position.y + moveDistance);
            isJump = true;

        }
    }

    public void GetTouchPosition(InputAction.CallbackContext context){

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=[l];function a(t,c){return n(),e("div",null,v)}const u=i(d,[["render",a],["__file","notes-class27.html.vue"]]);export{u as default};
