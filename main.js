var productarray = [];
function myFunction() {
    var Company = document.getElementById("company").value;
    var Model = document.getElementById("model").value;
    var Memory = document.getElementById("memory").value;
    var Price = document.getElementById("price").value;
    var Quantity = document.getElementById("quantity").value;
    console.log(Quantity)

    if (Company == "" || Model == "" || Memory == "" || Price == "") {
        alert("Please fill all the feilds");
    }

    var product = {
        "CompanyName" : `${Company}`,
        "model" : `${Model}` ,
        "memory": `${Memory}` ,
        "price": `${Price}`,
        "quantity": `${Quantity}`,
        // CompanyName: Company,
        // model: Model,
        // memory: Memory,
        // price: Price,
        // quantity: Quantity,
    };
    productarray.push(product);
    Display();
    var options = "<option>-Select Field-</option>"
    productarray.forEach((element,index) => {
        options += `<option value="${index}"> ${element.CompanyName} ${element.model}</option>` 
    });document.getElementById("Product").innerHTML = options;
    document.getElementById("Items").innerHTML = options;
    document.getElementById("rating").innerHTML = options;
    };
function Display() {
    html =
        "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th><th>Quantity</th></tr>";
        var Table_footer = `<tr><th></th><th></th><th></th><th></th><th></th><th></th>
                             <th><button id = "Selected" onclick="deleted()">Delete</button></th>
                             </tr></table>`
    productarray.forEach((element ,index) => {
        html +=
        `  <tr>
                <td>${element.CompanyName}</td>
                <td>${element.model}</td>
                <td>${element.memory}</td>
                <td>${element.price}</td>
                <td>${element.quantity}</td>
                <td><input type="checkbox" class="BOX" name="feild" value="${index}"></td> 
            </tr>`
            // "<tr><td>" +
            // element.CompanyName +
            // "</td><td>" +
            // element.model +
            // "</td><td>" +
            // element.memory +
            // "</td><td>" +
            // element.price +
            // "</td><td>" +
            // element.quantity +
            // "</td></tr>";
    });
    // html += "</table>";
    document.getElementById("demo").innerHTML = html + Table_footer;
};
// console.log(html);
function sort() {
    var Asc_Des = document.getElementById('Arrange').value;
    var Col_Select = document.getElementById("Col").value;
    // console.log(Asc_Des);
    // console.log(Col_Select);
    if (Col_Select == "company") {
        if (Asc_Des == "ascending") {
            productarray.sort((a, b) => {
                // console.log("Inside Ascen Comp");
                if (a.CompanyName < b.CompanyName) {
                    return -1;
                }
                if (a.CompanyName > b.CompanyName) {
                    return 1;
                }
                return 0;
            });
        }
        else if (Asc_Des == "descending") {
            productarray.sort((a, b) => {
                // let AA = a.CompanyName;
                // let BB = b.company;

                if (a.CompanyName > b.CompanyName) {
                    return -1;
                }
                if (a.CompanyName < b.CompanyName) {
                    return 1;
                }
                return 0;
            });
        }
        else {
        }
        console.log(productarray);
    }

    else if (Col_Select == "model") {
        if (Asc_Des == "ascending") {
            productarray.sort((a, b) => {
                // let AA = a.model;
                // let BB = b.model;

                if (a.model < b.model) {
                    return -1;
                }
                if (a.model > b.model) {
                    return 1;
                }
                return 0;
            });

        } else if (Asc_Des == "descending") {
            productarray.sort((a, b) => {
                // let AA = a.model;
                // let BB = b.model;

                if (a.model > b.model) {
                    return -1;
                }
                if (a.model < b.model) {
                    return 1;
                }
                return 0;
            });
        }
        else {
        }

    }
    else if (Col_Select == "memory") {
        if (Asc_Des == "ascending") {
            productarray.sort((a, b) => a.memory - b.memory);
        }
        else if (Asc_Des == "descending") {
            productarray.sort((a, b) => b.memory - a.memory);
        } else {

        }

    }
    else if (Col_Select == "price") {
        if (Asc_Des == "ascending") {
            productarray.sort((a, b) => a.price - b.price);
        }
        else if (Asc_Des == "descending") {
            productarray.sort((a, b) => b.price - a.price);
        }
        else {

        }
    }
    else {

    } Display();
};




function deleted(){
        let ForCheck = document.querySelectorAll('input[name="feild"]:checked');
        let Selected = [];
        ForCheck.forEach((checkbox) => {
            Selected.push(checkbox.value);
        });
        // alert(values);
        Selected.forEach(element => {
            productarray.splice(element,1)
        });
        Display();
}



