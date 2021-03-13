'use strict';

const UserInfo = props => {
  return (
    <div className="UserInfo">
      <Avater user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

const Avater = props => {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.data.author} />
      <div className="Comment-text">
        {props.data.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.data.date)}
      </div>
    </div>
  );
}

const formatDate = date => {
  return `${date.getMonth()+1}/${date.getDate()}`
}

const data = {
  author: {
    name: 'test-san',
    avatarUrl: 'https://avatars.githubusercontent.com/u/33169480?s=400&u=8ef87b22becd07b9a6f01bc7ec996ca2e2e3de80&v=4'
  },
  text: 'hogehogehoge',
  date: new Date()
}

ReactDOM.render(
  <Comment data={data} />,
  document.getElementById('root')
);