var listStudent = [
    {
      maSV: 'MA-1',
      name: 'Khai',
      loai: 'gioi',
      diemTB: 10,
    },
    {
      maSV: 'MA-2',
      name: 'Hieu',
      loai: 'gioi',
      diemTB: 10,
    },
    {
      maSV: 'MA-3',
      name: 'Dong',
      loai: 'gioi',
      diemTB: 10,
    },
  ];
  
  function handleShowListStudent(listStudent) {
    var content = '';
    listStudent.map((item, index) => {
      content += 
     ` <tr>
        <td>${item.maSV}</td>
        <td>${item.name}</td>
        <td>${item.loai}</td>
        <td>${item.diemTB}</td>
        <td>
        <button onclick="handleRemoveItem('${item.maSV}')">Delete</button>
        </td>
        <td>
        <button onclick="handleEditItem('$.{item.maSV}')">Edit</button>
        </td>
      </tr>`
      ;
    });
    document.querySelector("tbody").innerHTML = content
  }
  handleShowListStudent(listStudent);
  
  function handleRemoveItem(maSV) {

  console.log('maSV : ', maSV);
  console.log('dssv', listStudent);

  var index = listStudent.findIndex((item, index) => item.maSV === maSV);
  
    if (index !== -1) {
      listStudent.splice(index, 1);
      handleShowListStudent(listStudent);
    }
  }
  function handleEditItem(maSV) {
    var index = listStudent.findIndex(item => item.maSV === maSV)

  }