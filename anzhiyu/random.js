var posts=["2023/07/24/hello-world/","2023/07/24/第一篇文章/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};