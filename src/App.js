import React, {useState, useEffect} from "react";
import ImageCard from "./components/ImageCard"
import ImageSearch from "./components/ImageSearch";

function App() {

  const[images, setImages] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const[term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&safesearch=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      {/* Image Search Bar */}
      <ImageSearch searchText={(text) => setTerm(text)}></ImageSearch>

      {/* No Search Results */}
      {!isLoading && images.length === 0 &&<h1 className="text-6xl text-center mx-auto mt-32 text-slate-800">No Images Found</h1> }

      {/* Image Cards */}
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image}></ImageCard>
        ))}
      </div>}

    </div>
  );
}

export default App;
