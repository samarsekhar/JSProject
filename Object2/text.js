let order = {
    order_Id : 301,
    order_Name : "Discount Product",
    order_price : 23000,
    get_order_details : () => {return "order delivered successfully"}
}
console.log(order.order_Id);
console.log(order.order_Name);
console.log(order.order_price);
console.log(order.get_order_details()); 
console.log(order.show_details);