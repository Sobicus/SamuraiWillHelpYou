import React from "react";
import style from './ProfileInfo.module.css'
import profileBackground from '../../../assets/img/profileBackground.png'
import {ProfileType} from "../../../redux/store";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
export const ProfileInfo = (props:ProfileInfoType) => {
    return (
            <div>
                <div className={style.backgroundImg}>
                    <img src={profileBackground} alt="conten picture"/>
                </div>
                <div className={style.profileDescription}>
                    <img
                        src={props.profile.photos.large}
                        alt="avatar"/>
                    {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    ava + description
                    
                    <div>
                        <span>aboutMe: {props.profile.aboutMe}</span><br/>
                        <span>facebook: {props.profile.contacts.facebook}</span><br/>
                        <span>website: {props.profile.contacts.website}</span><br/>
                        <span>vk: {props.profile.contacts.vk}</span><br/>
                        <span>twitter: {props.profile.contacts.twitter}</span><br/>
                        <span>instagram: {props.profile.contacts.instagram}</span><br/>
                        <span>youtube: {props.profile.contacts.youtube}</span><br/>
                        <span>github: {props.profile.contacts.github}</span><br/>
                        <span>mainLink: {props.profile.contacts.mainLink}</span><br/>
                        <span>lookingForAJob: {props.profile.lookingForAJob}</span><br/>
                        <span>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</span><br/>
                        <span>fullName: {props.profile.fullName}</span><br/>
                    </div>
                </div>
            </div>
    )
}
type ProfileInfoType = {
    profile: ProfileType
    status:string
    updateStatus: (status: string) => void
}
