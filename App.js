import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheckCircle, faPlus, faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";


const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [totalItemCount, setTotalItemCount] = useState(0);

  const handleAdd = () => {

    const newItem = {
      itemName: inputValue,
      quantity: 0,
      valor: null,
      isSelected: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setInputValue("");
    calculateTotal();

  };

  const completeTask = (index) => {
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;

    setItems(newItems);
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

  const handleChangeValueItem = (index, value) => {
    const _items = [...items];
    _items[index].valor = value;

    setItems(_items);
  };

  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalItemCount(totalItemCount);
  };


  var total = items.reduce(getTotal, 0);

  function getTotal(total, item) {
    return total + item.valor * item.quantity;
  };

  return (

    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Lista da Feira do dia</Text>

          <View >Qtotal: {totalItemCount}</View>
          <View >R$: {total.toFixed(2)}</View>

          <View style={styles.items}>
            {
              items.map((item, index) => {
                return (

                  <View style={styles.item}>
                    <TouchableOpacity onPress={() => completeTask(index)}>
                      <View style={styles.itemLeft}>
                        {item.isSelected ? (
                          <React.Fragment>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <Text style={styles.itemText2}>{item.itemName}</Text>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <FontAwesomeIcon icon={faCircle} />
                            <Text style={styles.itemText}> {item.itemName}</Text>
                          </React.Fragment>
                        )}
                      </View>
                    </TouchableOpacity>
                    <View style={styles.quantity}>
                    <View style={styles.valor_box}>
                      
                      R$:
                    <TextInput
                      placeholder="0,00"
                      value={item.valor}
                      onChange={(event) => {
                        handleChangeValueItem(index, event.currentTarget.value);
                      }}
                      style={styles.valor}
                    />
                    
                    </View>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      onClick={() => handleQuantityIncrease(index)}
                    />
                    <Text>{item.quantity}</Text>
                    <FontAwesomeIcon
                      icon={faMinusCircle}
                      onClick={() => handleQuantityDecrease(index)}
                    />
                    </View>
                    </View>
                  


                )
              })
            }
          </View>
        </View>
      </ScrollView >

      <View
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Adicione o produto..."
        />
        
        <TouchableOpacity onPress={() => handleAdd()}>
          <View style={styles.addWrapper}>
          <FontAwesomeIcon icon={faPlus} style={styles.addText} />
          </View>
        </TouchableOpacity>

      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    
  },
  itemText2: {
    maxWidth: '80%',
    textDecorationLine: "line-through"
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  valor_box: {
    display: 'flex',
    borderRadius: '60px',

    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'right',
  },
  quantity: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  valor: {
    borderRadius: "50px",
    minWidth: "70px",
    width: "100px",
    heigth: "40px",
    backgroundColor: '#FFF',

  }


});

export default App;
