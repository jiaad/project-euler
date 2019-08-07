function copy(src)
{
   let dest2 =  src.toString()
  console.log("the length is ::: ", dest2.length);
  let dest = []
  for(let i = 0; i < dest2.length; i++)
  {
     dest[i] = dest2[i];
  }
  return (dest);
}

function array()
{
    let i = 1;
    let num = 99;
    let arr = [];
    while(i <= num)
    {
        arr[i] = i;
        i++;
    }
return (arr);
}

function paliondrome(arr)
{
    let i;
    i = 0;
    j = 0;
    let tyr = 0;
    let stock = [];
    while (i <= 99)
    {
        j = i
        while (j <= 99)
        {
                let bro = arr[j] * i
                let bro_str = copy(bro);
                let yeah = []
                console.log(`------- j == ${j} : i == ${i} ----- ${arr[j] * i} --- ${bro_str}`);
                let normal = [bro_str[0], bro_str[1]]
                console.log(normal)
                let rev_a = [bro_str[2], bro_str[3]]
                let rev = rev_a.reverse();
               console.log(rev)
                console.log("&&&&&&& === ", rev[0]," ", normal[0]);
                if (rev[0] == normal[0] && normal[1] == rev[1])
                {
                    console.log("=======================================================")
                }
            j++;
        }
        i++;
    }
    console.log("this is sparta ", stock);
}
paliondrome(array());
