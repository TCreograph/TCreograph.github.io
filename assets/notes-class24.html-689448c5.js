import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,d as a}from"./app-52ce5094.js";const s="/assets/image-20230510182726531-4088f2b9.png",l="/assets/image-20230510183042069-19d4a5b1.png",d="/assets/image-20230510182826454-324704cb.png",r="/assets/image-20230510183219281-325fd4dc.png",c="/assets/image-20230510183402075-41e69e6c.png",t="/assets/image-20230510183558657-0f97ea4e.png",o="/assets/image-20230510183944395-70f5bf15.png",m={},v=a(`<h2 id="第二十四课" tabindex="-1"><a class="header-anchor" href="#第二十四课" aria-hidden="true">#</a> 第二十四课</h2><h4 id="编写代码-playercontroller" tabindex="-1"><a class="header-anchor" href="#编写代码-playercontroller" aria-hidden="true">#</a> --编写代码 (PlayerController)</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System.Collections;
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System.Collections;
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
        Debug.Log(&quot;Jump! Hello...&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="带入程序" tabindex="-1"><a class="header-anchor" href="#带入程序" aria-hidden="true">#</a> --带入程序</h4><figure><img src="`+s+'" alt="image-20230510182726531" tabindex="0" loading="lazy"><figcaption>image-20230510182726531</figcaption></figure><figure><img src="'+l+'" alt="image-20230510183042069" tabindex="0" loading="lazy"><figcaption>image-20230510183042069</figcaption></figure><figure><img src="'+d+'" alt="image-20230510182826454" tabindex="0" loading="lazy"><figcaption>image-20230510182826454</figcaption></figure><figure><img src="'+r+'" alt="image-20230510183219281" tabindex="0" loading="lazy"><figcaption>image-20230510183219281</figcaption></figure><figure><img src="'+c+'" alt="image-20230510183402075" tabindex="0" loading="lazy"><figcaption>image-20230510183402075</figcaption></figure><figure><img src="'+t+'" alt="image-20230510183558657" tabindex="0" loading="lazy"><figcaption>image-20230510183558657</figcaption></figure><figure><img src="'+o+'" alt="image-20230510183944395" tabindex="0" loading="lazy"><figcaption>image-20230510183944395</figcaption></figure>',12),u=[v];function g(b,p){return e(),n("div",null,u)}const h=i(m,[["render",g],["__file","notes-class24.html.vue"]]);export{h as default};
