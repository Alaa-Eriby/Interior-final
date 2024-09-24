import { create } from 'zustand';

const useStore = create((set) => ({

  categories: [],
  loading: false,
  error: null,

 
  pages: {
    Home: {
      title: 'Home',
      backgroundImage: '/images/home-bg.png',
    },
    Categories: {
      title: 'Categories',
      backgroundImage: '/images/home-bg.png',
    },
    ShopPage: {
      title: 'Shop',
      backgroundImage: '/images/shop-bg.png',
    },
    contact: {
      title: 'Contact',
      backgroundImage: '/images/contact-bg.png',
    },
  },
  currentPage: 'home',
  setPage: (page) => set({ currentPage: page }),
  getPageInfo: (page) => (state) => state.pages[page],


  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      set({ categories: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },


  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  fetchProductById: async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    set({ selectedProduct: product });
  },

  selectedCategory: null,
  setSelectedCategory: (category) => set({ selectedCategory: category }),


  products: [],
  setProducts: (products) => set({ products }),
  currentProductPage: 1,
  totalPages: 3,
  setCurrentProductPage: (page) => set({ currentProductPage: page }),


  name: '',
  email: '',
  subject: '',
  message: '',
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setSubject: (subject) => set({ subject }),
  setMessage: (message) => set({ message }),
  resetForm: () => set({
    name: '',
    email: '',
    subject: '',
    message: ''
  }),
  submitForm: async () => {
    const { name, email, subject, message } = useStore.getState();
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      console.log('Form submitted successfully');
      useStore.getState().resetForm();

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  },

  
  cart: [],

  
  addToCart: (item) => set((state) => {
    const exists = state.cart.find((cartItem) => cartItem.id === item.id);
    if (exists) {
    
      return {
        cart: state.cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        ),
      };
    } else {
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }
  }),


  increaseQuantity: (item) => set((state) => ({
    cart: state.cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ),
  })),

  decreaseQuantity: (item) => set((state) => ({
    cart: state.cart
      .map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 1) } 
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0), 
  })),

  
  updateQuantity: (itemId, quantity) => set((state) => ({
    cart: state.cart
      .map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: Math.max(quantity, 1) } 
          : cartItem
      ),
  })),

  
  removeFromCart: (itemId) => set((state) => ({
    cart: state.cart.filter((cartItem) => cartItem.id !== itemId),
  })),

  removeFromCart: (itemToRemove) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemToRemove.id),
    })),
}));

export default useStore;
