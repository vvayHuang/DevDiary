<template>
  <footer class="footer-root">
    <div class="footer-container">
      <!-- logo -->
      <div class="oasis-logo-outer mb-4">
        <div class="oasis-logo-inner">devdiary</div>
      </div>
      
      <!-- 社群 -->
      <div class="footer-social">
        <a href="https://github.com/" aria-label="GitHub" class="footer-social-link" target="_blank">
          <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.017-2.252-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
        <a href="https://x.com/" aria-label="X" class="footer-social-link" target="_blank">
          <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor"><path d="M17.53 2.47A12 12 0 0 0 2.47 17.53 12 12 0 0 0 17.53 2.47zm-1.06 1.06A10 10 0 1 1 3.53 18.94 10 10 0 0 1 16.47 3.53zm-7.07 2.12l3.07 4.24 3.07-4.24h1.41l-3.78 5.22 3.78 5.22h-1.41l-3.07-4.24-3.07 4.24H6.06l3.78-5.22-3.78-5.22h1.41z"/></svg>
        </a>
        <a href="mailto:your@email.com" aria-label="Email" class="footer-social-link">
          <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/></svg>
        </a>
      </div>
      <!-- 條款 -->
      <div class="footer-meta">
        <a href="#" class="footer-meta-link">Privacy Policy</a>
        <span class="footer-meta-sep">|</span>
        <a href="#" class="footer-meta-link">Terms</a>
        <span class="footer-meta-sep">|</span>
        <a href="#" class="footer-meta-link">Cookie Preferences</a>
      </div>
      <div class="footer-copyright">&copy; {{ new Date().getFullYear() }} devdiary</div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// 無需額外邏輯
</script>

<style scoped>
.footer-root {
  background: #000;
  color: #fff;
  border-top: 4px solid #fff;
  padding-top: 40px;
  padding-bottom: 32px;
  margin-top: 60px;
}
.footer-container {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 0 18px;
}
.oasis-logo-outer {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 5px solid #fff;
  padding: 2px;
  box-sizing: border-box;
}
.oasis-logo-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  height: 56px;
  background: #000;
  color: #fff;
  font-family: 'Arial Black', Impact, Arial, sans-serif;
  font-weight: bold;
  font-size: 2.1rem;
  text-transform: lowercase;
  border: 3px solid #fff;
  box-sizing: border-box;
  letter-spacing: 0.5px;
  border-radius: 0;
  padding: 12px 12px;
  font-style: italic;
}
.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
  font-weight: bold;
  font-size: 1.08rem;
  margin-bottom: 6px;
}
.footer-link {
  color: #fff;
  text-decoration: none;
  transition: color 0.2s;
}
.footer-link:hover {
  color: #ffd700;
  text-decoration: underline;
}
.footer-social {
  display: flex;
  gap: 18px;
  margin-bottom: 6px;
}
.footer-social-link {
  color: #fff;
  transition: color 0.2s;
}
.footer-social-link:hover {
  color: #ffd700;
}
.footer-meta {
  display: flex;
  gap: 10px;
  font-size: 0.98rem;
  color: #bbb;
  margin-bottom: 4px;
}
.footer-meta-link {
  color: #bbb;
  text-decoration: none;
  transition: color 0.2s;
}
.footer-meta-link:hover {
  color: #ffd700;
  text-decoration: underline;
}
.footer-meta-sep {
  color: #444;
}
.footer-copyright {
  color: #888;
  font-size: 0.95rem;
  margin-top: 2px;
}
@media (max-width: 600px) {
  .footer-container {
    gap: 12px;
    padding: 0 6px;
  }
  .footer-nav {
    gap: 10px;
    font-size: 0.98rem;
  }
  .footer-social {
    gap: 10px;
  }
}
</style> 