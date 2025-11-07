---
layout: default
title: 归档
permalink: /archive/
---

<div class="post-content">
  <h1>文章归档</h1>
  
  <div class="archive-list">
    {% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
    {% for year in postsByYear %}
      <section class="archive-year">
        <h2>{{ year.name }}</h2>
        {% for post in year.items %}
          <article class="archive-item">
            <time datetime="{{ post.date | date_to_xmlschema }}" class="archive-date">
              {{ post.date | date: "%m-%d" }}
            </time>
            <a href="{{ post.url | relative_url }}" class="archive-title">{{ post.title }}</a>
            {% if post.categories.size > 0 %}
            <div class="archive-categories">
              {% for category in post.categories %}
                <span class="tag">{{ category }}</span>
              {% endfor %}
            </div>
            {% endif %}
          </article>
        {% endfor %}
      </section>
    {% endfor %}
  </div>
</div>

<style>
.archive-list {
  margin: 2rem 0;
}

.archive-year {
  margin-bottom: 3rem;
}

.archive-year h2 {
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
}

.archive-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: baseline;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  transition: background-color var(--transition-speed);
}

.archive-item:hover {
  background: var(--card-background);
}

.archive-date {
  color: var(--text-light);
  font-family: var(--font-mono);
  font-size: 0.875rem;
}

.archive-title {
  color: var(--text-color);
  font-weight: 500;
}

.archive-categories {
  text-align: right;
}

.archive-categories .tag {
  font-size: 0.75rem;
}

@media (max-width: 640px) {
  .archive-item {
    grid-template-columns: auto 1fr;
    gap: 0.5rem;
  }
  
  .archive-categories {
    grid-column: 1 / -1;
    text-align: left;
    margin-top: 0.25rem;
  }
}
</style>