class FetchData {
  showsUrl = 'https://api.tvmaze.com/shows';

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
}
const fecthData = new FetchData();
export default fecthData;