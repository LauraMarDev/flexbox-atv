import { StyleSheet, Text, View, Image, Button} from 'react-native';
import menu from './assets/menu.png'
import user from './assets/user.png'
import person from './assets/person.png'

function Header(){
  return (
    <View style={styles.header}>
      <Image style={styles.headerMenu} source={menu}/>
      <Text style={styles.headerText}>Perfil</Text>
      <Image style={styles.headerMenu} source={user}/>
    </View>
  )
}

function Profile(){
  return (
    <View style={styles.profile}>
      <View style={styles.profileImgContainer}>
        <Image style={styles.profileImage} source={person}/>
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.infoText}>Melky Maravilha</Text>
        <Text style={styles.infoText}>♥ O Melhor Prof. Universitário ♥</Text>
      </View>
    </View>
  )
}

function Info(){
  return (
    <View style={styles.info}>
      <View style={styles.infoContainer}>
        <Button
          title="Seguindo"
          color='#a25ddb'
        />
        <Text style={styles.infoText}>120</Text>
      </View>
      <View style={styles.infoContainer}>
        <Button
          title="Seguindo"
          color='#a25ddb'
          />
        <Text style={styles.infoText}>300</Text>
      </View>
    </View>
  )
}

function BtnFollow(){
  return(
    <View style={styles.btnSeguir}>
      <Button
            title="Seguir"
            color='#a25ddb'
          />
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Profile></Profile>
      <Info></Info>
      <BtnFollow></BtnFollow>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 48
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 70,
    paddingLeft: 30,
    paddingRight: 30,
  },
  headerText: {
    flexDirection: 'row',
    color: '#a25ddb',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerMenu: {
    height: 30,
    width: 30
  },
  profile: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#e3c0ff'
  },
  profileImgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    height: 270,
    width: 270,
    paddingBottom: 10,
    paddingTop: 10,

    borderWidth: 5,
    borderRadius: 30,
    borderColor: '#a25ddb',
    backgroundColor: '#fff'
  },
  profileImage: {
    height: 240,
    width: 240
  },
  profileContainer: {
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: 320,
  paddingBottom: 10,
  paddingTop: 10,

  borderWidth: 3,
  borderRadius: 20,
  borderColor: '#a25ddb',
  backgroundColor: '#fff'
  },
  info: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#e3c0ff'
  },
  infoText: {
    flexDirection: 'column',
    color: '#a25ddb',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: 150,
    paddingBottom: 10,
    paddingTop: 10
  },
  btnSeguir: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#e3c0ff'
  }
});
