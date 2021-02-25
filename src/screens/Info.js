import React,{useState} from 'react';   
import { Text, View,TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/style.js';
import axios from 'axios';

const Info = (props) =>{

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [magnitude, setMagnitude] = useState('');
    
    const Asteroid_id=props.navigation.getParam('id', 'no-id');
    console.log("Id:"+Asteroid_id);

    const astero_data = async () => {
        try {
          const response = await axios.get(
            ` https://api.nasa.gov/neo/rest/v1/neo/${Asteroid_id}?api_key=VJr5namQ2g2eI0wxXnD4Ht7FCmUbL5O3xgRzg0y1`,
          );
    
            //  alert( JSON.stringify(response.data));
       
           let res= response.data;
            setName(res.name);   
            console.log(name);
            setUrl(res.nasa_jpl_url);   
            console.log(url);
            setMagnitude(res.absolute_magnitude_h);   
            console.log(magnitude);

        
      
       } 
       catch (error) {

          alert(error.message);
        }
      };
    return(

        <View style={styles.container} onLayout={astero_data}>
            <Text style={{color:'black',fontSize:15,marginBottom:10,marginRight:50,fontWeight:'bold'}}>Name:       {name} </Text>
            <Text style={{color:'black',fontSize:15,marginBottom:10,marginRight:50,fontWeight:'bold'}}>Nasa_jpl_url:     {url} </Text>
            <Text style={{color:'black',fontSize:15,marginBottom:10,marginRight:50,fontWeight:'bold'}}>Magnitude:       {magnitude} </Text>
             <TouchableOpacity style={styles.submitButton} onPress={()=>props.navigation.navigate('Random')}>
                 <Text>Random Asteroid</Text>
             </TouchableOpacity>
        </View>
    );
};
export default Info;