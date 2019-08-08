function copy(src) {
  let dest2 = src.toString();
  //console.log("the length is ::: ", dest2.length);
  let dest = [];
  for (let i = 0; i < dest2.length; i++) {
    dest[i] = dest2[i];
  }
  return dest;
}

function array() {
  let i = 100;
  let num = 999;
  let arr = [];
  while (i <= num) {
    arr[i] = i;
    i++;
  }
  return arr;
}

function paliondrome(arr) {
  let i;
  i = 100;
  j = 100;
  var tyr = 0;
  var stock = [];
  var res = [];
  while (i <= 999) {
    j = i;
    while (j <= 999) {
      var bro = arr[j] * i;
      var bro_str = copy(bro);
      var yeavar;
      // var normal = [Number(bro_str[0]), Number(bro_str[1]), Number(bro_str[2])];
      // var rev_a = [Number(bro_str[3]), Number(bro_str[4]), Number(bro_str[5])];
      var normal = [bro_str[0], bro_str[1], bro_str[2]];
      var rev_a = [bro_str[3], bro_str[4], bro_str[5]];
      var rev = rev_a.reverse();
      //console.log(rev);
      //console.log("&&&&&&& === ", rev[0], " ", normal[0]);
      //console.log(bro);
      //console.log(normal, rev);
      //console.log(
      //  `------- j == ${j} : i == ${i} ----- ${arr[j] * i} --- ${bro_str}`
      //);
      if (
        Number(rev[0]) === Number(normal[0]) &&
        Number(rev[1]) === Number(normal[1]) &&
        Number(rev[2]) === Number(normal[2]) &&
        Number(normal[0]) >= 9 // &&
        // Number(normal[1] >= 8)
        // normal[1] === rev[1] &&
        // normal[2] === rev[2] //&&
        //normal[3] === rev[3]
      ) {
        yeah = bro_str;
        res.push(yeah);
        console.log(yeah);
        //console.log(bro);
        console.log("=======================================================");
      }
      j++;
    }
    i++;
  }
  console.log("this is sparta ", res.join("-"));
}
paliondrome(array());
