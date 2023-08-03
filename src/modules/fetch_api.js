class FetchData {
  showsUrl = 'https://api.tvmaze.com/shows';

  postLikeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';

  fetchShows = async () => {
    try {
      const response = await fetch(this.showsUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  fetchSingleShows = async (id) => {
    try {
      const response = await fetch(`${this.showsUrl}/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  postLike = async (id, showId) => {
    try {
      const response = await fetch(`${this.postLikeUrl}/${showId}/likes/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: id,
        }),
      });
      const data = await response.text();
      return data;
    } catch (error) {
      return error;
    }
  }

  getLikes = async (showId) => {
    try {
      const response = await fetch(`${this.postLikeUrl}/${showId}/likes`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
}
const fecthData = new FetchData();
export default fecthData;