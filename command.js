const express=require("express");
const fetch= require("node-fetch");
const fs= require("fs")
const bodyParser= require("body-parser");
const { url } = require("inspector");
const app= new express()
app.use(bodyParser.json())
//accreditamento
/*
let url = new URL("http://localhost:8080/signup?")
url.searchParams.append("team","dudo")
url.searchParams.append("password", 1234)
console.log(url)
fetch(url)*/
//richiesta dimensioni campo
fetch("http://localhost:8080/?format=json",{
    method: "get",
    headers:{"x-data":"true"} 
})
.then(res=>res.json())
.then(data=>{
    const a =data.field;
    const y=a.length;
    const x= a[0].length;
    console.log(x)
    console.log(y)
    console.log("le caselle sono", x*y)

    
    let url2=new URL("http://localhost:8080/fire?team=dudo&password=1234")//sparare
    for(h=0;h<y;h++ ){
        for(w=0;w<x;w++){
            url2.searchParams.append("x",w)
            url2.searchParams.append("y",h)
            fetch(url2)}

}})

