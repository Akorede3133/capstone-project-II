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
    this.updateLikes();
    this.updateLikesCount();
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
      language, name, genres, rating: { average }, weight, premiered, image: { original }, summary, id,
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
    this.popUpSection.classList.remove('hide--pop--up');
    const commentsContainer = document.querySelector('.comments--list');
    this.updateCommentDisplay(id, commentsContainer);
  }

  hidePopUp = () => {
    this.closePopUpBtn.addEventListener('click', () => {
      window.scrollTo(0, this.windowHeight);
      this.popUpSection.classList.add('hide--pop--up');
    });
  }

  updateLikes = () => {
    const heartBtn = document.querySelectorAll('.fa-heart');
    heartBtn.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const { target } = e;
        const { id } = target;
        const parent = target.parentElement;
        const countSpan = parent.querySelector('.likes--count');
        const filledLove = parent.querySelector('.fa-heart.fa-solid');
        const emptyLove = parent.querySelector('.fa-heart.fa-regular');
        let likesCount = countSpan.textContent ? parseInt(countSpan.textContent, 10) : 0;
        if (e.target.classList.contains('fa-regular')) {
          likesCount += 1;
          countSpan.textContent = likesCount;
          target.style.display = 'none';
          filledLove.style.display = 'block';
          fecthData.postLike(id, this.showId);
        } else {
          likesCount -= 1;
          countSpan.textContent = likesCount;
          target.style.display = 'none';
          emptyLove.style.display = 'block';
        }
      });
    });
  }

  updateLikesCount = async () => {
    try {
      const response = await fecthData.getLikes(this.showId);
      // console.log(response);
      response.forEach((res) => {
        const counts = document.querySelectorAll('.likes--count');
        counts.forEach((count) => {
          if (count.id === res.item_id) {
            count.textContent = res.likes;
          }
        });
      });
      this.updateHeartDisplay();
      return response;
    } catch (error) {
      return error;
    }
  }

  updateHeartDisplay = () => {
    const countSpans = document.querySelectorAll('.likes--count');
    countSpans.forEach((span) => {
      if (span.textContent > 0) {
        const parent = span.parentElement.parentElement;
        const filledLove = parent.querySelector('.fa-heart.fa-solid');
        const emptyLove = parent.querySelector('.fa-heart.fa-regular');
        emptyLove.style.display = 'none';
        filledLove.style.display = 'block';
      }
    });
  }

  updateCommentDisplay = async (id, container, ) => {
    try {
      const comments = await fecthData.getComments(id, this.showId);
      const element = comments.map((comment) => {
        const { username, creation_date, comment: text } = comment
        const li = `<li>
        <span class="date">${creation_date} </span>
        <span class="comment--name">${username}: </span>
        <span class="comment-text">
        ${text}
        </span>
      </li>`;
      return li;
      }).join('');
      container.insertAdjacentHTML('beforeend', element);
      
    } catch (error) {
      return error;
    }
  }
}
const show = new Show();
export default show;