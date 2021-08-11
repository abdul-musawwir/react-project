import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  heading: {
      fontSize: 30,
      textAlign: 'center',
      color: 'blue'
  },
  head: {
      paddingTop: 20 
  },
  subheading: {
    paddingTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
      width: 200,
      height: 130
  },
  line: {
      height: 5,
      backgroundColor: 'black'
  }
});

// Create Document Component
const DocDownload = ({data}) => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
        <View style={styles.head}>
            <Text style={styles.heading}>Crescent Steels and Allied</Text>
            <Text style={styles.heading}> Products Limited</Text>
        </View>
        <Text style={styles.subheading} >Outsider Visitor Record</Text>
        <Text style={styles.line} ></Text>
      {data.map((item)=>(
          <View style={styles.section} wrap={false}>
          <Text>Name:{item.name}</Text>
          <Text>CNIC: {item.cnic}</Text>
          <Text>Person Count: {item.Person_Count}</Text>
          <Text>Organization Name: {item.organization_name}</Text>
          <Text>Check In Date: {item.Check_In_Date}</Text>
          <Text>Check Out Date: {item.Check_Out_Date}</Text>
          <Text>Contact Person: {item.Contact_Person}</Text>
          <Text>Visit Purpose: {item.Visit_Purpose}</Text>
          <Text>Picture: </Text>{item.picture?<Image style={styles.image} src={item.picture} alt="null" />:<Text>No Picture</Text>}
        </View>
      ))}
    </Page>
  </Document>
);

export default DocDownload;