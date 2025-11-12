<script setup>
import { ref, onMounted, computed } from "vue";
import { DataTable } from "primevue";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import ProductService from "@/services/product.service";
import PaymentService from "@/services/payment.service";
import Menubar from "@/components/Menubar.vue";
import Dialog from "primevue/dialog";
import ProductModal from "@/components/ProductModal.vue";
import OrderSummaryModal from "@/components/OrderSummaryModal.vue";
import OrderService from "@/services/order.service";

import { useToast } from "primevue/usetoast";
const toast = useToast();

// Data states
const products = ref([]);
const selectedProducts = ref([]);
const loading = ref(true);
const openOrderModal = ref(false);
const openAddModal = ref(false);
const openOrderSummaryModal = ref(false);

const userEmail = ref("");
const username = ref("");

const orderStatus = ref("");
const orderNumber = ref("");
const orderItems = ref([]);
const orderPayLink = ref("");
const orderTotal = ref(0);

const loadProducts = async () => {
  loading.value = true;
  try {
    products.value = await ProductService.getAllProducts();
    console.log(products.value);
  } catch (err) {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: "Error loading products. Try again!",
      life: 3000,
    });
  } finally {
    loading.value = false;
  }
};

// * Function when selectedProducts are added total sum of prices is updated
const totalAmount = computed(() => {
  return selectedProducts.value.reduce((sum, product) => {
    return sum + product.price;
  }, 0);
});

// * Function to set a currency format to price value
const formatCurrency = (value) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(value);
};

const handleOrder = async () => {
  const itemsToPay = selectedProducts.value.map((product) => ({
    name: product.name,
    price: product.price,
    quantity: 1,
  }));
  const data = {
    items: itemsToPay,
    email: userEmail.value,
    name: username.value,
  };

  try {
    const response = await OrderService.createOrder(data);
    if (response) {
      console.log(response);

      orderPayLink.value = response.pay_link;
      orderNumber.value = response.number;
      orderStatus.value = response.status;
      orderItems.value = response.items;
      orderTotal.value = response.totals.total;

      // const orderId = response.id;
      // const email = response.email;
      // const name = response.first_name;
      // const accountId = response.account_id;
      openOrderModal.value = false;
      openOrderSummaryModal.value = true;
    }
  } catch (err) {
    console.log("Error creating order", err);
    toast.add({
      severity: "error",
      summary: "Error",
      detail: "Error creating order. Check information",
      life: 3000,
    });
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
    <h1 class="pt-10">Products</h1>
    <div>
      <div class="flex justify-between mb-8">
        <h3>Available products</h3>
        <div class="flex gap-4">
          <Button icon="pi pi-plus" @click="openAddModal = true" />
          <Button
            icon="pi pi-shopping-cart"
            label="See Products"
            :disabled="selectedProducts.length === 0"
            @click="openOrderModal = true"
          />
        </div>
        <OrderSummaryModal
          v-model:isOpen="openOrderSummaryModal"
          :orderStatus="orderStatus"
          :orderItems="orderItems"
          :orderNumber="orderNumber"
          :orderPayLink="orderPayLink"
          :orderTotal="orderTotal"
        />
        <ProductModal
          v-model:isOpen="openAddModal"
          :updateProducts="loadProducts"
        />
        <Dialog v-model:visible="openOrderModal" modal header="Order Resume">
          <DataTable
            class="my-2"
            :value="selectedProducts"
            :rows="5"
            :rowHover="true"
            paginator
            tableStyle="min-width: 25rem"
          >
            <Column field="name" header="Product" />
            <Column field="price" header="Price">
              <template #body="slotProps">
                {{ formatCurrency(slotProps.data.price) }}
              </template>
            </Column>
          </DataTable>
          <div class="flex justify-end">
            <div class="text-red-600">
              Total : {{ formatCurrency(totalAmount) }}
            </div>
          </div>
          <div class="text-sm text-gray-600 text-center py-2">
            Insert required information to proceed to payment
          </div>
          <div class="flex gap-4 pt-2">
            <div class="flex flex-col">
              <label for="username">Name</label>
              <InputText
                v-model="username"
                id="username"
                placeholder="Jane"
                autocomplete="off"
              />
            </div>
            <div class="flex flex-col">
              <label for="email">Email</label>
              <InputText
                v-model="userEmail"
                id="email"
                placeholder="example@gmail.com"
                autocomplete="off"
              />
            </div>
          </div>
          <template #footer>
            <Button label="Create Order" @click="handleOrder" />
          </template>
        </Dialog>
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
        <Column field="price" header="Price">
          <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
          </template></Column
        >
        <Column field="stock" header="Stock"></Column>
      </DataTable>
    </div>
  </div>
</template>

<style>
h1,
h3 {
  color: hsla(160, 100%, 37%, 1);
}
</style>
