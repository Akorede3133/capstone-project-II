class Show {
  constructor() {
    this.showsContainer = document.querySelector('.shows--container');
    // this.showId = '7eeZSxoE9qlr2meDvNAi';
    // this.showId = 'HA6T9JcmdjaALtObT86k';
    this.showId = 'Zrj6oLFHff3PIwzqVfDg';
    this.commentID = '';
    // HA6T9JcmdjaALtObT86k
    // qN4F0k3AjslqJdg5LeJa
    // Zrj6oLFHff3PIwzqVfDg
  }

  fetchShows = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  displayShows = async () => {
    const shows = await this.fetchShows('https://api.tvmaze.com/shows');
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
  }
}
const show = new Show();

export default show;