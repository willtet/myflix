import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import PageDefault from '../../components/PageDefault'
import categoriasRepositories from '../../repositories/categorias'


function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([])

  useEffect(()=>{
    categoriasRepositories.getAllWithVideo().then((catComVid)=>{
      setDadosIniciais(catComVid)
    }).catch((error)=>{
      console.log(error.message);
    })
  },[])

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading</div>)}
      {dadosIniciais.map((categoria,indice)=>{
        if(indice === 0 ){
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo} 
                url={dadosIniciais[0].videos[0].url} 
                videoDescription = 'Video 1'
              />

              <Carousel
                ignoreFirstVideo 
                category={dadosIniciais[0]} 
              />  
            </div>
          )
        }

        return (
          <Carousel
                key={categoria.id} 
                category={categoria} 
              />  
        )
      })}
      
    </PageDefault>
  );
}

export default Home;
