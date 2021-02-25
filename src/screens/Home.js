import React,{useState} from 'react';   
import { Text, View,TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/style.js';



const Home = (props) =>{

        const [id, setId] = useState('');
        const submit="submit";
    return(
        <View style={styles.container}>
            <Text style={{color:'#e68d09',fontSize:50,marginBottom:30,fontWeight:'bold'}}>Asteroid App </Text>
            <TextInput    
               style={styles.input}         
                placeholder='Enter Asteroid ID'
                placeholderTextColor='grey' 
                onChangeText={(id) => setId(id)}
                value={id}  
             />
             <TouchableOpacity style={id!='' && styles.submitButton} onPress={()=>id!='' && props.navigation.navigate('Information',{id})}>
             <Text> {id!='' && submit} </Text>
             </TouchableOpacity>
        </View>
    );
};
export default Home;