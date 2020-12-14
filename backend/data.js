import bcrypt from 'bcryptjs';
const data={
    users:[
        {
            name:'daniel',
            email:'admin@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:true
        },
        {
            name:'jhon',
            email:'jhon@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:false
        }
    ],
    products:[
        {
            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/product-1.jpg',
            price:1200,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'Champion Joggin Suit',
            category:'Joggin Suit',
            image:'/images/product-1.jpg',
            price:1200,
            countInStock:50,
            brand:'Champion',
            rating:4.5,
            numReviews:10,
            description:'high quality product'
        },
        {
            name:'Lux Slim Shirt',
            category:'Shirts',
            image:'/images/product-1.jpg',
            price:1201,
            countInStock:10,
            brand:'Lux',
            rating:5,
            numReviews:12,
            description:'high quality product'
        },
        {
            name:'MF Slim Shirt',
            category:'Shirts',
            image:'/images/product-1.jpg',
            price:1500,
            countInStock:10,
            brand:'MF',
            rating:3,
            numReviews:187,
            description:'high quality product'
        },
        {
            name:'Tresh Slim Shirt',
            category:'Shirts',
            image:'/images/product-1.jpg',
            price:120,
            countInStock:10,
            brand:'Tresh',
            rating:4,
            numReviews:15,
            description:'high quality product'
        }
    ]
}

export default data;