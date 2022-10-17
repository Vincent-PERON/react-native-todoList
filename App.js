import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import AppBar from "./src/components/AppBar";
import Todo from "./src/components/Todo";
import TodoList from "./src/components/TodoList";

export default function App() {
  const [title, setTitle] = useState("");

  // iniitalize empty object todo
  const [todo, setTodo] = useState({});

  // Initalize empty array to store todos
  const [todos, setTodos] = useState([]);

  // function to add todo object in todo list
  const addTodo = () => {
    if (title.length > 0) {
      // Add todo to the list
      setTodos([...todos, { key: Date.now(), name: title, isChecked: false }]);
      // clear the value of the textfield
      setTitle("");
    }
  };

  // function to mark todo as checked or unchecked
  const checkTodo = id => {
    // loop through todo list and look for the the todo that matches the given id param
    // update the state using setTodos function
    setTodos(
      todos.map(todo => {
        if (todo.key === id) {
          todo.isChecked = !todo.isChecked;
        }
        return todo;
      })
    );
  };

  // function to delete todo from the todo list
  const deleteTodo = id => {
    // loop through todo list and return todos that don't match the id
    // update the state using setTodos function
    setTodos(todos.filter(todo => {
      return todo.key !== id;
    }));
  };

  useEffect(() => {
    console.log(todos.length, "TodoList length");
    //console.log(todos);
  }, [todos]);

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}></View>
      <AppBar />
      <ScrollView style={styles.list}>
        {todos.map(todo => (
          <TodoList
            key={todo.key}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ScrollView>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >

      <View style={styles.todo}>
        <TextInput
          placeholder="Article"
          value={title}
          onChangeText={value => setTitle(value)}
          style={styles.textbox}
        />

        <TouchableOpacity onPress={() => addTodo()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#E9EAEE",
    color: "#fff",
    width: "100%",
    height: 30
  },
  container: {
    flex: 1,
    backgroundColor: "#E9EAEE",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  todo: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
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

  textbox: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: "80%",
  },



list: {
  paddingTop: 30,
  
},

button: {
  width: 60,
  height: 60,
  borderRadius: 10,
  },

});
