import{_ as i,Y as n,Z as e,a1 as s}from"./framework-fe547204.js";const d="/assets/image-20230524181736892-978b8c37.png",a="/assets/image-20230524181632461-8b0f009f.png",l="/assets/image-20230524181836233-28116b66.png",v={},t=s(`<h2 id="第二十八课" tabindex="-1"><a class="header-anchor" href="#第二十八课" aria-hidden="true">#</a> 第二十八课</h2><h4 id="解决青蛙连续跳跃的问题" tabindex="-1"><a class="header-anchor" href="#解决青蛙连续跳跃的问题" aria-hidden="true">#</a> --解决青蛙连续跳跃的问题</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System.Collections;
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
        if(context.performed &amp;&amp; !isJump){ 
            // 只有在功能完全输出后，我们才有里面的内容
            moveDistance = jumpDistance;
            Debug.Log(&quot;Jump!&quot; + &quot;&quot; + moveDistance);
            // 执行跳跃
            destination = new Vector2(transform.position.x, transform.position.y + moveDistance);
            isJump = true;
        }
    }

private void Update(){
        // 每更新一次，就判定是否要将 isJump 改为 false
        if (destination.y - transform.position.y &lt; 0.1f){
        // 如果跳跃的距离，减去判定的距离小于 0.1 的话，就代表青蛙要落地了
        // 避免连续跳跃
            isJump = false;
        }
    }

    public void Awake(){ //在 start 之前执行

        rb = GetComponent&lt;Rigidbody2D&gt;(); // 获取自身的组件
        
    }
    private void FixedUpdate(){
        // 在 FixedUpdate 中执行物理模块

        if (isJump){

        rb.position = Vector2.Lerp(a:transform.position, b:destination, t:0.134f);
        // 坐标 + moveDistance = 目标坐标
        }
    }
    public void LongJump(InputAction.CallbackContext context){
        if (context.performed &amp;&amp; !isJump){
            moveDistance = jumpDistance * 2;
            // 小跳就是 jumpDistance
            // 大跳是 jumpDistance 的两倍
            buttonHeld = true;
        }
        if (context.canceled &amp;&amp; buttonHeld &amp;&amp; !isJump){
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建动画" tabindex="-1"><a class="header-anchor" href="#创建动画" aria-hidden="true">#</a> --创建动画</h4><img src="`+d+'" alt="image-20230524181736892" style="zoom:50%;"><img src="'+a+'" alt="image-20230524181632461" style="zoom:50%;"><figure><img src="'+l+'" alt="image-20230524181836233" tabindex="0" loading="lazy"><figcaption>image-20230524181836233</figcaption></figure><h4 id="你可以在-window-中找到-animation" tabindex="-1"><a class="header-anchor" href="#你可以在-window-中找到-animation" aria-hidden="true">#</a> 你可以在 Window 中找到 Animation</h4>',8),r=[t];function c(m,u){return n(),e("div",null,r)}const b=i(v,[["render",c],["__file","notes-class28.html.vue"]]);export{b as default};
