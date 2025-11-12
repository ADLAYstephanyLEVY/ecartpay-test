<script setup>
import ProductService from "@/services/product.service";
import { Dialog, InputText, Button } from "primevue";
import { ref } from "vue";

const isOpen = defineModel("isOpen", {
  type: Boolean,
  default: false,
});

const newProduct = ref({
  name: "",
  sku: "",
  price: 0,
  stock: 0,
});

const props = defineProps({
  updateProducts: Function,
});

const handleAddProduct = async () => {
  try {
    const created = await ProductService.createProduct(newProduct.value);
    if (created) {
      props.updateProducts();
      newProduct.value = {};
      isOpen.value = false;
      console.log("added succesfully");
    }
  } catch (err) {
    console.log("Error creating product", err);
  }
};
</script>

<template>
  <Dialog
    header="New Product"
    v-model:visible="isOpen"
    modal
    :style="{ width: '25rem' }"
  >
    <div class="flex flex-col gap-2">
      <div class="text-center text-sm text-gray-600 py-2">
        Try adding a new product to the list
      </div>
      <div>
        <label for="username">Product name:</label>
        <InputText v-model="newProduct.name" placeholder="Nombre" fluid />
      </div>
      <div>
        <label for="sku">SKU:</label>
        <InputText v-model="newProduct.sku" placeholder="SKU" fluid />
      </div>
      <div>
        <label for="price">Price:</label>
        <InputText
          type="number"
          v-model.number="newProduct.price"
          placeholder="Precio ($)"
          fluid
        />
      </div>
      <div>
        <label for="stock">Stock:</label>
        <InputText
          type="number"
          v-model.number="newProduct.stock"
          placeholder="Stock"
          fluid
        />
      </div>
    </div>
    <template #footer>
      <Button label="Add Product" @click="handleAddProduct" />
    </template>
  </Dialog>
</template>
