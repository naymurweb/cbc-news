const categories = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => categoriesDisplay(data.data.news_category));
};

const categoriesDisplay = (data) => {
  const listContainer = document.getElementById("lists-container");
  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.innerText = `${item.category_name}`;
    listContainer.appendChild(listItem);
  });
};

categories();
