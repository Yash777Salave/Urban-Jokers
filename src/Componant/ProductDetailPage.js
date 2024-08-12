import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductInfoTXTCard from './ProductInfoTXTCard';
import GuranteeTXTproDetailsCard from './GuranteeTXTproDetailsCard';

const ProductDetailPage = ({route}) => {
  const {image, name, price, originalPrice, percentTag} = route.params;

  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  useEffect(() => {
    setTotalPrice(price * count);
  }, [count]);
  const increment = () => {
    if (count < 10) setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
      <ScrollView>
        <View>
          <View>
            <Image source={image} style={styles.IMG} />
          </View>
          <View style={styles.DetailContainer}>
            <Text style={styles.name}>{name}</Text>
            <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.originalPrice}>{originalPrice}</Text>
              <Text style={styles.percentTag}>{percentTag}</Text>
            </View>
            <View style={styles.TaxTitleCOntainer}>
              <Text style={styles.Tax}>(inclusive of all taxes)</Text>
            </View>
          </View>
          <View style={styles.SizeContainer}>
            <Text style={styles.SizeTXT}>Sizes</Text>
            <TouchableOpacity>
              <Text style={styles.SizeParameter}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.SizeParameter}>XL</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.SizeParameter}>XXL</Text>
            </TouchableOpacity>
            <TouchableOpacity></TouchableOpacity>
          </View>
          <View style={styles.QTYContainer}>
            <Text style={styles.QtyTXT}>Qty.</Text>
            <TouchableOpacity
              style={styles.AdditonBTNcontainer}
              onPress={() => {
                decrement();
              }}>
              <Text style={styles.AdditonBTN}>—</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.QtyValue}>{count}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.AdditonBTNcontainer}
              onPress={() => {
                increment();
              }}>
              <Text style={styles.AdditonBTN}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.DeliveryContainer}>
            <Image
              source={require('../../assets/ICONS/assured.png')}
              style={{height: 120, width: 120}}
            />
            <Image
              source={require('../../assets/ICONS/return.png')}
              style={{height: 100, width: 100}}
            />
            <Image
              source={require('../../assets/ICONS/homeD.png')}
              style={{height: 120, width: 120}}
            />
          </View>
          <View style={styles.DeliveryTXTContainer}>
            <Text style={styles.DeliveryTXT}>Delivery by : Aug 9 - Aug 11</Text>
          </View>
          <View style={styles.ProductInfoTXTContainer}>
            <Text style={styles.ProductInfoTXT}>Product Info and Care</Text>
          </View>
          <View>
            <ProductInfoTXTCard txtQue={'Fabric'} txtAns={'Cotton'} />
            <ProductInfoTXTCard
              txtQue={'Weaving Style'}
              txtAns={'Single T-shirt'}
            />
            <ProductInfoTXTCard txtQue={'Type'} txtAns={'Stitched'} />
            <ProductInfoTXTCard txtQue={'Color'} txtAns={'White'} />
            <ProductInfoTXTCard txtQue={'Pattern'} txtAns={'Printed'} />
            <ProductInfoTXTCard txtQue={'Category'} txtAns={'Tees'} />
            <ProductInfoTXTCard
              txtQue={'Wash care'}
              txtAns={'Hand Wash With Mild detergent'}
            />
            <ProductInfoTXTCard txtQue={'Mfg. Place'} txtAns={'Delhi'} />
            <ProductInfoTXTCard txtQue={'Brand'} txtAns={'Gucci'} />
          </View>
          <View style={styles.GuranteeContainer}>
            <Image
              source={require('../../assets/ICONS/cashback.png')}
              style={styles.ICONS}
            />
            <GuranteeTXTproDetailsCard txt={'100% Money Back guarantee'} />
          </View>
          <View style={styles.GuranteeContainer}>
            <Image
              source={require('../../assets/ICONS/free-delivery.png')}
              style={styles.ICONS}
            />
            <GuranteeTXTproDetailsCard txt={'Free Shipping'} />
          </View>
          <View style={styles.GuranteeContainer}>
            <Image
              source={require('../../assets/ICONS/insurance.png')}
              style={styles.ICONS}
            />
            <GuranteeTXTproDetailsCard txt={'Urban Jokers Fulfilled'} />
          </View>
          <View style={styles.GuranteeContainer}>
            <Image
              source={require('../../assets/ICONS/add.png')}
              style={styles.ICONS}
            />
            <GuranteeTXTproDetailsCard txt={'Chat with us'} />
          </View>

          <View>
            {/* <CommonCard Data={newItems} /> */}
            {/* <TrendingCard data={newItems} /> */}
          </View>
        </View>
      </ScrollView>
      <View style={styles.StickyFooter}>
        <View>
          <Text style={styles.TotalTXT}>Total :</Text>
          <Text style={styles.TotalValue}>{totalPrice}/-</Text>
        </View>
        <TouchableOpacity style={styles.Bag}>
          <Text style={styles.BagTXT}>Add to Bag</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailPage;

