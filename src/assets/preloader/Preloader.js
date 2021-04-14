import img from "../imgs/preloader.svg";

const Preloader = () => {
  const wrapper = document.querySelector(".wrapper");

  const preloaderIMG = document.createElement("img");
  preloaderIMG.setAttribute("src", img);

  const preloader = document.createElement("div");
  preloader.classList.add("preloader");
  preloader.appendChild(preloaderIMG);

  wrapper.prepend(preloader);
  setTimeout(function () {
    wrapper.removeChild(wrapper.firstChild);
  }, 1500);
};

export default Preloader;
