const _getUsers = (page) =>
  new Promise((resolve, reject) => {
    $.ajax({
      type: "get",
      url: `https://reqres.in/api/users?page=${page}`,

      success: function (response) {
        resolve(response.data);
        console.log(response.data);
      },
    });
  });

// _getUsers(1)
// _getUsers(2)

// امیرحسین کاکاوند
// https://reqres.in/api/users?page=2
// محمود حسن‌زاده
// const _getUsers = () =>
// new Promise((resolve, reject) => {
// $.ajax({
// type: "get",
// url: "https://reqres.in/api/users",
// success: function (response) {
// resolve(response.data)
// }
// });
// })
