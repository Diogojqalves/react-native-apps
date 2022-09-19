import { StyleSheet, View, FlatList, Button} from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/Goalnput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText){
    setCourseGoals((currentCourseGoals) => [...courseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    setModalIsVisible(false)
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id )
    })
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}> 
    <Button title='Add New Goal' color="#945bdf" onPress={startAddGoalHandler} />
    <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={(itemData) => {
        return <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={deleteGoalHandler} />
        
      }}
      keyExtractor={ (item, index) => {
        return item.id;
      }}
      />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    appContainer: {
      flex: 1, // use the whole screen space
      paddingTop: 50,
      paddingHorizontal: 16
    },
    goalsContainer: {
      flex: 3 // 3/4 of app Container Space
    },
    goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: "#5e0acc",
      padding: 8
    },
    goalText: {
      color: "white"
    }
});
