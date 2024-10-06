                                  
import React, {useState,useEffect, useContext} from 'react';
import {
    SafeAreaView,
   // Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
   TextInput,
    ScrollView,
    Image,BackHandler, Alert, FlatList, moment, unix, Animated, PermissionsAndroid,
    //Button

} from 'react-native';

import { s } from "react-native-wind";
import { Buttonview } from './components/Buttonview';
import { Need } from './components/Need'; 
import { Package } from './components/Package'; 
import { Headernew } from './components/Headernew';
import {RFValue} from "react-native-responsive-fontsize";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { usefetchuser } from './usefetchuser';
import { ActivityIndicator } from 'react-native-paper';
import { JDate ,JTime} from './components/JDate';
//import Carousel from 'react-native-snap-carousel';
import {Formik} from "formik";
import { RadioButton, Text, Button,Checkbox } from 'react-native-paper';
import * as Yup from "yup";

const   width=Dimensions.get("window").width;








const Questionsdiet = (props) => {

  const {id}=props.route.params
     console.log("id questions",id)



     const [data,setdata]=useState([])
     const navigation=useNavigation()
     const [messages,setmessages]=useState('')
     const {request} = usefetchuser('diet/get-regime-questions')
     const [isLoading, setIsLoading] = useState(true)

//////////////////////////////////////////////////////////////////////


// const setAPI = () => {
//   return new Promise(async (resolve, reject) => {
//     try {

//       setIsLoading(true);
//       const res = await request({
//         id:id,
//       });

//       console.log('---diet/get-regime-questions----->', res.data);

//       if (res.error) {
//         Alert.alert(res.message);
//         reject(res.message);
//       } else {
//         if (
//           !res.data ||
//           res.data=== undefined ||
//           typeof res.data === 'undefined'
//         ) {
//           setmessages(' پکیج ای برای نمایش وجود ندارد');
//           resolve('No package available for display');
//         } else {


          
//         setdata( res.data);
//             resolve( res.data);
//         //  setdata(res.data.package);
//         // resolve(res.data.package);
//           setIsLoading(false);
//         }
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);

//       // Log the full error response for further investigation
//       console.error('Full error response:', error.response);

//       // Handle the error appropriately, e.g., show an error message to the user
//       reject(error);
//       setIsLoading(false);
//       setIsLoading(false);
//     }
//   });
// };
//////////////////////////////////////////////////////////////////////

  const [options, setoptions] = useState([]);

  const setAPI = () => {
    return new Promise(async (resolve, reject) => {
      try {
        setIsLoading(true);

        const res = await request({
          id: id,
        });

       // console.log('---diet/get-regime-questions----->', res.data[5].type);

        if (res.error) {
          Alert.alert(res.message);
          reject(res.message);
        } else {
          if (
            !res.data ||
            res.data === undefined ||
            typeof res.data === 'undefined'
          ) {
            setmessages(' پکیج ای برای نمایش وجود ندارد');
            resolve('No package available for display');
          } else {
            const questionsData = res.data; // اطلاعات مربوط به سوالات

            // اگر سوالات دارای گزینه‌ها هستند
            if (questionsData && questionsData.length > 0) {
              const optionsData = questionsData.map((question) => question.options); // آرایه‌ای از گزینه‌ها

             // console.log('Questions Data:', questionsData);
              //console.log('Options Data:', optionsData);

              // اینجا می‌توانید اطلاعات را در state یا متغیرهای دیگر ذخیره کنید
              setdata(questionsData);
              setoptions(optionsData);

              resolve(questionsData);
              setIsLoading(false);
            } else {
              // اگر سوالات گزینه‌هایی ندارند
              setIsLoading(false);
            }
          }
        }
      } catch (error) {
        console.error('An error occurred:', error);

        // Log the full error response for further investigation
        console.error('Full error response:', error.response);

        // Handle the error appropriately, e.g., show an error message to the user
        reject(error);
        setIsLoading(false);
      }
    });
  };

  
//   return (
//     <View>
//       {/* اینجا می‌توانید از مقادیر state برای نمایش داده‌ها استفاده کنید */}
//       <Text>Data: {JSON.stringify(data)}</Text>
//       <Text>Options: {JSON.stringify(options)}</Text>
//       {/* اضافه کردن کد JSX دیگر بر اساس نیاز */}
//     </View>
//   );
// };

// export default YourComponent;



//////////////////////////////////////////////////////////////////////////

useFocusEffect(
React.useCallback(()=>{
   setAPI()

},[])
)
////////////////////////////////////////////////////////////

const initialValues = {};

// const validationSchema = Yup.object().shape({
//   age: Yup.number().required('وارد کردن سن الزامی است'),
//   height: Yup.number().required('وارد کردن قد الزامی است'),
//   weight: Yup.number().required('وارد کردن وزن الزامی است'),
//   // ... قوانین اعتبارسنجی برای دیگر سوالات
// });

