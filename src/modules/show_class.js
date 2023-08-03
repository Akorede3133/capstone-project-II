import fecthData from './fetch_api.js';

class Show {
  constructor() {
    this.showsContainer = document.querySelector('.shows--container');
    this.popUpContainer = document.querySelector('.single--show--detail');
    this.popUpSection = document.querySelector('.pop--up--section');
    this.closePopUpBtn = document.querySelector('.fa-close');
    this.windowHeight = window.scrollY;

    // this.showId = '7eeZSxoE9qlr2meDvNAi';
    // this.showId = 'HA6T9JcmdjaALtObT86k';
    this.showId = 'Zrj6oLFHff3PIwzqVfDg';
    this.commentID = '';
    // HA6T9JcmdjaALtObT86k
    // qN4F0k3AjslqJdg5LeJa
    // Zrj6oLFHff3PIwzqVfDg
  }

  displayShows = async () => {
    const shows = await fecthData.fetchShows();
    const elements = shows.slice(0, 30).map((show) => {
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
    }).join('');
    this.showsContainer.insertAdjacentHTML('beforeend', elements);
    this.displayPopUp();
    this.hidePopUp();
  }

  displayPopUp = () => {
    const commentBtns = this.showsContainer.querySelectorAll('.comments--btn');
    commentBtns.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const { id } = e.target;
        try {
          const shows = await fecthData.fetchSingleShows(id);
          window.scrollTo(0, 0);
          this.windowHeight = window.scrollY;
          this.CreatePopUpInterface(shows);
        } catch (error) {
          return error;
        }
        return id;
      });
    });
  }

  CreatePopUpInterface = async (data) => {
    const {
      language, name, genres, rating: { average }, weight, premiered, image: { original }, summary,
    } = data;
    this.popUpContainer.innerHTML = '';
    const element = ` <div class="pop--up--img">
    <img src=${original} alt="">
  </div>
  <div class="pop--up--desc">
    <h3 class="show--name">${name}</h3>
    <p>${summary}</p>
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
    this.popUpContainer.insertAdjacentHTML('beforeend', element);
    // this.popUpSection.style.display = 'block';
    this.popUpSection.classList.remove('hide--pop--up');
  }

  hidePopUp = () => {
    this.closePopUpBtn.addEventListener('click', () => {
      window.scrollTo(0, this.windowHeight);
      this.popUpSection.classList.add('hide--pop--up');
    });
  }
}
const show = new Show();
export default show;