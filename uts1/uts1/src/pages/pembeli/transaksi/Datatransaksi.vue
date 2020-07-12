<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-btn color="teal" :disable="loading" label="Data Transaksi" />
          <!--                    <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.kodetransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namapembeli', align: 'center', label: 'Nama Pembeli', field: 'namapembeli', sortable: true },
        { name: 'jenisperhiasan', align: 'center', label: 'Jenis Perhiasan', field: 'jenisperhiasan', sortable: true },
        { name: 'kadarperhiasan', label: 'Kadar Perhiasan', align: 'center', field: 'kadarperhiasan', sortable: true },
        { name: 'beratperhiasan', label: 'Berat Perhiasan', align: 'center', field: 'beratperhiasan' },
        { name: 'hargaperhiasan', label: 'Harga Perhiasan', align: 'center', field: 'hargaperhiasan' },
        { name: 'jumlahbeli', label: 'Jumlah Beli', align: 'center', field: 'jumlahbeli' },
        { name: 'total', label: 'Total', align: 'center', field: 'total' }
      ],
      data: [
        {
          kodetransaksi: 'Transn-001',
          namapembeli: 'Veronica vederica',
          jenisperhiasan: 'Kalung',
          kadarperhiasan: '24Karat',
          beratperhiasan: '20Gram',
          hargaperhiasan: 'Rp.180000000',
          jumlahbeli: '1',
          total: 'Rp.180000000'
        },
        {
          kodetransaksi: 'Transn-002',
          namapembeli: 'Veronica vederica',
          jenisperhiasan: 'Cincin',
          kadarperhiasan: '24Karat',
          beratperhiasan: '5Gram',
          hargaperhiasan: 'Rp.45000000',
          jumlahbeli: '2',
          total: 'Rp.900000000'
        },
        {
          kodetransaksi: 'Transn-003',
          namapembeli: 'Veronica vederica',
          jenisperhiasan: 'Gelang',
          kadarperhiasan: '24Karat',
          beratperhiasan: '10Gram',
          hargaperhiasan: 'Rp.90000000',
          jumlahbeli: '1',
          total: 'Rp.900000000'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
