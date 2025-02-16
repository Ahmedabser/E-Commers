// Script for adding products to the shopping cart
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('تم إضافة المنتج إلى السلة');
    });
});


// تعريف السلة
let cart = [];
let cartCount = document.getElementById("cart-count");

// دالة لإضافة المنتجات إلى السلة
function addToCart(productName) {
    cart.push(productName);
    updateCartCount();
}

// تحديث عدد المنتجات في السلة
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// إضافة حدث عند الضغط على زر "Add to Cart"
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        let productName = this.previousElementSibling.previousElementSibling.textContent;
        addToCart(productName);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // يمنع إعادة تحميل الصفحة

        alert("✅ Your message has been sent successfully!");
        
        // تفريغ الحقول بعد الإرسال
        form.reset();
    });
});


function toggleMenu() {
    let nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}
