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
    listItem.setAttribute("onclick", `news('${item.category_id}')`);
    listItem.innerText = `${item.category_name}`;
    listContainer.appendChild(listItem);
  });
};

const news = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => newsDisplay(data.data));
};

const newsDisplay = (data) => {
  const newsDetails = document.getElementById("news-details");
  newsDetails.innerHTML = "";
  data.forEach((item) => {
    console.log(item);
    const newsShow = document.createElement("div");
    newsShow.classList.add("card", "mb-3");
    newsShow.innerHTML = `
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${item.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div> 
               `;
    newsDetails.appendChild(newsShow);
  });
};

categories();
