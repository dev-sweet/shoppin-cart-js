function updateProductQuantity(product,price,isIncreising){
    const productField = document.getElementById(product+'-number');
    let productQuantity = productField.value;
    if(isIncreising == true){
        productQuantity = parseInt(productQuantity) + 1;
    }
    else if(productQuantity > 0){
        productQuantity = parseInt(productQuantity) - 1; 
    }
    productField.value = productQuantity;
    // update phone total
    const productPriceField = document.getElementById(product + '-price');
    productPriceField.innerText = parseInt(productQuantity * price);
    calculateTotal();
};
function calculateTotal(){
    const phonePriceField =  document.getElementById('phone-price');
    const casePriceField =  document.getElementById('case-price');
    const phonePrice = parseInt(phonePriceField.innerText);
    const casePrice  = parseInt(casePriceField.innerText);
    const subTotal = phonePrice  + casePrice;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    // update sub total
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}
// increae and decrease phone quantity
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductQuantity('phone',1219,true);
});

document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductQuantity('phone',1219,false);
});
// increase and decrease case quantity
document.getElementById('case-plus').addEventListener('click',function(){
    updateProductQuantity('case',59,true);
});
document.getElementById('case-minus').addEventListener('click',function(){
    updateProductQuantity('case',59,false);
});