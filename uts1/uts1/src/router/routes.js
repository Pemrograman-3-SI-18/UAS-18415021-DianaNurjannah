
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/admin/home/DataPerhiasan.vue') },
      { path: 'inputdataperhiasan', component: () => import('pages/admin/home/InputDataPerhiasan.vue') },
      { path: 'editdataperhiasan/:id', component: () => import('pages/admin/home/EditDataPerhiasan.vue') },
      { path: 'datatransaksi', component: () => import('pages/admin/Transaksi/DataTransaksi.vue') }
    ]
  },
  {
    path: '/pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/pembeli/DataPerhiasan/DataPerhiasan.vue') },
      { path: 'perak', component: () => import('pages/pembeli/DataPerhiasan/perak.vue') },
      { path: 'bross', component: () => import('pages/pembeli/DataPerhiasan/bross.vue') },
      { path: 'keranjang', component: () => import('pages/pembeli/transaksi/keranjang.vue') },
      { path: 'transaksi', component: () => import('pages/pembeli/transaksi/Datatransaksi') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'auth/Login', component: () => import('pages/users/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/users/Registrasi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
