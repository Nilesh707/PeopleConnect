import  {API} from "../../backend";
//export const API = process.env.REACT_APP_BACKEND
export const getCategories = () => {
    console.log(API)
    return fetch(`${API}/categories/`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
};

export const getAllStates = () => {
    console.log(API)
    return fetch(`${API}/state/states`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
};


export const getVideoByCategoryId = (categoryId) => {
    console.log(API)
    return fetch(`${API}/video/videos/${categoryId}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
};

export const getPhotosByCategoryId = (categoryId) => {
    console.log(API)
    return fetch(`${API}/photo/photos/${categoryId}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
};


export const getInfoByVideoId = (videoId) => {
    
    return fetch(`${API}/info/${videoId}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
};