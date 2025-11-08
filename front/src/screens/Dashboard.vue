<script>
import { ref } from "vue";
import apiClient from "@/api/axios";
import { DataTable } from "primevue/datatable";
import { Column } from "primevue/column";

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
</script>

<template>
  <div>
    <h1>Products</h1>
    <div>
      <h2>Available products</h2>
      <DataTable
        :value="products"
        v-model:selection="selectedProducts"
        dataKey="sku"
        :loading="loading"
        stripedRows
        paginator
        :rows="10"
        :rowHover="true"
        class="p-datatable-sm"
      >
        <Column selectionMode="multiple" headerStyle="witth: 3rem"></Column>
        <Column field="name" header="Nombre" sortable></Column>
        <Column field="sku" header="SKU"></Column>
        <Column field="price" header="Precio">
          <template #body="slotProps">
            ${{ slotProps.data.price.toFixed(2) }}
          </template>
        </Column>
        <Column field="stock" header="Stock" sortable></Column>
        <Column field="description" header="Descripción"></Column>
        <template #empty> No se encontraron productos de joyería. </template>
        <template #loading>
          Cargando datos de inventario. Por favor espere...
        </template>
      </DataTable>
    </div>
  </div>
</template>

<style>
.dashboard-title {
  font-weight: bold;
}
</style>
