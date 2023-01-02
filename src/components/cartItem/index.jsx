import { useState } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function CartItem({data, addAmount, removeAmount}){

    const [amount, setAmount] = useState(data?.amount)

    function handleIncrease(){
        addAmount()
        setAmount(item => item +1)
    }

    function handleRemoveProduct(){
        removeAmount()

        if(amount === 0){
            setAmount(0)
            return

        }
        setAmount(item => item -1)
    }
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.price}>R$ {data.price}</Text>
            </View>

            <View style={styles.amountContainer}>
                <TouchableOpacity style={styles.buttonAdd} onPress={handleRemoveProduct}>
                     <Text>-</Text>
                </TouchableOpacity>
                <Text style={styles.amount}>{amount}</Text>
                <TouchableOpacity style={styles.buttonAdd} onPress={handleIncrease}>
                     <Text>+</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#dfdfdf',
        borderRadius: 2,
        marginBottom: 14,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    amount: {
        marginHorizontal: 12

    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    buttonAdd: {
        paddingStart: 12,
        paddingEnd: 12,
        backgroundColor: '#168fff',
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 2, 
    }
})