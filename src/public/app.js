
var cek = document.getElementById('cek-btn')

cek.addEventListener('click', function () {
    $.ajax({
        url: 'api/cek',
        type: 'post',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(
            {
                "berdasar": $("#berdasar").val(),
                "produk": $("#produk").val()
            }
        ),
        success:function (response) {
            var list = '';
            $.each(response.data, function (index, value) {
                list += '<tr>'+
                            '<td>'+value.nama_produk+'</td>'+
                            '<td>'+value.nomor_sertifikat+'</td>'+
                            '<td>'+value.nama_produsen+'</td>'+
                            '<td>'+value.berlaku_hingga+'</td>'+
                        '</tr>';
            });
            $("#data").html(list);
        }
    });
})
