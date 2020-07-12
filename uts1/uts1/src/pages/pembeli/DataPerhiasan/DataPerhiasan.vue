<template>
<q-page>
  <div class="q-pa=md">
    <div class="row">
      <div class="col-md-4 col-xs-12 q-pa-md" v-for="(perhiasan, i) in data" :key="i">
        <q-card flat class="bg-white text-blue-grey-14">
          <q-card-section>
            <div class="text-h6">
              {{ perhiasan.jenisPerhiasan }}
            </div>
          </q-card-section>
          <q-card-section>
            <q-img spinnner-color="white" style="height: 100%; max-width: 100%" :src="baseUrl + perhiasan.gambar"/>
          </q-card-section>
          <q-card-section>
            <div>
              Harga : Rp. {{ perhiasan.hargaPerhiasan }}
            </div>
          </q-card-section>
          <q-card-section>
            <q-btn unelevated color="teal" icon="add_shopping_cart" no-caps label="Tambah Ke Keranjang"></q-btn>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</q-page>
</template>

<script>
export default {
  name: 'DataPerhiasan',
  data () {
    return {
      data: [],
      baseUrl: 'http://localhost:5050/gambar/'
    }
  },
  methods: {
    getDataPerhiasan () {
      this.$axios.get('/perhiasan/dataperhiasan')
        .then((res) => {
          this.data = res.data.data
        })
    }
  },
  mounted () {
    this.getDataPerhiasan()
  }
}
</script>

<style scoped>

</style>
