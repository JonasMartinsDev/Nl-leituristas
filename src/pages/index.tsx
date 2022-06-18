import React from "react";
import { useState, useCallback, useEffect } from "react";

import { Header } from "components/Header";
import UserInformation from "components/UserInformation";


import { Container, ContainerWrapper, Button, ButtonWrapper } from '../styles/pages'

import mock from '../utils/mock'

import { removeAccent } from "utils/removeAccent";
import Footer from "components/Footer";

export default function Home() {
  const [nls, setNls] = useState([]);
  const [allNls, setAllNls] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");

  const handleLoadPosts = useCallback((page, postsPerPage) => {

    setNls(mock.slice(page, postsPerPage));
    setAllNls(mock);
  }, []);
  useEffect(() => {
    // console.log(new Date().toLocaleString('pt-BR'));
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allNls.slice(nextPage, nextPage + postsPerPage);
    nls.push(...nextPosts);

    setNls(nls);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const noMorePosts = page + postsPerPage >= allNls.length;
  const filteredPosts = searchValue
    ? allNls.filter((post) => {
      return removeAccent(post.description)
        .includes(removeAccent(searchValue));
    })
    : nls;

  return (
      <Container>
      <Header searchValue={searchValue} handleChange={handleChange}/>

        <main>
        <ContainerWrapper>
          {filteredPosts.length > 0 && (
            <>
              {filteredPosts.map((nl, index) => (
                <UserInformation
                  key={index}
                  name={nl.name}
                  description={nl.description}
                  reading={nl.reading}
                  obervacao={nl.obervacao}
                  img={nl.img}
                />
              ))}
            </>
          )}

        </ContainerWrapper>

        {filteredPosts.length === 0 && (
          <>
            {<h2>NL não encontrado =(</h2>}
          </>
        )}

        <ButtonWrapper>
          {!searchValue && (
            <Button
              onClick={loadMorePosts}
              disabled={noMorePosts}
            >
              ↓
            </Button>
          )}
        </ButtonWrapper>

        </main>
        <Footer />
      </Container>
  )
}
