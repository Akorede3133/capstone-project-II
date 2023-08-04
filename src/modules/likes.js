import fecthData from './fetch_api.js';

class Like {
  constructor() {
    this.showId = 'Zrj6oLFHff3PIwzqVfDg';
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
}

const like = new Like();
export default like;