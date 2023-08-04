import fecthData from './fetch_api.js';

class Comments {
  constructor() {
    this.showId = 'Zrj6oLFHff3PIwzqVfDg';
    this.popUpSection = document.querySelector('.pop--up--section');
  }

  updateCommentDisplay = async (id, container) => {
    try {
      const comments = await fecthData.getComments(id, this.showId);
      const element = comments.map((comment) => {
        const { username, creation_date: date, comment: text } = comment;
        const li = `<li>
        <span class="date">${date} </span>
        <span class="comment--name">${username}: </span>
        <span class="comment-text">
        ${text}
        </span>
      </li>`;
        return li;
      }).join('');
      container.insertAdjacentHTML('beforeend', element);
      return comments;
    } catch (error) {
      return error;
    }
  }

  submitComments = (commentId) => {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = this.nameInput.value;
      const comment = this.commentInput.value;
      if (name && comment) {
        fecthData.postComments(commentId, name, comment, this.showId);
        this.popUpSection.classList.add('hide--pop--up');
        this.form.reset();
      }
    });
  }
}
const comments = new Comments();
export default comments;