const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataUrl = formData.get("data-url");
    const img = document.createElement("img");
    img.src = dataUrl;

    document.body.appendChild(img);
  });
}
