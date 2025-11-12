<script setup>
import { Dialog, DataTable, Column } from "primevue";

const isOpen = defineModel("isOpen", {
  type: Boolean,
  default: false,
});

const props = defineProps({
  orderStatus: String,
  orderNumber: String,
  orderItems: Array,
  orderPayLink: String,
  orderTotal: Number,
});

// * Function to set a currency format to price value
const formatCurrency = (value) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(value);
};
</script>

<template>
  <Dialog
    header="Order Summary"
    v-model:visible="isOpen"
    modal
    :style="{ width: '35rem' }"
  >
    <div class="flex justify-between">
      <div>Status: {{ props.orderStatus }}</div>
      <div class="text-[#00A666]">#{{ props.orderNumber }}</div>
    </div>
    <DataTable :value="props.orderItems">
      <Column field="name" header="Product" />
      <Column field="price" header="Price">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template></Column
      >
      <Column field="quantity" header="Quantity" />
    </DataTable>
    <div class="flex justify-end">
      <div class="text-[#00A666]">
        Total {{ formatCurrency(props.orderTotal) }}
      </div>
    </div>
    <div class="text-center py-2">
      Now you can acces to the pay link bellow to proceed with payment
    </div>
    <div class="text-center">
      <a v-if="props.orderPayLink" :href="props.orderPayLink" target="_blank">
        Pay now
      </a>
    </div>
  </Dialog>
</template>
