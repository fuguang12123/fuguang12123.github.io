var posts=["2025/03/09/heelo/","2025/03/09/happyBirthday/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };