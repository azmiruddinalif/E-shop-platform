import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

export const getStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full-${i}`} className="text-yellow">
        <FaStar />
      </span>
    );
  }

  if (halfStars) {
    stars.push(
      <span key={`half`} className="text-yellow">
        <FaRegStarHalfStroke />
      </span>
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className="text-yellow">
        <FaRegStar />
      </span>
    );
  }
  return <div className="flex items-center gap-x-1">{stars}</div>;
};
