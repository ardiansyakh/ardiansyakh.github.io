let bank = [
    {
        'Bank Name': 'Bank Central Asia (BCA)',
        'Nomor Rekening': 1234567890,
        KCP: 'KCP Fatmawati',
        image: 'https://1.bp.blogspot.com/-LOG22fyGGOo/WransnAeOlI/AAAAAAAABiA/RnFHp0YAHuIcmzMDZNnHFFz-M2sqUEPFQCKgBGAs/s1600/logo-bca.jpg'
    },
    {
        'Bank Name': 'Bank Rakyat Indonesia (BRI)',
        'Nomor Rekening': 087654321,
        KCP: 'KCP PGC',
        image: 'https://mmc.tirto.id/image/2016/05/11/LogoBRI_050_ratio-16x9.JPG'
    },
    {
        'Bank Name': 'Bank Negara Indonesia (BNI)',
        'Nomor Rekening': 104832131804,
        KCP: 'KCP Kokas',
        image: 'https://cdn.ayobandung.com/upload/bank_image/medium/polisi-periksa-12-saksi-kasus-pembobolan-bni.jpg'
    }
    
]

let column = document.getElementsByClassName('column')
let cards = document.getElementById('cards') 
let Card = document.getElementsByClassName('card') 
let isi = document.getElementsByClassName('container')
let info = []
console.log(Card[0])

for(let i in bank){
    let image = Card[0].children[0]
    let bankName =  isi[0].children[0]
    let norek = isi[0].children[1]
    let kcp = isi[0].children[2]
    image.setAttribute("src", bank[i].image)
    bankName.innerText = bank[i]['Bank Name']
    norek.innerText = bank[i]['Nomor Rekening']
    kcp.innerText = bank[i].KCP

    info.push(column[0].innerHTML)
}

let result=''
for (let i in info){
    result+=`<div class ="column">${info[i]}</div> \n`
    
}

cards.innerHTML = result