
function wsh(){
  let i = 1
  let result = 0
  while (i < 1000) {
    if (i % 3 ===0 || i%5===0) {
        result = result + i
        }
            i++
    }
  console.log(result)
}

wsh()
