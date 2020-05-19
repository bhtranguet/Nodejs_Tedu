import * as jQuery from '/jquery/dist/jquery.js'
$(document).ready(() => {
    $('#btn-upload').click(() => {
        $('#status').empty().text('File uploading...');
        var form = $('#uploadForm');
        var url = form.attr("action");
        var formData = new FormData();
        var file = document.getElementById("myfile").files[0];
        formData.append('myfile', file);
        $.ajax({
            url: url,
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(data) {
                $('#status').empty().text(data);
            },
            error: function(err) {
                $('#status').empty().text(err);
            }
        })
    })
})
