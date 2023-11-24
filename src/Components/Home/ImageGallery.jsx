import Marquee from "react-fast-marquee";



const ImageGallery = () => {
    return (
        <div className="pb-10">
            <Marquee pauseOnHover={true}>
  <img className="w-[50vh] mr-2" src="https://ebook.projectbd.com/wp-content/uploads/2023/10/sony-2.jpg" alt="" />
  <img className="w-[50vh] mr-2" src="https://ebook.projectbd.com/wp-content/uploads/2023/10/sony-3.jpg" alt="" />
  <img className="w-[50vh] mr-2" src="https://ebook.projectbd.com/wp-content/uploads/2023/10/sony-4.jpg" alt="" />
  <img className="w-[50vh] mr-2" src="https://ebook.projectbd.com/wp-content/uploads/2023/10/lenovo-laptop.jpg" alt="" />
  <img className="w-[50vh] mr-2" src="https://ebook.projectbd.com/wp-content/uploads/2023/10/Google-chromobook-2.jpg" alt="" />
</Marquee>
        </div>
    );
};

export default ImageGallery;