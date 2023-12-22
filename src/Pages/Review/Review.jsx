import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";

const Review = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() =>{
    fetch('review.json')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])

  console.log
    return (
   <div className="ml-6 ">
            <div className="items-center  grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5 my-20">
          {
            reviews.map( review =>
              <div key={review.id} className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
        <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={review.img} />
  </div>
</div>
         
          <div className="flex gap-10">
          <h2 className="card-title">{review.username}</h2>
            <p>{review.date}</p>
         </div>
         <p>{review.comment}</p>
          <div className="card-actions w-full">
            <button className="btn bg-orange-600 text-white w-full">{review.rating} <CiStar /></button>
          </div>
        </div>
      </div>
              )
          }
        </div>
   </div>
    );
};

export default Review;