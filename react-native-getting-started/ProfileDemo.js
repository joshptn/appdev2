import {View, Text, StyleSheet} from 'react-native';

export default function ProfileDemo() {
    return(
    <View style={styles.container}>
      <Text style={styles.name}>Course & Section : BSIS 3-B</Text>
      <Text style={styles.name}>Name : Joshua Patena</Text>
      <Text style={styles.text}>
        Age : 20 {"\n"}
        Favorite Hobby : Cycling {"\n"}
        My Three Masters : Ryan, Rasheed and Lowe  </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  name: {
    fontSize: 50,
    color: "red",
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    color: "blue"
  },
});
