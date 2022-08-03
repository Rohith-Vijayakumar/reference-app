
import React,{useState,useEffect} from 'react'
import styles from '../CustomCheckbox/styles';
import { View, Text, Pressable,TouchableOpacity,Image, SafeAreaView, FlatList, Alert } from 'react-native';


const customCheckbox = ({data,onSelect}) => {

  const [userOption, setUserOption] = React.useState(null);
  const [selected, setSelected] = useState(false)
  const [datas, setDatas] = useState([])    

  console.log("dataas",datas);

  const updateProps=()=>{
    setDatas(data)
  }

  useEffect(() => {
  updateProps()
    
  }, [])
  


  const selectHandler = (item,index) => {
    
    const newdata = datas.map(e=>{
      if (e.id==item.id) {
        return{
          ...e,
          checked:!item.checked
        }
        
      }
      else{
      return{
        ...e,
      }
    }
    })

    // console.log("new data",newdata)
    setDatas(newdata);

           
        onSelect(datas);
        // onShowSelected()
        setUserOption(item.key);
        // setSelected(!item.checked)
            
      };

  onShowSelected=(item)=>{
    const listselected = datas.filter(item=>item.checked==true)
    
    let content =''
    listselected.forEach(item => {
      content= content + `${item.id}.`+item.key +'\n'
      
    });
    Alert.alert(content)
  }
  
  renderItem=({item,index})=>{
    return(
      <TouchableOpacity
                onPress={() => selectHandler(item)}
                style={styles.container}
                activeOpacity={0.7}>
                <View >
                  {item.checked?<Image source={require('../../Assest/checkedCheckbox.png')}/>:<Image source={require('../../Assest/uncheckedCheckbox.png')}/>}
                </View>
                <Text style={styles.option}> {item.key}</Text>
            </TouchableOpacity>
     
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      style={styles.list}
      data={datas}
      extraData={data}
      renderItem={renderItem}
      keyExtractor={item=>`key-${item.id}`}
      />
    </SafeAreaView>
  )
}

export default customCheckbox