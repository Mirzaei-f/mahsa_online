     
import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  Text,  Alert,ActivityIndicator,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Checkbox, RadioButton } from 'react-native-paper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { usefetchuser } from './usefetchuser';

const width = Dimensions.get('window').width;

const Q1 = (props) => {
  const { id } = props.route.params;
  console.log('id questions', id);

  const [data, setdata] = useState([]);
  const navigation = useNavigation();
  const [messages, setmessages] = useState('');
  const { request } = usefetchuser('diet/get-regime-questions');
  const {request: requestsend } = usefetchuser('diet/get-answers');
  const [isLoading, setIsLoading] = useState(true)
  const [numericInputs, setNumericInputs] = useState([]);



  const setAPI = async () => {
    try {
      setIsLoading(true);

      const res = await request({
        id: id,
      });

      if (res.error) {
        Alert.alert(res.message);
      } else {
        if (!res.data || res.data === undefined || typeof res.data === 'undefined') {
          setmessages(' پکیج ای برای نمایش وجود ندارد');
        } else {
          const questionsData = res.data;

          if (questionsData && questionsData.length > 0) {
            const optionsData = questionsData.map((question) => question.options);

            setdata(questionsData);
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
      console.error('Full error response:', error.response);
      setIsLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setAPI();
    }, [])
  );




  const resetform = () => {

     setNumericInputs([]);

  }




  const handleSubmit = () => {

    
    console.log("numericInputs",numericInputs)

    resetform()

  }


////////////////////////////////////sendAnswersToServer////////////////////////////////////////////////////////////////




// ارسال جواب به سمت سرور با استفاده از Promise
const sendAnswersToServer =  async () => {
  return new Promise( async(resolve, reject) => {
    // اعتبارسنجی پاسخ به سوالات الزامی
    // const requiredQuestions = data.filter(question => 
    //   question.required === "1"
    // );

    const requiredQuestions = data.filter(question =>
      (
        (question.type === 'text' && question.options.length === 0) ||
        (question.type === 'number' && question.options.length === 0) ||
        (question.type === 'radio' && question.options.length > 0) ||
        (question.type === 'checkbox')
      )
    );

   // console.log("requiredQuestions",requiredQuestions)
    
    const finalRequiredQuestions = requiredQuestions.filter(question => question.required === "1");
    
  ///  console.log("finalRequiredQuestions",finalRequiredQuestions)
    

    // finalRequiredQuestions.forEach(requiredQuestion => {
    //   // اینجا می‌توانید کارهای مورد نیاز برای هر سوال انجام دهید
    //   console.log(`سوال "${requiredQuestion.title}" با شناسه "${requiredQuestion.id}" انتخاب شده است.`);
    //   Alert.alert(`لطفا به سوال "${requiredQuestion.title}" پاسخ دهید.`);
    // });
  //  console.log("numericInputs",numericInputs)
    finalRequiredQuestions.forEach(requiredQuestion22 => {
     // console.log("****************************************************************************")
     // console.log("numericInputs.requiredQuestion22.id",requiredQuestion22.id)
     //console.log("numericInputs.requiredQuestion22.id",numericInputs[requiredQuestion22.id])
      if(numericInputs[requiredQuestion22.id]===undefined){
        Alert.alert(`لطفا به سوال "${requiredQuestion22.title}" پاسخ دهید.`);
             return;
      }
      console.log("success",)
              
    });
    


sendAnswer()
  //  resetform();
  

  });
};
/////////////////////////////////////////////////////




const sendAnswer=async()=>{

  console.log(" numericInputs",  numericInputs)
  await requestsend(
   
   JSON.stringify( numericInputs),
  ).then(response=>{
     //setchanged(false)
     console.log('responseupdate---->',response)
     console.log('responseupdate---->',response.data)
  
     
  })
  }

/////////////////////////////////////////////////////////////////////////////////////////////


  return (

    
    <View>
          
          {/* //{isLoading &&   <ActivityIndicator size={40} color="#00f" style={{ flex: 1 }} />} */}
          {isLoading ? (
        <ActivityIndicator size={40} color="#00f" style={{ flex: 1 }} />
      ) : (
      <ScrollView>
        {data.map((question) => (
          <View key={question.id}>




              
{question.type === 'number' && question.options.length === 0 && (
        <>


          <Text style={styles.title}>{question.title}</Text>
         
          <TextInput
            keyboardType="numeric"
           // onChangeText={(text) => handleChangeNumericInput(question.id, text)}
            value={numericInputs[question.id] || ''}
            style={styles.inputs}
            onChangeText={(text) => {
              setNumericInputs({
                ...numericInputs,
                [question.id]: text,
              });
         
            }}
          />
          

          {/* {isQuestionAnswered(question.id) || (
          <Text style={{ color: 'red' }}>این فیلد نمی‌تواند خالی باشد</Text>
        )} */}
            

        </>
      )}




{question.type === 'text' && question.options.length === 0 && (
  <View>
    <Text style={styles.title}>{question.title}</Text>
    <TextInput
      value={numericInputs[question.id] || ''}
      style={styles.inputs}
      onChangeText={(text) => {
        setNumericInputs({
          ...numericInputs,
          [question.id]: text,
        });
   
      }}
    />
   {/* {isQuestionAnswered(question.id)  || (
         <Text style={{ color: 'red' }}>
         این فیلد نمی‌تواند خالی باشد
            </Text>
        )}  */}
        
            
  </View>
)}










{question && question.type === 'radio' && question.options.length>0 &&  (
  <>
    <Text style={styles.title}>{question.title}</Text>
    <View style={styles.radios}>
      {question.options.map(option =>
        <View key={option.id}>
          <RadioButton.Item
            label={option.content}
            value={option.id}
            status={numericInputs[question.id] === option.id ? 'checked' : 'unchecked'}
            onPress={() => {
              setNumericInputs(prevState => ({
                ...prevState,
                [question.id]: option.id,
              }));
            }}
          />
        </View>
      )}
    </View>
  </>
)}




{/* 

{question && question.type === "checkbox" && (
  <>
    <Text style={styles.title}>{question.title}</Text>
    <View style={styles.radios}>
      {question.options.map(option =>
        <View key={option.id}>
          <Checkbox.Item
            label={option.content}
            status={numericInputs[question.id] && numericInputs[question.id] === option.id ? 'checked' : 'unchecked'}
            onPress={() => {
              setNumericInputs(prevState => ({
                ...prevState,
                [question.id]: option.id,
              }));
            }}                                                          
          />
        </View>
      )}
    </View>
  </>
)} */}


{question && question.type === "checkbox" && (
  <>
    <Text style={styles.title}>{question.title}</Text>
    <View style={styles.radios}>
      {question.options.map(option => (
        <View key={option.id}>
          <Checkbox.Item
              label={option.content}  
            status={numericInputs[question.id] && numericInputs[question.id].includes(option.id) ? 'checked' : 'unchecked'}
            onPress={() => {
              setNumericInputs(prevState => {
                const selectedOptions = prevState[question.id] || [];
                const newSelectedOptions = selectedOptions.includes(option.id)
                  ? selectedOptions.filter(item => item !== option.id)
                  : [...selectedOptions, option.id];

                return {
                  ...prevState,
                  [question.id]: newSelectedOptions,
                };
              });
            }}
          />
          {/* <Text>{option.content}</Text> */}
        </View>
      ))}
    </View>
  </>
)}

               







          </View>
        ))}

        <TouchableOpacity style={{ alignSelf: 'center' }}
        // onPress={handleSubmit}
         onPress={sendAnswersToServer}
      
        >
          <Text style={{ color: 'red', fontSize: RFValue(22) }}>ارسال اطلاعات</Text>
        </TouchableOpacity>
      </ScrollView>
      )}
    </View>

    
  );
};

export { Q1};


const styles=StyleSheet.create({



inputs:{
  width:width-50,alignSelf:"center",backgroundColor:"#fff", textAlign: "center",  borderRadius: 20,fontSize:RFValue(16),margin:5, // textAlignVertical: "center"
},
radios:{ flexDirection: 'row-reverse',alignItems: 'center',
 //justifyContent:"space-around" ,
flexWrap:"wrap"
},
title:{
 alignSelf: 'flex-end', padding: 15, fontSize: RFValue(15) ,fontWeight:"bold",color:"#000"
},

})