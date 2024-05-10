import { fetchAllPosts } from "../modules/postsApi.js";

let createPostBtn = document.getElementById("create-post-btn");
createPostBtn.addEventListener("click", () => {
  window.open("../views/postForm.html", "_self");
});

// let devLogo = document.getElementById("dev-Logo");
// devLogo.addEventListener("click", () => {
//   console.log("click");
// });

const createPostCard = (postObject) => {
  let { title, tags, author, date, picture, key } = postObject;
  let btnOutline = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  let listTags = tags.split(" ");
  let tagHTML = "";
  listTags.forEach((tag) => {
    tagHTML += `<button type="button" class="btn btn-outline-${
      btnOutline[Math.floor(Math.random() * btnOutline.length)]
    } text-dark">${tag}</button>`;
  });
  let cardHTML = `
  
  <div id="${title}" class="card mb-3">
  <a href="../views/postDetails.html?postKey=${key}" class="text-decoration-none text-dark">
  <div class="row no-gutters">
    <div  class="col ${picture ? "d-block" : "d-none"} ">
      <img src="${picture}" class=" ${
    picture ? "card-img-top img-fluid" : "d-none"
  } " alt="...">
    </div>
    <div class="col-12">
      <div class="card-body">
        <!--Body-->
        <div class="text ms-2 d-flex flex-row">
        <img
          width="40px"
          class="mx-2 rounded-circle"
          src="https://xsgames.co/randomusers/avatar.php?g=male"
        />
          <div class="d-flex flex-column">
          <!--User Body-->
          <h6 class="m-0">${author}</h6>
          <!--Author-->
          <span class="date">${date}</span
          ><!--Date-->
          </div>
        </div>
        <h5 class="card-title mt-2 ms-3">${title}</h5>
        <!--title-->
        <div class="d-flex flex-row flex-grow-1 ms-3">
          <!--Tags Body-->
          <div id="tagsID" class="d-flex flex-row">
            <!--Tags Wrapper-->
            ${tagHTML}
            <!--Tags-->
          </div>
        </div>
        <div class="d-flex flex-row ms-3">
          <p>❤️</p>
          <p>🦄</p>
          <p>🤯</p>
          <p>🙌</p>
          <p>🔥</p>
          <div class="d-flex flex-row ms-3 justify-content-evenly">
            <p class="me-2">212 reactions</p>
            <p class="me-3">52 comments</p>
            <p class="me-2">10 min read</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</a>

</div>


    `;
  return cardHTML;
};

const printPost = (postArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }
  postArray.forEach((post) => {
    let currentContent = wrapper.innerHTML;
    wrapper.innerHTML = currentContent + createPostCard(post);
  });
};

const printAllPost = async () => {
  let postArray = await fetchAllPosts();
  printPost(postArray, "post-wrapper");
};

const filterByCategory = () => {
  let inputFilter = document.getElementById("filterInput");
  inputFilter.addEventListener("keyup", (event) => {
    let post = document.querySelectorAll("#post-wrapper div.card");
    post.forEach((post) => {
      if (event.target.value == "") {
        post.classList.replace("d-none", "d-block");
      } else if (post.id.includes(inputFilter.value)) {
        let match = document.getElementById(post.id);
        match.classList.replace("d-none", "d-block");
        return match;
      } else {
        let notMatch = document.getElementById(post.id);
        notMatch.classList.add("d-none");
      }
    });
  });
};

const filterByTag = async () => {
  let arrayTags = [];
  let nombreTag1 = document.getElementById("tag1");
  let nombreTag2 = document.getElementById("tag2");
  let tituloTag = document.getElementById("postTagFilter");
  let tituloTag2 = document.getElementById("postTagFilter2");
  let postArray = await fetchAllPosts();
  let tagPostHTML1 = "";
  let tagPostHTML2 = "";

  postArray.forEach((post) => {
    let { title, key } = post;
    arrayTags = post.tags.split(" ");
    arrayTags.forEach((tag) => {
      if (tag == nombreTag1.innerText) {
        tagPostHTML1 += `
        <li class="list-group-item w-100">
        <a
        href="../views/postDetails.html?postKey=${key}" class="text-decoration-none text-black"
        >
          <div>${title}</div>
        </a>
        </li>
            `;
        tituloTag.innerHTML = tagPostHTML1;
      }
    });
  });
  postArray.forEach((post) => {
    arrayTags = post.tags.split(" ");
    arrayTags.forEach((tag) => {
      if (tag == nombreTag2.innerText) {
        let { title, key } = post;
        tagPostHTML2 += `
            
              <li class="list-group-item w-100">
              <a
              href="../views/postDetails.html?postKey=${key}" class="text-decoration-none text-black"
              >
                <div>${title}</div>
              </a>
              </li>
    
            `;
        tituloTag2.innerHTML = tagPostHTML2;
      }
    });
  });
};

const filterByRelevent = async () => {
  let postArray = await fetchAllPosts();
  let releventBtn = document.getElementById("relevantBtn");
  let listPostRelevent = [];

  releventBtn.addEventListener("click", () => {
    postArray.filter((post) => {
      post.relevent ? listPostRelevent.push(post) : post;
    });
    printPost(listPostRelevent, "post-wrapper");
  });
};

const filterByRate = async () => {
  let postArray = await fetchAllPosts();
  let rateBtn = document.getElementById("rateBtn");

  rateBtn.addEventListener("click", () => {
    postArray.sort((a, b) => (a.rate > b.rate ? -1 : 1));
    printPost(postArray, "post-wrapper");
  });
};

const filterByDate = async () => {
  let postArray = await fetchAllPosts();
  let latestBtn = document.getElementById("latestBtn");

  latestBtn.addEventListener("click", () => {
    postArray.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
    printPost(postArray, "post-wrapper");
  });
};

let token = localStorage.getItem("token");
let logOutBtn = document.getElementById("logOutBtn");

logOutBtn.addEventListener("click", () => {
  token ? window.open("../index.html", "_self") : window.stop();
  localStorage.removeItem("token");
});

filterByDate();
filterByRate();
filterByRelevent();
filterByTag();
filterByCategory();
printAllPost();

/*



*/
