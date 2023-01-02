import { useContext } from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import { CartContext } from '../../contexts/CartContext'
import CartItem from '../../components/cartItem'


export default function Cart(){

   const { cart, result, addItemCart, removeItemCart} = useContext(CartContext)
  return(
    <View style={styles.container}>
      <FlatList 
       data={cart}
       showsHorizontalScrollIndicator={false}
       ListEmptyComponent={() => <Text style={{textAlign: 'center', fontSize: 18}}>Nenhum item no carinho</Text>}
       keyExtractor={ (item) => String(item.id)}
       renderItem={ ({item}) => ( 
       <CartItem 
        data={item}
        addAmount={ () => addItemCart(item)}
       removeAmount={() => removeItemCart(item)}/>)}
       ListFooterComponent={() =>  
        <Text style={{fontSize: 18, fontWeight: 'bold', marginTop:24 }}>Total R$ {result}</Text>}
       
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fafafa',
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14
  }
})