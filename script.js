const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

tabs.addEventListener("click", (event) => {
  const id = event.target.id;

  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("live");
    });
    event.target.classList.add("live");
    articles.forEach((article) => {
      article.classList.remove("live");
    });
    const paragraph = document.querySelectorAll("#" + id)[1];
    paragraph.classList.add("live");
    console.log(paragraph);
  }
});
