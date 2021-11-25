_getUsers(1).then((user_1) =>
  _getUsers(2).then((user_2) => {
    let users = [...user_1, ...user_2];
    console.log(users);
    users.map((user) => {
      addcart({
        firstname: user.first_name,
        lastname: user.last_name,
        avatar: user.avatar,
        email: user.email
      });
    });
  })
);
