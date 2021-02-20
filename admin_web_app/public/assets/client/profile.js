

//console.log("hi");
let data={
    "EmpId" : "101",
    "Email" : "gv@gmail.com",
    "First_name" : "Jeevitha",
    "Last_name" : "R",
    "Gender" : "Female",
    "Age" : "20",
    "height":"160",
    "weight":"50",
    "BodyTemperature":"20%",
    "PulseRate" : "72%",
    "OxygenSaturation" : "50%",
    "GlucoseLevel" : "62%",
    "HealthRate" : "58%",
    "data":[
        {
            "date":"11/01/2021",
            "BT":"32",
            "PR":"45",
            "RR":"120",
            "GL":"100",
            "OS":"35"
        }]
}

let userID=window.location.pathname.split('/')[2]
getData()
async function getData() {
    await fetch('/api/record/'+userID)
    .then(a=>a.json())
    .then(d=>{
        console.log(d);
        let dbData=d.data
        data.Email=dbData.emailId
        data.First_name=dbData.firstName
        data.Last_name=dbData.lastName
        data.Gender=dbData.gender
        data.Age=dbData.age
        data.EmpId=dbData.id
        data.data=dbData.recordData
        data.height=dbData.height,
        data.weight=dbData.weight
        controller()
    })
}

function controller() {
    document.getElementById('names').innerText= data.First_name + " " + data.Last_name 
    document.getElementById('empid').value=data.EmpId
    document.getElementById('email').value=data.Email
    document.getElementById('fname').value=data.First_name
    document.getElementById('lname').value=data.Last_name
    document.getElementById('gender').value=data.Gender
    document.getElementById('age').value=data.Age
    document.getElementById('height').value=data.height
    document.getElementById('weight').value=data.weight

    var table=`<table class="table table-hover dataTable my-0" id="MyTable">`
        
    var tableRow=` <thead>
    <tr style="color: rgb(79,79,79);">
        <th>Date</th>
        <th>Boady Temperature</th>
        <th>Blood Pressure</th>
        <th>Respiratory Rate</th>
        <th>Glucose level</th>
        <th>Oxygen saturation</th>
        <th>Heart Rate</th>
        <th>Cholestrol Level</th>
    </tr>
    </thead>
    <tbody>`
    for (let i = 0; i < data.data.length; i++) {
        const element = data.data[i];
        console.log(element);
        
            tableRow=tableRow+`<tr>
            <td>${element.Date}</td>
            <td>${element.Bt}</td>
            <td>${element.Bp}</td>
            <td>${element.Rp}</td>
            <td>${element.Gs}</td>
            <td>${element.Os}</td>
            <td>${element.Hr}</td>
            <td>${element.Cl}</td>
        </tr>`
        
    }
    table=table+tableRow+`</tbody>
    </table>`
    document.getElementById('dataTable').innerHTML=table
    $('#MyTable').DataTable(); 
    averageData()
}

async function averageData() {
    await fetch('/api/record/averageRecord/'+data.Email)
    .then(a=>a.json())
    .then(d=>{
        console.log(d);
        document.getElementById('temp').innerText=d.data.avgBt
        document.getElementById('pulse').innerText=d.data.avgBp
        document.getElementById('oxysat').innerText=d.data.avgOs
        document.getElementById('glu').innerText=d.data.avgGs
        document.getElementById('health').innerText=d.data.avgHr
        document.getElementById('cholestral').innerText=d.data.avgCl
        document.getElementById('bp').innerText=d.data.avgRp
    })
    document.getElementById('lodingGif').style.display="none";
    document.getElementById('contentDiv').style.display="block";
}


//document.getElementById("data").innerHTML = data.stringify(data.data, undefined, 4);
//document.getElementById("data").innerHTML = data.stringify(data.data, undefined, 4);

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


function downloadAsExcel()
{
    const worksheet = XLSX.utils.data_to_sheet(data.data);
    const workbook={
        Sheets: {
            'data' : worksheet
        },
        SheetNames : ['data']
    };
    const excelBuffer = XLSX.write(workbook, { bookType : 'xlsx' , type: 'array'});
    console.log(excelBuffer)
    saveAsExcel(excelBuffer, 'myFile');
}

function saveAsExcel(buffer,filename)
{
    const data = new Blob([buffer], {type : EXCEL_TYPE});
    saveAs(data,filename+'_export_'+new Date().getTime().EXCEL_EXTENSION)
}