// const onSubmit = (values) => {
//   console.log('اطلاعات ارسالی به API:', values);
//   // در اینجا می‌توانید از axios یا fetch برای ارسال اطلاعات به API استفاده کنید
// };


const validationSchema = Yup.object().shape({
  selectedOption: Yup.string().required('Please select an option'),
});

const handleSubmit1 = (values) => {
  console.log('Selected Option:', values.selectedOption);
  // Add your form submission logic here
  console.log("valuse......",values);
  console.log("valuse......");
};
///////////////////////////////////////////////////////////






const handleSubmit = (values) => {
  const dataToSend = data.map((question) => ({
    questionNumber: question.id,
   value: values[question.title.toLowerCase()],
   // value: values,
 
  }));



  console.log('Data to send:', dataToSend);
};






////////////////////////////////////////////////////////













  return (
    <View>
       <Formik
        initialValues={{ selectedOption:'' ,selectedOptionsex:'',selectedOptionregim:'',selectedOptionregim1:'',selectedOptioncheckup:'',selectedOptiondalil:'',
        selectedOptiondorhami:'',selectedOptionimportant:'',score:'',
        tall:'',weight:"",moch:"",clockexersise:'',illness:"",city:"",purpose:"",mokamel:"",asib:"",career:"",sillness:"",rva:"",agree:""
        //selectedOptiondorhamii:""
      }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
        <ScrollView > 
          {data.map((question) => (
            <View key={question.id}>
              <Text  style={{alignSelf:"flex-end",padding:20,fontSize:RFValue(16)}}>{question.title}</Text>
               




              {question.type === 'number' &&  question.options.length === 0 && question.title=== "قد" && (
                <TextInput
                  keyboardType="numeric"
                  onChangeText={handleChange('tall')}
                  onBlur={handleBlur('tall')}
                  value={values.tall}
                  placeholder='قد...'
                 placeholderTextColor="#f50"
                  
                  style={{width:width-50,alignSelf:"center",backgroundColor:"#fff", textAlign: "center", 
                  // borderBottomLeftRadius: 20, // عدد مورد نظر برای گوشه پایین سمت چپ
                //  borderBottomRightRadius: 20 , borderTopLeftRadius: 10, // عدد مورد نظر برای گوشه پایین سمت چپ
                //  borderTopRightRadius: 20, underlineColorAndroid: "transparent" ,// یا می‌توانید از "rgba(0,0,0,0)" هم استفاده کنید
                  borderRadius: 20,fontSize:RFValue(16),margin:20,
                 // textAlignVertical: "center"
                }}
                />
              )} 




{question.type === 'number' &&  question.options.length === 0 && question.title==="وزن" && (
                <TextInput
                  keyboardType="numeric"
                  onChangeText={handleChange('weight')}
                  onBlur={handleBlur('weight')}
                  value={values.weight}
                  placeholder='وزن...'
                 placeholderTextColor="#f50"
                  
                  style={{width:width-50,alignSelf:"center",backgroundColor:"#fff", textAlign: "center", 
                 
                  borderRadius: 20,fontSize:RFValue(16),margin:20,
                 // textAlignVertical: "center"
                }}
                />
              )} 






{question.type === 'number' &&  question.options.length === 0 && question.title==="دور مچ دست" && (
                <TextInput
                  keyboardType="numeric"
                  onChangeText={handleChange('moch')}
                  onBlur={handleBlur('moch')}
                  value={values.moch}
                  placeholder='دور مچ دست ...'
                 placeholderTextColor="#f50"
                  
                  style={{width:width-50,alignSelf:"center",backgroundColor:"#fff", textAlign: "center", 
                 
                  borderRadius: 20,fontSize:RFValue(16),margin:20,
                 // textAlignVertical: "center"
                }}
                />
              )} 






            {question.type === "text" &&  question.options.length === 0 && question.title==="ساعت دقیق تمرین" && (
                <TextInput
           
                  onChangeText={handleChange('clockexersise')}
                  onBlur={handleBlur('clockexersise')}
                  value={values.clockexersise}
                  placeholder='ساعت دقیق تمرین...'
                 placeholderTextColor="#f50"
                  
                  style={{width:width-50,alignSelf:"center",backgroundColor:"#fff", textAlign: "center", 
                 
                  borderRadius: 20,fontSize:RFValue(16),margin:20,
                 // textAlignVertical: "center"
                }}
                />
              )} 







            {question.type === "text" &&  question.options.length === 0 && question.title==="آیا بیماری خاصی  دارید؟" && (
                <TextInput
              
                  onChangeText={handleChange('illness')}
                  onBlur={handleBlur('illness')}
                  value={values.illness}
                  placeholder='آیا بیماری خاصی  دارید؟...'
                 placeholderTextColor="#f50"
                  
                  style={{width:width-50,alignSelf:"center",backgroundColor:"#fff", textAlign: "center", 
                 
                  borderRadius: 20,fontSize:RFValue(16),margin:20,
                 // textAlignVertical: "center"
                }}
                />
              )} 


{question.type === "text" &&  question.options.length === 0 && question.title==="ساکن کدام شهر یا کشور هستید ؟" && (
                <TextInput
              
                  onChangeText={handleChange('city')}
                  onBlur={handleBlur('city')}
                  value={values.city}
                  placeholder='شهر محل سکونت...'
                 placeholderTextColor="#f50"
                  
                  style={{width:width-50,alignSelf:"center",backgroundColor:"#fff", textAlign: "center", 
                 
                  borderRadius: 20,fontSize:RFValue(16),margin:20,
                 // textAlignVertical: "center"
                }}
                />
              )} 

            {question.type === "text" &&  question.options.length === 0 && question.title==="هدف شما از رژیم گرفتن و ورزش کردن چیست ؟" && (
                <TextInput
             
                  onChangeText={handleChange('purpose')}
                  onBlur={handleBlur('purpose')}
                  value={values.purpose}
                  placeholder="هدف شما از رژیم گرفتن و ورزش کردن ؟"
                 placeholderTextColor="#f50"
                 numberOfLines={2}
                  style={{width:width-50,alignSelf:"center",backgroundColor:"#fff", textAlign: "center", 
                 
                  borderRadius: 20,fontSize:RFValue(16),margin:20,
                 // textAlignVertical: "center"
                }}
                />
              )} 





            {question.type === "text" &&  question.options.length === 0 && question.title==="ایا  اسیب خاصی دارید لطفا توضیح دهید ؟ " && (
                <TextInput
            
                  onChangeText={handleChange('asib')}
                  onBlur={handleBlur('asib')}
                  value={values.asib}
                  numberOfLines={2}
                  placeholder="..."
                 placeholderTextColor="#f50"
                 
                  style={{width:width-50,alignSelf:"center",backgroundColor:"#fff", textAlign: "center", 
                 
                  borderRadius: 20,fontSize:RFValue(16),margin:20,
                 // textAlignVertical: "center"
                }}
                />
              )} 


            {question.type === "text" &&  question.options.length === 0 && question.title==="ایا تا بحال از مکمل خاصی استفاده کرده اید  لطفا نام ببرید ؟" && (
                <TextInput
                //  keyboardType="numeric"
                  onChangeText={handleChange('mokamel')}
                  onBlur={handleBlur('mokamel')}
                  value={values.mokamel}
                  placeholder="...."
                 placeholderTextColor="#f50"
                 numberOfLines={2}
                  style={{width:width-50,alignSelf:"center",backgroundColor:"#fff", textAlign: "center", 
                 
                  borderRadius: 20,fontSize:RFValue(16),margin:20,
                 // textAlignVertical: "center"
                }}
                />
              )} 




            {question.type === "text" &&  question.options.length === 0 && question.title==="شغل شما چیست ؟" && (
                <TextInput
                //  keyboardType="numeric"
                  onChangeText={handleChange('career')}
                  onBlur={handleBlur('career')}
                  value={values.career}
                  placeholder="...."
                 placeholderTextColor="#f50"
                // numberOfLines={2}
                  style={{width:width-50,alignSelf:"center",backgroundColor:"#fff", textAlign: "center", 
                 
                  borderRadius: 20,fontSize:RFValue(16),margin:20,
                 // textAlignVertical: "center"
                }}
                />
              )} 




            {question.type === "text" &&  question.options.length === 0 && question.title==="در صورت داشتن بیماری خاص انرا توضیح دهید " && (
                <TextInput
                //  keyboardType="numeric"
                  onChangeText={handleChange('sillness')}
                  onBlur={handleBlur('sillness')}
                  value={values.sillness}
                  placeholder="...."
                 placeholderTextColor="#f50"
                // numberOfLines={2}
                  style={{width:width-50,alignSelf:"center",backgroundColor:"#fff", textAlign: "center", 
                 
                  borderRadius: 20,fontSize:RFValue(16),margin:20,
                 // textAlignVertical: "center"
                }}
                />
              )} 



            {question.type === "text" &&  question.options.length === 0 && question.title==="ایا شما در خانواده و محل کار تنها شخصی هستید که ورزش و رژیم خاصی دارد ؟" && (
                <TextInput
                //  keyboardType="numeric"
                  onChangeText={handleChange('rva')}
                  onBlur={handleBlur('rva')}
                  value={values.rva}
                  placeholder="...."
                 placeholderTextColor="#f50"
                // numberOfLines={2}
                  style={{width:width-50,alignSelf:"center",backgroundColor:"#fff", textAlign: "center", 
                 
                  borderRadius: 20,fontSize:RFValue(16),margin:20,
                 // textAlignVertical: "center"
                }}
                />
              )} 




            


               
<View style={{ flexDirection: 'row-reverse', 
                 alignItems: 'center',
                 justifyContent:"space-around" ,
                flexWrap:"wrap"
                  }}>
              {question && question.type === "checkbox" && question.title==="من با توجه به شکستهای گذشته در مورد رژیم های قبل  هم اکنون برای شروع دو باره ...." &&(
             question.options.map(option=>
              
              <View 
             // style={{backgroundColor:"#ff0"}} 
              key={option.id}>
             
             <Checkbox.Item
            label={option.content}
         
            status={values.agree  === option.id ? 'checked' : 'unchecked'}
          //  onPress={() => handleChange('agree')}

          onPress={() => {
          
            setFieldValue('agree', option.id);
          //  handleChange('values.agree')(option.id);
          }}
          />

                                  
                                  </View>
                               
              )
              )} 
              </View>





               
            {/* <View style={{ flexDirection: 'row-reverse', 
                 alignItems: 'center',
                 justifyContent:"space-around" ,
              //   flexWrap:"wrap"
                  }}>
              {question && question.type === 'radio' && question.title==="ایا اخر هفته ها دور همی خاصی دارید که در ان غذاهای زیادی مصرف میشود ؟"  &&(
             question.options.map(option=>
              
              <View 
             // style={{backgroundColor:"#ff0"}} 
              key={option.id}>
             
                              <RadioButton.Item
                                    label={option.content}
                                    value={option.id}
                                    status={values.selectedOptiondorhamii === option.id ? 'checked' : 'unchecked'}
                                 
                                    onPress={() => {
                                    //  handleChange('selectedOption')(option.id);
                                    //  setFieldTouched('selectedOption', true, false);
                                  
         // handleChange(()=>values.selectedOption = option.id);
        // console.log("first",values.selectedOption = option.id  )


         // Update the Formik state using setFieldValue
         setFieldValue('selectedOptiondorhamii', option.id);
                                    }}
                                  />
                                  
                                  </View>
                               
              )
              )} 
              </View> */}














               
                 <View style={{ flexDirection: 'row-reverse', 
                 alignItems: 'center',
                 justifyContent:"space-around" ,
              //   flexWrap:"wrap"
                  }}>
              {question && question.type === 'radio' && question.title==="نوع فعالیت شما" &&(
             question.options.map(option=>
              
              <View 
             // style={{backgroundColor:"#ff0"}} 
              key={option.id}>
             
                              <RadioButton.Item
                                    label={option.content}
                                    value={option.id}
                                    status={values.selectedOption === option.id ? 'checked' : 'unchecked'}
                                 
                                    onPress={() => {
                                    //  handleChange('selectedOption')(option.id);
                                    //  setFieldTouched('selectedOption', true, false);
                                  
         // handleChange(()=>values.selectedOption = option.id);
        // console.log("first",values.selectedOption = option.id  )


         // Update the Formik state using setFieldValue
         setFieldValue('selectedOption', option.id);
                                    }}
                                  />
                                  
                                  </View>
                               
              )
              )} 
              </View>







<View style={{ flexDirection: 'row-reverse', alignItems: 'center',justifyContent:"space-around" }}>
              {question.type === 'radio' && question.title=== "نوع جنسیت" &&(
             question.options.map(option1=>
              
              <View 
          //   style={{backgroundColor:"#f0f"}} 
              key={option1.id}>
             
                              <RadioButton.Item
                                    label={option1.content}
                                    value={option1.id}
                                    status={values.selectedOptionsex === option1.id ? 'checked' : 'unchecked'}
                                 
                                    onPress={() => {
                                     // handleChange('selectedOptionsex')(option1.id);
                                      //setFieldTouched('selectedOption', true, false);
                                   setFieldValue('selectedOptionsex', option1.id);
                                    }}
                                  />
                                  
                                  </View>
                               
              )
              )} 
              </View>



<View style={{ flexDirection: 'row-reverse', alignItems: 'center',justifyContent:"space-around" }}>
              {question.type === 'radio' && question.title===  "ایا تا به حال رژیم غذایی گرفته اید؟ "&&(
             question.options.map(option2=>
              
              <View 
            //  style={{backgroundColor:"#f9f"}} 
              key={option2.id}>
             
                              <RadioButton.Item
                                    label={option2.content}
                                    value={option2.id}
                                    status={values.selectedOptionregim === option2.id ? 'checked' : 'unchecked'}
                                 
                                    onPress={() => {
                                    //  handleChange('selectedOptionregim')(option2.id);
                                    //  setFieldTouched('selectedOption', true, false);
                                    setFieldValue('selectedOptionregim', option2.id);
                                    }}
                                  />
                                  
                                  </View>
                               
              )
              )} 
              </View>






<View style={{ flexDirection: 'row-reverse', alignItems: 'center',justifyContent:"space-around" }}>
              {question.type === 'radio' && question.title===  "ایا رژیم شما ورزشی بوده است ؟"&&(
             question.options.map(option2=>
              
              <View 
             // style={{backgroundColor:"#ff8"}} 
              key={option2.id}>
             
                              <RadioButton.Item
                                    label={option2.content}
                                    value={option2.id}
                                    status={values.selectedOptionregim1 === option2.id ? 'checked' : 'unchecked'}
                                 
                                    onPress={() => {
                                     // handleChange('selectedOptionregim1')(option2.id);
                                    //  setFieldTouched('selectedOption', true, false);
                                    setFieldValue('selectedOptionregim1', option2.id);
                                    }}
                                  />
                                  
                                  </View>
                               
              )
              )} 
              </View>






<View style={{ flexDirection: 'row-reverse', alignItems: 'center',justifyContent:"space-around" }}>
              {question.type === 'radio' && question.title===  "ایا بعد از اتمام دوره چک اپ پزشکی گرفته بودید ؟"&&(
             question.options.map(option2=>
              
              <View 
             // style={{backgroundColor:"#6f8"}} 
              key={option2.id}>
             
                              <RadioButton.Item
                                    label={option2.content}
                                    value={option2.id}
                                    status={values.selectedOptioncheckup === option2.id ? 'checked' : 'unchecked'}
                                 
                                    onPress={() => {
                                      //handleChange('selectedOptioncheckup')(option2.id);
                                    //  setFieldTouched('selectedOption', true, false);
                                    setFieldValue('selectedOptioncheckup', option2.id);
                                    }}
                                  />
                                  
                                  </View>
                               
              )
              )} 
              </View>





{/* 
<View style={{ flexDirection: 'row-reverse', alignItems: 'center',justifyContent:"space-around" }}>
              {question.type === 'radio' && question.title=== "علت شما از ورزش کردن و رژیم گرفتن چیست ؟"  &&(
             question.options.map(option2=>
              
              <View 
              style={{backgroundColor:"#6f8"}} 
              key={option2.id}>
             
                              <RadioButton.Item
                                    label={option2.content}
                                    value={option2.id}
                                    status={values.selectedOptiondalil=== option2.id ? 'checked' : 'unchecked'}
                                 
                                    onPress={() => {
                                      handleChange('selectedOptiondalil')(option2.id);
                                    //  setFieldTouched('selectedOption', true, false);
                                    }}
                                  />
                                  
                                  </View>
                               
              )
              )} 
              </View> */}






<View style={{ flexDirection: 'row-reverse', alignItems: 'center',justifyContent:"space-around" }}>
              {question.type === 'radio' && question.title=== "ایا اخر هفته ها دور همی خاصی دارید که در ان غذاهای زیادی مصرف میشود ؟"   &&(
             question.options.map(option2=>
              
              <View 
            //  style={{backgroundColor:"#6f8"}} 
              key={option2.id}>
             
                              <RadioButton.Item
                                    label={option2.content}
                                    value={option2.id}
                                    status={values.selectedOptiondorhami=== option2.id ? 'checked' : 'unchecked'}
                                 
                                    onPress={() => {
                                    //  handleChange('selectedOptiondorhami')(option2.id);
                                    //  setFieldTouched('selectedOption', true, false);
                                    setFieldValue('selectedOptiondorhami', option2.id);
                                    }}
                                  />
                                  
                                  </View>
                               
              )
              )} 
              </View> 






<View style={{ flexDirection: 'row-reverse', alignItems: 'center',justifyContent:"space-around",flexWrap:"wrap" }}>
              {question.type === 'radio' && question.title==="برای شما کدام گزینه مهم است ؟"    &&(
             question.options.map(option2=>
              
              <View 
            //  style={{backgroundColor:"#ff8"}} 
              key={option2.id}>
             
                              <RadioButton.Item
                                    label={option2.content}
                                    value={option2.id}
                                    status={values.selectedOptionimportant=== option2.id ? 'checked' : 'unchecked'}
                                 
                                    onPress={() => {
                                  //    handleChange('selectedOptionimportant')(option2.id);
                                    //  setFieldTouched('selectedOption', true, false);
                                    setFieldValue('selectedOptionimportant', option2.id);
                                    }}
                                  />
                                  
                                  </View>
                               
              )
              )} 
              </View> 
            


 {question.type === 'number' &&  question.title=== "از شماره ۱ تا ۱۰ چه نمره ای به رژیم قبل میدهید ؟"&& (
                <TextInput
                  keyboardType="numeric"
                  onChangeText={handleChange('score')}
                  onBlur={handleBlur('score')}
                  value={values.score}
                  placeholder="شماره را وارد کنید!"
                  placeholderTextColor="#f50"
                  
                  style={{width:width-50,alignSelf:"center",backgroundColor:"#fff", textAlign: "center", 
                 
                  borderRadius: 20,fontSize:RFValue(16),margin:20,
                 // textAlignVertical: "center"
                }}
                />
              )} 

              {/* {errors[question.title] && (
                <Text style={{ color: 'red' }}>{errors[question.title]}</Text>
              )} */}
            </View>
          ))}
         
            
{/* 
<Button style={{width:width}} title="ارسال" onPress={handleSubmit} /> */}
<TouchableOpacity style={{alignSelf:"center"}} onPress={handleSubmit} >
  <Text style={{color:"red",fontSize:RFValue(22)}}>ارسال اطلاعات</Text>
</TouchableOpacity>

 

        </ScrollView >
      )}
    </Formik>

    </View>
  )
}

