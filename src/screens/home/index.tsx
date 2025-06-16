import React, { useRef, useState } from 'react';
import {Dimensions, FlatList, Image, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, Text, View} from 'react-native';
import {styles} from './styles';

type ItemData = {
  image: ImageSourcePropType;
  id: number;
};

const HomeScreen = () => {
  const [activeSlide,setActiveSlide] = useState(0)
  const { width: SCREEN_WIDTH } = Dimensions.get('window');

   const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    console.log(event,"event")
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offsetX / SCREEN_WIDTH);
    setActiveSlide(currentIndex);
  };
  
  const CUEROSEL_IMAGE: ItemData[] = [
    {
      id: 1,
      image: require('../../assets/icons/rec_img.png'),
    },
    {
      id: 2,
      image: require('../../assets/icons/rec_img.png'),
    },
    {
      id: 3,
      image: require('../../assets/icons/rec_img.png'),
    },
    {
      id: 4,
      image: require('../../assets/icons/rec_img.png'),
    },
    {
      id: 5,
      image: require('../../assets/icons/rec_img.png'),
    },
  ];

  const renderCuerosel = ({item}: {item: ItemData}) => {
    return (
      <View>
        <Image
          alt="rec-image"
          source={item.image}
          style={{width: 250, height: 200, margin: 3}}
          resizeMode="cover"
        />
        <View></View>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.header_wrapper}>
        <View style={styles.inner_content}>
          <Image
            alt="location"
            source={require('../../assets/icons/location_on.png')}
            style={{width: 20, height: 20}}
          />
          <Text style={styles.location_text}>Search Location</Text>
          <Image
            alt="arrow-down"
            source={require('../../assets/icons/Alt_Arrow_Down.png')}
            style={{width: 20, height: 20}}
          />
        </View>
        <View style={styles.inner_content}>
          <Image
            alt="location"
            source={require('../../assets/icons/Shop_2.png')}
            style={{width: 20, height: 20}}
          />
          <Text style={styles.location_text}>Select Outlets</Text>
          <Image
            alt="arrow-down"
            source={require('../../assets/icons/Alt_Arrow_Down.png')}
            style={{width: 20, height: 20}}
          />
        </View>
      </View>
      <View style={styles.second_header_wrapper}>
        <Image
          alt="menu"
          source={require('../../assets/icons/Menu.png')}
          style={{width: 25, height: 25}}
        />
        <Image
          alt="logo"
          source={require('../../assets/icons/Adyar_Ananda_Bhavan_logo.png')}
        />
        <View style={styles.header_right_wrapper}>
          <Image
            alt="smile-bag"
            source={require('../../assets/icons/Bag_Smile.png')}
            style={{width: 25, height: 25}}
          />
          <Image
            alt="user"
            source={require('../../assets/icons/user_rounded.png')}
            style={{width: 25, height: 25}}
          />
        </View>
      </View>
      <View style={styles.constainer}>
        <FlatList
          ref={flatListRef}
          data={CUEROSEL_IMAGE}
          pagingEnabled
          onScroll={handleScroll}
          scrollEventThrottle={16}
          renderItem={({item, index}) => {
            return (
               <View style={{ width: SCREEN_WIDTH, alignItems: 'center', paddingVertical: 10 }} key={index}>
              <Image
                source={item.image}
                style={{ width: 250, height: 200, borderRadius: 10 }}
                resizeMode="cover"
              />
              <Text style={{ marginTop: 10 }}>Slide ID: {item.id}</Text>
            </View>
            );
          }}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {/* dots */}
         <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          {CUEROSEL_IMAGE.map((_, index) => (
            <View
              key={index}
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: index === activeSlide ? '#000' : '#ccc',
                marginHorizontal: 5,
              }}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
