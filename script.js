// WERSJA 1
// $( document ).ready(() => {
//     $(`#btn`).click(() => {
//         $.get('https://akademia108.pl/api/ajax/get-post.php')
//         .done(function  (data) {
//         let userId = $(`<p></p>`).text(`Post ID: ${data.userId}`);
//         let id = $(`<p></p>`).text(`ID: ${data.id}`);
//         let importedBody = $(`<p></p>`).text(`Body: ${data.body}`);
//         let title = $(`<p></p>`).text(`Title: ${data.title}`);
//         $('#btn').after(userId, id, importedBody, title);
//          console.log(data)

//     })
//         .fail(function(error) {
//             console.error(error);
//         })
//         });
    
// } );

// WERSJA 2

$( document ).ready(() => {
    $(`#btn`).click(() => {
         $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
         .done(function  (data) {
        let userId = $(`<p></p>`).text(`Post ID: ${data.userId}`);
        let id = $(`<p></p>`).text(`ID: ${data.id}`);
        let importedBody = $(`<p></p>`).text(`Body: ${data.body}`);
        let title = $(`<p></p>`).text(`Title: ${data.title}`);
         $('#btn').after(userId, id, importedBody, title);
         console.log(data)
     })
         .fail(function(error) {
             console.error(error);
         })
         });
    
} );