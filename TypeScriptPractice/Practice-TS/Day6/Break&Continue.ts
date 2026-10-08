// break

for(let i=0; i<=10; i++)
{
    // console.log(i) // 5
    if(i == 5)
    {
        break
    }
    console.log(i) // 4
    
}


console.log("##########$$$$##########")


// continue

for(let i=0; i<=10; i++)
{
    if(i == 5)
    {
        continue
    }
    console.log(i) // 0 1 2 3 4 6 7 8 9 10 // here its skiped 5
    
}

console.log("##########@@@@@@@##########")
for(let i=0; i<=10; i++)
{
    if(i == 5 || i == 6 || i == 7)
    {
        continue
    }
 console.log(i) // 0 1 2 3 4 8 9 10
    
}









