const i=JSON.parse(`{"key":"v-894f57b8","path":"/blog/notes-class30.html","title":"30-课堂笔记","lang":"zh-CN","frontmatter":{"title":"30-课堂笔记","date":"2023-05-31T18:01:23.000Z","author":"TCreograph","isOriginal":true,"category":["blog"],"tag":["blog"],"icon":"vuejs2","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"description":"第三十课 --跳跃的动画 using System.Collections; using System.Collections.Generic; using UnityEngine; using UnityEngine.InputSystem; public class PlayerController : MonoBehaviour { private Rigidbody2D rb; public float jumpDistance; private float moveDistance; // 真实的跳跃距离 private bool buttonHeld; //判断是否长按 private Vector2 destination; // 储存计算的值 private bool isJump; private Animator anim; private bool canJump; public void Awake(){ //在 start 之前执行 rb = GetComponent&lt;Rigidbody2D&gt;(); // 获取自身的组件 anim = GetComponent&lt;Animator&gt;(); // 获取 Animator 中的组件 } private void Update(){ // 每更新一次，就判定是否要将 isJump 改为 false // if (destination.y - transform.position.y &lt; 0.1f){ // 如果跳跃的距离，减去判定的距离小于 0.1 的话，就代表青蛙要落地了 // 避免连续跳跃 // isJump = false; // } if (canJump) { TriggerJump(); } } private void FixedUpdate(){ // 在 FixedUpdate 中执行物理模块 if (isJump){ rb.position = Vector2.Lerp(a:transform.position, b:destination, t:0.134f); // 坐标 + moveDistance = 目标坐标 } } #region INPUT 输入回调函数 ///&lt;summary&gt; /// 触发执行跳跃动画 ///&lt;/summary&gt; public void Jump(InputAction.CallbackContext context){ // 创建一个默认的函数写法 // private 获取 Frog 自身的 Rigidbody2D 组件 // public 公开的，其它类都可以调用 // void 没有返回类型s if(context.performed &amp;&amp; !isJump){ // 只有在功能完全输出后，我们才有里面的内容 moveDistance = jumpDistance; Debug.Log(\\"Jump!\\" + \\"\\" + moveDistance); // 执行跳跃 destination = new Vector2(transform.position.x, transform.position.y + moveDistance); canJump = true; } } public void LongJump(InputAction.CallbackContext context){ if (context.performed &amp;&amp; !isJump){ moveDistance = jumpDistance * 2; // 小跳就是 jumpDistance // 大跳是 jumpDistance 的两倍 buttonHeld = true; } if (context.canceled &amp;&amp; buttonHeld &amp;&amp; !isJump){ // 执行跳跃 Debug.Log(\\"Long Jump!\\" + \\"\\" + moveDistance); buttonHeld = false; destination = new Vector2(transform.position.x, transform.position.y + moveDistance); canJump = true; } } public void GetTouchPosition(InputAction.CallbackContext context){ } #endregion private void TriggerJump(){ canJump = false; // 获得移动方向，播放动画 anim.SetTrigger(\\"Jump\\"); // 和 Unity Animator 中设置的参数名称一样 } #region Animation Event public void JumpAnimationEvent(){ // 跳跃的动画事件 // 改变状态 isJump = true; } // 跳跃结束的时候，状态改为 false public void FinishJumpAnimationEvent(){ isJump = false; } #endregion }","head":[["meta",{"property":"og:url","content":"https://tcreograph.com/blog/notes-class30.html"}],["meta",{"property":"og:site_name","content":"TCreograph's Blog"}],["meta",{"property":"og:title","content":"30-课堂笔记"}],["meta",{"property":"og:description","content":"第三十课 --跳跃的动画 using System.Collections; using System.Collections.Generic; using UnityEngine; using UnityEngine.InputSystem; public class PlayerController : MonoBehaviour { private Rigidbody2D rb; public float jumpDistance; private float moveDistance; // 真实的跳跃距离 private bool buttonHeld; //判断是否长按 private Vector2 destination; // 储存计算的值 private bool isJump; private Animator anim; private bool canJump; public void Awake(){ //在 start 之前执行 rb = GetComponent&lt;Rigidbody2D&gt;(); // 获取自身的组件 anim = GetComponent&lt;Animator&gt;(); // 获取 Animator 中的组件 } private void Update(){ // 每更新一次，就判定是否要将 isJump 改为 false // if (destination.y - transform.position.y &lt; 0.1f){ // 如果跳跃的距离，减去判定的距离小于 0.1 的话，就代表青蛙要落地了 // 避免连续跳跃 // isJump = false; // } if (canJump) { TriggerJump(); } } private void FixedUpdate(){ // 在 FixedUpdate 中执行物理模块 if (isJump){ rb.position = Vector2.Lerp(a:transform.position, b:destination, t:0.134f); // 坐标 + moveDistance = 目标坐标 } } #region INPUT 输入回调函数 ///&lt;summary&gt; /// 触发执行跳跃动画 ///&lt;/summary&gt; public void Jump(InputAction.CallbackContext context){ // 创建一个默认的函数写法 // private 获取 Frog 自身的 Rigidbody2D 组件 // public 公开的，其它类都可以调用 // void 没有返回类型s if(context.performed &amp;&amp; !isJump){ // 只有在功能完全输出后，我们才有里面的内容 moveDistance = jumpDistance; Debug.Log(\\"Jump!\\" + \\"\\" + moveDistance); // 执行跳跃 destination = new Vector2(transform.position.x, transform.position.y + moveDistance); canJump = true; } } public void LongJump(InputAction.CallbackContext context){ if (context.performed &amp;&amp; !isJump){ moveDistance = jumpDistance * 2; // 小跳就是 jumpDistance // 大跳是 jumpDistance 的两倍 buttonHeld = true; } if (context.canceled &amp;&amp; buttonHeld &amp;&amp; !isJump){ // 执行跳跃 Debug.Log(\\"Long Jump!\\" + \\"\\" + moveDistance); buttonHeld = false; destination = new Vector2(transform.position.x, transform.position.y + moveDistance); canJump = true; } } public void GetTouchPosition(InputAction.CallbackContext context){ } #endregion private void TriggerJump(){ canJump = false; // 获得移动方向，播放动画 anim.SetTrigger(\\"Jump\\"); // 和 Unity Animator 中设置的参数名称一样 } #region Animation Event public void JumpAnimationEvent(){ // 跳跃的动画事件 // 改变状态 isJump = true; } // 跳跃结束的时候，状态改为 false public void FinishJumpAnimationEvent(){ isJump = false; } #endregion }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-31T10:04:26.000Z"}],["meta",{"property":"article:author","content":"TCreograph"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:published_time","content":"2023-05-31T18:01:23.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-31T10:04:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"30-课堂笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-31T18:01:23.000Z\\",\\"dateModified\\":\\"2023-05-31T10:04:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TCreograph\\"}]}"]]},"headers":[{"level":2,"title":"第三十课","slug":"第三十课","link":"#第三十课","children":[]}],"git":{"createdTime":1685527466000,"updatedTime":1685527466000,"contributors":[{"name":"TCreograph","email":"64472308@qq.com","commits":1}]},"readingTime":{"minutes":1.63,"words":488},"filePathRelative":"blog/notes-class30.md","localizedDate":"2023年5月31日","excerpt":"<h2> 第三十课</h2>\\n<h4> --跳跃的动画</h4>\\n<div class=\\"language-c# line-numbers-mode\\" data-ext=\\"c#\\"><pre class=\\"language-c#\\"><code>using System.Collections;\\nusing System.Collections.Generic;\\nusing UnityEngine;\\nusing UnityEngine.InputSystem;\\n\\npublic class PlayerController : MonoBehaviour\\n{\\n    private Rigidbody2D rb;\\n    public float jumpDistance;\\n    private float moveDistance; // 真实的跳跃距离\\n    private bool buttonHeld;  //判断是否长按\\n    private Vector2 destination; // 储存计算的值\\n    private bool isJump;\\n    private Animator anim;\\n    private bool canJump;\\n\\n    public void Awake(){ //在 start 之前执行\\n\\n        rb = GetComponent&lt;Rigidbody2D&gt;(); // 获取自身的组件\\n        anim = GetComponent&lt;Animator&gt;(); // 获取 Animator 中的组件\\n        \\n    }\\n\\n    private void Update(){\\n        // 每更新一次，就判定是否要将 isJump 改为 false\\n        // if (destination.y - transform.position.y &lt; 0.1f){\\n        // 如果跳跃的距离，减去判定的距离小于 0.1 的话，就代表青蛙要落地了\\n        // 避免连续跳跃\\n        //      isJump = false;\\n        // }\\n        if (canJump)\\n        {\\n            TriggerJump();\\n        }\\n    }\\n\\n    private void FixedUpdate(){\\n        // 在 FixedUpdate 中执行物理模块\\n        if (isJump){\\n\\n        rb.position = Vector2.Lerp(a:transform.position, b:destination, t:0.134f);\\n        // 坐标 + moveDistance = 目标坐标\\n        }\\n    }\\n\\n    #region INPUT 输入回调函数\\n\\n    ///&lt;summary&gt;\\n    /// 触发执行跳跃动画\\n    ///&lt;/summary&gt;\\n\\n\\n    public void Jump(InputAction.CallbackContext context){\\n        // 创建一个默认的函数写法\\n        // private 获取 Frog 自身的 Rigidbody2D 组件\\n        // public 公开的，其它类都可以调用\\n        // void 没有返回类型s\\n        if(context.performed &amp;&amp; !isJump){ \\n            // 只有在功能完全输出后，我们才有里面的内容\\n            moveDistance = jumpDistance;\\n            Debug.Log(\\"Jump!\\" + \\"\\" + moveDistance);\\n            // 执行跳跃\\n            destination = new Vector2(transform.position.x, transform.position.y + moveDistance);\\n            canJump = true;\\n        }\\n    }\\n\\n    public void LongJump(InputAction.CallbackContext context){\\n        if (context.performed &amp;&amp; !isJump){\\n            moveDistance = jumpDistance * 2;\\n            // 小跳就是 jumpDistance\\n            // 大跳是 jumpDistance 的两倍\\n            buttonHeld = true;\\n        }\\n        if (context.canceled &amp;&amp; buttonHeld &amp;&amp; !isJump){\\n            // 执行跳跃\\n            \\n            Debug.Log(\\"Long Jump!\\" + \\"\\" + moveDistance);\\n            buttonHeld = false;\\n            destination = new Vector2(transform.position.x, transform.position.y + moveDistance);\\n            canJump = true;\\n\\n        }\\n    }\\n\\n    public void GetTouchPosition(InputAction.CallbackContext context){\\n\\n    }\\n    #endregion\\n\\n    private void TriggerJump(){\\n        canJump = false;\\n        // 获得移动方向，播放动画\\n        anim.SetTrigger(\\"Jump\\");\\n        // 和 Unity Animator 中设置的参数名称一样\\n    }\\n\\n    #region Animation Event\\n\\n    public void JumpAnimationEvent(){ // 跳跃的动画事件\\n        // 改变状态\\n        isJump = true;\\n    }\\n    // 跳跃结束的时候，状态改为 false\\n    public void FinishJumpAnimationEvent(){\\n        isJump = false;\\n    }\\n    #endregion\\n\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{i as data};
