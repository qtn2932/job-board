import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const JobPosting = (props) =>{
    return(
        <TouchableOpacity style = {styles.jobBody}>
            <Text style = {styles.jobInfo}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    jobBody: {
        backgroundColor: 'white',
        width: 300,
        height: 400,
        borderRadius: 6,

    },
    jobInfo: {
        color: 'black',
        fontSize: 14,
        fontWeight: 400,
    }
});

export {JobPosting};
