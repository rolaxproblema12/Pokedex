import { StyleSheet,View, Text } from 'react-native'
import React from 'react'
import {map, capitalize} from 'lodash';

export default function stacks(props) {
    const {stats} = props;
    const barStyles = (number) =>{
        const color = number > 49 ? "#00ac17" : "red";
        return{
            backgroundColor: color,
            width: `${number}%`

        }
    }
  return (
    <View style= {styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {map(stats, (item,index) =>(
        <View key={index} style={styles.block}>
            <View style={styles.blockTitle}>
                <Text style={styles.statName}>{capitalize(item.stat.name)}</Text></View>
            <View style={styles.blockInfo}>
               <Text style = {styles.number}>{item.base_stat}</Text> 
               <View style={styles.bgBar}>
               <View style={[styles.bar,barStyles(item.base_stat)]}></View>
               </View>

            </View>

        </View>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 30 ,
        marginTop: 40,
        marginBottom: 40
        
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5,

    },
    block:
    {
        flexDirection: 'row',
        paddingVertical :5,
    },
    blockTitle:{
        width : "30%",
    },
    statName:{
        fontWeight: 'bold',
        marginLeft: -5
    },
    blockInfo:{
        width: '70%',
        flexDirection: 'row',
        alignItems : 'center',
    },
    number:{
        width: '12%',
        fontSize: 12
    },
    bgBar:{
        backgroundColor: 'grey',
        width:'88%',
        height: 5,
        borderRadius: 20,
        overflow: 'hidden',
    },
    bar:{
        // backgroundColor:'red',
        // with: '40%',
        height: 5,
        borderRadius: 20,


    }
})