let Main = document.querySelector("main");
let Input = document.getElementById("input_1");
let btnSearch = document.getElementById("search");
let btnget = document.getElementById("get");
function GetNews() {
  Main.innerHTML = "";
  fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d2505365f6a44de6968e19fc90791258"
  )
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .then((data) => {
      let Articles = data.articles;
      let Title = Articles.title;
      Articles.forEach((Article) => {
        let perentDiv = document.createElement("div");
        perentDiv.className = "news";

        let IMG = document.createElement("img");
        IMG.className = "img";
        let imgpath = Article.urlToImage;
        IMG.setAttribute("src", imgpath);

        let childDiv = document.createElement("div");
        childDiv.className = "content";

        let H3 = document.createElement("h3");
        H3.className = "h3";
        H3.innerText = Article.title;
        let P = document.createElement("p");
        P.className = "p";
        P.innerText = Article.content;

        childDiv.appendChild(H3);
        childDiv.appendChild(P);
        perentDiv.appendChild(IMG);
        perentDiv.appendChild(childDiv);
        Main.appendChild(perentDiv);
      });
    })
    .catch(() => {
      console.log("something went wrong!");
    });
}
function findData() {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d2505365f6a44de6968e19fc90791258"
  )
    .then((respose) => {
      return respose.json();
    })
    .then((data) => {
      return data.articles;
    })
    .then((articles) => {
      Main.innerHTML = "";
      let arrays = articles.filter((article) => {
        if (article.title.includes(Input.value)) {
          let perentDiv = document.createElement("div");
          perentDiv.className = "news";

          let IMG = document.createElement("img");
          IMG.className = "img";
          let imgpath = article.urlToImage;
          IMG.setAttribute("src", imgpath);

          let childDiv = document.createElement("div");
          childDiv.className = "content";

          let H3 = document.createElement("h3");
          H3.className = "h3";
          H3.innerText = article.title;
          let P = document.createElement("p");
          P.className = "p";
          P.innerText = article.content;

          childDiv.appendChild(H3);
          childDiv.appendChild(P);
          perentDiv.appendChild(IMG);
          perentDiv.appendChild(childDiv);
          Main.appendChild(perentDiv);
        }
      });
    })
    .then(() => {
      if (Main.innerHTML == "") {
        let H2 = document.createElement("h2");
        H2.className = "H2";
        H2.innerText = "Sorry ! No Data Found\nclick Get News";
        Main.appendChild(H2);

        setTimeout(() => {
          Main.innerHTML = "";
          Input.value = "";
        }, 4000);
        return console.log("no data fount");
      }
    })
    .catch(() => {
      console.log("something went wrong");
    });
}
btnget.addEventListener("click", GetNews);
btnSearch.addEventListener("click", findData);



