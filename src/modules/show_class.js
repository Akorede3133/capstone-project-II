import fecthData from './fetch_api.js';
import counter from './counter.js';
import skeleton from './skeleton.js';
import like from './likes.js';
import comments from './comments.js';

class Show {
  constructor() {
    this.showsContainer = document.querySelector('.shows--container');
    this.popUpContainer = document.querySelector('.single--show--detail');
    this.popUpSection = document.querySelector('.pop--up--section');
    this.closePopUpBtn = document.querySelector('.fa-close');
    this.windowHeight = window.scrollY;
    this.form = document.querySelector('form');
    this.commentInput = document.querySelector('textarea');
    this.nameInput = document.querySelector('#name');
    this.homeCounter = document.querySelector('.home--counter');
    this.showId = 'Zrj6oLFHff3PIwzqVfDg';
    this.commentID = '';
  }

  displayShows = async () => {
    const shows = await fecthData.fetchShows();
    const elements = shows.slice(0, 30).map((show) => skeleton.homePageSkelon(show));
    this.showsContainer.insertAdjacentHTML('beforeend', elements.join(''));
    this.homeCounter.textContent = counter.countShows(elements);
    this.displayPopUp();
    this.hidePopUp();
    like.updateLikes();
    like.updateLikesCount();
    this.submitComments();
  }

  displayPopUp = () => {
    const commentBtns = this.showsContainer.querySelectorAll('.comments--btn');
    commentBtns.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const { id } = e.target;
        this.commentID = id;
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
    const { id } = data;
    const element = skeleton.CreateCommentPopUpSkeleton(data);
    this.popUpContainer.insertAdjacentHTML('beforeend', element);
    this.popUpSection.classList.remove('hide--pop--up');
    const commentsContainer = document.querySelector('.comments--list');
    comments.updateCommentDisplay(id, commentsContainer);
    const commentsCount = document.querySelector('.comment--count');
    this.displayCommentCount(id, commentsCount);
  }

  hidePopUp = () => {
    this.closePopUpBtn.addEventListener('click', () => {
      window.scrollTo(0, this.windowHeight);
      this.popUpSection.classList.add('hide--pop--up');
    });
  }

  submitComments = () => {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = this.nameInput.value;
      const comment = this.commentInput.value;
      if (name && comment) {
        fecthData.postComments(this.commentID, name, comment, this.showId);
        this.popUpSection.classList.add('hide--pop--up');
        this.styleAcivatedComment();
        window.scrollTo(0, this.windowHeight);
        this.form.reset();
      }
    });
  }

  styleAcivatedComment = () => {
    const commentBtns = this.showsContainer.querySelectorAll('.comments--btn');
    commentBtns.forEach((btn) => {
      if (btn.id === this.commentID) {
        btn.style.backgroundColor = 'rgba(0, 0, 255, 0.264)';
      } else {
        btn.style.backgroundColor = '';
      }
    });
  }

  countShows = (shows) => shows.length;

  countComments = (items) => items.length;

  displayCommentCount = async (id, elem) => {
    const comments = await fecthData.getComments(id, this.showId);
    const length = counter.countComments(comments);
    elem.textContent = length || 0;
  }
}
const show = new Show();
export default show;