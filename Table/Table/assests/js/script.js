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
        city: "vapi"
    },
    {
        firstname: "pratik patel",
        email: "kiranj1234@gmail.com",
        mobile: 125432433,
        city: "vapi"
    }
];

getData(user);

function getData(data) {
    const userTableBody = document.querySelector("#user-table-body");
    //   console.log( userTableBody);

    data.forEach((user) => {

        const tableRow = document.createElement('tr');
        console.log(tableRow);


        for (const item in user) {
            const tablecol = document.createElement('td');
            // console.log(tablecol);
            const value = user[item];
            // console.log(value);
            tablecol.textContent = value;
            tableRow.appendChild(tablecol)
        }
        userTableBody.appendChild(tableRow);
        console.log(userTableBody);
    });
}

// function search() {
//     let filter = document.getElementById('myInput').value.toUpperCase();
//     let usertablebody = document.getElementById('user-table-body');
//     let Findrecords = document.querySelector('.no-records');
//     let userTable = document.getElementById('user-table')


//     //  console.log(myTable);
//     let tr = usertablebody.getElementsByTagName('tr');
//     // console.log(tr)
//     for (let i = 0; i < tr.length; i++) {
//         let td = tr[i].getElementsByTagName('td')[0];
//         // console.log(td)
//         if (td) {
//             //short-circuit in javascript
//             let textvalue = td.textContent || td.innerHTML;
//             // console.log(textvalue)
//             //use includes
//             if (textvalue.toUpperCase().indexOf(filter) > -1) {
//                 // document.getElementById('noDataFound').classList.add('d-none');
//                 tr[i].style.display = "";
//                 // document.getElementById('noDataFound').innerText = '';
//                 Findrecords.classList.add(['d-none']);
//                 // Findrecords.textContent="";
//                 // console.log(tr)
//             }
//             else {
//                 tr[i].style.display = "none";
//                 // document.getElementById('noDataFound').innerText = 'No records found';
//                 Findrecords.classList.remove(['d-none']);
//                 // Findrecords.textContent="No records found";
//             }
//         }
//     }
// }

function filterUser() {
    const userTableBody = document.querySelector('#user-table-body'); /** get user tbody */
    const searchTerm = document.querySelector('#search-box');
    const noRecordDiv = document.querySelector('.no-records');
    const userTable = document.querySelector('#user-table');
    userTableBody.textContent = '';
    let filteredData = [];
  
    if (searchTerm.value !== '') {
      filteredData = user.filter((item) => {
        return item.firstname.toLowerCase().includes( searchTerm.value.toLowerCase());
      });
    } else {
      filteredData = user;
    }
  
    // filteredData = searchTerm.value !== '' ? user.filter(item => item.name.toLowerCase().includes(searchTerm.value.toLowerCase())) : user;
    
    if (!filteredData.length) {
      userTableBody.classList.add(['d-none']);
      noRecordDiv.classList.remove(['d-none']);
    } else {
      userTableBody.classList.remove(['d-none']);
      noRecordDiv.classList.add(['d-none']);
    }
    getData(filteredData);
  }
  

const modal = document.querySelector('.modal');


function openModal() {
    modal.classList.toggle(['d-none']);
}

// function closeModal() {
//     modal.classList.add(['d-none']);
// }