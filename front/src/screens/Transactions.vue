<script setup>
import { ref, onMounted } from "vue";
import Menubar from "../components/Menubar.vue";
import { DataTable } from "primevue";
import Column from "primevue/column";
import PaymentService from "@/services/payment.service";

const transactions = ref([]);
const loading = ref(true);

const loadSummary = async () => {
  loading.value = true;
  try {
    const response = await PaymentService.getTransactionsSummary();

    console.log("Transactions response", response);
  } catch (err) {
    console.log("Error fecthcing data", err);
  } finally {
    loading.value = false;
  }
};

const getAllTransactions = async () => {
  loading.value = true;
  try {
    const response = await PaymentService.getAllTransactions();
    transactions.value = response.docs;
    console.log("Response all transactions", response.docs);
  } catch (err) {
    console.log("Error fetching data", err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadSummary();
  getAllTransactions();
});
</script>

<template>
  <Menubar />
  <div>
    <h1 class="dashboard-title">Transactions</h1>
    <div>
      <h3>Summary</h3>
      <DataTable
        :value="transactions"
        tableStyle="min-width: 50rem"
        :loading="loading"
        dataKey="_id"
        paginator
        :rows="10"
        :rowHover="true"
      >
        <Column field="total" header="Total"></Column>
        <Column field="available" header="Available"></Column>
        <Column field="currency" header="Currency"></Column>
        <Column field="balances" header="Balances"></Column>
        <Column field="currency" header="Currency"></Column>
        <Column field="balances" header="Balances"></Column>
      </DataTable>
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
</style>
