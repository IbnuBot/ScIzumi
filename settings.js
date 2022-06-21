
  const fs = require('fs')
  const chalk = require('chalk')

  // Free Apikey
  global.APIs = {
  riy: 'https://api-riy.herokuapp.com',
  }

  global.APIKeys = {
  'https://api-riy.herokuapp.com': 'RiyGanz',
  }

  // Edit Sesuai Kemauanmu
  global.autoReadGc = true // Ubah Ke false Jika Chat Di Grup Tidak Ingin Di Baca Oleh Bot
  global.autoReadAll = true // Ubah Ke true Jika Ingin Seluruh Chat Di Baca Oleh Bot
  global.anticall = true // Ubah Ke false Jika Tidak Ingin Bot Blockir Yang Telepon
  global.available = false // Ubah Ke false Jika Bot Mu Tidak Ingin Terlihat Online
  global.autoTyping = false // Ubah Ke true Jika Ingin Saat Ada Yang Chat Bot Auto Mengetik
  global.autoRecord = false // Ubah Ke false Jika Tidak Ingin Saat Ada Yang Chat Bot Auto Merekam
  global.multiplier = 69 // Semakin Besar Angkanya Semakin Sulit Untuk Naik Level
  global.limitCount = 50 // 50 Dah Pas Banh
  global.prefa = ['','.','/','#']

  // Other
  global.ownername = 'YuutaGanz' // Ganti Jadi Namamu
  global.owner = ['62895338690940','6285158621566','6285657452524'] // Kalo Mau Lebih Tambahin Aja
  global.ownernomer = '62895338690940' // Owner Utama Istilahnya
  global.botname = 'YuutaBotz' // Ganti Jadi Nama Botmu
  global.packname = 'Yuuta Multi Device' // Sticker Weem
  global.author = 'YuutaGanz Owner:0895338690940' // Sticker Weem
  global.webme = 'https://heylink.me/IbnuBot' // Ganti Sama Web Mu
  global.linkgroup = 'https://chat.whatsapp.com/J0NyYtOLKI192yncfFG26a' // Ganti Sama Link Gc Mu
  global.sessionName = 'session'
  global.youtube = 'https://youtube.com/channel/Ibnu Official' // Ganti Sama Link Yt Mu
  global.github = 'https://github.com/IbnuBot' // Ganti Sama Link Github Mu
  global.instagram = 'https://instagram.com/ibnuopbrrww' // Ganti Sama Link Ig mu

  // Background Setiap Menu
  global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

  // Tips Menu
  global.tips1 = 'Gunakan Jeda 3 Detik Agar Bot Tidak Mati Akibat Spam 🚀'
  global.tips2 = 'Jika Kamu Ingin Bermain RPG Hubungi Admin Untuk Mengaktifkan Fitur RPG ⚔️'
  global.tips3 = 'Jika Kamu Ingin Request/Repport Fitur, Cukup Ketik *.repport Laporannya* 👮'
  global.tips4 = 'Jika Kamu Sedang Gabut, Kamu Bisa Memainkan Fitur Game Yang Tersedia 🕹️'
  global.tips5 = 'Jika Kamu Ingin Mendownload Video Youtube, Cukup Ketik *.ytmp4 <link>* 📥'

  // Edit Sesuai Kemauan Mu
  global.rpg = {
  limitEnd: 'Limit Anda Habis\n\n📝 Note : Limit Akan Di Reset Setiap Jam 21:00',
  }

  // Edit Sesuai Kemauanmu
  global.mess = {
  admin: '_Lu Admin? 🤨_',
  botAdmin: '_Bot Bukan Admin 😔_',
  owner: '_Lu Bukan Owner Gw 😠_',
  group: '_Khusus Group 😏_',
  private: '_Khusus Private Chat_',
  bot: '_Khusus Pengguna Nomer Bot_',
  wait: '*_Tunggu Permintaanmu Sedang Diproses_*',
  done: '*_Done Kack✅_*',
  }

  // Kalo Mau Menyesuaikan Nama File Foto Nya
  global.thumb = fs.readFileSync('./media/logo.jpg')
    
  // Ini Gausah Diubah
  let file = require.resolve(__filename)
  fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update'${__filename}'`))
  delete require.cache[file]
  require(file)
  })