export { Questionsdiet}
////////////////////////////////////////////
// import React, { useState } from 'react';
// import { View } from 'react-native';
// import { RadioButton, Text, TextInput, Button } from 'react-native-paper';
// import { Formik } from 'formik';
//  import * as Yup from 'yup';

// const  Questionsdiet = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

  

//   // اینجا props را از ورودی یا context دریافت کنید
//   // const handleSubmit = () => {
//   //   // اطلاعات فرم را به سرور ارسال یا بررسی کنید
//   //   console.log('Selected Option:', selectedOption);
//   // };

//   // اینجا props را از ورودی یا context دریافت کنید
//   const { title, options } = {
//     "id": "10",
//     "course_id": "0",
//     "type": "radio",
//     "title": "ایا تا به حال رژیم غذایی گرفته اید؟ ",
//     "required": "1",
//     "options": [
//       {
//         "id": "17",
//         "question_id": "10",
//         "content": "بلی"
//       },
//       {
//         "id": "18",
//         "question_id": "10",
//         "content": "خیر"
//       }
//     ]
//   };
//   const validationSchema = Yup.object().shape({
//         selectedOption: Yup.string().required('Please select an option'),
//       });
    
//       const handleSubmit = (values) => {
//         console.log('Selected Option:', values.selectedOption);
//         // Add your form submission logic here
//       };
//   return (
//     <Formik
//           initialValues={{ selectedOption: null }}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ values, handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
//             <View style={{ flex: 1 }}>
//               <Text>{title}</Text>
//               <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
//                 {options.map((option) => (
//                   <View key={option.id}>
//                     <RadioButton.Item
//                       label={option.content}
//                       value={option.id}
//                       status={values.selectedOption === option.id ? 'checked' : 'unchecked'}
                   
