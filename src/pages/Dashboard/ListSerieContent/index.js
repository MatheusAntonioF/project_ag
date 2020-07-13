import React, { useState, useEffect } from 'react';

import { Container, Header, Content } from './styles';
import api from '~/services/api';

import player_svg from '~/assets/play-small-player-w.svg';

export default function ListSerieContent() {
  const [episodes, setEpisodes] = useState([]);

  const [toggleButton, setToggleButton] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('episodes/SHOW123.json');
      setEpisodes(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {episodes.length >= 1 && (
        <Container>
          <Header>
            <button onClick={() => setToggleButton(1)}>T1</button>
            <button onClick={() => setToggleButton(2)}>T2</button>
            <button onClick={() => setToggleButton(3)}>T3</button>
          </Header>
          <Content>
            {episodes.map((episode) => {
              if (episode?.SeasonNumber === toggleButton) {
                return (
                  <div className="ep">
                    <span>
                      {episode.EpisodeNumber} {episode.Title}
                    </span>
                    <img src={player_svg} alt="Player Icon" />
                  </div>
                );
              }
              return null;
            })}
          </Content>
        </Container>
      )}
    </>
  );
}
