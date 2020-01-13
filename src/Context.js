import React, { useEffect, useState } from "react";
const Context = React.createContext();
function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartPhotos, setCartPhotos] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data));
  }, []);
  function toggleFavorite(id) {
    const updatedArr = allPhotos.map(photo => {
      if (photo.id === id) {
        console.log(id);
        console.log(!photo.isFavorite);
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(updatedArr);
  }
  function addPhotoToCart(newPhoto) {
    setCartPhotos(photo => [...photo, newPhoto]);
  }
  function removePhotoFromCart(removedPhoto) {
    setCartPhotos(cartPhotos.filter(photo => photo !== removedPhoto));
  }
  function emptyCart() {
    setCartPhotos([]);
  }
  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartPhotos,
        addPhotoToCart,
        removePhotoFromCart,
        emptyCart
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { Context, ContextProvider };