//                       onPress={() => {
//                         handleChange('selectedOption')(option.id);
//                         setFieldTouched('selectedOption', true, false);
//                       }}
//                     />
//                     <Text>kjhjhgjghuj</Text>
//                   </View>
//                 ))}
//               </View>
//               {touched.selectedOption && errors.selectedOption && (
//                 <Text style={{ color: 'red' }}>{errors.selectedOption}</Text>
//               )}
//               <Button mode="contained" onPress={handleSubmit}>
//                 Submit
//               </Button>
//             </View>
//           )}
//         </Formik>
//   );
// };

// export  { Questionsdiet}

































//////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// const  Questionsdiet = () => {


//   //const [checkBoxes, setCheckBoxes] = useState([]);
//   const [selectedCheckBoxId, setSelectedCheckBoxId] = useState(null);
//   const [checkBoxes, setCheckBoxes] = useState([
//     { id: 1, label: 'Option 1', isChecked: false },
//     { id: 2, label: 'Option 2', isChecked: false },
//     { id: 3, label: 'Option 3', isChecked: false },
//   ]);

//   // const toggleCheckBox = (id) => {
//   //   setCheckBoxes((prevCheckBoxes) =>
//   //     prevCheckBoxes.map((checkBox) =>
//   //       checkBox.id === id ? { ...checkBox, isChecked: !checkBox.isChecked } : checkBox
//   //     )
//   //   );
//   // };
//   const toggleCheckBox = (id) => {
//     setCheckBoxes((prevCheckBoxes) =>
//       prevCheckBoxes.map((checkBox) =>
//         checkBox.id === id
//           ? { ...checkBox, isChecked: !checkBox.isChecked }
//           : { ...checkBox, isChecked: false } // غیرفعال کردن تمام checkbox های دیگر
//       )
//     );
//   };
//   //////////////////////////////////////////////////////////////
//   const [selectedId, setSelectedId] = useState(null);

