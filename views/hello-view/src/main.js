const app = document.createElement("main");
app.className = "hello-view";
app.innerHTML = `
  <section>
    <h1>Hello Locus</h1>
    <p>This view is ready. Replace it with your plugin interface.</p>
  </section>
`;

const style = document.createElement("style");
style.textContent = `
  :root {
    color-scheme: light dark;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  body {
    margin: 0;
  }

  .hello-view {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 24px;
    background: Canvas;
    color: CanvasText;
  }

  section {
    width: min(560px, 100%);
    border: 1px solid color-mix(in srgb, CanvasText 16%, transparent);
    border-radius: 8px;
    padding: 24px;
  }

  h1 {
    margin: 0 0 8px;
    font-size: 24px;
    line-height: 1.2;
    letter-spacing: 0;
  }

  p {
    margin: 0;
    line-height: 1.5;
  }
`;

document.head.appendChild(style);
document.body.appendChild(app);
