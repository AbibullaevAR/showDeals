<script setup lang="ts">
import LeadsSearch from '@/components/LeadsSearch.vue';
import { Lead } from '@/types/lead';
import { onMounted, ref, watch } from 'vue';
import { getLeads } from '@/api/getLeads';

interface Column {
  title: string,
  dataIndex?: keyof Lead,
  key: keyof Lead,
  fixed?: boolean
}

type LeadRow = Lead & {
  key: number
}

const getLeadRows = (leads: Lead[]): LeadRow[] => {
  return leads.map(lead => {
    return {
      ...lead,
      key: lead.id
    }
  })
}

const leadsSearchModel = ref('');

const leadColumns: Column[] = [
  { title: 'Название', dataIndex: 'name', key: 'name', fixed: true },
  { title: 'Бюджет', dataIndex: 'price', key: 'price' },
  { title: 'Статус', key: 'status' },
  { title: 'Ответственный', key: 'responsibleUser' },
  { title: 'Дата создания', dataIndex: 'createDate', key: 'createDate' },
];
const leads = ref<Lead[]>([]);

onMounted(async () => {
  leads.value = await getLeads();
})

watch(leadsSearchModel, async () => {
  const shouldSearch = leadsSearchModel.value.length > 3 || leadsSearchModel.value.length === 0;

  if (shouldSearch) {
    leads.value = await getLeads(leadsSearchModel.value)
  }
})

</script>

<template>
  <main>
    <LeadsSearch v-model="leadsSearchModel"></LeadsSearch>
    <a-table :columns="leadColumns" :data-source="getLeadRows(leads)" :expand-column-width="100">
      <template #bodyCell="{ column, record }">
        <div v-if="column.key === 'status'" :style="{ backgroundColor: record.status.color }">
          {{ record.status.name }}
        </div>
        <div v-if="column.key === 'responsibleUser'">
          {{ record.responsibleUser.name }}
        </div>
      </template>
      <template #expandedRowRender="{ record }">
        <template v-if="record.contacts.length">
          <div v-for="contact in record.contacts" :key="contact.name" class="contact">
            <div>{{ contact.name }}</div>
            <div>{{ contact.email }}</div>
            <div>{{ contact.phone }}</div>
          </div>
        </template>
        <template v-else>
          <span>Нет контактов</span>
        </template>
      </template>
    </a-table>
  </main>
</template>

<style lang="scss">
.contact {
  display: flex;
  gap: 10px;
}
</style>