//   const radioButtons = [
//     { id: 1, label: 'Option 1' },
//     { id: 2, label: 'Option 2' },
//     { id: 3, label: 'Option 3' },
//   ];

//   const handleRadioButtonClick = (id) => {
//     setSelectedId(id);
//   };

//   return (
//     <View>
//       {checkBoxes.map((checkBox) => (
//         <TouchableOpacity key={checkBox.id} onPress={() => toggleCheckBox(checkBox.id)}>
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <View
//               style={{
//                 width: 20,
//                 height: 20,
//                 borderWidth: 1,
//                 borderColor: 'black',
//                 backgroundColor: checkBox.isChecked ? 'blue' : 'white',
//               }}
//             />
//             <Text>{checkBox.label}</Text>
//           </View>
//         </TouchableOpacity>
//       ))}




// {radioButtons.map((radioButton) => (
//         <TouchableOpacity
//           key={radioButton.id}
//           onPress={() => handleRadioButtonClick(radioButton.id)}
//         >
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <View
//               style={{
//                 width: 20,
//                 height: 20,
//                 borderWidth: 1,
//                 borderColor: 'black',
//                 backgroundColor: radioButton.id === selectedId ? 'blue' : 'white',
//                 borderRadius: 10,
//               }}
//             />
//             <Text>{radioButton.label}</Text>
//           </View>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// export  { Questionsdiet}
////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import { View } from 'react-native';
// import { RadioButton, Text, TextInput, Button } from 'react-native-paper';

