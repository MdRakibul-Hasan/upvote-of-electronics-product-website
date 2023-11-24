

const SliderAdsForHome = () => {

    return (

        <div>
            <div>
            <div className="carousel w-full h-[90vh] max-md:h-[50vh]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://ebook.projectbd.com/wp-content/uploads/2023/10/home-ads-1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://ebook.projectbd.com/wp-content/uploads/2023/10/home-ads-2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://ebook.projectbd.com/wp-content/uploads/2023/10/home-ads-3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 

</div>
</div>
        </div>
    );
};

export default SliderAdsForHome;