export function AllProducts() {
  
      const ListProducts = [{
                  productId: '0',
                  productName: 'Caneca Star Wars',
                  productImgUrl: '/images/products_imgs/unsplash_6FDXGY9J6y4.png',
                  productPrice: '60,00',
                  productDescription: 'Voluptas voluptatum quibusdam similique, className debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam.',
                  productCode: '#222222',
                  categoryId: '0',
                  productCategory: 'Star Wars'
            },{
                  productId: '1',
                  productName: 'Controle Xbox',
                  productImgUrl: '/images/products_imgs/unsplash_0POwK6iAiRQ.png',
                  productPrice: '390,90',
                  productDescription: 'Voluptas voluptatum quibusdam similique, className debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora.',
                  productCode: '#222222',
                  categoryId: '1',
                  productCategory: 'Console'
            },{
                  productId: '2',
                  productName: 'Capacete Darth Vader',
                  productImgUrl: '/images/products_imgs/unsplash_epRFE_hBNjo.png',
                  productPrice: '40,60',
                  productDescription: 'Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam.',
                  productCode: '#222222',
                  categoryId: '0',
                  productCategory: 'Star Wars'
            },{
                  productId: '3',
                  productName: 'Playstation 5',
                  productImgUrl: '/images/products_imgs/unsplash_caNzzoxls8Q.png',
                  productPrice: '4.500,00',
                  productDescription: 'Voluptas voluptatum quibusdam similique, className debitis alias maecenas eveniet ridiculus, facilis fusce! Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum?',
                  productCode: '#222222',
                  categoryId: '1',
                  productCategory: 'Console'
            },{
                  productId: '4',
                  productName: 'Nintendo Mini',
                  productImgUrl: '/images/products_imgs/unsplash_ZV7lnfyQLmA.png',
                  productPrice: '450,00',
                  productDescription: 'Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae?',
                  productCode: '#222222',
                  categoryId: '1',
                  productCategory: 'Console'
            },{
                  productId: '5',
                  productName: 'Camiseta Atari',
                  productImgUrl: '/images/products_imgs/unsplash_fMP-oCze3AY.png',
                  productPrice: '39,90',
                  productDescription: 'Voluptas voluptatum quibusdam similique, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum?',
                  productCode: '#222222',
                  categoryId: '2',
                  productCategory: 'Diversos'
            },{
                  productId: '6',
                  productName: 'Camiseta Nintendo',
                  productImgUrl: '/images/products_imgs/unsplash_bUgaIaZysH0.png',
                  productPrice: '39,90',
                  productDescription: 'Voluptas voluptatum quibusdam similique, className debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam.',
                  productCode: '#111111',
                  categoryId: '2',
                  productCategory: 'Diversos'
            },{
                  productId: '7',
                  productName: 'Controles Nintendo Switch',
                  productImgUrl: '/images/products_imgs/unsplash_wa5z9o9fgjw.png',
                  productPrice: '390,00',
                  productDescription: 'Voluptas voluptatum quibusdam similique, className debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora.',
                  productCode: '#111111',
                  categoryId: '1',
                  productCategory: 'Console'
            },{
                  productId: '8',
                  productName: 'Boneco Mestre Yoda',
                  productImgUrl: '/images/products_imgs/unsplash_KeGToDVN0l4.png',
                  productPrice: '90,90',
                  productDescription: 'Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam.',
                  productCode: '#111111',
                  categoryId: '0',
                  productCategory: 'Star Wars'
            },{
                  productId: '9',
                  productName: 'Xbox Series X',
                  productImgUrl: '/images/products_imgs/unsplash_Zjn4dT993-g.png',
                  productPrice: '3980,00',
                  productDescription: 'Voluptas voluptatum quibusdam similique, className debitis alias maecenas eveniet ridiculus, facilis fusce! Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum?',
                  productCode: '#111111',
                  categoryId: '1',
                  productCategory: 'Console'
            },{
                  productId: '10',
                  productName: 'Nintendo Game Boy',
                  productImgUrl: '/images/products_imgs/unsplash_k-xYhI3-gJM.png',
                  productPrice: '385,00',
                  productDescription: 'Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae?',
                  productCode: '#111111',
                  categoryId: '1',
                  productCategory: 'Console'
            },{
                  productId: '11',
                  productName: 'Boneco Sonic',
                  productImgUrl: '/images/products_imgs/unsplash_sYVY_ZKwaxU.png',
                  productPrice: '24,90',
                  productDescription: 'Voluptas voluptatum quibusdam similique, className debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam.',
                  productCode: '#111111',
                  categoryId: '2',
                  productCategory: 'Diversos'
            },{
                  productId: '12',
                  productName: 'Rádio Relógio Retro',
                  productImgUrl: '/images/products_imgs/unsplash_jMT6BrgBuXU.png',
                  productPrice: '60,00',
                  productDescription: 'Voluptas voluptatum quibusdam similique, className debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora.',
                  productCode: '#111111',
                  categoryId: '2',
                  productCategory: 'Diversos'
            },{
                  productId: '13',
                  productName: 'Camiseta Hamburguer',
                  productImgUrl: '/images/products_imgs/unsplash_MxVkWPiJALs.png',
                  productPrice: '39,90',
                  productDescription: 'Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam.',
                  productCode: '#111111',
                  categoryId: '2',
                  productCategory: 'Diversos'
            },{
                  productId: '14',
                  productName: 'Boneco Storm Tropper',
                  productImgUrl: '/images/products_imgs/unsplash_4OHkK555s1A.png',
                  productPrice: '45,00',
                  productDescription: 'Voluptas voluptatum quibusdam similique, className debitis alias maecenas eveniet ridiculus, facilis fusce! Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum?',
                  productCode: '#111111',
                  categoryId: '0',
                  productCategory: 'Star Wars'
            },{
                  productId: '0',
                  productName: 'Caneca Star Wars ',
                  productImgUrl: '/images/products_imgs/unsplash_6FDXGY9J6y4.png',
                  productPrice: '600000000,00',
                  productDescription: 'Voluptas voluptatum quibusdam similique, className debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam.',
                  productCode: '#222222',
                  categoryId: '0',
                  productCategory: 'Star Wars'
            },{
                  productId: '0',
                  productName: 'Caneca Star Wars',
                  productImgUrl: '/images/products_imgs/unsplash_6FDXGY9J6y4.png',
                  productPrice: '60000000,00',
                  productDescription: 'Voluptas voluptatum quibusdam similique, className debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam.',
                  productCode: '#222222',
                  categoryId: '0',
                  productCategory: 'Star Wars'
            },{
                  productId: '0',
                  productName: 'Caneca Star Wars',
                  productImgUrl: '/images/products_imgs/unsplash_6FDXGY9J6y4.png',
                  productPrice: '6000000000,00',
                  productDescription: 'Voluptas voluptatum quibusdam similique, className debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam.',
                  productCode: '#222222',
                  categoryId: '0',
                  productCategory: 'Star Wars'
            },{
                  productId: '0',
                  productName: 'Caneca Star Wars',
                  productImgUrl: '/images/products_imgs/unsplash_6FDXGY9J6y4.png',
                  productPrice: '6000000000,00',
                  productDescription: 'Voluptas voluptatum quibusdam similique, className debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam.',
                  productCode: '#222222',
                  categoryId: '0',
                  productCategory: 'Star Wars'
            },{
                  productId: '0',
                  productName: 'Caneca Star Wars',
                  productImgUrl: '/images/products_imgs/unsplash_6FDXGY9J6y4.png',
                  productPrice: '6000000000,00',
                  productDescription: 'Voluptas voluptatum quibusdam similique, className debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam.',
                  productCode: '#222222',
                  categoryId: '0',
                  productCategory: 'Star Wars'
            }];

      return ListProducts;

}
