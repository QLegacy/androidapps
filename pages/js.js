document.addEventListener("DOMContentLoaded", () => {
    // получаем параметр app
    const params = new URLSearchParams(window.location.search);
    const app = params.get("app");

    // определяем тему системы
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDark) {
        console.log('Темная тема Android');
        document.body.classList.add('dark');
    } else {
        console.log('Светлая тема Android');
        document.body.classList.add('light');
    }

    // редирект
    if (app === "com.qlegacy.newapp") {
        window.location.replace("https://example.com/redirect-link");
    }
});
