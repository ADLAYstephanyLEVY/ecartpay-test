<script setup>
import { ref, onMounted } from "vue";
import Menubar from "../components/Menubar.vue";
import { DataTable } from "primevue";
import Column from "primevue/column";
import PaymentService from "@/services/payment.service";
import ActivityService from "@/services/activity.service";

const transactions = ref([]);
const loading = ref(true);
const activity = ref([]);

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

const getActivity = async () => {
  loading.value = true;
  try {
    const response = await ActivityService.getActivity();
    console.log("Response", response.data.docs);
    activity.value = response.data.docs;
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
};

// * Function to set a currency format to price value
const formatCurrency = (value) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(value);
};

onMounted(() => {
  getActivity();
});
</script>

<template>
  <Menubar />
  <div>
    <h1 class="pt-10">Transactions</h1>
    <div>
      <DataTable
        :value="activity"
        tableStyle="min-width: 50rem"
        :loading="loading"
        paginator
        :rows="10"
        :rowHover="true"
      >
        <Column field="customer.first_name" header="Client"></Column>
        <Column field="order.number" header="Order Number"></Column>
        <Column field="risk_level" header="Risk Level"></Column>
        <Column field="amount" header="Amount">
          <template #body="slotProps">
            {{ formatCurrency(slotProps.data.amount) }}
          </template>
        </Column>
        <Column field="payment_type" header="Payment Type"></Column>
        <Column field="status" header="Status"></Column>
        <Column field="created_at" header="Created"></Column>
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