// const  Questionsdiet = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionChange = (optionId) => {
//     setSelectedOption(optionId);
//   };

//   // اینجا props را از ورودی یا context دریافت کنید
//   const handleSubmit = () => {
//     // اطلاعات فرم را به سرور ارسال یا بررسی کنید
//     console.log('Selected Option:', selectedOption);
//   };

//   // اینجا props را از ورودی یا context دریافت کنید
//   const { title, options } = {
//     "id": "10",
//     "course_id": "0",
//     "type": "radio",
//     "title": "ایا تا به حال رژیم غذایی گرفته اید؟ ",
//     "required": "1",
//     "options": [
//       {
//         "id": "17",
//         "question_id": "10",
//         "content": "بلی"
//       },
//       {
//         "id": "18",
//         "question_id": "10",
//         "content": "خیر"
//       }
//     ]
//   };

//   return (
//     <View style={{ flex:1 }}>
    
//       <Text>{title}</Text>
//       <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
//       {options.map((option) => (
//     <View key={option.id}>
//           <RadioButton.Item
//             label={option.content}
//             value={option.id}
//             status={selectedOption === option.id ? 'checked' : 'unchecked'}
//             onPress={() => handleOptionChange(option.id)}
//           />
//           <Text>kjhjhgjghuj</Text>
//         </View>
        
