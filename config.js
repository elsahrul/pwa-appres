var baseUrl = "https://admin.elsahrul.my.id/api";
var locationHref = `${window.location.origin}/home.html`;
var indexHref = `${window.location.origin}/index.html`;
var accessKeyPositionStack = "d1965467c2c42ba40dc286145d76f742";


// function verifikasi_token() {
//     var token = localStorage.getItem("token");
//     $.ajax({
//         url: `${baseUrl}/token/verifikasi_token`,
//         data: {
//             token: token
//         },
//         type: "POST",
//         dataType: "json",
//         success: function (response) {
//             if (response.status === "failed") {
//                 localStorage.setItem('status_token', "failed");
//             } else {
//                 localStorage.setItem('status_token', "success");
//             }
//         },
//         error: function (XMLHttpRequest, textStatus, errorThrown) {
//             alert(JSON.stringify(XMLHttpRequest));
//         }
//     });
// }