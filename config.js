var baseUrl = "https://192.168.90.102/admin-absensi/api";
var locationHref = "/pwa-absensi/home.html";
var indexHref = "/pwa-absensi/index.html";


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