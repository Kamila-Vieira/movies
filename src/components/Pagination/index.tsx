import { useEffect, useState } from "react";
import { useMoviesContext } from "../../context/MoviesContext";
import usePaginate from "../../hooks/usePaginate";
import Content, { Page, Pages } from "./styles";

const Pagination = () => {
  const { state, setState } = useMoviesContext();
  const paginate = usePaginate(false);
  const [activePage, setActivePage] = useState(state.activePage);
  const [pages, setPages] = useState<number[]>(state.updatedPages);

  const { updatedPages, limitPagination } = state;

  useEffect(() => {
    if (updatedPages) setPages(updatedPages);
  }, [updatedPages]);

  const handlerPaginate = async (page: number) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (
      state.pages.indexOf(state.pages[page]) + 1 === limitPagination &&
      state.totalPages > state.page
    ) {
      await paginate({ activePage: page });
    }

    setPages(
      pages[0] === page
        ? pages.map((page) => (pages[0] > 1 ? page - 1 : page))
        : pages[pages.length - 1] === page
        ? pages.map((page) =>
            pages[pages.length - 1] < limitPagination ? page + 1 : page
          )
        : updatedPages
    );

    setActivePage(page);
    setState({
      ...state,
      activePage: page,
      updatedPages:
        pages[0] === page
          ? pages.map((page) => (pages[0] > 1 ? page - 1 : page))
          : pages[pages.length - 1] === page
          ? pages.map((page) =>
              pages[pages.length - 1] < limitPagination ? page + 1 : page
            )
          : updatedPages,
    });
  };

  return (
    <Content>
      <Pages>
        {pages.map((page) => {
          return (
            <Page key={page} active={page === activePage}>
              <button
                onClick={() => handlerPaginate(page)}
                className="page-button"
              >
                {page}
              </button>
            </Page>
          );
        })}
      </Pages>
    </Content>
  );
};

export default Pagination;
