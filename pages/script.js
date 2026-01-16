const params = new URLSearchParams(window.location.search);
const app = params.get("app");

const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.body.classList.add(isDark ? 'dark' : 'light');

if (app === "com.qlegacy.newapp") {
    window.location.replace("https://example.com/redirect-link");
}
