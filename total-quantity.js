/*
  Buatlah program untuk menjumlahkan total quantity dari semua storageId untuk produk dengan productCode FBR00040101 (FloBrand-DressBSPink).
*/

let productBin = {
  requestId: null,
  data: [
    {
      id: 100000057465,
      storageId: 10000008207,
      code: "A01-01-01-A",
      productId: 110000081009,
      productName: "FloBrand-DressBSPink",
      productCode: "FBR00040101",
      quantity: 76,
      createdTime: "2021-12-21T13:54:48Z",
    },
    {
      id: 100000057466,
      storageId: 10000002181,
      code: "A01-01-01-B",
      productId: 110000081009,
      productName: "FloBrand-DressBSPink",
      productCode: "FBR00040101",
      quantity: 71,
      createdTime: "2021-12-21T13:54:48Z",
    },
    {
      id: 100000065224,
      storageId: 10000008884,
      code: "Tgt00-A-A-01",
      productId: 110000081009,
      productName: "FloBrand-DressBSPink",
      productCode: "FBR00040101",
      quantity: 10,
      createdTime: "2022-02-08T10:35:19Z",
    },
  ],
  message: "success",
};

const totalQuantity = () => {
  let total = 0;
  for (const product of productBin.data) {
    // check if the productCode of current item is "FBR00040101"
    if (product.productCode === "FBR00040101") {
      total += product.quantity; // add the quantity of current item to total quantity
    }
  }
  return total; // return total quantity
};

console.log(`Total quantity of the product with productCode "FBR00040101": ${totalQuantity()}`);
