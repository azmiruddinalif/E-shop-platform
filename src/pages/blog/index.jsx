import { useLocation } from "react-router-dom";
import BlogCard from "../../globalComponents/blogCard";

const Blog = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <BlogCard pathname={pathname} />
    </div>
  );
};

export default Blog;
