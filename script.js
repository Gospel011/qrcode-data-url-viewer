const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataUrl = formData.get("data-url");
    const previousImg = document.querySelector("img");

    if (previousImg) {
      previousImg.src = dataUrl;
    } else {
      const img = document.createElement("img");
      img.src = dataUrl;
      const main = document.querySelector('main')

      main.appendChild(img);
    }
  });
}