//       ))}
//       </View>
//       <Button mode="contained" onPress={handleSubmit}>
//         Submit
//       </Button>
//     </View>
//   );
// };

// export  { Questionsdiet}
///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import { RadioButton, TextInput, Button } from 'react-native-paper';

// const DynamicForm = ({ questions }) => {
//   const [formData, setFormData] = useState({});

//   const handleOptionChange = (questionId, optionId) => {
//     setFormData((prevData) => ({ ...prevData, [questionId]: optionId }));
//   };

//   const handleNumberChange = (questionId, value) => {
//     setFormData((prevData) => ({ ...prevData, [questionId]: value }));
//   };

//   const handleSubmit = () => {
//     // اطلاعات فرم را به سرور ارسال یا بررسی کنید
//     console.log('Form Data:', formData);
//   };

//   return (
//     <View>
//       {questions.map((question) => (
//         <View key={question.id}>
//           <Text>{question.title}</Text>
//           {question.type === 'radio' && (
//             <>
//               {question.options.map((option) => (
//                 <View key={option.id}>
//                   <RadioButton.Item
//                     label={option.content}
//                     value={option.id}
//                     status={formData[question.id] === option.id ? 'checked' : 'unchecked'}
//                     onPress={() => handleOptionChange(question.id, option.id)}
//                   />
//                 </View>
//               ))}
//             </>
//           )}
//           {question.type === 'number' && (
//             <TextInput
//               label={question.title}
//               value={formData[question.id] ? String(formData[question.id]) : ''}
//               keyboardType="numeric"
//               onChangeText={(value) => handleNumberChange(question.id, value)}
//             />
//           )}
//         </View>
//       ))}
//       <Button mode="contained" onPress={handleSubmit}>
//         Submit
//       </Button>
//     </View>
//   );
// };

// export default DynamicForm;
// //////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import { View, Text } from 'react-native';
// import { useFormik } from 'formik';
// import { RadioButton, TextInput, Button } from 'react-native-paper';
// import * as Yup from 'yup';

// const DynamicForm = ({ questions }) => {
//   const initialValues = {};
//   questions.forEach((question) => {
//     initialValues[question.id] = question.type === 'number' ? '' : null;
//   });

//   const validationSchema = Yup.object().shape({
//     // اینجا می‌توانید نیازمندی‌ها را به تفصیل تعیین کنید
//   });

//   const onSubmit = (values) => {
//     // اطلاعات فرم را به سرور ارسال یا بررسی کنید
//     console.log('Form Data:', values);
//   };

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit,
//   });

