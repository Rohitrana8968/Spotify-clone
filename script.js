async function details(){
    let val=await fetch("http://127.0.0.1:8080/mp3folder/");
    let  res=await val.text();
    console.log(res);
}
details();