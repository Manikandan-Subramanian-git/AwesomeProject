import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    constainer:{
     backgroundColor: "#FDF8F1"
    },
    header_wrapper:{
      display:"flex",
      flexDirection:"row" ,
      paddingHorizontal:16,
      paddingVertical:10,
      justifyContent:"space-between",
      borderBottomWidth:1,
      borderBottomColor:"grey"
    },
    inner_content:{
       display:"flex",
       flexDirection:"row" ,
       gap:8
    },
    location_text:{
        fontSize:14,
        fontWeight:"400"
    },
    second_header_wrapper:{
        display:"flex",
        flexDirection:"row",
         paddingHorizontal:16,
      paddingVertical:10,
      justifyContent:"space-between"
    },
    header_right_wrapper:{
        display:"flex",
       flexDirection:"row" , 
       gap:15
    }

})