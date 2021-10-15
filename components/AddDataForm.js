import React, { useEffect, useState } from 'react'
import { StyleSheet, View,Text, StatusBar } from 'react-native';
import popUpContent from '../constants/popUpContent';
import Form from './AddForm/Form';
import KBAvoidView from './KeyBoardAvoidView/KBAdvoidView';
import ModalPopUp from './Modal/ModalPopUp';

const AddDataForm = () => {
    const [contents,setContents] = useState({})
    const [show,setShow] = useState(false)
    const [status,setStatus] = useState('')
    useEffect(()=>{
        handleContentPopUp();
    },[status])
    const handleContentPopUp = ()=>{
        if(status === 'error'){
            setContents(popUpContent.error)
        }else if(status === 'success'){
            setContents(popUpContent.success)
        }else if(status === 'loading'){
            setContents({})
        }
    }
    return (
        <KBAvoidView>
        <View style={styles.wrapper}>
            <ModalPopUp contents={contents} status={status} show={show} 
            setShow={setShow}
            />
            <Text style={styles.textHeading}>RentalZ</Text>
            <Form setStatus={setStatus} 
            setShow={setShow} 
            status={status}
            />
        </View>
        </KBAvoidView>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
    },
    textHeading:{
        fontSize:25,
        marginTop:20,
    }
})
export default AddDataForm
