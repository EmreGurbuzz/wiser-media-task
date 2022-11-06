import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, Modal } from 'react-native'
import React, { FC, useState } from 'react'
import styles from './CustomCard.style'
interface ICardProps {
  from: string,
  userImage: string | null,
  isLiked: boolean,
  likedFrom: string | null,
  userComment: string | null,
  contentType: "article" | "podcast" | "video",
  insertDate: string,
  job: string,
  sharedFrom: "spotify" | "youtube" | "other",
  postHeader: string,
  postContent: string,
  postType: "video" | "image" | "sound",
  postSource: string,
  tags: string[],
  onPressDetail:()=>void
}
const CustomHeader: FC<ICardProps> = (props) => {
  const getUserComment = () => { // @içeren mesajı öne çıkarıp buton yapıyor
    if (!props.userComment) { // yorum yoksa
      return
    }
    else { // yorum varsa
      let comment = '', mention = ''
      for (let i = 0; i < props.userComment?.length; i++) { 
        if (props.userComment[i] == "@") {
          let startValue: any = i;
          for (let j = startValue; j < startValue + 25; j++) {
            if (props.userComment[j] && props.userComment[j] != " ") {
              mention += props.userComment[j]
            }
            else {
              i = j;
            }
          }
        }
        else {
          comment += props.userComment[i]
        }
      }
      return (
        <Text style={styles.tagText}>{comment}
          <TouchableOpacity onPress={() => console.log(`url to :${mention}`)}>
            <Text style={[styles.sharedFromOther, styles.mention]}>{mention}</Text>
          </TouchableOpacity>
        </Text>
      )
    }


  }
  const getContentPlatform = () => {
    switch (props.sharedFrom) {
      case "youtube":
        return (
          <Text style={styles.sharedFromYoutube}>youtube</Text>
        )
      case "spotify":
        return (
          <Text style={styles.sharedFromSpotify}>spotify</Text>
        )
      default:
        return (
          <Text style={styles.sharedFromOther}>{props.sharedFrom}</Text>
        )
    }
  }
  const getUserImage = () => {
    if (props.userImage) {
      return (
        <Image style={styles.userImage} source={{ uri: props.userImage }} />
      )
    }
    else {
      return (
        <View style={styles.userWithoutImageContainer}>
          <Text style={styles.userWithoutImageInner}>{props.from[0]}</Text>
        </View>
      )
    }
  }
  const getPostType = () => {
    switch (props.postType) {
      case "image":
        return (
          <Image style={styles.postImage} source={{ uri: props.postSource }} />
        )
      case "video":
        return (
          <ImageBackground style={[styles.postImage, styles.centered]} source={{ uri: props.postSource }}>
            <TouchableOpacity>
              <Image style={styles.playButton} source={require('../../assets/images/play-button.png')} />
            </TouchableOpacity>
          </ImageBackground>
        )
      case "sound":
        return (
          <View style={[styles.podcastContainer, styles.centered]}>
            <ImageBackground style={[styles.podcastImage, styles.centered]} borderRadius={175} source={{ uri: props.postSource }}>
              <TouchableOpacity>
                <Image style={styles.playButton} source={require('../../assets/images/play-button.png')} />
              </TouchableOpacity>
            </ImageBackground>
          </View>
        )
    }
  }

  return (
    <View style={styles.container}>
      {props.isLiked &&
        <View style={styles.likedContainer}>
          <Image style={styles.likedImage} source={require('../../assets/images/clap.png')} />
          <Text style={styles.likedText}><Text style={styles.likedTextName}>{props.likedFrom}</Text> liked this post.</Text>
        </View>}
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderLeft}>
          {getUserImage()}
          <View style={styles.userInfo}>
            <Text style={styles.from}>{props.from}</Text>
            <Text style={styles.job}>{props.job}</Text>
          </View>
          <Text style={styles.insertDate}>{props.insertDate}</Text>
        </View>
        <TouchableOpacity onPress={props.onPressDetail} style={styles.dotContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </TouchableOpacity>
      </View>
      {getUserComment()}
      {getPostType()}
      <View style={styles.postDetail}>
        <Text style={styles.sharedText}>This {props.contentType} is shared via {getContentPlatform()}</Text>
        <Text style={styles.postHeader}>{props.postHeader.substring(0, 80)}..</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {props.tags.map((tag: any, index) =>
          <TouchableOpacity style={styles.tagContainer} key={index}>
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  )
}

export default CustomHeader