//   return (
//     <View>
//       {questions.map((question) => (
//         <View key={question.id}>
//           <Text>{question.title}</Text>
//           {question.type === 'radio' && (
//             <>
//               {question.options.map((option) => (
//                 <View key={option.id}>
//                   <RadioButton.Item
//                     label={option.content}
//                     value={option.id}
//                     status={formik.values[question.id] === option.id ? 'checked' : 'unchecked'}
//                     onPress={() => formik.setFieldValue(question.id, option.id)}
//                   />
//                 </View>
//               ))}
//             </>
//           )}
//           {question.type === 'number' && (
//             <TextInput
//               label={question.title}
//               value={formik.values[question.id]}
//               keyboardType="numeric"
//               onChangeText={(value) => formik.setFieldValue(question.id, value)}
//               onBlur={() => formik.setFieldTouched(question.id)}
//               error={formik.touched[question.id] && formik.errors[question.id]}
//             />
//           )}
//         </View>
//       ))}
//       <Button mode="contained" onPress={formik.handleSubmit}>
//         Submit
//       </Button>
//     </View>
//   );
// };

// export default DynamicForm;
/////////////////////////////////////////////////////////////////////////////////////////////////



// import React from 'react';
// import { View } from 'react-native';
// import { RadioButton, Text, Button } from 'react-native-paper';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// const QuestionsDiet = () => {
//   const { title, options } = {
//     "id": "10",
//     "course_id": "0",
//     "type": "radio",
//     "title": "ایا تا به حال رژیم غذایی گرفته اید؟ ",
//     "required": "1",
//     "options": [
//       {
//         "id": "17",
//         "question_id": "10",
//         "content": "بلی"
//       },
//       {
//         "id": "18",
//         "question_id": "10",
//         "content": "خیر"
//       }
//     ]
//   };

//   const validationSchema = Yup.object().shape({
//     selectedOption: Yup.string().required('Please select an option'),
//   });

//   const handleSubmit = (values) => {
//     console.log('Selected Option:', values.selectedOption);
//     // Add your form submission logic here
//   };

//   return (
   
//     <Formik
//       initialValues={{ selectedOption: null }}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ values, handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
//         <View style={{ flex: 1 }}>
//           <Text>{title}</Text>
//           <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
//             {options.map((option) => (
//               <View key={option.id}>
//                 <RadioButton.Item
//                   label={option.content}
//                   value={option.id}
//                   status={values.selectedOption === option.id ? 'checked' : 'unchecked'}
//                   onPress={() => {
//                     handleChange('selectedOption')(option.id);
//                     setFieldTouched('selectedOption', true, false);
//                   }}
//                 />
//                 <Text>kjhjhgjghuj</Text>
//               </View>
//             ))}
//           </View>
//           {touched.selectedOption && errors.selectedOption && (
//             <Text style={{ color: 'red' }}>{errors.selectedOption}</Text>
//           )}
//           <Button mode="contained" onPress={handleSubmit}>
//             Submit
//           </Button>
//         </View>
//       )}
//     </Formik>
   
//   );
// };

// export {QuestionsDiet };
/////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import { View } from 'react-native';
// import { RadioButton, Text, TextInput, Button } from 'react-native-paper';
// import { Formik } from 'formik';
//  import * as Yup from 'yup';

// const  Questionsdiet = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

  

//   // اینجا props را از ورودی یا context دریافت کنید
//   // const handleSubmit = () => {
//   //   // اطلاعات فرم را به سرور ارسال یا بررسی کنید
//   //   console.log('Selected Option:', selectedOption);
//   // };

//   // اینجا props را از ورودی یا context دریافت کنید
//   const { title, options } = {
//     "id": "10",
//     "course_id": "0",
//     "type": "radio",
//     "title": "ایا تا به حال رژیم غذایی گرفته اید؟ ",
//     "required": "1",
//     "options": [
//       {
//         "id": "17",
//         "question_id": "10",
//         "content": "بلی"
//       },
//       {
//         "id": "18",
//         "question_id": "10",
//         "content": "خیر"
//       }
//     ]
//   };
//   const validationSchema = Yup.object().shape({
//         selectedOption: Yup.string().required('Please select an option'),
//       });
    
//       const handleSubmit = (values) => {
//         console.log('Selected Option:', values.selectedOption);
//         // Add your form submission logic here
//       };
//   return (
//     <Formik
//           initialValues={{ selectedOption: null }}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ values, handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
//             <View style={{ flex: 1 }}>
//               <Text>{title}</Text>
//               <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
//                 {options.map((option) => (
//                   <View key={option.id}>
//                     <RadioButton.Item
//                       label={option.content}
//                       value={option.id}
//                       status={values.selectedOption === option.id ? 'checked' : 'unchecked'}
                   
//                       onPress={() => {
//                         handleChange('selectedOption')(option.id);
//                         setFieldTouched('selectedOption', true, false);
//                       }}
//                     />
//                     <Text>kjhjhgjghuj</Text>
//                   </View>
//                 ))}
//               </View>
//               {touched.selectedOption && errors.selectedOption && (
//                 <Text style={{ color: 'red' }}>{errors.selectedOption}</Text>
//               )}
//               <Button mode="contained" onPress={handleSubmit}>
//                 Submit
//               </Button>
//             </View>
//           )}
//         </Formik>
//   );
// };

// export  { Questionsdiet}