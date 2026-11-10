import { StyleSheet, Text, View } from 'react-native';

function Header(){
  return <View style={styles.header}></View>
}

function Profile(){
  return <View style={styles.profile}></View>
}

function InfoSection(){
  return <View style={styles.infoSection}></View>
}

function btnFollow(){

}

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Profile></Profile>
      <InfoSection></InfoSection>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#e3c0ff',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    height: 100
  },
  profile: {
    flexDirection: 'row',
    backgroundColor: '#ffc0db',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    //height: 500
  },
  infoSection: {
    flexDirection: 'row',
    backgroundColor: '#c0e7ff',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    //height: 100
  }
});
