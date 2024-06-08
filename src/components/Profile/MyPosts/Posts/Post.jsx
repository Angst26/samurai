import s from './Post.module.css'


const Post = (props) => {
  return (
      <div className={`${s.item}`}>
          <img src="https://avatars.mds.yandex.net/i?id=a7ed326502ebd6218a6caa808f9e0efbd30a43ce-12579803-images-thumbs&n=13"/>
          {props.content}
          <div>
              <span>{props.likesCount}👍</span>
          </div>
      </div>
  )
}

export default Post;