const styles = StyleSheet.create({
  IMG: {
    width: '100%',
    height: 400,
  },
  name: {
    fontSize: 20,
    color: '#333',
  },
  DetailContainer: {
    padding: 10,
  },
  TaxTitleCOntainer: {
    paddingHorizontal: 10,
  },
  price: {
    fontSize: 23,
    color: '#333',
  },
  originalPrice: {
    fontSize: 22,
    textDecorationLine: 'line-through',
    color: '#C0C0C0',
  },
  percentTag: {
    fontSize: 23,
    color: '#ff6347',
  },
  Tax: {
    fontSize: 19,
    color: '#C0C0C0',
  },
  SizeContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E5E4E2',
  },
  SizeParameter: {
    borderWidth: 1,
    padding: 10,
    // alignItems: 'center',
    textAlign: 'center',
    height: 45,
    width: 49,
    fontSize: 16,
    color: '#333',
    borderRadius: 7,
  },
  QtyValue: {
    borderWidth: 0.7,
    padding: 8,
    alignItems: 'center',
    textAlign: 'center',
    height: 40,
    width: 40,
    fontSize: 17,
    color: '#ff6347',
    borderRadius: 7,
    backgroundColor: '#ffff',
    borderColor: '#ff6347',
  },
  AdditonBTN: {
    fontSize: 22,
    // borderWidth: 0.5,
    textAlign: 'center',
    // padding: 5,
    width: 35,
    paddingHorizontal: 10,
    borderRadius: 7,
    color: '#ff6347',
    backgroundColor: '#ffff',
    // borderColor: '#ff6347',
  },
  AdditonBTNcontainer: {},

  SizeTXT: {
    fontSize: 20,
    color: '#333',
    marginHorizontal: 10,
  },
  QtyTXT: {
    fontSize: 20,
    color: '#333',
    marginHorizontal: 15,
  },
  QTYContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    backgroundColor: '#E5E4E2',
    alignItems: 'center',
  },
  DeliveryContainer: {
    flexDirection: 'row',
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    borderColor: '#E5E4E2',
  },
  DeliveryTXTContainer: {
    padding: 10,
    alignItems: 'center',
  },
  DeliveryTXT: {
    fontSize: 20,
    backgroundColor: '#C6FCFF',
    color: '#333',
    padding: 6,
    textAlign: 'center',
    borderRadius: 7,
    paddingHorizontal: 15,
  },
  ProductInfoTXTContainer: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#E5E4E2',
  },
  ProductInfoTXT: {
    fontSize: 25,
    color: '#333',
  },
  ICONS: {
    height: 33,
    width: 33,
  },
  GuranteeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    borderColor: '#E5E4E2',
    borderTopWidth: 1,
  },
  StickyFooter: {
    flexDirection: 'row',
    // height: 90,
    padding: 10,
    // backgroundColor: 'red',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderColor: '#A8A8A8',
    alignItems: 'center',
  },
  BagTXT: {
    fontSize: 20,
    // borderWidth: 1,
    textAlign: 'center',
    alignItems: 'center',
    padding: 5,
    color: '#333',
  },
  Bag: {
    backgroundColor: '#FFD700',
    borderRadius: 5,
    width: 150,
    elevation: 2,
  },
  TotalTXT: {
    color: '#333',
    fontSize: 15,
  },
  TotalValue: {
    color: '#ff6347',
    fontSize: 20,
  },
});
