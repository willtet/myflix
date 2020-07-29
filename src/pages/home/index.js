import React from 'react';
import Menu from '../../components/Menu/index'
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'


function Home() {
  return (
    <div>
      <Menu />
      
      <BannerMain 
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        url = {dadosIniciais.categorias[0].videos[0].url}
        videoDescription = {dadosIniciais.categorias[0].videos[0].titulo}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
    </div>
  );
}

export default Home;
