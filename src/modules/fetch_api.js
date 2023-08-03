class FetchData {
  showsUrl = 'https://api.tvmaze.com/shows';

  postsUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';

  commentsUrl = ''
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
      const response = await fetch(`${this.postsUrl}/${showId}/likes/`, {
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
      const response = await fetch(`${this.postsUrl}/${showId}/likes`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  postComments = async (id, name, comment, showId) => {
    try {
      const response = await fetch(`https://${this.postsUrl}/${showId}/comments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "item_id": id,
          "username": name,
          "comment": comment,
      })
      });
      const data = await response.text();
      console.log(data);
    } catch (error) {
      return error;
    }
  }
  getComments = async (id, showId) => {
    try {
     const response = await fetch(`${this.postsUrl}/${showId}/comments?item_id=${id}`);
     const data = await response.json();
    //  console.log(data);
     return data;
    } catch (error) {
     return error
    }
   }
}
const fecthData = new FetchData();
export default fecthData;