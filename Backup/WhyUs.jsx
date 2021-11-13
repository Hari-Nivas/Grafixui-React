import React from "react";
import bg from "./Assets/whyus.png";

function WhyUs()
{
return<div className="bodywhy"> 
<div className="container-md">
     <div className="p-2 why">
     </div>
     {/* <!-- ourmoto plus image --> */}
       <div className="d-flex flex-row bd-highlight mb-3  ">
         <div className="p-2"><span class="why">Why <span  className="orange">us?</span></span>
           <br /><p className="ourmoto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ligula in dui eleifend fringilla. Curabitur eget lectus nisi. Suspendisse quis nisl fermentum, gravida libero non, dignissim orci. Vivamus dictum bibendum ex vel semper. Proin a libero lacus. Integer at euismod dui. Aliquam vitae enim lobortis, ornare augue id, vehicula elit. Nunc hendrerit lorem eu augue egestas mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque imperdiet ut ligula et laoreet. Donec scelerisque bibendum pellentesque.

Proin sit amet purus iaculis, sagittis ipsum vitae, efficitur lacus. Aenean sagittis malesuada leo, a dignissim quam malesuada a. Praesent placerat velit diam, quis fringilla diam egestas quis. Nulla facilisi. Proin convallis risus vitae ornare pulvinar. Proin finibus nulla at metus placerat eleifend. Nam et erat non tellus molestie feugiat. Nunc at mi vel elit maximus lacinia at non elit. Vivamus sit amet felis ipsum. Nullam et eleifend sapien. Mauris gravida eros eget lacus auctor facilisis. Ut condimentum rutrum interdum. In hac habitasse platea dictumst. In efficitur fermentum nulla, nec efficitur diam pretium in. Nam viverra posuere urna, non pulvinar augue pharetra a. Aenean imperdiet et nunc ac malesuada.Our Moto, we always  provide the best services for our clients . We are   proud to provide our clients with support to solve your problems and to ensure the continuous networking of your business.</p>
         </div>
         <div className="p-2 d-flex"><img src={bg}className="whyus" alt="whyus"></img>
         </div>
       </div>
     </div>
  </div>
}
export default WhyUs