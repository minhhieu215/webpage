import React from 'react';

const Features = () => {
  return <div className="features">
         <div className="features_detail dl_center_center_center">
      <h2>Ioniq CRM application is packed with  <span className="blink">awesome features</span></h2>
      </div>
      <div className="card_wrapper dl_between_center">
          <div className="card dl_column">
              <img  className="icon" src={require("../images/headphone.png")} alt="" />
              <h4 className="card_title">Customer Lists</h4>
              <p className="card_detail">Et blandit nisl libero at arcu. Donec ac lectus sed tellus mollis viverra. Nullam pharetra ante at nunc elementum</p>
          </div>
          <div className="card dl_column">
              <img  className="icon" src={require("../images/note.png")} alt="" />
              <h4 className="card_title">Sales Tracking</h4>
              <p className="card_detail">Vulputate nibh feugiat. Morbi pellent diam nec libero lacinia, sed ultrices velit scelerisque. Nunc placerat justo sem</p>
          </div>
          <div className="card dl_column">
              <img  className="icon" src={require("../images/message.png")} alt="" />
              <h4 className="card_title">Reporting Tool</h4>
              <p className="card_detail">Ety suscipit metus sollicitudin euqu isq imperdiet nibh nec magna tincidunt, nec pala vehicula neque sodales verum</p>
          </div>
      </div>
  </div>;
};

export default Features;
