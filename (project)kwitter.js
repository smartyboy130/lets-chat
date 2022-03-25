function addUser()
{
     username=document.getElementById("username").value;

     localStorage.setItem("name",username);

     window.location="(project)kwitter_room.html";
     
}