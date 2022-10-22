import { Pagination } from "@mui/material";
import { useRouter } from "next/router";

const CustomPagination = ({ count, page }) => {
  const router = useRouter();

  const pageHandler = (e, pageNumber) => {
    router.push({ pathname: router.pathname, search: `page=${pageNumber}` });
  };

  return (
    <div className="centering mt-24">
      <Pagination count={count} page={page} onChange={pageHandler} color="secondary" />
    </div>
  );
};

export default CustomPagination;
