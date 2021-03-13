'use strict';

var UserInfo = function UserInfo(props) {
  return React.createElement(
    "div",
    { className: "UserInfo" },
    React.createElement(Avater, { user: props.user }),
    React.createElement(
      "div",
      { className: "UserInfo-name" },
      props.user.name
    )
  );
};

var Avater = function Avater(props) {
  return React.createElement("img", { className: "Avatar",
    src: props.user.avatarUrl,
    alt: props.user.name
  });
};

function Comment(props) {
  return React.createElement(
    "div",
    { className: "Comment" },
    React.createElement(UserInfo, { user: props.data.author }),
    React.createElement(
      "div",
      { className: "Comment-text" },
      props.data.text
    ),
    React.createElement(
      "div",
      { className: "Comment-date" },
      formatDate(props.data.date)
    )
  );
}

var formatDate = function formatDate(date) {
  return date.getMonth() + 1 + "/" + date.getDate();
};

var data = {
  author: {
    name: 'test-san',
    avatarUrl: 'https://avatars.githubusercontent.com/u/33169480?s=400&u=8ef87b22becd07b9a6f01bc7ec996ca2e2e3de80&v=4'
  },
  text: 'hogehogehoge',
  date: new Date()
};

ReactDOM.render(React.createElement(Comment, { data: data }), document.getElementById('root'));