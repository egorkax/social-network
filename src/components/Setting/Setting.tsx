import React, {ChangeEvent, useEffect, useState} from "react";
import {Navigate, NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import s from './Setting.module.css'
import {updatePhotoProfile, updateProfile} from "../../redux/profile-reduser";

export const Settings = () => {
    useEffect(() => {

    }, [])
    const profile = useAppSelector(state => state.profilePage.profile)
    const photo = useAppSelector(state => state.profilePage.profile?.photos.large)
    const authId = useAppSelector(state => state.auth.profileData?.id)
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const dispatch = useAppDispatch()
    const [fullName, setFullName] = useState(profile ? profile.fullName : '')
    const [aboutMe, setAboutMe] = useState(profile ? profile.aboutMe : '')
    const [findJob, setFindJob] = useState<boolean>(profile ? profile.lookingForAJob : false)
    const [descJob, setDescJob] = useState<string | null>(profile ? profile.lookingForAJobDescription : '')


    const changeFullName = (e: ChangeEvent<HTMLInputElement>) => {
        setFullName(e.currentTarget.value)
    }
    const changeAboutMe = (e: ChangeEvent<HTMLInputElement>) => {
        setAboutMe(e.currentTarget.value)
    }
    const changeFindJob = (e: ChangeEvent<HTMLInputElement>) => {
        setFindJob(e.currentTarget.checked)
    }
    const changeDescJob = (e: ChangeEvent<HTMLInputElement>) => {
        setDescJob(e.currentTarget.value)
    }


    const chosePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            dispatch(updatePhotoProfile(e.target.files[0]))
        }
    }
    const setProfileData = () => {
        if (profile) {
            dispatch(updateProfile({
                ...profile,
                fullName: fullName,
                aboutMe: aboutMe ? aboutMe : '',
                lookingForAJob: findJob,
                lookingForAJobDescription: descJob ? descJob : ''
            }))
        }
    }

    if (!isAuth) return <Navigate to={'/login'}/>
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
                        <input className={s.minInput} value={fullName} type={"text"} onChange={changeFullName}/>
                    </div>
                    <div className={s.set}>
                        <span className={s.minLabel}>About Me</span>
                        <input className={s.minInput} type={"text"} onChange={changeAboutMe}
                               value={aboutMe ? aboutMe : ''}/>
                    </div>
                    <div className={s.set}>
                        <span className={s.label}>Looking for a job?</span>
                        <input type={"checkbox"} onChange={changeFindJob} checked={findJob ? findJob : false}/>
                    </div>
                    <div className={s.set}>
                        <span className={s.label}>Job description</span>
                        <input className={s.input} type={"text"} onChange={changeDescJob}
                               value={descJob ? descJob : ''}/>
                    </div>
                </div>
                <div className={s.blockButton}>
                    <button onClick={setProfileData} className={s.apply}>
                        <NavLink className={s.link} to={'/profile'}>Apply</NavLink>
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