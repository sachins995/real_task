let details1 = document.querySelector("#details1")
let details2 = document.querySelector("#details2")
let details3 = document.querySelector("#details3")
let checkout1 = document.querySelector("#checkout1");
let checkout2 = document.querySelector("#checkout2");
let checkout3 = document.querySelector("#checkout3");
let radioButton1 = document.querySelector("#radioButton1")
let radioButton2 = document.querySelector("#radioButton2")
let radioButton3 = document.querySelector("#radioButton3")



document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("radioButton1").addEventListener("click", function () {
    if (document.getElementById("radioButton1").checked == true) {
      checkout1.classList.add("check")
      radioButton1.classList.add("active")
      if (document.getElementById('represent1')) {
        details1.style.display = 'block'
      } else {
        const newDiv1 = document.createElement('div');
        newDiv1.id = 'represent1';
        newDiv1.innerHTML = `
<table>
<thead>
    <tr>
      <th> </th>
      <th>Size</th>
      <th>Colours</th>
    </tr>
   
</thead>
<tbody>

  <tr>
    <th>#1</th>
    <td><select id="sizes" name="Size">
      <option>S</option>
      <option>M</option>
      <option>L</option>
      <option>XL</option>
      <option>XXL</option>
    </select></td>
    <td>
      <select id="sizes" name="Color">
        <option>Colour</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Yellow</option>
      </select>
    </td>
  </tr>
  <tr>
    <th>#2</th>
    <td><select id="sizes" name="Size">
      <option>S</option>
      <option>M</option>
      <option>L</option>
      <option>XL</option>
      <option>XXL</option>
    </select></td>
    <td>
    <select id="sizes" name="Color">
    <option>Colour</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Yellow</option>
      </select>
    </td>
  </tr>
</tbody>

</table>

 `
        details1.style.display = 'block';
        details1.appendChild(newDiv1)
      }
      radioButton2.classList.remove("active")
      radioButton3.classList.remove("active")
      details2.style.display = 'none';
      details3.style.display = 'none';
      checkout2.classList.remove("check")
      checkout3.classList.remove("check")
    }
  })
  document.getElementById("radioButton2").addEventListener("click", function () {
    checkout2.classList.add("check")
    radioButton2.classList.add("active")
    if (document.getElementById('represent2')) {
      details2.style.display = 'block'
    } else {
      const newDiv2 = document.createElement('div');
      newDiv2.id = 'represent2';
      newDiv2.innerHTML = `
<table>
<thead>
    <tr>
      <th> </th>
      <th>Size</th>
      <th>Colours</th>
    </tr>
   
</thead>
<tbody>

  <tr>
    <th>#1</th>
    <td><select id="sizes" name="Size">
      <option>S</option>
      <option>M</option>
      <option>L</option>
      <option>XL</option>
      <option>XXL</option>
    </select></td>
    <td>
    <select id="sizes" name="Color">
    <option>Colour</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Yellow</option>
      </select>
    </td>
  </tr>
  <tr>
    <th>#2</th>
    <td><select id="sizes" name="Size">
      <option>S</option>
      <option>M</option>
      <option>L</option>
      <option>XL</option>
      <option>XXL</option>
    </select></td>
    <td>
    <select id="sizes" name="Color">
    <option>Colour</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Yellow</option>
      </select>
    </td>
  </tr>
</tbody>

</table>

 `
      details2.style.display = 'block';
      details2.appendChild(newDiv2)
    }
    radioButton1.classList.remove("active")
    radioButton3.classList.remove("active")
    details1.style.display = 'none';
    details3.style.display = 'none';
    checkout1.classList.remove("check")
    checkout3.classList.remove("check")

  })

  document.getElementById("radioButton3").addEventListener("click", function () {
    checkout3.classList.add("check")
    radioButton3.classList.add("active")
    if (document.getElementById('represent3')) {
      details3.style.display = 'block'
    } else {
      const newDiv3 = document.createElement('div');
      newDiv3.id = 'represent3';
      newDiv3.innerHTML = `
 <table>
 <thead>
     <tr>
       <th> </th>
       <th>Size</th>
       <th>Colours</th>
     </tr>
    
 </thead>
 <tbody>
 
   <tr>
     <th>#1</th>
     <td><select id="sizes" name="Size">
       <option>S</option>
       <option>M</option>
       <option>L</option>
       <option>XL</option>
       <option>XXL</option>
     </select></td>
     <td>
     <select id="sizes" name="Color">
     <option>Colour</option>
         <option>Blue</option>
         <option>Green</option>
         <option>Yellow</option>
       </select>
     </td>
   </tr>
   <tr>
     <th>#2</th>
     <td><select id="sizes" name="Size">
       <option>S</option>
       <option>M</option>
       <option>L</option>
       <option>XL</option>
       <option>XXL</option>
     </select></td>
     <td>
     <select id="sizes" name="Color">
     <option>Colour</option>
         <option>Blue</option>
         <option>Green</option>
         <option>Yellow</option>
       </select>
     </td>
   </tr>
 </tbody>
 
 </table>
 
  `
      details3.style.display = 'block';
      details3.appendChild(newDiv3)
    }
    details2.style.display = 'none';
    details1.style.display = 'none';
    checkout1.classList.remove("check")
    checkout2.classList.remove("check")
    radioButton1.classList.remove("active")
    radioButton2.classList.remove("active")

  })


})