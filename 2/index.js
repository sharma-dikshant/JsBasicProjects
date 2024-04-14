document.addEventListener("DOMContentLoaded", function () {
  // creating class

  class Product {
    constructor(name, price, description) {
      this.name = name;
      this.price = price;
      this.description = description;
    }
  }

  // creating product instances

  const Products = [
    new Product("laptop", 58000, "Asus Vivobook"),
    new Product("laptop", 56000, "hp Victus"),
    new Product("laptop", 78000, "Lenovo Thinkpad"),
  ];

  const ProductList = document.querySelector(".ProductList");

  Products.forEach((item) => {
    const ProductElement = document.createElement("div");
    ProductElement.innerHTML = `
        <table>
        <td>
            <tr>Product : ${item.name}</tr>
            <tr>Price : ${item.price}</tr>
            <tr>Description : ${item.description}</tr>
        </td>
        </table>
        `;
    ProductList.appendChild(ProductElement);
  });

  // function to dynamically add details

  document.querySelector(".addProductBtn").addEventListener("click", () => {
    let Name = document.querySelector(".inputName").value;
    let Price = document.querySelector(".inputPrice").value;
    let Description = document.querySelector(".inputDescription").value;

    if (Name.trim() == "" || Price.trim() == "" || Description.trim() == "") {
      alert("Enter Complete Details");
      document.querySelector(".inputName").value = "";
      document.querySelector(".inputPrice").value = "";
      document.querySelector(".inputDescription").value = "";
    } else {
      let newProduct = new Product(Name, Price, Description);
      Products.push(newProduct);

      let ProductElement = document.createElement("div");
      ProductElement.innerHTML = `
        <table>
            <td>
            <tr>Product : ${newProduct.name}</tr>
            <tr>Price : ${newProduct.price}</tr>
            <tr>Description : ${newProduct.description}</tr>
            </td?
        </table>
        `;
      ProductList.appendChild(ProductElement);
      document.querySelector(".inputName").value = "";
      document.querySelector(".inputPrice").value = "";
      document.querySelector(".inputDescription").value = "";
    }
  });
});
