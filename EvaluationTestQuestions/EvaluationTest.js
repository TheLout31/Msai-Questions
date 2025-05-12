const cartItems = [
    { name: "Shoes", category: "Footwear", price: 4999, discount: 20 },
    { name: "T-shirt", category: "Apparel", price: 1999, discount: 35 },
    { name: "Bag", category: "Accessories", price: 2499, discount: 40 },
    { name: "Socks", category: "Apparel", price: 499, discount: 10 }
  ];
  

  const discountedItems = cartItems.map(item => {
    const discountedPrice = +(item.price * (1 - item.discount / 100)).toFixed(2);
    return { ...item, discountedPrice };
  });
  

  const filteredItems = discountedItems.filter(item => item.discount >= 30);
  
 
  const totalDiscountedValue = filteredItems.reduce((acc, item) => acc + item.discountedPrice, 0);
  
  // Output
  console.log({
    filteredItems: filteredItems.map(item => ({
      name: item.name,
      discountedPrice: item.discountedPrice
    })),
    totalDiscountedValue
  });
  