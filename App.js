import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {

  const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState();
	const [totalItemCount, setTotalItemCount] = useState(0);
	
	const handleAdd = () => {

		if(inputValue != null){

			const newItem = {
				itemName: inputValue,
				quantity: 0,
				valor: null,
				isSelected: false,
			};

			const newItems = [...items, newItem];

			setItems(newItems);
			setInputValue('');
			calculateTotal();

		}else{
			alert("O campo precisa de no minimo 3 caracteres para serem inseridos!!!");
		}

	};

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity++;

		setItems(newItems);
		calculateTotal();
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity--;

		setItems(newItems);
		calculateTotal();
	};

	const toggleComplete = (index) => {
		const newItems = [...items];

		newItems[index].isSelected = !newItems[index].isSelected;

		setItems(newItems);
	};

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);

		setTotalItemCount(totalItemCount);
	};

	const handleChangeValueItem = (index, value) => {
		const _items = [...items];
		_items[index].valor = value;

		setItems(_items);
	}

	var total = items.reduce(getTotal, 0);

	function getTotal(total, item) {
		return total + (item.valor * item.quantity);
	};

  return (
    <View style={styles.container}>

      <TextInput value={inputValue} onChange={(event) => setInputValue(event.target.value)} placeholder='Adicione o produto...'/>
      <FontAwesomeIcon icon={faPlus} onClick={() => handleAdd()} />
	  
	  <View>
        {items.map((item, index) => (
          <View key={index}>
            <View onTouchStart={() => toggleComplete(index)}>

              {item.isSelected ? (

                <React.Fragment>
				<FontAwesomeIcon icon={faCheckCircle} />
				<Text>{item.itemName}</Text>
                </React.Fragment>

              ) : (

                <React.Fragment>
				<FontAwesomeIcon icon={faCircle} />
				<Text>{item.itemName}</Text>
                </React.Fragment>

              )}

            </View>

            <View>
            	R$ <TextInput placeholder='0,00' value={item.valor} onChange={(event) => { handleChangeValueItem(index, event.currentTarget.value) }}/>
            
			</View>
			  	<Button onPress={() => handleQuantityDecrease(index)} title="-">
				  <FontAwesomeIcon icon={faChevronLeft} onPress={() => handleQuantityDecrease(index)} />
			  	</Button>

              		<Text>{item.quantity}</Text>

              	<Button onPress={() => handleQuantityIncrease(index)} title="+">
				  <FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
				</Button>
          </View>

        ))}
        <View>Qtotal: {totalItemCount}</View>
        <View>R$: {total.toFixed(2)}</View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
