import { toast } from "react-toastify";

const getDataToLocalStorage = () => {
    const allData = localStorage.getItem('cart')
    if (allData) {
        const data = JSON.parse(allData);
        return data;
    } else {
        return [];
    }
}

const setDataToLocalStorage = (device) => {
    const StoredItem = getDataToLocalStorage();
    const isExist = StoredItem.find( item => item.product_id === device.product_id);
    if (isExist) {
      return toast.warning('Already added to cart')
    } else {
        StoredItem.push(device);
        const items = JSON.stringify(StoredItem);
        localStorage.setItem('cart', items)
        toast.success('Successfully Added add to Cart!')
    }
   
}

const removeToLocalStorage = (id) =>{
    const StoredItem = getDataToLocalStorage();
    const RemainingItem = StoredItem.filter(device=> device.product_id != id);
    const items1 = JSON.stringify(RemainingItem);
    localStorage.setItem('cart', items1)
    toast.success('Successfully removed from cart!')
}

const getwshToLocalStorage = () => {
    const allWish = localStorage.getItem('wishlist')
    if (allWish) {
        const wish = JSON.parse(allWish);
        return wish;
    } else {
        return [];
    }
}

const setwishToLocalStorage = (product) => {
    const wishItem = getwshToLocalStorage();
    const isExists = wishItem.find( items => items.product_id === product.product_id);
    if (isExists) {
      return toast.warning('Already added to wishlist')
    } else {
        wishItem.push(product);
        const itemwish = JSON.stringify(wishItem);
        localStorage.setItem('wishlist', itemwish)
        toast.success('Successfully Added to wishlist!')
    }
   
}

const removeWishLocalStorage = (product) =>{
    const wishItem = getDataToLocalStorage();
    const RemainingItem = wishItem.filter(device=> device.product_id != product);
    const items = JSON.stringify(RemainingItem);
    localStorage.setItem('wishlist', items)
    toast.success('Successfully removed from wishlist!')
}
 

export { setDataToLocalStorage, getDataToLocalStorage, removeToLocalStorage, removeWishLocalStorage, setwishToLocalStorage, getwshToLocalStorage }
