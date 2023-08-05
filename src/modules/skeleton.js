class Skeleton {
  constructor() {
    this.popUpContainer = document.querySelector('.single--show--detail');
  }

  homePageSkelon = (show) => {
    const {
      image: { medium }, name, id,
    } = show;
    const showElement = `<div class="show--info">
    <div class="show--details">
      <div class="show--thumbnail">
          <img src=${medium} alt="">
      </div>
      <div class="show--counts">
        <p class="show--name">${name}</p>
        <div class="show--likes">
          <i class="fa-regular fa-heart" id=${id}></i>
          <i class="fa-solid fa-heart"></i>
          <p class="show--likes--count">
              <span class="likes--count" id=${id}></span> likes
          </p>
        </div>
      </div>
    </div>
    <button class="comments--btn" id=${id}>Comments</button>
  </div>`;
    return showElement;
  }

  CreateCommentPopUpSkeleton = (data) => {
    const {
      language,
      name, genres,
      rating: { average },
      weight, premiered,
      image: { original }, summary,
    } = data;
    this.popUpContainer.innerHTML = '';
    const element = ` <div class="pop--up--img">
    <img src=${original} alt="">
  </div>
  <div class="pop--up--desc">
    <h3 class="show--name">${name}</h3>
    <p class="summary">${summary.slice(0, 500)}...</p>
    <ul class="pop--up--info">
      <li class="show--title">Name: <span>${name}</span></li>
      <li class="">Language: <span>${language}</span></li>
      <li class="show--rating">Rating: <span>${average}</span></li>
      <li class="show--weight">Weight: <span>${weight}</span></li>
      <li class="show--genre">Generes: <span>${genres[0]}</span></li>
      <li class="show--premiered">premiered: <span>${premiered}</span></li>
    </ul>
  </div>
  <div class="comments--container">
    <h4>Comments (<span class="comment--count"></span>)</h4>
    <ul class="comments--list">
    </ul>
  </div>`;
    return element;
  }
}
const skeleton = new Skeleton();
export default skeleton;