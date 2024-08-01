function add()
{
    let nam=document.querySelector(".name-inp").value;
    let cost=document.querySelector(".cost-inp").value;
    let select=document.querySelector(".select-inp").value;
    let date=document.querySelector(".date-inp").value;

    if (nam!=="" && cost!=="" && select!=="" && date!=="")
    {
        let table=document.querySelector("table");
        let row=document.createElement("tr")
        let data1=document.createElement("td")
        let data2=document.createElement("td")
        data2.classList.add("cost")
        let data3=document.createElement("td")
        let data4=document.createElement("td")
        let data5=document.createElement("td")

        let del=document.createElement("button")
        del.innerText="Delete"
        del.onclick=function(){
            row.remove()
            changetotal()
        }
        del.classList.add("delete")
        data1.innerText=nam
        data2.innerText=cost
        data3.innerText=select
        data4.innerText=date
        data5.appendChild(del)
        row.appendChild(data1)
        row.appendChild(data2)
        row.appendChild(data3)
        row.appendChild(data4)
        row.appendChild(data5)
        table.appendChild(row)
        document.querySelector(".name-inp").value=""
        document.querySelector(".cost-inp").value=""
        document.querySelector(".select-inp").value=""
        document.querySelector(".date-inp").value=""
        changetotal()
    }
    else
    {
        alert("Fill all records!")
    }
}
function changetotal()
{
    let total=document.querySelectorAll(".cost");
    let change=0;
    for (let i=0;i<total.length;i++)
    {
        change+=parseInt(total[i].innerText)
    }
    let allcost=document.querySelector(".total");
    allcost.innerText='Total: '+change
}