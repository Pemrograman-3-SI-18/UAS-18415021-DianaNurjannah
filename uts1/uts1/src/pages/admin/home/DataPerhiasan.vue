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
          <q-btn color="teal" :disable="loading" label="Tambah Data Perhiasan" to="/inputdataperhiasan" />
<!--          <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="kodePerhiasan" :props="props">
              {{ props.row.kodePerhiasan }}
            </q-td>
            <q-td key="jenisPerhiasan" :props="props">{{ props.row.jenisPerhiasan }}</q-td>
            <q-td key="kadarPerhiasan" :props="props">{{ props.row.kadarPerhiasan }}</q-td>
            <q-td key="beratPerhiasan" :props="props">{{ props.row.beratPerhiasan }}</q-td>
            <q-td key="hargaPerhiasan" :props="props">{{ props.row.hargaPerhiasan }}</q-td>
            <q-td key="gambar" :props="props">
              <q-img :src="baseUrl + props.row.gambar" style="width: 50px; height: 50px"/>
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn color="teal"
                       dense size="sm"
                       class="q-px-xs"
                       icon="edit"
                       @click="edit(props.row.kodePerhiasan)"
                       label="Edit"></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapusDataPerhiasan(props.row._id)"
                  class="q-px-xs"
                  icon="delete"
                  label="Hapus"></q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: 'http://localhost:5050/gambar/',
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'kodePerhiasan',
          required: true,
          label: 'Kode Perhiasan',
          align: 'left',
          field: row => row.kodePerhiasan,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'jenisPerhiasan', align: 'center', label: 'Jenis Perhiasan', field: 'jenisPerhiasan', sortable: true },
        { name: 'kadarPerhiasan', label: 'Kadar Perhiasan', align: 'center', field: 'kadarPerhiasan', sortable: true },
        { name: 'beratPerhiasan', label: 'Berat Perhiasan', align: 'center', field: 'beratPerhiasan' },
        { name: 'hargaPerhiasan', label: 'Harga Perhiasan', align: 'center', field: 'hargaPerhiasan' },
        { name: 'gambar', label: 'gambar', align: 'center', field: 'gambar' },
        { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
      ],
      data: []
    }
  },

  methods: {
    // emulate fetching data from server
    getDataPerhiasan () {
      this.$axios.get('/perhiasan/dataperhiasan')
        .then((res) => {
          this.data = res.data.data
        })
    },
    hapusDataPerhiasan (id) {
      this.$axios.delete('/perhiasan/hapus/' + id)
        .then((res) => {
          this.$q.notify({
            color: 'positive',
            message: 'Berhasil Menghapus Data'
          })
          this.getDataPerhiasan()
        })
    },
    edit (kodePerhiasan) {
      this.$router.push('/editdataperhiasan/' + kodePerhiasan)
    }
  },
  mounted () {
    this.getDataPerhiasan()
  }
}
</script>
