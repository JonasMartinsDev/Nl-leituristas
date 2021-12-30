import React from "react";

import { useState, useCallback, useEffect } from "react";


import SafeEnvironment from "ui/components/feedback/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation";
import TextField from "ui/components/inputs/TextField";
import {
  FormElementsContainer,
  NlsPaper,
  NlsContainer,
} from "ui/styles/pages/";

import { Button, Typography, Container } from "@material-ui/core";
import { loadPosts } from "utils/load-posts";
import { removeAcento } from "utils/removeAcento";

// import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
  const [nls, setNls] = useState([]);
  const [allNls, setAllNls] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(20);
  const [searchValue, setSearchValue] = useState("");

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsOccurrences = await loadPosts();

    setNls(postsOccurrences.slice(page, postsPerPage));
    setAllNls(postsOccurrences);
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
        return removeAcento(post.description)
          .includes(removeAcento(searchValue));
      })
    : nls;

  return (
    <>
      <SafeEnvironment />
      <PageTitle
        description={"Conheça as Notas de leiturista"}
      />
      <Container>
        <FormElementsContainer>
          <TextField
            label={"Pesquise pela NL (ex: embaçado)"}
            fullWidth
            variant={"outlined"}
            value={searchValue}
            onChange={handleChange}
          />
        </FormElementsContainer>
        <NlsPaper>
          <NlsContainer>
            {filteredPosts.length > 0 && (
              <>
                {filteredPosts.map((nl, index) => (
                  <UserInformation
                    key={index}
                    name={nl.name}
                    description={nl.description}
                    reading={nl.reading}
                  />
                ))}
              </>
            )}
            {filteredPosts.length === 0 && (
              <>
                {<Typography color={"error"}>NL não encontrado =(</Typography>}
              </>
            )}
          </NlsContainer>

          <Container sx={{ textAlign: "center" }}>
            {!searchValue && (
              <Button
                variant={"contained"}
                color={"primary"}
                sx={{ mt: 5 }}
                onClick={loadMorePosts}
                disabled={noMorePosts}
              >
                Ver Mais
              </Button>
            )}
          </Container>
        </NlsPaper>
      </Container>
    </>
  );
}
