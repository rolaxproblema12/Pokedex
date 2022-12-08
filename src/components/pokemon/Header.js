import { StyleSheet, View, SafeAreaView, Text, Image, Platform} from 'react-native'
import React from 'react'
import { capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';
export default function Header(props) {
  const {name, order,image,type} = props;
  const color = getColorByPokemonType(type);
  const bgStyles =[{backgroundColor: color,...styles.bg}]
    return (
    <View>
        <View style={bgStyles}/>
      <SafeAreaView style= {styles.content}>
        <View style={styles.header}>
            <Text style= {styles.name}>{capitalize(name)}</Text>
            <Text style={styles.order}>#{`${order}`.padStart(3,0)}</Text>
        </View>
        <View style= {styles.contentImg}>
            <Image source={{uri: image}} style={styles.image}></Image>
        </View>
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height : 400,
        position :'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform : [{scaleX : 2}],
    },
    content:{
        marginHorizontal: 20,
        marginTop : 30,
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 27
    },
    order:{
        color: 'white',
        fontSize: 20
    },
    contentImg:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top:Platform.OS === "android"?30: 30, 
    },
    image:{
        width: 250,
        height: 300,
        resizeMode: "contain"
    }
})