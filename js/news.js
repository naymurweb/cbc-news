const categories = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => categoriesDisplay(data.data.news_category))
    .catch((error) => alert("no data found!"));
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
  // spinner start
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("d-none");

  // console.log('click');
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => newsDisplay(data.data))
    .catch((error) => alert("no data found!"));
};

const newsDisplay = (data) => {
  // show-items
  const showItems = document.getElementById("show-items");
  showItems.innerText = `${data.length}`;
  const newsDetails = document.getElementById("news-details");
  newsDetails.innerHTML = "";
  data?.forEach((item) => {
    const newsShow = document.createElement("div");
    newsShow.classList.add("card", "my-4");

    newsShow.innerHTML = `
                <div class="row g-0 shadow-lg">

                    <div class="col-md-4 p-3 d-flex justify-content-center align-items-center">
                        <img src=${
                          item.thumbnail_url
                        } class="img-fluid rounded" alt="...">
                    </div>
                    <div class="col-md-8 px-3 py-5">
                        <div>
                            <div>
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">${
                                      item.title
                                    }</h5>
                                    <p class="card-text">${item?.details?.slice(
                                      0,
                                      200
                                    )}||'no data available'</p>
                                    <p class="card-text">${
                                      item?.details?.slice(200, 320) ||
                                      "no data available"
                                    }...</p>
                                </div>
                            </div>

                            <div>

                                <div class="container overflow-hidden text-center">
                                    <div class="row gy-3 align-items-center">

                                        <div class="col-md-3 col-sm-6">
                                            <div
                                                class="p-2 border border border-0 d-flex justify-content-center  align-items-center">
                                                <a class="navbar-brand" href="#">
                                                    <img src="${
                                                      item.author.img
                                                    }" class="img-fluid rounded-circle"
                                                        alt="Bootstrap" width="40" height="24">
                                                </a>

                                                <div>
                                                    <small> <span class="fw-bold ms-2">${
                                                      item?.author?.name?.slice(
                                                        0,
                                                        40
                                                      ) || "no data available"
                                                    }</span><br>
                                                        ${
                                                          item?.author?.published_date?.slice(
                                                            0,
                                                            10
                                                          ) ||
                                                          "no data available"
                                                        }</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6">
                                            <div
                                                class="p-2 border border border-0 d-flex justify-content-center align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>

                                                <div>
                                                    <small> <span class="fw-bold">${
                                                      item.total_view
                                                    }M</span><br>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6">
                                            <div
                                                class="p-2 border border border-0 d-flex justify-content-center align-items-center">

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6">
                                            <div
                                                class="p-2 border border border-0 d-flex justify-content-center align-items-center">    
                                                <button onclick="detailsNews('${
                                                  item._id
                                                }')" 
                                                type="button" class="btn btn-primary"    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                  >Details
                                                <svg onclick="newsDetails1(${item})" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                 <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                                 </svg>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
     `;

    newsDetails.appendChild(newsShow);
  });

  // spinner end
  const spinner = document.getElementById("spinner");
  spinner.classList.add("d-none");
};

// first page data load

const firstPageDisplay = () => {
  fetch("https://openapi.programming-hero.com/api/news/category/01")
    .then((res) => res.json())
    .then((data) => firstPageDisplayContent(data.data))
    .catch((error) => alert("no data found!"));
};

const firstPageDisplayContent = (data) => {
  // show-items
  const showItems = document.getElementById("show-items");
  showItems.innerText = `${data.length}`;
  const newsDetails = document.getElementById("news-details");
  newsDetails.innerHTML = "";
  data?.forEach((item) => {
    const newsShow = document.createElement("div");
    newsShow.classList.add("card", "my-4");

    newsShow.innerHTML = `
              <div class="row g-0 shadow-lg">

                  <div class="col-md-4 p-3 d-flex justify-content-center align-items-center">
                      <img src=${
                        item.thumbnail_url
                      } class="img-fluid rounded" alt="...">
                  </div>
                  <div class="col-md-8 px-3 py-5">
                      <div>
                          <div>
                              <div class="card-body">
                                  <h5 class="card-title fw-bold">${
                                    item.title
                                  }</h5>
                                  <p class="card-text">${item?.details?.slice(
                                    0,
                                    200
                                  )}||'no data available'</p>
                                  <p class="card-text">${
                                    item?.details?.slice(200, 320) ||
                                    "no data available"
                                  }...</p>
                              </div>
                          </div>

                          <div>

                              <div class="container overflow-hidden text-center">
                                  <div class="row gy-3 align-items-center">

                                      <div class="col-md-3 col-sm-6">
                                          <div
                                              class="p-2 border border border-0 d-flex justify-content-center  align-items-center">
                                              <a class="navbar-brand" href="#">
                                                  <img src="${
                                                    item.author.img
                                                  }" class="img-fluid rounded-circle"
                                                      alt="Bootstrap" width="40" height="24">
                                              </a>

                                              <div>
                                                  <small> <span class="fw-bold ms-2">${
                                                    item?.author?.name?.slice(
                                                      0,
                                                      40
                                                    ) || "no data available"
                                                  }</span><br>
                                                      ${
                                                        item?.author?.published_date?.slice(
                                                          0,
                                                          10
                                                        ) || "no data available"
                                                      }</small>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="col-md-3 col-sm-6">
                                          <div
                                              class="p-2 border border border-0 d-flex justify-content-center align-items-center">
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                  stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                  <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                  <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                              </svg>

                                              <div>
                                                  <small> <span class="fw-bold">${
                                                    item.total_view
                                                  }M</span><br>
                                                  </small>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="col-md-3 col-sm-6">
                                          <div
                                              class="p-2 border border border-0 d-flex justify-content-center align-items-center">

                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                  stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                  <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                              </svg>
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                  stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                  <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                              </svg>
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                  stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                  <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                              </svg>
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                  stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                  <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                              </svg>
                                          </div>
                                      </div>

                                      <div class="col-md-3 col-sm-6">
                                          <div
                                              class="p-2 border border border-0 d-flex justify-content-center align-items-center">    
                                              <button onclick="detailsNews('${
                                                item._id
                                              }')" 
                                              type="button" class="btn btn-primary"    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                >Details
                                              <svg onclick="newsDetails1(${item})" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                               stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                               <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                               </svg>
                                              </button>

                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
   `;

    newsDetails.appendChild(newsShow);
  });

  // spinner end
  const spinner = document.getElementById("spinner");
  spinner.classList.add("d-none");
};

firstPageDisplay();

const detailsNews = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => detailsNewsDisplay(data.data[0]))
    .catch((error) => alert("no data found!"));
};

const detailsNewsDisplay = (data) => {
  console.log(data);
  const modalTitle = document.getElementById("exampleModalLabel");
  modalTitle.innerText = `${data.title} `;
  const modalPra = document.getElementById("modal-pra");
  modalPra.innerHTML = `${data.details}`;
};

categories();
