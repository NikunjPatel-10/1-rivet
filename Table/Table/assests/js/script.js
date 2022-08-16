const user = [
    {
        firstname: "nikunj patel",
        email: "nikunj199842@gmail.com",
        mobile: 7645476543,
        city: "billimora"
    },
    {
        firstname: "parth patel",
        email: "parth1996@gmail.com",
        mobile: 7652523653,
        city: "chikhli"
    },
    {
        firstname: "jay patel",
        email: "jay.patel1999@gmail.com",
        mobile: 6355575596,
        city: "valsad"
    },
    {
        firstname: "ankit patel",
        email: "ankit52465@gmail.com",
        mobile: 7600926725,
        city: "surat"
    },
    {
        firstname: "viral patel",
        email: "viral1234@gmail.com",
        mobile: 125432433,
        city: "Nandarkha"
    },
    {
        firstname: "kiranj patel",
        email: "kiranj1234@gmail.com",
        mobile: 125432433,
        city: ""
    }
];

getData(user);

function getData(data) {
    const userTableBody = document.querySelector("#user-table-body");
    //   console.log( userTableBody);

    data.forEach((user) => {

        const tableRow = document.createElement('tr');
        // console.log(tableRow);


        for (const item in user) {
            const tablecol = document.createElement('td');
            // console.log(tablecol);
            const value = user[item];
            // console.log(value);
            tablecol.textContent = value;
            tableRow.appendChild(tablecol)
        }
        userTableBody.appendChild(tableRow);
    });
}

 function search() {
    let filter = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('user-table-body');
    let Findrecords = document.querySelector('.no-records');
    
    //  console.log(myTable);
    let tr = myTable.getElementsByTagName('tr');
    // console.log(tr)
 for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        // console.log(td)
        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            // console.log(textvalue)
           if (textvalue.toUpperCase().indexOf(filter) > -1) {
               
                tr[i].style.display = "";
                Findrecords.classList.add('d-none');
                // document.getElementById('myInput').find('.FindRecords').hide()
                // Findrecords.style.display = "none";
                // Findrecords.textContent= "" ;
                // Findrecords.textContent = "";
            }
            else {
               
                tr[i].style.display = "none";
                Findrecords.classList.remove('d-none');
                // document.getElementById('myInput').find('.FindRecords').show()
                // Findrecords.style.display = ""
                
                // Findrecords.innerText = "No record found"
                // Findrecords.textvalue = "no record found"
                // Findrecords.classList.add('d-none');

            }
        }
    }
}

const modal = document.querySelector('.modal');


function openModal() {
    modal.classList.toggle(['d-none']);
}

// function closeModal() {
//     modal.classList.add(['d-none']);
// }