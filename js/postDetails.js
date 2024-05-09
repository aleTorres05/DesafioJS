import { fetchPostByKey } from "../modules/postsApi.js";

//Extraer parametros de la url
//1.- Guardamos la url en una variable
const url = window.location.href;
//2.- Creamos una instancia del objeto URLSearch params
const params = new URLSearchParams(new URL(url).search);
//3.- Extraemos el parametro que deseamos
let postKey = params.get("postKey");
console.log(postKey);
let post = document.getElementById("post-content");

const printPostData = async (postKey) => {
  let postData = await fetchPostByKey(postKey);
  let { title, content, tags, author, date, picture } = postData;
  let postHTML = ` 
  <section>
    <header>
      <div>
        <img
          src="${picture}"
          alt=""
          class="img-fluid h-100 w-100 ${picture ? "d-block" : "d-none"}"
        />
      </div>
      <div class="d-flex m-3">
        <div class="position-relative m-1">
          <a href="" class="">
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=mal"
              alt=""
              class="img-fluid page-profile__image"
            />
          </a>
          <a href="" class="position-absolute bottom-0 end-0">
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=mal"
              alt=""
              class="img-fluid rounded-circle user-profile__image"
            />
          </a>
        </div>
        <div class="">
          <!--fecha de creacion y autor-->
          <a href="" class="text-decoration-none user-text__post"
            >${author}</a
          >
          <span class="fw-lighter">for</span>
          <a href="" class="text-decoration-none text-black fw-light"
            >refine</a
          >
          <p class="fw-light post-desc__post">
            Posted on ${date} • Originally published at
            <a href="" class="text-decoration-none link-page"
              >refine.dev</a
            >
          </p>
        </div>
      </div>

      <div class="d-flex justify-content-between mx-1">
        <span class="px-2">
          <img
            src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
            alt=""
          />
          <span>14</span>
        </span>
        <span class="px-2">
          <img
            src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
            alt=""
          />
          <span>10</span>
        </span>
        <span class="px-2">
          <img
            src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
            alt=""
          />
          <span>10</span>
        </span>
        <span class="px-2">
          <img
            src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
            alt=""
          />
          <span>9</span>
        </span>
        <span class="px-2">
          <img
            src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
            alt=""
          />
          <span>10</span>
        </span>
      </div>
      <h1 class="m-2 title__post">
        ${title}
      </h1>
      <div class="m-2 p-1 d-flex flex-wrap hashtag__container">
        <a>${tags}</a>
      </div>
    </header>

    <div class="m-3 description-post__container">
      <!--contenido-->
      <p>${content}</p>
    </div>
    <div class="container">
      <header class="d-flex justify-content-between">
        <div class="d-flex">
          <h2 class="comment-text__post pt-3">
            Top Comments <span class="comment-text__post">(5)</span>
          </h2>

          <button
            class="sort-comments__post position-relative bg-transparent border-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="mt-2"
            >
              <title>Crown</title>
              <path
                d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="d-flex">
          <div class="border rounded p-2 mt-2">
            <button
              class="btn-subscribe__comments bg-transparent border-0"
            >
              Subscribe
            </button>
          </div>
        </div>
      </header>

      <div class="mt-4 mb-4">
        <div class="d-flex">
          <div class="">
            <img
              src="./assets/images/userBlog.jpeg"
              class="rounded-circle w-75 h-auto"
              alt=""
            />
          </div>
          <form action="" class="w-100">
            <textarea
              class="form-control"
              name=""
              id=""
              cols="30"
              rows="2"
              placeholder="Add to the discussion"
            ></textarea>
          </form>
        </div>

        <div class="d-flex mt-4">
          <div>
            <img
              src="./assets/images/userBlog.jpeg"
              alt=""
              class="rounded-circle w-75 h-auto"
            />
          </div>
          <div
            class="d-flex flex-row flex-wrap border rounded position-relative w-100"
          >
            <div class="">
              <div class="p-4 position-absolute">
                <p class="text-secondary">
                  User name <span> • Jun 15</span>
                </p>
              </div>
              <div class="">
                <div class="position-absolute top-0 end-0 p-1 ms-5">
                  <button
                    class="more-button__comment bg-transparent border-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby="aoknez2z9h6g649kjvtb9x34cla1qazz"
                      class="crayons-icon pointer-events-none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="">
              <p class="mt-5 p-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Numquam quidem ex magni blanditiis obcaecati ab,
                consequatur ipsum ea omnis, cum optio voluptatum.
                Expedita recusandae animi quos corrupti harum quod
                non?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex ms-5 mt-2">
      <div class="">
        <button class="border border-0 bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            role="img"
            aria-labelledby="a3v37fve7dah36ujxs4o4nzrf94i8qb6"
            class="crayons-icon reaction-icon not-reacted"
          >
            <title id="a3v37fve7dah36ujxs4o4nzrf94i8qb6">
              Like comment:
            </title>
            <path
              d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"
            ></path>
          </svg>
          <span>1</span>
        </button>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            role="img"
            aria-labelledby="ahosemcz3zrqhruouht8uhfdoep9vpn1"
            class="crayons-icon reaction-icon not-reacted"
          >
            <title id="ahosemcz3zrqhruouht8uhfdoep9vpn1">
              Comment button
            </title>
            <path
              d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </section>`;

  return (post.innerHTML = postHTML);
};

printPostData(postKey);
