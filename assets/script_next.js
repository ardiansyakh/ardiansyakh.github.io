let kodeUnik = Math.round(100+(Math.random()*400))
let kegiatan = ['Banjir NTT;1000000;0;2021-04-30','Longsor;1000000;0;2021-04-30']
let donatur = ['Banjir NTT;Romanova;100000;BCA','Banjir NTT;Don;20000;BCA']

function splitToArr(arr) {
    output = []
    for(let i in arr){
      tempStr = ''
      tempArr = []
      for(let a=0; a<arr[i].length; a++){
        if(arr[i][a]!==';'){
          tempStr += arr[i][a]
        }
        if(arr[i][a]===';'|| a===(arr[i].length)-1){
          tempArr.push(tempStr)
          tempStr = ''
        }
      }
      output.push(tempArr)
    }
    return output
}

function danaKumpul(dana, kegiatan){
    let output={}
    let dataKegiatan = splitToArr(kegiatan)
    let dataDonatur = splitToArr(dana)
    for(let i in dataDonatur){
        for (let a in dataKegiatan){
            donaturKegiatan = dataDonatur[i][0]
            danaDonatur = Number(dataDonatur[i][2])
            kegiatan = dataKegiatan[a][0]
            if(donaturKegiatan===kegiatan){
                if(!output[kegiatan]){
                    output[kegiatan]= 0
                }
                output[kegiatan]+=danaDonatur
            }
        }
        
    }
    return(output)
}

function display(dana, kegiatan) {
    let result = []
    let dataKegiatan = splitToArr(kegiatan)
    let danaDonatur = danaKumpul(dana, kegiatan)
    for(let i in dataKegiatan){
      let bencana = dataKegiatan[i][0]
      let danaDibutuhkan = Number(dataKegiatan[i][1])
      let danaTerkumpul = danaDonatur[bencana]
      let targetDate= dataKegiatan[i][3]
      if(!danaTerkumpul){
          danaTerkumpul = Number(dataKegiatan[i][2])
      }
      let persentase = `${(danaTerkumpul/danaDibutuhkan)*100}%`

      result.push({
        'Kegiatan Donasi': bencana,
        'Dana Dibutuhkan': danaDibutuhkan,
        'Dana Terkumpul': danaTerkumpul,
        'Persen Dana Terkumpul' : persentase,
        'Target Date': targetDate
      })
    }
    return result
}

let hasil = display(donatur, kegiatan)
console.log(hasil)