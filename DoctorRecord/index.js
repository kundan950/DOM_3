let myForm = document.querySelector("form");
let myName = document.getElementById("name");
let DocID = document.getElementById("docID");
let dept = document.getElementById("dept");
let exp = document.getElementById("exp");
let myEmail = document.getElementById("email");
let mbl = document.getElementById("mbl");
let tbody = document.querySelector("tbody");

let AllData = [];


function fetch() {
    tbody.innerHTML = null
    AllData.map((ele) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");

        td1.innerText = ele.Name;
        td2.innerText = ele.DoctorID;
        td3.innerText = ele.Department
        td4.innerText = ele.Exp
        td5.innerText = ele.Email
        td6.innerText = ele.Mobile
        if (ele.Exp >= 5) {
            td7.innerText = "Senior"
        } else if (ele.Exp >= 2 && ele.Exp < 5) {
            td7.innerText = "Junior"
        } else {
            td7.innerText = "Traniee"
        }  
        td8.innerText = 'Delete'
        td8.style.backgroundColor = 'red'
        td8.style.cursor = 'pointer'
        td8.addEventListener("click", () => {
            console.log(AllData)
            AllData = AllData.filter((data) => data.DoctorID !== ele.DoctorID)
            console.log(AllData)
            fetch()
        })

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        tbody.append(tr)
    })

}

myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let Data = {
        Name: myName.value,
        DoctorID: DocID.value,
        Department: dept.value,
        Exp: exp.value,
        Email: myEmail.value,
        Mobile: mbl.value
    }
    AllData.push(Data)
    console.log(AllData)
    tbody.innerHTML = "";

    fetch()

})
