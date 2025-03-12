var posts=["2025/03/09/happyBirthday/","2025/03/09/heelo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };