import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import s from './Setting.module.css'
import {updatePhotoProfile} from "../../redux/profile-reduser";

export const Settings = () => {
    const profile = useAppSelector(state => state.profilePage.profile)
    const photo = useAppSelector(state => state.profilePage.profile?.photos.large)
    const authId = useAppSelector(state => state.auth.profileData?.id)
    const dispatch = useAppDispatch()
    const [fullName, setFullName] = useState(profile ? profile.fullName : '')
    const [aboutMe, setAboutMe] = useState(profile ? profile.aboutMe : '')
    const [findJob, setFindJob] = useState<boolean | null>(profile ? profile.lookingForAJob : null)
    const [descJob, setDescJob] = useState<string | null>(profile ? profile.lookingForAJobDescription : '')


    // const changeFullName = () => {
    //     dispatch(updateName(fullName))
    // }
    // const changeAboutMe = () => {
    //     dispatch(updateAboutMe(aboutMe))
    // }
    // const onChangeHandler = (e: any) => {
    //     if (e.currentTarget.files.length === 1) {
    //         dispatch(savePhoto(e.currentTarget.files[0]))
    //     }
    // }
    const chosePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            dispatch(updatePhotoProfile(e.target.files[0]))
        }
    }
    return (
        <>
            <div className={s.blockSettings}>
                <div className={s.header}>
                    <h2>Settings</h2>
                </div>
                <div className={s.blockTools}>
                    <div className={s.photoLabel}>Change Photo</div>
                    <div>
                        <div className={s.changePhoto}>
                            <img className={s.photo} src={photo ? photo : ''}/>
                            <input className={s.inputPhoto} type={"file"} accept=".png, .jpg, .jpeg"
                                   onChange={chosePhoto}/>
                        </div>
                    </div>
                    <div className={s.blockSet}>
                        <span className={s.minLabel}>Name</span>
                        <input className={s.minInput} value={fullName} type={"text"}/>
                    </div>
                    <div className={s.set}>
                        <span className={s.minLabel}>About Me</span>
                        <input className={s.minInput} type={"text"} value={aboutMe ? aboutMe : ''}/>
                    </div>
                    <div className={s.set}>
                        <span className={s.label}>Looking for a job?</span>
                        <input type={"checkbox"} checked={findJob ? findJob : false}/>
                    </div>
                    <div className={s.set}>
                        <span className={s.label}>Job description</span>
                        <input className={s.input} type={"text"} value={descJob ? descJob : ''}/>
                    </div>
                </div>
                <div className={s.blockButton}>
                    <button className={s.apply}>
                        <NavLink className={s.link} to={'/profile'}>
                            Apply</NavLink>
                    </button>
                </div>

            </div>

            {/*<Box display={'flex'} flexDirection={'column'} mt={'10'} alignItems={'center'}>*/}
            {/*    <Heading display={'block'} mb={'30'}>Settings</Heading>*/}
            {/*    <Button colorScheme={'green'} mb={'5'} size={'sm'}>*/}
            {/*        <NavLink to={'/profile/' + authId}>*/}
            {/*            Apply</NavLink>*/}
            {/*    </Button>*/}
            {/*    <Box border={'1px'} p={'5'} borderColor={'#EDF2F7'}>*/}
            {/*        {}*/}
            {/*        <Badge colorScheme={'purple'} p={'5px'}>Change Photo</Badge>*/}
            {/*        <Box display={'flex'} border={'1px'} p={'5'} borderColor={'#EDF2F7'}>*/}
            {/*            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>*/}
            {/*                <Image src={photo} w={'20'} mr={'5'}/>*/}
            {/*                <Input type={'file'} onChange={onChangeHandler} border={'none'}/>*/}
            {/*            </Box>*/}
            {/*        </Box>*/}
            {/*        <Box display={'flex'} justifyContent={"end"} mt={'10'} mb={'5'}>*/}
            {/*            <Badge colorScheme={'purple'} p={'5px'} w={'20%'}>Name</Badge>*/}
            {/*            <Input onChange={(e: ChangeEvent<HTMLInputElement>) => setFullName(e.currentTarget.value)}*/}
            {/*                   value={fullName}*/}
            {/*                   w={'300px'}/>*/}
            {/*            <Button onClick={changeFullName}>Change</Button>*/}
            {/*        </Box>*/}
            {/*        <Box display={'flex'} justifyContent={"end"}>*/}
            {/*            <Badge colorScheme={'purple'} p={'5px'} w={'20%'}>About me</Badge>*/}
            {/*            <Input onChange={(e: ChangeEvent<HTMLInputElement>) => setAboutMe(e.currentTarget.value)}*/}
            {/*                   value={aboutMe}*/}
            {/*                   w={'300px'} justifyContent={"end"}/>*/}
            {/*            <Button onClick={changeAboutMe}>Change</Button>*/}
            {/*        </Box>*/}
            {/*    </Box>*/}
            {/*</Box>*/}
        </>
    )
}