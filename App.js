import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

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
                onTouchStart={() => toggleComplete(index)}
                style={styles.item_name}
              >
                {item.isSelected ? (
                  <React.Fragment>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <Text style={styles.complete}>{item.itemName}</Text>
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

                <Button onPress={() => handleQuantityDecrease(index)} title="-">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onPress={() => handleQuantityDecrease(index)}
                  />
                </Button>

                <Text>{item.quantity}</Text>

                <Button onPress={() => handleQuantityIncrease(index)} title="+">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={() => handleQuantityIncrease(index)}
                  />
                </Button>
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
  container: {
    flex: 1,
    backgroundColor: "#6554bb",
    alignItems: "center",
    justifyContent: "center",
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
});

export default App;
