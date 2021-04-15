import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {Firebase} from '../../config';
import {
  colors,
  fonts,
  getChatTime,
  getData,
  setDateChat,
  showError,
} from '../../utils';

const Chatting = ({navigation, route}) => {
  const doctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [dataChat, setDataChat] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();

    const chatID = `${user.uid}_${doctor.data.uid}`;
    const firebaseUrl = `chatting/${chatID}/allChat/`;

    Firebase.database()
      .ref(firebaseUrl)
      .on('value', snapshot => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];

          Object.keys(dataSnapshot).map(key => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];

            Object.keys(dataChat).map(itemChat => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          // console.log('all data chat: ', allDataChat);
          setDataChat(allDataChat);
        }
      });
  }, [doctor.uid, user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      console.log('user: ', res);
      setUser(res);
    });
  };

  const sendChat = () => {
    const today = new Date();

    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent,
    };
    const chatID = `${user.uid}_${doctor.data.uid}`;
    const firebaseUrl = `chatting/${chatID}/allChat/${setDateChat(today)}`;
    const userMessageUrl = `messages/${user.uid}/${chatID}`;
    const doctorMessageUrl = `messages/${doctor.data.uid}/${chatID}`;
    const dataHistoryChatUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: doctor.data.uid,
    };
    const dataHistoryChatDoctor = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };

    Firebase.database()
      .ref(firebaseUrl)
      .push(data)
      .then(() => {
        setChatContent('');

        Firebase.database()
          .ref(userMessageUrl)
          .set(dataHistoryChatUser);
        Firebase.database()
          .ref(doctorMessageUrl)
          .set(dataHistoryChatDoctor);
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        title={doctor.data.fullName}
        type="dark-profile"
        desc={doctor.data.category}
        photo={{uri: doctor.data.photo}}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {dataChat.map(chat => {
            return (
              <View key={chat.id}>
                <Text style={styles.chatDate}>{chat.id}</Text>
                {chat.data.map(item => {
                  const isMe = item.data.sendBy === user.uid;

                  return (
                    <ChatItem
                      key={item.id}
                      isMe={isMe}
                      text={item.data.chatContent}
                      date={item.data.chatTime}
                      photo={isMe ? null : {uri: doctor.data.photo}}
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={value => setChatContent(value)}
        onButtonPress={sendChat}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {flex: 1},
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
