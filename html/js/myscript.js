
function validate() {
    var element = document.getElementById('input-field');
    element.value = element.value.replace(/[^a-zA-Z]+/, '');
};


function getDate(){
    var today = new Date();

document.getElementById("packingDate").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);


}



function Print_Pages() {
    var data;
    var Grammage_units = document.getElementById("Grammage_units");
    var size_unit = document.getElementById("size_unit");
    var Weight_units = document.getElementById("Weight_units");
    var recycle = document.getElementById("recycle");
    data = {

        product_Name: document.getElementById('product_Name').value,
        quality: document.getElementById('quality').value,
        gram: document.getElementById('gram').value,
        Grammage_units: Grammage_units.options[Grammage_units.selectedIndex].text,

        size: document.getElementById('size').value,
        size_unit: size_unit.options[size_unit.selectedIndex].text,
        grain: document.getElementById('grain').value,
        sheets: document.getElementById('sheets').value,

        weight: document.getElementById('weight').value,
        Weight_units: Weight_units.options[Weight_units.selectedIndex].text,

        rollno: document.getElementById('rollno').value,
        lotNo: document.getElementById('lotNo').value,
        recycle: recycle.options[recycle.selectedIndex].text,
        packingDate: document.getElementById('packingDate').value

    }

  
    var popupWin = window.open("");
    popupWin.document.write(`<html>
<head>   
<style>

body {
    overflow-y: hidden; /* Hide scrollbars */
    scrollbar-width: none;
  }

  tr,  td {  
    border: 3px solid black; 
    margin-top: 15px;
    margin-left: 15px;
    margin-bottom: 15px;
    margin-right: 15px;
    padding: 10px 10px 10px 10px;
  }

 

  table{
    margin-top: 10px;
    margin-left: 15px;   
    margin-right: 15px;
    margin-bottom: 1px;
  }

  h1,h2,h3,h5,h6{
    text-align: center;
    text-decoration:solid;

  }

  h4{
    text-align: left;
    text-decoration:solid;

  }
 

  

label {
  padding: 2px 2px 2px 0;
 
  text-decoration:solid;

}

span{
    position:relative;
    float: right;
    margin-left: 20px;
   
   
    text-decoration:solid;
    margin-right: 30px;
  }

  .split {
    height: 100%;
    width: 50%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding-top: 20px;
  }

 
  
.left {
  left: 0;
  width: 40vw;
  margin-top: 30px;
  
}



.right {
  right: 0;
  width: 60vw;
}

.centered {
    text-align: center;
   
  }


  </style>
</head>
<body>
<div class="split left">  
  <div class="centered">     
     <img src="images/sppl_Logo.png" width="300" height="145" style="margin-top: 0px;"><br><br>
    <h1>UNIT-2</h1><br><br>
    <h2> 7th Km. Moradabad Road,
    <br> Kashipur - 244713 (UTTARAKHAND)</h2>
    <h3 style="margin-top: 150px;"> EMAIL: <BR>sales.spl@sidharthpapers.com </h3>             
  </div>
</div>
<div class="split right">
 <div class="centered">
<table id="mytable" >
<tr >
    <td colspan="2">  
        
            <b><label id="Product">PRODUCT NAME</label><b>                                        
            <h4>${data.product_Name}</h4>
    </td>
</tr>
<tr>
    <td width="250px">
        <b><label for="fquality">QUALITY</label></b>                               
        <h3>${data.quality}</h3>
    </td>
    <td width="250px">
         <b><label for="gram">GRAMMAGE</label><span>${data.Grammage_units}</span></b>
        <h3>${data.gram}</h3>
    </td>
</tr>
<tr>
     <td width="250px">
        <b><label for="grain">GRAIN</label></b>
        <h3>${data.grain}</h3>
    </td>
    <td width="250px">
        <b><label for="size">SIZE </label><span>${data.size_unit}</span></b>
        <h3>${data.size}</h3>
    </td>
</tr>
<tr>
    <td width="250px">
        <b><label for="sheets">NO. OF SHEETS</label></b>
        <h3>${data.sheets}</h3>
    </td>
    <td width="250px">
        <b><label for="weight">NET weight</label><span>${data.Weight_units}</span></b>
            <h3>${data.weight}</h3>
    </td>
</tr>
<tr>
    <td width="250px">
        <b><label for="rollno">ROLL No.</label></b>
            <h3>${data.rollno}</h3>
    </td>
    <td width="250px">
        <b><label for="lotNo.">LOT No.</label></b>
        <h3>{${data.lotNo}}C=</h3>
    </td>
</tr>
<tr>
    <td width="250px">
        <b><label for="packingDate">DATE OF PACKING</label></b><br>
        <h3>${data.packingDate}</h3>
    </td>
    <td width="250px">
    <b><label for="Recyclable"><img id="image" src="images/RecycleIcon.jpg" width="22" height="22"> &nbsp; RECYCLABLE</label></b><br>
    <h3>${data.recycle}</h3>
    </td>
</tr>

</table> 
<b><h6 style="font-size:10px; text-align: right;  margin-right: 15px;">*NA=NOT APPLICABLE</h6></b> 
  </div>
</div>  
</body>
</html>
`);
    
    popupWin.print();
    popupWin.close();
    location.reload();


}
