import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { MarginBottom } from "../styled";

export default function PaginationControlled({ count, setPage, page }) {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <MarginBottom>
      <Stack spacing={2}>
        <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          showFirstButton
          showLastButton
          variant="outlined"
          color="primary"
        />
      </Stack>
    </MarginBottom>
  );
}
