require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//get images datas
let imageDatas = require('../sources/imageDatas.json')

//get URL from the images'name
imageDatas = (function genImageURL(imageDatasArr) {
	for(var i = 0, j = imageDatasArr.length; i<j; i++) {
		var singleImageData = imageDatasArr[i];

		singleImageData.ImageURL = require('../images/' + singleImageData.fileName);

		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
      <div className="stage">
         <section className="img-sec">
         </section>
         <nav className="controller-nav">
         </nav>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
