import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, 
  appStore}) { 
    return (
        <div className='container mt-5 '>
          <div className='row'>
            <div className='col-7 '>
              <img src={imageURL} />
            </div>
            <div className='col-5 mt-5'><br/>
                 <h1>{productName}</h1>
                 <p>{productDescription}</p>
                 <div>
                    <a href={tryDemo} style={{ marginLeft:"10px",textDecoration:"none"}}>Try Demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft:"100px", textDecoration:"none"}}>
                      Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                 </div>
                  <div className='mt-3'>
                      <a href={googlePlay}>
                        <img src='media/images/googlePlayBadge.svg' />
                      </a>
                      <a href={appStore}>
                        <img src='media/images/appStoreBadge.svg' style={{marginLeft:"50px"}} />
                      </a>
                  </div>
            </div>
          </div>
        </div>
      );
}

export default LeftSection;