document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.querySelector(button.dataset.copy);
    if (!target) return;
    const text = target.innerText;
    try {
      await navigator.clipboard.writeText(text);
      const old = button.textContent;
      button.textContent = "copied";
      setTimeout(() => (button.textContent = old), 1200);
    } catch {
      button.textContent = "copy failed";
    }
  });
});
