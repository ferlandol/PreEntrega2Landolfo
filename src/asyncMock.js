const products = [
  // Categoría: Remeras
  {
    id: "1",
    name: "Remera Nike Air",
    price: 30,
    category: "remeras",
    img: "https://www.nike.com/media/gear/cross-trainers/white-2020.jpg",
    stock: 25,
    description: "Remera Nike Air, talla M, color negro. Hecha con materiales transpirables para comodidad todo el día.",
  },
  {
    id: "2",
    name: "Remera Adidas Originals",
    price: 25,
    category: "remeras",
    img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/ee7a577c1bfc421a8b1bac5900b5cf9b_9366/Remera_Adidas_Originals_Hombre.png",
    stock: 16,
    description: "Remera Adidas Originals, diseño clásico, disponible en talla S, M y L.",
  },
  {
    id: "3",
    name: "Remera Puma Classic",
    price: 20,
    category: "remeras",
    img: "https://assets.puma.com/media/catalog/product/p/u/puma-us-en-remera.png",
    stock: 30,
    description: "Remera Puma Classic, ideal para el día a día, 100% algodón.",
  },

  // Categoría: Pantalones
  {
    id: "4",
    name: "Pantalón Levi's 501",
    price: 60,
    category: "pantalones",
    img: "https://www.levi.com.pe/media/catalog/product/5/0/501_originals.jpg",
    stock: 18,
    description: "Pantalón Levi's 501, corte recto, denim de alta calidad, disponible en todos los tamaños.",
  },
  {
    id: "5",
    name: "Pantalón Dockers Slim Fit",
    price: 50,
    category: "pantalones",
    img: "https://www.dockers.com/media/catalog/product/d/o/dockers_slim_fit_pantalon.jpg",
    stock: 15,
    description: "Pantalón Dockers Slim Fit, estilo casual con corte ajustado, ideal para el trabajo o el uso diario.",
  },
  {
    id: "6",
    name: "Pantalón Nike Sportswear",
    price: 40,
    category: "pantalones",
    img: "https://www.nike.com/media/catalog/product/pant-nike-sportswear.jpg",
    stock: 22,
    description: "Pantalón Nike Sportswear, diseño cómodo y flexible para entrenamiento o uso diario.",
  },

  // Categoría: Camperas
  {
    id: "7",
    name: "Campera Columbia Thermo",
    price: 120,
    category: "camperas",
    img: "https://www.columbia.com/media/catalog/product/c/a/campera-columbia-thermo.jpg",
    stock: 15,
    description: "Campera Columbia Thermo, ideal para climas fríos, fabricada con tecnología de aislamiento térmico.",
  },
  {
    id: "8",
    name: "Campera North Face Apex",
    price: 140,
    category: "camperas",
    img: "https://www.thenorthface.com/media/catalog/product/c/a/campera_north_face_apex.jpg",
    stock: 8,
    description: "Campera North Face Apex, perfecta para actividades al aire libre con resistencia al viento y al agua.",
  },
  {
    id: "9",
    name: "Campera Patagonia Tres 3-in-1",
    price: 160,
    category: "camperas",
    img: "https://www.patagonia.com/media/catalog/product/p/a/patagonia_tres_3in1_campera.jpg",
    stock: 10,
    description: "Campera Patagonia Tres 3-in-1, versátil para todo tipo de clima con forro desmontable.",
  },
];



  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      },);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod)=> prod.category === categoryId));
      },);
    });
  }
  
   export const getProductByID = (productId) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products.find((prod) => prod.id === productId));
        },);
      });
  };

  export const searchProducts = (searchTerm) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.name.toLowerCase().includes(searchTerm.toLowerCase())));
      },);
    });
  };