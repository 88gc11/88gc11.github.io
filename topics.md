---
layout: default
title: 主题
permalink: /topics/
---

<div class="post-content">
  <h1>探索主题</h1>
  
  <div class="topic-grid">
    {% for category in site.categories %}
    <div class="topic-card">
      <h2>{{ category[0] }}</h2>
      <ul>
        {% for post in category[1] limit:3 %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
        </li>
        {% endfor %}
      </ul>
      {% if category[1].size > 3 %}
      <a href="{{ '/categories/' | relative_url }}#{{ category[0] }}" class="more-link">更多文章 →</a>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</div>

<style>
.topic-grid {
  display: grid;
  gap: var(--spacing-unit);
  margin: 2rem 0;
}

.topic-card {
  background: var(--card-background);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
}

.topic-card h2 {
  margin-top: 0;
  font-size: 1.5rem;
}

.topic-card ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.topic-card li {
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
}

.post-date {
  color: var(--text-light);
  font-size: 0.875rem;
  white-space: nowrap;
}

.more-link {
  display: inline-block;
  margin-top: 0.5rem;
  color: var(--accent-color);
  font-size: 0.875rem;
}

@media (min-width: 768px) {
  .topic-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>