function search() {
    var SelectedField = document.getElementById("field").value;
    var FieldType = document.getElementById("fieldtype").value;
    // console.log(SelectedField);
    // console.log(FieldType);
    html = 
        "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th><th>Quantity</th></tr>";
    productarray.forEach(element => {
        // console.log(element.CompanyName);
        if (element.CompanyName == FieldType) {
            html +=
                "<tr><td>" +
                element.CompanyName +
                "</td><td>" +
                element.model +
                "</td><td>" +
                element.memory +
                "</td><td>" +
                element.price +
                "</td></tr>";
        }
        if (element.model == FieldType) {
            html +=
                "<tr><td>" +
                element.CompanyName +
                "</td><td>" +
                element.model +
                "</td><td>" +
                element.memory +
                "</td><td>" +
                element.price +
                "</td></tr>";
        }
        if (element.memory == FieldType) {
            html +=
                "<tr><td>" +
                element.CompanyName +
                "</td><td>" +
                element.model +
                "</td><td>" +
                element.memory +
                "</td><td>" +
                element.price +
                "</td></tr>";
        }
        if (element.price == FieldType) {
            html +=
                "<tr><td>" +
                element.CompanyName +
                "</td><td>" +
                element.model +
                "</td><td>" +
                element.memory +
                "</td><td>" +
                element.price +
                "</td></tr>";
        }
    });
    html += "</table>";
    document.getElementById("demo").innerHTML = html;
}

var Holder = [];
var totalcost = 0;
function addtocart() {
    var index = document.getElementById("Product").value;
    var B = document.getElementById("quan").value;
    var data = productarray[index];
    console.log(data.CompanyName)
    // console.log(A);
    // console.log(B);
    // console.log(typeof(data));
    var calculatedData = Number(data.price)*B;
    // console.log(typeof(calculatedData));

    var data1 = {
        "ProductDetail" : `${data.CompanyName} ${data.model}`,
        "Quantity" : `${B}` ,
        "Price": `${data.price}`,

        // ProductDetail: data.CompanyName,
        // Quantity: B,
        // Price: data,
    };
    totalcost += calculatedData;
    Holder.push(data1);
    console.log(Holder);
};
// var Product_Bill = "<table><tr><th>ProductDetail</th><th>Quantity</th><th>Price</th></tr>";
var Product_Bill = `<table>
<tr>
    <th>ProductDetail</th>
    <th>Quantity</th>
    <th>Price</th>
</tr>`;
function generatebill() {
    var row = ""
    Holder.forEach(element => {
        row += `<tr>
         <td>${element.ProductDetail}</td>
         <td>${element.Quantity}</td>
         <td>${element.Price}</td>
         </tr>`
    });
    document.getElementById("Product_Bill").innerHTML = Product_Bill + row +
        `<tr>
     <td>Total</td>
     <td></td>
     <td>${totalcost}</td>
     </tr></table>`;
};

function ItemsUpdate() {
    var Index = document.getElementById("Items").value;
    var NewQty = document.getElementById("Qty").value;
    var data = productarray[Index];
 console.log(data)
    data.Qty = NewQty;
    // console.log(typeof(data));

    Display();
}

function SortbyPrice(){
    var minimum_P = document.getElementById("minimum").value;
    var maximum_P = document.getElementById("maximum").value;

    var row =""
    productarray.forEach((element,index) => {
        if(element.price >= minimum_P && element.price <= maximum_P){
        row +=`  <tr>
            <td>${element.CompanyName}</td>
            <td>${element.model}</td>
            <td>${element.memory}</td>
            <td>${element.price}</td>
            <td>${element.quantity}</td>
            <td><input type="checkbox" class="BOX" value="${index}""></td>
        </tr>`
        }
    });
    document.getElementById("demo").innerHTML= html+row;
}

var Rateing = [];
var Rate = `<table>
<tr>
    <th>Company</th>
    <th>Model</th>
    <th>Memory(GB)</th>
    <th>Price(Rs)</th>
    <th>Rating</th>
</tr>`

function Rating(){
    var product = document.getElementById("rating").value;
    var rate = document.getElementById("Rate_me").value;
    
    var rateing_product = productarray[product];
    // rateing_product.CompanyName = rate;
    // console.log("Product :"+product);
    var product = {
        "CompanyName" : `${rateing_product.CompanyName}`,
        "model" : `${rateing_product.model}` ,
        "memory": `${rateing_product.memory}` ,
        "price": `${rateing_product.price}`,
        "Rating":`${rate}`,
    };
    Rateing.push(product);

    var row = ""
    Rateing.forEach((element) => {
        row +=`  <tr>
                <td>${element.CompanyName}</td>
                <td>${element.model}</td>
                <td>${element.memory}</td>
                <td>${element.price}</td>
                <td>${element.Rating}</td>
            </tr>`
    });        
    document.getElementById("Rate").innerHTML=Rate+row+"</table>";
   
}