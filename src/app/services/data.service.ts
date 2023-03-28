import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { Painting } from '../interfaces/paintings';
import { Post } from '../interfaces/post';
import { Reply } from '../interfaces/reply';
import { Review } from '../interfaces/review';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    categories: Category[] = [
        {
            "id": 2,
            "name": "Impressionism"
        },
        {
            "id": 3,
            "name": "Abstract"
        },
        {
            "id": 1,
            "name": "Expressionism"
        },
        {
            "id": 5,
            "name": "Surrealism"
        },
        {
            "id": 4,
            "name": "Realism"
        }
    ];

    paintings: Painting[] = [
        {
            "name": "War in Ukraine",
            "id": 8,
            "author": "Alexander Kaniuka",
            "yearMade": 2022,
            "price": 42500,
            "image": "assets/2.jpg",
            "category": 2,
            "description": "Art conveying the current situation in Ukraine. For more than five years, fighting has continued on the territory ... It is made in the format 30 * 40. I can provide all the work processes.",
            "popularity": [
                "top ranking",
                "bestsellers"
            ],
            "rating": 1,
            "inStock": "In Stock",
            "delivery": 10
        },
        {
            "name": "Sleeping Hero",
            "id": 1,
            "author": "Sebastien Blondet",
            "yearMade": 2022,
            "price": 12200,
            "image": "assets/1.jpg",
            "oldPrice": 15000,
            "discount": 18,
            "category": 1,
            "description": "Inspired by the poem of Arthur Rimbaud 'Le dormeur du val'. This art is dedicated to all the men and women who gave their life to defend their land and families. May you rest in eternal peace.",
            "popularity": [
                "most popular",
                "bestsellers"
            ],
            "inStock": "In Stock",
            "delivery": 8
        },
        {
            "name": "Support for Ukraine",
            "id": 3,
            "author": "Arthur Steinbach",
            "yearMade": 2022,
            "price": 5000,
            "image": "assets/3.jpg",
            "oldPrice": 7000,
            "discount": 28,
            "category": 3,
            "description": "European Bird Census Council expresses its deep concern about the military attack of the Russian Federation on Ukraine. Birds do not know borders, and their research and conservation require international cooperation. Within EBCC projects, we work together with individuals and organisations across whole Europe towards common goals. Regardless of differences in languages, cultures, religion, or political views, the EBCC network has always shown a sense of cooperation and solidarity.",
            "popularity": [
                "most popular"
            ],
            "rating": 3,
            "inStock": "In Stock",
            "delivery": 14
        },
        {
            "name": "Heroes of Ukraine",
            "id": 7,
            "author": "Su Yu",
            "yearMade": 2022,
            "price": 3000,
            "image": "assets/4.jfif",
            "oldPrice": 3500,
            "discount": 14,
            "category": 4,
            "description": "Oil on canvas - diptych. Su Yu is a Chinese artist born in 1987 who lives & works in Beijing in China. He was an old student of prestigious art teachers as Shi Liang & Chen Danqing at Oil Painting Institute in Beijing.",
            "popularity": [
                "bestsellers",
                "top ranking"
            ],
            "rating": 4,
            "inStock": "In Stock",
            "delivery": 7
        },
        {
            "name": "Mother and Baby Jesus",
            "id": 6,
            "author": "Maria Harasowska-Daczyszyn",
            "yearMade": 1911,
            "price": 30000,
            "image": "assets/5.png",
            "category": 5,
            "description": "The Marian Library has a series of prints by the well-known Ukrainian artist Maria Harasowska-Daczyszyn (1911-2000). Known by her nickname 'Mika', she was born in the city of Staryi Sambir, Ukraine, to a religious family that encouraged her artistic pursuits from an early age. It is estimated that she created over 1,000 paintings in her lifetime — portraits, natural landscapes, and Marian icons featuring the Blessed Mother and Baby Jesus in various stylized traditional Ukrainian clothing. ",
            "popularity": [
                "most popular",
                "bestsellers"
            ],
            "rating": 5,
            "inStock": "In Stock",
            "delivery": 10
        },
        {
            "name": "Boris Chuprina",
            "id": 5,
            "author": "Team of the Chernihiv Regional Historical Museum",
            "yearMade": 2022,
            "price": 616000,
            "image": "assets/6.jpg",
            "category": 1,
            "description": "23 May 2022 year Cossack community of Chernihiv military church of St.. Catherine and the Free Cossacks, according to the ancient customs and traditions of the Ukrainian Cossacks, noted the contribution of the Prime Minister of the United Kingdom Boris Johnson in protecting the rights and freedoms of Ukrainians, in defending our honor and dignity in the struggle for Ukraine's independence against Russian military aggression. By the decision of the community, Boris Johnson was ordained a Cossack and named Boris Chuprina. New times introduce new traditions. The dedication took place in absentia, but for the Great Supporter of Ukraine, such an exception can be made.",
            "popularity": [
                "bestsellers",
                "top ranking"
            ],
            "rating": 1,
            "inStock": "In Stock",
            "delivery": 14
        },
        {
            "name": "Pes Patron",
            "id": 4,
            "author": "Ukrainian volunteer",
            "yearMade": 2022,
            "price": 16000,
            "image": "assets/7.jfif",
            "oldPrice": 18000,
            "discount": 11,
            "category": 2,
            "description": "Patron first came to prominence during the 2022 Russian invasion of Ukraine, during which Ukrainian president Volodymyr Zelenskyy awarded him the Order for Courage for his work in locating and defusing unexploded ordnance left behind by Russian troops. As of 8 May 2022, Patron has found 236 such devices.",
            "popularity": [
                "top ranking",
                "bestsellers"
            ],
            "rating": 2,
            "inStock": "In Stock",
            "delivery": 10
        }
    ];

    productReviews: Review[] = [

    ];

    shopReviews: Review[] = [
        {
            "firstName": "Andrii",
            "lastName": "Semeriak",
            "email": "asd@asd",
            "rating": 4,
            "comments": "Good!",
            "date": "2023-03-04T13:56:05.304Z",
            "id": 1
        },
        {
            "firstName": "Oksana",
            "lastName": "Semeriak",
            "email": "sdsd@sdfasd",
            "rating": 5,
            "comments": "Nice!",
            "date": "2023-04-04T13:56:05.304Z",
            "id": 2
        },
        {
            "firstName": "Asfur",
            "lastName": "Abdel Rahim",
            "email": "asdasda55@adas",
            "rating": 3,
            "comments": "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here",
            "date": "2023-05-04T13:56:05.304Z",
            "id": 3
        },
        {
            "firstName": "Ali",
            "lastName": "Bentner",
            "email": "jhhhgj@asd",
            "rating": 1,
            "comments": "I did not find the painting what I wanted",
            "date": "2023-06-04T13:56:05.304Z",
            "id": 4
        },
        {
            "firstName": "Azer",
            "lastName": "Wonder",
            "email": "qwer25@asd",
            "rating": 1,
            "comments": "very few products",
            "date": "2023-07-04T13:56:05.304Z",
            "id": 5
        },
        {
            "firstName": "Ira",
            "lastName": "Lastivka",
            "email": "erituer55@asd",
            "rating": 4,
            "comments": "Not so many products but very nice paintings",
            "date": "2023-08-04T13:56:05.304Z",
            "id": 6
        }
    ];

    posts: Post[] = [
        {
            "id": 1,
            "image": [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg/1280px-Claude_Monet%2C_Impression%2C_soleil_levant.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uoFqfTdUYRmy9QYQ976izhhkg0TMxviWCw&usqp=CAU"
            ],
            "header": "Impressionism developed in France in the nineteenth century and is based on the practice of painting out of doors and spontaneously ‘on the spot’ rather than in a studio from sketches. Main impressionist subjects were landscapes and scenes of everyday life",
            "author": "Wilson Steer",
            "tags": [
                "Impressionism",
                "Color Field Painting"
            ],
            "date": new Date(),
            "category": 1
        },
        {
            "id": 2,
            "image": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ydPb3kYbY5rxKCjH6yb7EyRgY3grbeDlLbX5yIvzv9NOokfOK6H1xRffMOyqgRiURCk&usqp=CAU",
                "https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=400"
            ],
            "header": "Impressionism developed in France in the nineteenth century and is based on the practice of painting out of doors and spontaneously ‘on the spot’ rather than in a studio from sketches. Main impressionist subjects were landscapes and scenes of everyday life",
            "author": "Wilson Steer",
            "tags": [
                "Impressionism",
                "Color Field Painting"
            ],
            "date": new Date(),
            "category": 2
        },
        {
            "id": 3,
            "image": [
                "https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/1070536/pexels-photo-1070536.jpeg?auto=compress&cs=tinysrgb&w=400"
            ],
            "header": "Impressionism developed in France in the nineteenth century and is based on the practice of painting out of doors and spontaneously ‘on the spot’ rather than in a studio from sketches. Main impressionist subjects were landscapes and scenes of everyday life",
            "author": "Wilson Steer",
            "tags": [
                "Impressionism",
                "Color Field Painting"
            ],
            "date": new Date(),
            "category": 3
        },
        {
            "id": 4,
            "image": [
                "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/732548/pexels-photo-732548.jpeg?auto=compress&cs=tinysrgb&w=400"
            ],
            "header": "Impressionism developed in France in the nineteenth century and is based on the practice of painting out of doors and spontaneously ‘on the spot’ rather than in a studio from sketches. Main impressionist subjects were landscapes and scenes of everyday life",
            "author": "Wilson Steer",
            "tags": [
                "Impressionism",
                "Color Field Painting"
            ],
            "date": new Date(),
            "category": 4
        },
        {
            "id": 5,
            "image": [
                "https://images.pexels.com/photos/1573434/pexels-photo-1573434.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/1234853/pexels-photo-1234853.jpeg?auto=compress&cs=tinysrgb&w=400"
            ],
            "header": "Impressionism developed in France in the nineteenth century and is based on the practice of painting out of doors and spontaneously ‘on the spot’ rather than in a studio from sketches. Main impressionist subjects were landscapes and scenes of everyday life",
            "author": "Wilson Steer",
            "tags": [
                "Impressionism",
                "Color Field Painting"
            ],
            "date": new Date(),
            "category": 5
        },
        {
            "id": 6,
            "image": [
                "https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=400"
            ],
            "header": "Impressionism developed in France in the nineteenth century and is based on the practice of painting out of doors and spontaneously ‘on the spot’ rather than in a studio from sketches. Main impressionist subjects were landscapes and scenes of everyday life",
            "author": "Wilson Steer",
            "tags": [
                "Impressionism",
                "Color Field Painting"
            ],
            "date": new Date(),
            "category": 1
        },
        {
            "id": 7,
            "image": [
                "https://images.pexels.com/photos/1532704/pexels-photo-1532704.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/1690351/pexels-photo-1690351.jpeg?auto=compress&cs=tinysrgb&w=400"
            ],
            "header": "Impressionism developed in France in the nineteenth century and is based on the practice of painting out of doors and spontaneously ‘on the spot’ rather than in a studio from sketches. Main impressionist subjects were landscapes and scenes of everyday life",
            "author": "Wilson Steer",
            "tags": [
                "Impressionism",
                "Color Field Painting"
            ],
            "date": new Date(),
            "category": 2
        },
        {
            "id": 8,
            "image": [
                "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=400"
            ],
            "header": "Impressionism developed in France in the nineteenth century and is based on the practice of painting out of doors and spontaneously ‘on the spot’ rather than in a studio from sketches. Main impressionist subjects were landscapes and scenes of everyday life",
            "author": "Wilson Steer",
            "tags": [
                "Impressionism",
                "Color Field Painting"
            ],
            "date": new Date(),
            "category": 3
        },
        {
            "id": 9,
            "image": [
                "https://images.pexels.com/photos/1406863/pexels-photo-1406863.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/288100/pexels-photo-288100.jpeg?auto=compress&cs=tinysrgb&w=400"
            ],
            "header": "Impressionism developed in France in the nineteenth century and is based on the practice of painting out of doors and spontaneously ‘on the spot’ rather than in a studio from sketches. Main impressionist subjects were landscapes and scenes of everyday life",
            "author": "Wilson Steer",
            "tags": [
                "Impressionism",
                "Color Field Painting"
            ],
            "date": new Date(),
            "category": 4
        },
        {
            "id": 10,
            "image": [
                "https://images.pexels.com/photos/3063362/pexels-photo-3063362.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/2041707/pexels-photo-2041707.jpeg?auto=compress&cs=tinysrgb&w=400"
            ],
            "header": "Impressionism developed in France in the nineteenth century and is based on the practice of painting out of doors and spontaneously ‘on the spot’ rather than in a studio from sketches. Main impressionist subjects were landscapes and scenes of everyday life",
            "author": "Wilson Steer",
            "tags": [
                "Impressionism",
                "Color Field Painting"
            ],
            "date": new Date(),
            "category": 1
        },
        {
            "id": 11,
            "image": [
                "https://images.pexels.com/photos/1546249/pexels-photo-1546249.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/1045299/pexels-photo-1045299.jpeg?auto=compress&cs=tinysrgb&w=400"
            ],
            "header": "Impressionism developed in France in the nineteenth century and is based on the practice of painting out of doors and spontaneously ‘on the spot’ rather than in a studio from sketches. Main impressionist subjects were landscapes and scenes of everyday life",
            "author": "Wilson Steer",
            "tags": [
                "Impressionism",
                "Color Field Painting"
            ],
            "date": new Date(),
            "category": 1
        },
        {
            "id": 12,
            "image": [
                "https://images.pexels.com/photos/1096664/pexels-photo-1096664.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/1372990/pexels-photo-1372990.jpeg?auto=compress&cs=tinysrgb&w=400"
            ],
            "header": "Impressionism developed in France in the nineteenth century and is based on the practice of painting out of doors and spontaneously ‘on the spot’ rather than in a studio from sketches. Main impressionist subjects were landscapes and scenes of everyday life",
            "author": "Wilson Steer",
            "tags": [
                "Impressionism",
                "Color Field Painting"
            ],
            "date": new Date(),
            "category": 2
        }
    ];

    replies: Reply[] = [

    ]
}
