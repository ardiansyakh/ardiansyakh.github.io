let kegiatan = [
    {
        image:"https://asset.kompas.com/crops/PtpS9ARqvSaa_rQFISEQZkqR2Gs=/0x0:999x666/750x500/data/photo/2021/04/06/606bc910b4e68.jpg",
        title:"Banjir NTT",
        desc:"Perkembangan terakhir dari data yang kami dapatkan 124 jiwa yang meninggal, Rabu (7/4/2021)",
        link:"https://nasional.kompas.com/read/2021/04/07/21100501/kepala-bnpb-korban-jiwa-banjir-ntt-138-orang-61-masih-dicari",
        kode:"101",
        donasi:"./donasi.html"
    },
    {
        image:"https://asset.kompas.com/crops/wUM_g7aDymLfHeG1nE7jzaVcR6o=/0x0:0x0/750x500/data/photo/2021/01/15/60010dadd23d4.jpg",
        title:"Gempa Majene",
        desc:"Gempa bumi dengan magnitudo 6,2 mengguncang  wilayah Majene, Sulawesi Barat.  Kejadiaannya dini hari, Jum’at  15 Januari. Gempa ini mengakibatkan 105 orang meninggal. Gempa Morowali, Sulawesi tengah pada 4 Januari. Terakhir gempa bumi kembali terjadi di Halmahera Selatan. Gempa berkekuatan 5,2 SR.",
        link:"https://www.kompas.com/tren/read/2021/01/16/055900865/gempa-majene-berikut-deretan-bangunan-vital-yang-alami-kerusakan?page=all",
        kode:"102",
        donasi:"./donasi.html"
    },
    {
        image:"https://assets.pikiran-rakyat.com/crop/0x17:700x403/x/photo/2021/01/17/1896565768.png",
        title:"Erupsi Gunung Sinabung dan Semeru",
        desc:"Sabtu, 16 Januari Gunung Semeru menguar awan panas guguran sejauh  4,5 kilometer. Menyusul sehari berikutnya erupsi Gunung Sinabung pun menyemburkan debu setinggi hampir lebih kurang 500 meter. Hal ini dilaporkan BPBD Kabupaten Karo.",
        link:"https://www.liputan6.com/news/read/4462543/headline-gunung-merapi-semeru-sinabung-erupsi-bersamaan-fenomena-apa",
        kode:"103",
        donasi:"./donasi.html"
    }, 
]
let column = document.getElementsByClassName('column')
let cards = document.getElementById('cards') 
let Card = document.getElementsByClassName('card') 
let isi = document.getElementsByClassName('container')
let info = []

for(let i in kegiatan){
    let image = Card[0].children[0]
    let title =  isi[0].children[0]
    let kode = isi[0].children[1]
    let desc = isi[0].children[2]
    let link = isi[0].children[3]
    let donasi = isi[0].children[4]
    if(kegiatan[i].desc.length>100){
        desc.innerText = `${kegiatan[i].desc.substr(0, 101)}....`
    }else{
        desc.innerText = kegiatan[i].desc
    }
    
    image.setAttribute("src", kegiatan[i].image)
    title.innerText = kegiatan[i].title
    kode.innerText = `Kode Kegitan : ${kegiatan[i].kode}`
    
    link.setAttribute("href", kegiatan[i].link)
    donasi.setAttribute("href", `${kegiatan[i].donasi}#${kegiatan[i].kode}`)

    info.push(column[0].innerHTML)
}

let result=''
for (let i in info){
    result+=`<div class ="column">${info[i]}</div> \n`
    
}

cards.innerHTML = result