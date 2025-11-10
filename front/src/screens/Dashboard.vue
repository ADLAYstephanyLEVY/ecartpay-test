<script setup>
import { ref, onMounted } from "vue";
import { DataTable } from "primevue";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import ProductService from "@/services/product.service";
import PaymentService from "@/services/payment.service";
import Menubar from "@/components/Menubar.vue";

import { useToast } from "primevue/usetoast";
const toast = useToast();

// Data states
const products = ref([]);
const selectedProducts = ref([]);
const loading = ref(true);
const localSelection = ref("{}");

const newProduct = ref({
  name: "",
  sku: "",
  price: 0,
  stock: 0,
});

const loadProducts = async () => {
  loading.value = true;
  try {
    products.value = await ProductService.getAllProducts();
    console.log(products.value);
  } catch (err) {
    console.log("Error loading data", err);
  } finally {
    loading.value = false;
  }
};

const handleCheckout = async () => {
  localSelection.value = JSON.stringify(selectedProducts.value, null, 2);
  toast.add({
    severity: "success",
    summary: "Saved",
    detail: "Selected items saved localy",
    life: 3000,
  });

  console.log(selectedProducts.value);

  const selectedPrices = selectedProducts.value.map((item) =>
    Number(item.price)
  );
  console.log(selectedPrices);

  let data = {
    amounts: selectedPrices,
    concept: "Order generated",
    currency: "MXN",
  };

  try {
    const created = await PaymentService.createCheckout(data);
    console.log("Checkout exitoso, respuesta de Ecartpay:", created);
  } catch (err) {
    console.error("Fallo la llamada de Checkout:", err);
  }
};

const handleAddProduct = async () => {
  try {
    const created = await ProductService.createProduct(newProduct.value);
    products.value.push(created);
    newProduct.value = {}; // clean form
    toast.add({
      severity: "success",
      summary: "Saved",
      detail: "Product created",
      life: 3000,
    });
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  loadProducts();
});
</script>

<template>
  <Toast />
  <Menubar />
  <div>
    <h1 class="dashboard-title">Products</h1>

    <div>
      <div class="subtitle-section">
        <h3>Available products</h3>
        <Button
          icon="pi pi-shopping-cart"
          label="Checkout"
          :disabled="selectedProducts.length === 0"
          @click="handleCheckout"
        />
      </div>
      <DataTable
        v-model:selection="selectedProducts"
        :value="products"
        tableStyle="min-width: 50rem"
        :loading="loading"
        dataKey="_id"
        paginator
        :rows="10"
        :rowHover="true"
      >
        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
        <Column field="sku" header="SKU"></Column>
        <Column field="name" header="Product name"></Column>
        <Column
          field="price"
          header="Price"
          mode="currency"
          locale="en-US"
          currency="USD"
        ></Column>
        <Column field="stock" header="Stock"></Column>
      </DataTable>
    </div>
    <div class="add-product-section">
      <h3>Add a product</h3>
      <div class="input-container">
        <InputText v-model="newProduct.name" placeholder="Nombre" />
        <InputText v-model="newProduct.sku" placeholder="SKU" />
        <InputText
          type="number"
          v-model.number="newProduct.price"
          placeholder="Precio ($)"
        />
        <InputText
          type="number"
          v-model.number="newProduct.stock"
          placeholder="Stock"
        />
      </div>
      <div class="btn-container">
        <Button
          label="Add product"
          @click="handleAddProduct"
          icon="pi pi-plus"
        />
      </div>
    </div>
  </div>
</template>

<style>
.dashboard-title {
  margin-top: 1rem;
  font-weight: bold;
}
h1,
h3 {
  color: hsla(160, 100%, 37%, 1);
}
.add-product-section {
  padding: 1rem;
  box-shadow: 1px 1px 10px 1px lightgrey;
  border-radius: 8px;
  margin: 2rem 0 1rem;
}
.input-container {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}
.btn-container {
  display: flex;
  justify-content: end;
  margin-top: 1rem;
}
.subtitle-section {
  display: flex;
  justify-content: space-between;
}
@media (min-width: 800px) {
  .input-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1rem;
  }
}
</style>
