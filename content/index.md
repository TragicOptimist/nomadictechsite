---
title: My little corner of the web
description: "A personal notebook on engineering, finance, philosophy, and human behavior."
cssclasses:
  - homepage
---

<div class="home-grid">
<nav class="home-col home-col-pages" aria-label="Pages">
<span class="home-eyebrow">Pages</span>
<ul class="home-pages">
<li><a href="/about">About</a></li>
<li><a href="/quotes/">Quotes</a></li>
<li><a href="/photos.base">Photos</a></li>
<li><a href="/reading-list.base">Reading list</a></li>
<li><a href="/tags/">All tags</a></li>
<li class="soon"><span>Blog</span> <span class="soon-label">coming soon</span></li>
<li class="soon"><span>Projects</span> <span class="soon-label">coming soon</span></li>
</ul>
</nav>
<section class="home-col home-col-main">
<p class="home-intro">I'm a CS student writing about engineering, finance, philosophy, and human behavior. This site is my public notebook — everything I read, think, and make ends up here eventually. Say hi at <a href="mailto:NomadicTechnotes@proton.me">NomadicTechnotes@proton.me</a>.</p>
<div class="home-section">
<span class="home-eyebrow">Latest blog</span>
<p class="home-empty">Notes and essays are on the way — nothing published yet.</p>
</div>
<div class="home-section">
<span class="home-eyebrow">Latest from my reading list</span>
<ol class="home-books">
<li><a href="/attachments/library/meditations---marcus-aurelius">Meditations</a><span class="book-author">Marcus Aurelius</span></li>
<li><a href="/attachments/library/the-denial-of-death---ernest-becker">The Denial of Death</a><span class="book-author">Ernest Becker</span></li>
<li><a href="/attachments/library/steve-jobs---walter-isaacson">Steve Jobs</a><span class="book-author">Walter Isaacson</span></li>
</ol>
<a class="home-more" href="/reading-list.base">Full reading list →</a>
</div>
</section>
<aside class="home-col home-col-side">
<div class="home-section">
<span class="home-eyebrow">From the quotes page</span>
<figure class="home-quote" id="home-quote">
<p class="home-quote-text">Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.</p>
<p class="home-quote-author">— H. Jackson Brown Jr</p>
<figcaption><a class="home-more" href="/quotes/">More quotes →</a></figcaption>
</figure>
</div>
<div class="home-section">
<span class="home-eyebrow">From the photo page</span>
<figure class="home-photo">
<a href="/attachments/photos/photo-info/lush-road" id="home-photo-link"><img src="/attachments/photos/images/img_20240929_091058.webp" alt="A dirt track winding through tall green grass under a blue sky" id="home-photo-img" loading="lazy" /></a>
<figcaption class="home-photo-cap" id="home-photo-cap"><a href="/attachments/photos/photo-info/lush-road">Lush road</a></figcaption>
</figure>
</div>
</aside>
</div>

<script>
(function () {
  var quotes = [
    { text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.", author: "H. Jackson Brown Jr" },
    { text: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.", author: "Steve Jobs" }
  ];
  var photos = [
    { src: "/attachments/photos/images/img_20240929_091058.webp", alt: "A dirt track winding through tall green grass under a blue sky", href: "/attachments/photos/photo-info/lush-road", caption: "Lush road" },
    { src: "/attachments/photos/images/img_20240929_090625.webp", alt: "Power lines crossing a green meadow below distant mountains", href: "/attachments/photos/photo-info/power-lines-over-the-meadow", caption: "Power lines over the meadow" }
  ];
  var q = quotes[Math.floor(Math.random() * quotes.length)];
  var qEl = document.getElementById("home-quote");
  if (qEl) {
    var text = document.createElement("p");
    text.className = "home-quote-text";
    text.textContent = q.text;
    var author = document.createElement("p");
    author.className = "home-quote-author";
    author.textContent = "— " + q.author;
    var fig = qEl.querySelector("figcaption");
    if (fig) qEl.replaceChildren(text, author, fig);
    else qEl.replaceChildren(text, author);
  }
  var p = photos[Math.floor(Math.random() * photos.length)];
  var link = document.getElementById("home-photo-link");
  var img = document.getElementById("home-photo-img");
  var cap = document.getElementById("home-photo-cap");
  if (link) link.href = p.href;
  if (img) { img.src = p.src; img.alt = p.alt; }
  if (cap) { var c = cap.querySelector("a"); if (c) { c.href = p.href; c.textContent = p.caption; } }
})();
</script>
