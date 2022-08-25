const user = [
   {
      Item: "skippy penut Butter 160z",
      Date: "07 Nov , 8:35pm",
      Type: "Discarded",
      EstCost: "$25",
      Last: "18-aug",
      List: "grocery",
      Auto: "no",
      BuyNow: "amazon"
   },
   {
      Item: "skippy penut Butter 160z ",
      Date: "08 Nov , 8:35pm",
      Type: "Want",
      EstCost: "$40",
      Last: "19-aug",
      List: "grocery",
      Auto: "no",
      BuyNow: "N/A",
   },
   {
      Item: "skippy penut Butter 160z",
      Date: "09 Nov , 8:35pm",
      Type: "Waiting",
      EstCost: "$35",
      Last: "20-aug",
      List: "grocery",
      Auto: "no",
      BuyNow: "amazon",
   },
   {
      Item: "skippy penut Butter 160z",
      Date: "10 Nov , 8:35pm",
      Type: "Discarded",
      EstCost: "$30",
      Last: "22-aug",
      List: "grocery",
      Auto: "no",
      BuyNow: "N/A",
   },
   {
      Item: "skippy penut Butter 160z",
      Date: "11 Nov , 8:35pm",
      Type: "Cancelled",
      EstCost: "$20",
      Last: "24-aug",
      List: "grocery",
      Auto: "no",
      BuyNow: "amazon",
   },
   {
      Item: "skippy penut Butter 160z",
      Date: "12 Nov , 8:35pm",
      Type: "Waiting",
      EstCost: "$15",
      Last: "26-aug",
      List: "grocery",
      Auto: "no",
      BuyNow: "N/A",
   },
   {
      Item: "skippy penut Butter 160z",
      Date: "13 Nov , 8:35pm",
      Type: "Want",
      EstCost: "$10",
      Last: "28-aug",
      List: "grocery",
      Auto: "no",
      BuyNow: "amazon",
   },
   {
      Item: "skippy penut Butter 160z",
      Date: "14 Nov , 8:35pm",
      Type: "Want",
      EstCost: "$45",
      Last: "30-aug",
      List: "grocery",
      Auto: "no",
      BuyNow: "N/A",
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

         if (item === "Type") {
            const addcolor = document.createElement("span");
            addcolor.classList.add("badge");
            addcolor.textContent = user[item];

            if (user[item] == "Discarded") {
               addcolor.classList.add("bg-red")
            }
            if (user[item] == "Want") {
               addcolor.classList.add("bg-green")
            }
            if (user[item] == "Waiting") {
               addcolor.classList.add("bg-yellow")
            }
            if (user[item] == "Cancelled") {
               addcolor.classList.add("bg-white")
            }

            tablecol.appendChild(addcolor);
         }
         else {
            tablecol.textContent = value;
         }

         // tablecol.textContent = value;
         tableRow.appendChild(tablecol)
      }
      userTableBody.appendChild(tableRow);
   });
}

function filterUser() {
   const userTableBody = document.querySelector('#user-table-body'); /** get user tbody */
   const searchTerm = document.querySelector('#search-box');
   const noRecordDiv = document.querySelector('.no-records');
   const userTable = document.querySelector('#user-table');
   userTableBody.textContent = '';
   let filteredData = [];

   if (searchTerm.value !== '') {
      filteredData = user.filter((item) => {
         return item.Date.toLowerCase().includes(searchTerm.value.toLowerCase());
      });
   } else {
      filteredData = user;
   }


   if (!filteredData.length) {
      userTableBody.classList.add(['d-none']);
      noRecordDiv.classList.remove(['d-none']);
   } else {
      userTableBody.classList.remove(['d-none']);
      noRecordDiv.classList.add(['d-none']);
   }
   getData(filteredData);
}
