import axios from 'axios';

function postQna(title, content, id){
    return async(dispatch, getState) =>
    {
        const user =  await axios({
            method: 'post',
            url:'http://localhost:8000/writerQna',
            data: {
                title, content, id
            }
        })
         console.log("qnaAction :" + user.data)
      
        alert(user.data);
       
    }
}

function enterQna(){
    return async(dispatch, getState) =>
    {
        const qnaBorder = await axios({
            method: 'post',
            url:'http://localhost:8000/qna',
            data:{
                
            },
            success: (datas)=>{
              const table = document.getElementById("table");
              const tbody = document.createElement("tbody");
              const columns = ["postId", "title", "user_id", "createdAt"];
              datas.forEach((data, idx) => {
                const tr = document.createElement("tr");
                columns.forEach((column) => {
                  const value = data[column];
                  const td = document.createElement("td");
                  td.setAttribute("postId", data["postId"]); 
                  if (column === "postId") {
                    td.innerHTML = idx+1;
                  } else {
                    td.innerHTML = value;
                  }
                  tr.appendChild(td);
                });
          
                tr.addEventListener("click", (e) => {
                  const postId = e.target.getAttribute("postId");
                  document.location.href = `/board/${postId}`;
                });
                tbody.appendChild(tr);
              });
              table.appendChild(tbody);
            }
        })
    }
}


export const qnawriteAction = {postQna, enterQna};