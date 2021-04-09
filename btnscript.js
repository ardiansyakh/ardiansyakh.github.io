let donasi = prompt("Masukan Jumlah Donasi:", "0");
let url = window.location.href
let kegiatan = ''
let text = document.getElementById('jmlDonasi')

// GET KODE KEGIATAN
for (let i in url){
    if(url[i]==='#'){
        i++
        while(i<url.length){
            kegiatan+=url[i]
            i++
        }
    }
}

// CONVERT NOMINAL TO IDR

let nominal = (Number(kegiatan)+Number(donasi)).toString()

function toIDR(nominal){
    let sisa = nominal.length%3
    let depan = nominal.substr(0, sisa)
    let IDR = `Rp${depan}`
    let ribu = nominal.substr(sisa)
    let ribuan = []
    temp = ''
    for(let i in ribu){
        temp+= ribu[i]
        if(temp.length===3){
            ribuan.push(temp)
            temp=''
        }
    }
    
    for(let i in ribuan){
        IDR+=`.${ribuan[i]}`
    }
    return IDR
}

text.innerText=toIDR(nominal)