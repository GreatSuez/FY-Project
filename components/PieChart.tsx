
import React, { Component } from 'react';
//import react in our code.
import { BarChart, Grid, XAxis } from 'react-native-svg-charts'
import { StyleSheet, View, Text } from 'react-native';
// import all basic components
import Pie from 'react-native-pie';
// import pie to make pie chart

const PieChart = ({value}:{value:any}) => {
    const fill = 'rgb(134, 65, 244)'
    const data   = [ 13734, 15585, 22104]
    
    return (
      <View style={styles.container}>
     
        <Text>Unique Word Count</Text>
        <Pie
          radius={70}
          //completly filled pie chart with radius 70
          innerRadius={40}
          //to make donut pie chart define inner radius
          series={[10, 20, 30]}
          //values to show and color sequentially
          colors={['#f00', '#0f0', '#00f']}
        />
        <Text>Word Occurrences of "Harry"</Text>

         <BarChart
                style={{ height: 200 }}
                data={ data }
                svg={{ fill }}
                contentInset={{ top: 30, bottom: 30 }}
            >

            <XAxis
                    style={{ marginTop: 10 }}
                    data={ data }
                    formatLabel={ (value, index) => index }
                    labelStyle={ { color: 'black' } }
                />

               
            </BarChart>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  
});
