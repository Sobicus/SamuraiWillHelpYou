import style from './Users.module.css'
import {UserType} from "../../redux/users-reducer";
import axios from "axios";
import userPhotoTemplate from '../../assets/img/avatar.jpg'

export const Users = (props: UsersType) => {
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => props.setUsers(response.data.items))
        }
    }

    return (
        <div>
            <button onClick={getUsers}>GET USERS</button>
            {props.users.map(u => {
                return <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhotoTemplate}
                                 className={style.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>
            })}
        </div>
    )
}

type UsersType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}