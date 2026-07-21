---
layout: layouts/base.njk
ogType: article
headExtra: |
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BlogPosting","headline":"{{ title }}","datePublished":"{{ page.date | isoDate }}","author":{"@type":"Person","name":"{{ author or 'Equipo OléCAD' }}"},"publisher":{"@type":"Organization","name":"OléCAD","logo":{"@type":"ImageObject","url":"https://olecad.com/assets/olecad-mark.png"}},"mainEntityOfPage":"https://olecad.com{{ page.url }}"}
  </script>
---
<article class="post">
  <div class="container post__wrap">
    <p class="post__back"><a href="/blog/">← Volver al blog</a></p>
    <span class="post__kicker">{{ category or 'Blog' }}</span>
    <h1 class="post__title">{{ title }}</h1>
    <div class="post__meta">
      <span>{{ page.date | dateES }}</span><span>·</span><span>{{ author or 'Equipo OléCAD' }}</span>
    </div>
    {% if cover %}<img class="post__cover" src="{{ cover }}" alt="{{ title }}" loading="eager" />{% endif %}
    <div class="post__body">
      {{ content | safe }}
    </div>
    <div class="post__foot">
      {% if category %}<a class="post__more" href="/blog/categoria/{{ category | slug }}/">Más de «{{ category }}»</a>{% endif %}
      <a class="btn btn-primary" href="/#contact">Reservar demo
        <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</article>
