<script setup>
import { ref, onMounted } from "vue";
import apiClient from "@/api/axios";
import { DataTable } from "primevue";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import ProductService from "@/services/product.service";

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
    console.log("Error loading data");
  } finally {
    loading.value = false;
  }
};

const saveSelected = () => {
  if (selectedProducts.value.length === 0) {
    alert("no products");
    console.log("no products");
    return;
  }

  localSelection.value = JSON.stringify(selectedProducts.value, null, 2);
  toast.add({
    severity: "success",
    summary: "Saved",
    detail: "Selected items saved localy",
    life: 3000,
  });
};

const handleAddProduct = async () => {
  try {
    const created = await ProductService.createProduct(newProduct.value);
    products.value.push(created);
    newProduct.value = {}; // clean form
    toast.add({
      severity: "warn",
      summary: "Warning",
      detail: "No products selected",
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
  <div>
    <Toast />
    <h1 class="dashbboard-title">Products</h1>
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
        <Button label="Add product" @click="handleAddProduct" icon="pi pi-check" />
      </div>
    </div>
    <div>
      <h3>Available products</h3>
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
        <Column field="price" header="Price"></Column>
        <Column field="stock" header="Stock"></Column>
      </DataTable>
    </div>
  </div>
</template>

<style>
.dashboard-title {
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
  margin-bottom: 1rem;
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
@media (min-width: 800px) {
  .input-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1rem;
  }
}
</style>
