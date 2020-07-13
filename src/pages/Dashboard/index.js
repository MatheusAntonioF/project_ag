import React, { useState, useEffect } from 'react';

import {
  Container,
  Main,
  Header,
  Footer,
  ContentFooter,
  DivGeneral,
  DivCast,
} from './styles';

import api from '~/services/api';

import cienc_svg from '~/assets/cienc.svg';
import close_svg from '~/assets/close-search-w.svg';
import logo_telecine from '~/assets/logo-telecine.svg';
import add_svg from '~/assets/add-gray-s.svg';
import sad_svg from '~/assets/sad-gray-w.svg';
import req_svg from '~/assets/rec-gray-s.svg';
import share_svg from '~/assets/share-gray-s.svg';

import ListSerieContent from './ListSerieContent';

export default function Dashboard() {
  const [dataSeries, setDataSeries] = useState({});

  const [toggleButton, setToggleButton] = useState('');

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('tv-shows/SHOW123.json');

      setDataSeries(data);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Main background_image={dataSeries?.Images?.Background}>
        <Header>
          <div className="title">
            <span>{dataSeries?.Title}</span>
            <img src={cienc_svg} alt="Other details" />
          </div>

          <div className="close">
            <img src={close_svg} alt="Close icon" />
          </div>
        </Header>
        <ListSerieContent />
      </Main>
      <Footer>
        <div className="options">
          <button onClick={() => setToggleButton('general')}>GENERAL</button>
          <button onClick={() => setToggleButton('cast')}>ELENCO</button>
          <button onClick={() => setToggleButton('main-awards')}>
            PRINCIPALES PREMIOS
          </button>

          <div className="icon-telecine">
            <img src={logo_telecine} alt="Icon TeleCine" />
          </div>
        </div>
        <ContentFooter>
          {toggleButton === 'general' && (
            <DivGeneral>
              <div className="icons">
                <button>
                  <img src={add_svg} alt="Add Icon" />
                  <span>Mi Lista</span>
                </button>
                <button>
                  <img src={sad_svg} alt="Sad Icon" />
                  <span>Evaluar</span>
                </button>
                <button>
                  <img src={req_svg} alt="Req Icon" />
                  <span>Grabar</span>
                </button>
                <button>
                  <img src={share_svg} alt="Share Icon" />
                  <span>Compartir</span>
                </button>
              </div>
              <div className="synopsis">
                <span className="title">Sinopse</span>
                <span>{dataSeries?.Synopsis}</span>
              </div>
            </DivGeneral>
          )}
          {toggleButton === 'cast' && (
            <DivCast>
              {dataSeries?.Cast?.map((cast) => (
                <div className="one-cast">
                  <span className="title">{cast?.ID}</span>
                  <span className="name">{cast?.Name}</span>
                </div>
              ))}
            </DivCast>
          )}
        </ContentFooter>
      </Footer>
    </Container>
  );
}
