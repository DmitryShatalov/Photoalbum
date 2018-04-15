import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const posts = [
      {   id: 1,
          img:"https://lh3.googleusercontent.com/nGAOAJ89OPi7tBdX4QY2t716jEzM73qwka3R8OKFsTnzU28dE2kHwrrYJo40Aapzm7co=s360",
          title: "pesik",
          description: "Красивая собачка",
          //rate: 3
      },
      {   
        id: 2,
          img:"http://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png",
          title: "dino",
          description: "Опасный динозавр",
         // rate: 1
      },
      { 
        id: 3,
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz0jzUrtBj2-4yDIKqGUGgGaHaeuxkXGWvFTd99FNrQPdIy6cxkw",
          title: "kisa",
          description: "Красивая киса",
         // rate: 2
      },
      { 
        id: 4,
          img:"http://heaclub.ru/tim/e456a0fb6ecdcb8f11d0ce274960329e/babochka-mahaon-dnevnaya-ili-nochnaya.jpg",
          title: "бабочка",
          description: "Красивая бабочка",
         // rate: 5
      },
      { 
        id: 5,
          img:"http://kievpravda.com/media/images/34652/raw/6c603812bc896f4cd1a6902f6b97dfb1.jpg",
          title: "панда",
          description: "Красивая панда",
          //rate: 4
      },
   ];
   return {posts}
  }

}
