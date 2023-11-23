import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Button } from '@rneui/themed';
import Entypo from 'react-native-vector-icons/Entypo';
import { users } from './info';

export default function App() {
  const showFullName = (users) => {
    alert(users);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Entypo />
        <FlatList
          data={users}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.user}>
              <View style={styles.nnCont}>
                <Text style={styles.name}>{item.nickName}</Text>
              </View>
              <View style={styles.buttonCont}>
                <Button
                  title="View"
                  onPress={() =>
                    showFullName(
                      `${'Name: '}${item.name.firstName}${' '}${item.name.lastName}${'\n'}${'Course: '}${item.course}${'\n'}${'Year: '}${item.year}`
                    )
                  }
                  buttonStyle={styles.buttonV}
                />
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 5,
    padding: 10,
  },
  user: {
    marginBottom: 6,
    width: 300,
    flexDirection: 'row',
  },
  name: {
    fontSize: 25,
    marginTop: 5,
    fontWeight: 'bold',
  },

  nnCont: {
    padding: 10,
    width: 200,
  },
  buttonCont: {
    marginTop: 10,
    width: 80,
    flexDirection: 'row-reverse',
  },
  buttonV: {
    width: 60,
  },
});
