const perhiasan = require('../model/Perhiasan.js')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.inputDataPerhiasan = (data, gambar) =>
    new Promise(async (resolve, reject)=>{

      const perhiasanBaru = new perhiasan({
          kodePerhiasan : data.kodePerhiasan,
          jenisPerhiasan : data.jenisPerhiasan,
          kadarPerhiasan : data.kadarPerhiasan,
          beratPerhiasan : data.beratPerhiasan,
          hargaPerhiasan : data.hargaPerhiasan,
          gambar : gambar
      })
       await perhiasan.findOne({kodePerhiasan: data.kodePerhiasan})
            .then(perhiasan => {
                if (perhiasan){
                    reject(response.commonErrorMsg('kode Perhiasan sudah digunakan'))
                }else {
                    perhiasanBaru.save()
                    .then(r=>{
                      resolve(response.commonSuccessMsg('Berhasil Menginput Data Perhiasan'))
                     }).catch(er => {
                      reject(response.commonErrorMsg('Mohon Maaf Input Perhiasan Gagal'))
                      })
                }
            }).catch(err => {
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server'))
        })
    })

exports.lihatDataPerhiasan = () =>
    new Promise(async (resolve, reject) => {
       await perhiasan.find({})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(()=>reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server')))
    })

exports.lihatDetailDataPerhiasan = (kodePerhiasan) =>
    new Promise(async (resolve, reject) => {
        await perhiasan.findOne({kodePerhiasan: kodePerhiasan})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(()=>reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server')))
    })

exports.updatePerhiasan = (id, data, gambar) =>
    new Promise(async (resolve, reject)=>{
       await perhiasan.updateOne(
            {_id : ObjectId(id)},
            {
                $set: {
                    kodePerhiasan : data.kodePerhiasan,
                    jenisPerhiasan : data.jenisPerhiasan,
                    kadarPerhiasan : data.kadarPerhiasan,
                    beratPerhiasan : data.beratPerhiasan,
                    hargaPerhiasan : data.hargaPerhiasan,
                    gambar : gambar
                }
            }
        ).then(perhiasan => {
            resolve(response.commonSuccessMsg('Berhasil Mengubah Data Perhiasan'))
        }).catch(err => {
            reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server'))
        })
    })

exports.hapusperhiasan = (_id) =>
    new Promise(async (resolve, reject)=>{
        await perhiasan.remove({_id: ObjectId(_id)})
            .then(() =>{
                 resolve(response.commonSuccessMsg('Berhasil Hapus Data Perhiasan'))
            }).catch(() => {
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server'))
            })
    })