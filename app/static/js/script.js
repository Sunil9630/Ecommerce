document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            let img=document.getElementById('mainimg');
            let img2=document.getElementById('mainimg2').attributes.src;
            img.attributes.src=img2;
            // You could use localStorage or cookies to store cart items.
            // You might want to implement this using a more advanced method for real-world scenarios.
            alert('Product added to cart!');
        });
    });
});
