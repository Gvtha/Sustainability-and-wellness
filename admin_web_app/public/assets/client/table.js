


let data=[]
getData()
var myVar = setInterval(getData, 30000);
async function getData() {
    await fetch('/api/record/latest/allrecord')
    .then(a=>a.json())
    .then(d=>{data=d.data;loadTable()})
}
async function loadTable() {
    document.getElementById('MyTable').innerHTML=""
    await new Promise(resolve => setTimeout(resolve, 100));
    console.log(data);
    var table=``
    
    var tableRow=` <thead>
    <tr style="color: rgb(79,79,79);">
        <th>Id</th>
        <th>Name</th>
        <th>Date</th>
        <th>Body Temperature</th>
        <th>Blood Pressure</th>
        <th>Respiratory Rate</th>
        <th>Glucose level</th>
        <th>Oxygen saturation</th>
        <th>Heart rate</th>
        <th>Cholestrol level</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody>`
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element);
        
            tableRow=tableRow+`<tr>
            <td>${element.emailId}</td>
            <td>${element.firstName}</td>
            <td>${element.createdAt}</td>
            <td>${element.recordData[0].Bt}</td>
            <td>${element.recordData[0].Bp}</td>
            <td>${element.recordData[0].Rp}</td>
            <td>${element.recordData[0].Gs}</td>
            <td>${element.recordData[0].Os}</td>
            <td>${element.recordData[0].Hr}</td>
            <td>${element.recordData[0].Cl}</td>
            <td><a href="/profile/${element._id}"><button class="btn btn-primary" type="button" style="padding: 5px;font-size: 12px;padding-right: 12px;padding-left: 12px;">View</button></a></td>
        </tr>`
        
    }
    table=table+tableRow+`</tbody>`
    document.getElementById('MyTable').innerHTML=table
    $('#MyTable').DataTable();   
}

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
console.log(data)

function downloadreport()
{
    const worksheet = XLSX.utils.json_to_sheet(data);
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

