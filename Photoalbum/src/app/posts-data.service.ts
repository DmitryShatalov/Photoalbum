import {PostsData} from './posts-data'
export class PostsDataService {
    private posts: PostsData[] = [
        { 
            img:"https://lh3.googleusercontent.com/nGAOAJ89OPi7tBdX4QY2t716jEzM73qwka3R8OKFsTnzU28dE2kHwrrYJo40Aapzm7co=s360",
            title: "pesik",
            description: "Красивая собачка",
            rate: 3
        },
        { 
            img:"http://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png",
            title: "dino",
            description: "Опасный динозавр",
            rate: 1
        },
        { 
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz0jzUrtBj2-4yDIKqGUGgGaHaeuxkXGWvFTd99FNrQPdIy6cxkw",
            title: "kisa",
            description: "Красивая киса",
            rate: 2
        },
        { 
            img:"http://heaclub.ru/tim/e456a0fb6ecdcb8f11d0ce274960329e/babochka-mahaon-dnevnaya-ili-nochnaya.jpg",
            title: "бабочка",
            description: "Красивая бабочка",
            rate: 5
        },
        { 
            img:"http://kievpravda.com/media/images/34652/raw/6c603812bc896f4cd1a6902f6b97dfb1.jpg",
            title: "панда",
            description: "Красивая панда",
            rate: 4
        },
     ];

     getData(): PostsData[] {
        return this.posts;
     }
     addData( img: string, title: string,  description: string,  rate: number){
        this.posts.push(new PostsData(img,title,description,rate));
        console.log(this.posts.length);
     }
     deleteData(index){
         this.posts.splice(index, 1);
     }

     editData(index, newTittle, newDesc){
        this.posts[index].title = newTittle;
        this.posts[index].description = newDesc;
        console.log(this.posts[index]);
     }
}