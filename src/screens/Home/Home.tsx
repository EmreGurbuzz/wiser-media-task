import { View, Text, SafeAreaView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { instance } from '../../MockAdapter'
import styles from './Home.style'
import Header from '../../components/Header'
import { Colors } from '../../config'
import CustomCard from '../../components/CustomCard'
import CustomPopup from '../../components/CustomPopup'


const Home: FC = () => {
  const [visible, setVisible] = useState(false)
  const [loader, setLoader] = useState(true)
  const [posts, setPosts] = useState([] as any)
  function getData() {
    instance.get('/posts').then(values => {
      setLoader(false)
      setPosts(values.data.posts)
    })
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.containerSafe}>
        <View style={styles.safeInnerContainer}>
          <Header />
        </View>
      </SafeAreaView>
      {loader ?
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            size={'large'}
            color={Colors.darkblue} />
        </View>
        :
        <View>
          <FlatList
            style={{ marginBottom: 90 }}
            data={posts}
            renderItem={({ item, index }) =>
              <CustomCard
                onPressDetail={()=>setVisible(!visible)}
                from={item.from}
                insertDate={item.insertDate}
                job={item.job}
                postHeader={item.postHeader}
                sharedFrom={item.sharedFrom}
                postContent={item.postContent}
                userImage={item.userImage}
                isLiked={item.isLiked}
                contentType={item.contentType}
                likedFrom={item.likedFrom}
                userComment={item.userComment}
                postSource={item.postSource}
                tags={item.tags}
                postType={item.postType} />
            }
          />
        </View>
      }
      <CustomPopup 
      onPress={()=>setVisible(!visible)} 
      visible={visible} />
    </View>
  )
}

export default Home


