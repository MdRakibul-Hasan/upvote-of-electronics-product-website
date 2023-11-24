

const SliderAds = () => {

    return (

        <div>
            <div>
            <div className="carousel w-full h-[90vh] max-md:h-[50vh]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://ebook.projectbd.com/wp-content/uploads/2023/10/ads-1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://ebook.projectbd.com/wp-content/uploads/2023/10/ads-2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://ebook.projectbd.com/wp-content/uploads/2023/10/ads-3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 

</div>
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#slide1" className="btn btn-xs">1</a> 
  <a href="#slide2" className="btn btn-xs">2</a> 
  <a href="#slide3" className="btn btn-xs">3</a> 
</div>
</div>
        </div>
    );
};

export default SliderAds;