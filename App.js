import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheckCircle, faPlus, faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";


const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [totalItemCount, setTotalItemCount] = useState(0);

  const handleAdd = () => {
    if (inputValue != null) {
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
    } else {
      alert(
        "O campo precisa de no minimo 3 caracteres para serem inseridos!!!"
      );
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
  };

  var total = items.reduce(getTotal, 0);

  function getTotal(total, item) {
    return total + item.valor * item.quantity;
  }

  return (
    <View style={styles.container}>
      <View style={styles.main_container}>
        <View style={styles.add_item_box}>
          <TextInput
            style={styles.add_item_input}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Adicione o produto..."
          />
          <FontAwesomeIcon icon={faPlus} onClick={() => handleAdd()} />
        </View>
        <View style={styles.item_list}>
          {items.map((item, index) => (
            <View key={index} style={styles.item_container}>
              <View
                onClick={() => toggleComplete(index)}
                style={styles.item_name}
              >
                {item.isSelected ? (
                  <React.Fragment>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <Text style={styles.completed}>{item.itemName}</Text>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <FontAwesomeIcon icon={faCircle} />
                    <Text>{item.itemName}</Text>
                  </React.Fragment>
                )}
              </View>

              <View style={styles.quantity}>
                <View style={styles.valor_item_box}>
                  R$:
                  <TextInput
                    placeholder="0,00"
                    value={item.valor}
                    onChange={(event) => {
                      handleChangeValueItem(index, event.currentTarget.value);
                    }}
					          style={styles.valor_item_input}
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
          ))}
        </View>
        <View style={styles.total}>Qtotal: {totalItemCount}</View>
        <View style={styles.valor}>R$: {total.toFixed(2)}</View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#7f39fb",
    color: "#fff",
    width: "100%",
    height: 30
  },
  container: {
    flex: 1,
    backgroundColor: "#6554bb",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  app_background: {
    backgroundColor: "6554bb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    innerHeight: "100",
  },
  main_container: {
    backgroundColor: "#f5f6fa",
    width: "500px",
    height: "min-content",
    borderradius: "5px",
    padding: "20px",
    boxshadow: "10px 10px 26px 0px rgba(0, 0, 0, 0.35)",
  },
  title: {
    textAlign: "center"
  },
  
  add_item_box: {
    flexDirection: "row",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  add_item_input: {
    borderWidth:1,
    borderColor: "#7f39fb",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: "80%"
  },
  
  item_list: {
    width: "100%",
    display: "flex"
  },
  
  item_container: {
    display: "flex",
    alignitems: "center",
    justifycontent: "space-between",
    padding: "20px 0 20px 0",
    borderbottom: "1px #6554bb solid"
  },
  
  item_name: {
    cursor: "pointer"
  },

  valor_item_box: {
    display: "flex",
    background: "#6554bb",
    borderradius: "50px",
    color: "#bab1e9",
    display: "inline",
    alignitems: "flex-end",
    padding: "5px",
    justifycontent: "right"
  },
  
  
  valor_item_input: {
    border: "1px solid #6554bb",
    background: "#6554bb",
    borderradius: "50px",
    color: "#c3bbe9",
    minwidth: "70px",
    width: "100px",
    height: "40px"
  },
  
  item_action_buttons: {
    /* width: 30%; */
    display: "flex",
    justifycontent: "space-between"
  },
  
  remove_button: {
    color: "#c3bbe9",
    backgroundcolor: "red"
  },
  
  total: {
    float: "right",
    padding: "10px"
  },
  
  valor: {
    float: "right",
    padding: "10px"
  },
  
  quantity: {
    display: "flex",
    alignitems: "center",
    border: "1px solid #6554bb",
    background: "#6554bb",
    borderradius: "50px",
    fontsize: "12px",
    color: "#c3bbe9",
    minwidth: "70px",
    justifycontent: "space-between"
  },
  
  button: {
    background: "transparent",
    border: "none",
    margin: "3px",
    color: "#c3bbe9"
  },
  
  completed: {
    textDecorationLine: "line-through"
  }
});

export default App;
