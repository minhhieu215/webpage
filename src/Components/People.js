import React from 'react';
import Slider from "react-slick";

const People = () => {
    var config = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,  
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return <div className="features">
    <div className="features_detail dl_center_center_center">
 <h2>Few words from our clients</h2>
 </div>
    <Slider {...config}>
    <div className="card_visit ">
                    <div className="avatar">
                        <img src={require("../images/people1.jpg")} alt="" />
                    </div>
                    <div className="card_detail">Velit dictum non proin egestas convallis nunc, eu auctor massa. Nam hendrerit, eros ut viverra lobortis, mauris nisi porta risus, placerat dignissim tellus auctor masse</div>
                    <div className="name">Tim Shaw - Designer</div>
                </div>
                <div className="card_visit">
                    <div className="avatar">
                        <img src={require("../images/people1.jpg")} alt="" />
                    </div>
                    <div className="card_detail">Velit dictum non proin egestas convallis nunc, eu auctor massa. Nam hendrerit, eros ut viverra lobortis, mauris nisi porta risus, placerat dignissim tellus auctor masse</div>
                    <div className="name">Tim Shaw - Designer</div>
                </div>
                <div className="card_visit">
                    <div className="avatar">
                        <img src={require("../images/people1.jpg")} alt="" />
                    </div>
                    <div className="card_detail">Velit dictum non proin egestas convallis nunc, eu auctor massa. Nam hendrerit, eros ut viverra lobortis, mauris nisi porta risus, placerat dignissim tellus auctor masse</div>
                    <div className="name">Tim Shaw - Designer</div>
                </div>
                <div className="card_visit">
                    <div className="avatar">
                        <img src={require("../images/people1.jpg")} alt="" />
                    </div>
                    <div className="card_detail">Velit dictum non proin egestas convallis nunc, eu auctor massa. Nam hendrerit, eros ut viverra lobortis, mauris nisi porta risus, placerat dignissim tellus auctor masse</div>
                    <div className="name">Tim Shaw - Designer</div>
                </div>
                <div className="card_visit">
                    <div className="avatar">
                        <img src={require("../images/people1.jpg")} alt="" />
                    </div>
                    <div className="card_detail">Velit dictum non proin egestas convallis nunc, eu auctor massa. Nam hendrerit, eros ut viverra lobortis, mauris nisi porta risus, placerat dignissim tellus auctor masse</div>
                    <div className="name">Tim Shaw - Designer</div>
                </div>
                <div className="card_visit">
                    <div className="avatar">
                        <img src={require("../images/people1.jpg")} alt="" />
                    </div>
                    <div className="card_detail">Velit dictum non proin egestas convallis nunc, eu auctor massa. Nam hendrerit, eros ut viverra lobortis, mauris nisi porta risus, placerat dignissim tellus auctor masse</div>
                    <div className="name">Tim Shaw - Designer</div>
                </div>
    </Slider>
                 
</div>;
};

export default People;
